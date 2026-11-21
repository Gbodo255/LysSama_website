'use client';
// Fenêtre vidéo YouTube (D-024) — « Play Reel » de l'accueil (J_la0crrN, calque « Play becomes active here » → overlay.toggle()),
// « Play Film » des pages projet. Portail dans #template-overlay (sinon #overlay, sinon body), défilement bloqué
// (blockDocumentScrolling), Échap et clic sur le fond ferment ; fond : opacité 0 → 1, 0,46 s [.4,0,.2,1] ; lecteur :
// translate(-50%,-50%), opacité 0 → 1, 0,6 s [.4,0,.2,1]. Lecteur = composant YouTube de Framer (YouTube.BccqSYT9.mjs `y`) :
// article relatif (rayon, translateZ) + iframe embed avec iv_load_policy=3, rel=0, modestbranding=1, playsinline=1,
// autoplay=1 (play On), color=white (isRed false), sans mute (shouldMute false).
import { AnimatePresence, motion } from 'motion/react';
import { createElement, useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type V = { url: string; radius: number; overlayCls: string; overlayName?: string; videoCls: string; videoName?: string; nested?: boolean };
const ABS = { position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' } as const;

function embed(url: string) {
  const u = new URL(url), id = u.searchParams.get('v') || u.pathname.split('/').pop() || '';
  const e = new URL(`https://www.youtube.com/embed/${id}`), p = e.searchParams;
  for (const [k, v] of u.searchParams) p.set(k, v);
  p.set('iv_load_policy', '3'); p.set('rel', '0'); p.set('modestbranding', '1'); p.set('playsinline', '1'); p.set('autoplay', '1'); p.set('color', 'white');
  return e.href;
}

export function VideoTrigger({ as, video, children, ...rest }: { as: string; video: V; children?: ReactNode } & Record<string, unknown>) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement, prev = html.style.overflow;
    html.style.overflow = 'hidden';
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keyup', k);
    return () => { html.style.overflow = prev; window.removeEventListener('keyup', k); };
  }, [open]);
  const host = typeof document !== 'undefined' ? document.getElementById('template-overlay') ?? document.getElementById('overlay') ?? document.body : null;
  const root = typeof document !== 'undefined' ? document.querySelector('[data-framer-root]')?.className ?? '' : '';
  const ease = [0.4, 0, 0.2, 1] as [number, number, number, number];
  const player = (
              <motion.div key="video" className={`${root} ${video.videoCls}`} data-framer-name={video.videoName} {...{ name: video.videoName }}
                transformTemplate={(_, t) => `translate(-50%, -50%) ${t === 'none' ? '' : t}`.trim()}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0, duration: 0.6, ease, type: 'tween' }}>
                <article role="presentation" style={{ position: 'relative', width: '100%', height: '100%', borderRadius: `${video.radius}px`, transform: video.radius ? 'translateZ(0.000001px)' : 'unset', cursor: 'pointer', overflow: 'hidden' }}>
                  <link rel="dns-prefetch" href="https://i.ytimg.com" /><link rel="preconnect" href="https://www.youtube.com" /><link rel="dns-prefetch" href="https://www.google.com" />
                  <iframe style={ABS} title="Youtube Video" allow="presentation; fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" src={embed(video.url)} frameBorder="0" />
                </article>
              </motion.div>
  );
  return (
    <>
      {createElement(motion[as as 'div'] ?? motion.div, { ...rest, onTap: () => setOpen((o) => !o) }, children)}
      {host && createPortal(
        <AnimatePresence>
          {open && (
            <>
              {/* pages projet : lecteur enfant du fond ; accueil : frères */}
              <motion.div key="bg" className={`${root} ${video.overlayCls}`} data-framer-name={video.overlayName} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ delay: 0, duration: 0.46, ease, type: 'tween' }} onTap={() => setOpen(false)}>{video.nested && player}</motion.div>
              {!video.nested && player}
            </>
          )}
        </AnimatePresence>, host)}
    </>
  );
}
