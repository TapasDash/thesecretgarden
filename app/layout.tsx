import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Be_Vietnam_Pro } from 'next/font/google'
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
})

const productionUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://secretgardenhostelcatba.com'

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: {
    default: 'Secret Garden Hostel | Host-Centric Courtyard in Cat Ba',
    template: '%s | Secret Garden Hostel Cat Ba',
  },
  description:
    'Host-centric courtyard in Cat Ba offering handcrafted wooden bunks, private rooms, cold AC, craft café & bar, free family dinners, and daily Lan Ha Bay & Ha Giang tours.',
  keywords: [
    'Cat Ba hostel',
    'Secret Garden Hostel',
    'Secret Garden Hostel Cat Ba',
    'Cat Ba Island hostel',
    'Host-centric courtyard in Cat Ba',
    'Lan Ha Bay plankton tour',
    'Deep water solo Cat Ba',
    'Ha Giang loop tour',
    'Cat Ba budget accommodation',
    'best hostel Cat Ba',
    'Vietnam backpacker hostel',
  ],
  authors: [{ name: 'Secret Garden Hostel', url: productionUrl }],
  creator: 'Secret Garden Hostel',
  publisher: 'Secret Garden Hostel Cat Ba',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Secret Garden Hostel | Host-Centric Courtyard in Cat Ba',
    description:
      'Host-centric courtyard in Cat Ba with solid wooden bunks, cold AC, good coffee, cheap beer, free family dinners, and island expeditions.',
    url: productionUrl,
    siteName: 'Secret Garden Hostel Cat Ba',
    images: [
      {
        url: '/images/secret_garden_entrance_arch.jpg',
        width: 1200,
        height: 630,
        alt: 'Secret Garden Hostel Cat Ba Courtyard Entrance',
      },
      {
        url: '/images/secret_garden_social_night.jpg',
        width: 1200,
        height: 630,
        alt: 'Secret Garden Hostel Social Courtyard Gathering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Secret Garden Hostel | Host-Centric Courtyard in Cat Ba',
    description:
      'Host-centric courtyard in Cat Ba with solid wooden bunks, cold AC, cheap beer, free family dinners, and Lan Ha Bay boat tours.',
    images: ['/images/secret_garden_entrance_arch.jpg'],
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
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  category: 'travel',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#F5F5F0' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${beVietnamPro.variable}`}>
      <body className="antialiased font-sans bg-[#F5F5F0] text-[#1B3320] min-h-screen selection:bg-[#D4AF37] selection:text-[#1B3320]">
        <LocalBusinessSchema />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
