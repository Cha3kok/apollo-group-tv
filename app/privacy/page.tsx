import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PrivacyPolicy from "@/components/privacy-policy"

export const metadata: Metadata = {
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
      <Navbar />
      <main className="min-h-screen bg-background">
        <PrivacyPolicy />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
