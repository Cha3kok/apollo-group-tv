import { Metadata } from "next"
import Navbar from "@/components/navbar"
import { PageSchema } from "@/components/json-ld"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TermsConditions from "@/components/terms-conditions"

export const metadata: Metadata = {
  alternates: { canonical: "/terms" },
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
      <PageSchema name="Terms and Conditions" path="/terms" />
      <Navbar />
      <main className="min-h-screen">
        <TermsConditions />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
