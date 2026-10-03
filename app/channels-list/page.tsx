import Link from "next/link"
import { MessageCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import { PageSchema } from "@/components/json-ld"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import CountryBrowser from "@/components/country-browser"
import { CHANNEL_COUNTRIES } from "@/lib/channel-countries"
import { whatsappLinks } from "@/lib/whatsapp-utils"

const countryCount = CHANNEL_COUNTRIES.filter((c) => c.region !== "special").length

const genres = ["Sports", "Movies", "Series", "PPV Events", "News", "Kids", "Documentaries", "Music", "24/7 Channels", "Radio"]

export default function ChannelsPage() {
  return (
    <>
      <PageSchema name="Channel List" path="/channels-list" />
      <Navbar />
      <main className="min-h-screen px-4 pb-24 pt-36">
        <div className="mx-auto max-w-6xl">
          <header className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#ffb224]" />
              {countryCount}+ countries & languages
            </span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-6xl">
              Apollo Group TV <span className="text-gradient">Channel List</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Live TV from {countryCount}+ countries and languages in SD, HD, Full HD and 4K: sports, movies, series,
              news, kids and more. Browse by country below to see how many channels are included.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {genres.map((g) => (
                <span key={g} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                  {g}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-14">
            <CountryBrowser />
          </div>

          <section className="glass mx-auto mt-20 flex max-w-4xl flex-col items-center gap-6 rounded-3xl p-8 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">Looking for a specific channel?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Message us on WhatsApp with the channel or event you want and we will confirm it is included, or try
                the full lineup yourself with a free 3-hour trial.
              </p>
            </div>
            <Link
              href={whatsappLinks.channelsInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-flame flex shrink-0 items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4" />
              Ask on WhatsApp
            </Link>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
