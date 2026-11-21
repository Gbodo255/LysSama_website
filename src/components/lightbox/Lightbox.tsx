'use client';
// Lightbox Framer (prop `lightbox` des images : projets `framer-8k5osh`, /studio `framer-1frrzdj`/`framer-1jz2epk`).
// Structure et minutage relevés sur l'original (reference/agents/main/lightbox-ref.json, scripts/agents/main/lightbox-probe.mjs) :
// portail dans #template-overlay ; fond fixe z 10 (classes de la racine de page), opacité 0 → 1 ; cadre centré inset = padding,
// largeur max maxWidth, rapport de l'image ; conteneur `framer-lightbox-container` (rayon de l'image d'origine) qui part du
// rectangle de l'image cliquée ; transition 0,6 s [.87,0,.13,1] ; fermeture Échap ou clic, animation inverse puis retrait.
// Délégation de clic sur les éléments porteurs (même réglage partout dans le code compilé) : aucun DOM ajouté à la page.
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const SELECTOR = '.framer-8k5osh, .framer-1frrzdj, .framer-1jz2epk';
const L = { backdrop: 'rgba(23, 22, 22, 0.75)', maxWidth: 1920, padding: 30, zIndex: 10 };
const T = { duration: 0.6, ease: [0.87, 0, 0.13, 1] as [number, number, number, number], type: 'tween' as const };
type Open = { src: string; alt: string; ratio: number; radius: string; root: string; from: { x: number; y: number; w: number } };

// Rectangle final du conteneur (mise en page de l'original : cadre inset = padding, largeur ≤ maxWidth, hauteur ≤ cadre)
function finalRect(ratio: number) {
  const W = innerWidth - 2 * L.padding, H = innerHeight - 2 * L.padding;
  const ch = Math.min(Math.min(W, L.maxWidth) / ratio, H), cw = ch * ratio;
  return { x: L.padding + (W - cw) / 2, y: L.padding + (H - ch) / 2, w: cw, h: ch };
}

// Classes de la racine de page sans la dernière (classe de breakpoint, qui impose la largeur de page) — DOM mesuré.
const rootClasses = () => (document.querySelector('[data-framer-root]')?.className || '').split(/\s+/).filter(Boolean).slice(0, -1).join(' ');

export function LightboxHost() {
  const [open, setOpen] = useState<Open | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.(SELECTOR) as HTMLElement | null; if (!el) return;
      const img = el.querySelector('img'); if (!img) return;
      const r = el.getBoundingClientRect();
      const o = { src: img.currentSrc || img.src, alt: img.alt, ratio: r.width / (r.height || 1), radius: getComputedStyle(el).borderRadius, root: rootClasses(), from: { x: r.x, y: r.y, w: r.width } };
      // l'original attend le décodage de l'image (Promise) avant d'ouvrir : ouverture à l'image suivante (mesuré : rien à t = 0)
      requestAnimationFrame(() => { setOpen(o); setShown(true); });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  useEffect(() => {
    if (!shown) return;
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); requestAnimationFrame(() => setShown(false)); } };
    window.addEventListener('keyup', k); return () => window.removeEventListener('keyup', k);
  }, [shown]);
  const host = typeof document !== 'undefined' ? document.getElementById('template-overlay') ?? document.getElementById('overlay') ?? document.body : null;
  if (!host || !open) return null;
  const f = finalRect(open.ratio), k = open.from.w / f.w;
  // départ : centre et largeur de l'image cliquée (origine de transformation au centre)
  const dx = open.from.x + open.from.w / 2 - (f.x + f.w / 2), dy = open.from.y + (open.from.w / open.ratio) / 2 - (f.y + f.h / 2);
  const start = { transform: `translate(${dx}px, ${dy}px) scale(${k})` }, end = { transform: 'translate(0px, 0px) scale(1)' };
  return createPortal(
    <AnimatePresence onExitComplete={() => setOpen(null)}>
      {shown && (
        <motion.div key="bg" onClick={() => requestAnimationFrame(() => setShown(false))} className={open.root} style={{ position: 'fixed', inset: 0, zIndex: L.zIndex, backgroundColor: L.backdrop, willChange: 'transform' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={T} />
      )}
      {shown && (
          <div key="frame" className={open.root} style={{ alignItems: 'center', display: 'flex', inset: L.padding, justifyContent: 'center', pointerEvents: 'none', position: 'fixed', zIndex: L.zIndex }}>
            <div style={{ alignItems: 'center', aspectRatio: `${open.ratio} / 1`, display: 'flex', justifyContent: 'center', maxHeight: '100%', position: 'relative', width: '100%', maxWidth: L.maxWidth }}>
              <motion.div className="framer-lightbox-container" style={{ aspectRatio: `${open.ratio} / 1`, bottom: 0, position: 'absolute', top: 0, userSelect: 'none', imageRendering: 'auto', filter: 'none', borderRadius: open.radius, transformOrigin: '50% 50% 0px' }}
                initial={start} animate={end} exit={start} transition={T}>
                <div style={{ position: 'absolute', borderRadius: 'inherit', inset: 0 }}>
                  <img src={open.src} alt={open.alt} style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectPosition: 'center center', objectFit: 'cover' }} />
                </div>
              </motion.div>
            </div>
          </div>
      )}
    </AnimatePresence>, host);
}
