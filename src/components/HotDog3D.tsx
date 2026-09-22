"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function buildDog(): THREE.Group {
  const dog = new THREE.Group();
  const mat = (color: string, roughness = 0.55) =>
    new THREE.MeshStandardMaterial({ color, roughness });

  // Plate
  const plate = new THREE.Mesh(new THREE.CylinderGeometry(2.7, 2.9, 0.16, 40), mat("#FFF6E5", 0.8));
  plate.position.y = -1.15;
  dog.add(plate);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.07, 12, 48), mat("#C1272D", 0.5));
  rim.rotation.x = Math.PI / 2;
  rim.position.y = -1.07;
  dog.add(rim);

  // Bottom bun: flattened capsule lying along X
  const bunGeo = new THREE.CapsuleGeometry(0.85, 2.4, 8, 20);
  const bottomBun = new THREE.Mesh(bunGeo, mat("#F0C976"));
  bottomBun.rotation.z = Math.PI / 2;
  bottomBun.scale.set(1, 0.55, 0.9);
  bottomBun.position.y = -0.55;
  dog.add(bottomBun);

  // Frank
  const frank = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 2.5, 8, 20), mat("#9C3D26", 0.45));
  frank.rotation.z = Math.PI / 2;
  frank.position.y = 0.05;
  dog.add(frank);

  // Mustard zigzag: small flattened spheres along the frank
  const mustard = mat("#FFB800", 0.4);
  for (let i = 0; i < 7; i++) {
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 12), mustard);
    dot.position.set(-1.35 + i * 0.45, 0.48, (i % 2 === 0 ? 0.12 : -0.12));
    dot.scale.y = 0.6;
    dog.add(dot);
  }

  // Relish bits
  const relish = mat("#4A7C2E", 0.6);
  const relishSpots: [number, number][] = [[-0.9, 0.2], [-0.3, -0.2], [0.4, 0.18], [1.0, -0.15], [0.1, 0.28]];
  for (const [x, z] of relishSpots) {
    const bit = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.14, 0.2), relish);
    bit.position.set(x, 0.42, z);
    bit.rotation.y = x;
    dog.add(bit);
  }

  // Tomato wedges
  const tomato = mat("#D94F3D", 0.5);
  for (const x of [-0.6, 0.7]) {
    const wedge = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 0.14, 3), tomato);
    wedge.position.set(x, 0.35, 0.42);
    wedge.rotation.y = x * 2;
    dog.add(wedge);
  }

  // Pickle spear laid across
  const pickle = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 1.6, 6, 12), mat("#5C7A3A", 0.5));
  pickle.rotation.z = Math.PI / 2;
  pickle.rotation.y = 0.25;
  pickle.position.set(0.1, 0.62, -0.1);
  dog.add(pickle);

  dog.traverse((o) => {
    if (o instanceof THREE.Mesh) {
      o.castShadow = true;
      o.receiveShadow = true;
    }
  });
  return dog;
}

export default function HotDog3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 2.2, 7.2);
    camera.lookAt(0, -0.2, 0);

    scene.add(new THREE.HemisphereLight(0xfff6e5, 0x201512, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(4, 6, 4);
    key.castShadow = true;
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffb800, 0.4);
    fill.position.set(-5, 2, -3);
    scene.add(fill);

    const dog = buildDog();
    scene.add(dog);

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(mount);

    let raf = 0;
    let spin = reduced ? 0.6 : 0;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let lastInteract = 0;
    const start = performance.now();

    if (reduced) {
      dog.rotation.y = spin;
      renderer.render(scene, camera);
    } else {
      const tick = (now: number) => {
        raf = requestAnimationFrame(tick);
        const t = (now - start) / 1000;
        if (!dragging) {
          velocity *= 0.95;
          spin += 0.008 + velocity;
          if (now - lastInteract > 2500) spin += 0.004;
        }
        dog.rotation.y = spin;
        dog.position.y = Math.sin(t * 1.4) * 0.12;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(tick);
    }

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastInteract = performance.now();
      mount.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      spin += dx * 0.01;
      velocity = dx * 0.01;
      lastInteract = performance.now();
    };
    const onUp = () => {
      dragging = false;
    };
    mount.addEventListener("pointerdown", onDown);
    mount.addEventListener("pointermove", onMove);
    mount.addEventListener("pointerup", onUp);
    mount.style.touchAction = "pan-y";

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mount.removeEventListener("pointerdown", onDown);
      mount.removeEventListener("pointermove", onMove);
      mount.removeEventListener("pointerup", onUp);
      scene.traverse((o) => {
        if (o instanceof THREE.Mesh) {
          o.geometry.dispose();
          (o.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      role="img"
      aria-label="Interactive 3D hot dog. Drag sideways to spin it."
      style={{ width: "100%", height: "100%", minHeight: 320, cursor: "grab" }}
    />
  );
}
