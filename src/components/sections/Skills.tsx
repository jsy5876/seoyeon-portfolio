import Image from "next/image";
import Reveal from "../common/Reveal";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "JavaScript", icon: "/images/skills/javascript.svg" },
  { name: "TypeScript", icon: "/images/skills/typescript.svg" },
  { name: "React", icon: "/images/skills/react.svg" },
  { name: "Next.js", icon: "/images/skills/nextjs.svg" },
  { name: "Vite", icon: "/images/skills/vite.svg" },
  { name: "HTML", icon: "/images/skills/html.svg" },
  { name: "CSS", icon: "/images/skills/css.svg" },
  { name: "Tailwind CSS", icon: "/images/skills/tailwind.svg" },
  { name: "Firebase", icon: "/images/skills/firebase.svg" },
  { name: "Vercel", icon: "/images/skills/vercel.svg" },
  { name: "GitHub", icon: "/images/skills/github.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Reveal direction="left">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold text-purple-400">
            • Skills
          </p>

          <h2 className="text-3xl font-bold text-white">
            기술 스택
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-6">
        {skills.map((skill, index) => (
          <Reveal key={skill.name} direction="up" delay={index * 100}>
            <div className="group flex min-h-24 flex-col items-center justify-start text-center transition duration-200 hover:scale-110">
              <div className="flex h-16 w-16 items-center justify-center">
                <Image
                  src={skill.icon}
                  alt={`${skill.name} 아이콘`}
                  width={60}
                  height={60}
                  className="h-14 w-14 object-contain transition duration-200"
                />
              </div>

              <span className="mt-3 block min-h-10 text-center text-sm leading-5 text-gray-300 transition duration-200 group-hover:text-white group-hover:[text-shadow:0_0_12px_rgba(192,132,252,0.9)]">
                {skill.name}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}