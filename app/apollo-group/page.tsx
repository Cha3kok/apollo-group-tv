import { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import GuidePage, { A, Bullets, P, Steps, Table } from "@/components/guide-page"
import { PLANS, perMonth } from "@/lib/plans"

const description =
  "ApolloGroup TV is an IPTV service with 21,000+ channels and 65,000+ movies in 4K. How it differs from other Apollo Group companies, plus plans and setup."

export const metadata: Metadata = pageMeta({
  title: "ApolloGroup TV: Apollo Group IPTV Plans, Setup & FAQ",
  description,
  path: "/apollo-group",
  type: "article",
})

const faqs = [
  {
    question: "Is ApolloGroup TV related to Apollo Education Group?",
    answer:
      "No. ApolloGroup TV (Apollo Group TV) is an IPTV streaming service. Apollo Education Group is a separate education company based in Phoenix, Arizona, and the two have no connection.",
  },
  {
    question: "What does ApolloGroup TV include?",
    answer:
      "ApolloGroup TV includes 21,000+ live channels from 60+ countries and languages, 65,000+ movies and series on demand, an electronic program guide, catch-up TV and streaming quality up to 4K, on Smart TV, Firestick, Android, iOS, MAG and PC.",
  },
  {
    question: "How do I subscribe to ApolloGroup TV?",
    answer:
      "Pick a plan on the Apollo Group TV pricing section and tap Order Now. WhatsApp opens with your plan selected, you pay by card, PayPal, crypto or bank transfer, and your login details arrive within minutes.",
  },
  {
    question: "Does ApolloGroup TV have a reseller program?",
    answer:
      "Yes. Resellers get wholesale pricing, a panel to create and manage client subscriptions with credits, setup training and 24/7 priority support. Contact the team on WhatsApp to join.",
  },
  {
    question: "Can I get a refund from ApolloGroup TV?",
    answer:
      "Yes. Every plan has a 7-day money-back guarantee. Contact support on WhatsApp within 7 days of purchase for a full refund.",
  },
]

export default function ApolloGroupPage() {
  return (
    <GuidePage
      path="/apollo-group"
      breadcrumbName="ApolloGroup TV"
      eyebrow="ApolloGroup explained"
      headline="ApolloGroup TV: Apollo Group IPTV Plans, Setup & FAQ"
      title={
        <>
          <span className="text-gradient">ApolloGroup</span> TV: Which Apollo Group Are You Looking For?
        </>
      }
      description={description}
      answer="If you searched “apollogroup” for TV streaming, you're looking for Apollo Group TV: an IPTV subscription with 21,000+ live channels and 65,000+ movies and series in up to 4K, on Smart TV, Firestick, Android, iOS and PC. It is not related to Apollo Education Group or to the hospitality and real-estate firms called The Apollo Group."
      faqs={faqs}
      related={[
        { href: "/", label: "Apollo Group TV home", text: "Plans, features and the free trial" },
        { href: "/apollo-tv", label: "Apollo TV: complete guide", text: "How it works, devices, speed and setup" },
        { href: "/channels-list", label: "Channel list by country", text: "See channel counts for 60+ countries" },
        { href: "/iptv-reseller-program-earn-money", label: "IPTV reseller program", text: "How reselling Apollo Group TV works" },
      ]}
      sections={[
        {
          id: "which-apollo-group",
          title: "Which “Apollo Group” is this?",
          body: (
            <>
              <P>
                Several unrelated organisations use the name Apollo Group, so search results for “apollogroup” mix them
                together. This site is about the TV streaming service:
              </P>
              <Table
                head={["Name", "What it is", "Related to Apollo Group TV?"]}
                rows={[
                  ["Apollo Group TV (ApolloGroup TV, Apollo TV)", "IPTV subscription: live TV, movies and series", "This is us"],
                  ["Apollo Education Group", "Education company based in Phoenix, Arizona", "No"],
                  ["The Apollo Group (hospitality)", "Hotel and cruise catering company in Miami", "No"],
                  ["The Apollo Group (real estate)", "Real-estate team in Denver", "No"],
                ]}
              />
            </>
          ),
        },
        {
          id: "what-you-get",
          title: "What Apollo Group TV gives you",
          body: (
            <Bullets
              items={[
                "21,000+ live TV channels from 60+ countries and languages, including sports, PPV events, news and kids.",
                "65,000+ movies and series on demand, updated daily.",
                "SD, HD, Full HD and 4K UHD quality with anti-freeze server technology.",
                "A full TV guide (EPG) and 7-day catch-up on supported channels.",
                "Works on Smart TV, Firestick, Android, iPhone, iPad, Apple TV, MAG, PC and Mac.",
                "24/7 support on WhatsApp in English, French, Arabic and Spanish.",
              ]}
            />
          ),
        },
        {
          id: "plans",
          title: "ApolloGroup TV plans and prices",
          body: (
            <>
              <Table
                head={["Plan", "Price", "Per month"]}
                rows={PLANS.map((p) => [p.name + (p.popular ? " (most popular)" : ""), `$${p.price.toFixed(2)}`, `$${perMonth(p).toFixed(2)}`])}
              />
              <P>
                Compare every plan on the <A href="/#pricing">pricing section</A>. All plans include a 7-day money-back
                guarantee.
              </P>
            </>
          ),
        },
        {
          id: "get-started",
          title: "How to get started",
          body: (
            <Steps
              items={[
                "Request the free 3-hour trial on WhatsApp to test channels and picture quality.",
                <>Choose a plan on the <A href="/#pricing">pricing section</A> and tap Order Now.</>,
                "Pay by card, PayPal, cryptocurrency or bank transfer.",
                "Receive your Xtream Codes or M3U login on WhatsApp within minutes.",
                <>Enter it in IPTV Smarters Pro or TiviMate. Device-by-device steps are in the <A href="/apollo-tv#firestick-setup">Apollo TV setup guide</A>.</>,
              ]}
            />
          ),
        },
        {
          id: "choose-provider",
          title: "How to choose a reliable IPTV provider",
          body: (
            <>
              <P>
                Many websites sell IPTV under similar names. Whichever service you pick, check these points before you
                pay:
              </P>
              <Bullets
                items={[
                  "A free trial, so you can test stability during a live match before paying.",
                  "A written refund policy with a clear time limit.",
                  "Prices shown up front, with no surprise renewal charges.",
                  "Support that answers quickly, ideally 24/7.",
                  "Payment methods that offer buyer protection, such as card or PayPal.",
                  "Clear policies: terms, privacy and a way to report copyright issues.",
                ]}
              />
              <P>
                Apollo Group TV offers a <A href="/#pricing">3-hour free trial</A>, a <A href="/refund">7-day refund policy</A>,
                published <A href="/terms">terms</A> and a <A href="/dmca">DMCA policy</A>.
              </P>
            </>
          ),
        },
        {
          id: "reseller",
          title: "ApolloGroup reseller program",
          body: (
            <P>
              If you want to sell subscriptions yourself, the reseller program gives you wholesale pricing and a panel to
              create and manage client accounts with credits, plus training and priority support. Read{" "}
              <A href="/iptv-reseller-program-earn-money">how the reseller program works</A> or jump to the{" "}
              <A href="/#reseller">reseller section</A>.
            </P>
          ),
        },
      ]}
    />
  )
}
