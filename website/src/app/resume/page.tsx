import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Download, GraduationCap, Code2, Award, Sparkles, Calendar, Users, FolderGit2, CheckCircle2 } from 'lucide-react';
import styles from './ResumePage.module.css';

const certificates = [
  {
    title: 'NationalAI Hackathon 2026 — 1st Runner-Up',
    issuer: 'National AI Hackathon Committee',
    image: '/images/certificate/ai.jpg',
    category: 'National Award',
  },
  {
    title: 'KU Hackfest 2025 — AI/ML Track Winner',
    issuer: 'Kathmandu University',
    image: '/images/certificate/ku.jpg',
    category: 'Hackathon Award',
  },
  {
    title: 'Workshop Lead — Nobel Internship',
    issuer: 'Nobel Technologies',
    image: '/images/certificate/nobel.jpg',
    category: 'Leadership & Industry',
  },
  {
    title: 'Khwopa CEEL 2026 Participant',
    issuer: 'Khwopa Engineering College',
    image: '/images/certificate/khwopaceel.jpg',
    category: 'Engineering Program',
  },
  {
    title: '10-Day AI & ML Workshop',
    issuer: 'IT Students Network (ITNSP)',
    image: '/images/certificate/itsn.jpg',
    category: 'Machine Learning',
  },
  {
    title: '7-Day Jira Agile Workshop',
    issuer: 'Delta Dynamics Academy',
    image: '/images/certificate/jira.jpg',
    category: 'Agile & Tooling',
  },
  {
    title: 'Postman API Training',
    issuer: 'API Development & Testing',
    image: '/images/certificate/ai.jpg',
    category: 'Backend & APIs',
  },
  {
    title: 'LaTeX Academic Typesetting Workshop',
    issuer: 'Academic Writing & Typesetting',
    image: '/images/certificate/latex.jpg',
    category: 'Technical Writing',
  },
];

const miniProjects = [
  'Bus Ticket Reservation System',
  'Chatbot - UFONepal',
  'Pocketmedid',
  'Echo',
  'Tabula',
  'Photobooth',
  'WordPress Anime Store',
  'Task Manager',
  'Graphical Linked List Representator'
];

