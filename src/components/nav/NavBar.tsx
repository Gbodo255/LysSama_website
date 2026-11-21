'use client';
// « Nav Bar » (Kx, toplevel-deps TD:21966–22783). Variantes et déclencheurs identiques au code compilé :
// Desktop survol (Side Nav) · Tablette tap (SideBar / fond) · Mobile tap (hamburger / fond / logo).
// Transitions : mise en page 0,4 s [.87,0,.13,1] (Mx) ; fond 0,6 s [.4,0,.2,1] à l'ouverture (Nx), 0,5 s à la fermeture (Px) ;
// menu délai 0,2 s 0,5 s [.4,0,.2,1] (Rx) à l'ouverture, Px à la fermeture.
import { LayoutGroup, motion, MotionConfig } from 'motion/react';
import { useState, type CSSProperties } from 'react';
import { ContactButton, Copyright, EstablishedTag, Hamburger, NavLinks, NavLogo, RichText, SocialIcons } from './parts';
import { useLink } from '@/components/useLink';
import { EASE_IO, EASE_STD, TOKEN, radii, superellipse, tween } from '@/lib/motion';
import { NAV } from '@/data/global';
import './SharedNavigation.css';

type S = CSSProperties & Record<string, string | number>;
export type NavVariant = 'dOpen' | 'dClosed' | 'tOpen' | 'tClosed' | 'pOpen' | 'pClosed';
const CLS: Record<NavVariant, string> = { dOpen: 'framer-v-cnvg8h', pOpen: 'framer-v-rjgpgd', tOpen: 'framer-v-da3fvt', dClosed: 'framer-v-l44v03', tClosed: 'framer-v-164awg0', pClosed: 'framer-v-1s6eirn' };
const NAME: Record<NavVariant, string> = { dOpen: 'Desktop - Open', pOpen: 'Phone - Open', tOpen: 'Tablet - Open', dClosed: 'Desktop - Closed', tClosed: 'Tablet - Closed', pClosed: 'Phone Closed' };
const CLOSED_OF: Record<NavVariant, NavVariant> = { dOpen: 'dClosed', dClosed: 'dClosed', tOpen: 'tClosed', tClosed: 'tClosed', pOpen: 'pClosed', pClosed: 'pClosed' };
const isClosed = (v: NavVariant) => v.endsWith('Closed');
const translateX = (_: unknown, t: string) => `translateX(-50%) ${t}`;
// rotation fixe de l'étiquette dans le gabarit (une rotation passée en style était retirée par la projection de mise en page)
const badge = (_: unknown, t: string) => `translateX(-50%) rotate(-90deg)${t && t !== 'none' ? ' ' + t : ''}`;

function PhoneLogo({ onTap }: { onTap: () => void }) {
  const l = useLink(NAV.logo.href, onTap);
  return (
    <motion.a aria-label={NAV.logo.ariaLabel} className="framer-ij0712 framer-1naqc9k" data-framer-name="Phone Logo Container" data-highlight="true" href={l.href} onClick={l.onClick} tabIndex={0} layout>
      <motion.div data-framer-name="Logo" className="framer-1xjrc framer-1fcg7o3" layout />
    </motion.a>
  );
}

