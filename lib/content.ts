import type { IconName } from "@/components/icons";

export const HERO_PILLARS: { icon: IconName; label: string }[] = [
  { icon: "chef", label: "Chef-Level Execution" },
  { icon: "gauge", label: "Structured For Performance" },
  { icon: "flower", label: "Adapted To Your Environment" },
  { icon: "shield", label: "Discreet & Reliable" },
];

export const STATS: { value: string; label: string }[] = [
  { value: "5+", label: "Years In UAE" },
  { value: "50+", label: "Environments" },
  { value: "100+", label: "High-Level Clients" },
  { value: "10+", label: "Cuisines & Concepts" },
];

export const ENVIRONMENTS: { icon: IconName; label: string }[] = [
  { icon: "home", label: "Private Residences" },
  { icon: "dumbbell", label: "Performance Centers" },
  { icon: "building", label: "Hotels & Airbnb" },
  { icon: "anchor", label: "Yachts & Travel" },
  { icon: "runner", label: "Professional Athletes" },
];

export const AUDIENCES: { title: string; body: string }[] = [
  {
    title: "High Net Worth Families",
    body: "Households with maids, private cooks and domestic staff who need better execution — not another hire.",
  },
  {
    title: "Entrepreneurs",
    body: "Busy founders who have optimized everything except the one thing they do three times a day.",
  },
  {
    title: "Professional Athletes",
    body: "Consistency, performance and recovery — with pleasure, and without compromise.",
  },
  {
    title: "Government & Royal",
    body: "Ministers, royal families and VIP residences. Absolute discretion, every detail held in confidence.",
  },
  {
    title: "Luxury Hospitality",
    body: "Boutique hotels, executive residences, private clubs and luxury concierge operations.",
  },
  {
    title: "Sports Facilities",
    body: "Performance centers, academies, recovery centers and private gyms that demand precision.",
  },
];

export const PROBLEMS: { quote: string; answer: string }[] = [
  {
    quote: "My maid cooks the same things every week.",
    answer: "We train your staff.",
  },
  {
    quote: "My chef is expensive and impossible to replace.",
    answer: "We build systems independent of one person.",
  },
  {
    quote: "My nutrition plan exists but nobody executes it.",
    answer: "We transform theory into meals.",
  },
  {
    quote: "My kids don't enjoy healthy food.",
    answer: "We create food people actually love.",
  },
  {
    quote: "My restaurant lacks consistency.",
    answer: "We install standards.",
  },
  {
    quote: "My athlete needs precision.",
    answer: "We execute precision.",
  },
];

export const SOLUTION_POINTS: string[] = [
  "Personalized menus and nutrition",
  "Structured processes and a trained team",
  "Consistent quality, every single day",
  "Full management, total discretion",
  "You focus on what truly matters",
];

export const METHOD: {
  step: string;
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    step: "01",
    icon: "search",
    title: "Audit",
    body: "Current situation, kitchen, staff, equipment, objectives and lifestyle.",
  },
  {
    step: "02",
    icon: "clipboard",
    title: "Design",
    body: "Recipes, cooking methods, menu structure, purchasing, storage and execution.",
  },
  {
    step: "03",
    icon: "chef",
    title: "Implementation",
    body: "A DARAK chef stays on-site three to four weeks. Daily training, real execution, no theory.",
  },
  {
    step: "04",
    icon: "gear",
    title: "Stabilization",
    body: "Your staff becomes autonomous. The kitchen runs independently.",
  },
  {
    step: "05",
    icon: "sparkle",
    title: "Monthly Upgrade",
    body: "We return every month with new recipes, techniques and seasonal adaptation.",
  },
];

export const SERVICES: {
  number: string;
  id: string;
  title: string;
  intro: string;
  points: string[];
}[] = [
  {
    number: "01",
    id: "upgrade",
    title: "DARAK Upgrade",
    intro: "Transform your existing staff into a high-performance culinary team.",
    points: [
      "Full audit & assessment",
      "Training & development",
      "Recipe library & SOPs",
      "Kitchen optimization",
      "Ongoing monthly support",
    ],
  },
  {
    number: "02",
    id: "placement",
    title: "DARAK Placement",
    intro: "Need someone exceptional? We recruit, train and install the right chef.",
    points: [
      "Selection from our network",
      "Background & skill verification",
      "Culinary testing & onboarding",
      "Seamless integration",
      "Replacement if necessary",
    ],
  },
];

export const TECHNOLOGY: string[] = [
  "Recipe adaptation",
  "Portion scaling",
  "Macro calculation",
  "Allergen tracking",
  "Shelf-life estimation",
  "Cost calculation",
  "Recipe photography",
  "Staff instructions",
  "Multi-language recipes",
  "Kitchen procedures",
  "Ingredient substitutions",
  "Seasonal menu rotation",
];

export const DIFFERENTIATORS: string[] = [
  "French culinary culture",
  "5+ years operating in the UAE",
  "Understanding Middle Eastern tastes",
  "Understanding Western expectations",
  "Calibrated for real staff capabilities",
  "Understanding luxury standards",
  "Obsessed with execution",
  "Built around people",
];

export const FOUNDERS: {
  name: string;
  role: string;
  obsession: string;
  bio: string;
  expertise: string[];
}[] = [
  {
    name: "Omar",
    role: "Culinary Director",
    obsession: "Making incredible food accessible to any kitchen.",
    bio: "French culinary school mindset, shaped in prestigious Michelin environments alongside chefs such as Gordon Ramsay, Alain Ducasse and Cyril Lignac. Developed restaurant and bakery concepts across the UAE.",
    expertise: [
      "Flavor pairing & modern cuisine",
      "Recipe engineering",
      "Culinary creativity",
      "High-end execution",
    ],
  },
  {
    name: "Karim",
    role: "Operations Director",
    obsession: "Making systems sustainable.",
    bio: "15+ years in hospitality operations with restaurant openings in France and the UAE. Expert in the unglamorous machinery that makes excellence repeatable.",
    expertise: [
      "Operations & HR management",
      "Staff training & team building",
      "Menu engineering & food cost",
      "Kitchen organization & process design",
    ],
  },
];
