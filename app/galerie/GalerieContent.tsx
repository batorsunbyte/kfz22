'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Lightbox from '@/components/Lightbox'
import { useTranslation } from '@/hooks/useTranslation'
import { galleryItems } from '@/data/gallery'

export default function GalerieContent() {
    const { t } = useTranslation()
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const p = t.pages.galerie

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
            <Navigation />

            {/* Subpage Hero */}
            <section className="relative pt-32 pb-12 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#ffd100]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-[#ffd100] transition-colors mb-8 group"
                    >
                        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        {t.pages.backHome}
                    </Link>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 mb-4">
                        <div className="bg-[#ffd100] px-5 py-2 rounded-[0.5rem] shadow-sm transform -rotate-1 inline-block">
                            <h1 className="text-2xl md:text-3xl font-black text-[#1e293b] tracking-tighter uppercase whitespace-nowrap">
                                {p.title}
                            </h1>
                        </div>
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium max-w-2xl">
                        {p.subtitle}
                    </p>
                </div>
            </section>

            {/* Image grid */}
            <section className="px-4 py-12 md:py-16 bg-white dark:bg-slate-950">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                        {galleryItems.map((item, i) => (
                            <button
                                key={item.src}
                                type="button"
                                onClick={() => setActiveIndex(i)}
                                className="group relative aspect-square overflow-hidden rounded-2xl shadow-[0_10px_25px_-10px_rgba(0,0,0,0.12)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-500"
                                aria-label={item.alt}
                            >
                                {item.placeholder ? (
                                    <PhotoPlaceholder text={p.placeholderText} />
                                ) : (
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                )}

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Caption + magnify icon on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    <p className="text-white font-bold text-xs sm:text-sm leading-snug drop-shadow-lg">
                                        {item.caption}
                                    </p>
                                </div>

                                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-md">
                                    <svg className="w-4 h-4 text-[#1e293b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA bottom */}
            <section className="px-4 pb-20 pt-4 bg-white dark:bg-slate-950">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6">
                        Wollen Sie sich selbst ein Bild machen? Vereinbaren Sie einen Termin oder schauen Sie einfach vorbei.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-3 bg-[#1e293b] dark:bg-[#ffd100] text-white dark:text-slate-950 px-7 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_15px_30px_-10px_rgba(30,41,59,0.4)] dark:shadow-[0_15px_30px_-10px_rgba(255,209,0,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
                    >
                        {t.pages.ueberUns.ctaButton}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            <Lightbox
                items={galleryItems}
                activeIndex={activeIndex}
                onClose={() => setActiveIndex(null)}
                onNavigate={setActiveIndex}
            />

            <Footer />
        </main>
    )
}

function PhotoPlaceholder({ text }: { text: string }) {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 relative">
            <div className="absolute inset-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl pointer-events-none" />
            <svg className="w-10 h-10 sm:w-12 sm:h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" />
            </svg>
            <p className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase opacity-70 px-2 text-center">{text}</p>
        </div>
    )
}
