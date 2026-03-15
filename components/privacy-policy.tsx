"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "Apollo Group TV ('we', 'us', 'our', or 'Company') operates the appoloiptv.com website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our service and the choices you have associated with that data.",
    },
    {
      title: "2. Information Collection and Use",
      content:
        "We collect several different types of information for various purposes to provide and improve our service to you:\n\n• Personal Data: While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ('Personal Data'). This may include, but is not limited to:\n  - Email address\n  - Phone number\n  - Cookies and Usage Data\n\n• Usage Data: We may also collect information how the service is accessed and used ('Usage Data'). This may include information such as your computer's IP address, browser type, browser version, pages visited, time spent on pages, and other diagnostic data.",
    },
    {
      title: "3. Use of Data",
      content:
        "Apollo Group TV uses the collected data for various purposes:\n\n• To provide and maintain our service\n• To notify you about changes to our service\n• To provide customer support\n• To gather analysis or valuable information so we can improve our service\n• To monitor the usage of our service\n• To detect, prevent and address technical issues\n• To provide you with news, special offers and general information\n• To provide marketing and promotional materials",
    },
    {
      title: "4. Security of Data",
      content:
        "The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. All transactions are processed through secure SSL encryption protocols.",
    },
    {
      title: "5. Changes to This Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'effective date' at the top of this Privacy Policy.",
    },
    {
      title: "6. Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us via:\n\n• WhatsApp: +212 707 711 512\n• Contact Form: https://appoloiptv.com/contact\n• Email: We respond promptly to all inquiries",
    },
  ]

  return (
    <section className="relative px-4 py-20 pt-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
            <Shield className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: March 15, 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          {sections.map((section, index) => (
            <div
              key={index}
              className="rounded-lg border border-border/50 bg-secondary/20 p-6 backdrop-blur-sm"
            >
              <h2 className="mb-3 text-xl font-bold text-foreground">
                {section.title}
              </h2>
              <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {section.content}
              </p>
            </div>
          ))}

          {/* Important Note */}
          <div className="rounded-lg border-2 border-primary/30 bg-primary/5 p-6">
            <p className="text-sm font-semibold text-foreground">
              📋 Important: Your Privacy Matters
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We are committed to protecting your personal information and your right to privacy. If you have any questions about how we handle your data, please don't hesitate to contact us through our WhatsApp support line available 24/7.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
