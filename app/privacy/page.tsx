import { Metadata } from "next"
import Navbar from "@/components/navbar"
import { PageSchema } from "@/components/json-ld"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PrivacyPolicy from "@/components/privacy-policy"

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy | Apollo Group TV",
  description: "Apollo Group TV Privacy Policy - How we protect your data and privacy.",
  keywords: ["privacy policy", "data protection", "GDPR", "Apollo Group TV"],
  openGraph: {
    title: "Privacy Policy | Apollo Group TV",
    description: "Our commitment to protecting your privacy",
    type: "website",
  },
}

export default function PrivacyPage() {
  return (
    <>
      <PageSchema name="Privacy Policy" path="/privacy" />
      <Navbar />
      <main className="min-h-screen">
        <PrivacyPolicy />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
