'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import { galleryItems } from '@/data/gallery'
import Lightbox from '@/components/Lightbox'

const FEATURED_LIMIT = 4

export default function GalleryTeaser() {
    const { t } = useTranslation()
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const featured = galleryItems.filter((g) => g.featured).slice(0, FEATURED_LIMIT)

    return (
        <section id="gallery" className="relative py-16 md:py-24 px-4 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            {/* Decorative dots pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="absolute -top-32 -right-20 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <span className="inline-block text-[10px] sm:text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.3em] mb-4">
                        {t.pages.galerie.teaserKicker}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter leading-[1.1] mb-4 max-w-3xl mx-auto">
                        {t.pages.galerie.teaserHeading}
                    </h2>
                    <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto">
                        {t.pages.galerie.teaserSubheading}
                    </p>
                    <div className="w-16 h-1.5 bg-[#ffd100] mx-auto mt-6 rounded-full" />
                </div>

                {/* 4-image grid (2x2 on mobile, 4x1 on lg+) */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
                    {featured.map((item, i) => (
                        <button
                            key={item.src}
                            type="button"
                            onClick={() => setActiveIndex(i)}
                            className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_15px_30px_-12px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-500"
                            aria-label={item.alt}
                        >
                            {item.placeholder ? (
                                <PhotoPlaceholder text={t.pages.galerie.placeholderText} />
                            ) : (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            )}

                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Caption on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="text-white font-bold text-sm leading-snug drop-shadow-lg">
                                    {item.caption}
                                </p>
                            </div>

                            {/* Magnify icon — top right */}
                            <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-md">
                                <svg className="w-4 h-4 text-[#1e293b]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>

                {/* CTA to full gallery */}
                <div className="text-center">
                    <Link
                        href="/galerie"
                        className="inline-flex items-center gap-3 bg-[#1e293b] dark:bg-[#ffd100] text-white dark:text-slate-950 px-7 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_15px_30px_-10px_rgba(30,41,59,0.4)] dark:shadow-[0_15px_30px_-10px_rgba(255,209,0,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 group"
                    >
                        {t.pages.galerie.teaserCta}
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Lightbox modal */}
            <Lightbox
                items={featured}
                activeIndex={activeIndex}
                onClose={() => setActiveIndex(null)}
                onNavigate={setActiveIndex}
            />
        </section>
    )
}

function PhotoPlaceholder({ text }: { text: string }) {
    return (
        <div className="w-full h-full bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 dark:from-slate-800 dark:via-slate-700 dark:to-slate-900 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 relative">
            {/* Subtle inner border */}
            <div className="absolute inset-2 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl pointer-events-none" />
            <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z" />
            </svg>
            <p className="text-[10px] font-black tracking-widest uppercase opacity-70">{text}</p>
        </div>
    )
}
