import { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Navbar from "@/components/navbar"
import { PageSchema } from "@/components/json-ld"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import RefundPolicy from "@/components/refund-policy"

export const metadata: Metadata = pageMeta({
  title: "Refund Policy: 7-Day Money-Back Guarantee | Apollo Group TV",
  description:
    "Apollo Group TV refund and cancellation policy: a 7-day money-back guarantee on every plan, how to request a refund on WhatsApp and how long it takes.",
  path: "/refund",
})

export default function RefundPage() {
  return (
    <>
      <PageSchema name="Refund and Cancellation Policy" path="/refund" />
      <Navbar />
      <main className="min-h-screen">
        <RefundPolicy />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
