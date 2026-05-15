import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './ResumePage.module.css';

const certificates = [
  {
    title: 'KU Hackest',
    image: '/images/certificate/ku.jpg',
  },
  {
    title: 'Nobel Internship',
    image: '/images/certificate/nobel.jpg',
  },
  {
    title: 'Khwopa CEEL 2026 Participant',
    image: '/images/certificate/khwopaceel.jpg',
  },
  {
    title: 'AI Workshop Certificate',
    image: '/images/certificate/ai.jpg',
  },
  {
    title: 'ITSN Workshop Certificate',
    image: '/images/certificate/itsn.jpg',
  },
  {
    title: 'Jira Training Certificate',
    image: '/images/certificate/jira.jpg',
  },
  {
    title: 'LaTeX Workshop Certificate',
    image: '/images/certificate/latex.jpg',
  },
];

export default function ResumePage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <div className={`${styles.header} animate-fade-in`}>
            <h1>Resume & CV<span>.</span></h1>
            <p className={styles.sectionIntro}>A summary of my professional experience, education, and technical skills.</p>
            <div className={styles.actions}>
              <a href="/resume.pdf" download className={styles.downloadBtn}>
                Download PDF
              </a>
            </div>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.educationSection}>
              <h3>Education</h3>
              <div className={styles.educationList}>
                <div className={styles.educationRow}>
                  <div className={styles.educationDegree}>Bachelor of Engineering in Computer Engineering</div>
                  <div className={styles.educationMeta}>2022 – Present<br/>Khwopa Engineering College, Bhaktapur | Purbanchal University</div>
                </div>

                <div className={styles.educationRow}>
                  <div className={styles.educationDegree}>Higher Secondary Education (+2 Science)</div>
                  <div className={styles.educationMeta}>2022<br/>Khwopa Higher Secondary School, Bhaktapur</div>
                </div>
              </div>
            </div>

            <div className={styles.skillsSection}>
              <h3>Technical Skills</h3>
              <div className={styles.skillsContainer}>
                <div className={styles.skillGroup}>
                  <h4>Programming Languages</h4>
                  <div className={styles.skillsTags}>
                    <span>C</span>
                    <span>C++</span>
                    <span>Python</span>
                    <span>JavaScript</span>
                  </div>
                </div>
                <div className={styles.skillGroup}>
                  <h4>Web Development</h4>
                  <div className={styles.skillsTags}>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Django</span>
                  </div>
                </div>
                <div className={styles.skillGroup}>
                  <h4>Tools & Technologies</h4>
                  <div className={styles.skillsTags}>
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>VS Code</span>
                    <span>LATEX</span>
                    <span>WordPress</span>
                  </div>
                </div>
                <div className={styles.skillGroup}>
                  <h4>Core Competencies</h4>
                  <div className={styles.skillsTags}>
                    <span>Full-Stack Development</span>
                    <span>API Integration</span>
                    <span>UI/UX Understanding</span>
                    <span>Problem Solving</span>
                    <span>Team Collaboration</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.certificatesSection}>
              <h3>Certificates</h3>
              <div className={styles.certificateGrid}>
                {certificates.map((certificate) => (
                  <article key={certificate.title} className={styles.certificateCard}>
                    <div className={styles.certificateImageWrap}>
                      <Image
                        src={certificate.image}
                        alt={certificate.title}
                        fill
                        className={styles.certificateImage}
                      />
                    </div>
                    <h4>{certificate.title}</h4>
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
