import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080B11",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Husni Nur Dzaki | Data Scientist · Data Engineer · Analytics & Software Developer",
  description:
    "Portfolio of Husni Nur Dzaki. Turning complex data into insight and building software solutions across Data Science, Machine Learning, ETL Engineering, and Web Applications.",
  keywords: [
    "Husni Nur Dzaki",
    "Data Scientist",
    "Data Engineer",
    "Machine Learning",
    "ETL Pipeline",
    "Python",
    "Next.js",
    "PostgreSQL",
    "Portfolio",
    "Indonesia",
  ],
  authors: [{ name: "Husni Nur Dzaki", url: "https://github.com/husnindz" }],
  creator: "Husni Nur Dzaki",
  metadataBase: new URL("https://portofolio-husni.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portofolio-husni.vercel.app",
    title: "Husni Nur Dzaki — Data Scientist & Software Developer",
    description:
      "Turning Data Into Insight. Building Technology Into Solutions. Featured case studies in Healthcare AI (Mirai), Property SaaS (Hunian.id), and Multi-Destination ETL Pipelines.",
    siteName: "Husni Nur Dzaki Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husni Nur Dzaki — Portfolio",
    description:
      "Data Scientist · Data Engineer · Analytics & Software Developer. Explore real-world case studies and technical evidence.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080B11] text-[#F8FAFC] font-sans antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
