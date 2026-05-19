'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useTranslation } from '@/hooks/useTranslation'

export default function DatenschutzContent() {
    const { t } = useTranslation()
    const p = t.pages.datenschutz

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

            {/* Content - one cohesive block */}
            <section className="px-4 py-16 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <article className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] overflow-hidden">

                        {/* Intro paragraph */}
                        <div className="px-8 md:px-12 pt-10 md:pt-12 pb-2">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic">
                                {p.intro}
                            </p>
                        </div>

                        {/* Controller */}
                        <Section heading={p.controllerHeading}>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-line">
                                {p.controllerText}
                            </p>
                        </Section>

                        {/* Data Collection */}
                        <Section heading={p.dataCollectionHeading}>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-6">
                                {p.dataCollectionIntro}
                            </p>
                            <SubBlock title={p.serverLogsTitle}>
                                {p.serverLogsText}
                            </SubBlock>
                        </Section>

                        {/* Cookies */}
                        <Section heading={p.cookiesHeading}>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-4">
                                {p.cookiesText}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed italic">
                                {p.cookiesNote}
                            </p>
                        </Section>

                        {/* Contact */}
                        <Section heading={p.contactHeading}>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                                {p.contactText}
                            </p>
                        </Section>

                        {/* External Services */}
                        <Section heading={p.externalServicesHeading}>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-6">
                                {p.externalServicesIntro}
                            </p>
                            <SubBlock title={p.bookingsTitle}>
                                {p.bookingsText.replace('privacy.microsoft.com', '')}
                                <a
                                    href="https://privacy.microsoft.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-600 dark:text-[#ffd100] font-bold hover:underline"
                                >
                                    privacy.microsoft.com
                                </a>
                            </SubBlock>
                            <SubBlock title={p.mapsTitle}>
                                {p.mapsText.replace('policies.google.com/privacy', '')}
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-600 dark:text-[#ffd100] font-bold hover:underline"
                                >
                                    policies.google.com/privacy
                                </a>
                            </SubBlock>
                        </Section>

                        {/* Rights */}
                        <Section heading={p.rightsHeading}>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium mb-5">
                                {p.rightsIntro}
                            </p>
                            <ul className="space-y-2.5">
                                {p.rightsList.map((right, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-medium">
                                        <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>{right}</span>
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        {/* Complaint right */}
                        <Section heading={p.complaintHeading}>
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium whitespace-pre-line">
                                {p.complaintText.replace('dsb.gv.at', '')}
                                <a
                                    href="https://www.dsb.gv.at"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-600 dark:text-[#ffd100] font-bold hover:underline"
                                >
                                    dsb.gv.at
                                </a>
                            </p>
                        </Section>

                        {/* Updated notice */}
                        <div className="px-8 md:px-12 py-8 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-black text-[#1e293b] dark:text-white mb-2 uppercase tracking-widest">
                                {p.updatedHeading}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {p.updatedText}
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function Section({ heading, children }: { heading: string; children: React.ReactNode }) {
    return (
        <div className="px-8 md:px-12 py-8 border-b border-slate-200 dark:border-slate-800 last:border-b-0">
            <h2 className="text-xl font-black text-[#1e293b] dark:text-white mb-6 uppercase tracking-tight border-l-4 border-[#ffd100] pl-4">
                {heading}
            </h2>
            {children}
        </div>
    )
}

function SubBlock({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="mb-5 last:mb-0">
            <h3 className="text-sm font-black text-[#1e293b] dark:text-white mb-2 uppercase tracking-widest">
                {title}
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium text-sm">
                {children}
            </p>
        </div>
    )
}
