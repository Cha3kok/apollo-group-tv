"use client"

import { motion } from "framer-motion"
import { MessageSquare, Mail, User, Type } from "lucide-react"
import { useState } from "react"
import { whatsappLinks } from "@/lib/whatsapp-utils"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "sales",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message with form data
    const whatsappMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const phone = "212707711512"

    // Open WhatsApp with the message
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank")

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "sales",
      message: "",
    })
  }

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
            <MessageSquare className="h-7 w-7 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? Our team is here to help. Contact us for support, sales, or partnership inquiries.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8 sm:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-border/50 bg-secondary/20 py-3 pl-10 pr-4 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:bg-secondary/40 focus:outline-none"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full rounded-lg border border-border/50 bg-secondary/20 py-3 pl-10 pr-4 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:bg-secondary/40 focus:outline-none"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-foreground">
                Subject
              </label>
              <div className="relative">
                <Type className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border/50 bg-secondary/20 py-3 pl-10 pr-4 text-foreground transition-all focus:border-primary focus:bg-secondary/40 focus:outline-none appearance-none"
                >
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="reseller">Reseller Program</option>
                  <option value="trial">Free Trial Request</option>
                  <option value="billing">Billing Question</option>
                  <option value="general">General Question</option>
                </select>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help..."
                required
                rows={5}
                className="w-full rounded-lg border border-border/50 bg-secondary/20 py-3 px-4 text-foreground placeholder-muted-foreground transition-all focus:border-primary focus:bg-secondary/40 focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="neon-glow w-full rounded-lg bg-primary py-3 font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Send via WhatsApp
            </motion.button>
          </form>

          {/* Info Text */}
          <div className="mt-6 rounded-lg border border-primary/30 bg-primary/10 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              💬 Your message will be sent directly to our WhatsApp support team. We reply within 1-2 hours, 24/7.
            </p>
          </div>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {/* WhatsApp */}
          <div className="glass rounded-xl p-6 text-center">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10">
              <MessageSquare className="h-6 w-6 text-[#25D366]" />
            </div>
            <h3 className="font-semibold text-foreground">WhatsApp Support</h3>
            <p className="mt-2 text-sm text-muted-foreground">+212 707 711 512</p>
            <p className="mt-1 text-xs text-muted-foreground">Available 24/7</p>
          </div>

          {/* Response Time */}
          <div className="glass rounded-xl p-6 text-center">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">Response Time</h3>
            <p className="mt-2 text-sm text-muted-foreground">1-2 hours</p>
            <p className="mt-1 text-xs text-muted-foreground">Fast & professional support</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
