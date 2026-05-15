import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Github, ArrowLeft, ExternalLink } from 'lucide-react';
import { getProjectBySlug, projects } from '@/data/projects';
import styles from './ProjectDetail.module.css';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.section}>
        <div className={`container ${styles.container}`}>
          <Link href="/projects" className={styles.backLink}>
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div className={styles.hero}>
            <div className={styles.heroText}>
              <p className={styles.category}>{project.category}</p>
              <h1>{project.title}<span>.</span></h1>
              <p className={styles.summary}>{project.summary}</p>
              <div className={styles.techLine}>
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className={styles.mediaCard}>
              {project.image ? (
                <Image src={project.image} alt={project.title} fill className={styles.image} />
              ) : (
                <div className={styles.placeholder}>Image coming soon</div>
              )}
            </div>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.detailsCard}>
              <h2>Overview</h2>
              {project.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className={styles.detailsCard}>
              <h2>Highlights</h2>
              <ul>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.actions}>
                <a href="https://github.com/binuPraj" target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                  <Github size={18} />
                  GitHub
                </a>

                {project.live ? (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
                    <ExternalLink size={18} />
                    Live
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
