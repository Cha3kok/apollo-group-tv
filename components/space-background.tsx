/** Fixed deep-space backdrop shared by every page: twinkling stars and slowly drifting aurora glows. */
export default function SpaceBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="stars" />
      <div className="stars-2" />
      <div
        className="aurora left-[-10%] top-[-15%] h-[55vh] w-[55vw] bg-[#ff8a3d]/40"
        style={{ animation: "aurora-1 22s ease-in-out infinite" }}
      />
      <div
        className="aurora right-[-15%] top-[20%] h-[60vh] w-[50vw] bg-[#3b4bff]/35"
        style={{ animation: "aurora-2 28s ease-in-out infinite" }}
      />
      <div
        className="aurora bottom-[-20%] left-[20%] h-[50vh] w-[45vw] bg-[#3dd9ff]/20"
        style={{ animation: "aurora-3 32s ease-in-out infinite" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,6,15,0.85)_100%)]" />
    </div>
  )
}
