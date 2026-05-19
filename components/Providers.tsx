'use client'

import { LanguageProvider } from '@/context/LanguageContext'
import CookieBanner from '@/components/CookieBanner'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <LanguageProvider>
            {children}
            <CookieBanner />
        </LanguageProvider>
    )
}
