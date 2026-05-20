'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useTranslation } from '@/hooks/useTranslation'

export default function ImpressumContent() {
    const { t } = useTranslation()
    const p = t.pages.imprint

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

            {/* Imprint Content - one cohesive block */}
            <section className="px-4 py-16 bg-white dark:bg-slate-950">
                <div className="max-w-4xl mx-auto">
                    <article className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] overflow-hidden">

                        {/* Intro paragraph */}
                        <div className="px-8 md:px-12 pt-10 md:pt-12 pb-2">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium italic">
                                {p.intro}
                            </p>
                        </div>

                        {/* Contact header block - brand name, address, phone, email */}
                        <div className="px-8 md:px-12 py-8 border-b border-slate-200 dark:border-slate-800">
                            <h2 className="text-2xl md:text-3xl font-black text-[#1e293b] dark:text-white uppercase tracking-tight mb-1">
                                KFZ Technik 22
                            </h2>
                            <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                                Ein Unternehmen der Alazcioglu &amp; Bilen GmbH
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-semibold">
                                Eipeldauer Straße 43<br />
                                1220 Wien, Österreich
                            </p>
                            <div className="mt-4 flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm">
                                <div>
                                    <span className="text-slate-400 dark:text-slate-500 font-bold mr-2">{p.phoneLabel}:</span>
                                    <a href="tel:012561822" className="text-[#1e293b] dark:text-white font-bold hover:text-emerald-600 dark:hover:text-[#ffd100] transition-colors">
                                        +43 1 256 18 22
                                    </a>
                                </div>
                                <div>
                                    <span className="text-slate-400 dark:text-slate-500 font-bold mr-2">{p.emailLabel}:</span>
                                    <a href="mailto:office@kfz22.at" className="text-[#1e293b] dark:text-white font-bold hover:text-emerald-600 dark:hover:text-[#ffd100] transition-colors">
                                        office@kfz22.at
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Company details */}
                        <Section heading={p.companyHeading}>
                            <Row label={p.companyNameLabel} value="Alazcioglu & Bilen GmbH" />
                            <Row label={p.legalFormLabel} value="Gesellschaft mit beschränkter Haftung (GmbH)" />
                            <Row label={p.businessLocationLabel} value={`Eipeldauer Straße 43\n1220 Wien\nÖsterreich`} />
                            <Row label={p.managementLabel} value="Ahmed Atak (gewerberechtliche Geschäftsführung)" />
                            <Row label={p.businessPurposeLabel} value={`Kraftfahrzeugtechnik (eingeschränkt auf Reparatur von Kraftfahrzeugen)\n§57a Pickerl-Prüfstelle`} />
                        </Section>

                        {/* Legal / Registry */}
                        <Section heading={p.legalHeading}>
                            <Row label={p.vatLabel} value="ATU72323407" />
                            <Row label={p.registryLabel} value="FN 465141g" />
                            <Row label={p.registryCourtLabel} value="Handelsgericht Wien" />
                            <Row label="GISA-Zahl" value="30162877" />
                        </Section>

                        {/* Trade & supervision */}
                        <Section heading={p.scopeHeading}>
                            <Row label={p.chamberLabel} value="WKO Wien, Landesinnung der Fahrzeugtechnik" />
                            <Row label={p.authorityLabel} value="Magistratisches Bezirksamt für den 22. Bezirk Wien" />
                            <Row label={p.tradeRegulationLabel} value={p.tradeRegulationValue} link="https://www.ris.bka.gv.at" />
                        </Section>

                        {/* Disclaimer block */}
                        <div className="px-8 md:px-12 py-10 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
                            <h2 className="text-xl font-black text-[#1e293b] dark:text-white mb-6 uppercase tracking-tight border-l-4 border-[#ffd100] pl-4">
                                {p.disclaimerHeading}
                            </h2>
                            <div className="space-y-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                <p>{p.disclaimerContent}</p>
                                <p>{p.disclaimerLinks}</p>
                                <p>{p.disclaimerCopyright}</p>
                                <p className="italic">{p.disclaimerValidity}</p>
                            </div>
                        </div>

                        {/* ODR notice */}
                        <div className="px-8 md:px-12 py-8 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-black text-[#1e293b] dark:text-white mb-2 uppercase tracking-widest">
                                {p.odrHeading}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                {p.odrContent.replace('ec.europa.eu/odr', '')}
                                <a
                                    href="https://ec.europa.eu/odr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-emerald-600 dark:text-[#ffd100] font-bold hover:underline"
                                >
                                    ec.europa.eu/odr
                                </a>
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
            <dl className="space-y-4">
                {children}
            </dl>
        </div>
    )
}

function Row({ label, value, link }: { label: string; value: string; link?: string }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-6 py-1">
            <dt className="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest pt-0.5">
                {label}
            </dt>
            <dd className="sm:col-span-2 font-bold text-slate-700 dark:text-slate-200 whitespace-pre-line">
                {link ? (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 dark:hover:text-[#ffd100] transition-colors"
                    >
                        {value}
                    </a>
                ) : (
                    value
                )}
            </dd>
        </div>
    )
}
