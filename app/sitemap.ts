import type { MetadataRoute } from 'next'

const SITE_URL = 'https://kfz-technik-22.at'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    return [
        {
            url: `${SITE_URL}/`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/kontakt`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/ueber-uns`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${SITE_URL}/galerie`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${SITE_URL}/impressum`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_URL}/datenschutz`,
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
