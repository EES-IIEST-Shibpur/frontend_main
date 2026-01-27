import "./globals.css"; 
import { Inter } from "next/font/google";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | EES IIEST Shibpur',
    default: "Electrical Engineers' Society | IIEST Shibpur",
  },
  description: "The official website of the Electrical Engineers' Society (EES) at IIEST Shibpur. Fostering academic support, interaction, and development for students, faculty, and alumni.",
  keywords: ["EES", "IIEST", "Shibpur", "Electrical Engineering", "Society", "Student Activity", "College", "Engineering", "EES IIEST", "Electrical Engineers Society"],
  authors: [{ name: "Web Team EES" }],
  creator: "Electrical Engineers' Society",
  publisher: "IIEST Shibpur",
  metadataBase: new URL('https://eesiiests.org'),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Electrical Engineers' Society | IIEST Shibpur",
    description: "Connect with the Electrical Engineers' Society at IIEST Shibpur. Explore events, initiatives, gallery, and meet our people.",
    url: 'https://eesiiests.org',
    siteName: "EES IIEST",
    images: [
      {
        url: '/images/home/ees-logo.png',
        width: 800,
        height: 600,
        alt: 'EES IIEST Shibpur Logo',
      },
      {
        url: '/images/home/group-photo-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'EES IIEST Shibpur Group Photo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Electrical Engineers' Society | IIEST Shibpur",
    description: "Official website of EES IIEST Shibpur",
    images: ['/images/home/ees-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: "Electrical Engineers' Society",
  alternateName: "EES IIEST",
  url: 'https://eesiiests.org',
  logo: 'https://eesiiests.org/images/home/ees-logo.png',
  sameAs: [
    'https://www.linkedin.com/company/ees-iiest-shibpur',
    'https://www.facebook.com/ees.iiests',
    'https://www.instagram.com/ees_iiests'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}