import { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Navbar from "@/components/navbar"
import { PageSchema } from "@/components/json-ld"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PrivacyPolicy from "@/components/privacy-policy"

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy | Apollo Group TV",
  description:
    "How Apollo Group TV collects, uses and protects your personal data when you visit the website, contact support or buy an IPTV subscription.",
  path: "/privacy",
})

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
