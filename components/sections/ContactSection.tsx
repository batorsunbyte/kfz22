'use client'

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=KFZ+Technik+22+Wien+22+Bezirk'

// TODO: Replace with the real Microsoft Bookings URL once available
const BOOKING_URL = '#'

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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Online Booking CTA */}
                    <div className="lg:col-span-7">
                        <div className="relative group">
                            {/* Visual Glow behind card */}
                            <div className="absolute -inset-4 bg-[#ffd100]/5 rounded-[3rem] blur-2xl -z-10 group-hover:bg-[#ffd100]/10 transition-colors" />

                            <div className="relative overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 rounded-[2.5rem] p-8 md:p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                                {/* Decorative gradient circles */}
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#ffd100]/20 rounded-full blur-3xl pointer-events-none" />
                                <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10">
                                    {/* Kicker */}
                                    <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-5">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        {t.contact.bookOnlineKicker}
                                    </div>

                                    {/* Heading */}
                                    <h3 className="text-3xl md:text-5xl font-black text-[#1e293b] dark:text-white mb-3 uppercase tracking-tighter leading-[0.95]">
                                        {t.contact.bookOnlineHeading}
                                    </h3>
                                    <div className="w-16 h-1.5 bg-[#ffd100] mb-6 rounded-full" />

                                    {/* Description */}
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-base md:text-lg mb-8 max-w-md">
                                        {t.contact.bookOnlineDesc}
                                    </p>

                                    {/* Primary CTA - Online Booking */}
                                    <a
                                        href={BOOKING_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-3 bg-[#1e293b] dark:bg-[#ffd100] text-white dark:text-slate-950 px-7 md:px-10 py-5 rounded-2xl font-black text-sm md:text-base uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(30,41,59,0.4)] dark:shadow-[0_20px_40px_-10px_rgba(255,209,0,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span>{t.contact.bookOnlineCTA}</span>
                                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                    <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 italic mt-4 max-w-md">
                                        {t.contact.bookOnlineNote}
                                    </p>

                                    {/* Divider */}
                                    <div className="my-8 flex items-center gap-4">
                                        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                                            {t.contact.orCallDirectly}
                                        </span>
                                        <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                                    </div>

                                    {/* Secondary actions: Call + Route */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href="tel:+4312561822"
                                            className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            +43 1 2561822
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
                                        <a href="tel:+4312561822" className="text-slate-700 dark:text-slate-300 font-bold text-lg leading-tight transition-colors group-hover/item:text-emerald-600 dark:group-hover/item:text-[#ffd100] hover:underline">+43 1 2561822</a>
                                    </div>
                                    <div className="group/item">
                                        <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t.contact.email}</p>
                                        <p className="text-slate-700 dark:text-slate-300 font-bold text-sm leading-tight break-all transition-colors group-hover/item:text-emerald-600 dark:group-hover/item:text-[#ffd100]">info@kfztechnik22.at</p>
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
                                    { day: t.contact.monFri, hours: '08:00 - 18:00' },
                                    { day: t.contact.sat, hours: '09:00 - 14:00' },
                                    { day: t.contact.sun, hours: t.contact.closed, accent: true }
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
