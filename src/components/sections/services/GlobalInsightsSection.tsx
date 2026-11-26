import { globalFindings } from '@/data/servicesData'

export default function GlobalInsightsSection() {
  return (
    <section className="bg-[#0a0a0a] px-10 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          Global Research
        </span>
        <h2 className="text-white text-4xl md:text-[44px] font-bold leading-tight">
          The Case for{' '}
          <span className="text-blue-500">Dedicated Expertise</span>
        </h2>
        <p className="text-gray-400 text-[15px] mt-4 max-w-2xl mx-auto leading-7">
          Eight international research findings on talent constraints, agency demand and
          fast-changing skill requirements — context for why dedicated specialist capacity
          is increasingly how modern businesses build capability.
        </p>
      </div>

      {/* Findings grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {globalFindings.map((finding) => (
          <div
            key={finding.id}
            className="bg-[#0d1117] border border-gray-800 rounded-2xl p-6 flex flex-col gap-3 hover:border-blue-500/40 transition-colors duration-300"
          >
            {/* Big stat */}
            <p className="text-blue-400 text-[42px] font-bold leading-none">{finding.stat}</p>

            {/* Label */}
            <p className="text-white text-[14px] font-semibold leading-snug">{finding.label}</p>

            {/* Description */}
            <p className="text-gray-400 text-[13px] leading-6 flex-1">{finding.description}</p>

            {/* Publisher */}
            <p className="text-gray-600 text-[11px] font-medium border-t border-gray-800 pt-3 mt-auto">
              {finding.publisher}
            </p>
          </div>
        ))}
      </div>

      {/* Editorial note */}
      <p className="text-center text-gray-600 text-[12px] mt-10 max-w-3xl mx-auto leading-6">
        Sources describe hiring constraints, external-specialist demand and delivery models across
        surveyed populations. Statistics reflect published research findings and are not claims that
        dedicated service teams guarantee specific business outcomes.
      </p>
    </section>
  )
}
