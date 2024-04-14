import type { Metadata } from "next";
import { Inter, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster as SonnerToast } from "sonner";
import Navbar from "@/navbar/navbar";
import Footer from "@/footer";
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const fonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export const metadata: Metadata = {
  title: "TECMOZA - Desenvolvedores de Software",
  description:
    "TECMOZA desenvolverá soluções digitais de qualidade para sua empresa.",
};

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({
  children,
  // params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html 
    // lang={locale} dir={dir(locale)}
    >
      <body className={fonts.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
          <SonnerToast richColors position="bottom-left" />
        </Providers>
      </body>
    </html>
  );
}
