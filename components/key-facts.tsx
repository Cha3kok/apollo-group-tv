import Link from "next/link"
import { CalendarCheck } from "lucide-react"
import { PLANS, perMonth } from "@/lib/plans"
import { LAST_UPDATED, LAST_UPDATED_LABEL } from "@/lib/site"

const cheapest = PLANS.reduce((a, b) => (perMonth(b) < perMonth(a) ? b : a))

/** Short, self-contained facts near the top of the homepage. Written to be quotable by search and AI answers. */
export const KEY_FACTS: { label: string; value: string }[] = [
  { label: "Live TV channels", value: "21,000+ from 60+ countries and languages" },
  { label: "Movies & series", value: "65,000+ titles on demand, updated daily" },
  { label: "Picture quality", value: "SD, HD, Full HD and 4K UHD" },
  {
    label: "Price",
    value: `From $${PLANS[0].price} for 1 month, or $${perMonth(cheapest).toFixed(2)}/month on the ${cheapest.name.toLowerCase()} plan`,
  },
  { label: "Free trial", value: "3 hours, requested on WhatsApp" },
  { label: "Refunds", value: "7-day money-back guarantee" },
  { label: "Devices", value: "Smart TV, Firestick, Android, iPhone & iPad, Apple TV, MAG, PC & Mac" },
  { label: "Apps", value: "IPTV Smarters Pro, TiviMate and any Xtream Codes or M3U player" },
  { label: "Activation", value: "Instant: login details sent on WhatsApp after payment" },
  { label: "Support", value: "24/7 on WhatsApp in English, French, Arabic and Spanish" },
]

export default function KeyFacts() {
  return (
    <section id="what-is-apollo-group-tv" className="relative px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#ffb224]" />
            At a glance
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold leading-[1.1] text-foreground sm:text-5xl">
            What is <span className="text-gradient">Apollo Group TV</span>?
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-foreground/90">
            Apollo Group TV is a premium IPTV subscription that streams 21,000+ live TV channels and 65,000+ movies
            and series over your internet connection, in quality up to 4K. It runs on Smart TVs, Amazon Firestick,
            Android, iPhone, MAG boxes and computers through apps like IPTV Smarters Pro and TiviMate. Plans start at $
            {PLANS[0].price} a month, with a free 3-hour trial.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            People also search for it as <Link href="/apollo-tv" className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">Apollo TV</Link>,
            ApolloGroup TV or <span className="whitespace-nowrap">apollogrouptv</span>. It is a TV streaming service and
            is not connected to other companies named{" "}
            <Link href="/apollo-group" className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">Apollo Group</Link>.
          </p>
          <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
            <CalendarCheck className="h-4 w-4 text-accent" />
            Facts checked on <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time>
          </p>
        </div>

        <dl className="glass divide-y divide-white/[0.06] overflow-hidden rounded-3xl">
          {KEY_FACTS.map((fact) => (
            <div key={fact.label} className="grid grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-4 px-6 py-3.5 transition-colors hover:bg-white/[0.03]">
              <dt className="text-sm text-muted-foreground">{fact.label}</dt>
              <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
