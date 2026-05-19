import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

// TODO: Replace with the real production URL once domain is connected
const SITE_URL = 'https://kfz-technik-22.at'

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'KFZ Technik 22 – Meisterbetrieb & §57a Pickerl-Prüfstelle | 1220 Wien',
        template: '%s | KFZ Technik 22 – 1220 Wien',
    },
    description: 'KFZ-Werkstatt und §57a Pickerl-Prüfstelle im 22. Bezirk Wien. Service, Reparatur, Diagnose, Pickerl, Bremsen, Reifen — fair, schnell, persönlich. Eipeldauer Str. 43, 1220 Wien.',
    keywords: [
        'KFZ Technik 22',
        'KFZ Werkstatt 1220 Wien',
        'KFZ Werkstatt Donaustadt',
        '§57a Pickerl',
        'Pickerl Prüfstelle Wien',
        'KFZ Service Wien',
        'Auto Reparatur 1220 Wien',
        'Bremsen Service Wien 22',
        'Reifen Service Donaustadt',
        'Ölservice Wien 22',
        'Klimaservice Wien',
        'Zahnriemen Wien',
        'Eipeldauer Straße KFZ',
    ],
    authors: [{ name: 'KFZ Technik 22' }],
    creator: 'SunByte',
    publisher: 'KFZ Technik 22',
    formatDetection: {
        telephone: true,
        email: true,
        address: true,
    },
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
        ],
        apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
    },
    openGraph: {
        type: 'website',
        locale: 'de_AT',
        siteName: 'KFZ Technik 22',
        title: 'KFZ Technik 22 – Meisterbetrieb & §57a Pickerl-Prüfstelle | 1220 Wien',
        description: 'Ihre Werkstatt im 22. Bezirk Wien: Service, Reparatur, Diagnose, §57a Pickerl. Faire Preise, persönlicher Service, 15+ Jahre Erfahrung.',
        url: SITE_URL,
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'KFZ Technik 22 – Werkstatt & §57a Pickerl-Prüfstelle in 1220 Wien',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'KFZ Technik 22 – Werkstatt & Pickerl-Prüfstelle 1220 Wien',
        description: 'Ihre Werkstatt im 22. Bezirk Wien: Service, Reparatur, Diagnose, §57a Pickerl.',
        images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="de">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
