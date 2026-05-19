import type { Metadata } from 'next'
import UeberUnsContent from './UeberUnsContent'
import BreadcrumbListJsonLd from '@/components/JsonLd/BreadcrumbList'

export const metadata: Metadata = {
    title: 'Über Uns',
    description: 'KFZ Technik 22 – Ihr Meisterbetrieb und §57a Pickerl-Prüfstelle im 22. Bezirk Wien. 15+ Jahre Erfahrung, faire Preise, persönlicher Service.',
    keywords: [
        'KFZ Technik 22 Team',
        'KFZ Werkstatt 1220 Wien',
        'Meisterbetrieb Wien Donaustadt',
        '§57a Pickerl Prüfstelle Wien',
    ],
    alternates: {
        canonical: '/ueber-uns',
    },
    openGraph: {
        title: 'Über Uns – KFZ Technik 22',
        description: 'Ihr Meisterbetrieb im 22. Bezirk Wien. 15+ Jahre Erfahrung, persönlicher Service.',
        type: 'website',
    },
}

export default function UeberUnsPage() {
    return (
        <>
            <BreadcrumbListJsonLd
                crumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Über Uns', path: '/ueber-uns' },
                ]}
            />
            <UeberUnsContent />
        </>
    )
}
