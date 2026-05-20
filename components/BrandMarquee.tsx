'use client'

import { useTranslation } from '@/hooks/useTranslation'

// Brand list. To replace a text pill with a real logo, drop the SVG into
// public/brands/ and set `logo: '/brands/vw.svg'` on that entry.
type Brand = { name: string; logo?: string }

const BRANDS: readonly Brand[] = [
    { name: 'VW' },
    { name: 'Audi' },
    { name: 'BMW' },
    { name: 'Mercedes-Benz' },
    { name: 'Skoda' },
    { name: 'Opel' },
    { name: 'Ford' },
    { name: 'Renault' },
    { name: 'Peugeot' },
    { name: 'Seat' },
    { name: 'Toyota' },
    { name: 'Hyundai' },
]

export default function BrandMarquee() {
    const { t } = useTranslation()

    // Duplicate the list once so translateX(-50%) lands seamlessly back at the start.
    const loop = [...BRANDS, ...BRANDS]

    return (
        <section
            aria-label={t.brands.title}
            className="relative py-10 sm:py-12 bg-white dark:bg-slate-950 overflow-hidden border-t border-b border-slate-100 dark:border-slate-900"
        >
            <p className="text-center text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-6 sm:mb-8 px-4">
                {t.brands.title}
            </p>

            <div className="relative w-full overflow-hidden group">
                {/* Edge fades — soft mask so logos don't pop in/out at the borders */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-white dark:from-slate-950 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-white dark:from-slate-950 to-transparent pointer-events-none" />

                {/* Marquee track: width = sum of both halves; -50% translation hides the seam */}
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                    {loop.map((brand, i) => (
                        <div
                            key={`${brand.name}-${i}`}
                            className="flex-shrink-0 mx-3 sm:mx-4 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:border-emerald-400 dark:hover:border-[#ffd100] hover:bg-white dark:hover:bg-slate-900"
                        >
                            {brand.logo ? (
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-6 sm:h-7 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
                                    loading="lazy"
                                />
                            ) : (
                                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                    {brand.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
