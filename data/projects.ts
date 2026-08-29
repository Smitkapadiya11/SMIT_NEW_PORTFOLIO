export interface Project {
  id: string;
  name: string;
  client: string;
  category: string;
  featured: boolean;
  url: string | null;
  screenshot: string | null;
  description: string;
  bullets: string[];
  stack: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "news-video-pipeline",
    name: "News-to-Video Automation Pipeline",
    client: "Confidential Client",
    category: "Full Automation Pipeline",
    featured: true,
    url: null,
    screenshot: null,
    description:
      "End-to-end content automation: scrapes news → AI filters best stories → generates video scripts → auto-uploads finished videos across all social platforms.",
    bullets: [
      "Scrapes hundreds of news articles matching client topics using custom Node.js scrapers",
      "Grok API selects the 1–2 best stories; second AI model writes professional video scripts",
      "After client approval in Google Sheets, pipeline auto-generates AI clone video + audio and publishes to all social handles simultaneously",
    ],
    stack: [
      "Node.js",
      "JavaScript",
      "Grok API",
      "Generative AI",
      "Google Sheets API",
      "Social Media APIs",
    ],
    tags: ["Automation", "Generative AI", "Social Media"],
  },
  {
    id: "lungdetox",
    name: "LungDetox / Royal Swag",
    client: "Royal Swag",
    category: "Business AI",
    featured: false,
    url: "https://lungdetox.royalswag.in",
    screenshot: "/screenshots/lungdetox.png",
    description:
      "AI integration for a health & wellness brand — automating customer engagement and business operations.",
    bullets: [
      "Built AI-powered features for the Royal Swag health brand",
      "Integrated LLM-based automation into the business workflow",
    ],
    stack: ["AI Integration", "Python", "Generative AI", "Next.js"],
    tags: ["Health & Wellness", "E-commerce", "Client Work"],
  },
  {
    id: "amazora",
    name: "Amazora",
    client: "Amazora (Australia)",
    category: "International Client",
    featured: false,
    url: "https://amazora.com.au",
    screenshot: "/screenshots/amazora.png",
    description:
      "AI features and automation built for an Australian e-commerce business.",
    bullets: [
      "Delivered AI automation for an Australian client remotely",
      "Integrated intelligent workflows into e-commerce operations",
    ],
    stack: ["AI Automation", "Generative AI", "E-commerce Integration"],
    tags: ["E-commerce", "Australia", "Client Work"],
  },
  {
    id: "silkroom",
    name: "Silk Room",
    client: "Silk Room",
    category: "Business AI",
    featured: false,
    url: "https://silkroom.shop",
    screenshot: "/screenshots/silkroom.png",
    description:
      "AI automation system built for a fashion and lifestyle brand.",
    bullets: [
      "Built AI-powered automation for this fashion brand",
      "Streamlined business operations using intelligent workflow design",
    ],
    stack: ["AI Automation", "Workflow Design", "Generative AI"],
    tags: ["Fashion", "Lifestyle", "Client Work"],
  },
  {
    id: "apnatree",
    name: "ApnaTree",
    client: "Own Project",
    category: "Personal Build",
    featured: false,
    url: "https://apnatree.vercel.app",
    screenshot: "/screenshots/apnatree.png",
    description:
      "Personal project deployed on Vercel — demonstrating full-stack development skills.",
    bullets: [
      "Designed and deployed independently on Vercel",
      "Full-stack personal project showcasing development capability",
    ],
    stack: ["Vercel", "Full Stack", "Web Development", "Next.js"],
    tags: ["Personal Project", "Vercel"],
  },
  {
    id: "inventory-ai",
    name: "AI Inventory Oracle",
    client: "Own Project",
    category: "ML Product",
    featured: false,
    url: "https://inventory-ai-mocha.vercel.app",
    screenshot: "/screenshots/inventory-ai.png",
    description:
      "Trained on sales data + live market signals — predicts which products will profit and which will drain cash before you spend a rupee.",
    bullets: [
      "ML-based demand prediction using 5 years of sales data",
      "Integrated with Shopify and Meesho for e-commerce forecasting",
      "Deployed on Vercel as a real-time inventory intelligence service",
    ],
    stack: ["Python", "Machine Learning", "Shopify", "Meesho", "Vercel"],
    tags: ["ML", "Predictive Analytics", "E-commerce"],
  },
  {
    id: "biodata-maker",
    name: "Biodata Maker",
    client: "Own Project",
    category: "Web App",
    featured: false,
    url: "https://biodata-maker-silk.vercel.app",
    screenshot: "/screenshots/biodata-maker.png",
    description:
      "Web application for creating professional biodata/resume documents.",
    bullets: [
      "Built and deployed a biodata generation tool",
      "Clean UX for document creation and export",
    ],
    stack: ["Next.js", "React", "Vercel"],
    tags: ["Web App", "Personal Project"],
  },
  {
    id: "smitcard",
    name: "SmitCard",
    client: "Own Project",
    category: "Digital Identity",
    featured: false,
    url: "https://smitcard.vercel.app",
    screenshot: "/screenshots/smitcard.png",
    description:
      "Digital business card — a shareable personal identity page.",
    bullets: [
      "Designed a modern digital card experience",
      "Deployed on Vercel with custom domain support",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    tags: ["Personal", "Digital Card"],
  },
];

