'use client'

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=KFZ+Technik+22+Wien+22+Bezirk'

export default function ContactSection() {
    const { t } = useTranslation()

    return (
        <section id="contact" className="relative pt-12 pb-24 px-4 bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-[inset_0_20px_40px_-20px_rgba(0,0,0,0.1)] transition-colors duration-500">
            {/* Background Polish */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Unified 3D Brand Header - Diversified with Slogan */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10 animate-fade-in-up-3d">
                    <div className="bg-[#ffd100] px-6 py-2 rounded-[0.5rem] shadow-sm transform -rotate-1">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tighter uppercase whitespace-nowrap">
                            {t.contact.accent}
                        </h2>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter uppercase whitespace-nowrap">
                        {t.contact.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
                    {/* Left Column: Direct Contact Buttons */}
                    <div className="lg:col-span-7">
                        <div className="relative group h-full">
                            {/* Visual Glow behind card */}
                            <div className="absolute -inset-4 bg-[#ffd100]/5 rounded-[3rem] blur-2xl -z-10 group-hover:bg-[#ffd100]/10 transition-colors" />

                            <div className="relative overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] h-full flex flex-col">
                                {/* Decorative gradient circles */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ffd100]/20 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10 h-full flex flex-col">
                                    {/* Heading */}
                                    <h3 className="text-2xl md:text-3xl font-black text-[#1e293b] dark:text-white mb-2 uppercase tracking-tighter leading-tight">
                                        {t.contact.orCallDirectly}
                                    </h3>
                                    <div className="w-16 h-1.5 bg-[#ffd100] mb-8 rounded-full" />

                                    {/* Big Phone Hero — fills vertical space, prominent CTA */}
                                    <a
                                        href="tel:012561822"
                                        className="flex-1 flex flex-col items-center justify-center py-8 text-center group/phone"
                                    >
                                        <span className="text-[10px] md:text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mb-4">
                                            {t.hero.callNow}
                                        </span>
                                        <span className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e293b] dark:text-white tracking-tighter group-hover/phone:text-emerald-600 dark:group-hover/phone:text-[#ffd100] transition-colors whitespace-nowrap">
                                            +43 1 256 18 22
                                        </span>
                                    </a>

                                    {/* Direct contact actions: Call + WhatsApp + Route */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href="tel:012561822"
                                            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            +43 1 256 18 22
                                        </a>
                                        <a
                                            href="https://wa.me/436608646433"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="WhatsApp"
                                            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.62A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22a9.94 9.94 0 01-5.07-1.39l-.36-.21-3.67.96.98-3.57-.23-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.46-7.49c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                                            </svg>
                                            WhatsApp
                                        </a>
                                        <a
                                            href={MAPS_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 border-2 border-[#1e293b] dark:border-[#ffd100] text-[#1e293b] dark:text-[#ffd100] py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 hover:bg-[#1e293b] hover:text-white dark:hover:bg-[#ffd100] dark:hover:text-slate-950 active:scale-[0.98]"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {t.callback.planRoute}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Details & Hours */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Status Card - 3D Pop */}
                        <div className="glass-card-3d p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02]">
                            <h3 className="text-xl font-black text-[#1e293b] dark:text-white mb-6 uppercase tracking-tight flex items-center gap-3">
                                <span className="w-8 h-8 bg-emerald-50 dark:bg-slate-900 rounded-lg flex items-center justify-center text-emerald-600 dark:text-[#ffd100]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                {t.contact.locationContact}
                            </h3>

                            <div className="space-y-6">
                                <div className="group/item">
                                    <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t.contact.addressLabel}</p>
                                    <p className="text-slate-700 dark:text-slate-300 font-bold leading-tight uppercase">
                                        {t.contact.addressLine1}<br />
                                        {t.contact.addressLine2}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group/item">
                                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t.contact.phone}</p>
                                        <a href="tel:012561822" className="text-slate-700 dark:text-slate-300 font-bold text-lg leading-tight transition-colors group-hover/item:text-emerald-600 dark:group-hover/item:text-[#ffd100] hover:underline">+43 1 256 18 22</a>
                                    </div>
                                    <div className="group/item">
                                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t.contact.email}</p>
                                        <a href="mailto:office@kfz22.at" className="text-slate-700 dark:text-slate-300 font-bold text-sm leading-tight break-all transition-colors group-hover/item:text-emerald-600 dark:group-hover/item:text-[#ffd100] hover:underline">office@kfz22.at</a>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-700 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-red-600 uppercase tracking-widest leading-none">{t.contact.emergency}</p>
                                    <p className="text-slate-800 dark:text-slate-300 font-black text-sm uppercase">{t.contact.emergencyDesc}</p>
                                </div>
                            </div>
                        </div>

                        {/* Hours Card - 3D Depth */}
                        <div className="p-10 rounded-[2rem] bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-transparent shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] relative overflow-hidden group/hours transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]">
                            {/* Artistic Pattern */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 dark:bg-[#ffd100]/10 rounded-full blur-3xl -z-0 transition-transform group-hover/hours:scale-150" />

                            <h3 className="text-xl font-black text-[#1e293b] dark:text-white mb-8 uppercase tracking-tight flex items-center gap-3 relative z-10">
                                <span className="w-8 h-8 bg-[#ffd100] rounded-lg flex items-center justify-center text-[#1e293b]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                {t.contact.hours}
                            </h3>

                            <div className="space-y-4 relative z-10">
                                {[
                                    { day: t.contact.monFri, hours: '09:00 - 18:00' },
                                    { day: `${t.contact.sat} - ${t.contact.sun}`, hours: t.contact.closed, accent: true }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center transition-all hover:translate-x-1">
                                        <span className="text-[11px] font-black text-slate-400 dark:text-slate-400 uppercase tracking-[0.2em]">{item.day}</span>
                                        <span className={`font-black text-sm uppercase tracking-tighter ${item.accent ? 'text-[#ffd100]' : 'text-[#1e293b] dark:text-white'}`}>
                                            {item.hours}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 relative z-10">
                                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-300 italic opacity-80 leading-snug">
                                    {t.contact.hoursNote}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
