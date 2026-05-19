// AutoRepair JSON-LD (subtype of LocalBusiness) for Google's local SEO.
// Rendered in the static HTML — no client JS required.
// TODO: Verify GEO coordinates against the real address once available.

const SITE_URL = 'https://kfz22.com'

const data = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${SITE_URL}/#business`,
    name: 'KFZ Technik 22',
    alternateName: 'KFZ Technik 22 – Werkstatt & §57a Pickerl-Prüfstelle',
    description:
        'KFZ-Werkstatt und §57a Pickerl-Prüfstelle im 22. Bezirk Wien. Service, Reparatur, Diagnose, Bremsen, Reifen, Klima, Zahnriemen.',
    url: SITE_URL,
    telephone: '+43 1 2561822',
    email: 'info@kfztechnik22.at',
    priceRange: '€€',
    image: `${SITE_URL}/imgs/ezgif-frame-100.jpg`,
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Eipeldauer Str. 43',
        addressLocality: 'Wien',
        postalCode: '1220',
        addressRegion: 'Wien',
        addressCountry: 'AT',
    },
    geo: {
        '@type': 'GeoCoordinates',
        // Approximate coordinates for Eipeldauer Str. — replace with exact ones once verified
        latitude: 48.256088353684405,
        longitude:  16.441238526181778,
    },
    areaServed: [
        { '@type': 'City', name: 'Wien' },
        { '@type': 'AdministrativeArea', name: 'Donaustadt (22. Bezirk)' },
        { '@type': 'PostalCode', name: '1220' },
        { '@type': 'PostalCode', name: '1210' },
        { '@type': 'PostalCode', name: '1020' },
    ],
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
        },
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '09:00',
            closes: '14:00',
        },
    ],
    knowsAbout: [
        'Kfz-Service',
        'Pickerl §57a',
        'Bremsenservice',
        'Reifenservice',
        'Ölservice',
        'Klimaservice',
        'Zahnriemen',
        'Batterieservice',
        'Fahrzeugdiagnose',
        'Motorreparatur',
        'Elektronik-Diagnose',
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'KFZ-Werkstatt-Leistungen',
        itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Komplettservice' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ölservice' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Reifenservice' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '§57a Pickerl-Begutachtung' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bremsenservice' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Klimaservice' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zahnriemenservice' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Batterieservice' } },
        ],
    },
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+43 1 2561822',
        contactType: 'customer service',
        availableLanguage: ['de', 'en'],
        areaServed: 'AT',
    },
}

export default function LocalBusinessJsonLd() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
