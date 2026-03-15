"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function TermsConditions() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content:
        "By accessing and using Apollo Group TV (appoloiptv.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      title: "2. Service Description",
      content:
        "Apollo Group TV provides IPTV streaming services including:\n\n• Access to 21,000+ live TV channels\n• 65,000+ movies and TV series\n• 4K UHD streaming quality\n• Support for multiple devices\n• 24/7 customer support\n\nOur service is provided 'as-is' with 99.9% uptime guarantee.",
    },
    {
      title: "3. Subscription Plans",
      content:
        "• Subscription Commitment: You agree to pay the subscription fee for your chosen plan\n• Billing Cycle: Charges will be billed according to your plan (monthly, quarterly, semi-annual, annual, or bi-annual)\n• Auto-Renewal: Unless canceled, subscriptions renew automatically\n• Currency: All prices are in USD\n• Taxes: Additional taxes may apply depending on your location",
    },
    {
      title: "4. User Responsibilities",
      content:
        "You agree to:\n\n• Use the service only for personal, non-commercial use\n• Not share your login credentials with others\n• Not attempt to bypass or circumvent any security measures\n• Not distribute, reproduce, or transmit any service content\n• Not use the service for any illegal purposes\n• Comply with all applicable laws and regulations",
    },
    {
      title: "5. Intellectual Property Rights",
      content:
        "All content available through Apollo Group TV, including but not limited to text, graphics, logos, images, and video clips, is the property of their respective owners. You may not reproduce, distribute, transmit, or display any content without prior written permission from the copyright holder.",
    },
    {
      title: "6. Payment and Billing",
      content:
        "• Valid Payment Method: You must provide a valid payment method\n• Automatic Charges: You authorize us to charge your payment method automatically\n• Invoice: You may request an invoice through our contact form\n• Dispute: Report billing issues within 30 days of the charge\n• Payment Security: All payments are processed through secure SSL encryption",
    },
    {
      title: "7. Cancellation and Refund",
      content:
        "• Right to Cancel: You can cancel at any time without penalty\n• 7-Day Guarantee: Full refund within 7 days of purchase\n• After 7 Days: Partial refund for unused subscription time\n• Process: Contact us via WhatsApp for immediate processing\n• No Hidden Charges: Cancellation is free and immediate",
    },
    {
      title: "8. Service Availability and Support",
      content:
        "• 99.9% Uptime: We guarantee 99.9% service availability\n• Support: 24/7 customer support via WhatsApp\n• Response Time: 1-2 hours average response time\n• Maintenance: We may perform scheduled maintenance with advance notice\n• Force Majeure: We're not liable for service interruptions due to circumstances beyond our control",
    },
    {
      title: "9. Limitation of Liability",
      content:
        "Apollo Group TV shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:\n\n• Your use of the service\n• Loss of data or content\n• Service interruptions\n• Any viruses or malicious code\n\nOur maximum liability is limited to the amount you paid for the service.",
    },
    {
      title: "10. Prohibited Activities",
      content:
        "You agree not to:\n\n• Share login credentials or account access\n• Use the service to access content outside your region when restricted\n• Attempt to reverse-engineer or hack the service\n• Interfere with service operations or security\n• Engage in any fraudulent activity\n• Use multiple accounts to circumvent restrictions\n\nViolation may result in immediate account termination without refund.",
    },
    {
      title: "11. Modifications to Terms",
      content:
        "Apollo Group TV reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after changes constitutes your acceptance of the modified terms.",
    },
    {
      title: "12. Termination",
      content:
        "Apollo Group TV may terminate or suspend your account and access immediately, without prior notice or liability, for:\n\n• Violation of these terms\n• Unlawful or fraudulent activity\n• Unauthorized sharing of credentials\n• Repeated violations despite warnings\n• Payment failure after reasonable notice",
    },
    {
      title: "13. Contact Information",
      content:
        "For questions about these Terms and Conditions:\n\n• WhatsApp: +212 707 711 512 (24/7)\n• Contact Form: https://appoloiptv.com/contact\n• Website: https://appoloiptv.com\n\nWe're here to help and answer any questions you may have.",
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
            <FileText className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Terms and Conditions
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
          <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
            <p className="text-sm font-semibold text-yellow-200">
              ⚠️ Please read these terms carefully
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              By using Apollo Group TV, you agree to these terms and conditions. If you don't agree with any part of these terms, please do not use our service.
            </p>
          </div>

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

          {/* Footer Note */}
          <div className="rounded-lg border border-border/50 bg-secondary/20 p-6">
            <p className="text-sm font-semibold text-foreground">
              Legal Notice
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              These terms and conditions constitute the entire agreement between you and Apollo Group TV regarding the use of the service. Any previous or contemporaneous agreements, whether written or oral, are superseded by this agreement. If any provision of these terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
