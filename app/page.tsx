import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import TrustMetrics from "@/components/trust-metrics"
import Features from "@/components/features"
import ChannelSearch from "@/components/channel-search"
import Pricing from "@/components/pricing"
import InstallationTabs from "@/components/installation-tabs"
import ComparisonTable from "@/components/comparison-table"
import ResellerCTA from "@/components/reseller-cta"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Metadata } from "next"
import { LAST_UPDATED, SITE, SITE_URL } from "@/lib/site"
import { JsonLd } from "@/components/json-ld"
import KeyFacts from "@/components/key-facts"
import { PLANS } from "@/lib/plans"
import { FAQS } from "@/lib/faqs"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

const description =
  "Apollo Group TV is a premium IPTV subscription with 21,000+ live channels and 65,000+ movies and series in up to 4K on Smart TV, Firestick, Android, iOS and MAG."

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      url: SITE_URL,
      logo: `${SITE_URL}/icon-512.png`,
      description,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer service",
        availableLanguage: SITE.languages,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      alternateName: SITE.alternateNames,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Apollo Group TV: Premium IPTV Subscription with 21,000+ Channels",
      description,
      inLanguage: "en",
      dateModified: LAST_UPDATED,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      mainEntity: { "@id": `${SITE_URL}/#service` },
    },
    {
      "@type": "Product",
      "@id": `${SITE_URL}/#service`,
      name: "Apollo Group TV IPTV Subscription",
      description,
      brand: { "@id": `${SITE_URL}/#organization` },
      offers: PLANS.map((plan) => ({
        "@type": "Offer",
        name: `${plan.name} Plan`,
        price: plan.price.toFixed(2),
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        priceValidUntil: "2026-12-31",
        url: `${SITE_URL}/#pricing`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <JsonLd data={schema} />

      <Navbar />
      <Hero />
      <TrustMetrics />
      <KeyFacts />
      <Features />
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
