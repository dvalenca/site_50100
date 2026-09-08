export const siteConfig = {
  candidate: "Daniel Valença",
  fullCandidateName: "Daniel Arraes de Alencar Valença",
  number: "50.100",
  office: "Deputado Estadual",
  state: "Pernambuco",
  party: "PSOL-PE",
  slogan: "A rua é do povo",
  donationUrl: process.env.NEXT_PUBLIC_DONATION_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "",
  volunteerUrl: process.env.NEXT_PUBLIC_VOLUNTEER_URL ?? "",
  groupUrl: process.env.NEXT_PUBLIC_GROUP_URL ?? "",
  materialsUrl: process.env.NEXT_PUBLIC_MATERIALS_URL ?? "",
  campaignEmail: process.env.NEXT_PUBLIC_CAMPAIGN_EMAIL ?? "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://danielvalenca.com.br",
};

export type SiteConfig = typeof siteConfig;

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Daniel" },
  { href: "/propostas", label: "Propostas" },
  { href: "/trajetoria", label: "Trajetória" },
  { href: "/participe", label: "Faça parte" },
];
