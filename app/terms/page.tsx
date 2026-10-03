import { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Navbar from "@/components/navbar"
import { PageSchema } from "@/components/json-ld"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TermsConditions from "@/components/terms-conditions"

export const metadata: Metadata = pageMeta({
  title: "Terms and Conditions | Apollo Group TV",
  description:
    "The terms that apply when you use the Apollo Group TV website and IPTV subscription: accounts, payments, acceptable use, refunds and liability.",
  path: "/terms",
})

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
