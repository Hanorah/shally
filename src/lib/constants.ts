export const SITE = {
  name: "Shally Pastries",
  tagline: "Pastries, training, bike delivery, and investments.",
  phone: "08101561840",
  phoneHref: "tel:08101561840",
  whatsapp: "https://wa.me/2348101561840",
  hours: "Mon – Sat · 8am – 7pm",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop", dot: true },
  { label: "Trainings", href: "/trainings" },
  { label: "Logistics", href: "/logistics" },
  { label: "Investments", href: "/investments" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export const BUSINESSES = [
  {
    id: "pastries",
    name: "Shally Pastries",
    short: "Cakes, snacks, small chops, and trays made for real occasions.",
    href: "/shop",
    cta: "Order online",
    image: "/cakes.PNG",
  },
  {
    id: "training",
    name: "Shally Pastries Training",
    short:
      "Learn the work properly, with accommodation available during training.",
    href: "/trainings",
    cta: "View trainings",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&h=900&fit=crop&q=80",
  },
  {
    id: "logistics",
    name: "Shally Logistics",
    short: "Fast bike delivery for parcels, food, documents, and business orders.",
    href: "/logistics",
    cta: "Get a quote",
    image: "/shally-%20deliveries.PNG",
  },
  {
    id: "investments",
    name: "Shally Investments",
    short: "Investment opportunities, partnerships, and business growth.",
    href: "/investments",
    cta: "Talk to us",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=900&fit=crop&q=80",
  },
] as const;

export const LOGISTICS_SERVICES = [
  {
    title: "Same-day delivery",
    body: "Quick bike delivery for parcels, food, documents, and everyday items.",
  },
  {
    title: "Business delivery",
    body: "Reliable dispatch for stores, vendors, offices, and repeat customers.",
  },
  {
    title: "Scheduled pickups",
    body: "Book a rider ahead for a specific pickup time or recurring delivery route.",
  },
  {
    title: "Multi-stop runs",
    body: "One rider, several stops — useful for supplies, customer orders, and errands.",
  },
] as const;

export const LOGISTICS_STEPS = [
  {
    step: "01",
    title: "Send the details",
    body: "Pickup point, destination, timing, and what needs to be moved.",
  },
  {
    step: "02",
    title: "We assign a rider",
    body: "You get the price, pickup time, and rider details before the trip starts.",
  },
  {
    step: "03",
    title: "Delivery is handled",
    body: "The rider completes the trip and confirms delivery with you.",
  },
] as const;

export const INVESTMENT_PILLARS = [
  {
    title: "Business opportunities",
    body: "Reviewing clear proposals with a defined market, model, and route to growth.",
  },
  {
    title: "Partnerships",
    body: "Working with people and businesses where the roles and goals are clear.",
  },
  {
    title: "Asset investment",
    body: "Opportunities tied to useful assets, operating capacity, and measurable demand.",
  },
] as const;

export const CARD_IMAGES = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&h=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=700&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=700&fit=crop&q=80",
] as const;

export const GATEWAY_SLIDES = [
  {
    image: "/cakes.PNG",
    caption: "Shally Pastries",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1400&h=900&fit=crop&q=80",
    caption: "Shally Pastries Training",
  },
  {
    image: "/shally-%20deliveries.PNG",
    caption: "Shally Logistics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&h=900&fit=crop&q=80",
    caption: "Shally Investments",
  },
] as const;

/** Six favourite foods — used by the homepage MenuCascade section */
export const MENU_CASCADE_ITEMS = [
  {
    title: "Signature Cakes",
    price: "From ₦25,000",
    image: "/cakes.PNG",
  },
  {
    title: "Meat Pies",
    price: "₦1,500",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=900&fit=crop&q=80",
  },
  {
    title: "Milky Donuts",
    price: "From ₦800",
    image: "/milky donut.PNG",
  },
  {
    title: "Burgers",
    price: "From ₦3,500",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=900&fit=crop&q=80",
  },
  {
    title: "Small Chops",
    price: "From ₦25,000",
    image: "/small-chops.PNG",
  },
  {
    title: "Cupcake Box",
    price: "From ₦12,000",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&h=900&fit=crop&q=80",
  },
] as const;

export const TRUSTED_LOGOS = [
  "Weddings",
  "Birthdays",
  "Office trays",
  "Naming",
  "Graduations",
  "Church events",
  "Owambe",
  "Trainings",
  "Deliveries",
] as const;

export const STORY_CARDS = [
  "/cake.PNG",
  "/cakes.PNG",
  "/milky donut.PNG",
  "/small-chops.PNG",
  "/yoghurt.PNG",
  "/cakesss.PNG",
] as const;

export const VISION_GRID = [
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=620&fit=crop&q=80",
] as const;

/** Meat pies, donuts, burgers, cakes, trays, students — continuous gallery */
export const COMMUNITY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop&q=80",
    alt: "Fresh meat pies",
  },
  {
    src: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop&q=80",
    alt: "Glazed donuts",
  },
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=400&fit=crop&q=80",
    alt: "Fresh burger",
  },
  {
    src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&q=80",
    alt: "Custom celebration cake",
  },
  {
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=400&fit=crop&q=80",
    alt: "Birthday cake",
  },
  {
    src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop&q=80",
    alt: "Baking class in the kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop&q=80",
    alt: "Fresh bread and pastries",
  },
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop&q=80",
    alt: "Dessert tray",
  },
  {
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=400&fit=crop&q=80",
    alt: "Layered cake slice",
  },
  {
    src: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=400&h=400&fit=crop&q=80",
    alt: "Cupcakes",
  },
  {
    src: "https://images.unsplash.com/photo-1517433670267-04b021479468?w=400&h=400&fit=crop&q=80",
    alt: "Baking students learning",
  },
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop&q=80",
    alt: "Croissants and pastries",
  },
] as const;

