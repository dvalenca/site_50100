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
  materialsUrl: // receber material (WhatsApp com mensagem pré-definida)
    process.env.NEXT_PUBLIC_MATERIALS_URL ||
    "https://wa.me/5581996356706?text=Oi!%20Quero%20receber%20material%20da%20campanha%20de%20Daniel%20Valen%C3%A7a.%20Vou%20enviar%20meu%20nome%20e%20endere%C3%A7o%20na%20pr%C3%B3xima%20mensagem.",
  campaignEmail: process.env.NEXT_PUBLIC_CAMPAIGN_EMAIL || "contato@danielvalenca.com.br",
  cnpj: "68.571.393/0001-27",
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
