'use client'

import { useTranslation } from '@/hooks/useTranslation'

const featureIcons = [
    (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
    ),
    (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
    ),
    (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-2.485 0-4.5-1.79-4.5-4 0-2.21 2.015-4 4.5-4s4.5 1.79 4.5 4" />
        </svg>
    ),
]

export default function IntroSection() {
    const { t } = useTranslation()

    const features = [
        { title: t.intro.feature1Title, desc: t.intro.feature1Desc, icon: featureIcons[0] },
        { title: t.intro.feature2Title, desc: t.intro.feature2Desc, icon: featureIcons[1] },
        { title: t.intro.feature3Title, desc: t.intro.feature3Desc, icon: featureIcons[2] },
    ]

    return (
        <section className="relative py-16 md:py-24 px-4 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="inline-block text-[10px] sm:text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.3em] mb-4">
                        {t.intro.kicker}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter leading-[1.1] mb-6 max-w-3xl mx-auto">
                        {t.intro.heading}
                    </h2>
                    <div className="w-16 h-1.5 bg-[#ffd100] mx-auto mb-8 rounded-full" />
                </div>

                <div className="max-w-3xl mx-auto space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg font-medium mb-14">
                    <p>{t.intro.body1}</p>
                    <p>{t.intro.body2}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-[0_15px_30px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_30px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 mb-4">
                                {f.icon}
                            </div>
                            <h3 className="text-base font-black text-[#1e293b] dark:text-white uppercase tracking-tight mb-2">
                                {f.title}
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
