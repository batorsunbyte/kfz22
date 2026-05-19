'use client'

import { useTranslation } from '@/hooks/useTranslation'

export default function LanguageToggle() {
    const { locale, setLocale } = useTranslation()

    return (
        <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm">
            <button
                onClick={() => setLocale('de')}
                className={`px-2.5 py-1.5 text-xs font-black tracking-wider transition-all duration-300 ${
                    locale === 'de'
                        ? 'bg-[#ffd100] text-[#1e293b]'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'
                }`}
            >
                DE
            </button>
            <button
                onClick={() => setLocale('en')}
                className={`px-2.5 py-1.5 text-xs font-black tracking-wider transition-all duration-300 ${
                    locale === 'en'
                        ? 'bg-[#ffd100] text-[#1e293b]'
                        : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white'
                }`}
            >
                EN
            </button>
        </div>
    )
}
