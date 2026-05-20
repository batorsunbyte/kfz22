'use client'

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

const featureIcons = [
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 48h40V24L32 8 12 24v24z" /><circle cx="32" cy="36" r="8" /><path d="M32 32v8" strokeOpacity="0.4" /></svg>),
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2"><path d="M32 12c-11 0-20 9-20 20M32 52c11 0 20-9 20-20" strokeOpacity="0.3" /><circle cx="32" cy="32" r="8" /></svg>),
    (<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="32" cy="24" r="10" /><path d="M12 58c0-11 9-20 20-20s20 9 20 20" /></svg>),
]

export default function AboutSection() {
    const { t } = useTranslation()

    const certifications = [
        t.about.certs.meisterbrief,
        t.about.certs.systemElektronik,
        t.about.certs.diagnoseExpert,
        t.about.certs.bezirk,
    ]

    return (
        <section id="about" className="relative pt-12 pb-24 px-4 bg-white dark:bg-slate-950 overflow-hidden shadow-[inset_0_20px_40px_-20px_rgba(0,0,0,0.05)] transition-colors duration-500">
            {/* Background Polish */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Unified 3D Brand Header - Standardized Name */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-10 animate-fade-in-up-3d">
                    <div className="bg-[#ffd100] px-6 py-2 rounded-[0.5rem] shadow-sm transform -rotate-1">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tighter whitespace-nowrap">
                            {t.about.brand}
                        </h2>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter uppercase whitespace-nowrap">
                        {t.about.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Column: Master Profile Card */}
                    <div className="lg:col-span-5 relative group">
                        <div className="glass-card-3d p-8 rounded-[2rem] bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.05)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]">
                            {/* 3D Stamp Effect — smaller on mobile to avoid overlap with heading */}
                            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-20">
                                <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full border-2 sm:border-4 border-dashed border-red-500/30 flex items-center justify-center transform rotate-12 animate-pulse">
                                    <div className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-red-600 flex flex-col items-center justify-center text-white font-black text-[7px] sm:text-[9px] lg:text-[10px] tracking-tighter shadow-lg leading-tight">
                                        <span>{t.about.stampCertified}</span>
                                        <span className="text-[10px] sm:text-xs lg:text-sm">{t.about.stampMeister}</span>
                                        <span>{t.about.stampBetrieb}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-[#1e293b] dark:text-white mb-2 uppercase tracking-tight">{t.about.heading}</h3>
                                <div className="w-12 h-1 bg-[#ffd100] mb-6 rounded-full" />

                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                                    {t.about.description}
                                </p>

                                <div className="grid grid-cols-2 gap-3 mb-8">
                                    {certifications.map((cert, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-white/60 dark:bg-slate-800/40 p-3 rounded-xl border border-white/40 dark:border-white/5 shadow-sm transition-all hover:bg-white dark:hover:bg-slate-800">
                                            <div className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-[#ffd100]" />
                                            <span className="text-[10px] font-black text-slate-800 dark:text-slate-300 uppercase">{cert}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between p-4 bg-[#1e293b] dark:bg-slate-800 rounded-2xl shadow-inner group-hover:bg-[#1e293b]/95 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="text-[#ffd100] text-[10px] font-black uppercase tracking-wider">{t.about.experience}</span>
                                        <span className="text-white text-3xl font-black uppercase leading-none">{t.about.years}</span>
                                    </div>
                                    <div className="w-12 h-12 bg-[#ffd100] rounded-xl flex items-center justify-center shadow-lg transform rotate-6 transition-transform group-hover:rotate-12">
                                        <svg className="w-6 h-6 text-[#1e293b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Visual Decorative Element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-[80px] -z-10 opacity-60" />
                    </div>

                    {/* Right Column: Features Grid */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {t.about.features.map((feature, index) => (
                            <div
                                key={index}
                                className={`service-card-modern p-8 rounded-[1.5rem] flex flex-col justify-between transition-all duration-500 border border-slate-200/60 dark:border-slate-800/60 hover:border-[#ffd100]/50 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] hover:-translate-y-1 ${index === 0 ? 'md:col-span-2' : ''} bg-white dark:bg-slate-900/50`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 text-slate-800 dark:text-[#ffd100] bg-emerald-50 dark:bg-slate-800 p-2.5 rounded-xl border border-emerald-100/50 dark:border-slate-700/50">
                                        {featureIcons[index]}
                                    </div>
                                    <span className="text-[10px] font-black text-slate-300 dark:text-slate-600 uppercase tracking-[0.2em]">0{index + 1}</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-black text-[#1e293b] dark:text-white mb-1 uppercase tracking-tight">{feature.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug font-medium italic">
                                        {feature.desc}
                                    </p>
                                </div>
                                <div className="mt-6 w-8 h-1 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:w-full group-hover:bg-[#ffd100]/30 transition-all duration-500" />
                            </div>
                        ))}

                        {/* CTA / Summary Card (Restored from Step 133) */}
                        <div className="md:col-span-2 bg-[#ffd100] p-6 rounded-[1.5rem] flex items-center justify-between shadow-xl shadow-yellow-400/10 transition-transform hover:scale-[1.01]">
                            <div className="flex flex-col">
                                <span className="text-[12px] font-black text-[#1e293b]/70 uppercase tracking-widest">{t.about.location}</span>
                                <h4 className="text-xl font-black text-[#1e293b] uppercase tracking-tighter leading-none">{t.about.consultOnSite}</h4>
                            </div>
                            <a href="tel:012561822" className="bg-[#1e293b] text-white px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest shadow-lg transition-transform hover:scale-105 active:scale-95 inline-block">
                                {t.about.contactBtn}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
