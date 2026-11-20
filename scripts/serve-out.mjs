// Serveur statique local du clone (dossier out/ produit par `next build`), avec 404 native et requêtes Range.
// Usage : node scripts/serve-out.mjs [--port=4173]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const port = +((process.argv.find((a) => a.startsWith('--port=')) || '').split('=')[1] || 4173);
const OUT = path.resolve('out');
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.avif': 'image/avif', '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.woff': 'font/woff', '.ttf': 'font/ttf', '.mp4': 'video/mp4', '.webm': 'video/webm', '.txt': 'text/plain', '.xml': 'application/xml' };

function resolve(urlPath) {
  const p = decodeURIComponent(urlPath.split('?')[0]);
  const safe = path.normalize(p).replace(/^(\.\.[/\\])+/, '');
  const cands = [path.join(OUT, safe), path.join(OUT, safe + '.html'), path.join(OUT, safe, 'index.html')];
  return cands.find((c) => c.startsWith(OUT) && fs.existsSync(c) && fs.statSync(c).isFile());
}

http.createServer((req, res) => {
  let file = resolve(req.url);
  let status = 200;
  if (!file) { file = path.join(OUT, '404.html'); status = 404; }
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end('not found'); }
  const size = fs.statSync(file).size;
  const type = TYPES[path.extname(file)] || 'application/octet-stream';
  const range = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
  if (range && status === 200) {
    const start = range[1] ? +range[1] : size - +range[2];
    const end = range[1] && range[2] ? Math.min(+range[2], size - 1) : size - 1;
    res.writeHead(206, { 'content-type': type, 'accept-ranges': 'bytes', 'content-range': `bytes ${start}-${end}/${size}`, 'content-length': end - start + 1 });
    return fs.createReadStream(file, { start, end }).pipe(res);
  }
  res.writeHead(status, { 'content-type': type, 'accept-ranges': 'bytes', 'content-length': size });
  fs.createReadStream(file).pipe(res);
}).listen(port, '127.0.0.1', () => console.log(`clone servi sur http://127.0.0.1:${port}`));
