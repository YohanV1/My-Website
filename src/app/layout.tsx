import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import PerformanceMonitor from "../components/PerformanceMonitor";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Yohan Vergis Vinu | Full-Stack ML/AI Engineer",
  description: "Startup-native engineer building applied AI and full-stack products that ship fast, scale reliably, and stay obsessively user-centered. CS Master's Student at the University of Pennsylvania.",
  keywords: ["AI/ML Engineer", "Machine Learning", "Full-Stack Development", "React", "Next.js", "TypeScript", "Python", "University of Pennsylvania"],
  authors: [{ name: "Yohan Vergis Vinu" }],
  creator: "Yohan Vergis Vinu",
  publisher: "Yohan Vergis Vinu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://yohanvvinu.com"),
  alternates: {
    canonical: "https://yohanvvinu.com/",
  },
  openGraph: {
    title: "Yohan Vergis Vinu - Full-Stack ML/AI Engineer",
    description: "Startup-native engineer building applied AI and full-stack products that ship fast, scale reliably, and stay obsessively user-centered. CS Master's Student at University of Pennsylvania.",
    url: "https://yohanvvinu.com",
    siteName: "Yohan Vergis Vinu Portfolio",
    images: [
      {
        url: "/card.png",
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
    description: "Startup-native engineer building applied AI and full-stack products that ship fast, scale reliably, and stay obsessively user-centered.",
    images: ["/card.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Umami Analytics */}
        <script defer src="https://cloud.umami.is/script.js" data-website-id="b8960906-5cc6-4b8f-ae42-55d8438a44f2"></script>
        
        {/* Dark mode override */}
        <link rel="icon" href="/favicon.svg"/>
        
        {/* DNS prefetch for analytics */}
        <link rel="dns-prefetch" href="https://cloud.umami.is" />
        
        {/* Manual meta tags for better crawler compatibility */}
        <meta name="description" content="Startup-native engineer building applied AI and full-stack products that ship fast, scale reliably, and stay obsessively user-centered. CS Master's Student at the University of Pennsylvania." />
        <meta name="keywords" content="AI/ML Engineer, Machine Learning, Full-Stack Development, React, Next.js, TypeScript, Python, University of Pennsylvania" />
        <meta property="og:title" content="Yohan Vergis Vinu - Full-Stack ML/AI Engineer" />
        <meta property="og:description" content="Startup-native engineer building applied AI and full-stack products that ship fast, scale reliably, and stay obsessively user-centered. CS Master's Student at University of Pennsylvania." />
        <meta property="og:url" content="https://yohanvvinu.com" />
        <meta property="og:image" content="https://yohanvvinu.com/card.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yohan Vergis Vinu - Full-Stack ML/AI Engineer" />
        <meta name="twitter:description" content="Startup-native engineer building applied AI and full-stack products that ship fast, scale reliably, and stay obsessively user-centered." />
        <meta name="twitter:image" content="https://yohanvvinu.com/card.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0f172a" />
        
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <PerformanceMonitor />
      </body>
    </html>
  );
}
