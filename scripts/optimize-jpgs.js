// Re-compress JPGs in /public/imgs using sharp's mozjpeg encoder.
// Writes to a temp file, then atomically replaces only when smaller than original.
// Run: node scripts/optimize-jpgs.js
const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const SRC_DIR = path.join(__dirname, '..', 'public', 'imgs')
const QUALITY = 80

async function optimize() {
    const files = fs.readdirSync(SRC_DIR).filter((f) => f.toLowerCase().endsWith('.jpg'))
    console.log(`Re-compressing ${files.length} JPGs with mozjpeg @ Q${QUALITY}...`)

    let totalOriginalBytes = 0
    let totalNewBytes = 0
    let replaced = 0

    for (const file of files) {
        const jpgPath = path.join(SRC_DIR, file)
        const tmpPath = jpgPath + '.tmp'

        const originalBytes = fs.statSync(jpgPath).size
        totalOriginalBytes += originalBytes

        await sharp(jpgPath)
            .jpeg({ quality: QUALITY, mozjpeg: true })
            .toFile(tmpPath)

        const newBytes = fs.statSync(tmpPath).size

        if (newBytes < originalBytes) {
            fs.renameSync(tmpPath, jpgPath)
            totalNewBytes += newBytes
            replaced += 1
            const pct = ((1 - newBytes / originalBytes) * 100).toFixed(0)
            console.log(`  ${file}  ${(originalBytes / 1024).toFixed(0)}kB → ${(newBytes / 1024).toFixed(0)}kB  (-${pct}%)`)
        } else {
            fs.unlinkSync(tmpPath)
            totalNewBytes += originalBytes
            console.log(`  ${file}  kept original (mozjpeg result was larger)`)
        }
    }

    console.log('---')
    console.log(`Replaced: ${replaced}/${files.length}`)
    console.log(`Total before: ${(totalOriginalBytes / 1024).toFixed(0)} kB`)
    console.log(`Total after:  ${(totalNewBytes / 1024).toFixed(0)} kB`)
    if (totalOriginalBytes > 0) {
        console.log(`Saved: ${((1 - totalNewBytes / totalOriginalBytes) * 100).toFixed(0)}%`)
    }
}

optimize().catch((err) => {
    console.error(err)
    process.exit(1)
})
