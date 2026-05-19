// FAQPage JSON-LD - shows expandable Q&A blocks directly in Google search results.

type Faq = { question: string; answer: string }

export default function FaqPageJsonLd({ items }: { items: readonly Faq[] }) {
    const data = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    )
}
