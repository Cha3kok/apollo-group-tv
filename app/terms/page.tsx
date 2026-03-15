import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TermsConditions from "@/components/terms-conditions"

export const metadata: Metadata = {
  title: "Terms and Conditions | Apollo Group TV",
  description: "Apollo Group TV Terms and Conditions - Read our complete service terms.",
  keywords: ["terms and conditions", "terms of service", "Apollo Group TV"],
  openGraph: {
    title: "Terms and Conditions | Apollo Group TV",
    description: "Our complete terms and conditions",
    type: "website",
  },
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <TermsConditions />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
