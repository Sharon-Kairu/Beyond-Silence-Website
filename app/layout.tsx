import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/navigation/ResponsiveNav";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beyond Silence",
  description:
    "A community-centered platform that fosters connection, dialogue, and a safe space for meaningful conversations.",
  openGraph: {
    title: "Beyond Silence",
    description:
      "A community-centered platform that fosters connection, dialogue, and a safe space for meaningful conversations.",
    url: "https://beyond-silence-website.vercel.app/", 
    siteName: "Beyond Silence",
    images: [
      {
        url: "/main_logo.png",
        width: 1200,
        height: 628,
        alt: "Beyond Silence Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Silence",
    description:
      "A welcoming space built around community, support, and thoughtful engagement.",
    images: ["/main_logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ResponsiveNav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
