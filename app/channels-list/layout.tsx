import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apollo Group TV Channel List | 21,000+ Live IPTV Channels",
  description:
    "Browse the Apollo Group TV channel list by country: live TV from 60+ countries and languages in 4K, HD and FHD, including sports, movies, series, news and kids channels.",
  alternates: { canonical: "/channels-list" },
}

export default function ChannelsListLayout({ children }: { children: React.ReactNode }) {
  return children
}
