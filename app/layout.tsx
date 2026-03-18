import type { Metadata } from "next";
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

export const metadata = {
  title: "Clínica Monteverde | Clínica Dental en Puerto Montt",
  description:
    "Clínica dental en Puerto Montt especializada en ortodoncia, implantología y rehabilitación oral. Agenda tu hora fácilmente.",

     icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "clinica dental puerto montt",
    "dentista puerto montt",
    "ortodoncia puerto montt",
    "implantes dentales chile",
  ],
    openGraph: {
    title: "Clínica Monteverde",
    description: "Clínica dental moderna en Puerto Montt",
    url: "https://clinicamonteverde.cl",
    siteName: "Clínica Monteverde",
    locale: "es_CL",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
