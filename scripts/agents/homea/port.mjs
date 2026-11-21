// Portage mécanique des composants de code de l'auteur (reference/framer-code/extracted/*.js) vers src/ :
// seules les liaisons Framer/rolldown sont remplacées (imports, glsl(), panneau de propriétés, RenderTarget,
// import dynamique de three) ; la logique est copiée telle quelle. Rejouable : node scripts/agents/homea/port.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '../../..');
const read = (p) => fs.readFileSync(path.join(ROOT, p), 'utf8');

// Supprime `addPropertyControls(X, {...})` (code mort hors de l'éditeur Framer) en gardant l'expression valide.
function stripControls(src) {
  const i = src.indexOf('addPropertyControls(');
  if (i < 0) return src;
  let d = 0, j = i + 'addPropertyControls'.length, q = null;
  for (; j < src.length; j++) {
    const c = src[j];
    if (q) { if (c === '\\') j++; else if (c === q) q = null; continue; }
    if (c === '`' || c === '"' || c === "'") q = c;
    else if (c === '(') d++;
    else if (c === ')' && --d === 0) break;
  }
  return src.slice(0, i) + 'undefined' + src.slice(j + 1);
}

function port({ from, to, shaders, header, init, exportName, replace = [] }) {
  let s = read(from);
  const lines = s.split('\n');
  const lastImport = lines.findLastIndex((l) => l.startsWith('import '));
  s = lines.slice(lastImport + 1).join('\n');
  s = s.replace(/glsl\(`([^`]+)`\)/g, (_, f) => JSON.stringify(read(path.join(shaders, f))));
  s = stripControls(s);
  for (const [a, b] of replace) {
    if (!s.includes(a)) throw new Error(`${from}: motif introuvable « ${a} »`);
    s = s.split(a).join(b);
  }
  const left = s.split('\n').filter((l) => !/^\s*\/\//.test(l) && /glsl\(|ControlType|addPropertyControls|RenderTarget\.|three\.module/.test(l));
  if (left.length) throw new Error(`${from}: liaison Framer restante\n${left.join('\n').slice(0, 600)}`);
  const out = `${header}\n${s}\n${init}();\nexport { ${exportName} };\n`;
  fs.mkdirSync(path.dirname(path.join(ROOT, to)), { recursive: true });
  fs.writeFileSync(path.join(ROOT, to), out);
  console.log(to, out.length, 'octets');
}

const shim = (hooks) => `// @ts-nocheck
'use client';
/* eslint-disable */
// GÉNÉRÉ par scripts/agents/homea/port.mjs — ne pas modifier à la main.
import * as React from 'react';
import { ${hooks} } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { createPortal } from 'react-dom';
// Liaisons du module d'origine (globalThis.window / navigator, undefined côté serveur).
const win = typeof window !== 'undefined' ? window : undefined;
const nav = typeof navigator !== 'undefined' ? navigator : undefined;
// Initialisation paresseuse rolldown : exécutée une seule fois, à l'import.
const __esmMin = (fn) => { let done = false, r; return () => (done ? r : ((done = true), (r = fn()))); };
const initEnv = () => {}, initReact = () => {}, initReactDom = () => {}, initJsxRuntime = () => {}, initFramer = () => {};
`;

port({
  from: 'reference/framer-code/extracted/Preloader.js',
  to: 'src/components/preloader/PortalPreloader.ts',
  shaders: 'reference/webgl/preloader/shaders',
  header: shim('startTransition, useState, useRef, useLayoutEffect, useMemo, useInsertionEffect, useCallback, useEffect'),
  init: 'initPortalPreloaderModule',
  exportName: 'PortalPreloader',
  // Site publié : jamais le canevas de l'éditeur Framer.
  replace: [['RenderTarget.current() !== RenderTarget.preview', 'false']],
});

port({
  from: 'reference/framer-code/extracted/HeroSlider.js',
  to: 'src/webgl/hero-slider/DistortoSlider.ts',
  shaders: 'reference/webgl/hero-slider/shaders',
  header: shim('startTransition, useState, useRef, useMemo, useEffect') + `// Site publié : jamais de rendu statique (useIsStaticRenderer de Framer = false).\nconst useIsStaticRenderer = () => false;\n`,
  init: 'initHeroSliderModule',
  exportName: 'DistortoSlider',
  // three r136 (même version, D-013) : le module Framer exportait l'espace de noms sous \`C\`.
  replace: [['import(`./three.module.CJpBf6nA.mjs`).then(mod => (mod.x(), mod.C))', "import('three').then(mod => mod)"]],
});