export const otherProjectTypes = [
  {
    icon: "📞",
    name: "AI Calling Agents",
    desc: "Automated voice agents that handle outbound/inbound calls for businesses",
  },
  {
    icon: "🤖",
    name: "Business Chatbots",
    desc: "Custom GPT/Claude-powered chatbots integrated into client websites and workflows",
  },
  {
    icon: "📦",
    name: "Inventory Forecasting",
    desc: "ML-based demand prediction prototypes for retail and e-commerce businesses",
  },
  {
    icon: "⚡",
    name: "Workflow Automation",
    desc: "End-to-end process automation replacing manual business tasks with AI pipelines",
  },
];

export interface VercelProject {
  name: string;
  framework: string | null;
  url: string;
  domains: string[];
  github: string | null;
}

export const vercelProjects: VercelProject[] = [
  {
    name: "Royal Swag",
    framework: "Next.js",
    url: "https://lungdetox.royalswag.in",
    domains: ["lungdetox.royalswag.in", "royal-swag.vercel.app"],
    github: "Smitkapadiya11/ROYAL-SWAG",
  },
  {
    name: "Amazora",
    framework: "Next.js",
    url: "https://amazora.com.au",
    domains: ["amazora.com.au", "www.amazora.com.au"],
    github: null,
  },
  {
    name: "Silk Room",
    framework: "Next.js",
    url: "https://silkroom.shop",
    domains: ["silkroom.shop", "www.silkroom.shop"],
    github: "Smitkapadiya11/Silkroom",
  },
  {
    name: "ApnaTree",
    framework: "Next.js",
    url: "https://apnatree.vercel.app",
    domains: ["apnatree-in.vercel.app"],
    github: "Smitkapadiya11/apnatree-in",
  },
  {
    name: "Inventory AI",
    framework: "Services",
    url: "https://inventory-ai-mocha.vercel.app",
    domains: ["inventory-ai-mocha.vercel.app"],
    github: "Smitkapadiya11/Snackle.site",
  },
  {
    name: "Biodata Maker",
    framework: "Next.js",
    url: "https://biodata-maker-silk.vercel.app",
    domains: ["biodata-maker-silk.vercel.app"],
    github: "Smitkapadiya11/Biodata-maker",
  },
  {
    name: "Infinity Box",
    framework: "Next.js",
    url: "https://infinity-box-nine.vercel.app",
    domains: ["infinity-box-nine.vercel.app"],
    github: null,
  },
  {
    name: "SmitCard",
    framework: "Static",
    url: "https://smitcard.vercel.app",
    domains: ["smitcard.vercel.app"],
    github: "Smitkapadiya11/Digital-card",
  },
  {
    name: "Snackle Site",
    framework: "Next.js",
    url: "https://snackle-site.vercel.app",
    domains: ["snackle-site.vercel.app"],
    github: "Smitkapadiya11/Snackle.site",
  },
];

export interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description?: string;
  bullets?: string[];
}

