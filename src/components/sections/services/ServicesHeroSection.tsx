export default function ServicesHeroSection() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-[#080B12] px-6 md:px-10 lg:px-16 pt-36 pb-24 overflow-hidden">
        {/* Background glows */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-5">
            Dedicated Services
          </span>

          <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-bold leading-[1.1] tracking-tight text-white mb-6">
            Dedicated{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Digital Marketing
            </span>{' '}
            &amp; Software Specialists
          </h1>

          <p className="text-gray-400 text-[16px] leading-7 max-w-2xl mx-auto mb-10">
            Access credentialed experts in SEO, performance marketing, CRO, automation
            and software development — without the overhead of permanent hiring. Dedicated
            to your goals, embedded in your team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-full transition-colors text-[15px] shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              Get a Free Consultation ↗
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-[15px] transition-colors duration-200"
            >
              Explore Services ↓
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="bg-[#0d1117] border-t border-b border-gray-800">
        <div className="px-10 py-10">
          <ul className="flex flex-wrap items-center divide-x divide-gray-700">
            <li className="flex-1 px-8 min-w-[160px]">
              <h2 className="text-white text-[32px] font-bold">72%</h2>
              <p className="text-gray-400 text-[13px] mt-1">Employers Report Talent Shortage</p>
            </li>
            <li className="flex-1 px-8 min-w-[160px]">
              <h2 className="text-white text-[32px] font-bold">51%</h2>
              <p className="text-gray-400 text-[13px] mt-1">CMOs Seeking Agency Partners</p>
            </li>
            <li className="flex-1 px-8 min-w-[160px]">
              <h2 className="text-white text-[32px] font-bold">+10%</h2>
              <p className="text-gray-400 text-[13px] mt-1">US Developer Job Growth (2025–2035)</p>
            </li>
            <li className="flex-1 px-8 min-w-[160px]">
              <h2 className="text-white text-[32px] font-bold">$9/hr</h2>
              <p className="text-gray-400 text-[13px] mt-1">Starting Rate</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
