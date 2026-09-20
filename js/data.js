// Sample seed data — structured facts only (name, category, area, hours-ish, tags).
// Swap this for a live Google Places / Foursquare pull once you're ready to go real-data.
// NOTE: addresses/hours here are illustrative placeholders for prototype purposes,
// not verified current listings — replace before launch.

const LISTINGS = [
  {
    name: "RU Hungry Grill",
    category: "Food",
    area: "College Ave",
    addr: "128 College Ave, New Brunswick",
    tags: ["open late", "cheap eats", "cash only"],
    note: "Late-night grill spot near the dorms, popular after 11pm.",
    featured: true
  },
  {
    name: "Hansel 'n Griddle",
    category: "Food",
    area: "College Ave",
    addr: "112 Easton Ave, New Brunswick",
    tags: ["open 24/7", "diner", "student favorite"],
    note: "Classic late-night diner run; a College Ave staple for decades."
  },
  {
    name: "Krung Siam Thai",
    category: "Food",
    area: "College Ave",
    addr: "126 Easton Ave, New Brunswick",
    tags: ["sit-down", "student discount"],
    note: "Popular for group dinners; a few blocks from campus."
  },
  {
    name: "Panera Bread",
    category: "Coffee & Study",
    area: "College Ave",
    addr: "72 Easton Ave, New Brunswick",
    tags: ["wifi", "outlets", "good for groups"],
    note: "Reliable wifi and seating, gets crowded during midterms."
  },
  {
    name: "Wonder Bar Coffee",
    category: "Coffee & Study",
    area: "Downtown NB",
    addr: "23 Church St, New Brunswick",
    tags: ["quiet", "outlets", "local roaster"],
    note: "Small independent shop, quieter than the chains near campus."
  },
  {
    name: "Alexander Library Cafe",
    category: "Coffee & Study",
    area: "College Ave",
    addr: "169 College Ave, New Brunswick",
    tags: ["quiet", "on campus", "long hours"],
    note: "Inside Alexander Library; extended hours during finals week."
  },
  {
    name: "Stuff Yer Face",
    category: "Food",
    area: "College Ave",
    addr: "49 Easton Ave, New Brunswick",
    tags: ["open late", "student favorite"],
    note: "Long-running bar & grill spot, known for stromboli.",
    featured: true
  },
  {
    name: "The Suds Laundry Co.",
    category: "Services",
    area: "College Ave",
    addr: "39 Union St, New Brunswick",
    tags: ["laundromat", "self-serve"],
    note: "Coin and app-pay laundromat a short walk from College Ave dorms."
  },
  {
    name: "FedEx Office - New Brunswick",
    category: "Services",
    area: "Downtown NB",
    addr: "4 Livingston Ave, New Brunswick",
    tags: ["printing", "shipping"],
    note: "Printing, binding, and shipping — useful before thesis deadlines."
  },
  {
    name: "Efficient Tutoring Collective",
    category: "Services",
    area: "College Ave",
    addr: "Online / on-campus meetups",
    tags: ["tutoring", "peer-run", "STEM focus"],
    note: "Student-run tutoring group covering calc, chem, and CS intro courses."
  },
  {
    name: "The Cooler Bar",
    category: "Nightlife",
    area: "Downtown NB",
    addr: "112 Albany St, New Brunswick",
    tags: ["21+", "live music"],
    note: "Occasional live shows; check listings before heading down."
  },
  {
    name: "Olde Queens Tavern",
    category: "Nightlife",
    area: "Downtown NB",
    addr: "319 George St, New Brunswick",
    tags: ["21+", "trivia night"],
    note: "Weekly trivia night draws a solid grad-student crowd."
  },
  {
    name: "RWJ Student Health Pharmacy",
    category: "Services",
    area: "Busch",
    addr: "Busch Campus Center area",
    tags: ["pharmacy", "on campus"],
    note: "Convenient for prescription pickups without leaving campus."
  },
  {
    name: "Beans Bagels",
    category: "Food",
    area: "Livingston",
    addr: "Livingston Campus area",
    tags: ["breakfast", "quick"],
    note: "Quick bagel stop on Livingston, good pre-8am-class option."
  },
  {
    name: "Golden Dragon Chinese",
    category: "Food",
    area: "Busch",
    addr: "Hoes Lane area, Piscataway",
    tags: ["delivery", "cheap eats"],
    note: "Reliable delivery option for the Busch/engineering crowd."
  }
];

const CATEGORIES = ["All", "Food", "Coffee & Study", "Services", "Nightlife"];
