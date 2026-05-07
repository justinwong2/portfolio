'use client';

import { useState } from 'react';
import { experiences, type Experience } from '@/data/experiences';
import { ExperienceCard } from './experience-card';
import { ExperienceModal } from './experience-modal';
import styles from './experiences-grid.module.css';

export function ExperiencesGrid() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  return (
    <>
      <div className={styles.grid}>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            onSelect={setSelectedExperience}
          />
        ))}
      </div>

      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </>
  );
}
