# Brand Logos

SVG-Dateien für die Auto-Marken im Marquee unter dem Hero.

## Wie einbinden

1. SVG hier ablegen, z.B. `vw.svg`, `audi.svg`, `bmw.svg`.
2. In `components/BrandMarquee.tsx` beim jeweiligen Brand `logo: '/brands/vw.svg'` setzen:

```ts
{ name: 'VW', logo: '/brands/vw.svg' },
```

Solange `logo` leer ist, rendert die Komponente einen Text-Pill als Fallback.

## Hinweise

- Bevorzugt SVG (skaliert beliebig). PNG geht auch, aber dann Höhe ~64-80 px liefern.
- Einfarbig oder dunkel/neutral — das CSS legt `grayscale` + `opacity-70` drüber und zeigt bei Hover die Originalfarbe.
- Markenrechte: Auto-Hersteller-Logos sind geschützt. Für eine Werkstatt-Website "wir warten alle Marken" ist die Nutzung als Hinweis auf Service-Kompetenz in der Regel zulässig, im Zweifel beim WKO / Anwalt klären.
