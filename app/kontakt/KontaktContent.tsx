'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ContactSection from '@/components/sections/ContactSection'
import { useTranslation } from '@/hooks/useTranslation'

export default function KontaktContent() {
    const { t } = useTranslation()
    const p = t.pages.kontakt

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

            {/* Reuse the existing ContactSection (form + address + hours) */}
            <ContactSection />

            <Footer />
        </main>
    )
}
