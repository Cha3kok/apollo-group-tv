"use client"

import { useRef, type HTMLAttributes } from "react"

/** A card whose border and background light up around the cursor. Styling comes from `.spotlight` in globals.css. */
export default function SpotlightCard({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
        el.style.setProperty("--my", `${e.clientY - rect.top}px`)
      }}
      className={`spotlight ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
