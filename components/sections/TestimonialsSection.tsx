'use client'

import React from 'react'
import { useTranslation } from '@/hooks/useTranslation'

export default function TestimonialsSection() {
    const { t } = useTranslation()

    return (
        <section id="reviews" className="relative py-24 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden shadow-[inset_0_20px_40px_-20px_rgba(0,0,0,0.05)] transition-colors duration-500">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-100/30 dark:bg-emerald-900/10 blur-[150px] rounded-full -z-10" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Unified 3D Brand Header - Diversified with Slogan */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-20 animate-fade-in-up-3d">
                    <div className="bg-[#ffd100] px-6 py-2 rounded-[0.5rem] shadow-sm transform -rotate-1">
                        <h2 className="text-3xl md:text-4xl font-black text-[#1e293b] tracking-tighter uppercase whitespace-nowrap">
                            {t.testimonials.customerVoices}
                        </h2>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] dark:text-white tracking-tighter uppercase whitespace-nowrap">
                        {t.testimonials.reviews}
                    </h2>
                </div>

                {/* Staggered 3D Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                    {t.testimonials.items.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`group relative perspective-1000 ${index === 1 ? 'lg:translate-y-12' : (index === 2 ? 'lg:translate-y-6' : '')
                                }`}
                        >
                            {/* 3D Verified Stamp (Randomly placed in corners) */}
                            {index === 0 ? (
                                <div className="absolute -top-6 -right-6 z-20 scale-75 animate-stamp-pulse">
                                    <div className="w-24 h-24 rounded-full border-2 border-dashed border-emerald-500/30 flex items-center justify-center transform rotate-12">
                                        <div className="w-20 h-20 rounded-full bg-[#1e293b] flex flex-col items-center justify-center text-white font-black text-[8px] tracking-tight shadow-xl">
                                            <span>{t.testimonials.verified}</span>
                                            <span className="text-[#ffd100] text-xs">{t.testimonials.percent}</span>
                                            <span>{t.testimonials.satisfied}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : null}

                            {/* Main Testimonial Card */}
                            <div className="glass-card-3d p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 hover:shadow-[0_40px_70px_-20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_40px_70px_-20px_rgba(0,0,0,0.7)] hover:-translate-y-3 hover:rotate-x-2">
                                {/* Rating Stars with 3D Depth */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="text-[#ffd100] drop-shadow-[0_2px_4px_rgba(255,209,0,0.4)] transform group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 100}ms` }}>
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        </div>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <div className="relative mb-8">
                                    <div className="text-6xl text-[#1e293b]/5 dark:text-white/5 font-serif absolute -top-8 -left-4">&ldquo;</div>
                                    <div className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic relative z-10 text-[15px]">
                                        {testimonial.review}
                                    </div>
                                    <div className="text-6xl text-[#1e293b]/5 dark:text-white/5 font-serif absolute -bottom-10 right-0">&rdquo;</div>
                                </div>

                                {/* Customer Info Area */}
                                <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-6">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border border-slate-300/50 dark:border-slate-700/50 flex items-center justify-center font-black text-[#1e293b] dark:text-white text-base shadow-sm">
                                        {testimonial.customer[0]}
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-2">
                                            <span className="font-black text-[#1e293b] dark:text-white text-base leading-none uppercase tracking-tight">{testimonial.customer}</span>
                                            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">{testimonial.date}</span>
                                        </div>
                                        <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold italic">{testimonial.vehicle}</span>
                                    </div>
                                </div>

                                {/* Service Tag Badge */}
                                <div className="mt-4 flex justify-end">
                                    <span className="bg-emerald-50 dark:bg-slate-800 text-emerald-600/80 dark:text-[#ffd100] text-[10px] font-black px-3 py-1 rounded-full border border-emerald-100/50 dark:border-slate-700/50 uppercase tracking-widest">
                                        {testimonial.service}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trusted Bar */}
                <div className="mt-32 flex flex-col items-center">
                    <div className="w-24 h-1 bg-[#ffd100] mb-8 rounded-full opacity-30" />
                    <div className="flex flex-wrap justify-center gap-8 grayscale opacity-50 grayscale-hover transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                        {/* Use simple 3D text for trust badges */}
                        <span className="text-sm font-black text-[#1e293b] dark:text-white tracking-[0.3em] uppercase">{t.testimonials.trustedPro}</span>
                        <span className="text-sm font-black text-[#1e293b] dark:text-[#ffd100] tracking-[0.3em] uppercase">&bull;</span>
                        <span className="text-sm font-black text-[#1e293b] dark:text-white tracking-[0.3em] uppercase">{t.testimonials.qualityGuaranteed}</span>
                    </div>
                </div>
            </div>

            {/* Visual Decoration Spikes - 3D Look */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffd100]/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
        </section>
    )
}
