import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1220",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://geevheit.com.br"),
  title: "Geevheit Software Solutions | Criação de Sites, Apps e Sistemas Web em São Paulo",
  description:
    "Desenvolvimento de aplicativos Android/iOS, sistemas web, sites profissionais e landing pages que geram clientes. Peça seu orçamento gratuito pelo WhatsApp.",
  keywords: [
    "criação de sites",
    "desenvolvimento de aplicativos",
    "landing page",
    "sistema web",
    "São Paulo",
  ],
  openGraph: {
    title: "Geevheit Software Solutions",
    description:
      "Sites, apps e sistemas sob medida para o seu negócio crescer. Orçamento gratuito.",
    type: "website",
    locale: "pt_BR",
    images: ["/fotoapresentacao03.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
