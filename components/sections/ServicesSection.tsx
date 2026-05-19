'use client'

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

// Each icon below is intentionally simple, recognisable on small sizes,
// and visually distinct from the others (no two "circles" look alike).
const serviceIcons = [
    // KOMPLETTSERVICE — classic wrench (the universal "service" symbol)
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M48 6a12 12 0 0 0-14 16L8 48l8 8 26-26a12 12 0 0 0 16-14l-7 7-5-5 7-7c-1.6-.6-3.3-1-5-1z" />
        <circle cx="48" cy="14" r="2" fill="currentColor" stroke="none" />
    </svg>),

    // REIFENSERVICE — tire with rim spokes
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="8" />
        <circle cx="32" cy="32" r="2" fill="currentColor" stroke="none" />
        <path d="M32 10v12M32 42v12M10 32h12M42 32h12" />
        <path d="M16.5 16.5l8.5 8.5M39 39l8.5 8.5M16.5 47.5l8.5-8.5M39 25l8.5-8.5" strokeOpacity="0.5" />
    </svg>),

    // ÖLSERVICE — oil drop with shine
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8c-10 14-18 22-18 32a18 18 0 0036 0c0-10-8-18-18-32z" />
        <path d="M24 38c0 4 2 8 6 10" strokeOpacity="0.5" />
    </svg>),

    // PICKERL — round seal/badge with checkmark (§57a Pickerl looks circular)
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="16" strokeOpacity="0.4" strokeDasharray="2 3" />
        <path d="M22 32l7 7 13-15" strokeWidth="3" />
    </svg>),

    // KLIMAANLAGESERVICE — snowflake
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 8v48" />
        <path d="M16 18l32 28M48 18L16 46" />
        <path d="M32 14l-4-4M32 14l4-4M32 50l-4 4M32 50l4 4" />
        <path d="M22 22l-5.5-1.5M22 22l1.5-5.5M42 42l5.5 1.5M42 42l-1.5 5.5" />
        <path d="M42 22l5.5-1.5M42 22l-1.5-5.5M22 42l-5.5 1.5M22 42l1.5 5.5" />
    </svg>),

    // ZAHNRIEMENSERVICE — gear with teeth
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 6l3 6h-6zM32 58l-3-6h6zM6 32l6-3v6zM58 32l-6 3v-6zM13.5 13.5l6.5 1-4 4zM50.5 50.5l-6.5-1 4-4zM13.5 50.5l1-6.5 4 4zM50.5 13.5l-1 6.5-4-4z" fill="currentColor" stroke="none" />
        <circle cx="32" cy="32" r="14" />
        <circle cx="32" cy="32" r="5" fill="currentColor" stroke="none" />
    </svg>),

    // BREMSENSERVICE — brake disc (rotor with vents)
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="22" />
        <circle cx="32" cy="32" r="14" strokeOpacity="0.5" />
        <circle cx="32" cy="32" r="6" fill="currentColor" stroke="none" />
        <path d="M32 18v4M32 42v4M18 32h4M42 32h4M22 22l3 3M39 39l3 3M22 42l3-3M39 25l3-3" strokeOpacity="0.5" />
    </svg>),

    // BATTERIESERVICE — car battery with + / − terminals
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="10" y="22" width="44" height="30" rx="3" />
        <rect x="18" y="14" width="10" height="8" rx="1" />
        <rect x="36" y="14" width="10" height="8" rx="1" />
        <path d="M20 36h8M24 32v8" strokeWidth="3" />
        <path d="M36 36h8" strokeWidth="3" />
    </svg>),

    // ERSATZTEILE — hex nut (clearly a part)
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 6l22 13v26L32 58 10 45V19z" />
        <circle cx="32" cy="32" r="9" />
    </svg>),
]

const serviceKeys = ['komplettservice', 'reifenservice', 'oelservice', 'pickerl', 'klimaanlage', 'zahnriemen', 'bremsen', 'batterie', 'ersatzteile'] as const

export default function ServicesSection() {
    const { t } = useTranslation()

    return (
        <section id="services" className="relative flex flex-col py-12 md:py-16 px-4 bg-[#f1f5f9] dark:bg-slate-900 shadow-[inset_0_15px_30px_-15px_rgba(0,0,0,0.1)] dark:shadow-none transition-colors duration-500 overflow-hidden">
            <div className="max-w-4xl mx-auto w-full relative z-10 flex flex-col items-center">
                {/* Unified 3D Brand Header - Diversified with Slogan */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6 md:mb-8 animate-fade-in-up-3d">
                    <div className="bg-[#ffd100] px-6 py-2 rounded-[0.5rem] shadow-sm transform -rotate-1">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tighter uppercase whitespace-nowrap">
                            {t.services.ourExpertise}
                        </h2>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter uppercase">
                        {t.services.service}
                    </h2>
                </div>

                {/* Ultra-High Density Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-4 px-2 scale-95 md:scale-100">
                    {serviceKeys.map((key, index) => (
                        <div
                            key={key}
                            className="glass-card-square p-4 md:p-6 rounded-[1rem] md:rounded-[1.25rem] group cursor-pointer bg-white dark:bg-slate-800/50 dark:border-slate-700/50"
                        >
                            {/* Icon Wrapper - Compact Navy */}
                            <div className="w-8 h-8 md:w-10 md:h-10 mb-3 text-[#1e293b] dark:text-[#ffd100] group-hover:text-black dark:group-hover:text-white transition-all duration-300">
                                {serviceIcons[index]}
                            </div>

                            {/* Title - Ultra-Petite Navy Typography */}
                            <h3 className="text-[10px] md:text-[11px] font-black text-[#1e293b] dark:text-slate-300 text-center uppercase tracking-widest leading-tight">
                                {t.services.items[key]}
                            </h3>

                            {/* Minimal Subtle Accent */}
                            <div className="mt-3 w-2 h-0.5 bg-[#1e293b] dark:bg-[#ffd100] opacity-10 dark:opacity-20 group-hover:opacity-30 rounded-full" />
                        </div>
                    ))}
                </div>

            </div>

            {/* Quality Signature - Prominent & Creative Footer Filler */}
            <div className="mt-8 md:mt-10 flex flex-col items-center justify-center relative opacity-80 hover:opacity-100 transition-opacity duration-500">
                <div className="relative">
                    {/* Decorative Lines */}
                    <div className="absolute top-1/2 left-0 w-16 h-[2px] bg-[#ffd100] transform -translate-x-20 hidden md:block"></div>
                    <div className="absolute top-1/2 right-0 w-16 h-[2px] bg-[#ffd100] transform translate-x-20 hidden md:block"></div>

                    <div className="flex items-center gap-4 border-2 md:border-[3px] border-[#1e293b] dark:border-white px-6 py-3 md:px-12 md:py-6 rounded-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                        {/* Seal Icon */}
                        <div className="w-14 h-14 md:w-20 md:h-20 text-[#ffd100]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-4xl md:text-6xl font-black text-[#1e293b] dark:text-white uppercase tracking-tighter leading-none">
                                {t.services.meister}
                            </span>
                            <span className="text-base md:text-xl font-bold text-[#ffd100] uppercase tracking-[0.3em] leading-none">
                                {t.services.betrieb}
                            </span>
                        </div>
                    </div>
                </div>

                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    {t.services.certifiedQuality}
                </p>
            </div>

        </section >
    )
}
