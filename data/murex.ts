export interface AIProduct {
  id: string;
  num: string;
  name: string;
  description: string;
  stack: string[];
  featured?: boolean;
}

export const aiProducts: AIProduct[] = [
  {
    id: "inventory-oracle",
    num: "01",
    name: "AI Inventory Oracle",
    description:
      "Trained on 5 years of sales data + live market signals — predicts which products will profit and which will drain cash before you spend a rupee.",
    stack: ["Machine Learning", "Predictive Analytics", "Shopify", "Meesho"],
    featured: true,
  },
  {
    id: "cod-guardian",
    num: "02",
    name: "COD Guardian",
    description:
      "COD order placed → instant WhatsApp sent → auto-call if ignored → confirmed or cancelled automatically.",
    stack: ["Shopify", "Meesho", "Amazon", "Flipkart"],
  },
  {
    id: "whatsapp-center",
    num: "03",
    name: "WhatsApp Command Center",
    description:
      "Your brand speaks to thousands simultaneously — personalized, intelligent, and instant at scale.",
    stack: ["WhatsApp API", "AI", "Automation"],
  },
  {
    id: "voice-agent",
    num: "04",
    name: "AI Voice Calling Agent",
    description:
      "Calls leads, confirms orders, books appointments. Speaks naturally. Runs 24/7 without breaks.",
    stack: ["LLM", "Voice AI", "Twilio"],
  },
  {
    id: "email-intelligence",
    num: "05",
    name: "AI Email Intelligence",
    description:
      "Reads every professional email, understands context, and sends perfect replies automatically.",
    stack: ["GPT-4o", "Gmail API", "Automation"],
  },
  {
    id: "data-extraction",
    num: "06",
    name: "Data Extraction Engine",
    description:
      "Automated extraction of competitor pricing and market trends from any platform.",
    stack: ["Scraping", "Python", "Market Intel"],
  },
  {
    id: "custom-builds",
    num: "07",
    name: "Your Industry. Your Workflow. Your AI.",
    description:
      "Custom AI agents built around your exact business process — not generic templates.",
    stack: ["Custom Builds", "LLM", "API Integration"],
    featured: true,
  },
];

export interface AcademicProject {
  name: string;
  description: string;
  stack: string[];
}

export const academicProjects: AcademicProject[] = [
  {
    name: "Online Movie Platform",
    description: "Login, search, file handling, and database architecture built from scratch.",
    stack: ["Python", "SQL", "Flask"],
  },
  {
    name: "Restaurant Ordering System",
    description: "Dynamic QR menus with automated order processing and billing for fast-paced kitchens.",
    stack: ["QR Tech", "Automation"],
  },
  {
    name: "AI Text-to-Image Generator",
    description: "Turning descriptive prompts into realistic images via cutting-edge AI APIs.",
    stack: ["Stable Diffusion", "DALL-E"],
  },
  {
    name: "Smart Shopkeeper AI",
    description: "Kirana store AI scans inventory via camera, predicts restock, auto-orders via WhatsApp.",
    stack: ["React Native", "TensorFlow", "WhatsApp API"],
  },
  {
    name: "Lead Hunter Bot",
    description: "Scrapes Google Maps/Facebook for local leads, AI qualifies, WhatsApp outreach.",
    stack: ["Puppeteer", "GPT-4o", "Node.js"],
  },
  {
    name: "Delivery Pilot",
    description: "AI optimizes delivery routes — 30% fuel savings, 40% faster deliveries.",
    stack: ["Google Maps", "OR-Tools", "Socket.io"],
  },
  {
    name: "Voice Commerce",
    description: "Hindi/Gujarati voice orders via WhatsApp with UPI payments integrated.",
    stack: ["Whisper", "Razorpay", "FastAPI"],
  },
];

export const philosophyQuotes = [
  "Stop hiring humans for robotic jobs.",
  "Software should think, not just calculate.",
  "If it happens twice, automate it once.",
];
