export type MenuItem = {
  id: string;
  name: string;
  desc: string;
  price: string;
  tags?: string[];
  img?: { src: string; alt: string; w: number; h: number };
  ingredients: string[];
  story: string;
  pairs: string[];
  kcal: string;
};

export const MENU: { group: string; blurb: string; items: MenuItem[] }[] = [
  {
    group: "Classics",
    blurb: "Steamed poppyseed buns, all-beef franks with a real snap.",
    items: [
      {
        id: "classic", name: "Classic Chicago",
        desc: "Mustard, neon relish, onion, tomato wedges, pickle spear, sport peppers, celery salt.", price: "$6.75",
        img: { src: "/images/classic.jpg", alt: "Classic Chicago dog with neon relish and mustard zigzag", w: 1024, h: 768 },
        ingredients: ["All-beef frank", "Poppyseed bun", "Yellow mustard", "Neon relish", "White onion", "Tomato wedges", "Pickle spear", "Sport peppers", "Celery salt"],
        story: "The dog that built the stand. Reuben's grandfather made it exactly this way, and the recipe on the wall hasn't changed a comma since 2016.",
        pairs: ["Crinkle Fries", "Fresh Lemonade"], kcal: "480",
      },
      {
        id: "plain", name: "Plain Snap",
        desc: "Just the frank and the bun. Pick your condiment at the counter.", price: "$5.50",
        ingredients: ["All-beef frank", "Poppyseed bun", "Your pick of condiment"],
        story: "Purists order this to judge the frank on its own merits. It passes the test daily.",
        pairs: ["Pickle Boat", "Fountain Soda"], kcal: "340",
      },
      {
        id: "char", name: "Char Dog",
        desc: "Grilled over open flame, charred ends, grilled onions, mustard, pickles.", price: "$6.25",
        img: { src: "/images/char.jpg", alt: "Char-grilled dog with tomato, onion and pickle on a poppyseed bun", w: 1024, h: 768 },
        ingredients: ["All-beef frank", "Poppyseed bun", "Grilled onions", "Mustard", "Pickle chips"],
        story: "Weekends only at first, until customers staged a polite revolt. The open-flame grill now runs all week.",
        pairs: ["Cheese Fries", "Iced Tea"], kcal: "410",
      },
      {
        id: "kraut", name: "Kraut & Mustard",
        desc: "Warm sauerkraut, brown mustard, caraway salt on a toasted bun.", price: "$6.50",
        ingredients: ["All-beef frank", "Toasted bun", "Sauerkraut", "Brown mustard", "Caraway salt"],
        story: "A nod to the Maxwell Street polish stands. Big Al's kraut simmers four hours every morning.",
        pairs: ["Vinegar Slaw", "Fountain Soda"], kcal: "390",
      },
    ],
  },
  {
    group: "Loaded",
    blurb: "Our grill crew's greatest hits. Napkins strongly advised.",
    items: [
      {
        id: "chili-cheese", name: "Chili Cheese",
        desc: "Small-batch beef chili, aged cheddar, diced white onion.", price: "$8.75", tags: ["crowd favorite"],
        img: { src: "/images/chili.jpg", alt: "Chili cheese dog loaded with beef chili and shredded cheddar", w: 1024, h: 721 },
        ingredients: ["All-beef frank", "Poppyseed bun", "Beef chili", "Aged cheddar", "White onion"],
        story: "People's Choice at the West Loop Food Fest 2023. The chili recipe lives in a safe, and yes, that is a joke we will keep making.",
        pairs: ["Crinkle Fries", "Chocolate Shake"], kcal: "720",
      },
      {
        id: "bacon-ranch", name: "Bacon Ranch",
        desc: "Crisp bacon, ranch drizzle, chives, cracked pepper.", price: "$8.95",
        ingredients: ["All-beef frank", "Poppyseed bun", "Bacon", "Ranch", "Chives", "Cracked pepper"],
        story: "Invented during a staff meal in 2020. Lucia wrote it on the board as a joke special. It outsold everything that month.",
        pairs: ["Cheese Fries", "Fresh Lemonade"], kcal: "690",
      },
      {
        id: "elote", name: "Elote Dog",
        desc: "Charred corn crema, cotija, tajín, lime, cilantro.", price: "$9.25", tags: ["spicy"],
        img: { src: "/images/elote.jpg", alt: "Loaded dogs with mustard and relish beside fries and slaw", w: 1024, h: 680 },
        ingredients: ["All-beef frank", "Poppyseed bun", "Corn crema", "Cotija", "Tajín", "Lime", "Cilantro"],
        story: "Born on a slow Tuesday when the corn delivery was too good to waste. Now the thing people cross town for.",
        pairs: ["Vinegar Slaw", "Fresh Lemonade"], kcal: "640",
      },
      {
        id: "pimento", name: "Pimento Cheese",
        desc: "House pimento cheese, pickled jalapeños, scallions.", price: "$8.95",
        ingredients: ["All-beef frank", "Poppyseed bun", "Pimento cheese", "Pickled jalapeños", "Scallions"],
        story: "Ahaan's road-trip souvenir from a Nashville hot chicken joint, reimagined the Gold Star way.",
        pairs: ["Pickle Boat", "Iced Tea"], kcal: "660",
      },
      {
        id: "double", name: "Double Stack",
        desc: "Two franks, double chili, double cheddar. A two-napkin minimum.", price: "$11.50", tags: ["hungry?"],
        ingredients: ["Two all-beef franks", "Poppyseed bun", "Beef chili", "Aged cheddar", "White onion"],
        story: "Ordered after Bulls wins with religious fervor. Tom H., you know who you are.",
        pairs: ["Fountain Soda", "Frozen Custard Cup"], kcal: "1050",
      },
    ],
  },
  {
    group: "Garden",
    blurb: "Plant-based franks, same toppings bar, zero compromise.",
    items: [
      {
        id: "veg", name: "Veg Dog",
        desc: "Plant-based frank, mustard, relish, onion, tomato, pickle, sport peppers.", price: "$7.25", tags: ["veg"],
        ingredients: ["Plant-based frank", "Poppyseed bun", "Mustard", "Relish", "Onion", "Tomato", "Pickle", "Sport peppers"],
        story: "Elena R.'s review said it could convert people. She was right. This one outsells the Plain Snap.",
        pairs: ["Vinegar Slaw", "Iced Tea"], kcal: "380",
      },
      {
        id: "loaded-veg", name: "Loaded Veg",
        desc: "Plant-based frank, corn crema, cotija (or vegan cheese), tajín, lime.", price: "$8.50", tags: ["veg"],
        ingredients: ["Plant-based frank", "Poppyseed bun", "Corn crema", "Cotija or vegan cheese", "Tajín", "Lime"],
        story: "The elote build works so well that the veg version earned its own permanent slot in 2022.",
        pairs: ["Crinkle Fries", "Fresh Lemonade"], kcal: "520",
      },
    ],
  },
  {
    group: "Sides",
    blurb: "Cut fresh every morning. Salted with celery salt, obviously.",
    items: [
      {
        id: "fries", name: "Crinkle Fries",
        desc: "Extra-crispy crinkles, celery salt.", price: "$4.25", tags: ["veg"],
        img: { src: "/images/fries.jpg", alt: "Basket of golden crinkle-cut fries", w: 1920, h: 1281 },
        ingredients: ["Idaho potatoes", "Celery salt", "Fryer oil"],
        story: "Cut every morning, never frozen. The crinkle cut holds salt the way flat fries only dream about.",
        pairs: ["Classic Chicago", "Chocolate Shake"], kcal: "420",
      },
      {
        id: "cheese-fries", name: "Cheese Fries",
        desc: "Crinkles under a ladle of cheese sauce, pickled jalapeños on request.", price: "$6.50", tags: ["veg"],
        ingredients: ["Crinkle fries", "Cheese sauce", "Pickled jalapeños (optional)"],
        story: "The ladle of cheese sauce is measured by heart, not by ounce.",
        pairs: ["Char Dog", "Fountain Soda"], kcal: "640",
      },
      {
        id: "slaw", name: "Vinegar Slaw",
        desc: "Green cabbage, carrot, cider vinaigrette. Built for topping.", price: "$3.75", tags: ["veg", "gf"],
        ingredients: ["Green cabbage", "Carrot", "Cider vinaigrette"],
        story: "Made to go ON dogs as much as beside them. Try it on the kraut dog and report back.",
        pairs: ["Kraut & Mustard", "Iced Tea"], kcal: "120",
      },
      {
        id: "pickle-boat", name: "Pickle Boat",
        desc: "Half sour pickle, sport peppers, a shake of celery salt.", price: "$3.00", tags: ["veg", "gf"],
        ingredients: ["Half sour pickle", "Sport peppers", "Celery salt"],
        story: "For pickle people. You know if you are one.",
        pairs: ["Double Stack", "Fountain Soda"], kcal: "35",
      },
    ],
  },
  {
    group: "Sips & Sweets",
    blurb: "Spun shakes and old-school sodas to wash it all down.",
    items: [
      {
        id: "soda", name: "Fountain Soda",
        desc: "Coke, Diet Coke, Sprite, root beer, orange. Free refills dine-in.", price: "$2.75",
        ingredients: ["Your pick", "Ice", "Free refills (dine-in)"],
        story: "Root beer outsells cola two to one here. Chicago has opinions about root beer.",
        pairs: ["Chili Cheese", "Cheese Fries"], kcal: "150",
      },
      {
        id: "lemonade", name: "Fresh Lemonade",
        desc: "Squeezed daily. Strawberry in summer.", price: "$3.50",
        ingredients: ["Lemons", "Cane sugar", "Water", "Strawberry (summer)"],
        story: "Squeezed every morning. The summer strawberry version has a small but intense following.",
        pairs: ["Elote Dog", "Veg Dog"], kcal: "180",
      },
      {
        id: "iced-tea", name: "Iced Tea",
        desc: "Unsweet or peach. Brewed every two hours.", price: "$3.00",
        ingredients: ["Black tea", "Peach (optional)", "Ice"],
        story: "Brewed every two hours because day-old tea is a tragedy.",
        pairs: ["Char Dog", "Pimento Cheese"], kcal: "70",
      },
      {
        id: "choc-shake", name: "Chocolate Shake",
        desc: "Vanilla custard base, Dutch cocoa, whipped cream.", price: "$6.00",
        img: { src: "/images/shake.jpg", alt: "Chocolate shake with whipped cream in a tall diner glass", w: 1920, h: 1536 },
        ingredients: ["Vanilla custard", "Dutch cocoa", "Whipped cream"],
        story: "Thick enough to need the spoon that comes with it. Aisha B. crossed town for this shake and stayed for the dog.",
        pairs: ["Chili Cheese", "Crinkle Fries"], kcal: "780",
      },
      {
        id: "vanilla-shake", name: "Vanilla Shake",
        desc: "Vanilla custard base, real vanilla bean, whipped cream.", price: "$6.00",
        ingredients: ["Vanilla custard", "Vanilla bean", "Whipped cream"],
        story: "Real vanilla bean, visible as tiny black specks. The quiet overachiever of the menu.",
        pairs: ["Bacon Ranch", "Pickle Boat"], kcal: "720",
      },
      {
        id: "custard", name: "Frozen Custard Cup",
        desc: "Vanilla or the flavor of the week. Ask what's spinning.", price: "$5.00",
        ingredients: ["Frozen custard", "Weekly flavor"],
        story: "The weekly flavor is where the crew experiments. Past hits: malted pretzel, mango tajín, and one regrettable pickle week.",
        pairs: ["Double Stack", "Plain Snap"], kcal: "450",
      },
    ],
  },
];

