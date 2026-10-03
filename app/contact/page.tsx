import { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Navbar from "@/components/navbar"
import { PageSchema } from "@/components/json-ld"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = pageMeta({
  title: "Contact Apollo Group TV: 24/7 IPTV Support",
  description:
    "Contact Apollo Group TV for support, sales, the free 3-hour trial or the reseller program. We answer 24/7 on WhatsApp in English, French, Arabic and Spanish.",
  path: "/contact",
})

export default function ContactPage() {
  return (
    <>
      <PageSchema name="Contact Apollo Group TV" path="/contact" />
      <Navbar />
      <main className="min-h-screen">
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
