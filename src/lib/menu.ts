export type MenuItem = { id: string; name: string; desc: string; price: string; tags?: string[] };

export const MENU: { group: string; items: MenuItem[] }[] = [
  {
    group: "Classics",
    items: [
      { id: "classic", name: "Classic Chicago", desc: "Mustard, relish, onion, tomato, pickle, sport peppers, celery salt.", price: "$6.50" },
      { id: "plain", name: "Plain Snap", desc: "Steamed poppyseed bun, your choice of condiment.", price: "$5.00" },
    ],
  },
  {
    group: "Loaded",
    items: [
      { id: "chili-cheese", name: "Chili Cheese", desc: "Beef chili, cheddar, diced onion.", price: "$8.50", tags: ["crowd favorite"] },
      { id: "bacon-ranch", name: "Bacon Ranch", desc: "Bacon, ranch drizzle, chives.", price: "$8.75" },
    ],
  },
  {
    group: "Veggie + Sides",
    items: [
      { id: "veg", name: "Veg Dog", desc: "Plant-based frank, same toppings bar.", price: "$7.00", tags: ["veg"] },
      { id: "fries", name: "Crinkle Fries", desc: "Salt + celery salt.", price: "$3.75", tags: ["veg"] },
      { id: "soda", name: "Fountain Soda", desc: "Ask about rotating flavors.", price: "$2.50" },
    ],
  },
];

export const CATERING_PACKAGES = [
  { id: "backyard", name: "Backyard", desc: "Up to 30 guests, dog + sides bar.", price: "from $299" },
  { id: "office", name: "Office Lunch", desc: "Up to 80 guests, drop-off + setup.", price: "from $599" },
  { id: "big-event", name: "Big Event", desc: "100+ guests, on-site cart.", price: "custom" },
];
