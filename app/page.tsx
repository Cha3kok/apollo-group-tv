import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TrustMetrics from "@/components/trust-metrics"
import ChannelSearch from "@/components/channel-search"
import Pricing from "@/components/pricing"
import InstallationTabs from "@/components/installation-tabs"
import ComparisonTable from "@/components/comparison-table"
import ResellerCTA from "@/components/reseller-cta"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Apollo Group TV",
  url: "https://apollogrouptv.com",
  description:
    "Apollo Group TV is the best premium IPTV subscription service in 2026. Stream 21,000+ live channels and 65,000+ movies & series in 4K UHD on any device.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+212-707-711-512",
    contactType: "customer service",
    availableLanguage: ["English", "French", "Arabic", "Spanish"],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Apollo Group TV and why is it the best IPTV service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apollo Group TV is a premium IPTV subscription service that provides access to over 21,000 live TV channels and 65,000+ movies and series in 4K UHD quality. We are rated the #1 IPTV service in 2026 by thousands of satisfied subscribers worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an Apollo Group TV subscription cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apollo Group TV offers five flexible plans: 1 Month at $15.99, 3 Months at $35.99, 6 Months at $59.99, 12 Months at $89.99, and 24 Months at $139.99. All plans include 21,000+ channels, 65,000+ VOD, 4K quality, and anti-freeze technology.",
      },
    },
    {
      "@type": "Question",
      name: "Does Apollo Group TV offer a free IPTV trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Apollo Group TV offers a free 3-hour IPTV trial so you can test our service quality, channel lineup, and streaming stability before committing to a paid subscription.",
      },
    },
    {
      "@type": "Question",
      name: "How do I install and set up Apollo Group TV on my device?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Setting up Apollo Group TV takes under 5 minutes. Download a compatible IPTV player (IPTV Smarters Pro, TiviMate) on your Smart TV, Firestick, Android, iOS, or MAG box, enter your credentials, and start streaming.",
      },
    },
    {
      "@type": "Question",
      name: "What channels are included in the Apollo Group TV channel list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Apollo Group TV includes 21,000+ live channels from every country: sports (beIN Sports, Sky Sports, ESPN), entertainment (HBO, Showtime), streaming content, news, kids, and international channels. Plus 65,000+ VOD movies and series.",
      },
    },
  ],
}

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Apollo Group TV Premium Subscription",
  description:
    "Best IPTV subscription service with 21,000+ live channels, 65,000+ VOD, 4K UHD streaming, anti-freeze technology, and 99.9% uptime.",
  brand: { "@type": "Brand", name: "Apollo Group TV" },
  offers: [
    {
      "@type": "Offer",
      name: "1 Month Plan",
      price: "15.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "3 Months Plan",
      price: "35.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "6 Months Plan",
      price: "59.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "12 Months Plan",
      price: "89.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
    {
      "@type": "Offer",
      name: "24 Months Plan",
      price: "139.99",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2026-12-31",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "12847",
    bestRating: "5",
  },
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* JSON-LD Structured Data for Google SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Navbar />
      <Hero />
      <TrustMetrics />
      <ChannelSearch />
      <Pricing />
      <InstallationTabs />
      <ComparisonTable />
      <ResellerCTA />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
