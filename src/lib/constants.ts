export const SITE = {
  name: "Shally's Pastries",
  tagline: "Custom cakes, fresh pastries & event trays in Benin City",
  phone: "08101561840",
  phoneHref: "tel:08101561840",
  address: "166 New Lagos Road, opposite Zenith Bank, Uselu, Benin City",
  city: "Benin City, Nigeria",
  whatsapp: "https://wa.me/2348101561840",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Trainings", href: "/trainings", dot: true },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
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
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1400&h=900&fit=crop&q=80",
    caption: "Hands-on kneading",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517433670267-04b021479468?w=1400&h=900&fit=crop&q=80",
    caption: "Students plating",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=1400&h=900&fit=crop&q=80",
    caption: "Kitchen coaching",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&h=900&fit=crop&q=80",
    caption: "Decorating together",
  },
] as const;

/** Six favourite foods — used by the homepage MenuCascade section */
export const MENU_CASCADE_ITEMS = [
  {
    title: "Signature Cakes",
    price: "From ₦25,000",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=900&fit=crop&q=80",
  },
  {
    title: "Meat Pies",
    price: "₦1,500",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&h=900&fit=crop&q=80",
  },
  {
    title: "Fresh Donuts",
    price: "From ₦800",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&h=900&fit=crop&q=80",
  },
  {
    title: "Burgers",
    price: "From ₦3,500",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=900&fit=crop&q=80",
  },
  {
    title: "Event Trays",
    price: "From ₦25,000",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=900&fit=crop&q=80",
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
] as const;

export const STORY_CARDS = [
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=620&fit=crop&q=80",
  "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&h=620&fit=crop&q=80",
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
    image:
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=800&q=80",
  },
  {
    title: "Meat Pies",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
  },
  {
    title: "Fresh Donuts",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
  },
  {
    title: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80",
  },
  {
    title: "Event Trays",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
  },
  {
    title: "Baking Classes",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  },
] as const;

export const MENU_CATEGORIES = [
  {
    name: "Custom Cakes",
    description: "Birthday, wedding, and celebration cakes made to order.",
    items: [
      {
        name: "Signature Celebration Cake",
        price: "From ₦25,000",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
      },
      {
        name: "Wedding Cake",
        price: "From ₦80,000",
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80",
      },
      {
        name: "Cupcake Box (12)",
        price: "From ₦12,000",
        image:
          "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&q=80",
      },
    ],
  },
  {
    name: "Everyday Favourites",
    description: "The bites Benin City keeps coming back for.",
    items: [
      {
        name: "Meat Pie",
        price: "₦1,500",
        image:
          "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
      },
      {
        name: "Glazed Donuts",
        price: "From ₦800",
        image:
          "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
      },
      {
        name: "Fresh Burger",
        price: "From ₦3,500",
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
        name: "Small Party Tray",
        price: "From ₦25,000",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
      },
      {
        name: "Large Celebration Tray",
        price: "From ₦55,000",
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
      },
      {
        name: "Mixed Pastry Box",
        price: "From ₦18,000",
        image:
          "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
      },
    ],
  },
] as const;

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
      "Business & pricing tips",
      "One-on-one mentoring session",
      "Lifetime alumni discounts",
    ],
  },
] as const;

export const WORK_GALLERY = [
  {
    title: "Wedding cake — Uselu",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900&h=1100&fit=crop&q=80",
    category: "Cakes",
  },
  {
    title: "Birthday celebration stack",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=1100&fit=crop&q=80",
    category: "Cakes",
  },
  {
    title: "Fresh meat pie batch",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&h=1100&fit=crop&q=80",
    category: "Pastries",
  },
  {
    title: "Donut display",
    image:
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=900&h=1100&fit=crop&q=80",
    category: "Pastries",
  },
  {
    title: "Burger specials",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=900&h=1100&fit=crop&q=80",
    category: "Savoury",
  },
  {
    title: "Event food tray",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&h=1100&fit=crop&q=80",
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
