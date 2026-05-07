'use client';

import { useState } from 'react';
import { projects, type Project } from '@/data/projects';
import { ProjectCard } from './project-card';
import { ProjectModal } from './project-modal';
import styles from './projects-grid.module.css';

export function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
