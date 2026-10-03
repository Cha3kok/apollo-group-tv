import { PLANS } from "@/lib/plans"

const priceList = PLANS.map((p) => `${p.name} at $${p.price}`).join(", ")

/** Shown in the FAQ section and published as FAQPage structured data, so both always match. */
export const FAQS: { question: string; answer: string }[] = [
  {
    question: "What is Apollo Group TV?",
    answer:
      "Apollo Group TV is a premium IPTV subscription service with over 21,000 live TV channels and 65,000+ movies and series in up to 4K UHD quality. It runs on Smart TVs, Amazon Firestick, Android, iPhone and iPad, MAG boxes and computers, with anti-freeze technology and 99.9% server uptime.",
  },
  {
    question: "How much does an Apollo Group TV subscription cost?",
    answer: `Apollo Group TV has five plans: ${priceList}. Every plan includes the full channel list, the on-demand library, 4K quality, anti-freeze technology and 24/7 support. Longer plans cost less per month.`,
  },
  {
    question: "Does Apollo Group TV offer a free IPTV trial?",
    answer:
      "Yes. Apollo Group TV offers a free 3-hour trial so you can test the channel lineup, the on-demand library, picture quality and streaming stability before you pay. Message us on WhatsApp to request it and we send the login details within minutes.",
  },
  {
    question: "What is the Apollo Group TV refund policy?",
    answer:
      "Every plan comes with a 7-day money-back guarantee. If you are not satisfied within the first 7 days, contact support on WhatsApp and we refund the payment in full.",
  },
  {
    question: "What payment methods does Apollo Group TV accept?",
    answer:
      "Apollo Group TV accepts credit and debit cards (Visa, Mastercard), PayPal, cryptocurrency (Bitcoin, USDT) and bank transfer. Contact us on WhatsApp and we will help you pick the most convenient option.",
  },
  {
    question: "Can I use Apollo Group TV on multiple devices?",
    answer:
      "Each standard plan includes 1 device connection, and you can install the service on any of your devices. If you want to watch on several screens at the same time, ask us on WhatsApp about multi-connection plans.",
  },
  {
    question: "What is Apollo Group TV Anti-Freeze Technology?",
    answer:
      "Anti-Freeze is the Apollo Group TV server technology that reduces buffering. It balances load across servers and switches your stream to the best available server in real time, which keeps playback smooth during peak hours, live sports and PPV events.",
  },
  {
    question: "How do I install Apollo Group TV on my device?",
    answer:
      "Setup takes under 5 minutes. After you subscribe, we send Xtream Codes login details on WhatsApp. Install a compatible player such as IPTV Smarters Pro or TiviMate on your Smart TV, Firestick, Android, iOS device or MAG box, enter the details and start watching.",
  },
  {
    question: "What channels are included in the Apollo Group TV channel list?",
    answer:
      "Apollo Group TV includes 21,000+ live channels from 60+ countries and languages across sports, PPV events, movies, series, news, kids, music and documentaries, plus 65,000+ movies and series updated daily. You can browse the list by country on our channels list page.",
  },
  {
    question: "How do I become an Apollo Group TV reseller?",
    answer:
      "Contact us on WhatsApp to join the reseller program. Resellers get wholesale pricing, a reseller panel to create and manage client subscriptions and credits, setup training and 24/7 priority support.",
  },
]
