import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-heading",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-cursive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Progress Together | MaryEllen Lees Tutoring",
  description: "Building skills. Growing confidence. Progress is better together. Customized tutoring by MaryEllen Lees.",
  metadataBase: new URL("https://progresstogether.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Progress Together | MaryEllen Lees Tutoring",
    description: "Building skills. Growing confidence. Progress is better together.",
    url: "https://progresstogether.net",
    siteName: "Progress Together",
    images: [
      {
        url: "/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Progress Together",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Progress Together",
    description: "Building skills. Growing confidence. Progress is better together.",
    images: ["/assets/img/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`no-js ${plusJakartaSans.variable} ${newsreader.variable} ${caveat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.remove('no-js');` }} />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
