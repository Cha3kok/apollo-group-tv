import { PLANS, perMonth } from "@/lib/plans"
import { FAQS } from "@/lib/faqs"
import { KEY_FACTS } from "@/components/key-facts"
import { SITE, SITE_HOST, SITE_URL } from "@/lib/site"

// Plain-text summary for AI assistants (llms.txt). Built from the same data as the pages,
// so prices and facts never drift out of sync.
export const dynamic = "force-static"

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.name} (${SITE_HOST}) is a premium IPTV subscription that streams 21,000+ live TV channels from 60+ countries and languages and 65,000+ movies and series over the internet, in quality up to 4K UHD. It works on Smart TV, Amazon Firestick, Android, iPhone and iPad, Apple TV, MAG boxes, PC and Mac through apps such as IPTV Smarters Pro and TiviMate. Also known as: ${SITE.alternateNames.join(", ")}. It is not related to Apollo Education Group or other companies named Apollo Group.

## Key facts

${KEY_FACTS.map((f) => `- ${f.label}: ${f.value}`).join("\n")}

## Plans

${PLANS.map((p) => `- ${p.name}: $${p.price.toFixed(2)} ($${perMonth(p).toFixed(2)}/month)`).join("\n")}

## Main pages

- [Home](${SITE_URL}/): What Apollo Group TV is, plans, setup steps and FAQ
- [Apollo TV guide](${SITE_URL}/apollo-tv): How Apollo TV works, channels, prices, devices, setup and internet speed
- [ApolloGroup TV explained](${SITE_URL}/apollo-group): How Apollo Group TV differs from other Apollo Group companies
- [Channel list](${SITE_URL}/channels-list): Live channel counts by country and language
- [Blog](${SITE_URL}/blog): Setup tutorials and streaming guides
- [Contact](${SITE_URL}/contact): Support and sales, 24/7 on WhatsApp ${SITE.phoneDisplay}

## FAQ

${FAQS.map((f) => `### ${f.question}\n${f.answer}`).join("\n\n")}

## Policies

- [Refund Policy](${SITE_URL}/refund)
- [Terms and Conditions](${SITE_URL}/terms)
- [Privacy Policy](${SITE_URL}/privacy)
- [DMCA Policy](${SITE_URL}/dmca)
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
