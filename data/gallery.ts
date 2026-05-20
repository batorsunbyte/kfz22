// Gallery image data — Zakir replaces placeholder entries with real photos.
//
// To add a real photo:
//   1. Drop the image file into /public/gallery/  (e.g. public/gallery/werkstatt-1.jpg)
//   2. Set `placeholder: false` and update `src` to '/gallery/werkstatt-1.jpg'
//   3. Update `alt` with a meaningful, SEO-friendly description (German preferred — KFZ Wien Werkstatt …)
//
// Recommended dimensions: 1600×1200 (4:3) or 1920×1080 (16:9). Keep under 300 KB per image.
// On the home teaser, the first 4 entries are shown.

export type GalleryItem = {
    /** path under /public, e.g. '/gallery/werkstatt-1.jpg' — ignored when placeholder is true */
    src: string
    /** alt text — drives accessibility AND image SEO */
    alt: string
    /** caption shown below image in lightbox */
    caption: string
    /** category — used later if/when filter tabs are introduced */
    category: 'werkstatt' | 'arbeit' | 'team'
    /** when true, render a styled "Foto folgt" placeholder instead of an <img> */
    placeholder: boolean
    /** featured items appear in the home teaser (first 4 by order) */
    featured?: boolean
}

export const galleryItems: readonly GalleryItem[] = [
    {
        src: '/gallery/werkstatt-1.jpg',
        alt: 'KFZ Technik 22 Werkstatt — Hebebühne und Diagnose-Bereich, 1220 Wien',
        caption: 'Unsere Werkstatt im 22. Bezirk',
        category: 'werkstatt',
        placeholder: true,
        featured: true,
    },
    {
        src: '/gallery/arbeit-1.jpg',
        alt: 'KFZ-Reparatur an einem Fahrzeug — Bremsenservice in 1220 Wien',
        caption: 'Bremsenservice in Aktion',
        category: 'arbeit',
        placeholder: true,
        featured: true,
    },
    {
        src: '/gallery/werkstatt-2.jpg',
        alt: 'Diagnose-Computer und Werkzeug-Wand bei KFZ Technik 22',
        caption: 'Moderne Diagnose-Technik',
        category: 'werkstatt',
        placeholder: true,
        featured: true,
    },
    {
        src: '/gallery/team-1.jpg',
        alt: 'Mitarbeiter von KFZ Technik 22 bei der Arbeit am Motor',
        caption: 'Unser Team bei der Arbeit',
        category: 'team',
        placeholder: true,
        featured: true,
    },
    {
        src: '/gallery/arbeit-2.jpg',
        alt: 'Pickerl-Begutachtung §57a in der KFZ Technik 22 Werkstatt',
        caption: '§57a Pickerl-Prüfung',
        category: 'arbeit',
        placeholder: true,
    },
    {
        src: '/gallery/werkstatt-3.jpg',
        alt: 'Kundenparkplätze und Eingang KFZ Technik 22, Eipeldauer Straße 43',
        caption: 'Eingangsbereich & Parkplätze',
        category: 'werkstatt',
        placeholder: true,
    },
    {
        src: '/gallery/arbeit-3.jpg',
        alt: 'Reifenservice — Reifenwechsel und Wuchten in 1220 Wien',
        caption: 'Reifenservice',
        category: 'arbeit',
        placeholder: true,
    },
    {
        src: '/gallery/team-2.jpg',
        alt: 'Persönliche Beratung am Empfang von KFZ Technik 22',
        caption: 'Beratung & Kostenvoranschlag',
        category: 'team',
        placeholder: true,
    },
] as const
