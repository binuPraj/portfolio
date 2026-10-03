'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight, Download, Check, Copy, Trophy, Sparkles, Code2, Layers, Terminal } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('binupr203@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        {/* Left Column: Text & CTAs */}
        <div className={`${styles.content} animate-fade-in`}>
          {/* Availability Status */}
          <div className={styles.statusBadge}>
            <span className={styles.statusPing}>
              <span className={styles.pingRing} />
              <span className={styles.pingDot} />
            </span>
            <span>Open for AI/ML &amp; Backend Roles</span>
          </div>

          <p className={styles.greeting}>Hello! I&apos;m</p>
          <h1 className={styles.title}>
            Binu Prajapati
          </h1>

          <div className={styles.roleContainer}>
            <span className={styles.roleText}>AI/ML Backend &amp; Full-Stack Developer</span>
            <span className={styles.locationBadge}>📍 Bhaktapur, Nepal</span>
          </div>

          <p className={styles.description}>
            Final-year Computer Engineering student at Khwopa Engineering College with hands-on experience in AI/ML backend and full-stack development, multi-stage data pipelines, and machine learning applications across academic and hackathon projects.
          </p>

          {/* Call to Actions */}
          <div className={styles.ctaRow}>
            <Link href="/projects" className={styles.primaryBtn} id="hero-view-work-btn">
              <span>Explore Projects</span>
              <ArrowRight size={16} className={styles.btnIcon} />
            </Link>

            <Link href="/resume" className={styles.secondaryBtn} id="hero-resume-btn">
              <Download size={15} />
              <span>Resume &amp; CV</span>
            </Link>

            <button
              onClick={handleCopyEmail}
              className={`${styles.copyEmailBtn} ${copied ? styles.copiedActive : ''}`}
              title="Click to copy email address"
              aria-label="Copy email address"
            >
              {copied ? <Check size={14} className={styles.checkIcon} /> : <Copy size={14} />}
              <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          {/* Social Row & Quick Links */}
          <div className={styles.socialRow}>
            <span className={styles.socialLabel}>Connect:</span>
            <a
              href="https://github.com/binuPraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={styles.socialLink}
              id="hero-github-btn"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/binu-prajapati-793290305"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={styles.socialLink}
              id="hero-linkedin-btn"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:binupr203@gmail.com"
              aria-label="Send Email"
              className={styles.socialLink}
              id="hero-email-btn"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Frame & Live Telemetry */}
        <div className={`${styles.imageWrapper} animate-fade-in`}>
          <div className={styles.imageAmbientGlow} />

          <div className={styles.cardFrame}>
            <div className={styles.imageInnerWrap}>
              <Image
                src="/images/profile.jpg"
                alt="Binu Prajapati — AI/ML Backend & Full-Stack Developer"
                width={360}
                height={360}
                className={styles.image}
                priority
              />
            </div>

            {/* Floating Highlight Badges */}
            <div className={`${styles.floatBadge} ${styles.floatBadgeTop}`}>
              <div className={styles.badgeIconWrap}>
                <Trophy size={16} className={styles.trophyIcon} />
              </div>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>NationalAI Hackathon &apos;26</span>
                <span className={styles.badgeSubtitle}>1st Runner-Up Winner</span>
              </div>
            </div>

            <div className={`${styles.floatBadge} ${styles.floatBadgeBottom}`}>
              <div className={styles.badgeIconWrap}>
                <Terminal size={16} className={styles.terminalIcon} />
              </div>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>AI/ML &amp; Backend</span>
                <span className={styles.badgeSubtitle}>FastAPI • Django • PyTorch</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Pillars Bento Grid */}
      <div className={styles.pillarsWrapper}>
        <div className="container">
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>
                <Code2 size={20} />
              </div>
              <div className={styles.pillarInfo}>
                <h4>Backend &amp; Databases</h4>
                <p>Building Django, FastAPI &amp; Flask backends, REST APIs, and database apps with PostgreSQL, MongoDB, MySQL &amp; SQLite.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>
                <Sparkles size={20} />
              </div>
              <div className={styles.pillarInfo}>
                <h4>AI/ML &amp; Data Pipelines</h4>
                <p>Designing multi-stage pipelines for text, audio, and video data using PyTorch, Whisper, PyAnnote, InsightFace, and LLMs.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>
                <Trophy size={20} />
              </div>
              <div className={styles.pillarInfo}>
                <h4>Hackathon Winner</h4>
                <p>1st Runner-Up at NationalAI Hackathon 2026, AI/ML Track Winner at KU Hackathon 2025, and workshop lead.</p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap}>
                <Layers size={20} />
              </div>
              <div className={styles.pillarInfo}>
                <h4>Data &amp; Architecture</h4>
                <p>Python data processing with Pandas and NumPy, integrating ML/NLP components into robust end-to-end applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
