import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, CalendarCheck, ChevronRight, MessageCircle, Sparkles, Zap } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { JsonLd, breadcrumb } from "@/components/json-ld"
import { LAST_UPDATED, LAST_UPDATED_LABEL, SITE_URL } from "@/lib/site"
import { whatsappLinks } from "@/lib/whatsapp-utils"

export interface GuideSection {
  id: string
  title: string
  body: ReactNode
}

export interface GuideProps {
  path: string
  breadcrumbName: string
  eyebrow: string
  title: ReactNode
  /** Plain-text headline for structured data. */
  headline: string
  description: string
  /** 40–60 word direct answer shown first on the page: the passage AI answers quote. */
  answer: string
  sections: GuideSection[]
  faqs: { question: string; answer: string }[]
  related: { href: string; label: string; text: string }[]
}

/* ---------- Small content helpers used inside guide sections ---------- */

export function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-muted-foreground">{children}</p>
}

export function Steps({ items }: { items: ReactNode[] }) {
  return (
    <ol className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-bold text-primary">
            {i + 1}
          </span>
          <span className="pt-0.5 leading-relaxed text-muted-foreground">{item}</span>
        </li>
      ))}
    </ol>
  )
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span className="leading-relaxed text-muted-foreground">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="glass overflow-x-auto rounded-2xl">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-white/[0.08]">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-white/[0.04] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-3 ${j === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function A({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-medium text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
      {children}
    </Link>
  )
}

/* ---------- Page ---------- */

export default function GuidePage(props: GuideProps) {
  const url = `${SITE_URL}${props.path}`

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: props.headline,
        description: props.description,
        url,
        mainEntityOfPage: url,
        inLanguage: "en",
        datePublished: LAST_UPDATED,
        dateModified: LAST_UPDATED,
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: { "@id": `${SITE_URL}/#organization` },
        image: `${SITE_URL}/opengraph-image`,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: props.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      breadcrumb([{ name: props.breadcrumbName, path: props.path }]),
    ],
  }

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="min-h-screen px-4 pb-24 pt-32">
        <article className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{props.breadcrumbName}</span>
          </nav>

          {/* Header */}
          <header className="mt-8 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#ffb224]" />
              {props.eyebrow}
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-6xl">{props.title}</h1>
            <p className="mt-5 text-sm text-muted-foreground">
              <CalendarCheck className="mr-2 inline h-4 w-4 align-[-3px] text-accent" />
              Updated <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time> · Apollo Group TV team
            </p>
          </header>

          {/* Direct answer */}
          <div className="border-orbit mt-10 max-w-4xl rounded-3xl">
            <div className="rounded-3xl p-6 sm:p-8">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                <Sparkles className="h-3.5 w-3.5" /> Quick answer
              </p>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-foreground">{props.answer}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/#pricing" className="btn-flame flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold">
                  <Zap className="h-4 w-4" /> See plans & prices
                </Link>
                <Link
                  href={whatsappLinks.freeTrialHero()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-semibold text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" /> Free 3-hour trial
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)]">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">On this page</p>
              <ol className="mt-4 flex flex-col gap-1 border-l border-white/10">
                {[...props.sections, { id: "faq", title: "FAQ" }].map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            {/* Body */}
            <div className="flex min-w-0 max-w-3xl flex-col gap-14">
              {props.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{s.title}</h2>
                  <div className="mt-5 flex flex-col gap-5">{s.body}</div>
                </section>
              ))}

              <section id="faq" className="scroll-mt-28">
                <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Frequently asked questions</h2>
                <div className="mt-5 flex flex-col gap-3">
                  {props.faqs.map((f) => (
                    <details key={f.question} className="glass group rounded-2xl px-6 py-1 open:bg-white/[0.06]">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-base font-medium text-foreground marker:hidden group-open:text-primary">
                        {f.question}
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="text-2xl font-bold text-foreground">Keep reading</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {props.related.map((r) => (
                    <Link key={r.href} href={r.href} className="glass group rounded-2xl p-5 transition-colors hover:border-primary/40">
                      <span className="flex items-center justify-between font-semibold text-foreground">
                        {r.label}
                        <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground">{r.text}</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
