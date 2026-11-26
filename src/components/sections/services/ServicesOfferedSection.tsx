import { ArrowRight, Megaphone, Search, BarChart2, Share2, TrendingUp, Zap, Globe, Smartphone, Box } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { serviceItems } from '@/data/servicesData'

const iconMap: Record<string, LucideIcon> = {
  Megaphone, Search, BarChart2, Share2, TrendingUp, Zap, Globe, Smartphone, Box,
}

export default function ServicesOfferedSection() {
  return (
    <section id="services" className="bg-black px-10 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
          What We Offer
        </span>
        <h2 className="text-white text-4xl md:text-[44px] font-bold leading-tight">
          Specialist Expertise,{' '}
          <span className="text-blue-500">Every Discipline</span>
        </h2>
        <p className="text-gray-400 text-[15px] mt-4 max-w-xl mx-auto leading-7">
          From search and paid media to mobile apps and SaaS platforms — dedicated
          specialists across every digital discipline.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {serviceItems.map((service) => {
          const Icon = iconMap[service.iconName]
          return (
            <div
              key={service.id}
              className="group relative bg-[#0d1117] border border-gray-800 hover:border-blue-500/50 rounded-2xl p-7 transition-all duration-300 hover:bg-[#0d1520] overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-blue-600/5 to-transparent rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-600/20 transition-colors">
                  {Icon && <Icon size={20} className="text-blue-400" />}
                </div>

                {/* Label chip */}
                <span className="text-blue-400 text-[11px] font-bold uppercase tracking-[0.15em] mb-2 inline-block">
                  {service.label}
                </span>

                <h3 className="text-white text-[18px] font-semibold leading-snug mb-3">
                  {service.heading}
                </h3>

                <p className="text-gray-400 text-[14px] leading-6 mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gray-500 text-[11px] font-medium border border-gray-700 rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-[13px] font-semibold transition-colors group/link"
                >
                  Hire a Specialist
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
