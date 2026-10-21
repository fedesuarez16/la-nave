import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { MediaModalProvider } from "@/components/ui/MediaModal";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Nave Studios — Tu historia merece ser contada",
  description: "Productora audiovisual y de marketing creativo. Tu historia merece ser contada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <MediaModalProvider>{children}</MediaModalProvider>
      </body>
    </html>
  );
}
