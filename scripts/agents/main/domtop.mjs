// Enfants directs de <body> et de #main dans un DOM figé (reference/dom/<page>/<w>.html) ou une URL. Usage : node domtop.mjs <fichier|url>
import fs from 'node:fs'; import { launch } from '../../lib/harness.mjs';
const src = process.argv[2]; const b = await launch({ webgl: false }); const ctx = await b.newContext({ javaScriptEnabled: src.startsWith('http') }); const p = await ctx.newPage();
if (src.startsWith('http')) await p.goto(src, { waitUntil: 'load' }); else { await ctx.route('**/*', (r) => r.abort()); await p.setContent(fs.readFileSync(src, 'utf8')); }
console.log(await p.evaluate(() => { const d = (e) => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (e.className && typeof e.className === 'string' ? '.' + e.className.split(' ').slice(0, 2).join('.') : '') + ` [${[...e.attributes].map((a) => a.name).join(',')}] (${e.querySelectorAll('*').length})`; return ['BODY', ...[...document.body.children].map(d), 'MAIN', ...[...(document.getElementById('main')?.children || [])].map(d)].join('\n'); }));
await b.close();
