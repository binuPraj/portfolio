import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Github, ArrowLeft, ExternalLink, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { getProjectBySlug, projects } from '@/data/projects';
import styles from './ProjectDetail.module.css';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <article className={styles.article}>
        <div className={`container ${styles.container}`}>
          {/* Breadcrumb Navigation */}
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={16} />
            <span>Back to all projects</span>
          </Link>

          {/* Hero Header */}
          <div className={styles.header}>
            <div className={styles.categoryBadge}>
              <Sparkles size={14} />
              <span>{project.category}</span>
            </div>
            
            <h1 className={styles.projectTitle}>{project.title}</h1>
            <p className={styles.projectSummary}>{project.summary}</p>

            {/* Tech Stack Pills */}
            <div className={styles.techStackRow}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className={styles.actionRow}>
              <a
                href={project.github || "https://github.com/binuPraj"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryActionBtn}
              >
                <Github size={18} />
                <span>View Source Code</span>
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryActionBtn}
                >
                  <ExternalLink size={18} />
                  <span>Launch Live App</span>
                </a>
              )}
            </div>
          </div>

          {/* Main Media Showcase */}
          <div className={styles.mediaContainer}>
            {project.image ? (
              <div className={styles.imageInner}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className={styles.heroImage}
                />
              </div>
            ) : (
              <div className={styles.imagePlaceholder}>
                <Layers size={48} className={styles.placeholderIcon} />
                <span>{project.title} — System Architecture &amp; Case Study</span>
              </div>
            )}
          </div>

          {/* Details & Breakdown Grid */}
          <div className={styles.detailsGrid}>
            <div className={styles.detailsCard}>
              <h2 className={styles.cardHeading}>System Overview</h2>
              <div className={styles.descriptionText}>
                {project.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className={styles.detailsCard}>
              <h2 className={styles.cardHeading}>Key Architectural Highlights</h2>
              <ul className={styles.highlightsList}>
                {project.highlights.map((item, idx) => (
                  <li key={idx} className={styles.highlightItem}>
                    <CheckCircle2 size={18} className={styles.highlightIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
