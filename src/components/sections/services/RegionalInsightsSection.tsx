import { regionalFindings } from '@/data/servicesData'

export default function RegionalInsightsSection() {
  return (
    <section className="bg-[#0d1117] px-10 py-20 border-t border-gray-800">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Regional Evidence
        </span>
        <h2 className="text-white text-4xl md:text-[44px] font-bold leading-tight">
          Demand Across{' '}
          <span className="text-blue-500">Every Market</span>
        </h2>
        <p className="text-gray-400 text-[15px] mt-4 max-w-xl mx-auto leading-7">
          Country and regional research findings on skills shortages and technology workforce
          demand — from the US and UK to the EU, Australia, New Zealand and UAE.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {regionalFindings.map((finding) => (
          <div
            key={finding.id}
            className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-6 hover:border-blue-500/40 transition-colors duration-300"
          >
            {/* Region header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[22px]" role="img" aria-label={finding.region}>
                {finding.flag}
              </span>
              <span className="text-gray-400 text-[12px] font-medium uppercase tracking-wider">
                {finding.region}
              </span>
            </div>

            {/* Stat */}
            <p className="text-blue-400 text-[36px] font-bold leading-none mb-2">
              {finding.stat}
            </p>

            {/* Label */}
            <p className="text-white text-[14px] font-semibold leading-snug mb-2">
              {finding.label}
            </p>

            {/* Description */}
            <p className="text-gray-400 text-[13px] leading-6 mb-4">{finding.description}</p>

            {/* Publisher */}
            <p className="text-gray-600 text-[11px] font-medium border-t border-gray-800 pt-3">
              {finding.publisher}
            </p>
          </div>
        ))}
      </div>

      {/* Editorial note */}
      <p className="text-center text-gray-600 text-[12px] mt-10 max-w-3xl mx-auto leading-6">
        Regional statistics reflect published government, analyst and industry research. Country-specific
        findings are cited for the geography stated and must not be applied to other markets.
      </p>
    </section>
  )
}
