// Generates favicon.svg, apple-icon.png and og-image.png in /public.
// Run: node scripts/generate-assets.js
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const PUBLIC = path.join(__dirname, '..', 'public')

// ---------- Favicon (SVG, scalable) ----------
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#1e293b"/>
  <rect x="8" y="8" width="48" height="48" rx="10" fill="#ffd100"/>
  <text x="32" y="40" font-family="Arial Black, sans-serif" font-size="22" font-weight="900" text-anchor="middle" fill="#1e293b" letter-spacing="-1">22</text>
  <circle cx="32" cy="14" r="2.5" fill="#1e293b"/>
</svg>`

fs.writeFileSync(path.join(PUBLIC, 'favicon.svg'), faviconSvg)
console.log('✓ favicon.svg written')

// ---------- Apple Touch Icon (180x180 PNG) ----------
const appleIconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="40" fill="#1e293b"/>
  <rect x="22" y="22" width="136" height="136" rx="28" fill="#ffd100"/>
  <text x="90" y="115" font-family="Arial Black, sans-serif" font-size="64" font-weight="900" text-anchor="middle" fill="#1e293b" letter-spacing="-3">22</text>
  <circle cx="90" cy="40" r="6" fill="#1e293b"/>
  <text x="90" y="155" font-family="Arial Black, sans-serif" font-size="11" font-weight="900" text-anchor="middle" fill="#1e293b" letter-spacing="2">KFZ TECHNIK</text>
</svg>`

;(async () => {
    await sharp(Buffer.from(appleIconSvg))
        .resize(180, 180)
        .png()
        .toFile(path.join(PUBLIC, 'apple-icon.png'))
    console.log('✓ apple-icon.png written (180×180)')

    // ---------- 32x32 PNG fallback for older browsers ----------
    await sharp(Buffer.from(faviconSvg))
        .resize(32, 32)
        .png()
        .toFile(path.join(PUBLIC, 'favicon.png'))
    console.log('✓ favicon.png written (32×32 fallback)')

    // ---------- OG-Image (1200x630 PNG) ----------
    const ogImageSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <!-- Background gradient (light slate) -->
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#f8fafc"/>
      <stop offset="1" stop-color="#e2e8f0"/>
    </linearGradient>
    <linearGradient id="dark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1e293b"/>
      <stop offset="1" stop-color="#0f172a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.2" r="0.5">
      <stop offset="0" stop-color="#ffd100" stop-opacity="0.25"/>
      <stop offset="1" stop-color="#ffd100" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Dark sidebar block -->
  <rect x="0" y="0" width="14" height="630" fill="#ffd100"/>

  <!-- Top trust badge -->
  <g transform="translate(80, 90)">
    <rect width="320" height="40" rx="20" fill="#dcfce7" stroke="#86efac" stroke-width="1"/>
    <circle cx="22" cy="20" r="5" fill="#10b981"/>
    <text x="40" y="26" font-family="Arial, sans-serif" font-size="13" font-weight="900" fill="#047857" letter-spacing="2.5">EIPELDAUER STR. 43 · DONAUSTADT</text>
  </g>

  <!-- Main heading -->
  <g transform="translate(80, 180)">
    <text font-family="Arial Black, sans-serif" font-weight="900" fill="#1e293b" letter-spacing="-2">
      <tspan x="0" y="60" font-size="62">KFZ-WERKSTATT</tspan>
      <tspan x="0" y="125" font-size="48">&amp; §57a PICKERL-PRÜFSTELLE</tspan>
    </text>

    <!-- Highlight pill -->
    <g transform="translate(0, 160)">
      <rect width="280" height="80" rx="12" fill="#ffd100" transform="rotate(-1.5)"/>
      <text x="140" y="55" font-family="Arial Black, sans-serif" font-size="48" font-weight="900" fill="#1e293b" text-anchor="middle" letter-spacing="-2" transform="rotate(-1.5 140 40)">1220 WIEN</text>
    </g>
  </g>

  <!-- Subline -->
  <text x="80" y="470" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="#64748b">Ihr Meisterbetrieb in der Donaustadt — Service, Reparatur, Diagnose &amp; Pickerl.</text>

  <!-- Logo block bottom-right -->
  <g transform="translate(960, 410)">
    <rect width="160" height="160" rx="32" fill="url(#dark)"/>
    <rect x="20" y="20" width="120" height="120" rx="22" fill="#ffd100"/>
    <text x="80" y="105" font-family="Arial Black, sans-serif" font-size="58" font-weight="900" text-anchor="middle" fill="#1e293b" letter-spacing="-3">22</text>
    <text x="80" y="135" font-family="Arial Black, sans-serif" font-size="10" font-weight="900" text-anchor="middle" fill="#1e293b" letter-spacing="1.8">KFZ TECHNIK</text>
  </g>

  <!-- Bottom info bar -->
  <g transform="translate(80, 555)">
    <text font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="#475569" letter-spacing="3">
      <tspan x="0" y="0">+43 1 2561822</tspan>
      <tspan x="190" y="0" fill="#94a3b8">·</tspan>
      <tspan x="220" y="0">15+ JAHRE ERFAHRUNG</tspan>
      <tspan x="475" y="0" fill="#94a3b8">·</tspan>
      <tspan x="505" y="0">FAIRE PREISE</tspan>
    </text>
  </g>
</svg>`

    await sharp(Buffer.from(ogImageSvg))
        .resize(1200, 630)
        .png()
        .toFile(path.join(PUBLIC, 'og-image.png'))
    console.log('✓ og-image.png written (1200×630)')

    console.log('\nAll assets generated in /public/')
})().catch((err) => {
    console.error(err)
    process.exit(1)
})
