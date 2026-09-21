export type MenuItem = { id: string; name: string; desc: string; price: string; tags?: string[]; img?: { src: string; alt: string; w: number; h: number } };

export const MENU: { group: string; blurb: string; items: MenuItem[] }[] = [
  {
    group: "Classics",
    blurb: "Steamed poppyseed buns, all-beef franks with a real snap.",
    items: [
      { id: "classic", name: "Classic Chicago", desc: "Mustard, neon relish, onion, tomato wedges, pickle spear, sport peppers, celery salt.", price: "$6.75", img: { src: "/images/classic.jpg", alt: "Classic Chicago dog with neon relish, tomato and pickle", w: 1280, h: 960 } },
      { id: "plain", name: "Plain Snap", desc: "Just the frank and the bun. Pick your condiment at the counter.", price: "$5.50" },
      { id: "char", name: "Char Dog", desc: "Grilled over open flame, charred ends, grilled onions, mustard, pickles.", price: "$6.25" },
      { id: "kraut", name: "Kraut & Mustard", desc: "Warm sauerkraut, brown mustard, caraway salt on a toasted bun.", price: "$6.50" },
    ],
  },
  {
    group: "Loaded",
    blurb: "Our grill crew's greatest hits. Napkins strongly advised.",
    items: [
      { id: "chili-cheese", name: "Chili Cheese", desc: "Small-batch beef chili, aged cheddar, diced white onion.", price: "$8.75", tags: ["crowd favorite"] },
      { id: "bacon-ranch", name: "Bacon Ranch", desc: "Crisp bacon, ranch drizzle, chives, cracked pepper.", price: "$8.95" },
      { id: "elote", name: "Elote Dog", desc: "Charred corn crema, cotija, tajín, lime, cilantro.", price: "$9.25", tags: ["spicy"] },
      { id: "pimento", name: "Pimento Cheese", desc: "House pimento cheese, pickled jalapeños, scallions.", price: "$8.95" },
      { id: "double", name: "Double Stack", desc: "Two franks, double chili, double cheddar. A two-napkin minimum.", price: "$11.50", tags: ["hungry?"] },
    ],
  },
  {
    group: "Garden",
    blurb: "Plant-based franks, same toppings bar, zero compromise.",
    items: [
      { id: "veg", name: "Veg Dog", desc: "Plant-based frank, mustard, relish, onion, tomato, pickle, sport peppers.", price: "$7.25", tags: ["veg"] },
      { id: "loaded-veg", name: "Loaded Veg", desc: "Plant-based frank, corn crema, cotija (or vegan cheese), tajín, lime.", price: "$8.50", tags: ["veg"] },
    ],
  },
  {
    group: "Sides",
    blurb: "Cut fresh every morning. Salted with celery salt, obviously.",
    items: [
      { id: "fries", name: "Crinkle Fries", desc: "Extra-crispy crinkles, celery salt.", price: "$4.25", tags: ["veg"], img: { src: "/images/fries.jpg", alt: "Basket of golden crinkle-cut fries", w: 1920, h: 1281 } },
      { id: "cheese-fries", name: "Cheese Fries", desc: "Crinkles under a ladle of cheese sauce, pickled jalapeños on request.", price: "$6.50", tags: ["veg"] },
      { id: "slaw", name: "Vinegar Slaw", desc: "Green cabbage, carrot, cider vinaigrette. Built for topping.", price: "$3.75", tags: ["veg", "gf"] },
      { id: "pickle-boat", name: "Pickle Boat", desc: "Half sour pickle, sport peppers, a shake of celery salt.", price: "$3.00", tags: ["veg", "gf"] },
    ],
  },
  {
    group: "Sips & Sweets",
    blurb: "Spun shakes and old-school sodas to wash it all down.",
    items: [
      { id: "soda", name: "Fountain Soda", desc: "Coke, Diet Coke, Sprite, root beer, orange. Free refills dine-in.", price: "$2.75" },
      { id: "lemonade", name: "Fresh Lemonade", desc: "Squeezed daily. Strawberry in summer.", price: "$3.50" },
      { id: "iced-tea", name: "Iced Tea", desc: "Unsweet or peach. Brewed every two hours.", price: "$3.00" },
      { id: "choc-shake", name: "Chocolate Shake", desc: "Vanilla custard base, Dutch cocoa, whipped cream.", price: "$6.00", img: { src: "/images/shake.jpg", alt: "Chocolate shake with whipped cream in a tall diner glass", w: 1920, h: 1536 } },
      { id: "vanilla-shake", name: "Vanilla Shake", desc: "Vanilla custard base, real vanilla bean, whipped cream.", price: "$6.00" },
      { id: "custard", name: "Frozen Custard Cup", desc: "Vanilla or the flavor of the week. Ask what's spinning.", price: "$5.00" },
    ],
  },
];

export const SPECIALS: { day: number; name: string; desc: string }[] = [
  { day: 0, name: "Sunday Double-Header", desc: "Any two classics + two fountain drinks for $16." },
  { day: 1, name: "Double Stack Monday", desc: "The Double Stack for $9.50, all day." },
  { day: 2, name: "Elote Tuesday", desc: "Elote Dog + lemonade for $10.50." },
  { day: 3, name: "Windy City Wednesday", desc: "Classic Chicago + fries for $9.25." },
  { day: 4, name: "Throwback Thursday", desc: "Plain Snap at its 2016 price — $4.00." },
  { day: 5, name: "Fry-Day", desc: "Free regular fries with any loaded dog." },
  { day: 6, name: "Shake Saturday", desc: "Half-price shakes with any dog after 5pm." },
];

export function todaysSpecial(day = new Date().getDay()) {
  return SPECIALS.find((s) => s.day === day) ?? SPECIALS[3];
}

export const ALL_DOG_IDS = MENU.flatMap((g) => g.items.map((i) => i.id));

export const CATERING_PACKAGES = [
  { id: "backyard", name: "Backyard", desc: "Up to 30 guests, dog + sides bar, drop-off with setup.", price: "from $299" },
  { id: "office", name: "Office Lunch", desc: "Up to 80 guests, drop-off + setup, labeled dietary options.", price: "from $599" },
  { id: "big-event", name: "Big Event", desc: "100+ guests, on-site cart with grill crew.", price: "custom" },
];
