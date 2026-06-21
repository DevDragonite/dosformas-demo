// Generates the PWA / favicon / apple-touch icon set for Dos Formas (Vite).
// Source of truth: public/logo-white.png  (white "DOS FORMAS" stacked wordmark)
//
// Vite has no file-based icon convention, so everything lands in public/ and is
// linked manually from index.html + manifest.json. The wordmark is centred on
// the brand pink; iOS fills transparency with black for home-screen icons, so
// every tile gets an opaque pink background.
//
//   node scripts/generate-pwa-icons.mjs
//
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'public', 'logo-white.png');
const BG = '#D94B7D';

mkdirSync(join(root, 'public', 'icons'), { recursive: true });

// Tight-trim the wordmark so it centres regardless of its source margins.
const art = await sharp(readFileSync(SRC)).trim().png().toBuffer();

// Centre the wordmark on a brand-pink square. `pad` (0-1) shrinks it inside the
// tile — larger for the maskable variant so Android masks never clip it.
async function tile(size, pad = 0.2) {
    const inner = Math.round(size * (1 - pad));
    const a = await sharp(art)
        .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .toBuffer();
    return sharp({
        create: { width: size, height: size, channels: 4, background: BG },
    })
        .composite([{ input: a, gravity: 'center' }])
        .flatten({ background: BG })
        .png()
        .toBuffer();
}

function buildIco(entries) {
    const count = entries.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(count, 4);
    const dir = Buffer.alloc(16 * count);
    let offset = 6 + 16 * count;
    entries.forEach((e, i) => {
        const o = i * 16;
        dir.writeUInt8(e.size >= 256 ? 0 : e.size, o);
        dir.writeUInt8(e.size >= 256 ? 0 : e.size, o + 1);
        dir.writeUInt8(0, o + 2);
        dir.writeUInt8(0, o + 3);
        dir.writeUInt16LE(1, o + 4);
        dir.writeUInt16LE(32, o + 6);
        dir.writeUInt32LE(e.buf.length, o + 8);
        dir.writeUInt32LE(offset, o + 12);
        offset += e.buf.length;
    });
    return Buffer.concat([header, dir, ...entries.map((e) => e.buf)]);
}

const out = (...p) => join(root, ...p);

const targets = [
    { file: out('public', 'apple-touch-icon.png'), size: 180 },
    { file: out('public', 'icons', 'icon-192.png'), size: 192 },
    { file: out('public', 'icons', 'icon-512.png'), size: 512 },
    { file: out('public', 'icons', 'icon-maskable-512.png'), size: 512, pad: 0.32 },
];

for (const t of targets) {
    writeFileSync(t.file, await tile(t.size, t.pad ?? 0.2));
    console.log('wrote', t.file.replace(root, '.'), `${t.size}px`);
}

const icoSizes = [16, 32, 48];
const icoEntries = await Promise.all(
    icoSizes.map(async (size) => ({ size, buf: await tile(size) })),
);
writeFileSync(out('public', 'favicon.ico'), buildIco(icoEntries));
console.log('wrote ./public/favicon.ico', icoSizes.join('/') + 'px');
