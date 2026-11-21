'use client';
// « Revelo » (Text Reveal, composant de code du module d'accueil J_la0crrN `hf`, L.4472-4610), porté à l'identique avec la
// même bibliothèque : GSAP 3.13.0 (SplitText + ScrollTrigger embarqués dans l'original). Découpe lignes/mots/caractères,
// timeline fromTo avec stagger { amount, from }, masques ; déclenchement `scrub` (progression = défilement de la section
// entre `top <viewport>` et `bottom <viewport>`) ou `trigger`. Site publié : jamais l'aperçu du canevas (Oe() = false).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { Children, cloneElement, isValidElement, useEffect, useRef, type ReactElement, type ReactNode } from 'react';

gsap.registerPlugin(ScrollTrigger, SplitText);

type Prop = { from?: unknown; to?: unknown };
export type ReveloLayer = { delay?: number; duration?: number; ease?: string; mask?: string; origin?: string; stagger?: number } & Record<string, Prop | number | string | undefined>;
// Rendu des valeurs des contrôles (ff/df de l'original) : x, y en %, rotations/skew en deg, flou en px.
const RENDER: Record<string, (v: unknown) => unknown> = {
  x: (v) => `${v}%`, y: (v) => `${v}%`, rotate: (v) => `${v}deg`, skewX: (v) => `${v}deg`, skewY: (v) => `${v}deg`, filter: (v) => `blur(${v}px)`,
};
const CONTROLS = new Set(['color', 'textStrokeColor', 'textStrokeWidth', 'opacity', 'x', 'y', 'scaleX', 'scaleY', 'filter', 'rotate', 'skewX', 'skewY']);
// pf : propriétés animées d'une couche, valeur `from` ou `to`
function pf(e: ReveloLayer | undefined, t: 'from' | 'to' = 'from') {
  return e ? Object.fromEntries(Object.entries(e).filter(([k, v]) => v !== undefined && CONTROLS.has(k)).map(([k, v]) => [k, (RENDER[k] || ((x: unknown) => x))((v as Prop)[t])])) : {};
}
// mf : surcharge de l'overflow des masques
function mf(e: string | undefined, t: HTMLElement[]) {
  t.forEach((el) => {
    switch (e) {
      case 'false': el.style.removeProperty('overflow'); break;
      case 'x': el.style.removeProperty('overflow'); el.style.setProperty('overflow-x', 'clip'); break;
      case 'y': el.style.removeProperty('overflow'); el.style.setProperty('overflow-y', 'clip');
    }
  });
}

export function Revelo({ viewport, sectionCls, lines: n, words: i, chars: o, textComponent, type: u, replay: d }: {
  viewport: string; sectionCls: string; lines?: ReveloLayer; words?: ReveloLayer; chars?: ReveloLayer; textComponent: ReactNode; type: 'scrub' | 'trigger'; replay: boolean;
}) {
  const g = useRef<HTMLDivElement>(null), _ = useRef<HTMLDivElement>(null), x = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!n && !i && !o) { g.current?.style.removeProperty('opacity'); return; }
    const r = (e: Element | null): Element | null => (e ? (e.children.length === e.childNodes.length && e.children.length === 1 ? r(e.children[0]) : e) : null);
    const a = gsap.timeline();
    let c: ScrollTrigger | undefined, l: IntersectionObserver | undefined;
    // ref `section` : élément de la page (Trigger 1), résolu par sa classe parmi les éléments rendus
    const section = [...document.querySelectorAll<HTMLElement>('.' + sectionCls)].find((e) => e.offsetParent !== null) ?? null;
    const f = SplitText.create(r(x.current) as HTMLElement, {
      type: `${n ? 'lines,' : ''}${i ? 'words,' : ''}${o ? 'chars' : ''}`,
      mask: (n?.mask && n.mask !== 'false' ? 'lines' : i?.mask && i.mask !== 'false' ? 'words' : o?.mask && o.mask !== 'false' && 'chars') || undefined,
      linesClass: 'line', wordsClass: 'words', charsClass: 'chars', autoSplit: true, aria: 'hidden',
      onRevert: () => {},
      onSplit: (s: SplitText) => {
        g.current?.style.removeProperty('opacity');
        if (s.lines.length > 0 && n) {
          a.fromTo(s.lines, { ...pf(n, 'from'), force3D: true }, { ...pf(n, 'to'), duration: n.duration, ease: n.ease, delay: n.delay, stagger: { amount: n.stagger, from: n.origin as 'start' } }, 0);
          if ((s as unknown as { vars: { mask?: string } }).vars.mask === 'lines') mf(o?.lines as string | undefined, s.lines as HTMLElement[]);
        }
        if (s.words.length > 0 && i) {
          a.fromTo(s.words, { ...pf(i, 'from'), force3D: true }, { ...pf(i, 'to'), duration: i.duration, ease: i.ease, delay: i.delay, stagger: { amount: i.stagger, from: i.origin as 'start' } }, 0);
          if ((s as unknown as { vars: { mask?: string } }).vars.mask === 'words') mf(o?.words as string | undefined, s.masks as HTMLElement[]);
        }
        if (s.chars.length > 0 && o) {
          a.fromTo(s.chars, { ...pf(o, 'from') }, { ...pf(o, 'to'), duration: o.duration, ease: o.ease, delay: o.delay, stagger: { amount: o.stagger, from: o.origin as 'start' } }, 0);
          if ((s as unknown as { vars: { mask?: string } }).vars.mask === 'chars') mf(o?.mask, s.masks as HTMLElement[]);
        }
        a.pause(); a.progress(0);
        if (u === 'trigger' && d) {
          l = new IntersectionObserver(([e]) => { if (!e.isIntersecting) { a.pause(); a.progress(0); } });
          if (_.current) l.observe(_.current);
        }
        c = ScrollTrigger.create({
          trigger: section ?? undefined, scrub: u === 'scrub', start: `top ${viewport}`, end: u === 'trigger' ? `top ${viewport}` : `bottom ${viewport}`, once: !d && u === 'trigger',
          onEnter: () => { if (u === 'trigger' && a.progress() === 0) a.play(0); },
          onEnterBack: () => { if (u === 'trigger' && a.progress() === 0) a.play(0); },
          onUpdate: ({ progress: e }) => { if (u === 'scrub') a.progress(e); },
        });
        return a;
      },
    });
    return () => {
      a.revert(); f.revert();
      if (_.current && x.current) x.current.innerHTML = _.current.innerHTML;
      l?.disconnect(); c?.kill();
      g.current?.style.setProperty('opacity', '1');
    };
  }, [u, sectionCls, viewport, d, JSON.stringify(n), JSON.stringify(i), JSON.stringify(o)]); // eslint-disable-line react-hooks/exhaustive-deps
  const S = Children.map(textComponent, (e) => (isValidElement(e) ? cloneElement(e as ReactElement<{ style?: object }>, { style: { ...(e.props as { style?: object }).style, height: 'auto', width: '100%' } }) : e));
  return (
    <>
      <style>{'.revelo-fallback * { color: #0000 !important; -webkit-text-stroke-color: #0000 !important }'}</style>
      <div ref={g} style={{ position: 'relative', opacity: 0 }}>
        <div ref={x}>{S}</div>
        <div ref={_} className="revelo-fallback" style={{ position: 'absolute', inset: 0, color: '#0000', WebkitTextStrokeColor: '#0000' } as React.CSSProperties}>{S}</div>
      </div>
    </>
  );
}
