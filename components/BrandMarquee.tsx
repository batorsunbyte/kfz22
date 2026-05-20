'use client'

import { useTranslation } from '@/hooks/useTranslation'

// Brand list. Logos liegen in public/brands/ (lowercase). Wenn `logo` fehlt → Text-Pill Fallback.
// AMG und Ferrari bewusst rausgelassen (AMG = Mercedes-Sub, Ferrari unrealistisch
// für eine 1220-Wien-Werkstatt). Files liegen weiter im Ordner, falls später benötigt.
type Brand = { name: string; logo?: string }

const BRANDS: readonly Brand[] = [
    { name: 'VW', logo: '/brands/vw.png' },
    { name: 'Audi', logo: '/brands/audi.png' },
    { name: 'BMW', logo: '/brands/bmw.png' },
    { name: 'Mercedes', logo: '/brands/mercedes.png' },
    { name: 'Skoda', logo: '/brands/skoda.png' },
    { name: 'Opel', logo: '/brands/opel.png' },
    { name: 'Ford', logo: '/brands/ford.png' },
    { name: 'Renault', logo: '/brands/renault.png' },
    { name: 'Peugeot', logo: '/brands/peugeot.png' },
    { name: 'Seat', logo: '/brands/seat.png' },
    { name: 'Cupra', logo: '/brands/cupra.png' },
    { name: 'Toyota', logo: '/brands/toyota.png' },
    { name: 'Hyundai', logo: '/brands/hyundai.png' },
]

export default function BrandMarquee() {
    const { t } = useTranslation()

    // Duplicate the list once so translateX(-50%) lands seamlessly back at the start.
    const loop = [...BRANDS, ...BRANDS]

    return (
        <section
            aria-label={t.brands.title}
            className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 bg-slate-100 dark:bg-slate-950 overflow-hidden"
        >
            {/* Soft top fade — schluckt die Kante zur vorherigen Section (Hero/ScrollCanvas3D endet hellgrau) */}
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/60 dark:from-slate-900/40 to-transparent pointer-events-none" />

            <p className="relative text-center text-[10px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-6 sm:mb-8 px-4">
                {t.brands.title}
            </p>

            <div className="relative w-full overflow-hidden group">
                {/* Edge fades — match section bg so logos don't pop in/out at the borders */}
                <div className="absolute inset-y-0 left-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-slate-100 dark:from-slate-950 to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-slate-100 dark:from-slate-950 to-transparent pointer-events-none" />

                {/* Marquee track: width = sum of both halves; -50% translation hides the seam */}
                <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] items-center">
                    {loop.map((brand, i) => (
                        <div
                            key={`${brand.name}-${i}`}
                            className="flex-shrink-0 mx-6 sm:mx-10 flex items-center justify-center h-10 sm:h-12"
                        >
                            {brand.logo ? (
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-8 sm:h-10 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none"
                                    loading="lazy"
                                    draggable={false}
                                />
                            ) : (
                                <span className="text-sm sm:text-base font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800">
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
