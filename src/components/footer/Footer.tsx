'use client';
// Footer du gabarit « Nav & Footer » (toplevel-deps TD:25138–26064), structure et classes de l'original (Footer.css transposé).
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from 'react';
import { ContactButton, Copyright, NavLinks, NavLogo, SocialIcons } from '@/components/nav/parts';
import { FormButton } from '@/components/forms/FormButton';
import { HideOn, Variants } from '@/components/Variants';
import { useLink } from '@/components/useLink';
import { HONEYPOTS, isIncomplete, submitForm, type FormState } from '@/lib/forms';
import { TOKEN } from '@/lib/motion';
import { FOOTER } from '@/data/global';
import { WORDMARK } from './wordmark';
import './Footer.css';

type S = CSSProperties & Record<string, string | number>;
const GREY = 'var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))';
const DARK = 'var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))';

/** Lien de texte riche (preset 7b2rcp) ; `data-framer-page-link-current` sur la page courante, comme l'original. */
function TextLink({ to, children }: { to: string; children: string }) {
  const l = useLink(to);
  const current = (usePathname() || '/') === to;
  return <a className="framer-text framer-styles-preset-7b2rcp" data-styles-preset="qvtlHqCqz" href={l.href} onClick={l.onClick} {...(current ? { 'data-framer-page-link-current': 'true' } : {})}>{children}</a>;
}

/** « Spacer » (Navigation Spacer) : réserve la largeur de la barre latérale. */
export function NavSpacer({ className, name = 'Navigation Spacer' }: { className: string; name?: string }) {
  return (
    <div className={className} data-framer-name={name} {...{ name }}>
      <div {...{ name }} className="framer-yXQrW framer-gmtdri framer-v-gmtdri" data-framer-name="Spacer" style={{ height: '100%' }} />
    </div>
  );
}

function Newsletter() {
  const nl = FOOTER.newsletter;
  const form = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>('incomplete');
  const refresh = () => setState((s) => (s === 'pending' || s === 'success' ? s : isIncomplete(form.current) ? 'incomplete' : 'default'));
  useEffect(refresh, []);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === 'pending') return;
    setState('pending');
    const ok = await submitForm('newsletter', new FormData(e.currentTarget));
    setState(ok ? 'success' : 'error');
  };
  return (
    <form ref={form} className="framer-1lnl6jg" data-framer-name="Newsletter Signup" method="post" data-framer-form="" onSubmit={onSubmit} onInput={refresh} onChange={refresh}>
      <div className="framer-199g2yg" data-border="true" data-framer-name="Input / Button">
        <label className="framer-1t2u8aq" data-framer-name="Newsletter Form Group">
          <div className="framer-form-text-input framer-form-input-wrapper framer-1dpa36t" data-framer-name="Newsletter Email Input">
            <input type={nl.input.type} required name={nl.input.name} placeholder={nl.input.placeholder} className={`framer-form-input${state === 'incomplete' ? ' framer-form-input-empty' : ''}`} defaultValue="" />
          </div>
        </label>
        <div className="framer-s7u2da-container" data-framer-name="Newsletter Submit Button" {...{ name: 'Newsletter Submit Button' }}>
          <FormButton state={state} label={nl.button.label} name="Newsletter Submit Button" />
        </div>
      </div>
      <label className="framer-169r9xi" data-framer-name="Agree to terms">
        <input className="framer-form-boolean-input framer-1qlsdo5" data-framer-name="Newsletter Consent Checkbox" required type="checkbox" name={nl.consent.name} />
        <div className="framer-1rl9j96" data-framer-name="Newsletter Consent Copy" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
          <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ '--framer-text-alignment': 'start', '--framer-text-color': GREY } as S}>
            {nl.consent.before}<TextLink to={nl.consent.href}>{nl.consent.linkLabel}</TextLink>
          </p>
        </div>
      </label>
      {HONEYPOTS.map((n) => <input key={n} type="text" name={n} tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ position: 'absolute', transform: 'scale(0)' }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />)}
    </form>
  );
}

const fit = (w: { viewBox: string; html: string }, cls: string, name: string) => (
  <svg className={cls} data-framer-name={name} data-framer-component-type="RichTextContainer" viewBox={w.viewBox} style={{ transform: 'none' }} dangerouslySetInnerHTML={{ __html: w.html }} />
);

