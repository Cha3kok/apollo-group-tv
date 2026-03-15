"use client"

import { motion } from "framer-motion"
import { RotateCcw } from "lucide-react"

export default function RefundPolicy() {
  const sections = [
    {
      title: "1. 7-Day Money-Back Guarantee",
      content:
        "Apollo Group TV offers a comprehensive 7-day money-back guarantee on all subscription plans. If you are not completely satisfied with our service within 7 days of your purchase, you can request a full refund with no questions asked.",
    },
    {
      title: "2. How to Request a Refund",
      content:
        "To request a refund, please contact us through any of these channels:\n\n• WhatsApp: +212 707 711 512 (24/7 support)\n• Contact Form: https://appoloiptv.com/contact\n• Response Time: We process refund requests within 1-2 hours\n\nSimply let us know you want a refund, and we'll process it immediately.",
    },
    {
      title: "3. Refund Processing Time",
      content:
        "Approved refunds are processed within 24-48 hours from the time of approval. Depending on your payment method and financial institution, the funds may take an additional 3-7 business days to appear in your account.\n\n• Credit Card: 3-7 business days\n• Debit Card: 3-7 business days\n• Bank Transfer: 1-3 business days",
    },
    {
      title: "4. Cancellation Policy",
      content:
        "You can cancel your subscription at any time without penalties or hidden charges. Once cancelled:\n\n• Your Access: Immediately revoked after cancellation confirmation\n• Full Refund: Available within the first 7 days\n• Partial Refund: Available after 7 days for unused portion of subscription\n• No Questions Asked: We respect your decision to leave",
    },
    {
      title: "5. Refund Conditions",
      content:
        "Refunds will be granted in the following scenarios:\n\n✓ Service not working or unavailable\n✓ Channels not as described\n✓ Performance or quality below expectations\n✓ Technical issues preventing access\n✓ Any reason within 7 days of purchase\n\nAll refund requests are honored immediately.",
    },
    {
      title: "6. What Happens to Your Account",
      content:
        "After a cancellation or refund request:\n\n• Access is terminated immediately\n• All login credentials become inactive\n• Data is securely deleted within 30 days\n• No further charges will be applied\n• You can resubscribe at any time",
    },
    {
      title: "7. Special Circumstances",
      content:
        "We understand that special situations arise. If you have circumstances beyond the standard policy, please contact our support team via WhatsApp. We're here to help and will do our best to find a solution that works for you.",
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
            <RotateCcw className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Refund & Cancellation Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            7-Day Money-Back Guarantee | Zero Hidden Charges
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

          {/* Guarantee Box */}
          <div className="rounded-lg border-2 border-green-500/50 bg-green-500/10 p-6">
            <p className="text-lg font-bold text-green-400">
              ✓ 100% Satisfaction Guarantee
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We stand behind our service. If you're not satisfied for any reason within 7 days, we'll refund you immediately. That's our promise to you. Your satisfaction is our priority, and we want you to feel confident in choosing Apollo Group TV.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
