import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <section id="menu" className="wrap" style={{ padding: "32px 20px" }}>
          <h2>Menu</h2>
          <p>Full menu board lands in the next task.</p>
        </section>
      </main>
    </>
  );
}
