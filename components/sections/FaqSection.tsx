'use client'

import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import FaqPageJsonLd from '@/components/JsonLd/FaqPage'

export default function FaqSection() {
    const { t } = useTranslation()
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section id="faq" className="relative py-16 md:py-24 px-4 bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-[inset_0_20px_40px_-20px_rgba(0,0,0,0.08)] transition-colors duration-500">
            {/* Inject FAQPage JSON-LD - Google Rich Results */}
            <FaqPageJsonLd items={t.faq.items} />

            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd100]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block text-[10px] sm:text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.3em] mb-4">
                        {t.faq.kicker}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter leading-[1.1] mb-4">
                        {t.faq.heading}
                    </h2>
                    <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        {t.faq.subheading}
                    </p>
                    <div className="w-16 h-1.5 bg-[#ffd100] mx-auto mt-6 rounded-full" />
                </div>

                <div className="space-y-3">
                    {t.faq.items.map((item, i) => {
                        const isOpen = openIndex === i
                        return (
                            <div
                                key={i}
                                className="bg-white dark:bg-slate-950/40 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-[0_10px_25px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_25px_-10px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)]"
                            >
                                <button
                                    type="button"
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-answer-${i}`}
                                    className="w-full px-6 sm:px-8 py-5 flex items-center justify-between gap-4 text-left group"
                                >
                                    <h3 className="text-base sm:text-lg font-black text-[#1e293b] dark:text-white tracking-tight leading-snug pr-2">
                                        {item.question}
                                    </h3>
                                    <span
                                        className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                            isOpen
                                                ? 'bg-[#ffd100] text-[#1e293b] rotate-180'
                                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/40 group-hover:text-emerald-600 dark:group-hover:text-emerald-400'
                                        }`}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    id={`faq-answer-${i}`}
                                    className={`grid transition-all duration-300 ease-in-out ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 sm:px-8 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm sm:text-base">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
