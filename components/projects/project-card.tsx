'use client';

import type { Project } from '@/data/projects';
import { Tag } from '@/components/tag';
import styles from './project-card.module.css';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <article
      className={styles.card}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <header className={styles.header}>
        <span className={styles.num}>{project.num}</span>
        <span className={styles.meta}>{project.year} · {project.role}</span>
      </header>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.subtitle}>{project.subtitle}</p>
      <p className={styles.description}>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <footer className={styles.footer}>
        <span className={styles.readMore}>
          READ <span className={styles.arrow}>→</span>
        </span>
      </footer>
    </article>
  );
}
