"use client";

import Image from "next/image";
import { brand } from "@/content/site";
import { useMediaModal } from "./MediaModal";
import { PlayIcon } from "./PlayIcon";

type ShowreelButtonProps =
  | { variant: "button"; label: string }
  | { variant: "cover"; label: string; ariaLabel: string };

export function ShowreelButton(props: ShowreelButtonProps) {
  const openMedia = useMediaModal();
  const play = () => openMedia({ kind: "video", src: brand.showreel });

  if (props.variant === "button") {
    return (
      <button
        onClick={play}
        className="inline-flex items-center gap-2.5 bg-turq px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-ink transition duration-300 ease-cine hover:-translate-y-0.5 hover:bg-paper"
      >
        <PlayIcon className="size-4" />
        {props.label}
      </button>
    );
  }

  return (
    <button
      onClick={play}
      aria-label={props.ariaLabel}
      className="group relative mb-14 block aspect-[16/10] w-full overflow-hidden bg-coal sm:aspect-[21/9]"
    >
      <Image
        src={brand.showreelCover}
        alt=""
        fill
        sizes="100vw"
        className="object-cover brightness-60 grayscale transition duration-[1200ms] ease-cine group-hover:scale-[1.04] group-hover:brightness-70 group-hover:grayscale-[0.3]"
      />
      <span className="absolute top-1/2 left-1/2 grid aspect-square w-[clamp(72px,10vw,120px)] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-turq text-ink transition-transform duration-500 ease-cine group-hover:scale-110">
        <span className="absolute -inset-3.5 animate-pulse-ring rounded-full border border-turq" />
        <PlayIcon className="ml-[6%] w-[34%]" />
      </span>
      <span className="absolute bottom-5 left-7 font-display text-[clamp(20px,3vw,36px)] uppercase tracking-wide">
        {props.label}
      </span>
    </button>
  );
}
