'use client'

import { useState } from 'react'
import { Plus, X } from 'lucide-react'
import { faqs } from "@/data/faqData";

export default function FAQSection() {
    const [active, setActive] = useState<number | null>(1)

    return (
      <section className="bg-surface px-10 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            FAQs
          </span>
          <h2 className="text-white text-4xl md:text-[48px] font-bold leading-tight">
            Frequently <span className="text-blue-500">Asked Questions</span>
          </h2>

          <p className="text-gray-400 text-[15px] mt-3 max-w-xl mx-auto leading-7">
            Everything you need to know about our digital marketing and software
            development services.
          </p>
        </div>

        <div className="flex gap-8 items-start">
          {/* Left — Accordion */}
          <div className="flex-1">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-800">
                <button
                  onClick={() => setActive(active === faq.id ? null : faq.id)}
                  className="cursor-pointer w-full flex items-start gap-4 py-5 text-left"
                >
                  <span className="text-gray-600 text-[13px] font-mono shrink-0 mt-0.5">
                    [{String(faq.id).padStart(2, "0")}]
                  </span>
                  <span className="text-gray-200 text-[16px] font-medium flex-1 leading-snug">
                    {faq.q}
                  </span>
                  <span className="text-gray-400 shrink-0 mt-0.5">
                    {active === faq.id ? <X size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {active === faq.id && (
                  <p className="text-gray-400 text-[15px] leading-7 pb-5 pl-9">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right — CTA Card */}
          <div className="w-75 shrink-0 rounded-2xl overflow-hidden bg-linear-to-b from-blue-600 to-blue-900 sticky top-24">
            {/* Illustration */}
            <div className="w-full h-50 bg-blue-700/40 flex items-center justify-center">
              <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full px-6 py-4">
                {/* Desk */}
                <rect x="30" y="110" width="160" height="8" rx="4" fill="#1d4ed8" opacity="0.6"/>
                <rect x="50" y="118" width="8" height="28" rx="3" fill="#1d4ed8" opacity="0.4"/>
                <rect x="162" y="118" width="8" height="28" rx="3" fill="#1d4ed8" opacity="0.4"/>
                {/* Monitor */}
                <rect x="72" y="68" width="76" height="46" rx="5" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="1.5"/>
                <rect x="78" y="74" width="64" height="34" rx="3" fill="#1d4ed8" opacity="0.5"/>
                {/* Screen glow lines */}
                <rect x="84" y="80" width="40" height="2.5" rx="1.2" fill="#93c5fd" opacity="0.7"/>
                <rect x="84" y="86" width="30" height="2.5" rx="1.2" fill="#93c5fd" opacity="0.5"/>
                <rect x="84" y="92" width="34" height="2.5" rx="1.2" fill="#93c5fd" opacity="0.5"/>
                {/* Monitor stand */}
                <rect x="106" y="114" width="8" height="8" rx="2" fill="#1d4ed8" opacity="0.5"/>
                <rect x="98" y="121" width="24" height="4" rx="2" fill="#1d4ed8" opacity="0.4"/>
                {/* Person — body */}
                <ellipse cx="62" cy="100" rx="12" ry="14" fill="#2563eb" opacity="0.7"/>
                {/* Person — head */}
                <circle cx="62" cy="82" r="10" fill="#93c5fd"/>
                {/* Person — face */}
                <circle cx="59" cy="81" r="1.3" fill="#1e3a8a"/>
                <circle cx="65" cy="81" r="1.3" fill="#1e3a8a"/>
                <path d="M59 86 Q62 89 65 86" stroke="#1e3a8a" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
                {/* Speech bubble */}
                <rect x="130" y="30" width="62" height="40" rx="10" fill="#eff6ff" opacity="0.95"/>
                <polygon points="148,70 142,80 158,70" fill="#eff6ff" opacity="0.95"/>
                {/* Question mark */}
                <text x="161" y="58" textAnchor="middle" fontFamily="Arial" fontWeight="800" fontSize="22" fill="#2563eb">?</text>
                {/* Floating dots decoration */}
                <circle cx="28" cy="40" r="3.5" fill="#60a5fa" opacity="0.4"/>
                <circle cx="18" cy="60" r="2.5" fill="#60a5fa" opacity="0.3"/>
                <circle cx="200" cy="90" r="3" fill="#60a5fa" opacity="0.3"/>
                <circle cx="210" cy="55" r="2" fill="#60a5fa" opacity="0.25"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-white text-[22px] font-bold leading-tight mb-3">
                Didn&apos;t Find What You Were Looking For?
              </h3>
              <p className="text-blue-200 text-[14px] leading-6 mb-6">
                We&apos;ve got more answers waiting for you. If your question
                didn&apos;t make the list, don&apos;t hesitate to reach out.
              </p>
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] px-6 py-3 rounded-full  transition-colors"
              >
                Get In Touch With Our Experts
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}