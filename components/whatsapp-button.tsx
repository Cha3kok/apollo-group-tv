"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { whatsappLinks } from "@/lib/whatsapp-utils"

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 16 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Link
        href={whatsappLinks.floatingButton()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="group relative flex h-14 items-center gap-0 overflow-hidden rounded-full bg-[#25D366] pl-4 pr-4 text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.7)] transition-all duration-300 hover:gap-2 hover:pr-5"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />
        <MessageCircle className="relative h-6 w-6 shrink-0" />
        <span className="relative max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[120px]">
          Chat with us
        </span>
      </Link>
    </motion.div>
  )
}