export function Footer() {
  const intro = FOOTER.newsletter.intro;
  const logo = (pad: string) => <NavLogo nameAttr="Shared Navigation Logo" logoClass="framer-SHtMX" pad={pad} />;
  const links = (v: 'top' | 'phone') => <div className="framer-3m3d8l-container" data-framer-name="Shared Navigation Links" {...{ name: 'Shared Navigation Links' }}><NavLinks variant={v} color={DARK} nameAttr="Shared Navigation Links" /></div>;
  const logoD = logo('0px 0px 0px 0px'), linksD = links('top');
  return (
    <div className="framer-ubdqd9" data-framer-name="Footer">
      <HideOn on={['phone']}><NavSpacer className="framer-fhqei7-container hidden-1pvmz1y" /></HideOn>
      <section className="framer-1064shm" data-framer-name="Footer">
        <div className="framer-aqqavh" data-framer-name="Inside Container">
          <div className="framer-112av23" data-framer-name="Top">
            <div className="framer-1e616zs-container" data-framer-name="Shared Navigation Logo" {...{ name: 'Shared Navigation Logo' }}>
              <Variants d={logoD} t={logoD} p={logo('5px 0px 0px 0px')} />
            </div>
            <Variants d={linksD} t={linksD} p={links('phone')} />
          </div>
          <div className="framer-10uqj7m" data-framer-name="Middle">
            <HideOn on={['phone']}><div className="framer-11fuqsj hidden-1pvmz1y" data-framer-name="Filler" /></HideOn>
            <div className="framer-10tu5xj" data-framer-name="Text Container">
              <div className="framer-1j72mo7-container" data-code-component-plugin-id="84d4c1" data-framer-name="Copyright Notice" {...{ name: 'Copyright Notice' }}>
                <Copyright color={GREY} />
              </div>
              <div className="framer-odwucj" data-framer-name="Name / Description">
                <div className="framer-ab2qu1" data-framer-name="Name">
                  <div className="framer-g8f7gt" data-framer-name="Name / R Symbol">
                    {fit(WORDMARK.name, 'framer-ibnepj', 'Footer Logo Name')}
                    <div className="framer-grnsur" data-framer-name="R Symbol">{fit(WORDMARK.trademark, 'framer-hhlsu5', 'Footer Logo Trademark')}</div>
                  </div>
                  {fit(WORDMARK.descriptor, 'framer-1xn72o7', 'Footer Logo Descriptor')}
                </div>
                <div className="framer-tr2r27" data-framer-name="Description / Newsletter">
                  <div className="framer-23fpvw" data-framer-name="Newsletter Introduction" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
                    <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ '--framer-text-alignment': 'justify', '--framer-text-color': GREY } as S}>
                      {intro.map((t, i) => (t.tone === 'dark' ? <span key={i} style={{ '--framer-text-color': DARK } as S} className="framer-text">{t.text}</span> : t.text))}
                    </p>
                  </div>
                  <Newsletter />
                </div>
              </div>
            </div>
          </div>
          <div className="framer-1nbmjrz" data-framer-name="Bottom">
            <div className="framer-sfsj97-container" data-framer-name="Footer Social Links" {...{ name: 'Footer Social Links' }}>
              <SocialIcons color={DARK} nameAttr="Footer Social Links" />
            </div>
            <div className="framer-18r9k2i" data-framer-name="Legal">
              <div className="framer-s03u8i" data-framer-name="Legal Navigation Link" data-framer-component-type="RichTextContainer" style={{ justifyContent: 'flex-end', transform: 'none' }}>
                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ '--framer-text-alignment': 'start', '--framer-text-color': GREY } as S}>{FOOTER.legalLabel}</p>
              </div>
              <div className="framer-14oqxd3" data-framer-name="Footer Contact Link Group">
                {FOOTER.legal.map((lg) => (
                  <div key={lg.href} className="framer-1f81en6" data-framer-name="Footer Dynamic Label" data-framer-component-type="RichTextContainer" style={{ transform: 'none' }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ '--framer-text-alignment': 'start' } as S}><TextLink to={lg.href}>{lg.label}</TextLink></p>
                  </div>
                ))}
              </div>
            </div>
            <div className="framer-1eth1vs" data-framer-name="Contact">
              <div className="framer-yzm327" data-framer-name="Footer Contact Link" data-framer-component-type="RichTextContainer" style={{ justifyContent: 'flex-end', transform: 'none' }}>
                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ '--framer-text-alignment': 'start', '--framer-text-color': GREY } as S}>{FOOTER.contactLabel}</p>
              </div>
              <div className="framer-9685jw-container" data-framer-name="Footer Contact Button" {...{ name: 'Footer Contact Button' }}>
                <Variants d={<ContactButton nameAttr="Footer Contact Button" />} t={<ContactButton phone nameAttr="Footer Contact Button" />} p={<ContactButton phone full nameAttr="Footer Contact Button" />} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { TOKEN };
