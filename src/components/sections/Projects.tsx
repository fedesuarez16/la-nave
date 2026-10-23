"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project, type ProjectType } from "@/content/site";
import type { Dictionary } from "@/i18n/config";
import { useMediaModal } from "@/components/ui/MediaModal";
import { PlayIcon } from "@/components/ui/PlayIcon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShowreelButton } from "@/components/ui/ShowreelButton";

type ProjectsDict = Dictionary["projects"];
type Filter = ProjectType | "all";

const filterValues: Filter[] = ["all", "video", "foto"];

function ProjectCard({ project, index, dict }: { project: Project; index: number; dict: ProjectsDict }) {
  const openMedia = useMediaModal();
  const { title, meta } = dict.items[project.id];
  const open = () =>
    project.video
      ? openMedia({ kind: "video", src: project.video })
      : openMedia({ kind: "image", src: project.image.replace(/w=\d+/, "w=2000"), alt: title });

  return (
    <Reveal delay={(index % 3) * 80} className={project.wide ? "sm:col-span-2" : ""}>
      <button
        onClick={open}
        aria-label={`${dict.view} ${title}`}
        className={`group relative block w-full overflow-hidden bg-coal text-left ${
          project.wide ? "aspect-[4/5] sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[420px]" : "aspect-[4/5]"
        }`}
      >
        <Image
          src={project.image}
          alt={title}
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
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-turq">{dict.filters[project.type]}</span>
          <span className="mt-2 mb-0.5 block font-display text-[clamp(22px,2.4vw,32px)] uppercase leading-tight">{title}</span>
          <span className="block text-[13px] text-neutral-300">{meta}</span>
        </span>
      </button>
    </Reveal>
  );
}

export function Projects({ dict }: { dict: ProjectsDict }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => filter === "all" || p.type === filter);

  return (
    <section id="proyectos" className="px-[clamp(16px,5vw,72px)] py-[clamp(90px,14vw,180px)]">
      <SectionHeading eyebrow={dict.eyebrow} title={dict.title} accent={dict.accent} />

      <Reveal>
        <ShowreelButton variant="cover" label={dict.showreelLabel} ariaLabel={dict.playShowreel} />
      </Reveal>

      <div role="group" aria-label={dict.filterLabel} className="mb-8 flex flex-wrap gap-2">
        {filterValues.map((value) => (
          <button
            key={value}
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
            className={`border px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-colors ${
              filter === value ? "border-turq bg-turq font-semibold text-ink" : "border-line hover:border-paper"
            }`}
          >
            {dict.filters[value]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} dict={dict} />
        ))}
      </div>
    </section>
  );
}