export const MARKETPLACE_ITEMS = [
  {
    title: "Signature Cakes",
    image: "/cakes.PNG",
  },
  {
    title: "Meat Pies",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
  },
  {
    title: "Milky Donuts",
    image: "/milky donut.PNG",
  },
  {
    title: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
  },
  {
    title: "Small Chops",
    image: "/small-chops.PNG",
  },
  {
    title: "Fruit Yoghurt",
    image: "/yoghurt.PNG",
  },
] as const;

export const MENU_CATEGORIES = [
  {
    name: "Custom Cakes",
    description: "Birthday, wedding, and celebration cakes made to order.",
    items: [
      {
        id: "signature-cake",
        name: "Signature Celebration Cake",
        price: "From ₦25,000",
        priceValue: 25000,
        image: "/cakes.PNG",
      },
      {
        id: "wedding-cake",
        name: "Wedding Cake",
        price: "From ₦80,000",
        priceValue: 80000,
        image: "/cakesss.PNG",
      },
      {
        id: "cupcake-box",
        name: "Cupcake Box (12)",
        price: "From ₦12,000",
        priceValue: 12000,
        image:
          "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&q=80",
      },
    ],
  },
  {
    name: "Everyday Favourites",
    description: "The bites customers keep coming back for.",
    items: [
      {
        id: "meat-pie",
        name: "Meat Pie",
        price: "₦1,500",
        priceValue: 1500,
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
      },
      {
        id: "glazed-donuts",
        name: "Milky Donuts",
        price: "From ₦800",
        priceValue: 800,
        image: "/milky donut.PNG",
      },
      {
        id: "fresh-burger",
        name: "Fresh Burger",
        price: "From ₦3,500",
        priceValue: 3500,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
      },
    ],
  },
  {
    name: "Event Food Trays",
    description: "Party platters for celebrations, offices, and gatherings.",
    items: [
      {
        id: "small-tray",
        name: "Small Party Tray",
        price: "From ₦25,000",
        priceValue: 25000,
        image: "/small-chops.PNG",
      },
      {
        id: "large-tray",
        name: "Large Celebration Tray",
        price: "From ₦55,000",
        priceValue: 55000,
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
      },
      {
        id: "mixed-pastry",
        name: "Mixed Pastry Box",
        price: "From ₦18,000",
        priceValue: 18000,
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      },
    ],
  },
] as const;

/** Flat product list for the online shop */
export const SHOP_PRODUCTS = MENU_CATEGORIES.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.name,
  }))
);

export const PACKAGES = [
  {
    name: "Starter Class",
    price: "₦25k",
    note: "One weekend · basics of pastry & pies",
    featured: false,
    includes: [
      "Meat pie & donut fundamentals",
      "Shared tools & ingredients",
      "Certificate of attendance",
    ],
  },
  {
    name: "Pro Baker",
    price: "₦75k",
    note: "4 weeks · cakes, trays & plating",
    featured: true,
    includes: [
      "Custom cake decorating",
      "Event tray prep",
      "Apartment stay for the training duration",
      "Recipe booklet to take home",
      "Priority class support",
    ],
  },
  {
    name: "Master Package",
    price: "₦150k",
    note: "Full programme · start your own kitchen",
    featured: false,
    includes: [
      "Everything in Pro Baker",
      "Apartment stay for the full programme",
      "Business & pricing tips",
      "One-on-one mentoring session",
      "Lifetime alumni discounts",
    ],
  },
] as const;

export const WORK_GALLERY = [
  {
    title: "Wedding celebration cake",
    image: "/cakesss.PNG",
    category: "Cakes",
  },
  {
    title: "Birthday celebration stack",
    image: "/cakes.PNG",
    category: "Cakes",
  },
  {
    title: "Fresh meat pie batch",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&h=1100&fit=crop&q=80",
    category: "Pastries",
  },
  {
    title: "Milky donut boxes",
    image: "/milky donut.PNG",
    category: "Pastries",
  },
  {
    title: "Burger specials",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=1100&fit=crop&q=80",
    category: "Savoury",
  },
  {
    title: "Small chops tray",
    image: "/small-chops.PNG",
    category: "Events",
  },
  {
    title: "Training day — kneading",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&h=1100&fit=crop&q=80",
    category: "Trainings",
  },
  {
    title: "Students plating desserts",
    image:
      "https://images.unsplash.com/photo-1517433670267-04b021479468?w=900&h=1100&fit=crop&q=80",
    category: "Trainings",
  },
] as const;
