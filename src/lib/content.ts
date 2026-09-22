export type Review = { name: string; source: string; date: string; rating: number; title: string; text: string };

export const REVIEWS: Review[] = [
  { name: "Priya S.", source: "Google", date: "August 2026", rating: 5, title: "The snap is real", text: "Dragged through the garden properly: tomato wedges, sport peppers, the works. Bun was steamed soft, frank had that snap you only get from a good all-beef dog. Best $7 I've spent downtown." },
  { name: "Marcus T.", source: "Yelp", date: "July 2026", rating: 5, title: "Elote dog supremacy", text: "I don't write reviews. I'm writing this review. The elote dog with the corn crema and tajín is the best thing on Madison Street, and the line moves fast even at lunch rush." },
  { name: "Dana K.", source: "Google", date: "June 2026", rating: 4, title: "Great, gets busy", text: "Chili cheese is loaded properly. The chili actually tastes like beef, not a can. Docked one star only because Friday at noon is a 15-minute line. Order ahead and you're golden." },
  { name: "Rob F.", source: "Yelp", date: "May 2026", rating: 5, title: "Catered our office lunch", text: "They did 70 people in our break room without breaking a sweat. Setup, labeled veg options, the works. Three people asked for the caterer's card before dessert." },
  { name: "Elena R.", source: "Google", date: "April 2026", rating: 5, title: "Veg options that slap", text: "As the vegetarian in a group of purists, I usually get the sad afterthought. The loaded veg dog could convert people. Corn crema goes on everything now." },
  { name: "James W.", source: "Google", date: "March 2026", rating: 5, title: "Throwback Thursday is a steal", text: "Four-dollar snap on Thursdays. Fries are crinkle-cut and stay crispy. The kid behind the counter remembered my order from last week. Neighborhood spot energy." },
  { name: "Aisha B.", source: "Yelp", date: "February 2026", rating: 4, title: "Shakes worth the trip", text: "Came for a dog, stayed for the chocolate shake. Thick, real cocoa, actual whipped cream. Dog was excellent too. Seating is tight, so plan for takeout at peak." },
  { name: "Tom H.", source: "Google", date: "January 2026", rating: 5, title: "Post-game ritual", text: "Bulls games end, we walk to Gold Star. Double Stack after a win hits different. Staff handles the post-game rush like air traffic controllers." },
  { name: "Grace L.", source: "Google", date: "December 2025", rating: 5, title: "Brought my Chicago-skeptic dad", text: "Dad said Chicago dogs are 'a salad on a hot dog.' He ordered a second classic before finishing the first. Conversion complete." },
];

export const TIMELINE = [
  { year: "2016", title: "A cart and a dream", text: "Friends Reuben Thomas John and Ahaan Verma park a used hot dog cart outside the Loop farmers market with one recipe: Reuben's grandfather's Chicago dog build." },
  { year: "2017", title: "The line forms", text: "Word spreads through office lunch crowds. The cart sells out 34 Saturdays in a row. A second cart joins on weekends." },
  { year: "2018", title: "First office catering", text: "A 40-person startup lunch turns into a weekly standing order. Ahaan builds the first labeled dietary spread on a folding table." },
  { year: "2019", title: "123 W Madison opens", text: "The brick-and-mortar stand opens with six stools, a grill, and the same steamed-bun setup. The elote dog debuts and never leaves the menu." },
  { year: "2020", title: "Window service", text: "The dining room closes and the pickup window opens. Order-ahead starts as a phone number on a whiteboard. It never stops ringing." },
  { year: "2021", title: "Catering takes off", text: "Office lunches and backyard parties become half the business. The on-site cart does its first 200-guest wedding." },
  { year: "2023", title: "People's Choice, West Loop Food Fest", text: "The chili cheese wins the festival's People's Choice vote. The team frames the ribbon and hangs it crooked on purpose." },
  { year: "2025", title: "Ten years of snap", text: "Same buns, same mustard, bigger grill. The menu grows to twenty items, and Throwback Thursday brings back the $4 snap." },
];

export const TEAM = [
  { name: "Reuben Thomas John", role: "Co-owner, Grill", text: "Ex-line cook. Believes a steamed bun is a precision instrument. Handles the char grill on weekends and guards his grandfather's dog build with his life." },
  { name: "Ahaan Verma", role: "Co-owner, Ops", text: "Runs catering and the books. Can load a cart for 200 guests in 40 minutes flat. Answers the phone like every event is personal." },
  { name: "Lucia Mendez", role: "General Manager", text: "Started on the register in 2019. Remembers regulars' orders and runs the lunch rush like clockwork." },
  { name: "Big Al Kowalski", role: "Chili & Prep Lead", text: "Makes the small-batch chili every morning at 6am. Recipe is in a safe. This is not a joke." },
];

