import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const metadata: Metadata = {
  title: {
    default: "pedro cruz",
    template: "%s — pedro cruz",
  },
  description:
    "Born & raised in São Paulo, Brazil. Computer science at Swarthmore College.",
  icons: {
    icon: "/assets/favicon.gif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceCodePro.variable}>
      <body>
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
