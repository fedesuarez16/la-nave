import type { Dictionary } from "../config";

export const en: Dictionary = {
  meta: {
    title: "La Nave Studios — Your story deserves to be told",
    description: "Audiovisual production and creative marketing studio. Your story deserves to be told.",
  },
  nav: {
    links: [
      { href: "#proyectos", label: "Work" },
      { href: "#servicios", label: "Services" },
      { href: "#clientes", label: "Clients" },
      { href: "#nosotros", label: "About" },
    ],
    contact: "Contact",
    home: "La Nave Studios — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  hero: {
    eyebrow: "Audiovisual production · Creative marketing",
    tagline: ["Your story deserves", "to be told"],
    showreel: "Watch showreel",
    cta: "Tell us about your project",
    scroll: "Scroll",
    scrollLabel: "Scroll down",
  },
  projects: {
    eyebrow: "01 — Showreel & work",
    title: "Our work",
    accent: "speaks for itself",
    showreelLabel: "Showreel 2026",
    playShowreel: "Play showreel",
    filterLabel: "Filter projects",
    filters: { all: "All", video: "Video", foto: "Photo" },
    view: "View",
    items: {
      campaign: { title: "Institutional campaign", meta: "Direction · Shooting · Post" },
      product: { title: "Product shoot", meta: "Photography · Retouching" },
      event: { title: "Event coverage", meta: "Multi-camera · Streaming" },
      backstage: { title: "Behind the scenes", meta: "Editorial photography" },
      spot: { title: "Commercial spot", meta: "Script · Production · Color" },
    },
  },
  services: {
    eyebrow: "02 — Services",
    title: "From idea",
    accent: "to screen",
    items: [
      {
        title: "Audiovisual production",
        description: "We tell stories through image and sound. We handle the entire process, from pre-production to final delivery.",
        items: ["Commercials and advertising campaigns", "Corporate videos and documentaries", "Event coverage and live streaming", "Photography, editing and post-production"],
      },
      {
        title: "Creative marketing",
        description: "We turn your brand into content that connects. Strategy and creativity so your message reaches the right people.",
        items: ["Content and social media strategy", "Branding and visual identity", "Content for digital platforms", "Political and institutional communication campaigns"],
      },
    ],
  },
  clients: {
    eyebrow: "03 — Our clients",
    title: "Trusted by",
    accent: "great brands",
    label: "Clients",
  },
  about: {
    eyebrow: "04 — About us",
    title: "We are a crew",
    accent: "of storytellers",
    imageAlt: "La Nave Studios team on set",
    paragraphs: [
      "At La Nave Studios we believe every brand, institution and person has a story worth telling. We are a team of directors, producers, photographers and creatives who stay with each project from start to finish.",
      "We work closely with you, with commitment and on your project's timeline. From a national campaign to a social media piece: the same care in every frame.",
    ],
    stats: { projects: "+ projects", clients: "+ clients", years: "years flying" },
    values: [
      { title: "Commitment", text: "to your deadlines and goals." },
      { title: "Quality", text: "cinematic in every delivery." },
      { title: "Closeness", text: "you talk directly to the people producing." },
    ],
  },
  founder: {
    eyebrow: "05 — The founder",
    role: "Founder & Director",
    photoPlaceholder: "Founder photo",
    quote: "Every project starts with one question: what story do we want people to remember?",
    // TODO: replace with the real bio.
    bio: [
      "[Founder bio] Tell how they started in film and video, what led them to create La Nave Studios and their vision as a filmmaker.",
      "[Second paragraph] Key experience, background, defining projects and what drives them to keep telling stories.",
    ],
    milestonesTitle: "Journey",
    milestones: [
      { year: "20XX", text: "[Milestone] First work as a filmmaker." },
      { year: "20XX", text: "[Milestone] La Nave Studios is founded." },
      { year: "20XX", text: "[Milestone] Standout project or client." },
    ],
  },
  contact: {
    eyebrow: "06 — Contact",
    title: "Shall we start",
    accent: "your story?",
    rows: { email: "Email", whatsapp: "WhatsApp", location: "Based in" },
    location: "Buenos Aires, Argentina",
    form: {
      name: "Name",
      email: "Email",
      service: "What do you need?",
      serviceOptions: ["Audiovisual production", "Creative marketing", "Photography", "Other"],
      message: "Tell us about your project",
      submit: "Send message",
      invalid: "Please fill in your name, a valid email and your message.",
      success: "Thanks! We opened your email app so you can send the message.",
      subject: "New project",
    },
  },
  modal: {
    label: "Player",
    close: "Close",
    missingVideo: "Video not available yet. Upload it to",
  },
  footer: { tagline: "Your story deserves to be told." },
};
