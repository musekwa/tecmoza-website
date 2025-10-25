import type { Metadata } from "next";
import { Inter, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster as SonnerToast } from "sonner";
import Navbar from "@/navbar/navbar";
import Footer from "@/footer";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
const fonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TECMOZA - Desenvolvedores de Software",
  description:
    "TECMOZA desenvolverá soluções digitais de qualidade para sua empresa.",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
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
