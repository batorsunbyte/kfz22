'use client'

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const pricingIcons = [
    (
        <svg className="w-8 h-8 text-emerald-600 dark:text-[#ffd100]" viewBox="0 0 64 64" fill="currentColor">
            <path d="M20 10 L44 10 L44 50 L20 50 Z M28 50 L28 58 L36 58 L36 50" />
            <rect x="24" y="14" width="16" height="4" />
        </svg>
    ),
    (
        <svg className="w-8 h-8 text-emerald-600 dark:text-[#ffd100]" viewBox="0 0 64 64" fill="currentColor">
            <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="6" />
            <circle cx="32" cy="32" r="8" />
        </svg>
    ),
    (
        <svg className="w-8 h-8 text-emerald-600 dark:text-[#ffd100]" viewBox="0 0 64 64" fill="currentColor">
            <path d="M32 10 L42 20 L42 50 L22 50 L22 20 Z" />
            <rect x="26" y="25" width="12" height="3" />
            <rect x="26" y="32" width="12" height="3" />
            <rect x="26" y="39" width="12" height="3" />
        </svg>
    ),
    (
        <svg className="w-8 h-8 text-emerald-600 dark:text-[#ffd100]" viewBox="0 0 64 64" fill="currentColor">
            <path d="M20 10 L44 10 L44 50 L20 50 Z M28 50 L28 58 L36 58 L36 50" />
            <rect x="24" y="14" width="16" height="4" />
        </svg>
    ),
    (
        <svg className="w-8 h-8 text-emerald-600 dark:text-[#ffd100]" viewBox="0 0 64 64" fill="currentColor">
            <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="6" />
            <circle cx="32" cy="32" r="8" />
            <path d="M32 12 L32 22 M32 42 L32 52 M12 32 L22 32 M42 32 L52 32" />
        </svg>
    ),
    (
        <svg className="w-8 h-8 text-emerald-600 dark:text-[#ffd100]" viewBox="0 0 64 64" fill="currentColor">
            <circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
            <path d="M32 18 L36 28 L46 30 L38 38 L40 48 L32 42 L24 48 L26 38 L18 30 L28 28 Z" />
        </svg>
    ),
]

export default function PricingSection() {
    const { t } = useTranslation()

    return (
        <section id="pricing" className="relative pt-12 pb-24 px-4 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            {/* Background Accent - Soft glow for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-100/20 dark:bg-emerald-900/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-6xl mx-auto w-full">
                {/* Unified 3D Brand Header */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10 animate-fade-in-up-3d">
                    <div className="bg-[#ffd100] px-6 py-2 rounded-[0.5rem] shadow-sm transform rotate-1">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tighter uppercase whitespace-nowrap">
                            {t.pricing.topOffers}
                        </h2>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter uppercase">
                        {t.pricing.servicePackages}
                    </h2>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.pricing.items.map((item, index) => (
                        <div
                            key={index}
                            className="glass-card-3d p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_40px_70px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_70px_-20px_rgba(0,0,0,0.5)] hover:-translate-y-3 group relative flex flex-col"
                            style={{
                                animationDelay: `${index * 0.05}s`,
                            }}
                        >
                            {/* Offer Badge - Top Right */}
                            <div className="absolute -top-3 -right-3 z-10">
                                <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 rounded-full px-5 py-1.5 shadow-lg shadow-yellow-500/30">
                                    <div className="text-white font-black text-[11px] tracking-widest uppercase">
                                        {t.pricing.offerBadge}
                                    </div>
                                </div>
                            </div>

                            {/* Header Row: Icon & Title */}
                            <div className="flex items-center gap-4 mb-3">
                                <div className="card-icon-wrapper p-2.5 rounded-xl bg-emerald-50/40 dark:bg-slate-800/40 group-hover:bg-emerald-50/90 dark:group-hover:bg-slate-800/90 transition-all duration-500">
                                    {pricingIcons[index]}
                                </div>
                                <h3 className="text-[17px] font-black text-[#1e293b] dark:text-white leading-tight uppercase tracking-tight">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="text-[12.5px] text-slate-500 dark:text-slate-400 mb-4 flex-grow px-1 font-medium space-y-1.5">
                                {item.description.split(/(?=\*)|\\n|\n/).filter(Boolean).map((segment, i) => {
                                    const trimmed = segment.trim();
                                    if (!trimmed) return null;
                                    if (trimmed.startsWith('*')) {
                                        return (
                                            <span key={i} className="flex items-start gap-1.5">
                                                <span className="text-emerald-500 dark:text-[#ffd100] mt-[2px] text-[10px] flex-shrink-0">&#9679;</span>
                                                <span>{trimmed.substring(1).trim()}</span>
                                            </span>
                                        );
                                    }
                                    return <span key={i} className="block">{trimmed}</span>;
                                })}
                            </div>

                            {/* Bottom Row: CTA only */}
                            <div className="mt-auto pt-4 border-t border-emerald-50/40 dark:border-slate-800/40 flex justify-center">
                                <a
                                    href="tel:012561822"
                                    className="btn-modern-slim dark:bg-[#ffd100] dark:text-slate-950 dark:hover:bg-white flex items-center gap-2 min-h-[44px]"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {t.pricing.callNow}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Refined Footer */}
                <div className="mt-6 text-center">
                    <p className="text-slate-400 text-[11px] items-center italic mb-4 opacity-70 font-medium">
                        {t.pricing.disclaimer}
                    </p>
                </div>
            </div>
        </section>
    )
}
