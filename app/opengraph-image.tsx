import { ImageResponse } from "next/og"
import { SITE_HOST } from "@/lib/site"

export const alt = "Apollo Group TV: premium IPTV subscription with 21,000+ live channels in 4K"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  const stats = [
    { value: "21,000+", label: "Live channels" },
    { value: "65,000+", label: "Movies & series" },
    { value: "4K UHD", label: "Quality" },
    { value: "99.9%", label: "Uptime" },
  ]

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          backgroundColor: "#05060f",
          backgroundImage: "radial-gradient(circle at 85% 20%, rgba(255,122,69,0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(59,75,255,0.35), transparent 50%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* planet mark */}
        <div style={{ position: "absolute", right: 110, top: 150, display: "flex" }}>
          <svg width="300" height="300" viewBox="0 0 64 64">
            <defs>
              <linearGradient id="p" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffd56b" />
                <stop offset="55%" stopColor="#ff7a45" />
                <stop offset="100%" stopColor="#ff4d8d" />
              </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="14" fill="url(#p)" />
            <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="#3dd9ff" strokeWidth="1.6" transform="rotate(-24 32 32)" />
            <circle cx="55" cy="18" r="2.6" fill="#ffd56b" />
          </svg>
        </div>

        <div style={{ display: "flex", color: "#ffb224", fontSize: 22, letterSpacing: 6, textTransform: "uppercase" }}>
          Premium IPTV subscription
        </div>
        <div style={{ display: "flex", color: "#f4f5ff", fontSize: 92, fontWeight: 800, letterSpacing: -3, marginTop: 18 }}>
          Apollo Group TV
        </div>
        <div style={{ display: "flex", color: "#a0a8cc", fontSize: 32, marginTop: 14, maxWidth: 640 }}>
          Live TV, sports, movies and series in 4K on every device.
        </div>

        <div style={{ display: "flex", gap: 44, marginTop: 54 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#ffb224", fontSize: 40, fontWeight: 800 }}>{s.value}</span>
              <span style={{ color: "#a0a8cc", fontSize: 18 }}>{s.label}</span>
            </div>
          ))}
        </div>

        <div style={{ position: "absolute", bottom: 40, left: 90, display: "flex", color: "#3dd9ff", fontSize: 20 }}>
          {SITE_HOST} · Free 3-hour trial
        </div>
      </div>
    ),
    size,
  )
}
