export interface Project {
  slug: string;
  title: string;
  category: string;
  techStack: string[];
  summary: string;
  description: string[];
  highlights: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: 'logic-lens',
    title: 'Logic Lens: Fallacy Detector & AI Reasoning Assistant',
    category: 'Hackathon Team Project',
    techStack: ['Python', 'AI/ML', 'NLP', 'LLM APIs', 'Browser Extension'],
    summary: 'An AI-powered browser extension for detecting logical fallacies and improving reasoning quality in real time.',
    description: [
      'Developed an AI-powered logical fallacy detection and reasoning assistant delivered through a browser extension, enabling users to analyse online content and arguments directly within their browsing experience.',
      'Integrated Natural Language Processing and Large Language Model APIs to identify fallacious reasoning patterns, evaluate argumentative structures, and generate contextual explanations with reasoning-based feedback.',
      'Designed a lightweight and user-friendly extension workflow for real-time text analysis, critical thinking assistance, and educational feedback across web platforms.',
      'Collaborated within a fast-paced hackathon team environment to rapidly prototype, develop, and present the solution, leading to winning the AI/ML Track at KU Hackathon 2025.'
    ],
    highlights: [
      'Real-time browser-based argument analysis',
      'AI reasoning feedback using NLP and LLM APIs',
      'Hackathon-winning team solution'
    ]
  },
  {
    slug: 'rentera',
    title: 'RentEra: Peer-to-Peer Rental & Management System',
    category: 'Third-Year Major Team Project',
    techStack: ['Django', 'Python', 'SQLite', 'JavaScript', 'AI/NLP', 'eSewa', 'PayPal'],
    summary: 'A rental marketplace and management platform that removes intermediaries and automates trust, discovery, and payments.',
    description: [
      'Developed a secure MERN-stack and Django-integrated ecosystem to eliminate intermediaries in the housing market, implementing advanced authentication workflows utilizing citizenship and land ownership verification for enhanced trust.',
      'Engineered an intelligent recommendation engine that dynamically suggests properties based on user navigation patterns, clickstream data, and precise geolocation determination.',
      'Integrated an AI-powered chatbot and real-time communication system to automate renter-owner interactions, alongside a custom automated expiry logic for property listings to maintain data freshness.',
      'Built a robust backend for financial transactions, successfully integrating eSewa and PayPal gateways to facilitate secure rental payments and tracking.'
    ],
    highlights: [
      'Trust-focused property verification workflow',
      'Location-aware property recommendations',
      'Automated chat and payment integration'
    ]
  },
  {
    slug: 'chatbot',
    title: 'Chatbot - UFONepal',
    category: 'Individual Project',
    techStack: ['Python', 'Streamlit', 'NLP Libraries', 'PyTorch', 'pyttsx3'],
    summary: 'A lightweight chatbot for learning and small-scale AI conversation applications with voice output.',
    description: [
      'Designed for learning and small-scale AI conversation applications.',
      'Features intent-based question handling, text-to-speech responses, and session-based conversation management.',
      'Built to demonstrate practical NLP pipeline integration in a simple interface.'
    ],
    highlights: [
      'Intent-based conversation handling',
      'Text-to-speech responses',
      'Streamlit-based interface'
    ]
  },
  {
    slug: 'painting-muse',
    title: 'Painting Muse - eCommerce Website',
    category: 'Individual Project',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python', 'PostgreSQL', 'Django'],
    summary: 'A full-stack art commerce platform with filtering, secure payments, and category-based search.',
    description: [
      'Developed a full-stack e-commerce platform for art commerce featuring multi-criteria filtering, secure PayPal integration, and a category-based search system to streamline the buying and selling of paintings.',
      'Designed to support both buyers and sellers with a clean, product-focused browsing experience.'
    ],
    highlights: [
      'Art marketplace and payment flow',
      'Category-based search and filtering',
      'Full-stack Django backend'
    ]
  },
  {
    slug: 'bus-ticket-reservation-system',
    title: 'Bus Ticket Reservation System',
    category: 'Team Project',
    techStack: ['C++', 'graphics.h'],
    summary: 'A GUI desktop reservation system with interactive seat layout, booking automation, and route management.',
    description: [
      'Developed a GUI-based desktop application for bus reservation featuring an interactive seat layout, automated ticket booking, and route management using C++ graphics libraries.',
      'Focused on simple reservation flows and visual seat selection for a more intuitive desktop experience.'
    ],
    highlights: [
      'Interactive seat selection UI',
      'Automated booking workflow',
      'Desktop application in C++'
    ]
  }
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