export function NavBar({ initial }: { initial: NavVariant }) {
  const [v, setV] = useState<NavVariant>(initial);
  const phone = v === 'pOpen' || v === 'pClosed';
  const desktop = v === 'dOpen' || v === 'dClosed';
  const close = () => setV(CLOSED_OF[v]);
  // Rappels du code (sEkqiQxrB du hamburger, onTap du fond / de la SideBar / du logo mobile).
  const onHamburger = () => setV({ dOpen: 'dClosed', dClosed: 'dOpen', tClosed: 'dOpen', tOpen: 'dClosed', pOpen: 'pClosed', pClosed: 'pOpen' }[v] as NavVariant);
  const onOverlay = v === 'tOpen' ? () => setV('tClosed') : v === 'pOpen' || v === 'pClosed' ? () => setV('pClosed') : undefined;
  const onSideBar = v === 'tOpen' ? () => setV('tClosed') : v === 'tClosed' ? () => setV('tOpen') : undefined;
  const closedish = isClosed(v);
  return (
    <LayoutGroup>
      <MotionConfig transition={tween(0.4, EASE_IO)}>
        <motion.div {...{ name: 'Shared Navigation' }} className={`framer-tVn1f framer-Me6vv framer-cnvg8h ${CLS[v]}`} data-framer-name={NAME[v]} data-hide-scrollbars="true" style={{ height: '100%', width: '100%' }} initial={false} animate={v} layout>
          <MotionConfig transition={v === 'dClosed' || v === 'tClosed' ? tween(0.5, EASE_STD) : tween(0.6, EASE_STD)}>
            <motion.div className="framer-1f8xv28" data-framer-name="Overlay BG" layout {...(onOverlay ? { 'data-highlight': 'true', tabIndex: 0, onTap: onOverlay } : {})}
              style={{ backgroundColor: TOKEN.overlay, maxHeight: '100dvh' } as S}
              variants={{ dOpen: { filter: 'grayscale(1)', opacity: 0.85 }, tOpen: { filter: 'grayscale(1)', opacity: 0.85 }, pOpen: { filter: 'grayscale(1)', opacity: 0.85 }, dClosed: { filter: 'none', opacity: 0 }, tClosed: { filter: 'none', opacity: 0 }, pClosed: { filter: 'none', opacity: 0 } }} />
          </MotionConfig>
          <motion.nav className="framer-3der5" data-framer-name="Side Nav" data-hide-scrollbars="true" {...(v === 'dOpen' || v === 'dClosed' ? { 'data-highlight': 'true' } : {})} layout
            onMouseEnter={v === 'dClosed' ? () => setV('dOpen') : undefined} onMouseLeave={v === 'dOpen' ? () => setV('dClosed') : undefined}
            style={{ ...superellipse, backgroundColor: TOKEN.black, maxHeight: '100dvh', ...radii(12) } as S}
            variants={{ pClosed: radii(10), dOpen: radii(12), dClosed: radii(12), tOpen: radii(12), tClosed: radii(12), pOpen: radii(12) }}>
            <motion.div className="framer-1wba9e6" data-framer-name="SideBar" layout {...(onSideBar ? { 'data-highlight': 'true', onTap: onSideBar } : {})}>
              {phone && <PhoneLogo onTap={() => setV('pClosed')} />}
              <motion.div className="framer-gupk0y-container" layout>
                <Hamburger open={!closedish} onTap={onHamburger} />
              </motion.div>
              {!phone && (
                <motion.div className="framer-ybstj0-container" layout transformTemplate={badge}>
                  <EstablishedTag />
                </motion.div>
              )}
            </motion.div>
            <MotionConfig transition={v === 'dClosed' || v === 'tClosed' ? tween(0.5, EASE_STD) : tween(0.5, EASE_STD, 0.2)}>
              <motion.div className="framer-tk3v71" data-framer-name="Menu" layout transformTemplate={v === 'pClosed' ? translateX : undefined}>
                <motion.div className="framer-19orxsl" data-framer-name="Top" layout>
                  {!phone && <motion.div className="framer-dhb6tt-container" layout><NavLogo onNavigate={close} /></motion.div>}
                  <motion.div className="framer-c5vrme" data-framer-name="Nav. Items" layout>
                    <motion.div className="framer-hxeh5m-container" layout>
                      <NavLinks variant={desktop ? 'desktop' : 'phone'} color={TOKEN.white} onNavigate={close} />
                    </motion.div>
                    <motion.div className="framer-3g7ymn" data-framer-name="Contact" layout>
                      <RichText className="framer-f81h7k" layout style={{ justifyContent: 'flex-end', '--extracted-r6o4lv': TOKEN.grey188, '--framer-link-text-color': 'rgb(0, 153, 255)', '--framer-link-text-decoration': 'underline' }} preset="c95aba" presetId="x8g4OBmQ1" color={`var(--extracted-r6o4lv, ${TOKEN.grey188})`}>{NAV.contactLabel}</RichText>
                      <motion.div className="framer-18pfxug-container" layout><ContactButton phone={!desktop} onNavigate={close} /></motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div className="framer-5dotip" data-framer-name="Bottom" layout>
                  <motion.div className="framer-18x49sy-container" layout><SocialIcons phone={!desktop} color={TOKEN.white} /></motion.div>
                  <motion.div className="framer-a5c6mb-container" data-code-component-plugin-id="84d4c1" layout><Copyright color={TOKEN.grey188} /></motion.div>
                </motion.div>
                {!phone && <motion.div className="framer-1sxc0wu" data-framer-name="Left Border" layout style={{ backgroundColor: TOKEN.border }} />}
              </motion.div>
            </MotionConfig>
          </motion.nav>
        </motion.div>
      </MotionConfig>
    </LayoutGroup>
  );
}

export { EASE_IO };