export const experience: ExperienceItem[] = [
  {
    period: "Jan 2026 – Present",
    title: "AI Generalist & Automation Specialist",
    company: "Kapadiya and Sons",
    location: "Surat, Gujarat · Hybrid",
    type: "Founder · Full-time",
    description:
      "I design and build AI-powered workflows that automate repetitive tasks, optimize operations, and turn complex business processes into simple, scalable systems. My work spans AI agents, generative AI integrations, machine learning, data analysis, and end-to-end automation pipelines — built for real clients, not toy demos.",
    bullets: [
      "AI Automation & Workflow Design",
      "Generative AI (ChatGPT / Claude / Gemini / Grok API)",
      "Machine Learning Solutions",
      "Data Analysis & Intelligent Systems",
      "Process Optimization & AI-Driven Productivity Tools",
    ],
  },
  {
    period: "Aug 2025 – Dec 2025",
    title: "IT Bench Sales Recruiter",
    company: "Radiance Technologies",
    location: "Ahmedabad, Gujarat · On-site",
    type: "Full-time",
    bullets: [
      "Marketed IT consultants (H1B, OPT, CPT, GC, USC) to US prime vendors and direct clients",
      "Built relationships with Tier-1 vendors and staffing partners",
      "Matched consultants to requirements, negotiated rates, coordinated placements",
      "Managed RTR documentation, interview coordination, placement tracking",
    ],
  },
  {
    period: "Aug 2022 – Apr 2025",
    title: "Bachelor of Computer Applications (B.C.A.)",
    company: "CHARUSAT",
    location: "Anand, Gujarat",
    type: "Grade: 6.0 CGPA",
    bullets: [
      "Activities: IT Marketing, Startup Management, Entrepreneurship & Innovation",
      "Skills: Programming, data structures, databases, web development, system design",
    ],
  },
];

export const skillGroups = [
  {
    title: "Generative AI & LLMs",
    skills: [
      "ChatGPT API",
      "Claude (Anthropic)",
      "Gemini",
      "Grok API",
      "Prompt Engineering",
      "RAG",
      "AI Agents",
    ],
  },
  {
    title: "Automation & Workflows",
    skills: [
      "Workflow Design",
      "AI Pipelines",
      "Social Media Automation",
      "Process Automation",
      "n8n",
      "API Integration",
    ],
  },
  {
    title: "Data & ML",
    skills: [
      "Data Analysis",
      "Machine Learning",
      "Intelligent Systems",
      "Python",
      "Google Sheets API",
    ],
  },
  {
    title: "Web & Dev",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Flask",
      "Next.js",
      "Replit",
    ],
  },
  {
    title: "Business & Sales",
    skills: [
      "US IT Staffing",
      "Bench Sales",
      "HubSpot",
      "Vendor Management",
      "Client Relations",
    ],
  },
  {
    title: "Tools",
    skills: ["IntelliJ IDEA", "Gamma", "Replit", "HubSpot", "GitHub"],
  },
];

export const aiTools = [
  { name: "OpenAI", color: "#10a37f" },
  { name: "Claude", color: "#d97757" },
  { name: "Gemini", color: "#4285f4" },
  { name: "Grok", color: "#ffffff" },
  { name: "LangChain", color: "#1c3c3c" },
  { name: "Python", color: "#3776ab" },
  { name: "n8n", color: "#ea4b71" },
  { name: "HubSpot", color: "#ff7a59" },
  { name: "Replit", color: "#f26207" },
  { name: "IntelliJ", color: "#000000" },
  { name: "Gamma", color: "#8b5cf6" },
];

export const metrics = [
  { value: "7+", label: "AI Products Live" },
  { value: "72h", label: "Avg Deployment" },
  { value: "24/7", label: "Agent Uptime" },
  { value: "11", label: "Automations Built" },
];

export const testimonials = [
  {
    quote:
      "Smit built an automation pipeline that replaced 6 hours of daily manual work. It runs flawlessly — zero intervention needed.",
    author: "Confidential Client",
    role: "Social Media Business Owner",
    metric: "6 hrs/day saved",
  },
  {
    quote:
      "Delivered AI integration for our e-commerce store remotely — professional, fast, and outcome-focused. Exactly what we needed.",
    author: "Amazora Team",
    role: "Australian E-commerce",
    metric: "International delivery",
  },
  {
    quote:
      "From concept to deployed Vercel app in days. Smit understands both the tech and the business problem — rare combination.",
    author: "Royal Swag",
    role: "Health & Wellness Brand",
    metric: "Live production site",
  },
];

export const faqs = [
  {
    q: "What types of projects do you take on?",
    a: "AI automation pipelines, LLM integrations, custom chatbots, workflow design, ML prototypes, and full-stack builds for businesses that need measurable impact — not demos.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. Based in Surat, Gujarat, India — open to remote consulting, freelance builds, and founding-team roles worldwide. I've delivered for clients in Australia and the US.",
  },
  {
    q: "What's your typical process?",
    a: "Understand the problem first. Map the workflow. Build the smallest system that delivers results. Iterate with data, not assumptions.",
  },
  {
    q: "Which AI platforms do you work with?",
    a: "OpenAI, Claude (Anthropic), Gemini, Grok, LangChain, and custom API integrations. Platform-agnostic — I pick what fits the problem.",
  },
  {
    q: "How do I get started?",
    a: "Email smitkapadiya.work@gmail.com, WhatsApp +91 7575807403, or use the contact form. I respond within 24 hours.",
  },
];
