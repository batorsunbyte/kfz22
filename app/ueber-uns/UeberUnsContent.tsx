'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useTranslation } from '@/hooks/useTranslation'

const valueIcons = [
    (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
    ),
    (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
    ),
]

export default function UeberUnsContent() {
    const { t } = useTranslation()
    const p = t.pages.ueberUns

    return (
        <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">
            <Navigation />

            {/* Subpage Hero */}
            <section className="relative pt-32 pb-16 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#ffd100]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

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

            {/* Intro */}
            <section className="px-4 py-16 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-emerald-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)]">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] dark:text-white mb-6 tracking-tighter">
                            {p.introHeading}
                        </h2>
                        <div className="w-16 h-1.5 bg-[#ffd100] mb-6 rounded-full" />
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-medium">
                            {p.introText}
                        </p>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="px-4 py-16 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] dark:text-white mb-6 tracking-tighter uppercase">
                        {p.storyHeading}
                    </h2>
                    <div className="w-16 h-1.5 bg-[#ffd100] mb-8 rounded-full" />
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                        {p.storyText}
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="px-4 py-16 bg-white dark:bg-slate-950">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-[#ffd100] px-5 py-2 rounded-[0.5rem] shadow-sm transform -rotate-1 mb-3">
                            <h2 className="text-2xl md:text-3xl font-black text-[#1e293b] tracking-tighter uppercase">
                                {p.valuesHeading}
                            </h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {p.values.map((value, i) => (
                            <div
                                key={i}
                                className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-emerald-500/30">
                                    {valueIcons[i]}
                                </div>
                                <h3 className="text-xl font-black text-[#1e293b] dark:text-white mb-3 uppercase tracking-tight">
                                    {value.title}
                                </h3>
                                <div className="w-10 h-1 bg-[#ffd100] mb-4 rounded-full" />
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-4 py-20 bg-gradient-to-br from-slate-100 via-white to-emerald-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-[#1e293b] dark:text-white mb-6 tracking-tighter uppercase">
                        {p.ctaHeading}
                    </h2>
                    <div className="w-16 h-1.5 bg-[#ffd100] mx-auto mb-6 rounded-full" />
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium mb-10 max-w-2xl mx-auto">
                        {p.ctaText}
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-3 bg-[#1e293b] dark:bg-[#ffd100] text-white dark:text-slate-950 px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(30,41,59,0.4)] dark:shadow-[0_20px_40px_-10px_rgba(255,209,0,0.3)] hover:scale-105 transition-all duration-300"
                    >
                        {p.ctaButton}
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
