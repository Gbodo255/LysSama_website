'use client';
// « Video Mirror » (composant de code de l'auteur, module koAJndPrk `K`, porté tel quel) : recopie dans un canvas la plus
// grande vidéo de la page (hors de lui-même) qui joue, en « cover » ; affiche l'affiche (poster prop ou poster de la vidéo)
// jusqu'à 400 ms après la première image dessinée. Site publié : jamais le canevas de l'éditeur (A.current() !== canvas).
import { useEffect, useRef, useState, type CSSProperties } from 'react';

type Poster = { src?: string; srcSet?: string; alt?: string } | undefined;

export function VideoMirror({ sourceMode = 'auto', selector = '', radius = 12, poster, style }: { sourceMode?: string; selector?: string; radius?: number; poster?: Poster; style?: CSSProperties }) {
  const d = useRef<HTMLDivElement>(null), f = useRef<HTMLCanvasElement>(null);
  const [p, h] = useState(false), [g, _] = useState(false), [v, y] = useState(false);
  useEffect(() => { if (!g) return; const e = window.setTimeout(() => y(true), 400); return () => window.clearTimeout(e); }, [g]);
  const [b, x] = useState('');
  const S = useRef(false);
  const C = (e: boolean) => { S.current = e; h(e); };
  useEffect(() => {
    const e = d.current, i = f.current; if (!e || !i) return;
    const a = i.getContext('2d'); if (!a) return;
    let o = false, s: HTMLVideoElement | null = null, c: number | null = null, l: number | null = null, u: number | undefined, pT: number | undefined, m = true, hh = 0, gg = false;
    const find = (): HTMLVideoElement | null => {
      if (sourceMode === 'selector' && selector) { const el = document.querySelector(selector); return el instanceof HTMLVideoElement ? el : null; }
      const t = Array.from(document.querySelectorAll('video')).filter((t) => !e.contains(t)); if (!t.length) return null;
      const area = (z: HTMLVideoElement) => z.clientWidth * z.clientHeight;
      const pl = t.filter((z) => !z.paused && !z.ended && z.readyState >= 2 && z.videoWidth > 0).sort((z, w) => area(w) - area(z));
      return pl.length ? pl[0] : t.filter((z) => z.readyState >= 2 && z.videoWidth > 0).sort((z, w) => area(w) - area(z))[0] || null;
    };
    const size = () => { const n = e.getBoundingClientRect(), r = Math.min(window.devicePixelRatio || 1, 2), w = Math.max(1, Math.round(n.width * r)), H = Math.max(1, Math.round(n.height * r)); if (i.width !== w || i.height !== H) { i.width = w; i.height = H; } };
    const draw = () => {
      if (!s || s.readyState < 2) return;
      const vw = s.videoWidth, vh = s.videoHeight; if (!vw || !vh) return;
      hh = performance.now();
      const n = i.width, r = i.height, k = Math.max(n / vw, r / vh), cw = n / k, ch = r / k, sx = (vw - cw) / 2, sy = (vh - ch) / 2;
      try { a.drawImage(s, sx, sy, cw, ch, 0, 0, n, r); if (!gg) { gg = true; _(true); } } catch { /* vidéo non dessinable */ }
    };
    const T = () => { if (o || !s) return; const z = s as HTMLVideoElement & { requestVideoFrameCallback?: (cb: () => void) => number }; if (typeof z.requestVideoFrameCallback === 'function') c = z.requestVideoFrameCallback(E); else l = window.requestAnimationFrame(() => { window.setTimeout(E, 16); }); };
    const E = () => { if (o) return; if (!s || !document.contains(s)) { s = null; O(); } else { if (m) draw(); T(); } };
    const D = (z: HTMLVideoElement) => {
      try { const t = z.poster || z.getAttribute('poster') || ''; if (t) x(t); } catch { /* */ }
      const zz = s as (HTMLVideoElement & { cancelVideoFrameCallback?: (n: number) => void }) | null;
      if (c != null && zz && typeof zz.cancelVideoFrameCallback === 'function') { try { zz.cancelVideoFrameCallback(c); } catch { /* */ } c = null; }
      s = z; C(false); size(); draw(); T();
    };
    const O = (t0 = performance.now()) => { if (o || s) return; const n = find(); if (n) D(n); else { if (performance.now() - t0 > 1e4) C(true); u = window.setTimeout(() => O(t0), S.current ? 1e3 : 250); } };
    const K = () => { if (o) return; if (s && (!document.contains(s) || performance.now() - hh > 2e3)) { const z = find(); if (z && z !== s) D(z); else if (!document.contains(s)) { s = null; O(); } } pT = window.setTimeout(K, 800); };
    pT = window.setTimeout(K, 800);
    const ro = new ResizeObserver(() => { size(); draw(); }); ro.observe(e);
    const io = new IntersectionObserver((z) => { m = z.some((q) => q.isIntersecting); }, { threshold: 0 }); io.observe(e);
    size(); O();
    return () => {
      o = true; if (u !== undefined) window.clearTimeout(u); if (pT !== undefined) window.clearTimeout(pT); if (l != null) cancelAnimationFrame(l);
      const zz = s as (HTMLVideoElement & { cancelVideoFrameCallback?: (n: number) => void }) | null;
      if (c != null && zz && typeof zz.cancelVideoFrameCallback === 'function') try { zz.cancelVideoFrameCallback(c); } catch { /* */ }
      ro.disconnect(); io.disconnect();
    };
  }, [sourceMode, selector]);
  const src = poster?.src || b, showImg = !!src && (p || !v);
  return (
    <div ref={d} style={{ ...style, width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: radius, background: '#000' }}>
      {showImg ? <img src={src} srcSet={(poster?.src && poster.srcSet) || undefined} alt={poster?.alt || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }} /> : null}
      <canvas ref={f} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
    </div>
  );
}
