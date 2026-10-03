import { SITE_HOST } from "@/lib/site"

/**
 * Generate WhatsApp URLs with tracking parameters
 * Helps identify which page/button customers contact you from
 */

interface WhatsAppMessageOptions {
  source: string // Page/component name (e.g., "hero", "pricing", "blog", "channels-list")
  action: string // What customer wants (e.g., "buy", "trial", "support", "reseller")
  context?: string // Additional context (e.g., plan name, article title)
  campaign?: string // Campaign/section (e.g., "header", "footer", "floating-button")
}

export function generateWhatsAppMessage(options: WhatsAppMessageOptions): string {
  const { source, action, context, campaign } = options

  const messages: Record<string, string> = {
    buy: "I want to buy an IPTV subscription",
    trial: "I want a free IPTV trial",
    support: "I need support with my IPTV subscription",
    reseller: "I want to become an Apollo Group TV reseller",
    inquiry: "I have a question about Apollo Group TV",
    channels: "I want to see the full channels list",
    dmca: "I would like to submit a DMCA copyright notice",
  }

  let baseMessage = messages[action] || "Hello Apollo Group TV"

  if (context) {
    baseMessage = `${baseMessage}: ${context}`
  }

  // Add tracking info
  const trackingInfo = `\n\n[Source: ${source}${campaign ? ` - ${campaign}` : ""}]`

  return baseMessage + trackingInfo
}

export function generateWhatsAppUrl(options: WhatsAppMessageOptions): string {
  const message = generateWhatsAppMessage(options)
  const phone = "212707711512" // Your WhatsApp number
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}

export const whatsappLinks = {
  // Hero Section
  buyNow: () => {
    const phone = "212707711512"
    const message = `${SITE_HOST} - Buy IPTV Subscription`
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${encodedMessage}`
  },

  freeTrialHero: () => {
    const phone = "212707711512"
    const message = `Try Free IPTV Trial - 3 h - ${SITE_HOST}`
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${encodedMessage}`
  },

  // Pricing Section
  buyPlan: (planName: string, price?: number | string, subtitle?: string) => {
    const phone = "212707711512"
    let message = `${SITE_HOST} - ${planName}`
    if (subtitle) {
      message += ` / ${subtitle}`
    }
    if (price) {
      message += ` - $${price}`
    }
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${encodedMessage}`
  },

  // Reseller Section
  becomeReseller: () =>
    generateWhatsAppUrl({
      source: "reseller",
      action: "reseller",
    }),

  // Blog
  blogSupport: (articleTitle: string) =>
    generateWhatsAppUrl({
      source: "blog",
      action: "support",
      context: articleTitle,
    }),

  // Channels List
  channelsInquiry: () =>
    generateWhatsAppUrl({
      source: "channels-list",
      action: "channels",
    }),

  // Footer
  footerContact: () => {
    const phone = "212707711512"
    const message = `${SITE_HOST} - Support`
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${encodedMessage}`
  },

  footerTrial: () => {
    const phone = "212707711512"
    const message = `Try Free IPTV Trial - 3 h - ${SITE_HOST}`
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${encodedMessage}`
  },

  // Navbar
  navbarContact: () => {
    const phone = "212707711512"
    const message = `${SITE_HOST} - Support`
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${encodedMessage}`
  },

  // Generic contact (floating button)
  floatingButton: () => {
    const phone = "212707711512"
    const message = `${SITE_HOST} - Contact Support`
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phone}?text=${encodedMessage}`
  },

  // DMCA page
  dmcaNotice: () =>
    generateWhatsAppUrl({
      source: "dmca",
      action: "dmca",
    }),

  // Blog Article CTA
  articleCTA: (articleTitle: string) =>
    generateWhatsAppUrl({
      source: "blog-article",
      action: "buy",
      context: articleTitle,
    }),
}
