import type { Metadata } from 'next'
import GalerieContent from './GalerieContent'
import BreadcrumbListJsonLd from '@/components/JsonLd/BreadcrumbList'

export const metadata: Metadata = {
    title: 'Galerie',
    description: 'Bilder aus der KFZ Technik 22 Werkstatt im 22. Bezirk Wien — Werkstatt-Einblicke, Arbeit am Fahrzeug, unser Team.',
    keywords: [
        'KFZ Werkstatt Bilder Wien',
        'KFZ Technik 22 Galerie',
        'Werkstatt Donaustadt Fotos',
        'Eipeldauer KFZ',
    ],
    alternates: {
        canonical: '/galerie',
    },
    openGraph: {
        title: 'Galerie – KFZ Technik 22',
        description: 'Einblicke in unsere Werkstatt im 22. Bezirk Wien.',
        type: 'website',
    },
}

export default function GaleriePage() {
    return (
        <>
            <BreadcrumbListJsonLd
                crumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Galerie', path: '/galerie' },
                ]}
            />
            <GalerieContent />
        </>
    )
}
