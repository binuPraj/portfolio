import styles from './Footer.module.css';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topBorder} />
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brand}>
            <div className={styles.logoBadgeWrap}>
              <span className={styles.logoBadge}>BP</span>
              <span className={styles.brandName}>Binu Prajapati</span>
            </div>
            <p className={styles.brandTagline}>
              Final-year Computer Engineering student building production AI systems and scalable web applications.
            </p>
            <div className={styles.statusIndicator}>
              <span className={styles.statusDot} />
              <span>Based in Nepal • Global Availability</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>Navigation</span>
            <nav className={styles.navLinks} aria-label="Footer navigation">
              <Link href="/">Home</Link>
              <Link href="/projects">Featured Projects</Link>
              <Link href="/experiences">Experience &amp; Awards</Link>
              <Link href="/resume">Resume &amp; Credentials</Link>
              <Link href="/contact">Contact / Inquiries</Link>
            </nav>
          </div>

          {/* Connect & Socials */}
          <div className={styles.linkGroup}>
            <span className={styles.linkGroupTitle}>Connect</span>
            <div className={styles.connectList}>
              <a href="https://github.com/binuPraj" target="_blank" rel="noopener noreferrer">
                GitHub (@binuPraj)
              </a>
              <a href="https://www.linkedin.com/in/binu-prajapati-793290305" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
              <a href="mailto:binupr203@gmail.com">
                binupr203@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} Binu Prajapati. Crafted with Next.js, React &amp; TypeScript.
          </p>

          <div className={styles.socialIcons}>
            <a href="https://github.com/binuPraj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/binu-prajapati-793290305" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="mailto:binupr203@gmail.com" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
