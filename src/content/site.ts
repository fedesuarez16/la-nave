// Contenido editable del sitio. Reemplazá los placeholders por datos reales.

export type ProjectType = "video" | "foto";

export type Project = {
  title: string;
  meta: string;
  type: ProjectType;
  image: string;
  video?: string;
  wide?: boolean;
};

const unsplash = (id: string, w = 1400) => `https://images.unsplash.com/${id}?w=${w}&q=75`;

export const brand = {
  name: "La Nave Studios",
  tagline: "Tu historia merece ser contada",
  heroVideo: "/assets/video/hero.mp4",
  heroPoster: unsplash("photo-1485846234645-a62644f84728", 1920),
  showreel: "/assets/video/showreel.mp4",
  showreelCover: unsplash("photo-1536240478700-b869070f9279", 1920),
};

export const projects: Project[] = [
  { title: "Campaña institucional", meta: "Dirección · Rodaje · Post", type: "video", image: unsplash("photo-1492691527719-9d1e07e534b4"), video: "/assets/video/proyecto-1.mp4", wide: true },
  { title: "Sesión de producto", meta: "Fotografía · Retoque", type: "foto", image: unsplash("photo-1598899134739-24c46f58b8c0") },
  { title: "Cobertura de evento", meta: "Multicámara · Streaming", type: "video", image: unsplash("photo-1574717024653-61fd2cf4d44d"), video: "/assets/video/proyecto-2.mp4" },
  { title: "Backstage", meta: "Fotografía editorial", type: "foto", image: unsplash("photo-1478720568477-152d9b164e26") },
  { title: "Spot publicitario", meta: "Guion · Producción · Color", type: "video", image: unsplash("photo-1485846234645-a62644f84728"), video: "/assets/video/proyecto-3.mp4", wide: true },
];

export const services = [
  {
    title: "Producción audiovisual",
    description: "Contamos historias con imagen y sonido. Nos encargamos de todo el proceso, de la preproducción a la entrega final.",
    items: ["Spots y campañas publicitarias", "Videos institucionales y documentales", "Cobertura de eventos y streaming", "Fotografía, edición y postproducción"],
  },
  {
    title: "Marketing creativo",
    description: "Convertimos tu marca en contenido que conecta. Estrategia y creatividad para que tu mensaje llegue a quien tiene que llegar.",
    items: ["Estrategia de contenido y redes sociales", "Branding e identidad visual", "Contenido para plataformas digitales", "Campañas y comunicación política e institucional"],
  },
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
  image: unsplash("photo-1536240478700-b869070f9279", 1200),
  paragraphs: [
    "En La Nave Studios creemos que cada marca, institución y persona tiene una historia que vale la pena contar. Somos un equipo de realizadores, productores, fotógrafos y creativos que acompaña cada proyecto de principio a fin.",
    "Trabajamos cerca, con compromiso y con los tiempos de tu proyecto. Desde una campaña nacional hasta una pieza para redes: el mismo cuidado en cada cuadro.",
  ],
  stats: [
    { value: 150, label: "+ proyectos" },
    { value: 40, label: "+ clientes" },
    { value: 8, label: "años de vuelo" },
  ],
  values: [
    { title: "Compromiso", text: "con tus tiempos y objetivos." },
    { title: "Calidad", text: "cinematográfica en cada entrega." },
    { title: "Cercanía", text: "hablás directo con quien produce." },
  ],
};

export const contact = {
  email: "hola@lanavestudios.com",
  whatsapp: { label: "+54 9 11 0000-0000", href: "https://wa.me/5491100000000" },
  location: "Buenos Aires, Argentina",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
};

export const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#clientes", label: "Clientes" },
  { href: "#nosotros", label: "Nosotros" },
];
