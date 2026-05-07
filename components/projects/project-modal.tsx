'use client';

import { useEffect } from 'react';
import type { Project } from '@/data/projects';
import { Tag } from '@/components/tag';
import styles from './project-modal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.num}>{project.num}</span>
            <span className={styles.meta}>{project.year} · {project.role}</span>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </header>

        {/* Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.subtitle}>{project.subtitle}</p>

          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <div className={styles.divider} />

          <div className={styles.writeup}>
            {project.writeup.split('\n\n').map((paragraph, i) => (
              <p key={i}>
                {paragraph.split('\n').map((line, j, arr) => (
                  <span key={j}>
                    {line}
                    {j < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>

          {/* Links */}
          {(project.githubUrl || project.demoUrl) && (
            <div className={styles.links}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub ↗
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.link} ${styles.linkPrimary}`}
                >
                  Live Demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
