import Image from 'next/image';
import { CalendarDays, MapPin, Trophy, Award, Briefcase, Sparkles, BookOpen } from 'lucide-react';
import styles from './Experiences.module.css';

const experiences = [
  {
    title: 'NationalAI Hackathon 2026 — 1st Runner-Up',
    subtitle: 'POLARISAI: Controversy Detection & AI Prevention System',
    image: '/images/certificate/ai.jpg',
    date: '2026',
    location: 'Nepal',
    type: 'Hackathon Award',
    badgeTone: 'gold',
    icon: Trophy,
    description:
      'Engineered an explainable controversy scoring framework and browser extension by developing a multi-stage NLP pipeline integrating claim extraction, Reddit multi-thread retrieval, stance detection, emotion analysis, and constructive statement reformulation. Secured 1st Runner-Up position at NationalAI Hackathon 2026.',
    tags: ['Python', 'FastAPI', 'Multi-Stage NLP', 'LLM APIs', 'Reddit API', 'Browser Extension'],
  },
  {
    title: 'KU Hackathon 2025 — AI/ML Track Winner',
    subtitle: 'Logic Lens: Fallacy Detector & AI Reasoning Assistant',
    image: '/images/certificate/ku.jpg',
    date: '2025',
    location: 'Kathmandu University, Nepal',
    type: 'Hackathon Win',
    badgeTone: 'gold',
    icon: Trophy,
    description:
      'Developed an AI-powered logical fallacy detection and reasoning assistant delivered through a browser extension for real-time text analysis, argument structure evaluation, and educational feedback. Won 1st Place in the AI/ML Track at KU Hackathon 2025.',
    tags: ['Python', 'AI/ML', 'NLP', 'LLM APIs', 'Chrome Extension', 'Real-Time Reasoning'],
  },
  {
    title: 'Workshop Lead — Nobel Internship',
    subtitle: 'WordPress Web Design Workshop Lead & Full-Stack Contributor',
    image: '/images/certificate/nobel.jpg',
    date: '2025 – 2026',
    location: 'Lalitpur, Nepal',
    type: 'Leadership & Dev',
    badgeTone: 'blue',
    icon: Briefcase,
    description:
      'Facilitated an intensive 4-day WordPress web design workshop, guiding participants through hands-on exercises in site development and design. Gained hands-on experience in Agile-style team-based software development with roles spanning UI/UX, backend, and project coordination.',
    tags: ['Workshop Lead', 'Agile / Scrum', 'UI/UX', 'Backend', 'Project Coordination'],
  },
  {
    title: 'Khwopa CEEL 2026 — Engineering Participant',
    subtitle: 'Collaborative Engineering & Experiential Learning',
    image: '/images/certificate/khwopaceel.jpg',
    date: '2026',
    location: 'Khwopa Engineering College, Bhaktapur',
    type: 'Engineering Program',
    badgeTone: 'cyan',
    icon: Award,
    description:
      'Actively participated in competitive technical challenges and collaborative engineering projects, demonstrating problem-solving, architectural design, and software delivery under real-world academic constraints.',
    tags: ['System Architecture', 'Technical Problem Solving', 'Peer Collaboration'],
  },
  {
    title: 'Workshops & Professional Certifications',
    subtitle: 'AI/ML, Jira, Postman & LaTeX Training',
    image: '/images/certificate/itsn.jpg',
    date: '2024 – 2026',
    location: 'ITNSP & Delta Dynamics Academy',
    type: 'Certifications',
    badgeTone: 'green',
    icon: BookOpen,
    description:
      'Completed a 10-day intensive AI & ML workshop by ITNSP, a 7-day Jira Workshop by Delta Dynamics Academy, certified Postman API testing training, and an academic LaTeX typesetting workshop.',
    tags: ['ITNSP 10-day AI/ML', '7-day Jira (Delta Dynamics)', 'Postman Training', 'LaTeX Workshop'],
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className={styles.experiences}>
      <div className="container">
        <div className="sectionHeader">
          <div className="sectionBadge">
            <Sparkles size={14} />
            <span>Milestones &amp; Impact</span>
          </div>
          <h2 className="sectionTitle">
            Experience, <span className="sectionTitleGradient">Achievements &amp; Leadership</span>
          </h2>
          <p className="sectionSubtitle">
            National hackathon awards, leadership roles, engineering internships, and verified technical programs.
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((item) => {
            const IconComponent = item.icon;
            return (
              <article key={item.title} className={styles.timelineCard} data-tone={item.badgeTone}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconAndType}>
                    <div className={styles.typeIconWrap}>
                      <IconComponent size={18} />
                    </div>
                    <span className={styles.typeBadge}>
                      {item.type}
                    </span>
                  </div>

                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <CalendarDays size={14} />
                      {item.date}
                    </span>
                    <span className={styles.metaItem}>
                      <MapPin size={14} />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.textColumn}>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    <p className={styles.itemSubtitle}>{item.subtitle}</p>
                    <p className={styles.itemDescription}>{item.description}</p>

                    <div className={styles.tagRow}>
                      {item.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.imageColumn}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className={styles.certImage}
                      />
                      <div className={styles.imageOverlay} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}