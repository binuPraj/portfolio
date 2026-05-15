import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Animated fire/ember particles */}
      <div className={styles.particles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>

      {/* Decorative corner runes */}
      <div className={`${styles.cornerRune} ${styles.topLeft}`}>
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10 90 L10 10 L90 10" />
          <circle cx="10" cy="10" r="4" fill="currentColor" />
          <path d="M20 80 L20 20 L80 20" opacity="0.5" />
        </svg>
      </div>
      <div className={`${styles.cornerRune} ${styles.topRight}`}>
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M90 90 L90 10 L10 10" />
          <circle cx="90" cy="10" r="4" fill="currentColor" />
          <path d="M80 80 L80 20 L20 20" opacity="0.5" />
        </svg>
      </div>
      <div className={`${styles.cornerRune} ${styles.bottomLeft}`}>
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M10 10 L10 90 L90 90" />
          <circle cx="10" cy="90" r="4" fill="currentColor" />
          <path d="M20 20 L20 80 L80 80" opacity="0.5" />
        </svg>
      </div>
      <div className={`${styles.cornerRune} ${styles.bottomRight}`}>
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M90 10 L90 90 L10 90" />
          <circle cx="90" cy="90" r="4" fill="currentColor" />
          <path d="M80 20 L80 80 L20 80" opacity="0.5" />
        </svg>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={`${styles.content} animate-fade-in`}>
          <p className={styles.welcome}>Welcome to my portfolio</p>
          <h2 className={styles.subtitle}>Hello, I am</h2>
          <h1 className={styles.title}>Binu Prajapati<span>.</span></h1>
          <h2 className={styles.headline}>(AI/ML & Full-Stack Developer)</h2>
          <p className={styles.description}>
          I build scalable web applications and AI-driven solutions that combine clean architecture with practical innovation. My work focuses on creating efficient, user-focused technology through thoughtful engineering and continuous exploration.
          </p>
          <div className={styles.socialActions}>
            <a
              href="https://www.linkedin.com/in/binu-prajapati-793290305"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className={`${styles.socialBtn} ${styles.linkedinBtn}`}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/binuPraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className={`${styles.socialBtn} ${styles.githubBtn}`}
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:binupr203@gmail.com"
              aria-label="Gmail"
              title="Gmail"
              className={`${styles.socialBtn} ${styles.gmailBtn}`}
            >
              <Mail size={18} />
            </a>
          </div>
          <div className={styles.workAction}>
            <Link href="/projects" className={`${styles.primaryBtn} ${styles.workBtn}`}>
              View My Work
            </Link>
          </div>
        </div>
        <div className={`${styles.imageWrapper} animate-fade-in`}>
          {/* Animated ring effect */}
          <div className={styles.ring}></div>
          <div className={styles.ring2}></div>
          <div className={styles.circle}></div>
          <Image 
            src="/images/profile.jpg" 
            alt="Profile Avatar" 
            width={400} 
            height={400} 
            className={styles.image}
            priority
          />
        </div>
      </div>

      <div className={styles.aboutWrap}>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutSection}>
            <h3 className={styles.aboutTitle}>About Me</h3>
            <p className={styles.aboutIntro}>
              I&apos;m passionate about crafting experiences that blend thoughtful design with technical excellence. My journey spans software development, traditional art, and academic research.
            </p>

            <div className={styles.aboutGrid}>
              <div className={styles.aboutCard}>
                <div className={styles.aboutIcon}>◆</div>
                <h4>Development</h4>
                <p>Building robust, scalable applications with modern technologies</p>
              </div>

              <div className={styles.aboutCard}>
                <div className={styles.aboutIcon}>🎨</div>
                <h4>Art &amp; Design</h4>
                <p>Creating a blend of abstract paintings and traditional artwork</p>
              </div>

              <div className={styles.aboutCard}>
                <div className={styles.aboutIcon}>🔬</div>
                <h4>Research</h4>
                <p>Striving to publish academic work in top conferences</p>
              </div>

              <div className={styles.aboutCard}>
                <div className={styles.aboutIcon}>🏆</div>
                <h4>Fellowships</h4>
                <p>Recognized through prestigious programs and awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
