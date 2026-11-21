'use client';
// « Form Button » (ES, toplevel-deps TD:23020–23387) : Default (survol) / Incomplete / Loading / Success / Error, tween 0,56 s [.87,0,.13,1].
import { motion, MotionConfig } from 'motion/react';
import { useState, type CSSProperties } from 'react';
import type { FormState } from '@/lib/forms';
import { EASE_IO, TOKEN, radii, superellipse, tween } from '@/lib/motion';

type S = CSSProperties & Record<string, string | number>;
const CLS: Record<FormState, string> = { default: 'framer-v-xkbypw', incomplete: 'framer-v-a28jhw', pending: 'framer-v-qk64ix', success: 'framer-v-ff7x1i', error: 'framer-v-1g0cbeo' };
const NAME: Record<FormState, string> = { default: 'Default', incomplete: 'Incomplete', pending: 'Loading', success: 'Success', error: 'Error' };
const center = (_: unknown, t: string) => `translate(-50%, -50%) ${t}`;

export function FormButton({ state, label, name, textColor = TOKEN.white, color = TOKEN.black, style }: { state: FormState; label: string; name?: string; textColor?: string; color?: string; style?: S }) {
  const [hover, setHover] = useState(false);
  const h = state === 'default' && hover;
  const anim = h ? ['default', 'hover'] : [state];
  const vref = { '--extracted-r6o4lv': 'var(--variable-reference-odJoTSF6e-oYhWrTjTX)', '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline', '--variable-reference-odJoTSF6e-oYhWrTjTX': textColor };
  const pc = 'var(--extracted-r6o4lv, var(--variable-reference-odJoTSF6e-oYhWrTjTX))';
  const text = (preset: string, presetId: string) => state === 'error'
    ? <p className={`framer-text framer-styles-preset-${preset}`} data-styles-preset={presetId} dir="auto" style={{ '--framer-text-color': pc } as S}>Error, Try Again</p>
    : <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ '--framer-text-alignment': 'left', '--framer-text-color': pc } as S}>{label}</p>;
  const off = { opacity: 0, scale: 0.9 };
  return (
    <MotionConfig transition={tween(0.56, EASE_IO)}>
      <motion.button {...{ name }} type="submit" className={`framer-8H41b framer-khCxy framer-QoPvp framer-xkbypw ${CLS[state]}${h ? ' hover' : ''}`} {...(h ? {} : { 'data-framer-name': NAME[state] })} data-reset="button"
        style={{ ...style, opacity: 1 }} initial={false} animate={anim} variants={{ hover: { opacity: 1 }, incomplete: { opacity: 0.75 }, default: { opacity: 1 }, pending: { opacity: 1 }, success: { opacity: 1 }, error: { opacity: 1 } }}
        onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>
        <motion.div className="framer-17skh7b" data-framer-name="BG Color" style={{ ...superellipse, backgroundColor: color, ...radii(8), scale: 1 } as S} variants={{ hover: { ...radii(16), scale: 0.95 }, default: { ...radii(8), scale: 1 } }} />
        <div className="framer-71e8ti" data-framer-name="btn text">
          <motion.div className="framer-1gm2ya6" data-framer-name="top" data-framer-component-type="RichTextContainer" style={{ ...vref, opacity: 1, scale: 1 } as S}
            variants={{ hover: { opacity: 0, scale: 0.9 }, default: { opacity: 1, scale: 1 }, error: { opacity: 1 }, pending: { opacity: 0 }, success: { opacity: 0 }, incomplete: { opacity: 1 } }}>{text('k5mxv3', 'JFK15baIL')}</motion.div>
          <motion.div className="framer-l29hgm" data-framer-name="bottom" data-framer-component-type="RichTextContainer" style={{ ...vref, opacity: 0, scale: 1 } as S}
            variants={{ hover: { opacity: 1, scale: 0.9 }, default: { opacity: 0, scale: 1 } }}>{text('lu6cf5', 'XKitmogp0')}</motion.div>
        </div>
        <motion.svg data-framer-name="Success" className="framer-o60xf framer-1xmnpcd" role="presentation" viewBox="0 0 24 24" style={{ '--1m973uw': textColor, '--js9iwy': '2', opacity: 0, scale: 0.9 } as S} transformTemplate={center}
          variants={{ success: { opacity: 1, scale: 1 }, default: off, pending: off, error: off, incomplete: off }} dangerouslySetInnerHTML={{ __html: '<use href="#199327949"></use>' }} />
        <motion.div className="framer-ek5kqb-container" style={{ opacity: 0 }} transformTemplate={center} variants={{ pending: { opacity: 1 }, default: { opacity: 0 }, success: { opacity: 0 }, error: { opacity: 0 }, incomplete: { opacity: 0 } }}>
          <div className="framer-pEZXs framer-7sj87n framer-v-7sj87n" data-framer-name="Spinner">
            <div className="framer-1yqlm52" data-framer-name="Spinner" style={{ mask: "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add", WebkitMask: "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add" } as S}>
              <div className="framer-1m1l9lh" style={{ backgroundColor: textColor, borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }} />
            </div>
          </div>
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
}
