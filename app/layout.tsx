import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Apollo Group TV | #1 Best Premium IPTV Service 2026 - 21,000+ Channels in 4K',
  description:
    'Apollo Group TV is the best premium IPTV subscription service in 2026. Stream 21,000+ live channels and 65,000+ movies & series in 4K UHD. No buffering, 99.9% uptime. Works on Smart TV, Firestick, Android, iOS & MAG. Try a 3h free IPTV trial today!',
  keywords: [
    'Apollo Group TV',
    'Apollo Group TV',
    'best IPTV service',
    'best IPTV service 2026',
    'premium IPTV subscription',
    'buy IPTV',
    'IPTV provider',
    'IPTV 4K',
    'cheap IPTV subscription',
    'IPTV Smarters',
    'Firestick IPTV',
    'IPTV free trial',
    'IPTV channels list',
    'IPTV streaming service',
    'IPTV subscription',
    'best IPTV provider',
    'IPTV reseller',
  ],
  openGraph: {
    title: 'Apollo Group TV | #1 Best Premium IPTV Service 2026',
    description:
      'Stream 21,000+ live channels and 65,000+ movies in 4K UHD with Apollo Group TV. The most reliable IPTV subscription service with anti-freeze technology and 99.9% uptime.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Apollo Group TV',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apollo Group TV | Best Premium IPTV Subscription 2026',
    description:
      'The #1 IPTV service with 21,000+ channels, 65,000+ VOD, anti-freeze tech & 4K quality. Try Apollo Group TV free for 24 hours.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://apollogrouptv.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
