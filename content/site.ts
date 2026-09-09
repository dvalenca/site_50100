export const siteConfig = {
  candidate: "Daniel Valença",
  fullCandidateName: "Daniel Arraes de Alencar Valença",
  number: "50.100",
  office: "Deputado Estadual",
  state: "Pernambuco",
  party: "PSOL-PE",
  slogan: "A rua é do povo",
  // Links oficiais da campanha. Variáveis de ambiente (NEXT_PUBLIC_*)
  // sobrescrevem esses valores quando definidas.
  donationUrl:
    process.env.NEXT_PUBLIC_DONATION_URL ||
    "https://queroapoiar.com.br/danielvalenca",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/danielvalenca.pe/",
  whatsappUrl:
    process.env.NEXT_PUBLIC_WHATSAPP_URL || // comunidade / avisos
    "https://chat.whatsapp.com/Hx7tUsH4dWp5fYwzU9phXJ",
  volunteerUrl: process.env.NEXT_PUBLIC_VOLUNTEER_URL || "",
  groupUrl: // grupo de voluntariado
    process.env.NEXT_PUBLIC_GROUP_URL ||
    "https://chat.whatsapp.com/FdVmkm9KwviH1dtKWCNJ42",
  agendaUrl: // agenda de campanha (Google Calendar)
    process.env.NEXT_PUBLIC_AGENDA_URL ||
    "https://calendar.google.com/calendar/u/0?cid=YTcwNWJmYWM5NjAxNjRmMTE2MjkyNzJkNzVjZDllZDUwNTlhZjcyNjUzYTVjN2Y0YzY5MTNmNzVmYmQxMThhZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t",
  materialsUrl: process.env.NEXT_PUBLIC_MATERIALS_URL || "",
  campaignEmail: process.env.NEXT_PUBLIC_CAMPAIGN_EMAIL || "",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://danielvalenca.com.br",
};

export type SiteConfig = typeof siteConfig;

// A plataforma Quero Apoiar usa o padrão:
// https://queroapoiar.com.br/danielvalenca/doar/<valor>/info
export function donationAmountUrl(amount: number): string {
  const base = siteConfig.donationUrl.replace(/\/+$/, "");
  return `${base}/doar/${amount}/info`;
}

export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/propostas", label: "Propostas" },
  { href: "/trajetoria", label: "Trajetória" },
  { href: "/participe", label: "Faça parte" },
];
