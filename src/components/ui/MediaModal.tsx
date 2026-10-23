"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/i18n/config";

type Media = { kind: "video"; src: string } | { kind: "image"; src: string; alt: string };

const MediaModalContext = createContext<(media: Media) => void>(() => {});

export const useMediaModal = () => useContext(MediaModalContext);

type MediaModalProviderProps = {
  children: React.ReactNode;
  labels: Dictionary["modal"];
};

export function MediaModalProvider({ children, labels }: MediaModalProviderProps) {
  const [media, setMedia] = useState<Media | null>(null);
  const [failed, setFailed] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const open = useCallback((next: Media) => {
    setFailed(false);
    setMedia(next);
  }, []);
  const close = useCallback(() => setMedia(null), []);

  useEffect(() => {
    if (!media) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [media, close]);

  return (
    <MediaModalContext.Provider value={open}>
      {children}
      {media && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={labels.label}
          onClick={(e) => e.target === e.currentTarget && close()}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/95 px-4 py-16 sm:px-12 animate-fade"
        >
          <button
            ref={closeRef}
            onClick={close}
            aria-label={labels.close}
            className="absolute top-4 right-4 sm:right-12 text-5xl leading-none transition duration-300 hover:rotate-90 hover:text-turq"
          >
            ×
          </button>
          <div className="w-full max-w-6xl">
            {media.kind === "image" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={media.src} alt={media.alt} className="max-h-[80vh] w-full bg-black object-contain" />
            ) : failed ? (
              <p className="border border-dashed border-line px-5 py-20 text-center text-neutral-400">
                {labels.missingVideo} <code className="text-turq">public{media.src}</code>
              </p>
            ) : (
              <video
                src={media.src}
                controls
                autoPlay
                playsInline
                onError={() => setFailed(true)}
                className="max-h-[80vh] w-full bg-black"
              />
            )}
          </div>
        </div>
      )}
    </MediaModalContext.Provider>
  );
}
