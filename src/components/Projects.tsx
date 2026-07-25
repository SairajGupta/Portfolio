// src/components/Projects.tsx
import { ArrowRight, Check } from 'lucide-react';
import Icon from './Icon';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { LawVisual, ClinicVisual, EmotionVisual } from './ProjectVisuals';

const visualMap: Record<Project['visualType'], React.FC> = {
  law: LawVisual,
  clinic: ClinicVisual,
  emotion: EmotionVisual,
};

const visualClassMap: Record<Project['visualType'], string> = {
  law: 'law-visual',
  clinic: 'clinic-visual',
  emotion: 'emotion-visual',
};

const glowClassMap: Record<Project['visualType'], string> = {
  law: 'pv-glow',
  clinic: 'pv-glow clinic-glow',
  emotion: 'pv-glow emotion-glow',
};

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
  onNavClick: (href: string) => void;
}

function ProjectCard({ project, reverse, onNavClick }: ProjectCardProps) {
  const Visual = visualMap[project.visualType];

  return (
    <article className={`project-card${reverse ? ' project-card-reverse' : ''} reveal`}>
      {/* Browser mock visual */}
      <div className={`project-visual ${visualClassMap[project.visualType]}`}>
        <div className={glowClassMap[project.visualType]} />
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer" className="pv-window" style={{ display: 'block', textDecoration: 'none' }}>
            <div className="pv-bar">
              <span /><span /><span />
            </div>
            {project.imageUrl ? (
              <div className="pv-image-container">
                <img src={project.imageUrl} alt={project.title} className="pv-img" />
              </div>
            ) : (
              <Visual />
            )}
          </a>
        ) : (
          <div className="pv-window">
            <div className="pv-bar">
              <span /><span /><span />
            </div>
            {project.imageUrl ? (
              <div className="pv-image-container">
                <img src={project.imageUrl} alt={project.title} className="pv-img" />
              </div>
            ) : (
              <Visual />
            )}
          </div>
        )}
        <div className="project-overlay">
          <span className="pv-label">{project.title.split('—')[0].trim()}</span>
        </div>
      </div>

      {/* Project info */}
      <div className="project-info">
        <div className="project-meta">
          <span className="project-type">
            <Icon name={project.typeIcon} size={13} strokeWidth={2} />
            {project.type}
          </span>
          <span className="project-stack">{project.stack}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <div className="project-highlights">
          {project.highlights.map((h) => (
            <div key={h} className="ph-item">
              <Check size={14} strokeWidth={2.5} className="ph-icon" />
              {h}
            </div>
          ))}
        </div>

        <div className="project-actions">
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>
              <span>Live Demo</span>
            </a>
          )}
          <a
            href="#contact"
            className="btn-outline"
            onClick={(e) => { e.preventDefault(); onNavClick('#contact'); }}
          >
            <span>{project.ctaText}</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}

interface ProjectsProps {
  onNavClick: (href: string) => void;
}

export default function Projects({ onNavClick }: ProjectsProps) {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">
            Featured <span className="amber">Projects.</span>
          </h2>
          <p className="section-desc">
            A selection of demo projects built to showcase my skills, attention to detail, and modern development practices.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={i % 2 !== 0}
              onNavClick={onNavClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
