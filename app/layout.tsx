import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL } from '@/lib/site'
import SpaceBackground from '@/components/space-background'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

const description =
  'Apollo Group TV: 21,000+ live channels and 65,000+ movies & series in 4K on Smart TV, Firestick, Android and iOS. From $15.99/month, free 3-hour trial.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Apollo Group TV: Premium IPTV Subscription with 21,000+ Channels',
  description,
  applicationName: 'Apollo Group TV',
  openGraph: {
    title: 'Apollo Group TV: Premium IPTV Subscription',
    description,
    url: '/',
    type: 'website',
    locale: 'en_US',
    siteName: 'Apollo Group TV',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apollo Group TV: Premium IPTV Subscription',
    description,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
}

export const viewport: Viewport = {
  themeColor: '#05060f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <SpaceBackground />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
