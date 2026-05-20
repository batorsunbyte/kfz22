import type { Metadata } from 'next'
import ImpressumContent from './ImpressumContent'
import BreadcrumbListJsonLd from '@/components/JsonLd/BreadcrumbList'

export const metadata: Metadata = {
    title: 'Impressum',
    description: 'Impressum von KFZ Technik 22, Eipeldauer Straße 43, 1220 Wien. Angaben gemäß § 5 ECG, § 14 UGB und § 25 MedienG.',
    robots: {
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/impressum',
    },
}

export default function ImpressumPage() {
    return (
        <>
            <BreadcrumbListJsonLd
                crumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Impressum', path: '/impressum' },
                ]}
            />
            <ImpressumContent />
        </>
    )
}
