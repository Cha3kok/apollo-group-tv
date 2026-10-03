import { Metadata } from "next"
import GuidePage, { A, Bullets, P, Steps, Table } from "@/components/guide-page"
import { CHANNEL_COUNTRIES } from "@/lib/channel-countries"
import { PLANS, perMonth, savingsVsMonthly } from "@/lib/plans"

const description =
  "Apollo TV explained: what Apollo Group TV is, how it works, channels, prices from $15.99, supported devices, setup on Firestick and Smart TV, and internet speed you need."

export const metadata: Metadata = {
  title: "Apollo TV: Complete Guide to Apollo Group TV IPTV (2026)",
  description,
  alternates: { canonical: "/apollo-tv" },
  openGraph: { title: "Apollo TV: Complete Guide to Apollo Group TV IPTV", description, url: "/apollo-tv", type: "article" },
}

const topCountries = CHANNEL_COUNTRIES.filter((c) => c.region !== "special").slice(0, 8)

const faqs = [
  {
    question: "Is Apollo TV the same as Apollo Group TV?",
    answer:
      "Yes. Apollo TV is the short name most people use for Apollo Group TV. Both names refer to the same IPTV subscription with 21,000+ live channels and 65,000+ movies and series in up to 4K.",
  },
  {
    question: "How much does Apollo TV cost?",
    answer: `Apollo TV costs $${PLANS[0].price} for 1 month, $${PLANS[1].price} for 3 months, $${PLANS[2].price} for 6 months, $${PLANS[3].price} for 12 months and $${PLANS[4].price} for 24 months. Every plan includes all channels, the on-demand library and 4K quality.`,
  },
  {
    question: "Is there an Apollo TV app?",
    answer:
      "Apollo TV does not need its own app. After you subscribe you receive Xtream Codes or M3U login details, which work in IPTV player apps such as IPTV Smarters Pro, TiviMate and GSE Smart IPTV on Smart TV, Firestick, Android, iPhone and computers.",
  },
  {
    question: "Can I try Apollo TV for free?",
    answer:
      "Yes. Apollo TV offers a free 3-hour trial. Request it on WhatsApp and you receive login details within minutes, so you can test channels, picture quality and stability before paying.",
  },
  {
    question: "What internet speed do I need for Apollo TV?",
    answer:
      "Apollo TV needs about 10 Mbps for HD channels and 25 Mbps for 4K. A wired Ethernet connection or a strong 5 GHz Wi-Fi signal gives the most stable picture, especially for live sports.",
  },
  {
    question: "Is Apollo TV legal?",
    answer:
      "IPTV as a technology is legal and widely used. Whether a specific stream is licensed depends on the content and on the laws where you live, so check your local rules. Apollo Group TV responds to copyright notices under its DMCA policy.",
  },
]

