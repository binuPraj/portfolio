import Link from 'next/link';
import Image from 'next/image';
import styles from './Projects.module.css';
import { Github } from 'lucide-react';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Featured Projects<span>.</span></h2>
        <p className={styles.sectionIntro}>
          A showcase of my technical projects spanning web development, machine learning, and creative applications. Each project represents a unique challenge and learning experience.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <article key={project.slug} className={styles.card}>
              <div className={styles.imageWrapper}>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span>Image coming soon</span>
                  </div>
                )}

                <div className={styles.overlay}>
                  <a
                    href="https://github.com/binuPraj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.repoBtn}
                    aria-label={`Open GitHub for ${project.title}`}
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.tags}>
                  {project.techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <Link href={`/projects/${project.slug}`} className={styles.cardTitleLink}>
                  <h3>{project.title}</h3>
                </Link>

                <Link href={`/projects/${project.slug}`} className={styles.cardSummaryLink}>
                  <p>{project.summary}</p>
                </Link>

                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
