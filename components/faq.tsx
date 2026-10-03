"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQS } from "@/lib/faqs"
import { whatsappLinks } from "@/lib/whatsapp-utils"

export default function FAQ() {
  return (
    <section className="relative px-4 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-28 lg:self-start"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#ffb224]" />
            FAQ
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] text-foreground sm:text-5xl">
            Apollo Group TV <span className="text-gradient">FAQ</span>
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Everything about subscriptions, setup, pricing and features. Can&apos;t find your answer?
          </p>
          <Link
            href={whatsappLinks.floatingButton()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-7 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold text-foreground"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" />
            Ask us on WhatsApp
          </Link>
        </motion.div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {FAQS.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.45 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="glass overflow-hidden rounded-2xl border-none px-6 transition-colors data-[state=open]:border-primary/30 data-[state=open]:bg-white/[0.06]"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-medium text-foreground hover:no-underline [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
