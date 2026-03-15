import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import RefundPolicy from "@/components/refund-policy"

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy | Apollo Group TV",
  description: "Apollo Group TV Refund and Cancellation Policy - 7-day money-back guarantee.",
  keywords: ["refund policy", "cancellation", "money-back guarantee", "Apollo Group TV"],
  openGraph: {
    title: "Refund and Cancellation Policy | Apollo Group TV",
    description: "Our refund and cancellation policy for IPTV subscriptions",
    type: "website",
  },
}

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <RefundPolicy />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
