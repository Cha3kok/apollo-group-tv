import Link from "next/link"
import { Metadata } from "next"
import { ArrowRight, Home } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Page Not Found | Apollo Group TV",
  robots: { index: false, follow: true },
}

const links = [
  { href: "/#pricing", label: "Plans & prices" },
  { href: "/channels-list", label: "Channel list" },
  { href: "/apollo-tv", label: "Apollo TV guide" },
  { href: "/blog", label: "Setup guides" },
]

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center px-4 pb-20 pt-32">
        <div className="mx-auto max-w-xl text-center">
          <p className="font-display text-8xl font-bold text-gradient sm:text-9xl">404</p>
          <h1 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">This page drifted out of orbit</h1>
          <p className="mt-4 text-muted-foreground">
            The page you are looking for does not exist or has moved. Try one of these instead:
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="glass group flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-primary/40">
                {l.label}
                <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
          <Link href="/" className="btn-flame mt-8 inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold">
            <Home className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
