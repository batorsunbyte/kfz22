'use client'

import React, { useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/hooks/useTranslation'

const socialIcons = [
    { icon: "Instagram", path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5a4.25 4.25 0 0 0-4.25 4.25v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" },
    { icon: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
    { icon: "Website", path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" }
]

export default function Footer() {
    const { t } = useTranslation()
    const pathname = usePathname()
    const isHome = pathname === '/'

    const sectionLinks = [
        { label: t.nav.home, anchor: '#home' },
        { label: t.nav.services, anchor: '#services' },
        { label: t.nav.offers, anchor: '#pricing' },
        { label: t.nav.about, anchor: '#about' },
        { label: t.nav.reviews, anchor: '#reviews' },
        { label: t.nav.contact, anchor: '#contact' },
    ]

    const scrollToSection = useCallback((href: string) => {
        const element = document.querySelector(href)
        if (element) {
            const headerOffset = 64
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
        }
    }, [])

    const linkClasses = "text-slate-500 dark:text-slate-400 hover:text-[#1e293b] dark:hover:text-white hover:translate-x-2 transition-all duration-300 font-bold text-sm inline-block"

    const renderSectionLink = (item: { label: string; anchor: string }) => {
        if (isHome) {
            return (
                <button
                    type="button"
                    onClick={() => scrollToSection(item.anchor)}
                    className={`${linkClasses} text-left`}
                >
                    {item.label}
                </button>
            )
        }
        return (
            <Link href={`/${item.anchor}`} className={linkClasses}>
                {item.label}
            </Link>
        )
    }

    return (
        <footer className="relative bg-slate-100 dark:bg-[#0a0f1c] pt-20 pb-12 px-4 overflow-hidden transition-colors duration-500">
            {/* Top Brand Border - 3D Glow */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#ffd100] shadow-[0_0_20px_rgba(255,209,0,0.3)]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Brand & Identity */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <Link href="/" className="block">
                                <span className="text-3xl font-black text-[#1e293b] dark:text-white tracking-tighter leading-none italic">
                                    KFZ <span className="text-[#ffd100]">Technik 22</span>
                                </span>
                            </Link>
                            <span className="text-slate-400 dark:text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase mt-2">{t.footer.meisterbetrieb}</span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                            {t.footer.description}
                        </p>
                        {/* 3D Trust Seal */}
                        <div className="flex items-center gap-3 pt-2">
                            <div className="w-12 h-12 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center p-1 bg-white dark:bg-white/5">
                                <div className="w-full h-full rounded-full border-2 border-dashed border-[#ffd100] flex items-center justify-center">
                                    <span className="text-[8px] font-black text-[#1e293b] dark:text-white transform -rotate-12">{t.footer.original}</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none">{t.footer.established}</p>
                                <p className="text-[#1e293b] dark:text-white font-black text-sm uppercase">{t.footer.vienna22}</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-[#1e293b] dark:text-white font-black text-sm uppercase tracking-widest mb-8 border-l-4 border-[#ffd100] pl-4">{t.footer.navigation}</h4>
                        <ul className="space-y-4">
                            {sectionLinks.map((link) => (
                                <li key={link.anchor}>
                                    {renderSectionLink(link)}
                                </li>
                            ))}
                            <li>
                                <Link href="/galerie" className={linkClasses}>{t.nav.galerie}</Link>
                            </li>
                            <li>
                                <Link href="/ueber-uns" className={linkClasses}>{t.nav.ueberUns}</Link>
                            </li>
                            <li>
                                <Link href="/kontakt" className={linkClasses}>{t.nav.contact}</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Specialized Services */}
                    <div>
                        <h4 className="text-[#1e293b] dark:text-white font-black text-sm uppercase tracking-widest mb-8 border-l-4 border-[#ffd100] pl-4">{t.footer.serviceFocus}</h4>
                        <ul className="space-y-4">
                            {t.footer.serviceItems.map((service, i) => (
                                <li key={i} className="flex items-center gap-3 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-[#ffd100] transition-colors" />
                                    <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Reach Us */}
                    <div>
                        <h4 className="text-[#1e293b] dark:text-white font-black text-sm uppercase tracking-widest mb-8 border-l-4 border-[#ffd100] pl-4">{t.footer.contactHeading}</h4>
                        <div className="space-y-6">
                            <div className="glass-card-3d bg-white dark:bg-white/5 border-slate-200 dark:border-white/5 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-colors cursor-pointer group">
                                <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">{t.footer.phone247}</p>
                                <a href="tel:012561822" className="text-emerald-600 dark:text-[#ffd100] font-black text-lg group-hover:scale-105 transition-transform block hover:underline">+43 1 256 18 22</a>
                            </div>
                            <div className="flex gap-4">
                                {/* Social Icons - Generic Business Style */}
                                {socialIcons.map((social, i) => (
                                    <div key={i} className="w-10 h-10 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-[#ffd100] hover:text-[#1e293b] text-slate-600 dark:text-white transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-2" title={social.icon}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={social.path} />
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Legal Links */}
                <div className="pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 dark:text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em]">
                        {t.footer.copyright}
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/impressum"
                            className="text-slate-400 dark:text-slate-500 text-[11px] font-black uppercase tracking-widest hover:text-emerald-600 dark:hover:text-[#ffd100] transition-colors"
                        >
                            {t.footer.imprint}
                        </Link>
                        <Link
                            href="/datenschutz"
                            className="text-slate-400 dark:text-slate-500 text-[11px] font-black uppercase tracking-widest hover:text-emerald-600 dark:hover:text-[#ffd100] transition-colors"
                        >
                            {t.footer.privacy}
                        </Link>
                    </div>
                </div>

                {/* SunByte credit */}
                <div className="mt-6 text-center">
                    <p className="text-slate-300 dark:text-slate-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                        Made by <span className="text-emerald-600 dark:text-[#ffd100]">SunByte.AT</span>
                    </p>
                </div>
            </div>

            {/* Artistic Background Polish */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/5 rounded-full blur-[150px] -z-0" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#ffd100]/5 rounded-full blur-[120px] -z-0" />
        </footer>
    )
}
