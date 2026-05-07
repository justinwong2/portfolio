'use client';

import { useEffect } from 'react';
import type { Experience } from '@/data/experiences';
import { Tag } from '@/components/tag';
import styles from './experience-modal.module.css';

interface ExperienceModalProps {
  experience: Experience;
  onClose: () => void;
}

export function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
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
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.num}>{experience.num}</span>
            <span className={styles.period}>{experience.period}</span>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </header>

        <div className={styles.content}>
          <h2 className={styles.company}>{experience.company}</h2>
          <p className={styles.role}>{experience.role}</p>
          <p className={styles.location}>{experience.location}</p>

          <div className={styles.tags}>
            {experience.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <div className={styles.divider} />

          <div className={styles.writeup}>
            {experience.writeup.split('\n\n').map((paragraph, i) => (
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

          {experience.companyUrl && (
            <div className={styles.links}>
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Visit Company ↗
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
