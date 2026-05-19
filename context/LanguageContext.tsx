'use client'

import { createContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export type Locale = 'de' | 'en'

interface LanguageContextType {
    locale: Locale
    setLocale: (locale: Locale) => void
}

export const LanguageContext = createContext<LanguageContextType>({
    locale: 'de',
    setLocale: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('de')

    useEffect(() => {
        const saved = localStorage.getItem('locale') as Locale | null
        if (saved === 'de' || saved === 'en') {
            setLocaleState(saved)
            document.documentElement.lang = saved
        }
    }, [])

    const setLocale = useCallback((newLocale: Locale) => {
        setLocaleState(newLocale)
        localStorage.setItem('locale', newLocale)
        document.documentElement.lang = newLocale
    }, [])

    return (
        <LanguageContext.Provider value={{ locale, setLocale }}>
            {children}
        </LanguageContext.Provider>
    )
}
