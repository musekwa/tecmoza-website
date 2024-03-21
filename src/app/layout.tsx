import type { Metadata } from "next";
import { Inter, Poppins, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import { CheckCircleIcon, InfoIcon, TriangleAlert } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });
export const fonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TECMOZA | Equipe de Desenvolvedores de Software",
  description:
    "TECMOZA desenvolverá soluções digitais de qualidade para sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster
            richColors
            position="bottom-left"
          />
        </Providers>
      </body>
    </html>
  );
}
