'use client';
// Curseur personnalisé global (« Cursor » gy, TD:19920–20138 ; réglages bT TD:25296) : zones `data-framer-cursor`,
// placement « bottom » centré (translate(-50%, 0%)), suivi en ressort 500/60/1 ; disque scale 0 ↔ 1 en ressort
// (bounce .2, 0,4 s) ; libellé rendu seulement dans sa variante (comme l'original). Monté au niveau de #main, après le gabarit (mesuré).
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { CURSOR } from '@/data/global';
import './Cursor.css';

const FOLLOW = { damping: 60, mass: 1, stiffness: 500 };
const DISC = { bounce: 0.2, delay: 0, duration: 0.4, type: 'spring' } as const;

export function Cursor() {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, FOLLOW), sy = useSpring(y, FOLLOW);
  const transform = useMotionTemplate`translate(-50%, 0%) translateX(${sx}px) translateY(${sy}px)`;
  const [seen, setSeen] = useState(false);
  const [variant, setVariant] = useState('IeznnrIPT');
  useEffect(() => {
    let first = true;
    const move = (e: PointerEvent) => {
      if (first) { x.jump(e.clientX); y.jump(e.clientY); sx.jump(e.clientX); sy.jump(e.clientY); first = false; setSeen(true); }
      else { x.set(e.clientX); y.set(e.clientY); }
      const zone = (e.target as Element | null)?.closest?.('[data-framer-cursor]')?.getAttribute('data-framer-cursor');
      setVariant((zone && CURSOR.zones[zone]) || 'IeznnrIPT');
    };
    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, [x, y, sx, sy]);
  const v = CURSOR.variants[variant];
  return (
    <motion.div className={`framer-MszgN framer-Me6vv framer-ez28hj framer-pointer-events-none ${v.cls}`} data-framer-name={v.name}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 13, pointerEvents: 'none', opacity: seen ? 1 : 0, transform }}>
      <motion.div className="framer-1os1ca7" data-framer-name="Cursor" initial={false} animate={{ scale: variant === 'IeznnrIPT' ? 0 : 1 }} transition={DISC}
        style={{ backgroundColor: 'var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))', borderRadius: 100, opacity: 1 }}>
        {v.label && (
          <div className={v.labelCls} data-framer-component-type="RichTextContainer" style={{ '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', transform: 'none' } as React.CSSProperties}>
            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ '--framer-text-alignment': 'center' } as React.CSSProperties}>{v.label}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
