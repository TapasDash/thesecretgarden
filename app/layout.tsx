import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Be_Vietnam_Pro } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Secret Garden Hostel | Cat Ba Island Social Sanctuary',
  description: 'An organic, Indochine-tropical, host-centric sanctuary in Cat Ba Island. Dense courtyard energy, daily social pulse, epic expeditions, and handcrafted beds.',
  icons: {
    icon: '/icon.svg',
  },
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

