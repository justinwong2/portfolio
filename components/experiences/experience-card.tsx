'use client';

import type { Experience } from '@/data/experiences';
import { Tag } from '@/components/tag';
import styles from './experience-card.module.css';

interface ExperienceCardProps {
  experience: Experience;
  onSelect: (experience: Experience) => void;
}

export function ExperienceCard({ experience, onSelect }: ExperienceCardProps) {
  return (
    <article
      className={styles.card}
      onClick={() => onSelect(experience)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(experience);
        }
      }}
    >
      <header className={styles.header}>
        <span className={styles.num}>{experience.num}</span>
        <span className={styles.period}>{experience.period}</span>
      </header>

      <h3 className={styles.company}>{experience.company}</h3>
      <p className={styles.role}>{experience.role}</p>
      <p className={styles.location}>{experience.location}</p>
      <p className={styles.description}>{experience.description}</p>

      <div className={styles.tags}>
        {experience.tags.map((tag) => (
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