export const FAQS = [
  { q: "Where does the snap come from?", a: "Our franks are all-beef with natural casings, sourced from a fourth-generation Chicago sausage maker. That casing is the snap." },
  { q: "Do you have vegetarian or vegan options?", a: "Yes. Plant-based franks with the full toppings bar, plus vegan cheese on request. Fries, slaw, and pickle boats are vegetarian." },
  { q: "Gluten-free?", a: "The slaw and pickle boat are gluten-free. We stock gluten-free buns on request. Just ask, they're kept separate to avoid cross-contact." },
  { q: "Do I need to order ahead?", a: "No, walk-ups are always welcome. But Friday lunch runs a 10 to 15 minute line, so ordering ahead saves you the wait." },
  { q: "What's the catering minimum?", a: "Drop-off catering starts at 10 guests; the on-site cart starts at 50. Tell us your headcount and we'll build the right package." },
  { q: "Do you do late-night or events?", a: "The cart is available for evening events April through October. Winter events are drop-off only. The cart hates January as much as you do." },
  { q: "Is there seating?", a: "Six stools inside, a standing counter, and a sidewalk bench. Most regulars take it to go. Millennium Park is a six-minute walk." },
  { q: "Do you sell gift cards?", a: "Yes, in-store in any amount. They're the unofficial currency of our regulars' office Secret Santa." },
];

export const PRESS = [
  { outlet: "West Loop Food Fest", text: "People's Choice winner, 2023: Chili Cheese Dog." },
  { outlet: "The Lunch Break Podcast", text: "\"The elote dog is the best argument for fusion anyone's made in years.\" (Ep. 214)" },
  { outlet: "Downtown Dining Guide", text: "Listed among the Loop's ten best lunches under $10, 2024 and 2025." },
];

export const OCCASIONS = [
  { name: "Office lunches", text: "Drop-off spreads with labeled veg and gluten-free options. Feeds 10 to 80." },
  { name: "Backyard parties", text: "The cart in your driveway. Grill smoke, paper trays, happy neighbors." },
  { name: "Weddings", text: "Late-night dog bar after the reception. The photos are always incredible." },
  { name: "Game days", text: "Pre-game pickup platters or the cart outside your tailgate." },
];

export const CATERING_STEPS = [
  { title: "Tell us the plan", text: "Date, headcount, venue. We reply within one business day with a quote." },
  { title: "Build the menu", text: "Pick packages, flag dietary needs, choose drop-off or the on-site cart." },
  { title: "We show up early", text: "Setup is on us, labeled and ready 30 minutes before mouths arrive." },
];

export type NewsPost = { slug: string; title: string; date: string; tag: string; excerpt: string; body: string[] };

export const NEWS: NewsPost[] = [
  {
    slug: "elote-tuesday-turns-three",
    title: "Elote Tuesday Turns Three",
    date: "July 14, 2026",
    tag: "Specials",
    excerpt: "The Tuesday special that started as a slow-day experiment is now old enough for candles. Same deal, plus a limited corn-keychain for regulars.",
    body: [
      "Three years ago, a corn delivery showed up too good to waste on a dead Tuesday. The crew charred it, folded it into crema, and put an elote dog on the board for one day only. The line that night told us everything.",
      "Elote Tuesday has run every week since: elote dog plus lemonade for $10.50, all day. To mark year three, Tuesday regulars get a tiny corn keychain with any elote order, while they last. Ahaan ordered 300. There are more than 300 Tuesday regulars. Do the math and come early.",
      "If you have never had one, this is the week. Charred corn crema, cotija, tajin, lime, cilantro, zero regrets.",
    ],
  },
  {
    slug: "cart-back-festival-season",
    title: "The Cart Is Back for Festival Season",
    date: "April 20, 2026",
    tag: "Events",
    excerpt: "The on-site cart wakes up for April through October. Block-party dates go first, so book spring events now.",
    body: [
      "Every April we roll the cart out of winter storage, replace the spark plugs of our patience, and open the event calendar through October. Weddings, block parties, office blowouts, and one memorable divorce party (congratulations, Diane).",
      "The cart needs 50 guests minimum, one parking spot, and one power outlet. Everything else, crew included, comes with it. Spring Saturdays go first every year, so if your date rhymes with May or June, send the catering form today.",
      "Full details live on the catering page, including the Big Event package and the tasting box for wedding planners.",
    ],
  },
  {
    slug: "throwback-thursday-four-dollars",
    title: "Throwback Thursday Drops to $4",
    date: "January 8, 2026",
    tag: "Specials",
    excerpt: "The Plain Snap returns to its 2016 cart price every Thursday. Our longest-running special gets even longer.",
    body: [
      "In 2016 the cart sold the Plain Snap for four dollars. Ten years later, rent is not 2016 rent, but Thursdays are Thursdays. The Plain Snap is $4.00 all day, every Thursday, dine-in or pickup.",
      "Why Thursday? Wednesday regulars kept asking what was next, and Reuben got tired of saying nothing. Now Thursday has an answer and the weekend has a warm-up act.",
      "Limit four per person so the line keeps moving. Gold Star Club stars still count, because loyalty should not take days off.",
    ],
  },
];

export function findPost(slug: string) {
  return NEWS.find((n) => n.slug === slug);
}
