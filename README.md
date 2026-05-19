# KFZ Technik 22 — Werkstatt-Website (Wien 1220)

Statische Website für **KFZ Technik 22**, eine KFZ-Werkstatt und §57a Pickerl-Prüfstelle in der Eipeldauer Straße 43, 1220 Wien.

Gebaut von **SunByte** mit Next.js 14 (App Router, Static Export), TypeScript und Tailwind CSS.

## ✨ Features

- **Mehrsprachig** — Deutsch und Englisch (umschaltbar im Header)
- **Light + Dark Mode** — gespeichert pro Browser
- **3D-Auto-Animation** — scroll-gesteuert mit 50 Frames im Hero
- **6 Routen:**
  - `/` — Home mit Hero, Pricing, Services, About, Galerie-Teaser, FAQ, Kontakt
  - `/galerie` — Foto-Galerie mit Lightbox
  - `/ueber-uns` — Story, Werte, CTA
  - `/kontakt` — Termin-Buchung via Microsoft Bookings + Adresse + Hours
  - `/impressum` — österreichische Pflichtangaben (§5 ECG, §14 UGB, §25 MedienG)
  - `/datenschutz` — DSGVO-konforme Datenschutzerklärung
- **SEO** — JSON-LD (LocalBusiness/AutoRepair, FAQPage, BreadcrumbList), `sitemap.xml`, `robots.txt`, Per-Page Metadata
- **Cookie-Banner** — nur essentielle Cookies (kein Consent-Theater)
- **Statisch** — kein Server, kein Backend nötig (`output: 'export'`)

## 🛠️ Lokal entwickeln

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev          # http://localhost:3000

# Production-Build (entsteht in /out/)
npm run build

# Bundle-Analyzer
npm run analyze
```

## 📁 Wichtige Verzeichnisse

```
app/                  # Next.js App Router — pro Route ein Ordner
  galerie/            # Page-Konvention: page.tsx (server) + Content.tsx (client)
  impressum/
  ueber-uns/
  kontakt/
  datenschutz/
  layout.tsx          # Root layout + globale Metadata
  page.tsx            # Home
  sitemap.ts          # auto-generiert /sitemap.xml
  robots.ts           # auto-generiert /robots.txt

components/
  Navigation.tsx      # Sticky Header mit Sprach- und Theme-Toggle
  HeroHeader.tsx      # H1 + Trust-Badge oben
  ScrollCanvas3D.tsx  # 3D-Auto-Animation
  CookieBanner.tsx    # Bottom-Banner für Cookie-Hinweis
  Footer.tsx
  Lightbox.tsx        # Modal für Galerie
  JsonLd/             # Strukturierte Daten für Google
  sections/           # Home-Sections (Pricing, Services, FAQ, etc.)

data/
  gallery.ts          # Liste der Galerie-Bilder

translations/
  de.ts               # Deutsche Texte (primär)
  en.ts               # Englische Texte
  types.ts            # TypeScript-Interface

public/
  imgs/               # 50 JPG-Frames für 3D-Animation
  gallery/            # Werkstatt-Fotos (siehe README dort)
  sign.jpeg           # §57a Pickerl-Plakette
  favicon.svg / .png  # Browser-Tab-Icon
  apple-icon.png      # iOS Home-Screen
  og-image.png        # Social-Media-Preview (1200×630)

scripts/
  generate-assets.js  # Generiert Favicon + OG-Image neu
  optimize-jpgs.js    # Re-komprimiert JPGs mit mozjpeg
```

## 📸 Galerie-Bilder einbauen

Anleitung steht in [`public/gallery/README.md`](public/gallery/README.md). Kurz:

1. Bild in `public/gallery/` legen (z.B. `werkstatt-1.jpg`)
2. In [`data/gallery.ts`](data/gallery.ts) den passenden Eintrag bearbeiten:
   - `placeholder: false`
   - `src: '/gallery/werkstatt-1.jpg'`
   - `alt` und `caption` anpassen

## 🌐 Deployment auf GitHub Pages

Der Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) deployed automatisch bei jedem Push zu `main`:

1. In GitHub: Repository → Settings → Pages → Source: "GitHub Actions"
2. Push zu `main` → Workflow läuft → Site live unter `https://<username>.github.io/<repo>/`
3. Custom Domain: `public/CNAME` mit deiner Domain anlegen

## 🔧 Vor Live-Gang noch zu tun

- [ ] **Microsoft-Bookings-Link** in [`components/sections/ContactSection.tsx`](components/sections/ContactSection.tsx) (Variable `BOOKING_URL`)
- [ ] **Impressum-Daten** in [`app/impressum/ImpressumContent.tsx`](app/impressum/ImpressumContent.tsx): UID-Nummer, Firmenbuchnummer, Geschäftsführung
- [ ] **Domain** in [`app/layout.tsx`](app/layout.tsx) (`SITE_URL`), [`components/JsonLd/LocalBusiness.tsx`](components/JsonLd/LocalBusiness.tsx), [`components/JsonLd/BreadcrumbList.tsx`](components/JsonLd/BreadcrumbList.tsx), [`app/sitemap.ts`](app/sitemap.ts), [`app/robots.ts`](app/robots.ts)
- [ ] **Echte Werkstatt-Fotos** in `public/gallery/`
- [ ] **Geo-Koordinaten** in [`components/JsonLd/LocalBusiness.tsx`](components/JsonLd/LocalBusiness.tsx) (für Google Maps)

## 🎨 Branding

| | |
|---|---|
| Primary-Akzent | `#ffd100` (Gold-Gelb) |
| Sekundär-Akzent | `emerald-500/600` (Smaragdgrün) |
| Dark Slate | `#1e293b` |
| Schrift | Inter (via `next/font/google`) |

Farben in [`tailwind.config.js`](tailwind.config.js) und [`app/globals.css`](app/globals.css).

## 📞 Kontakt

KFZ Technik 22, Eipeldauer Str. 43, 1220 Wien — `+43 1 2561822` — info@kfztechnik22.at

Website-Entwicklung: SunByte
