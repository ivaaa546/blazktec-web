import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Solutecgy | Sistemas Web y Automatización",
  description: "Diseñamos sistemas web y automatizaciones para optimizar procesos y mejorar la eficiencia operativa. Digitalizamos empresas mediante soluciones tecnológicas a medida.",
  keywords: ["sistemas web", "automatización", "desarrollo web", "digitalización", "software a medida", "Guatemala"],
  authors: [{ name: "Solutecgy" }],
  openGraph: {
    title: "Solutecgy | Sistemas Web y Automatización",
    description: "Digitalizamos empresas mediante soluciones tecnológicas a medida, desde sitios web hasta sistemas complejos y automatizaciones inteligentes.",
    type: "website",
    locale: "es_GT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutecgy | Sistemas Web y Automatización",
    description: "Diseñamos sistemas web y automatizaciones para optimizar procesos y mejorar la eficiencia operativa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
