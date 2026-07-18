"use client";

import { useState } from "react";
import { projects, type Project } from "../../data/project";
import ProjectCard from "../project/ProjectCard";
import Reveal from "../common/Reveal";
import ProjectDetailModal from "../project/ProjectDetailModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20">
      <Reveal direction="left">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold text-purple-400">
              • Projects
            </p>
            <h2 className="text-3xl font-bold text-white">주요 프로젝트</h2>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.title} direction="up" delay={index * 150}>
            <ProjectCard
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          </Reveal>
        ))}
      </div>

        
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}