import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Red - Where Passion Meets Perfume | Boutique Perfume Store",
  description: "Discover your signature scent at Red, an exclusive boutique perfume store offering handpicked fragrances, personalized consultations, and luxurious experiences. Explore Crimson Desire, Scarlet Whisper, and Ruby Nights.",
  keywords: "perfume, fragrance, boutique, luxury, Red, Crimson Desire, Scarlet Whisper, Ruby Nights, personalized consultation, exclusive perfumes",
  authors: [{ name: "Red Perfume Boutique" }],
  openGraph: {
    title: "Red - Where Passion Meets Perfume",
    description: "Step into Red, where every fragrance tells a story of boldness, sophistication, and timeless allure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red - Where Passion Meets Perfume",
    description: "Discover your signature scent at our exclusive boutique perfume store.",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8B0000" />
      </head>
      <body className={`${playfairDisplay.variable} ${inter.variable} font-inter antialiased bg-cream text-charcoal`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}