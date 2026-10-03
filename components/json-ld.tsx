import { SITE_URL } from "@/lib/site"

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

/** BreadcrumbList for a page one or two levels below home. */
export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

/** WebPage + BreadcrumbList for simple pages (legal, policies, contact). */
export function PageSchema({ name, path, description }: { name: string; path: string; description?: string }) {
  const url = `${SITE_URL}${path}`
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": `${url}#webpage`,
            url,
            name,
            description,
            inLanguage: "en",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            publisher: { "@id": `${SITE_URL}/#organization` },
          },
          breadcrumb([{ name, path }]),
        ],
      }}
    />
  )
}
