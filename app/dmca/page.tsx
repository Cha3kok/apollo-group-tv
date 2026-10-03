import { Metadata } from "next"
import { pageMeta } from "@/lib/seo"
import Link from "next/link"
import { MessageCircle, ShieldCheck } from "lucide-react"
import Navbar from "@/components/navbar"
import { PageSchema } from "@/components/json-ld"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { SITE_HOST } from "@/lib/site"
import { whatsappLinks } from "@/lib/whatsapp-utils"

export const metadata: Metadata = pageMeta({
  title: "DMCA Policy | Apollo Group TV",
  description:
    "Apollo Group TV respects intellectual property rights. Read our DMCA policy to learn how to submit a copyright infringement notice or a counter-notice.",
  path: "/dmca",
})

const lastUpdated = "October 3, 2026"

// Add a dedicated copyright email here (e.g. "dmca@yourdomain.com") to show it on the page.
const dmcaEmail = ""

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-xs font-bold text-primary">
        {n}
      </span>
      <span>{children}</span>
    </li>
  )
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
      <span>{children}</span>
    </li>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="glass rounded-3xl p-6 sm:p-8">
      <h2 className="mb-4 text-xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  )
}

export default function DmcaPage() {
  return (
    <>
      <PageSchema name="DMCA Policy" path="/dmca" />
      <Navbar />
      <main className="min-h-screen px-4 pb-24 pt-36">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 ring-1 ring-primary/30">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </span>
            <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl">
              DMCA <span className="text-gradient">Policy</span>
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: {lastUpdated}</p>
          </header>

          <div className="mt-10 rounded-3xl border border-primary/30 bg-primary/[0.07] p-6">
            <p className="font-semibold text-primary">We respect copyright</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Apollo Group TV responds to valid notices of alleged copyright infringement in line with the Digital
              Millennium Copyright Act (DMCA), 17 U.S.C. § 512. If you believe content connected to our website or
              service infringes your rights, tell us and we will act promptly.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-5 text-sm leading-relaxed text-muted-foreground">
            <Section title="1. Our Commitment">
              <p>
                Apollo Group TV (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects the intellectual property
                rights of others and expects its users to do the same. We do not host, upload or claim ownership of
                third-party television content, and we are not affiliated with any broadcaster, network or streaming
                platform. When we receive a valid copyright notice, we review it and remove or disable access to the
                material concerned as quickly as possible.
              </p>
            </Section>

            <Section title="2. How to File a Copyright Infringement Notice">
              <p className="mb-4">
                If you are a copyright owner, or are authorised to act on behalf of one, send a written notice that
                includes all of the following:
              </p>
              <ol className="flex flex-col gap-3">
                <Step n={1}>
                  A physical or electronic signature of the copyright owner or a person authorised to act on their
                  behalf.
                </Step>
                <Step n={2}>Identification of the copyrighted work you claim has been infringed.</Step>
                <Step n={3}>
                  Identification of the material you claim is infringing, with enough detail for us to locate it, such
                  as the exact URL, stream or channel identifier.
                </Step>
                <Step n={4}>Your contact information: full name, postal address, telephone number and email address.</Step>
                <Step n={5}>
                  A statement that you have a good-faith belief that the use of the material is not authorised by the
                  copyright owner, its agent or the law.
                </Step>
                <Step n={6}>
                  A statement that the information in your notice is accurate and, under penalty of perjury, that you
                  are the copyright owner or authorised to act on their behalf.
                </Step>
              </ol>
              <p className="mt-4">Notices that do not include all of these elements may not be processed.</p>
            </Section>

            <Section title="3. What Happens Next">
              <ul className="flex flex-col gap-3">
                <Bullet>
                  We acknowledge receipt of a complete notice and review it, normally within{" "}
                  <strong className="text-foreground">48 hours</strong>.
                </Bullet>
                <Bullet>If the notice is valid, we remove or disable access to the material identified.</Bullet>
                <Bullet>
                  Where possible, we inform the affected user that the material was removed and share a copy of the
                  notice with them.
                </Bullet>
              </ul>
            </Section>

            <Section title="4. Counter-Notice">
              <p className="mb-4">
                If you believe material was removed by mistake or misidentification, you may send a counter-notice
                that includes:
              </p>
              <ol className="flex flex-col gap-3">
                <Step n={1}>Your physical or electronic signature.</Step>
                <Step n={2}>Identification of the material that was removed and where it appeared before removal.</Step>
                <Step n={3}>
                  A statement, under penalty of perjury, that you have a good-faith belief the material was removed as
                  a result of mistake or misidentification.
                </Step>
                <Step n={4}>
                  Your name, address and telephone number, and a statement that you consent to the jurisdiction of the
                  appropriate court and will accept service of process from the person who filed the original notice.
                </Step>
              </ol>
              <p className="mt-4">
                After receiving a valid counter-notice, we may restore the material in 10 to 14 business days unless
                the original complainant informs us that they have filed a court action.
              </p>
            </Section>

            <Section title="5. Repeat Infringers">
              <p>
                We terminate, in appropriate circumstances, the accounts of users who are found to be repeat
                infringers, in line with our{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms and Conditions
                </Link>
                .
              </p>
            </Section>

            <Section title="6. False Claims">
              <p>
                Under 17 U.S.C. § 512(f), anyone who knowingly misrepresents that material is infringing, or that it
                was removed by mistake, may be liable for damages, including costs and legal fees. Please make sure
                your claim is accurate before submitting it.
              </p>
            </Section>

            <Section title="7. Trademarks">
              <p>
                All trademarks, logos and brand names belong to their respective owners. Their use on third-party
                devices or apps does not imply any endorsement of, or affiliation with, Apollo Group TV.
              </p>
            </Section>

            <Section title="8. Contact for DMCA Notices">
              <p>Send copyright notices and counter-notices to:</p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="font-semibold text-foreground">Apollo Group TV Copyright Team</p>
                {dmcaEmail && (
                  <p className="mt-1">
                    Email:{" "}
                    <a href={`mailto:${dmcaEmail}`} className="text-primary hover:underline">
                      {dmcaEmail}
                    </a>
                  </p>
                )}
                <p className="mt-1">Website: {SITE_HOST}</p>
                <Link
                  href={whatsappLinks.dmcaNotice()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-4 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp: +212 707 711 512
                </Link>
              </div>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
