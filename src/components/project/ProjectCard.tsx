import Image from "next/image";
import type { Project } from "../../data/project";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onClick();
        }
      }}
      className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-purple-400/50 hover:bg-white/[0.07] hover:[box-shadow:0_0_12px_rgba(192,132,252,0.2)]"
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900/60">
        <Image
          src={project.image}
          alt={`${project.title} 썸네일`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500"
        />
      </div>

      <h3 className="mt-4 text-xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mt-2 truncate text-sm leading-6 text-gray-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm text-purple-300">
        클릭해서 자세히 보기 →
      </p>

      <div className="mt-6 flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-200 transition hover:border-purple-400 hover:text-purple-300"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
        >
          Demo
        </a>
      </div>
    </article>
  );
}