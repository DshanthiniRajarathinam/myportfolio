import React, { useState } from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectDetailsModal } from '../components/projects/ProjectDetailsModal';
import { projectsData } from '../data/projectsData';
import './ProjectsSection.css';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionHeader
          badge="Featured Engineering"
          title="Interactive Project"
          highlight="Showcase"
          subtitle="Real-world full-stack architectures and core algorithmic systems with verified GitHub repositories."
        />

        {/* Projects Cards Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Details Modal */}
        <ProjectDetailsModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
