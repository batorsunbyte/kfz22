'use client'

import { useTranslation } from '@/hooks/useTranslation'

export default function HeroHeader() {
    const { t } = useTranslation()

    return (
        <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-500">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ffd100]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-5xl mx-auto text-center z-10">
                {/* Local trust badge */}
                <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] mb-6 border border-emerald-200/50 dark:border-emerald-800/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Eipeldauer Straße 43 · Donaustadt
                </div>

                {/* H1 - the SEO-critical heading */}
                <h1 className="font-black text-[#1e293b] dark:text-white tracking-tighter leading-[1.05] mb-5">
                    <span className="block text-3xl sm:text-5xl md:text-6xl uppercase">
                        {t.hero.h1}
                    </span>
                    <span className="block mt-2 text-4xl sm:text-6xl md:text-7xl">
                        <span className="bg-[#ffd100] text-[#1e293b] px-4 py-1 rounded-lg inline-block transform -rotate-1">
                            {t.hero.h1Highlight}
                        </span>
                    </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium max-w-2xl mx-auto">
                    {t.hero.h1Sub}
                </p>
            </div>
        </section>
    )
}
