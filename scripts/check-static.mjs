import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import assert from 'node:assert/strict';

const base = process.env.PAGES_BASE_PATH ?? '/portfolio';
const html = readFileSync('build/index.html', 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));

for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(ids.has(match[1]), `Missing anchor: ${match[1]}`);

// Check for key content in the new structure
for (const text of [
  'WTC Connect',
  'Vigia de Queimadas',
  'Plataforma Crediclass',
  'Solo Vivo',
  'Fintech Bank',
  'Sistema ESG',
  'Highlands Camps Brasil',
  'Crediclass',
  'Curva',
  'Tata Consultancy Services',
  'Golden Tulip',
  'Exército Brasileiro',
  'FIAP',
  'Entender antes',
  'Fora do editor',
  'Tem algo interessante',
]) assert(html.includes(text), `Missing content: ${text}`);

for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
  const url = match[1];
  if (/^(https?:|mailto:|data:)/.test(url)) continue;
  // Allow relative paths (starting with ./) and absolute paths with base
  if (url.startsWith('./')) continue;
  assert(url.startsWith(`${base}/`), `Asset/link outside base: ${url}`);
  assert(existsSync(resolve('build', url.slice(base.length + 1))), `Missing file: ${url}`);
}

function checkCss(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) checkCss(path);
    else if (path.endsWith('.css')) for (const match of readFileSync(path, 'utf8').matchAll(/url\(["']?([^\s)'";]+)["']?\)/g)) {
      const url = match[1];
      if (/^(data:|https?:|#)/.test(url)) continue;
      const target = url.startsWith('/') ? resolve('build', url.slice(base.length + 1)) : resolve(dirname(path), url);
      assert(existsSync(target), `Missing CSS asset: ${url}`);
    }
  }
}
checkCss('build');

assert(readFileSync('build/resume.pdf').equals(readFileSync('Gustavo-Siqueira- (atual).pdf')), 'Resume changed');
// Social image is optional
if (existsSync('build/social.png')) {
  assert(html.includes(`${base}/social.png`), 'Open Graph base mismatch');
}
assert(!html.includes('href="#"'), 'Placeholder link');
console.log(`Static output verified at ${base || '/'}: content, anchors, assets, fonts, Open Graph and exact resume.`);