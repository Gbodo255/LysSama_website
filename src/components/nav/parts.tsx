'use client';
// Petits composants partagés de la navigation et du footer, portés du code compilé de l'original
// (toplevel-deps : Nav Item `_v` TD:18560, Nav Links `jv` TD:19063, Logo `Ty`/`Kv` TD:19686-19802,
// Hamburger `Ry` TD:20376, Established `Yy` TD:20593, Social `Nb`/`qb` TD:21150-21635, Contact Button `gx` TD:21729, Copyright `by`).
import { motion, MotionConfig } from 'motion/react';
import { useState, type CSSProperties, type ReactNode } from 'react';
import { useLink } from '@/components/useLink';
import { EASE_IO, EASE_STD, TOKEN, radii, superellipse, tween } from '@/lib/motion';
import { NAV, SOCIAL } from '@/data/global';
import { projects } from '@/data/projects';

type S = CSSProperties & Record<string, string | number>;

/** Conteneur de texte riche Framer (`RichTextContainer`) avec un paragraphe de preset. */
export function RichText({ className, style, preset, presetId, color, children, layout, pStyle, tag = 'p' }: {
  className: string; style?: S; preset: string; presetId: string; color: string; children: ReactNode; layout?: boolean; pStyle?: S; tag?: 'p' | 'h1' | 'h2' | 'h3';
}) {
  const P = motion[tag];
  return (
    <motion.div className={className} data-framer-component-type="RichTextContainer" style={{ ...style, transform: 'none' } as S} layout={layout}>
      <P className={`framer-text framer-styles-preset-${preset}`} data-styles-preset={presetId} dir="auto" style={{ '--framer-text-color': color, ...pStyle } as S}>{children}</P>
    </motion.div>
  );
}

// ------------------------------------------------------------------ Logo (Kv « Link Container » + Ty « Logo »)
export function NavLogo({ onNavigate, logoClass = 'framer-1xjrc', pad = '0px 0px 0px 0px', nameAttr }: { onNavigate?: () => void; logoClass?: string; pad?: string; nameAttr?: string }) {
  const l = useLink(NAV.logo.href, onNavigate);
  return (
    <a {...{ name: nameAttr }} aria-label={NAV.logo.ariaLabel} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href={l.href} onClick={l.onClick} style={{ '--159cm0u': pad } as S}>
      <div data-framer-name="Logo" className={`${logoClass} framer-7h3po8`} />
    </a>
  );
}

