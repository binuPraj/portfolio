export interface Project {
  slug: string;
  shortTitle?: string;
  title: string;
  category: string;
  techStack: string[];
  cardTechStack?: string[];
  summary: string;
  description: string[];
  highlights: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'reconnect',
    shortTitle: 'RECONNECT',
    title: 'RECONNECT: Multi-Agent Generative AI Cognitive Memory Assistance in Dementia Care System',
    category: 'Final-Year Major Team Project',
    techStack: ['Python', 'PyTorch', 'Whisper', 'PyAnnote', 'ECAPA-TDNN', 'InsightFace', 'TalkNet-ASD', 'FastAPI', 'SQLite', 'AI/ML'],
    cardTechStack: ['Python', 'PyTorch', 'Whisper', 'FastAPI', 'AI/ML'],
    summary: 'Multimodal generative AI cognitive memory assistance system for dementia care (Alzheimer’s disease).',
    image: '/images/projects/reconnect.png',
    description: [
      'Developed a memory assistance system for dementia patients that continuously processes speech and visual information to identify people, understand conversations and store contextual memories.',
      'Implemented a real-time audio perception pipeline integrating voice detection, Whisper-based speech-to-text, PyAnnote speaker diarization, and ECAPA-TDNN speaker recognition for continuous speaker-aware transcription.',
      'Designed identity verification pipeline combining InsightFace-based face recognition with TalkNet active speaker detection to associate unknown voices with corresponding faces and support dynamic identity enrollment.',
      'Built a memory processing architecture that extracts entities and contextual events enabling structured storage and semantic retrieval of relevant past experiences.'
    ],
    highlights: [
      'Continuous multimodal perception for real-time speech and visual understanding',
      'Whisper, PyAnnote, and ECAPA-TDNN audio diarization with InsightFace & TalkNet active speaker detection',
      'Dynamic identity enrollment & semantic retrieval of contextual memories for Alzheimer’s care'
    ]
  },
  {
    slug: 'polarisai',
    shortTitle: 'POLARISAI',
    title: 'POLARISAI: Controversy Detection & AI Prevention System',
    category: 'Hackathon Team Project — 1st Runner-Up',
    techStack: ['Python', 'FastAPI', 'NLP', 'LLM APIs', 'Reddit API', 'Browser Extension', 'AI/ML'],
    cardTechStack: ['Python', 'FastAPI', 'NLP', 'LLM APIs', 'Reddit API'],
    summary: 'AI-powered controversy intelligence platform and browser extension for real-time claim analysis.',
    description: [
      'Developed an AI-powered controversy intelligence platform and browser extension enabling users to analyze claims and online discussions directly from web content.',
      'Implemented an explainable controversy scoring framework by engineering a multi-stage NLP pipeline integrating claim extraction, Reddit multi-thread retrieval, stance detection, emotion analysis, topic sensitivity assessment, and audience divergence analysis.',
      'Designed a recommendation component that generated less controversial alternative statements and constructive reformulations to encourage balanced communication and reduce inflammatory phrasing.',
      'Collaborated within a fast-paced hackathon team environment to rapidly prototype, develop and present the solution, securing 1st Runner-Up position at NationalAI Hackathon 2026.'
    ],
    highlights: [
      'Multi-stage NLP pipeline with Reddit multi-thread retrieval & audience divergence analysis',
      'Explainable controversy scoring and constructive reformulation engine',
      '1st Runner-Up at NationalAI Hackathon 2026'
    ]
  },
  {
    slug: 'rentera',
    shortTitle: 'RentEra',
    title: 'RentEra: Peer-to-Peer Rental & Management System',
    category: 'Third-Year Major Team Project',
    techStack: ['Django', 'Python', 'SQLite', 'JavaScript', 'AI/NLP', 'eSewa', 'PayPal'],
    cardTechStack: ['Django', 'Python', 'JavaScript', 'eSewa & PayPal'],
    summary: 'Django-based peer-to-peer rental marketplace with verification, smart recommendations, and payments.',
    image: '/images/projects/rentera.png',
    description: [
      'Developed a Django-based peer-to-peer rental platform with secure authentication and citizenship and land ownership verification to improve trust between renters and owners.',
      'Engineered an intelligent recommendation engine that dynamically suggests properties based on user navigation patterns, clickstream data, and precise geolocation determination.',
      'Integrated an AI-powered chatbot and real-time communication system to automate renter-owner interactions, alongside a custom automated expiry logic for property listings to maintain data freshness.',
      'Built a robust backend for financial transactions, successfully integrating eSewa and PayPal gateways to facilitate secure rental payments and tracking.'
    ],
    highlights: [
      'Citizenship and land ownership verification for enhanced trust',
      'Intelligent recommendation engine using clickstream data and geolocation',
      'AI chatbot, real-time messaging, and integrated eSewa & PayPal payments'
    ]
  },
  {
    slug: 'logic-lens',
    shortTitle: 'Logic Lens',
    title: 'Logic Lens: Fallacy Detector & AI Reasoning Assistant',
    category: 'Hackathon Team Project — AI/ML Track Winner',
    techStack: ['Python', 'AI/ML', 'NLP', 'LLM APIs', 'Browser Extension'],
    cardTechStack: ['Python', 'NLP', 'LLM APIs', 'Browser Extension'],
    summary: 'AI reasoning assistant and browser extension for real-time logical fallacy detection and critical feedback.',
    description: [
      'Developed an AI-powered logical fallacy detection and reasoning assistant delivered through a browser extension, enabling users to analyse online content and arguments directly within their browsing experience.',
      'Integrated Natural Language Processing and Large Language Model APIs to identify fallacious reasoning patterns, evaluate argumentative structures, and generate contextual explanations with reasoning-based feedback.',
      'Designed a lightweight and user-friendly extension workflow for real-time text analysis, critical thinking assistance, and educational feedback across web platforms.',
      'Collaborated within a fast-paced hackathon team environment to rapidly prototype, develop, and present the solution, leading to winning the AI/ML Track at KU Hackathon 2025.'
    ],
    highlights: [
      'Real-time browser-based argument analysis & fallacy detection',
      'AI reasoning feedback using NLP and LLM APIs',
      'Winner — AI/ML Track, KU Hackathon 2025'
    ]
  },
  {
    slug: 'painting-muse',
    shortTitle: 'Painting Muse',
    title: 'Painting Muse — eCommerce Website',
    category: 'Individual Project',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'PostgreSQL', 'Django'],
    cardTechStack: ['Django', 'Python', 'PostgreSQL', 'JavaScript'],
    summary: 'Full-stack art commerce platform featuring filtering, category search, and secure PayPal integration.',
    image: '/images/projects/paintingmuse.png',
    description: [
      'Developed a full-stack e-commerce platform for art commerce featuring multi-criteria filtering, secure PayPal integration, and a category-based search system to streamline the buying and selling of paintings.',
      'Designed to support both buyers and sellers with a clean, product-focused browsing experience and robust database-backed inventory management.'
    ],
    highlights: [
      'Full-stack Django and PostgreSQL architecture',
      'Multi-criteria filtering & category-based search system',
      'Secure PayPal payment gateway integration'
    ]
  },
  {
    slug: 'cloudfusion',
    shortTitle: 'CloudFusion',
    title: 'CloudFusion: Unified Multi-Account Cloud Storage Dashboard',
    category: 'Web Application & Cloud Integration',
    techStack: ['Next.js', 'React', 'TypeScript', 'Google Drive API', 'OAuth 2.0', 'Tailwind CSS'],
    cardTechStack: ['Next.js', 'React', 'TypeScript', 'Google Drive API'],
    summary: 'Unified cloud storage management platform aggregating multiple Google Drive accounts into a centralized dashboard.',
    image: '/images/projects/cloudfusion.png',
    live: 'https://cloudfusionn.vercel.app/',
    github: 'https://github.com/binuPraj',
    description: [
      'Developed a modern cloud management dashboard that bridges multiple Google Drive accounts into a single, aggregated workspace.',
      'Integrated Google Drive APIs and OAuth 2.0 multi-account authentication, enabling users to aggregate, browse, and organize files across accounts without switching credentials.',
      'Engineered real-time storage telemetry, multi-format media gallery, instant file search, and grid/list views for efficient cross-account asset management.'
    ],
    highlights: [
      'Unified Google Drive multi-account aggregation & OAuth 2.0 authentication',
      'Real-time cross-account storage usage analytics & file telemetry',
      'Multi-format file gallery with instant search and responsive views',
      'Live deployed production web application on Vercel'
    ]
  }
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
