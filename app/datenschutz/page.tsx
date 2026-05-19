import type { Metadata } from 'next'
import DatenschutzContent from './DatenschutzContent'
import BreadcrumbListJsonLd from '@/components/JsonLd/BreadcrumbList'

export const metadata: Metadata = {
    title: 'Datenschutzerklärung',
    description: 'Datenschutzerklärung von KFZ Technik 22 gemäß DSGVO und österreichischem Datenschutzgesetz (DSG).',
    robots: {
        // Privacy policy itself is fine to index, but most SEO weight should be on main pages
        index: true,
        follow: true,
    },
    alternates: {
        canonical: '/datenschutz',
    },
}

export default function DatenschutzPage() {
    return (
        <>
            <BreadcrumbListJsonLd
                crumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Datenschutz', path: '/datenschutz' },
                ]}
            />
            <DatenschutzContent />
        </>
    )
}
