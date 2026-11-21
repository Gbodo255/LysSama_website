// Scénarios de courbes (scripts/curves.mjs), joués à l'identique sur l'original et le clone.
// Les sélecteurs n'utilisent que des classes/attributs présents des deux côtés (DOM transposé).
const center = async (page, sel, i = 0) => page.evaluate(([s, k]) => { const r = document.querySelectorAll(s)[k].getBoundingClientRect(); return [r.x + r.width / 2, r.y + r.height / 2]; }, [sel, i]);
const hover = (sel, i) => async (page) => { const [x, y] = await center(page, sel, i); await page.mouse.move(x, y); };
const tap = (sel, i) => async (page) => { const [x, y] = await center(page, sel, i); await page.touchscreen.tap(x, y); };
const toBottom = async (page) => page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));

const NAV = [
  { name: 'root', sel: '.framer-tVn1f', props: ['width', 'height'] },
  { name: 'sideNav', sel: '.framer-tVn1f .framer-3der5', props: ['x', 'y', 'width', 'height', 'borderRadius'] },
  { name: 'overlay', sel: '.framer-tVn1f .framer-1f8xv28', props: ['opacity', 'filter'] },
  { name: 'menu', sel: '.framer-tVn1f .framer-tk3v71', props: ['x', 'y', 'width', 'height', 'opacity'] },
  { name: 'hamburger', sel: '.framer-tVn1f .framer-t6cidc', props: ['transform', 'width', 'height'] },
  { name: 'hTop', sel: '.framer-tVn1f .framer-19kq29j', props: ['transform', 'x', 'y'] },
  { name: 'hBottom', sel: '.framer-tVn1f .framer-17en59d', props: ['transform', 'x', 'y'] },
  { name: 'navItems', sel: '.framer-tVn1f .framer-c5vrme', props: ['x', 'y', 'width'] },
  { name: 'logo', sel: '.framer-tVn1f .framer-dhb6tt-container', props: ['x', 'y'] },
];
const ITEM = (i) => [
  { name: 'label1', sel: '.framer-tVn1f .framer-2YuhP .framer-kdnc6p', index: i, props: ['x', 'y', 'opacity'] },
  { name: 'label2', sel: '.framer-tVn1f .framer-2YuhP .framer-105crdb', index: i, props: ['x', 'y', 'opacity'] },
];
const CONTACT = (scope) => [
  { name: 'button', sel: `${scope} .framer-U9l7N .framer-dczzwc`, props: ['transform', 'borderRadius', 'width', 'height'] },
  { name: 'picture', sel: `${scope} .framer-U9l7N .framer-154bepi`, props: ['borderRadius', 'x', 'y', 'width'] },
  { name: 'arrow', sel: `${scope} .framer-U9l7N .framer-1acwqfj`, props: ['x', 'y'] },
];
const openDesktop = hover('.framer-tVn1f .framer-3der5');

export const SCENARIOS = [
  { id: 'nav-open-desktop', route: '/privacy-policy', widths: [1440], track: NAV, action: openDesktop, durationMs: 960 },
  { id: 'nav-close-desktop', route: '/privacy-policy', widths: [1440], track: NAV, setup: openDesktop, action: async (p) => p.mouse.move(1300, 450), durationMs: 960 },
  { id: 'nav-open-tablet', route: '/privacy-policy', widths: [810], track: NAV, action: tap('.framer-tVn1f .framer-1wba9e6'), durationMs: 960 },
  { id: 'nav-open-phone', route: '/privacy-policy', widths: [390], track: NAV, action: tap('.framer-tVn1f .framer-bQHEq'), durationMs: 960 },
  { id: 'nav-close-phone', route: '/privacy-policy', widths: [390], track: NAV, setup: tap('.framer-tVn1f .framer-bQHEq'), action: tap('.framer-tVn1f .framer-bQHEq'), durationMs: 960 },
  { id: 'nav-item-hover', route: '/privacy-policy', widths: [1440], track: ITEM(2), setup: openDesktop, action: hover('.framer-tVn1f .framer-2YuhP', 2), durationMs: 600 },
  { id: 'nav-contact-hover', route: '/privacy-policy', widths: [1440], track: CONTACT('.framer-tVn1f'), setup: openDesktop, action: hover('.framer-tVn1f .framer-U9l7N'), durationMs: 800 },
  { id: 'footer-contact-hover', route: '/privacy-policy', widths: [1440], track: CONTACT('.framer-ubdqd9'), setup: toBottom, action: hover('.framer-ubdqd9 .framer-U9l7N'), durationMs: 800 },
  { id: 'footer-social-hover', route: '/privacy-policy', widths: [1440], track: [{ name: 'icon', sel: '.framer-ubdqd9 .framer-BF4Of', props: ['opacity'] }], setup: toBottom, action: hover('.framer-ubdqd9 .framer-BF4Of'), durationMs: 500 },
  { id: 'footer-link-hover', route: '/privacy-policy', widths: [1440], track: [{ name: 'terms', sel: '.framer-ubdqd9 .framer-1f81en6 a', index: 1, props: ['color'] }], setup: toBottom, action: hover('.framer-ubdqd9 .framer-1f81en6 a', 1), durationMs: 300 },
  { id: 'footer-join-hover', route: '/privacy-policy', widths: [1440],
    track: [{ name: 'button', sel: '.framer-8H41b', props: ['opacity'] }, { name: 'bg', sel: '.framer-8H41b .framer-17skh7b', props: ['transform', 'borderRadius'] }, { name: 'top', sel: '.framer-8H41b .framer-1gm2ya6', props: ['opacity', 'transform'] }, { name: 'bottom', sel: '.framer-8H41b .framer-l29hgm', props: ['opacity', 'transform'] }],
    setup: async (p) => { await toBottom(p); const [x, y] = await center(p, '.framer-ubdqd9 input[type=email]'); await p.mouse.click(x, y); await p.keyboard.type('abc'); },
    action: hover('.framer-8H41b'), durationMs: 800 },
];
