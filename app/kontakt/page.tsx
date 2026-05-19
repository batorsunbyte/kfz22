import type { Metadata } from 'next'
import KontaktContent from './KontaktContent'
import BreadcrumbListJsonLd from '@/components/JsonLd/BreadcrumbList'

export const metadata: Metadata = {
    title: 'Kontakt & Termin',
    description: 'Kontakt zu KFZ Technik 22 in 1220 Wien. Termin online buchen, anrufen unter +43 1 2561822 oder direkt vorbeikommen: Eipeldauer Str. 43.',
    keywords: [
        'KFZ Termin Wien',
        'KFZ Werkstatt Termin Donaustadt',
        'Kontakt KFZ Technik 22',
        'Eipeldauer Str. 43 KFZ',
        'Werkstatt 1220 Wien Termin',
    ],
    alternates: {
        canonical: '/kontakt',
    },
    openGraph: {
        title: 'Kontakt – KFZ Technik 22',
        description: 'Termin buchen oder direkt anrufen: +43 1 2561822. Eipeldauer Str. 43, 1220 Wien.',
        type: 'website',
    },
}

export default function KontaktPage() {
    return (
        <>
            <BreadcrumbListJsonLd
                crumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Kontakt', path: '/kontakt' },
                ]}
            />
            <KontaktContent />
        </>
    )
}
