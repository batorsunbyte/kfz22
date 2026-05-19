'use client'

import { useEffect, useCallback } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import type { GalleryItem } from '@/data/gallery'

type Props = {
    items: readonly GalleryItem[]
    activeIndex: number | null
    onClose: () => void
    onNavigate: (newIndex: number) => void
}

export default function Lightbox({ items, activeIndex, onClose, onNavigate }: Props) {
    const { t } = useTranslation()

    const goPrev = useCallback(() => {
        if (activeIndex === null) return
        onNavigate((activeIndex - 1 + items.length) % items.length)
    }, [activeIndex, items.length, onNavigate])

    const goNext = useCallback(() => {
        if (activeIndex === null) return
        onNavigate((activeIndex + 1) % items.length)
    }, [activeIndex, items.length, onNavigate])

    // Keyboard nav: ESC, ArrowLeft, ArrowRight
    useEffect(() => {
        if (activeIndex === null) return

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
            else if (e.key === 'ArrowLeft') goPrev()
            else if (e.key === 'ArrowRight') goNext()
        }

        document.addEventListener('keydown', onKeyDown)
        // Lock body scroll while open
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', onKeyDown)
            document.body.style.overflow = previousOverflow
        }
    }, [activeIndex, onClose, goPrev, goNext])

    if (activeIndex === null) return null

    const current = items[activeIndex]
    if (!current) return null

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={current.caption}
            className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in-up-3d"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                type="button"
                onClick={onClose}
                aria-label={t.pages.galerie.lightboxClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 text-white/80 text-sm font-bold tracking-widest uppercase">
                {activeIndex + 1} / {items.length}
            </div>

            {/* Prev button */}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation()
                    goPrev()
                }}
                aria-label={t.pages.galerie.lightboxPrev}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-all hover:scale-110"
            >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Next button */}
            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation()
                    goNext()
                }}
                aria-label={t.pages.galerie.lightboxNext}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-all hover:scale-110"
            >
                <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Image / placeholder */}
            <div
                className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {current.placeholder ? (
                    <div className="w-[80vw] max-w-3xl aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-600">
                        <svg className="w-20 h-20 mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <p className="text-base font-bold tracking-widest uppercase opacity-70">{t.pages.galerie.placeholderText}</p>
                    </div>
                ) : (
                    <img
                        src={current.src}
                        alt={current.alt}
                        className="max-w-[90vw] max-h-[80vh] object-contain rounded-xl shadow-2xl"
                    />
                )}

                {/* Caption */}
                <div className="mt-4 text-center text-white max-w-2xl px-4">
                    <p className="text-base sm:text-lg font-bold">{current.caption}</p>
                </div>
            </div>
        </div>
    )
}
