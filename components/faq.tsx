"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Apollo Group TV and why is it the best IPTV service?",
    answer:
      "Apollo Group TV is a premium IPTV subscription service that provides access to over 21,000 live TV channels and 65,000+ movies and series in 4K UHD quality. Apollo Group TV stands out from other IPTV providers because of our proprietary anti-freeze technology, 99.9% server uptime, and support for all major devices including Smart TVs, Amazon Firestick, Android, iOS, MAG boxes, and PCs. We are rated the #1 IPTV service in 2026 by thousands of satisfied subscribers worldwide.",
  },
  {
    question: "How much does an Apollo Group TV subscription cost?",
    answer:
      "Apollo Group TV offers three affordable subscription plans: Basic IPTV at $49.99/year for 1 device, Pro IPTV at $69.99/year for 2 devices (our most popular plan), and Elite IPTV at $89.99/year for 3 devices. All Apollo Group TV plans include 21,000+ live channels, 65,000+ VOD, 4K quality, anti-freeze technology, and 24/7 customer support. That is less than $4.17/month for premium IPTV service.",
  },
  {
    question: "Does Apollo Group TV offer a free IPTV trial?",
    answer:
      "Yes! Apollo Group TV offers a free 24-hour IPTV trial so you can test our IPTV service quality, full channel lineup, VOD library, and streaming stability before committing to a paid IPTV subscription. Contact us on WhatsApp to request your free Apollo Group TV trial instantly.",
  },
  {
    question: "What is the Apollo Group TV refund policy?",
    answer:
      "Apollo Group TV offers a 7-day money-back guarantee on all IPTV subscription plans. If you are not 100% satisfied with our IPTV service within the first 7 days, contact our support team for a full refund. No questions asked. We are confident Apollo Group TV is the best IPTV provider you will find.",
  },
  {
    question: "What payment methods does Apollo Group TV accept?",
    answer:
      "Apollo Group TV accepts a wide range of payment methods to make buying your IPTV subscription easy: credit/debit cards (Visa, Mastercard), PayPal, cryptocurrency (Bitcoin, USDT), and bank transfers. Contact us on WhatsApp and we will help you choose the most convenient payment option for your Apollo Group TV subscription.",
  },
  {
    question: "Can I use Apollo Group TV on multiple devices at the same time?",
    answer:
      "Yes! Apollo Group TV supports multi-device IPTV streaming depending on your plan. The Basic IPTV plan supports 1 device, the Pro IPTV plan supports 2 simultaneous devices, and the Elite IPTV plan supports 3 devices streaming at the same time - perfect for families who want to share one Apollo Group TV subscription.",
  },
  {
    question: "What is Apollo Group TV Anti-Freeze Technology?",
    answer:
      "Apollo Group TV uses a proprietary Anti-Freeze v10 engine that ensures completely buffer-free IPTV streaming. This technology automatically optimizes your connection and switches to the best available IPTV server in real-time. This means smooth, uninterrupted IPTV viewing even during peak hours, live sports events, and PPV matches. No other IPTV provider offers this level of streaming reliability.",
  },
  {
    question: "How do I install and set up Apollo Group TV on my device?",
    answer:
      "Setting up Apollo Group TV takes under 5 minutes on any device. After purchasing your IPTV subscription, we send you Xtream Codes login credentials via WhatsApp. Simply download a compatible IPTV player (IPTV Smarters Pro, TiviMate, or GSE Smart IPTV) on your Smart TV, Firestick, Android, iOS, or MAG box, enter your Apollo Group TV credentials, and start streaming instantly. We provide step-by-step IPTV setup guides for every device.",
  },
  {
    question: "What channels are included in the Apollo Group TV channel list?",
    answer:
      "Apollo Group TV includes 21,000+ live IPTV channels from every country and category: all premium sports channels (beIN Sports, Sky Sports, ESPN, DAZN), entertainment (HBO, Showtime, Canal+), all major streaming platforms (Netflix, Disney+, Amazon Prime content), news, kids, music, documentary, and international channels. Plus 65,000+ VOD movies and series updated daily. Check our full IPTV channel list for details.",
  },
  {
    question: "How do I become an Apollo Group TV reseller?",
    answer:
      "Joining the Apollo Group TV reseller program is easy and profitable. As an IPTV reseller, you get wholesale pricing, a professional reseller panel to manage your IPTV clients, create subscriptions, and track credits. Apollo Group TV provides full reseller training and 24/7 dedicated support. Contact us on WhatsApp to learn about our IPTV reseller packages and start your own IPTV business today.",
  },
]

export default function FAQ() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Apollo Group TV <span className="text-primary">FAQ</span> - Frequently Asked Questions
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Everything you need to know about Apollo Group TV subscription, setup, pricing, and features. Get answers to the most common questions about our IPTV service.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass overflow-hidden rounded-xl border-none px-6"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-medium text-foreground hover:no-underline sm:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
