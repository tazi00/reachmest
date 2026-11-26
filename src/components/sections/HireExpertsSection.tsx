'use client'

import { ArrowRight } from 'lucide-react'

const categories = {
  marketing: 'Marketing',
  development: 'Development',
  ai: 'AI',
  design: 'Design',
}

const experts = [
  {
    category: 'marketing',
    categoryLabel: 'Marketing',
    title: 'Hire SEO Experts',
    description: 'Improve search visibility through keyword research, technical SEO, on-page optimization and link building.',
    cta: 'Hire SEO Specialists',
  },
  {
    category: 'marketing',
    categoryLabel: 'Marketing',
    title: 'Hire Performance Marketing Experts',
    description: 'Plan, manage and optimize paid campaigns focused on relevant traffic, quality leads and conversions.',
    cta: 'Hire Performance Experts',
  },
  {
    category: 'marketing',
    categoryLabel: 'Marketing',
    title: 'Hire Social Media Experts',
    description: 'Manage your brand presence, create engaging content and build meaningful audience connections.',
    cta: 'Hire Social Media Experts',
  },
  {
    category: 'marketing',
    categoryLabel: 'Marketing',
    title: 'Hire Content Marketing Experts',
    description: 'Develop website content, blogs, landing pages and marketing materials aligned with your brand.',
    cta: 'Hire Content Experts',
  },
  {
    category: 'development',
    categoryLabel: 'Development',
    title: 'Hire Web Developers',
    description: 'Build, customize and maintain responsive websites that support your business requirements.',
    cta: 'Hire Web Developers',
  },
  {
    category: 'development',
    categoryLabel: 'Development',
    title: 'Hire Application Developers',
    description: 'Create functional, scalable applications tailored to your users, workflows and business needs.',
    cta: 'Hire App Developers',
  },
  {
    category: 'development',
    categoryLabel: 'Development',
    title: 'Hire Software Developers',
    description: 'Build customized digital solutions, improve existing systems and support your technical requirements.',
    cta: 'Hire Software Developers',
  },
  {
    category: 'ai',
    categoryLabel: 'AI',
    title: 'Hire AI Marketing Automation Experts',
    description: 'Explore AI-powered solutions and workflow automation to improve efficiency and simplify processes.',
    cta: 'Hire AI Automation Experts',
  },
  {
    category: 'marketing',
    categoryLabel: 'Marketing',
    title: 'Hire CRO Experts',
    description: 'Optimise your website, improve user experience and turn more visitors into qualified leads.',
    cta: 'Hire CRO Specialists',
  },
  {
    category: 'ai',
    categoryLabel: 'AI',
    title: 'Hire AI Search Optimization Experts',
    description: "Improve your brand's visibility across AI-powered search platforms and strengthen content relevance.",
    cta: 'Hire AI SEO Experts',
  },
]

const categoryColors: Record<string, string> = {
  marketing: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  development: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
  ai: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  design: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
}

export default function HireExpertsSection() {
  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Hire Experts
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-white text-4xl md:text-[44px] font-bold leading-tight max-w-xl">
                Build Your <span className="text-blue-500">Digital Team</span>{" "}
                with Reachmest
              </h2>
              <p className="text-zinc-400 mt-4 max-w-xl text-[15px] leading-7">
                Get dedicated marketing professionals, creative specialists and
                software developers. Scale flexibly and bring your digital
                projects to life.
              </p>
            </div>
            <a
              href="#"
              className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 text-[15px]"
            >
              Hire Dedicated Experts
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experts.map((expert, i) => (
            <div
              key={i}
              className="group bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 hover:bg-zinc-900 transition-all duration-300 flex flex-col"
            >
              {/* Category tag */}
              <span
                className={`inline-block self-start text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mb-5 ${categoryColors[expert.category]}`}
              >
                {expert.categoryLabel}
              </span>

              {/* Title */}
              <h3 className="text-white font-bold text-[17px] leading-snug mb-2">
                {expert.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-[14px] leading-6 flex-1 mb-6">
                {expert.description}
              </p>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-blue-400 text-[14px] font-semibold hover:gap-2.5 transition-all duration-200 group-hover:text-blue-300"
              >
                {expert.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-14 rounded-2xl bg-zinc-900/60 border border-zinc-800 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl">
              Flexible Hiring. Dedicated Expertise. Better Growth.
            </p>
            <p className="text-zinc-400 text-[14px] mt-1">
              Scale your capabilities with professionals aligned to your project
              scope, timeline and objectives.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 border border-zinc-600 hover:border-blue-500 text-white font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 text-[15px] hover:text-blue-400"
          >
            Explore All Experts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}