export const SPECIALS: { day: number; name: string; desc: string }[] = [
  { day: 0, name: "Sunday Double-Header", desc: "Any two classics plus two fountain drinks for $16." },
  { day: 1, name: "Double Stack Monday", desc: "The Double Stack for $9.50, all day." },
  { day: 2, name: "Elote Tuesday", desc: "Elote Dog plus lemonade for $10.50." },
  { day: 3, name: "Windy City Wednesday", desc: "Classic Chicago plus fries for $9.25." },
  { day: 4, name: "Throwback Thursday", desc: "Plain Snap at its 2016 price: $4.00." },
  { day: 5, name: "Fry-Day", desc: "Free regular fries with any loaded dog." },
  { day: 6, name: "Shake Saturday", desc: "Half-price shakes with any dog after 5pm." },
];

export function todaysSpecial(day = new Date().getDay()) {
  return SPECIALS.find((s) => s.day === day) ?? SPECIALS[3];
}

export const ALL_ITEMS = MENU.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group })));

export const ALL_DOG_IDS = ALL_ITEMS.map((i) => i.id);

export function findItem(id: string) {
  return ALL_ITEMS.find((i) => i.id === id);
}

export const CATERING_PACKAGES = [
  {
    id: "backyard", name: "Backyard", desc: "Up to 30 guests, dog plus sides bar, drop-off with setup.", price: "from $299",
    serves: "10 to 30 guests", setup: "Drop-off with setup",
    includes: ["Choice of 3 dogs", "Sides bar: fries, slaw, pickles", "Buns, condiments, paper trays", "Labeled veg and gluten-free options", "30-minute setup and readout"],
    img: { src: "/images/party.jpg", alt: "Festival crowd with glowing food stalls at night", w: 1920, h: 1280 },
  },
  {
    id: "office", name: "Office Lunch", desc: "Up to 80 guests, drop-off plus setup, labeled dietary options.", price: "from $599",
    serves: "10 to 80 guests", setup: "Drop-off with setup",
    includes: ["Choice of 5 dogs", "Full sides bar plus shakes by the dozen", "Individually boxed option for meetings", "Labeled veg, vegan, and gluten-free options", "30-minute setup, pickup next day"],
    img: { src: "/images/elote.jpg", alt: "Loaded dogs with fries and slaw, ready to serve", w: 1024, h: 680 },
  },
  {
    id: "big-event", name: "Big Event", desc: "100-plus guests, on-site cart with grill crew.", price: "custom",
    serves: "50 to 500 guests", setup: "On-site cart with crew",
    includes: ["The cart, the grill, and the crew", "Full menu on site", "Custom menu board with your names on it", "Late-night service for weddings", "Needs a parking spot and one outlet"],
    img: { src: "/images/grill.jpg", alt: "Franks and sausages sizzling on the grill", w: 1920, h: 1280 },
  },
];

export function findPackage(id: string) {
  return CATERING_PACKAGES.find((p) => p.id === id);
}
