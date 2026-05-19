// BreadcrumbList JSON-LD - helps Google show breadcrumb navigation in search results.

const SITE_URL = 'https://kfz-technik-22.at'

type Crumb = { name: string; path: string }

export default function BreadcrumbListJsonLd({ crumbs }: { crumbs: Crumb[] }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: crumb.name,
            item: `${SITE_URL}${crumb.path}`,
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
