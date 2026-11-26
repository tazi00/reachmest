'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Reachmest transformed our digital presence. Their AI-powered marketing approach helped us double our qualified leads within 3 months. The team is strategic, responsive and genuinely invested in our growth.",
    name: "James Mitchell",
    role: "CEO",
    company: "Nexora Solutions",
    initials: "JM",
    color: "bg-zinc-950",
  },
  {
    quote:
      "What sets Reachmest apart is their ability to blend technical development with smart marketing. They built our custom platform and ran our campaigns simultaneously — seamlessly. Highly recommend.",
    name: "Sarah Okonkwo",
    role: "Head of Growth",
    company: "Meridian Digital",
    initials: "SO",
    color: "bg-emerald-600",
  },
  {
    quote:
      "We switched from a larger agency and immediately noticed the difference. Clear communication, data-driven decisions and an SEO strategy that finally moved the needle. Reachmest delivered.",
    name: "Arjun Kapoor",
    role: "Founder",
    company: "ScaleUp Ventures",
    initials: "AK",
    color: "bg-purple-600",
  },
  {
    quote:
      "Their white-label services let us expand our agency offerings without the overhead. The quality is consistent, the team is professional and our clients are happy. A true growth partner.",
    name: "Emily Chen",
    role: "Director of Partnerships",
    company: "Brightline Agency",
    initials: "EC",
    color: "bg-orange-600",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1))

  const t = testimonials[active]

  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <span className="inline-block text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Client Testimonials
          </span>
          <h2 className="text-white text-4xl md:text-[44px] font-bold leading-tight">
            Words From Our <span className="text-blue-600">Clients</span>
          </h2>
          <p className="text-gray-400 text-[15px] mt-3 max-w-xl mx-auto leading-7 mb-12">
            Everything you need to know about our digital marketing and software
            development services.
          </p>

          {/* Nav arrows */}
          {/* <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-zinc-200 hover:border-blue-500 hover:text-blue-600 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-zinc-200 hover:border-blue-500 hover:text-blue-600 flex items-center justify-center transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div> */}
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left — Featured quote card */}
          <div className="bg-blue-500 rounded-3xl p-10 flex flex-col justify-between min-h-[380px]">
            <Quote
              className="w-10 h-10 text-blue-500 mb-6"
              fill="currentColor"
              strokeWidth={0}
            />

            <p className="text-white text-[18px] leading-8 font-light flex-1">
              {t.quote}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-[15px] shrink-0`}
              >
                {t.initials}
              </div>
              <div>
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-zinc-400 text-[14px]">
                  {t.role} — {t.company}
                </p>
              </div>
            </div>
          </div>

          {/* Right — Stacked mini cards */}
          <div className="flex flex-col gap-4">
            {testimonials
              .filter((_, i) => i !== active)
              .slice(0, 3)
              .map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(testimonials.indexOf(item))}
                  className="text-left bg-zinc-50 hover:bg-zinc-100 border border-zinc-200 hover:border-zinc-300 rounded-2xl p-6 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-9 h-9 rounded-full ${item.color} flex items-center justify-center text-white font-bold text-[12px] shrink-0`}
                    >
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-zinc-900 font-semibold text-[14px]">
                        {item.name}
                      </p>
                      <p className="text-zinc-400 text-[12px]">
                        {item.role} — {item.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-[13px] leading-5 line-clamp-2 group-hover:text-zinc-700 transition-colors">
                    {item.quote}
                  </p>
                </button>
              ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-blue-600" : "w-2 bg-zinc-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}