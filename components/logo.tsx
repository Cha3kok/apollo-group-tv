import Link from "next/link"

/** Apollo Group TV mark: a planet with an orbiting gold satellite, next to the wordmark. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" aria-label="Apollo Group TV home" className={`group flex items-center gap-2.5 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center">
        <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
          <defs>
            <linearGradient id="logo-planet" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffd56b" />
              <stop offset="55%" stopColor="#ff7a45" />
              <stop offset="100%" stopColor="#ff4d8d" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="9" fill="url(#logo-planet)" />
          <ellipse cx="20" cy="20" rx="17" ry="6.5" fill="none" stroke="#3dd9ff" strokeOpacity="0.7" strokeWidth="1.4" transform="rotate(-24 20 20)" />
        </svg>
        <span className="absolute inset-0 animate-orbit" aria-hidden>
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#ffd56b] shadow-[0_0_8px_#ffd56b]" />
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-foreground">Apollo</span>
        <span className="font-mono text-[9px] font-medium uppercase tracking-[0.32em] text-primary">Group TV</span>
      </span>
    </Link>
  )
}
