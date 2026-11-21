'use client';
// Effet de texte Framer (`effect` d'un RichText : reference/framer/fx.json). Même découpage que l'original
// (mots séparés par un nœud « » : <span white-space:nowrap> ; caractères : <span display:inline-block>), même état
// de départ, même minutage : délai = startDelay + rang du jeton (ligne, mot ou caractère) × transition.delay.
// Déclencheur onInView (IntersectionObserver, seuil `threshold`) ou au montage ; `repeat` rejoue à chaque entrée.
import { animate } from 'motion';
import { createElement, useEffect, useRef, type CSSProperties } from 'react';

type From = { opacity?: number; x?: number; y?: number; scale?: number; rotate?: number; skewX?: number; skewY?: number };
export type TextEffect = {
  effect: From; startDelay?: number; threshold?: number; repeat?: boolean; trigger?: string; type?: string;
  tokenization: 'line' | 'word' | 'character' | 'element';
  transition: { delay?: number; duration?: number; ease?: number[]; type?: string; stiffness?: number; damping?: number; mass?: number; bounce?: number };
};
export type FxPara = { tag: string; attrs: Record<string, unknown>; text: string };

const tf = (f: From) => `translateX(${f.x ?? 0}px) translateY(${f.y ?? 0}px) scale(${f.scale ?? 1}) rotate(${f.rotate ?? 0}deg) skewX(${f.skewX ?? 0}deg) skewY(${f.skewY ?? 0}deg)`;

export function TextFx({ as, fx, paras, ...rest }: { as: string; fx: TextEffect; paras: FxPara[] } & Record<string, unknown>) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const from = fx.effect;
    const t = fx.transition || {};
    const reset = (spans: HTMLElement[]) => spans.forEach((s) => { s.style.opacity = String(from.opacity ?? 1); s.style.transform = tf(from); });
    let controls: { stop: () => void }[] = [];
    const play = () => {
      const chars = [...root.querySelectorAll<HTMLElement>('span[data-fx-char]')];
      // rang de chaque caractère selon la tokenisation
      const rank = new Map<HTMLElement, number>();
      if (fx.tokenization === 'line') {
        const tops: number[] = [];
        for (const c of chars) { const top = Math.round((c.parentElement as HTMLElement).offsetTop); let i = tops.indexOf(top); if (i < 0) { tops.push(top); i = tops.length - 1; } rank.set(c, i); }
      } else if (fx.tokenization === 'word') {
        const words = [...new Set(chars.map((c) => c.parentElement))]; chars.forEach((c) => rank.set(c, words.indexOf(c.parentElement)));
      } else if (fx.tokenization === 'element') chars.forEach((c) => rank.set(c, 0));
      else chars.forEach((c, i) => rank.set(c, i));
      const base = { duration: t.duration, ease: t.ease as [number, number, number, number] | undefined, type: t.type === 'spring' ? 'spring' : undefined, stiffness: t.stiffness, damping: t.damping, mass: t.mass, bounce: t.bounce };
      controls = chars.map((c) => animate(c, {
        opacity: [from.opacity ?? 1, 1], x: [from.x ?? 0, 0], y: [from.y ?? 0, 0], scale: [from.scale ?? 1, 1], rotate: [from.rotate ?? 0, 0], skewX: [from.skewX ?? 0, 0], skewY: [from.skewY ?? 0, 0],
      }, { ...base, delay: (fx.startDelay ?? 0) + (rank.get(c) ?? 0) * (t.delay ?? 0) } as never));
    };
    if (fx.trigger !== 'onInView') { play(); return () => controls.forEach((c) => c.stop()); }
    const io = new IntersectionObserver((es) => {
      for (const e of es) {
        if (e.isIntersecting) { play(); if (!fx.repeat) io.disconnect(); }
        else if (fx.repeat) { controls.forEach((c) => c.stop()); reset([...root.querySelectorAll<HTMLElement>('span[data-fx-char]')]); }
      }
    }, { threshold: fx.threshold ?? 0 });
    io.observe(root);
    return () => { io.disconnect(); controls.forEach((c) => c.stop()); };
  }, [fx]);
  const init: CSSProperties = { display: 'inline-block', opacity: fx.effect.opacity ?? 1, transform: tf(fx.effect) };
  return createElement(as, { ...rest, ref }, paras.map((p, i) => createElement(p.tag, { key: i, ...p.attrs },
    p.text.split(' ').flatMap((w, j) => [j ? ' ' : null, <span key={j} style={{ whiteSpace: 'nowrap' }}>{[...w].map((c, k) => <span key={k} data-fx-char="" style={init}>{c}</span>)}</span>]))));
}
