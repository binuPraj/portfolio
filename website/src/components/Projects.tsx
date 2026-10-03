'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './Projects.module.css';
import { Sparkles, FolderGit2, ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';

const categories = ['All', 'AI/ML', 'Full-Stack & Backend', 'Team & Hackathon'];

export default function Projects() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'AI/ML') {
      return project.techStack.some(t => 
        t.includes('AI') || t.includes('NLP') || t.includes('PyTorch') || t.includes('Whisper') || t.includes('InsightFace') || t.includes('LLM')
      );
    }
    if (activeFilter === 'Full-Stack & Backend') {
      return project.techStack.some(t => 
        t.includes('Django') || t.includes('FastAPI') || t.includes('Flask') || t.includes('HTML') || t.includes('JavaScript') || t.includes('PostgreSQL') || t.includes('MongoDB') || t.includes('REST')
      );
    }
    if (activeFilter === 'Team & Hackathon') {
      return project.category.includes('Team') || project.category.includes('Hackathon') || project.category.includes('Major');
    }
    return true;
  });

  const handleCardClick = (slug: string) => {
    router.push(`/projects/${slug}`);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        {/* Section Header */}
        <div className="sectionHeader">
          <div className="sectionBadge">
            <Sparkles size={14} />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="sectionTitle">
            Featured <span className="sectionTitleGradient">Engineering Projects</span>
          </h2>
          <p className="sectionSubtitle">
            A showcase of technical projects spanning machine learning architectures, multimodal AI pipelines, and backend systems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className={styles.filterContainer}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`${styles.filterBtn} ${activeFilter === category ? styles.filterActive : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.grid}>
          {filteredProjects.map((project) => {
            const displayStack = project.cardTechStack || project.techStack.slice(0, 4);
            const cardTitle = project.shortTitle || project.title;

            return (
              <article 
                key={project.slug} 
                onClick={() => handleCardClick(project.slug)}
                className={styles.card}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(project.slug);
                  }
                }}
                aria-label={`View details for ${cardTitle}`}
              >
                <div className={styles.imageWrapper}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.image}
                    />
                  ) : (
                    <div className={styles.placeholder}>
                      <FolderGit2 size={36} className={styles.placeholderIcon} />
                      <span>{cardTitle}</span>
                    </div>
                  )}

                  <div className={styles.imageOverlay} />

                  <div className={styles.categoryPill}>
                    {project.category}
                  </div>

                  {/* Hover Action Overlay with GitHub and Live Link */}
                  <div className={styles.imageActionOverlay}>
                    <a
                      href={project.github || "https://github.com/binuPraj"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.imageActionBtn}
                      onClick={(e) => e.stopPropagation()}
                      title="View GitHub Repository"
                      aria-label={`View ${cardTitle} on GitHub`}
                    >
                      <Github size={18} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.imageActionBtn}
                        onClick={(e) => e.stopPropagation()}
                        title="View Live App"
                        aria-label={`View live app for ${cardTitle}`}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className={styles.content}>
                  {/* Clean Short Project Title with Arrow indicator */}
                  <div className={styles.titleRow}>
                    <h3 className={styles.title}>{cardTitle}</h3>
                    <ArrowUpRight size={18} className={styles.cardArrow} />
                  </div>

                  {/* Concise 1-2 lines description */}
                  <p className={styles.summary}>{project.summary}</p>

                  {/* Minimal tech stack tags at bottom */}
                  <div className={styles.tags}>
                    {displayStack.map((tech) => (
                      <span key={tech} className={styles.tag}>{tech}</span>
                    ))}
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
