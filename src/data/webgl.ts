// Props des instances des composants de code WebGL de l'auteur (valeurs du site, docs/audit/*.md).

/** Page 404 — texte 3D filaire (docs/audit/404.md §5, L.1392-1434). Couleur : three r136 ne lit pas var(...) → blanc (mesuré). */
export const NOTFOUND_3D = {
  text: '404',
  fontFile: '/assets/fonts/UNBtynp7L2M6fruNPHYtc3EKUA.json',
  fontUrl: 'https://unpkg.com/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json',
  color: 'var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))',
  minSize: 128, fluidSize: 28, maxSize: 600, padding: 0,
  lineWidth: 1.5, lineOpacity: 1, extrudeDepth: 44, bevel: true, shardSize: 10,
  rotateSpeed: 0.3, startAngle: -20, cameraHeight: 0.25, mouseFollow: 0.4, dragSensitivity: 0.6,
  scrollPan: 1, scrollFlex: 164, pressDepth: 80, rippleAmount: 12,
  warpStrength: 0.15, mouseChroma: 0.3, warpRadius: 0.07, trailDecay: 2, grainScale: 40, mouseSpeedReact: true,
  explodeSpread: 1.45, explodeSnap: 89, floorGrid: true, envOpacity: 0.5,
  style: { width: '100%', height: '100%' },
};

/** /projects — vitrine incurvée (CurvyProjectShowcase), instance du module AMcQRZfI (docs/audit/projects-webgl.md §9).
 *  Groupes du panneau Framer ; surcharges par breakpoint = remplacement du groupe entier (PropertyOverrides). */
const W = 'var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))';
const STRIP = { arrowColor: W, controlsColor: W, countSeparator: '/', inactiveTitleColor: 'var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))', showArrows: true, showCount: true, showTitleStrip: true, titleColor: W, zeroPad: true };
export const PROJECTS_SHOWCASE = {
  desktop: {
    Effects: { bendIntensity: 1.4, edgeEffect: 'streaks', edgeWarp: true, edgeWarpStrength: 2 },
    Interaction: { cardCursor: true, clickAction: 'link', hijackScroll: true },
    items: [],
    Layout: { cardAspect: 1.6, centerWidthPct: 65, cornerRadius: 12, sidePeekPct: 15, sideScale: 0.69 },
    metaGap: 15,
    Motion: { autoplay: false, autoplayInterval: 4, dragSpeed: 1.7, infiniteLoop: true, lerpSmoothness: 0.15, scrollSpeed: 1.4 },
    Mouse: { mouseChroma: 0.38, mouseEffect: 'ripple', mouseRadius: 0.25, mouseSpeedReact: true, mouseWarp: true, mouseWarpStrength: 2 },
    showDetails: true,
    Strip: { ...STRIP, titleGap: 60 },
    Style: { backgroundColor: 'rgb(255, 255, 255)', backgroundTransparent: true },
    style: { height: '100%', width: '100%' },
  },
  tablet: {
    Interaction: { cardCursor: false, clickAction: 'link', hijackScroll: true },
    Layout: { cardAspect: 1.15, centerWidthPct: 65, cornerRadius: 12, sidePeekPct: 15, sideScale: 0.69 },
    Strip: { ...STRIP, titleGap: 40 },
  },
  phone: {
    Interaction: { cardCursor: false, clickAction: 'link', hijackScroll: true },
    Layout: { cardAspect: 0.85, centerWidthPct: 75, cornerRadius: 12, sidePeekPct: 7, sideScale: 0.5 },
    Motion: { autoplay: false, autoplayInterval: 4, dragSpeed: 1.4, infiniteLoop: true, lerpSmoothness: 0.15, scrollSpeed: 1.2 },
    Strip: { ...STRIP, titleGap: 30 },
  },
};

/** Accueil — « Text Reveal » (Revelo, J_la0crrN L.13800-13860) : défilement `scrub` sur la section « Trigger 1 ». */
export const HOME_TEXT_REVEAL = {
  type: 'scrub' as const, viewport: 'bottom', replay: true, sectionCls: 'framer-4ctmxs',
  lines: { delay: 0.07, duration: 0.6, ease: 'power2.in', mask: 'yes', origin: 'start', stagger: 0.365, x: { from: 10, to: 0 } },
  words: { delay: 0.15, duration: 0.8, ease: 'linear', mask: 'yes', opacity: { from: 0, to: 1 }, origin: 'start', stagger: 0.965, y: { from: 0, to: 0 } },
};
