import { Metadata } from "next"
import { pageMeta } from "@/lib/seo"

export const metadata: Metadata = pageMeta({
  title: "Apollo Group TV Channel List: Live Channels by Country",
  description:
    "Browse the Apollo Group TV channel list by country: live TV from 60+ countries and languages in 4K, HD and FHD, including sports, movies, series, news and kids.",
  path: "/channels-list",
})

export default function ChannelsListLayout({ children }: { children: React.ReactNode }) {
  return children
}
