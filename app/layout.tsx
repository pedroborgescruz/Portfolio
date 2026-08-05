import type { Metadata, Viewport } from "next";
import { Source_Code_Pro, Syne } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

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
    <html lang="en" className={`${sourceCodePro.variable} h-100`}>
      <body className={`d-flex flex-column h-100 ${syne.variable}`}>
        <BootstrapClient />
        <Navbar />
        
        <main className="flex-shrink-0">
          {children}
        </main>

        <div className="mt-auto">
          <Footer />
        </div>
      </body>
    </html>
  );
}