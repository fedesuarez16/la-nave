"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project, type ProjectType } from "@/content/site";
import { useMediaModal } from "@/components/ui/MediaModal";
import { PlayIcon } from "@/components/ui/PlayIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowreelButton } from "@/components/ui/ShowreelButton";

const filters: { value: ProjectType | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "video", label: "Video" },
  { value: "foto", label: "Foto" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const openMedia = useMediaModal();
  const open = () =>
    project.video
      ? openMedia({ kind: "video", src: project.video })
      : openMedia({ kind: "image", src: project.image.replace(/w=\d+/, "w=2000"), alt: project.title });

  return (
    <Reveal delay={(index % 3) * 80} className={project.wide ? "sm:col-span-2" : ""}>
      <button
        onClick={open}
        aria-label={`Ver ${project.title}`}
        className={`group relative block w-full overflow-hidden bg-coal text-left ${
          project.wide ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={project.wide ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          className="object-cover grayscale transition duration-1000 ease-cine group-hover:scale-105 group-hover:grayscale-0"
        />
        <span className="absolute inset-0 bg-linear-to-t from-black/85 to-transparent to-55%" />
        {project.video && (
          <span className="absolute top-5 right-5 grid size-11 place-items-center rounded-full border border-white/60 transition-colors group-hover:border-turq group-hover:bg-turq group-hover:text-ink">
            <PlayIcon className="ml-0.5 size-4.5" />
          </span>
        )}
        <span className="absolute inset-x-6 bottom-5 block transition-transform duration-500 ease-cine group-hover:-translate-y-1.5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-turq">{project.type}</span>
          <span className="mt-2 mb-0.5 block font-display text-[clamp(22px,2.4vw,32px)] uppercase leading-tight">
            {project.title}
          </span>
          <span className="block text-[13px] text-neutral-300">{project.meta}</span>
        </span>
      </button>
    </Reveal>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectType | "all">("all");
  const visible = projects.filter((p) => filter === "all" || p.type === filter);

  return (
    <section id="proyectos" className="px-[clamp(16px,5vw,72px)] py-[clamp(90px,14vw,180px)]">
      <SectionHeading eyebrow="01 — Showreel y proyectos" title="Lo que hacemos" accent="habla por nosotros" />

      <Reveal>
        <ShowreelButton variant="cover" />
      </Reveal>

      <div role="group" aria-label="Filtrar proyectos" className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={`border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors ${
              filter === f.value ? "border-turq bg-turq font-semibold text-ink" : "border-line hover:border-paper"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
