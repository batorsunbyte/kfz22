'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/context/LanguageContext'
import de from '@/translations/de'
import en from '@/translations/en'
import type { Translations } from '@/translations/types'

const translations: Record<string, Translations> = { de, en }

export function useTranslation() {
    const { locale, setLocale } = useContext(LanguageContext)
    const t = translations[locale] ?? de

    return { t, locale, setLocale }
}
