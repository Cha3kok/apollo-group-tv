import { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Apollo Group TV | IPTV Support & Inquiries",
  description: "Get in touch with Apollo Group TV. Contact us for IPTV support, sales inquiries, reseller program, or general questions. Available 24/7 via WhatsApp.",
  keywords: ["contact us", "support", "IPTV help", "customer service", "Apollo Group TV"],
  openGraph: {
    title: "Contact Apollo Group TV",
    description: "24/7 IPTV customer support and inquiries",
    type: "website",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