export default function ResumePage() {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          {/* Header */}
          <div className="sectionHeader animate-fade-in">
            <div className="sectionBadge">
              <Sparkles size={14} />
              <span>Curriculum Vitae</span>
            </div>
            <h1 className="sectionTitle">
              Resume &amp; <span className="sectionTitleGradient">Academic Background</span>
            </h1>
            <p className="sectionSubtitle">
              Final-year Computer Engineering student at Khwopa Engineering College with hands-on experience in AI/ML backend and full-stack development, multi-stage data pipelines, and database-driven systems.
            </p>

            <div className={styles.downloadWrapper}>
              <a href="/resume.pdf" download className={styles.downloadPdfBtn} id="download-resume-pdf">
                <Download size={16} />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>
          </div>

          <div className={styles.resumeLayout}>
            {/* Education Timeline */}
            <div className={styles.blockSection}>
              <div className={styles.blockTitleWrap}>
                <div className={styles.blockIcon}>
                  <GraduationCap size={22} />
                </div>
                <h2>Education</h2>
              </div>

              <div className={styles.eduList}>
                <div className={styles.eduCard}>
                  <div className={styles.eduHeader}>
                    <div>
                      <h3 className={styles.degreeTitle}>Bachelor of Engineering in Computer Engineering</h3>
                      <p className={styles.institutionName}>Khwopa Engineering College, Bhaktapur | Purbanchal University</p>
                    </div>
                    <div className={styles.eduDatePill}>
                      <Calendar size={13} />
                      <span>2022 – Present (Final Year)</span>
                    </div>
                  </div>
                  <p className={styles.eduDesc}>
                    Specializing in AI/ML backend and full-stack development, data pipelines, and machine learning applications. Practical background building Django-based backends, REST APIs, and database-driven applications using PostgreSQL, MongoDB, MySQL, and SQLite, along with multi-stage pipelines for text, audio, and video data.
                  </p>
                </div>

                <div className={styles.eduCard}>
                  <div className={styles.eduHeader}>
                    <div>
                      <h3 className={styles.degreeTitle}>Higher Secondary Education (+2 Science)</h3>
                      <p className={styles.institutionName}>Khwopa Higher Secondary School, Bhaktapur</p>
                    </div>
                    <div className={styles.eduDatePill}>
                      <Calendar size={13} />
                      <span>Completed 2022</span>
                    </div>
                  </div>
                  <p className={styles.eduDesc}>
                    Majored in Physics, Mathematics, and Computer Science with solid analytical problem-solving foundation and scientific reasoning principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Skills Matrix */}
            <div className={styles.blockSection}>
              <div className={styles.blockTitleWrap}>
                <div className={styles.blockIcon}>
                  <Code2 size={22} />
                </div>
                <h2>Technical Skills</h2>
              </div>

              <div className={styles.skillsGrid}>
                <div className={styles.skillBox}>
                  <h4>Programming Languages</h4>
                  <div className={styles.pillContainer}>
                    <span className={styles.pill}>Python</span>
                    <span className={styles.pill}>C</span>
                    <span className={styles.pill}>C++</span>
                    <span className={styles.pill}>JavaScript</span>
                    <span className={styles.pill}>TypeScript</span>
                  </div>
                </div>

                <div className={styles.skillBox}>
                  <h4>Backend Development</h4>
                  <div className={styles.pillContainer}>
                    <span className={styles.pill}>Django / DRF</span>
                    <span className={styles.pill}>FastAPI</span>
                    <span className={styles.pill}>Flask</span>
                    <span className={styles.pill}>REST APIs</span>
                  </div>
                </div>

                <div className={styles.skillBox}>
                  <h4>AI/ML &amp; Data</h4>
                  <div className={styles.pillContainer}>
                    <span className={styles.pill}>PyTorch</span>
                    <span className={styles.pill}>scikit-learn</span>
                    <span className={styles.pill}>NLP</span>
                    <span className={styles.pill}>Pandas &amp; NumPy</span>
                    <span className={styles.pill}>LLM APIs</span>
                    <span className={styles.pill}>Whisper &amp; InsightFace</span>
                  </div>
                </div>

                <div className={styles.skillBox}>
                  <h4>Databases &amp; Web</h4>
                  <div className={styles.pillContainer}>
                    <span className={styles.pill}>PostgreSQL</span>
                    <span className={styles.pill}>MongoDB</span>
                    <span className={styles.pill}>MySQL</span>
                    <span className={styles.pill}>SQLite</span>
                    <span className={styles.pill}>HTML &amp; CSS</span>
                  </div>
                </div>

                <div className={styles.skillBox}>
                  <h4>Tools &amp; Technologies</h4>
                  <div className={styles.pillContainer}>
                    <span className={styles.pill}>Git &amp; GitHub</span>
                    <span className={styles.pill}>VS Code</span>
                    <span className={styles.pill}>Postman</span>
                    <span className={styles.pill}>Jupyter Notebook</span>
                    <span className={styles.pill}>Google Colab</span>
                    <span className={styles.pill}>LaTeX</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership & Extracurricular */}
            <div className={styles.blockSection}>
              <div className={styles.blockTitleWrap}>
                <div className={styles.blockIcon}>
                  <Users size={22} />
                </div>
                <h2>Leadership &amp; Extracurricular</h2>
              </div>

              <div className={styles.eduList}>
                <div className={styles.eduCard}>
                  <div className={styles.eduHeader}>
                    <div>
                      <h3 className={styles.degreeTitle}>Workshop Lead — Nobel Internship</h3>
                      <p className={styles.institutionName}>Nobel Technologies | WordPress Web Design Workshop</p>
                    </div>
                  </div>
                  <p className={styles.eduDesc}>
                    Facilitated an intensive 4-day WordPress web design workshop, guiding participants through hands-on exercises in site development, theme customization, and responsive design.
                  </p>
                </div>

                <div className={styles.eduCard}>
                  <div className={styles.eduHeader}>
                    <div>
                      <h3 className={styles.degreeTitle}>Competitive Hackathons &amp; Technical Challenges</h3>
                      <p className={styles.institutionName}>NationalAI Hackathon 2026 &amp; KU Hackathon 2025</p>
                    </div>
                  </div>
                  <p className={styles.eduDesc}>
                    Actively participated in high-intensity national hackathons, winning 1st Runner-Up at NationalAI Hackathon 2026 and 1st Place in the AI/ML Track at KU Hackathon 2025, solving real-world challenges under strict constraints.
                  </p>
                </div>

                <div className={styles.eduCard}>
                  <div className={styles.eduHeader}>
                    <div>
                      <h3 className={styles.degreeTitle}>Agile Team-Based Software Engineering</h3>
                      <p className={styles.institutionName}>Full-Lifecycle Development &amp; Coordination</p>
                    </div>
                  </div>
                  <p className={styles.eduDesc}>
                    Experienced in Agile-style team-based software development with roles spanning UI/UX design, backend architecture, API integration, and project coordination.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Mini Projects */}
            <div className={styles.blockSection}>
              <div className={styles.blockTitleWrap}>
                <div className={styles.blockIcon}>
                  <FolderGit2 size={22} />
                </div>
                <h2>Additional Mini Projects</h2>
              </div>

              <div className={styles.skillBox}>
                <div className={styles.pillContainer}>
                  {miniProjects.map((proj) => (
                    <span key={proj} className={styles.pill}>
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Verified Certificates Showcase */}
            <div className={styles.blockSection}>
              <div className={styles.blockTitleWrap}>
                <div className={styles.blockIcon}>
                  <Award size={22} />
                </div>
                <h2>Achievements &amp; Verified Certifications</h2>
              </div>

              <div className={styles.certGrid}>
                {certificates.map((cert) => (
                  <article key={cert.title} className={styles.certCard}>
                    <div className={styles.certImageWrap}>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={styles.certImage}
                      />
                      <div className={styles.certOverlay} />
                      <span className={styles.certCategoryPill}>{cert.category}</span>
                    </div>
                    <div className={styles.certInfo}>
                      <h4 className={styles.certTitle}>{cert.title}</h4>
                      <p className={styles.certIssuer}>{cert.issuer}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
