// Datos no traducibles del sitio (medios, clientes, contacto, cifras).
// Los textos por idioma viven en src/i18n/dictionaries.

export type ProjectType = "video" | "foto";
export type ProjectId = "campaign" | "product" | "event" | "backstage" | "spot";

export type Project = {
  id: ProjectId;
  type: ProjectType;
  image: string;
  video?: string;
  wide?: boolean;
};

const unsplash = (id: string, w = 1400) => `https://images.unsplash.com/${id}?w=${w}&q=75`;

export const brand = {
  name: "La Nave Studios",
  heroVideo: "/assets/video/hero.mp4",
  heroPoster: unsplash("photo-1485846234645-a62644f84728", 1920),
  showreel: "/assets/video/showreel.mp4",
  showreelCover: unsplash("photo-1585951237318-9ea5e175b891", 1920),
};

export const projects: Project[] = [
  { id: "campaign", type: "video", image: unsplash("photo-1492691527719-9d1e07e534b4"), video: "/assets/video/proyecto-1.mp4", wide: true },
  { id: "product", type: "foto", image: unsplash("photo-1598899134739-24c46f58b8c0") },
  { id: "event", type: "video", image: unsplash("photo-1574717024653-61fd2cf4d44d"), video: "/assets/video/proyecto-2.mp4" },
  { id: "backstage", type: "foto", image: unsplash("photo-1478720568477-152d9b164e26") },
  { id: "spot", type: "video", image: unsplash("photo-1485846234645-a62644f84728"), video: "/assets/video/proyecto-3.mp4", wide: true },
];

export const clients = [
  "Palau",
  "Casa Rosada",
  "Barcelona",
  "Lidherma",
  "America Business Forum",
  "Política Analizada",
  "NGE",
  "Simply",
  "TV Pública",
];

export const about = {
  image: unsplash("photo-1601506521937-0121a7fc2a6b", 1200),
  stats: { projects: 150, clients: 40, years: 8 },
};

// TODO: reemplazar por los datos reales del fundador.
// Con `image: null` se muestra un placeholder; poné la foto en /public/assets/founder.jpg.
export const founder = {
  name: "Nombre Apellido",
  image: null as string | null,
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const contact = {
  email: "hola@lanavestudios.com",
  whatsapp: { label: "+54 9 11 0000-0000", href: "https://wa.me/5491100000000" },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};
