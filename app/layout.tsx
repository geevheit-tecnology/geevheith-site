import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Geevheith Technology Solutions",
  description: "Soluções digitais sob medida - Desenvolvimento de aplicativos, sistemas web e sites profissionais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
          @tailwind base;
          @tailwind components;
          @tailwind utilities;
          
          html {
            scroll-behavior: smooth;
          }
          
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            background: linear-gradient(to bottom, rgb(15, 23, 42), rgb(15, 23, 42));
            color: rgb(241, 245, 249);
          }
          
          code {
            font-family: var(--font-geist-mono), monospace;
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
