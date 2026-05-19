'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

const STORAGE_KEY = 'cookie-banner-acknowledged-v1'

export default function CookieBanner() {
    const { t } = useTranslation()
    const [visible, setVisible] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        try {
            const acknowledged = localStorage.getItem(STORAGE_KEY)
            if (!acknowledged) {
                const show = setTimeout(() => setVisible(true), 600)
                return () => clearTimeout(show)
            }
        } catch {
            // localStorage unavailable (private mode, etc.) — show banner anyway
            setVisible(true)
        }
    }, [])

    const handleAccept = () => {
        try {
            localStorage.setItem(STORAGE_KEY, new Date().toISOString())
        } catch {
            // ignore — banner just won't persist
        }
        setVisible(false)
    }

    if (!mounted || !visible) return null

    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label={t.cookieBanner.title}
            className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md z-[200] animate-fade-in-up-3d"
        >
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur-lg p-5 sm:p-6">
                {/* Cookie icon + title */}
                <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-.43-.04-.85-.1-1.27-.46.36-1.04.57-1.66.57-.71 0-1.36-.27-1.85-.71-.49.44-1.14.71-1.85.71-.55 0-1.07-.16-1.5-.45-.43.29-.95.45-1.5.45-1.38 0-2.5-1.12-2.5-2.5 0-.55.16-1.07.45-1.5C9.16 6.36 9 5.84 9 5.29c0-.62.21-1.2.57-1.66C9.15 3.04 8.43 3 8 3c-2.08 0-3.97.8-5.39 2.1A6.95 6.95 0 002 12c0 5.52 4.48 10 10 10s10-4.48 10-10c0-2.99-1.32-5.67-3.4-7.5z" />
                            <circle cx="8.5" cy="13" r="1.25" fill="white" />
                            <circle cx="13" cy="16" r="1" fill="white" />
                            <circle cx="15.5" cy="11" r="1" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="font-black text-[#1e293b] dark:text-white text-sm uppercase tracking-tight leading-tight">
                            {t.cookieBanner.title}
                        </h2>
                    </div>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium mb-5">
                    {t.cookieBanner.message}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <button
                        type="button"
                        onClick={handleAccept}
                        className="flex-1 bg-[#1e293b] dark:bg-[#ffd100] text-white dark:text-slate-950 py-2.5 px-5 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                    >
                        {t.cookieBanner.accept}
                    </button>
                    <Link
                        href="/datenschutz"
                        onClick={() => setVisible(false)}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1 text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-[#ffd100] py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-widest transition-colors"
                    >
                        {t.cookieBanner.learnMore}
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}
