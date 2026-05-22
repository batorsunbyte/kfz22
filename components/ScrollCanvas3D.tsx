'use client'

import { useRef, useEffect, useState } from 'react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import { useTranslation } from '@/hooks/useTranslation'

const TOTAL_FRAMES = 50
const FRAME_INTERVAL = 4 // Every 4th frame from 200 total frames

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=KFZ+Technik+22+Wien+22+Bezirk'

export default function ScrollCanvas3D() {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { scrollProgress, currentFrame } = useScrollProgress(
        TOTAL_FRAMES,
        containerRef
    )
    const { t } = useTranslation()

    const [imagesLoaded, setImagesLoaded] = useState(false)
    const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([])
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile viewport — disable scroll-bound parallax there to avoid
    // stacking-context repaints that cause cards around the canvas to jitter.
    useEffect(() => {
        if (typeof window === 'undefined') return
        const mq = window.matchMedia('(max-width: 768px)')
        const onChange = () => setIsMobile(mq.matches)
        onChange()
        mq.addEventListener('change', onChange)
        return () => mq.removeEventListener('change', onChange)
    }, [])

    // Preload images
    useEffect(() => {
        const images: HTMLImageElement[] = []
        let loadedCount = 0

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new window.Image()
            const frameNumber = i * FRAME_INTERVAL
            const paddedNumber = String(frameNumber).padStart(3, '0')
            img.src = `/imgs/ezgif-frame-${paddedNumber}.jpg`

            img.onload = () => {
                loadedCount++
                if (loadedCount === TOTAL_FRAMES) {
                    setImagesLoaded(true)
                }
            }

            images[i - 1] = img
        }

        setLoadedImages(images)
    }, [])

    // Draw current frame on canvas
    useEffect(() => {
        if (!canvasRef.current || !imagesLoaded || loadedImages.length === 0) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        const img = loadedImages[currentFrame - 1]
        if (!img) return

        // Only resize canvas if dimensions actually changed — setting canvas.width
        // (even to the same value) resets the bitmap and causes flicker on every paint.
        if (canvas.width !== img.width) canvas.width = img.width
        if (canvas.height !== img.height) canvas.height = img.height

        // Clear and draw
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(img, 0, 0)
    }, [currentFrame, imagesLoaded, loadedImages])

    return (
        <div
            ref={containerRef}
            className="relative"
            style={{ minHeight: '300vh' }}
        >
            {/* Sticky container - reduced height to remove vertical empty space */}
            <div className="sticky top-16 h-[calc(100vh-4rem)] max-h-[820px] py-6 lg:py-10 flex items-center justify-center overflow-hidden relative">
                {/* Dynamic gradient background */}
                <div
                    className="absolute inset-0 transition-colors duration-500"
                    style={{
                        background: 'var(--hero-bg-gradient)',
                    }}
                />

                {/* Subtle animated overlay — scroll-bound scale only on desktop (mobile: static) */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `
              radial-gradient(circle at 50% 50%,
                rgba(37, 99, 235, 0.15) 0%,
                transparent 60%
              )
            `,
                        ...(isMobile ? {} : {
                            transform: `scale(${1 + scrollProgress * 0.3})`,
                            transition: 'transform 0.3s ease-out',
                        }),
                    }}
                />

                {/* Main content container */}
                <div className="relative w-full max-w-7xl px-6 z-20 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
                    {/* Left promotional content - Stat-driven cards */}
                    <div className="flex-1 w-full lg:w-auto grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:gap-6 order-last lg:order-none">
                        {/* Premium Service Card - leads with experience stat */}
                        <div className="card-3d !p-4 lg:!p-8 h-full flex flex-col justify-center relative overflow-hidden">
                            {/* Decorative corner accent */}
                            <div className="absolute -top-8 -right-8 w-24 h-24 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

                            {/* Hero stat */}
                            <div className="flex items-baseline gap-1 mb-1 lg:mb-2">
                                <span className="text-4xl lg:text-6xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter leading-none">15</span>
                                <span className="text-2xl lg:text-3xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter">+</span>
                            </div>
                            <p className="text-[10px] lg:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3 lg:mb-5">
                                {t.about.experience} · {t.hero.premiumService}
                            </p>
                            <div className="w-8 h-1 bg-[#ffd100] mb-3 lg:mb-4 rounded-full" />
                            <ul className="space-y-1.5 lg:space-y-2 text-gray-700 dark:text-slate-300 transition-colors duration-500 text-xs lg:text-sm font-semibold">
                                <li className="flex items-center gap-2">
                                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {t.hero.motorTransmission}
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {t.hero.brakeSuspension}
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {t.hero.electronicDiag}
                                </li>
                            </ul>
                        </div>

                        {/* Express Service Card - leads with 24h stat */}
                        <div className="card-3d bg-gradient-to-br from-orange-50 to-white dark:from-slate-800 dark:to-slate-900 border-none !p-4 lg:!p-8 h-full flex flex-col justify-center relative overflow-hidden">
                            {/* Decorative lightning glow */}
                            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />

                            {/* Hero stat */}
                            <div className="flex items-center gap-3 mb-1 lg:mb-2">
                                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <span className="text-3xl lg:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter leading-none">24h</span>
                            </div>
                            <p className="text-[10px] lg:text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2 lg:mb-3">
                                {t.hero.expressService}
                            </p>
                            <div className="w-8 h-1 bg-orange-500 mb-2 lg:mb-3 rounded-full" />
                            <p className="text-xs lg:text-sm text-gray-700 dark:text-slate-300 font-semibold leading-snug">
                                {t.hero.quickRepair}
                            </p>
                        </div>
                    </div>

                    {/* Center - 3D Animation (60% width on desktop) */}
                    <div className="flex-shrink-0 relative w-full lg:w-[60%] max-w-[800px] order-first lg:order-none mb-4 lg:mb-0 mt-10 lg:mt-0">
                        {!imagesLoaded ? (
                            <div className="flex flex-col items-center justify-center h-96">
                                <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
                                <p className="mt-4 text-gray-600 font-medium">{t.hero.loading}</p>
                            </div>
                        ) : (
                            <div className="relative">
                                {/* Sonder-Angebot Badge — bold gold, scrolls to pricing */}
                                <a
                                    href="#pricing"
                                    className="absolute -top-5 -right-2 sm:-top-7 sm:-right-4 lg:-top-9 lg:-right-6 z-50 group/offer block"
                                    aria-label={t.hero.specialOffer}
                                >
                                    <div className="relative">
                                        {/* Pulsing gold glow halo */}
                                        <div className="absolute inset-0 bg-[#ffd100] rounded-2xl blur-2xl opacity-60 group-hover/offer:opacity-90 animate-pulse-3d" />
                                        {/* Tiny sparkle accents */}
                                        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-70" />
                                        <div className="absolute -bottom-1 right-2 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-ping opacity-80" style={{ animationDelay: '0.6s' }} />

                                        {/* Main badge - big, bold gold */}
                                        <div className="relative bg-gradient-to-br from-[#ffd100] via-yellow-400 to-orange-400 rounded-2xl px-4 lg:px-6 py-3 lg:py-4 shadow-[0_15px_35px_-5px_rgba(255,180,0,0.55)] transform rotate-3 group-hover/offer:rotate-0 group-hover/offer:scale-105 transition-all duration-500 overflow-hidden">
                                            {/* Diagonal shine */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover/offer:translate-x-full transition-transform duration-1000" />

                                            <div className="relative flex items-center gap-2.5 lg:gap-3">
                                                {/* Star icon */}
                                                <svg className="w-7 h-7 lg:w-9 lg:h-9 text-[#1e293b] drop-shadow flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                                </svg>

                                                <div className="flex flex-col leading-none">
                                                    <span className="text-[#1e293b] font-black text-sm lg:text-lg tracking-tight uppercase whitespace-nowrap">
                                                        {t.hero.specialOffer}
                                                    </span>
                                                    <span className="text-[8px] lg:text-[9px] font-black text-[#1e293b]/80 uppercase tracking-widest mt-1.5 inline-flex items-center gap-1 whitespace-nowrap">
                                                        {t.hero.viewPrices}
                                                        <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3 group-hover/offer:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                {/* Automatikgetriebe-Reparatur Sticker — neuer Service, unten rechts (Spiegel zum Pickerl unten links) */}
                                <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 lg:-bottom-10 lg:-right-6 z-50">
                                    <div className="relative group/auto cursor-default">
                                        {/* Pulsing gold glow halo */}
                                        <div className="absolute inset-0 bg-[#ffd100] rounded-2xl blur-2xl opacity-50 group-hover/auto:opacity-80 animate-pulse-3d" />

                                        {/* "NEU"-Bubble, schwebt oben rechts */}
                                        <div className="absolute -top-3 -right-2 z-10 bg-red-500 text-white text-[8px] lg:text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full shadow-lg ring-2 ring-white transform -rotate-12 animate-pulse whitespace-nowrap">
                                            NEU
                                        </div>

                                        {/* Sticker - gold burst style, gerade ausgerichtet */}
                                        <div className="relative bg-gradient-to-br from-[#ffd100] via-yellow-400 to-amber-500 rounded-2xl px-4 py-3 lg:px-5 lg:py-3.5 shadow-[0_15px_35px_-5px_rgba(255,180,0,0.55)] group-hover/auto:scale-105 transition-all duration-500 border-2 border-white/70 overflow-hidden">
                                            {/* Diagonal shine */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover/auto:translate-x-full transition-transform duration-1000" />

                                            {/* Tape strip - top left for variation */}
                                            <div
                                                className="absolute -top-2 left-3 w-8 h-3 lg:w-10 lg:h-3.5 -rotate-12 shadow-md rounded-sm opacity-80"
                                                style={{
                                                    background: 'repeating-linear-gradient(45deg, rgba(255,236,170,0.9), rgba(255,236,170,0.9) 4px, rgba(255,220,150,0.9) 4px, rgba(255,220,150,0.9) 8px)',
                                                }}
                                            />

                                            <div className="relative flex items-center gap-2 lg:gap-2.5">
                                                {/* Gear icon */}
                                                <svg className="w-7 h-7 lg:w-9 lg:h-9 text-[#1e293b] drop-shadow flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                                                </svg>

                                                <div className="flex flex-col leading-none">
                                                    <span className="text-[#1e293b]/70 font-black text-[8px] lg:text-[9px] uppercase tracking-[0.25em] mb-0.5">
                                                        Reparatur
                                                    </span>
                                                    <span className="text-[#1e293b] font-black text-sm lg:text-base tracking-tight uppercase whitespace-nowrap">
                                                        Automatikgetriebe
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Prüfstelle Certification Stamp - §57a Pickerl (compact) */}
                                <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 lg:-bottom-6 lg:-left-6 z-50">
                                    <div className="relative group cursor-default">
                                        {/* Soft glow halo behind the sticker */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/50 via-yellow-300/40 to-blue-500/40 rounded-3xl blur-2xl scale-110 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                        {/* Sticker card (always light background — looks like a real, taped-on certificate) */}
                                        <div className="relative bg-white rounded-xl p-2 lg:p-2.5 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.45)] border border-slate-200/70 transform -rotate-[8deg] group-hover:rotate-0 group-hover:scale-105 transition-all duration-500">
                                            {/* Tape strip - top right */}
                                            <div
                                                className="absolute -top-2 right-3 w-8 h-3.5 lg:w-10 lg:h-4 rotate-[18deg] shadow-md rounded-sm opacity-80"
                                                style={{
                                                    background: 'repeating-linear-gradient(45deg, rgba(255,236,170,0.9), rgba(255,236,170,0.9) 4px, rgba(255,220,150,0.9) 4px, rgba(255,220,150,0.9) 8px)',
                                                }}
                                            />

                                            <img
                                                src="/sign.jpeg"
                                                alt="§57a Pickerl-Prüfstelle - KFZ Technik 22 Wien"
                                                className="w-16 h-20 sm:w-20 sm:h-24 lg:w-24 lg:h-28 object-contain"
                                            />

                                            {/* Label badge below the image */}
                                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-[8px] lg:text-[9px] font-black uppercase tracking-widest px-2 lg:px-2.5 py-0.5 lg:py-1 rounded-full shadow-lg whitespace-nowrap ring-2 ring-white">
                                                §57a {t.hero.pruefstelle}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Canvas with 3D effects — scroll-bound rotation/scale only on desktop.
                                    On mobile this transform triggered repaints of the stacking context,
                                    causing the floating cards around the canvas to jitter on scroll-up. */}
                                <div
                                    className="relative"
                                    style={
                                        isMobile
                                            ? undefined
                                            : {
                                                transform: `perspective(1200px) rotateY(${scrollProgress * 5}deg) scale(${0.95 + scrollProgress * 0.05})`,
                                                transition: 'transform 0.3s ease-out',
                                            }
                                    }
                                >
                                    <canvas
                                        ref={canvasRef}
                                        className="w-full h-auto rounded-2xl"
                                        style={{
                                            filter: `
                        drop-shadow(0 25px 50px rgba(37, 99, 235, 0.2))
                        drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))
                        brightness(1.05)
                        contrast(1.1)
                      `,
                                        }}
                                    />
                                </div>

                                {/* Bottom reflection */}
                                <div
                                    className="absolute -bottom-20 left-0 right-0 h-20 opacity-30 blur-xl"
                                    style={{
                                        background: 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.3), transparent)',
                                    }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Right promotional content - Call (primary) + Route (secondary) */}
                    <div className="flex-1 w-full lg:w-auto grid grid-cols-2 gap-3 lg:flex lg:flex-col lg:gap-6 order-last lg:order-none">
                        {/* Call Now - PRIMARY action, dark with prominent number */}
                        <a
                            href="tel:012561822"
                            className="group/call card-3d !bg-[#1e293b] dark:!bg-emerald-950 !border-none !p-4 lg:!p-7 h-full flex flex-col justify-center relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                        >
                            {/* Decorative pulse glow */}
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-3d" />

                            <div className="relative flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
                                <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/40">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <span className="text-[9px] lg:text-[10px] font-black text-emerald-400 uppercase tracking-[0.25em]">
                                    {t.hero.callNow}
                                </span>
                            </div>

                            {/* Phone number — visual hierarchy with country code + grouped digits */}
                            <div className="relative mb-1.5 lg:mb-2 group-hover/call:text-emerald-300 transition-colors">
                                <div className="flex items-baseline gap-1.5 leading-none">
                                    <span className="text-emerald-400/80 font-black text-[9px] sm:text-[10px] lg:text-xs tracking-widest uppercase">
                                        +43
                                    </span>
                                    <span className="text-white font-black text-base sm:text-xl lg:text-3xl tracking-tight whitespace-nowrap tabular-nums">
                                        01 256 18 22
                                    </span>
                                </div>
                            </div>
                            <p className="relative text-[10px] lg:text-xs font-bold text-slate-400 uppercase tracking-widest">
                                24/7 · {t.contact.emergencyDesc}
                            </p>
                        </a>

                        {/* Route - SECONDARY action, lighter feel */}
                        <a
                            href={MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/route card-3d !p-4 lg:!p-7 h-full flex flex-col justify-center relative overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                        >
                            <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-emerald-500/5 dark:bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

                            <div className="relative flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
                                <div className="w-9 h-9 lg:w-11 lg:h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <span className="text-[9px] lg:text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.25em]">
                                    {t.hero.planRoute}
                                </span>
                            </div>

                            <p className="relative text-[#1e293b] dark:text-white font-black text-lg lg:text-2xl tracking-tighter leading-tight mb-1 group-hover/route:text-emerald-600 dark:group-hover/route:text-emerald-400 transition-colors uppercase">
                                Wien 22.
                            </p>
                            <p className="relative text-[10px] lg:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                {t.hero.planRouteDesc}
                                <svg className="w-3 h-3 group-hover/route:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </p>
                        </a>
                    </div>
                </div>

                {/* Scroll hint */}
                {scrollProgress < 0.02 ? (
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 animate-float-3d">
                        <div className="flex flex-col items-center text-gray-400">
                            <span className="text-xs font-medium mb-2 tracking-widest uppercase">{t.hero.scroll}</span>
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
