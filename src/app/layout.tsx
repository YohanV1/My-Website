import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yohan Vergis Vinu | Full-Stack ML/AI Engineer & CS Grad Student at UPenn",
  description: "Full-stack AI engineer with deep startup experience, building fast, scalable, and user-focused products. CS Master's Student at University of Pennsylvania.",
  keywords: ["AI Engineer", "Machine Learning", "Full-Stack Development", "React", "Next.js", "TypeScript", "Python", "University of Pennsylvania"],
  authors: [{ name: "Yohan Vergis Vinu" }],
  creator: "Yohan Vergis Vinu",
  publisher: "Yohan Vergis Vinu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yohanvergisvinu.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yohan Vergis Vinu - Full-Stack ML/AI Engineer",
    description: "Full-stack AI engineer with deep startup experience, building fast, scalable, and user-focused products. CS Master's Student at University of Pennsylvania.",
    url: "https://yohanvergisvinu.com",
    siteName: "Yohan Vergis Vinu Portfolio",
    images: [
      {
        url: "/photo.png",
        width: 1200,
        height: 630,
        alt: "Yohan Vergis Vinu - Full-Stack ML/AI Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yohan Vergis Vinu - Full-Stack ML/AI Engineer",
    description: "Full-stack AI engineer with deep startup experience, building fast, scalable, and user-focused products.",
    images: ["/photo.png"],
    creator: "@yohanvinu",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {}
              }
            }
          `
        }} />
        
        {/* Umami Analytics */}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="b8960906-5cc6-4b8f-ae42-55d8438a44f2"></script>
        
        {/* Dark mode override */}
        <link rel="icon" href="/dark_mode_logo.png" media="(prefers-color-scheme: dark)" />
        {/* Default fallback */}
        <link rel="icon" href="/light_mode_logo.png" media="(prefers-color-scheme: light)"/>
        
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