// ------------------------------------------------------------------ Hamburger (Ry) : Closed wQ68zCUv0 / Open PxOSLYnOW, tween 0,5 s [.87,0,.13,1]
const center = (_: unknown, t: string) => `translate(-50%, -50%) ${t}`;
const bar = (cls: string, n: string) => <motion.div className={cls} data-framer-name={n} layout style={{ backgroundColor: TOKEN.white, borderBottomLeftRadius: 2, borderBottomRightRadius: 2, borderTopLeftRadius: 2, borderTopRightRadius: 2 }} />;
export function Hamburger({ open, onTap }: { open: boolean; onTap?: () => void }) {
  const v = open ? 'open' : 'closed';
  return (
    <MotionConfig transition={tween(0.5, EASE_IO)}>
      <motion.div className={`framer-bQHEq framer-1hlzttn ${open ? 'framer-v-1m79t3m' : 'framer-v-1hlzttn'}`} data-framer-name={open ? 'Open' : 'Closed'} data-highlight="true" tabIndex={0} onTap={onTap} initial={false} animate={v} layout>
        <motion.div className="framer-t6cidc" data-framer-name="Hamburger" layout style={{ rotate: 0 }} variants={{ open: { rotate: 180 }, closed: { rotate: 0 } }}>
          <motion.div className="framer-19kq29j" data-framer-name="Top" layout style={{ rotate: 0 }} variants={{ open: { rotate: -45 }, closed: { rotate: 0 } }} transformTemplate={open ? center : undefined}>
            {bar('framer-ij8d5t', '1')}{bar('framer-1oucckw', '2')}
          </motion.div>
          <motion.div className="framer-17en59d" data-framer-name="Bottom" layout style={{ rotate: 0 }} variants={{ open: { rotate: 45 }, closed: { rotate: 0 } }} transformTemplate={open ? center : undefined}>
            {bar('framer-1ihbq2i', '3')}{bar('framer-xca395', '4')}
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

// ------------------------------------------------------------------ « EST. 2012 » (Yy, variante unique « Variant 1 »)
export function EstablishedTag() {
  const border = (w: [number, number, number, number]) => ({ '--border-bottom-width': `${w[2]}px`, '--border-color': 'rgba(255, 255, 255, 0.5)', '--border-left-width': `${w[3]}px`, '--border-right-width': `${w[1]}px`, '--border-style': 'solid', '--border-top-width': `${w[0]}px` });
  return (
    <div className="framer-D1HnP framer-Me6vv framer-1875b8x framer-v-1875b8x" data-border="true" data-framer-name="Variant 1" style={border([1, 1, 1, 1]) as S}>
      <div className="framer-x2q9so" data-framer-name="Globe">
        <div data-framer-component-type="SVG" className="framer-186e1em" aria-hidden="true" style={{ imageRendering: 'pixelated', flexShrink: 0 }}>
          <div className="svgContainer" style={{ width: '100%', height: '100%', aspectRatio: 'inherit' }}>
            <svg style={{ width: '100%', height: '100%' }} dangerouslySetInnerHTML={{ __html: '<use href="#svg1218111404_1106"></use>' }} />
          </div>
        </div>
      </div>
      <div className="framer-6xha2i" data-border="true" data-framer-name="Text" style={border([0, 0, 0, 1]) as S}>
        <RichText className="framer-19p5zwk" style={{ '--extracted-r6o4lv': TOKEN.white }} preset="c95aba" presetId="x8g4OBmQ1" color={`var(--extracted-r6o4lv, ${TOKEN.white})`}>{NAV.establishedTag}</RichText>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------ Nav Item (_v) : libellé doublé, survol = glissement vertical (tween 0,36 s [.87,0,.13,1])
const ITEM_VARIANT = { large: ['framer-v-h4zf60', 'Large', true, 't83dbl', 'WK1N0BuYa'], small: ['framer-v-1xhybmy', 'Small', true, '1l3tbw0', 'cZ7bby0gR'], largePhone: ['framer-v-oklurg', 'Large Phone', false, 't83dbl', 'WK1N0BuYa'], smallPhone: ['framer-v-ymw4vn', 'Small Phone', false, '1l3tbw0', 'cZ7bby0gR'] } as const;
export type ItemVariant = keyof typeof ITEM_VARIANT;
export function NavItem({ to, label, count, variant, color, onNavigate, name }: { to: string; label: string; count?: string; variant: ItemVariant; color: string; onNavigate?: () => void; name: string }) {
  const [cls, fname, hoverable, preset, presetId] = ITEM_VARIANT[variant];
  const [hover, setHover] = useState(false);
  const h = hoverable && hover;
  const l = useLink(to, onNavigate);
  const vref = { '--extracted-r6o4lv': 'var(--variable-reference-E_W5ZRHAy-PcHoncs7C)', '--variable-reference-E_W5ZRHAy-PcHoncs7C': color };
  const pc = 'var(--extracted-r6o4lv, var(--variable-reference-E_W5ZRHAy-PcHoncs7C))';
  return (
    <MotionConfig transition={tween(0.36, EASE_IO)}>
      <motion.a {...{ name }} className={`framer-2YuhP framer-7E2P2 framer-yTVl5 framer-QoPvp framer-Me6vv framer-h4zf60 ${cls}${h ? ' hover' : ''} framer-5e3077`} data-framer-name={fname} data-highlight="true" href={l.href} onClick={l.onClick} tabIndex={0} style={{ width: '100%' }}
        onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} initial={false} animate={h ? 'hover' : 'rest'} layout>
        <motion.div className="framer-kdnc6p" data-framer-component-type="RichTextContainer" layout style={{ ...vref, opacity: 1, transform: 'none' } as S} variants={{ hover: { opacity: 0 }, rest: { opacity: 1 } }}>
          <p className={`framer-text framer-styles-preset-${preset}`} data-styles-preset={presetId} dir="auto" style={{ '--framer-text-color': pc } as S}>{label}</p>
        </motion.div>
        <motion.div className="framer-105crdb" data-framer-component-type="RichTextContainer" layout style={{ ...vref, opacity: 0, transform: 'none' } as S} variants={{ hover: { opacity: 1 }, rest: { opacity: 0 } }}>
          <p className={`framer-text framer-styles-preset-${preset}`} data-styles-preset={presetId} dir="auto" style={{ '--framer-text-color': pc } as S}>{label}</p>
        </motion.div>
        {count !== undefined && (
          <motion.div className="framer-171qo2h-container" layout>
            <div aria-live="polite" style={{ width: 'max-content', userSelect: 'auto' }}>
              <div className="framer-12mewa9" data-framer-name="Count Text">
                <RichText className="framer-283ip9" style={{ '--extracted-r6o4lv': TOKEN.accent57, '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline' }} preset="c95aba" presetId="x8g4OBmQ1" color={`var(--extracted-r6o4lv, ${TOKEN.accent57})`}>{count}</RichText>
              </div>
            </div>
          </motion.div>
        )}
      </motion.a>
    </MotionConfig>
  );
}

// ------------------------------------------------------------------ Nav Links (jv)
const LINKS_VARIANT = { desktop: ['framer-v-fvp1dl', 'Desktop', 'large'], phone: ['framer-v-1mkgfd6', 'Phone', 'largePhone'], top: ['framer-v-1fd22pg', 'Desktop - Top', 'small'], topTablet: ['framer-v-1c01me7', 'Tablet - Top', 'smallPhone'] } as const;
const CONTAINER = { Home: 'framer-ade1jf-container', Projects: 'framer-f4luyz-container', Studio: 'framer-1kxedq2-container', Journal: 'framer-9r7k9d-container' } as const;
export function NavLinks({ variant, color, onNavigate, nameAttr, style = { width: '100%' } }: { variant: keyof typeof LINKS_VARIANT; color: string; onNavigate?: () => void; nameAttr?: string; style?: S }) {
  const withHome = !variant.startsWith('top'); // TD:19284 : Home masqué dans les variantes « - Top »
  const [cls, name, item] = LINKS_VARIANT[variant];
  const count = `(${projects.length})`;
  const names = ['Home', 'Projects', 'Studio', 'Journal'] as const;
  return (
    <motion.div className={`framer-Z2aNj framer-fvp1dl ${cls}`} data-framer-name={name} {...{ name: nameAttr }} style={style} layout>
      {NAV.links.map((lk, i) => (i === 0 && !withHome ? null : (
        <motion.div key={lk.href} className={CONTAINER[names[i]]} data-framer-name={names[i]} {...{ name: names[i] }} layout>
          <NavItem name={names[i]} to={lk.href} label={lk.label} count={'count' in lk ? count : undefined} variant={item} color={color} onNavigate={onNavigate} />
        </motion.div>
      )))}
    </motion.div>
  );
}

// ------------------------------------------------------------------ Contact Button (gx) : Desktop F8QhxJmqp (survol) / Phone VgyOKiub4, tween 0,56 s [.87,0,.13,1]
export function ContactButton({ phone, onNavigate, nameAttr, full }: { phone?: boolean; onNavigate?: () => void; nameAttr?: string; full?: boolean }) {
  const [hover, setHover] = useState(false);
  const h = !phone && hover;
  const l = useLink(NAV.contactButton.href, onNavigate);
  return (
    <MotionConfig transition={tween(0.56, EASE_IO)}>
      <motion.a {...{ name: nameAttr }} aria-label={NAV.contactButton.ariaLabel} className={`framer-U9l7N framer-1973bho ${phone ? 'framer-v-u2y57g' : 'framer-v-1973bho'}${h ? ' hover' : ''} framer-1w8xaug`} data-framer-name={phone ? 'Phone' : 'Desktop'} data-highlight="true" href={l.href} onClick={l.onClick} tabIndex={0}
        style={{ ...superellipse, ...(full ? { width: '100%' } : {}), ...radii(8) } as S} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} initial={false} animate={h ? 'hover' : 'rest'} layout>
        <motion.div className="framer-dczzwc" data-framer-name="Button" layout style={{ ...superellipse, backgroundColor: TOKEN.accent, ...radii(4), scale: 1 } as S} variants={{ hover: { ...radii(16), scale: 0.95 }, rest: { ...radii(4), scale: 1 } }}>
          <motion.div className="framer-154bepi" data-framer-name="Picture" draggable={false} layout style={{ ...superellipse, ...radii(4) } as S} variants={{ hover: radii(12), rest: radii(4) }}>
            <div style={{ position: 'absolute', borderRadius: 'inherit', cornerShape: 'inherit', top: 0, right: 0, bottom: 0, left: 0 } as S} data-framer-background-image-wrapper="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img decoding="async" width={655} height={744} src={NAV.contactButton.photo.src} alt={NAV.contactButton.photo.alt} style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', cornerShape: 'inherit', objectPosition: 'center', objectFit: 'cover' } as S} draggable={false} />
            </div>
          </motion.div>
          <motion.svg className="framer-SYorz framer-1acwqfj" role="presentation" viewBox="0 0 24 24" layout style={{ '--1m973uw': TOKEN.white, '--js9iwy': '2' } as S} dangerouslySetInnerHTML={{ __html: '<use href="#1175957644"></use>' }} />
        </motion.div>
      </motion.a>
    </MotionConfig>
  );
}

// ------------------------------------------------------------------ Icônes sociales (qb + Nb) : survol opacité 1 → .5, tween 0,3 s [.4,0,.2,1]
const ICON = { x: ['framer-17kf78c-container', 'X', 'framer-LAEqS'], instagram: ['framer-1smje0b-container', 'IG', 'framer-uZnUQ'], dribbble: ['framer-t1kefs-container', 'Dribbble', 'framer-K6Gdb'], behance: ['framer-1cdugcb-container', 'Behance', 'framer-lYLYO'] } as const;
function SocialIcon({ id, color, phone, hoverFade }: { id: keyof typeof ICON; color: string; phone?: boolean; hoverFade: boolean }) {
  const s = SOCIAL.find((x) => x.id === id)!;
  const [container, name, mask] = ICON[id];
  const [hover, setHover] = useState(false);
  return (
    <div className={container} data-framer-name={name} {...{ name }}>
      <motion.div {...{ name }} className={`framer-BF4Of framer-oxml7j ${phone ? 'framer-v-1qy02dt' : 'framer-v-oxml7j'}`} data-framer-name={phone ? 'Phone' : 'Desktop'} data-highlight="true" tabIndex={0}
        style={{ opacity: 1 }} animate={{ opacity: hoverFade && !phone && hover ? 0.5 : 1 }} initial={false} transition={tween(0.3, EASE_STD)} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>
        <a aria-label={s.ariaLabel} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href={s.href} target={s.target}>
          <div data-framer-name="Top Icon" className={`${mask} framer-1fo7tgr`} style={{ '--87ol9m': color } as S} />
        </a>
      </motion.div>
    </div>
  );
}
export function SocialIcons({ phone, color, hoverFade = true, nameAttr }: { phone?: boolean; color: string; hoverFade?: boolean; nameAttr?: string }) {
  return (
    <div {...{ name: nameAttr }} className={`framer-shGv8 framer-4tnhfa ${phone ? 'framer-v-5pv308' : 'framer-v-4tnhfa'}`} data-framer-name={phone ? 'Phone' : 'Desktop'} style={{ width: '100%' }}>
      {(Object.keys(ICON) as (keyof typeof ICON)[]).map((id) => <SocialIcon key={id} id={id} color={color} phone={phone} hoverFade={hoverFade} />)}
    </div>
  );
}

// ------------------------------------------------------------------ Copyright (composant de code 84d4c1)
export function Copyright({ color }: { color: string }) {
  const c = NAV.copyright;
  return (
    <span style={{ color, fontFamily: '"Switzer", "Switzer Placeholder", sans-serif', fontSize: '12px', fontStyle: 'normal', fontWeight: 600, letterSpacing: '-0.03em', lineHeight: '130%', width: 'max-content', minWidth: 'max-content', display: 'inline-block' }}>
      <span>{c.year}{' '}{c.name}{' '}<span style={{ fontSize: '1.2em', lineHeight: 1 }}>{c.symbol}</span></span>
      <span style={{ display: 'block' }}>{c.statement}</span>
    </span>
  );
}

export { EASE_IO, EASE_STD };