export default function ApolloTvPage() {
  return (
    <GuidePage
      path="/apollo-tv"
      breadcrumbName="Apollo TV Guide"
      eyebrow="Apollo TV guide"
      headline="Apollo TV: Complete Guide to Apollo Group TV IPTV (2026)"
      title={
        <>
          <span className="text-gradient">Apollo TV</span>: The Complete Guide to Apollo Group TV
        </>
      }
      description={description}
      answer={`Apollo TV is the short name for Apollo Group TV, an IPTV subscription that streams 21,000+ live channels and 65,000+ movies and series over the internet in up to 4K. You watch it in an IPTV app such as IPTV Smarters Pro or TiviMate on a Smart TV, Firestick, Android, iPhone or computer. Plans start at $${PLANS[0].price} a month.`}
      faqs={faqs}
      related={[
        { href: "/", label: "Apollo Group TV home", text: "Plans, features and the free trial" },
        { href: "/apollo-group", label: "Apollo Group TV vs other Apollo Groups", text: "Which Apollo Group are you looking for?" },
        { href: "/channels-list", label: "Channel list by country", text: "See channel counts for 60+ countries" },
        { href: "/how-to-install-iptv-on-firestick", label: "Install IPTV on Firestick", text: "Step-by-step Firestick setup guide" },
      ]}
      sections={[
        {
          id: "what-is-apollo-tv",
          title: "What is Apollo TV?",
          body: (
            <>
              <P>
                Apollo TV, also written Apollo Group TV or apollogrouptv, is an IPTV (Internet Protocol Television)
                subscription. Instead of a cable box or satellite dish, the TV signal reaches you over your normal home
                internet connection and plays in an app on the devices you already own.
              </P>
              <P>
                One subscription includes live channels from more than 60 countries and languages, a library of 65,000+
                movies and series that is updated daily, an electronic program guide (EPG) and catch-up TV on supported
                channels. Picture quality goes from SD up to 4K UHD depending on the channel and your connection.
              </P>
            </>
          ),
        },
        {
          id: "how-it-works",
          title: "How Apollo TV works",
          body: (
            <>
              <P>Getting from purchase to watching takes about five minutes:</P>
              <Steps
                items={[
                  <>Choose a plan on the <A href="/#pricing">pricing section</A> or ask for the free 3-hour trial on WhatsApp.</>,
                  "Pay by card, PayPal, cryptocurrency or bank transfer.",
                  "Receive your login details on WhatsApp: a username, password and server URL (Xtream Codes), or an M3U playlist link.",
                  "Install an IPTV player such as IPTV Smarters Pro or TiviMate and enter the details.",
                  "The app loads the channel list, the TV guide and the on-demand library. Pick a channel and start watching.",
                ]}
              />
            </>
          ),
        },
        {
          id: "channels",
          title: "What you can watch on Apollo TV",
          body: (
            <>
              <P>
                Apollo TV covers live sports and pay-per-view events, movies, series, news, kids, music and documentary
                channels, plus 24/7 channels and radio. These are the largest country and language groups in the
                lineup:
              </P>
              <Table
                head={["Country / language", "Live channels"]}
                rows={topCountries.map((c) => [c.name, c.channels.toLocaleString("en-US")])}
              />
              <P>
                See every country on the <A href="/channels-list">Apollo Group TV channel list</A>, or read our guide to{" "}
                <A href="/best-sports-channels-on-apollo-group-tv">sports on Apollo Group TV</A>.
              </P>
            </>
          ),
        },
        {
          id: "prices",
          title: "Apollo TV prices",
          body: (
            <>
              <P>All plans include the full service on one device connection. Longer plans cost less per month:</P>
              <Table
                head={["Plan", "Price", "Per month", "Saving"]}
                rows={PLANS.map((p) => [
                  p.name,
                  `$${p.price.toFixed(2)}`,
                  `$${perMonth(p).toFixed(2)}`,
                  savingsVsMonthly(p) > 0 ? `${savingsVsMonthly(p)}%` : "–",
                ])}
              />
              <P>
                Every plan comes with a 7-day money-back guarantee. Read the <A href="/refund">refund policy</A> for the
                details.
              </P>
            </>
          ),
        },
        {
          id: "devices",
          title: "Devices and apps that work with Apollo TV",
          body: (
            <Table
              head={["Device", "Recommended app", "Setup time"]}
              rows={[
                ["Samsung / LG Smart TV", "IPTV Smarters Pro", "5 min"],
                ["Amazon Firestick / Fire TV", "IPTV Smarters Pro, TiviMate", "10 min"],
                ["Android TV & boxes", "TiviMate, IPTV Smarters Pro", "5 min"],
                ["iPhone, iPad, Apple TV", "IPTV Smarters, GSE Smart IPTV", "5 min"],
                ["MAG box", "Built-in portal", "5 min"],
                ["Windows PC & Mac", "IPTV Smarters, VLC", "5 min"],
              ]}
            />
          ),
        },
        {
          id: "firestick-setup",
          title: "How to set up Apollo TV on Firestick",
          body: (
            <>
              <Steps
                items={[
                  "On the Firestick home screen, open Settings → My Fire TV → Developer options and turn on Apps from Unknown Sources.",
                  "Search for and install the Downloader app from the Amazon Appstore.",
                  "Use Downloader to install IPTV Smarters Pro (or install TiviMate from the store).",
                  "Open the app, choose Login with Xtream Codes API and enter the details we sent on WhatsApp.",
                  "Wait for channels and the TV guide to load, then start watching.",
                ]}
              />
              <P>
                The full walkthrough with screenshots is in our <A href="/how-to-install-iptv-on-firestick">Firestick installation guide</A>.
                For other devices, see the <A href="/#setup">setup section</A>.
              </P>
            </>
          ),
        },
        {
          id: "internet-speed",
          title: "Internet speed you need",
          body: (
            <>
              <Table
                head={["Quality", "Minimum speed", "Best for"]}
                rows={[
                  ["SD", "5 Mbps", "Phones, slow connections"],
                  ["HD (720p)", "10 Mbps", "Most TVs and tablets"],
                  ["Full HD (1080p)", "15 Mbps", "Large TVs"],
                  ["4K UHD", "25 Mbps", "4K TVs, live sports"],
                ]}
              />
              <P>
                Use a wired Ethernet cable or 5 GHz Wi-Fi when you can. More tips are in{" "}
                <A href="/4k-streaming-tips-maximize-viewing-experience">our 4K streaming guide</A>.
              </P>
            </>
          ),
        },
        {
          id: "vs-cable",
          title: "Apollo TV vs cable and satellite",
          body: (
            <Table
              head={["", "Apollo TV", "Typical cable / satellite"]}
              rows={[
                ["Monthly cost", `From $${perMonth(PLANS[PLANS.length - 1]).toFixed(2)}`, "$80–$150"],
                ["Live channels", "21,000+ from 60+ countries", "200–500, mostly local"],
                ["Movies & series", "65,000+ on demand", "Extra cost"],
                ["Contract", "None", "Usually 12–24 months"],
                ["Devices", "TV, phone, tablet, PC", "TV with a set-top box"],
                ["Equipment", "None needed", "Box rental fees"],
              ]}
            />
          ),
        },
        {
          id: "buffering",
          title: "If Apollo TV buffers",
          body: (
            <Bullets
              items={[
                "Restart your router and streaming device.",
                "Switch from Wi-Fi to a wired connection, or move closer to the router.",
                "Lower the quality from 4K to Full HD during busy evenings.",
                "Clear the IPTV app's cache, or try another player such as TiviMate.",
                "Still stuck? Message support on WhatsApp 24/7 and we check the server routing for you.",
              ]}
            />
          ),
        },
      ]}
    />
  )
}
