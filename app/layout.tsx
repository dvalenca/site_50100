import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/content/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.candidate} ${siteConfig.number} | ${siteConfig.office} | A rua é do povo`,
    template: `%s | ${siteConfig.candidate} ${siteConfig.number}`,
  },
  description:
    "Daniel Valença é candidato a deputado estadual por Pernambuco. Mobilidade, direito à cidade, clima, trabalho e democracia para colocar a vida no centro.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: `${siteConfig.candidate} ${siteConfig.number}`,
    title: `${siteConfig.candidate} ${siteConfig.number} | ${siteConfig.office} | A rua é do povo`,
    description:
      "Mobilidade, direito à cidade, clima, trabalho e democracia para colocar a vida no centro das prioridades de Pernambuco.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.candidate} ${siteConfig.number} | A rua é do povo`,
    description:
      "Mobilidade, direito à cidade, clima, trabalho e democracia para colocar a vida no centro das prioridades de Pernambuco.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${inter.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border-[3px] focus:border-ink focus:bg-brand-yellow focus:px-4 focus:py-2 focus:font-display focus:text-lg focus:uppercase focus:text-ink"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
