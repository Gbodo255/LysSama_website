// =====================================================================================================
// NotFound3D.js — composant de code Framer de la page 404 (« 404 » en fil de fer 3D qui éclate sous le curseur)
// Extrait de reference/framer-code/pretty/2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs.js (lignes 104-1300 ;
// module publié reference/framer/js/2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs).
// Méthode : renommage d'identifiants par portée (Babel scope.rename), « !0/!1 » → true/false, commentaires ajoutés.
// La logique est inchangée (vérification d'alpha-équivalence avec l'original). Petites variables locales non renommées.
// Bibliothèque : three.js r136 (import statique de reference/framer/js/three.module.CJpBf6nA.mjs).
// Shaders : reference/webgl/404/shaders/*.glsl. Fiche : docs/WEBGL.md « Page 404 ».
// Police 3D du site : https://framerusercontent.com/assets/UNBtynp7L2M6fruNPHYtc3EKUA.json (typeface.json « Mona Sans », bold).
// =====================================================================================================
import { t as __lazyInit } from "./rolldown-runtime.Bi-D_2cA.mjs";
import { B as win, R as __initReact_R, T as __initReact_T, _ as useState, b as useRef, o as jsx, s as __initReact_s, y as useEffect } from "./react.DfujhmXs.mjs";
import { N as addPropertyControls, Q as __initFramer_Q, Wt as RenderTarget, s as ControlType } from "./framer.DdqHlrxM.mjs";
import { _ as Vector2, a as ExtrudeGeometry, c as Mesh, d as Path, f as PerspectiveCamera, g as Shape, h as ShaderMaterial, i as EdgesGeometry, l as RGBAFormat, m as Scene, n as CanvasTexture, o as Float32BufferAttribute, p as PlaneGeometry, r as Color, s as LineSegments, t as BufferGeometry, u as OrthographicCamera, v as WebGLRenderTarget, w as LinearFilter, x as __initThree, y as WebGLRenderer } from "./three.module.CJpBf6nA.mjs";
// Équivalent de la définition de champ de classe (Object.defineProperty, compilée).
function defineField(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e;
}
// Drapeaux de débogage « miralab » (même code que la vitrine) ; visiteur normal : false. Drapeaux lus ici : wtfont, wtdepth, wtsingle, wtmsaa, wttrail.
function miraLabFlag(e) {
  if (win === void 0) return false;
  let n = win;
  if (!n.__miraLab) {
    let e = ``;
    try {
      let n = new URLSearchParams(win.location.search).get(`miralab`);
      n === null ? e = win.sessionStorage.getItem(`miralab`) || `` : (e = n, win.sessionStorage.setItem(`miralab`, n));
    } catch {}
    n.__miraLab = new Set(e.split(`,`).map(e => e.trim()).filter(Boolean));
  }
  return n.__miraLab.has(e) || e !== `hud` && n.__miraLab.has(`before`);
}
// Chargement (mis en cache par URL) du fichier typeface.json (format facetype.js / three TextGeometry).
function loadTypefaceJson(e) {
  return typefaceCache[e] || (typefaceCache[e] = fetch(e).then(e => {
    if (!e.ok) throw Error(`font ${e.status}`);
    return e.json();
  })), typefaceCache[e];
}
// Glyphes typeface.json → THREE.Shape (commandes m/l/q/b mises à l'échelle taille/resolution).
// Si un glyphe a plusieurs contours : le plus grand (aire du polygone échantillonné à 12 points) est le contour, les autres ses trous.
// Avance horizontale = glyph.ha × échelle. Pas de crénage, une seule ligne.
function buildTextShapes(typefaceJson, chars, sizePx) {
  let typeface = typefaceJson.data || typefaceJson,
    unitScale = sizePx / (typeface.resolution || 1e3),
    lineHeightPx = (typeface.boundingBox.yMax - typeface.boundingBox.yMin) * unitScale,
    shapes = [],
    penX = 0;
  for (let e of chars) {
    let t = typeface.glyphs[e] || typeface.glyphs[`?`];
    if (t) {
      if (t.o) {
        let e = t.o.split(` `),
          n = null,
          r = [],
          a = 0,
          c = () => parseFloat(e[a++]) * unitScale;
        for (; a < e.length;) {
          let t = e[a++];
          if (t === `m`) {
            let e = c() + penX,
              t = c();
            n = new Shape(), n.moveTo(e, t), r.push(n);
          } else if (t === `l` && n) n.lineTo(c() + penX, c());else if (t === `q` && n) {
            let e = c() + penX,
              t = c();
            n.quadraticCurveTo(c() + penX, c(), e, t);
          } else if (t === `b` && n) {
            let e = c() + penX,
              t = c();
            n.bezierCurveTo(c() + penX, c(), c() + penX, c(), e, t);
          }
        }
        if (r.length > 1) {
          let e = r[0],
            t = 0;
          for (let n of r) {
            let r = n.getPoints(12),
              i = 0;
            for (let e = 0; e < r.length; e++) {
              let t = r[e],
                n = r[(e + 1) % r.length];
              i += t.x * n.y - n.x * t.y;
            }
            i = Math.abs(i / 2), i > t && (t = i, e = n);
          }
          e.holes = r.filter(t => t !== e).map(e => {
            let t = new Path();
            return t.curves = e.curves, t;
          }), shapes.push(e);
        } else r.length === 1 && shapes.push(r[0]);
      }
      penX += (t.ha || 0) * unitScale;
    }
  }
  return {
    shapes: shapes,
    width: penX,
    height: lineHeightPx
  };
}
// Easing sin(x·π/2).
function easeOutSine(e) {
  return Math.sin(e * Math.PI / 2);
}
// =====================================================================================================
// Composant de code de la page 404 : texte extrudé en 3D rendu en fil de fer, qui éclate sous le curseur.
// ? Nom d'origine inconnu (pas de displayName dans le module) : « Wireframe404 » est un nom d'extraction.
// =====================================================================================================
function Wireframe404(props) {
  let {
      text = `404`,
      fontFile: fontFile,
      fontUrl = `https://unpkg.com/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json`,
      color = `#FFFFFF`,
      extrudeDepth = 22,
      bevel = true,
      lineOpacity = .9,
      rotateSpeed = .4,
      startAngle = -20,
      mouseFollow = .16,
      dragSensitivity = 1,
      lineWidth = 1.6,
      scrollPan = 1,
      warpStrength = 1,
      warpRadius = .13,
      trailDecay = 1.2,
      grainScale = 18,
      mouseSpeedReact = true,
      mouseChroma = .35,
      scrollFlex = 120,
      cameraHeight = .3,
      floorGrid = true,
      envOpacity = .25,
      explodeSpread = 1.1,
      explodeSnap = 130,
      shardSize = 10,
      pressDepth = 80,
      rippleAmount = 12,
      minSize = 64,
      fluidSize = 14,
      maxSize = 320,
      padding = .12,
      style: style
    } = props,
    hostRef = useRef(null),
    [failed, setFailed] = useState(false),
    isCanvas = RenderTarget.current() === RenderTarget.canvas;
  // Tout le WebGL vit dans un seul effet, recréé à chaque changement de prop.
  return useEffect(() => {
    if (!hostRef.current) return;
    // Contexte : mouvement réduit ou canevas Framer → rendu fixe (pas de boucle) ; pointeur grossier → MSAA, pas de passe post, pas de traînée.
    let host = hostRef.current,
      state = {
        raf: 0,
        visible: true,
        disposed: false,
        started: false
      },
      reducedMotion = win.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
      finePointer = win.matchMedia(`(pointer: fine)`).matches,
      coarsePointer = !finePointer,
      pixelRatio = Math.min(win.devicePixelRatio || 1, isCanvas ? 1 : 1.5),
      useDepth = miraLabFlag(`wtdepth`),
      frontSideDoubled = !miraLabFlag(`wtsingle`);
    // Préchargement du typeface dès le montage.
    miraLabFlag(`wtfont`) || loadTypefaceJson(fontFile || fontUrl).catch(() => {});
    let renderer;
    // Renderer : alpha, antialias seulement en pointeur grossier, sans depth/stencil (sauf drapeau wtdepth), powerPreference high-performance.
    // Échec → repli : texte HTML (span) centré.
    try {
      renderer = new WebGLRenderer({
        alpha: true,
        antialias: coarsePointer || miraLabFlag(`wtmsaa`),
        depth: useDepth,
        stencil: useDepth,
        powerPreference: `high-performance`
      });
    } catch {
      setFailed(true);
      return;
    }
    // Canvas absolu, sans pointer-events, débordant de 22 % de chaque côté (voir resize).
    renderer.setPixelRatio(pixelRatio), renderer.domElement.style.cssText = `position:absolute;display:block;pointer-events:none;`, host.appendChild(renderer.domElement);
    // Scène : caméra perspective fov 35°, near 1, far 10000 ; orbite autour de l'origine.
    let OVERSCAN = .22,
      scene = new Scene(),
      camera = new PerspectiveCamera(35, 1, 1, 1e4),
      orbitRadius = 1,
      // Uniforms des éclats (segments épais dessinés en quads, voir SHARD_VERTEX_SHADER).
      shardUniforms = {
        uColor: {
          value: new Color(color)
        },
        uOpacity: {
          value: lineOpacity
        },
        uTime: {
          value: 0
        },
        uExplode: {
          value: 0
        },
        uSpread: {
          value: 1
        },
        uFlexV: {
          value: 0
        },
        uHalfW: {
          value: 1
        },
        uRes: {
          value: new Vector2(1, 1)
        },
        uWidth: {
          value: lineWidth * pixelRatio
        },
        uTrail: {
          value: null
        },
        uPress: {
          value: pressDepth
        },
        uRipple: {
          value: rippleAmount
        },
        uTrailTime: {
          value: 0
        }
      },
      shardMaterial = new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: frontSideDoubled ? 0 : 2,
        uniforms: shardUniforms,
        vertexShader: SHARD_VERTEX_SHADER,
        fragmentShader: SHARD_FRAGMENT_SHADER
      }),
      // Passe post (pointeur fin uniquement) : scène → cible RGBA linéaire → quad plein écran déformé dans la traînée du curseur.
      postTarget = null,
      postScene = new Scene(),
      postCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1),
      trail = new CursorTrail(Math.round(trailDecay * 60), warpRadius);
    shardUniforms.uTrail.value = trail.texture;
    let postUniforms = {
        tDiffuse: {
          value: null
        },
        uTrail: {
          value: trail.texture
        },
        uTime: {
          value: 0
        },
        uMouseStrength: {
          value: warpStrength
        },
        uMouseChroma: {
          value: mouseChroma
        },
        uMouseVel: {
          value: 1
        },
        uGrain: {
          value: grainScale
        }
      },
      postMaterial = new ShaderMaterial({
        transparent: true,
        uniforms: postUniforms,
        vertexShader: POST_VERTEX_SHADER,
        fragmentShader: POST_FRAGMENT_SHADER
      });
    postScene.add(new Mesh(new PlaneGeometry(2, 2), postMaterial));
    // Rendu : direct en pointeur grossier ; sinon via la cible + passe post.
    function renderScene() {
      coarsePointer || !postTarget ? renderer.render(scene, camera) : (renderer.setRenderTarget(postTarget), renderer.setClearColor(0, 0), renderer.clear(), renderer.render(scene, camera), renderer.setRenderTarget(null), postUniforms.tDiffuse.value = postTarget.texture, renderer.render(postScene, postCamera));
    }
    // Grille de sol : LineSegments 29 + 29 lignes, fondue radialement (GRID shaders en ligne).
    let gridMaterial = new ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uColor: {
            value: new Color(color)
          },
          uOpacity: {
            value: envOpacity
          },
          uExtent: {
            value: 1
          }
        },
        vertexShader: `
                varying vec2 vXZ;
                void main() {
                    vXZ = position.xz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
        fragmentShader: `
                uniform vec3 uColor;
                uniform float uOpacity;
                uniform float uExtent;
                varying vec2 vXZ;
                void main() {
                    float r = length(vXZ) / uExtent;
                    float a = uOpacity * (1.0 - smoothstep(0.55, 1.0, r));
                    if (a < 0.005) discard;
                    gl_FragColor = vec4(uColor, a);
                }
            `
      }),
      shardMesh = null,
      gridMesh = null;
    // Grille : y = −(demi-hauteur du texte + 1) × 1,15 ; étendue = max(largeur, hauteur) × 1,1 ; pas = étendue / 14.
    function buildFloorGrid(textHalfHeight, extent) {
      if (gridMesh &&= (gridMesh.geometry.dispose(), scene.remove(gridMesh), null), !floorGrid) return;
      let floorY = -textHalfHeight * 1.15,
        cell = extent / 14,
        gridVerts = [];
      for (let e = -14; e <= 14; e++) gridVerts.push(e * cell, floorY, -extent, e * cell, floorY, extent), gridVerts.push(-extent, floorY, e * cell, extent, floorY, e * cell);
      let gridGeometry = new BufferGeometry();
      gridGeometry.setAttribute(`position`, new Float32BufferAttribute(gridVerts, 3)), gridMaterial.uniforms.uExtent.value = extent, gridMesh = new LineSegments(gridGeometry, gridMaterial), gridMesh.frustumCulled = false, scene.add(gridMesh);
    }
    // Construit le texte : ExtrudeGeometry (profondeur extrudeDepth, biseau 1,6 si bevel, 1 segment, curveSegments 8), centré,
    // mis à l'échelle pour une hauteur clamp(minSize, fluidSize vw, maxSize) bornée par padding, puis EdgesGeometry (seuil 11°).
    // Chaque arête est découpée en éclats de longueur ≈ shardSize px, chacun avec direction d'explosion, axe de rotation et graine aléatoires.
    function buildText(font) {
      let hostW = host.clientWidth,
        hostH = host.clientHeight;
      if (!hostW || !hostH) return;
      shardUniforms.uColor.value = new Color(color), gridMaterial.uniforms.uColor.value = new Color(color);
      let {
        shapes: glyphShapes
      } = buildTextShapes(font, text, 100);
      if (!glyphShapes.length) return;
      let bevelSize = bevel ? 1.6 : 0,
        extruded = new ExtrudeGeometry(glyphShapes, {
          depth: extrudeDepth,
          bevelEnabled: bevel,
          bevelThickness: bevelSize,
          bevelSize: bevelSize,
          bevelSegments: 1,
          curveSegments: 8
        });
      extruded.computeBoundingBox();
      let bbox = extruded.boundingBox,
        textW = bbox.max.x - bbox.min.x,
        textH = bbox.max.y - bbox.min.y,
        // Taille CSS du texte = clamp(minSize, innerWidth × fluidSize / 100, maxSize), en hauteur de boîte englobante.
        fluidPx = win.innerWidth * fluidSize / 100,
        fitScale = Math.min(Math.min(Math.max(minSize, fluidPx), maxSize) / textH, hostW * (1 - padding * 2) / textW, hostH * (1 - padding * 2) / textH);
      extruded.translate(-(bbox.min.x + textW / 2), -(bbox.min.y + textH / 2), -(extrudeDepth / 2)), extruded.scale(fitScale, fitScale, fitScale);
      let edges = new EdgesGeometry(extruded, 11);
      extruded.dispose();
      let edgeVerts = edges.attributes.position.array;
      edges.dispose();
      let shardLen = Math.max(4, shardSize),
        segVerts = [],
        segCenters = [],
        segDirs = [],
        segAxes = [],
        segSeeds = [],
        edgeCount = edgeVerts.length / 6;
      for (let e = 0; e < edgeCount; e++) {
        let t = edgeVerts[e * 6],
          n = edgeVerts[e * 6 + 1],
          r = edgeVerts[e * 6 + 2],
          i = edgeVerts[e * 6 + 3],
          a = edgeVerts[e * 6 + 4],
          o = edgeVerts[e * 6 + 5],
          s = Math.hypot(i - t, a - n, o - r),
          pieces = Math.max(1, Math.round(s / shardLen));
        for (let e = 0; e < pieces; e++) {
          let s = e / pieces,
            l = (e + 1) / pieces,
            u = t + (i - t) * s,
            d = n + (a - n) * s,
            f = r + (o - r) * s,
            p = t + (i - t) * l,
            m = n + (a - n) * l,
            h = r + (o - r) * l,
            g = (u + p) / 2,
            _ = (d + m) / 2,
            v = (f + h) / 2;
          segVerts.push(u, d, f, p, m, h);
          let y = Math.random() * 2 - 1,
            b = Math.random() * Math.PI * 2,
            w = Math.sqrt(1 - y * y),
            T = w * Math.cos(b) * .6 + g * .004,
            E = y * .6 + _ * .004,
            D = w * Math.sin(b),
            O = Math.hypot(T, E, D) || 1;
          T /= O, E /= O, D /= O;
          let k = Math.random() * 2 - 1,
            A = Math.random() * 2 - 1,
            j = Math.random() * 2 - 1,
            M = Math.hypot(k, A, j) || 1,
            ne = Math.random();
          for (let e = 0; e < 2; e++) segCenters.push(g, _, v), segDirs.push(T, E, D), segAxes.push(k / M, A / M, j / M), segSeeds.push(ne);
        }
      }
      shardMesh && (shardMesh.geometry.dispose(), scene.remove(shardMesh));
      // Chaque éclat = 4 sommets (aT 0/1 × aSide −1/+1) → 2 triangles. Normalement (pas de drapeau wtsingle) : matériau FrontSide et triangles dupliqués en ordre inversé ; avec wtsingle : DoubleSide sans duplication.
      let segCount = segVerts.length / 6,
        aStartArr = [],
        aEndArr = [],
        aTArr = [],
        aSideArr = [],
        aDirArr = [],
        aAxisArr = [],
        aSeedArr = [],
        indices = [];
      for (let e = 0; e < segCount; e++) {
        let t = segVerts[e * 6],
          n = segVerts[e * 6 + 1],
          r = segVerts[e * 6 + 2],
          i = segVerts[e * 6 + 3],
          a = segVerts[e * 6 + 4],
          o = segVerts[e * 6 + 5],
          s = e * 4;
        for (let s = 0; s < 4; s++) {
          aStartArr.push(t, n, r), aEndArr.push(i, a, o), aTArr.push(s < 2 ? 0 : 1), aSideArr.push(s % 2 == 0 ? -1 : 1);
          let c = e * 6;
          aDirArr.push(segDirs[c], segDirs[c + 1], segDirs[c + 2]), aAxisArr.push(segAxes[c], segAxes[c + 1], segAxes[c + 2]), aSeedArr.push(segSeeds[e * 2]);
        }
        indices.push(s, s + 2, s + 1, s + 2, s + 3, s + 1);
      }
      let geometry = new BufferGeometry();
      if (geometry.setAttribute(`position`, new Float32BufferAttribute(aStartArr.slice(), 3)), geometry.setAttribute(`aStart`, new Float32BufferAttribute(aStartArr, 3)), geometry.setAttribute(`aEnd`, new Float32BufferAttribute(aEndArr, 3)), geometry.setAttribute(`aT`, new Float32BufferAttribute(aTArr, 1)), geometry.setAttribute(`aSide`, new Float32BufferAttribute(aSideArr, 1)), geometry.setAttribute(`aDir`, new Float32BufferAttribute(aDirArr, 3)), geometry.setAttribute(`aAxis`, new Float32BufferAttribute(aAxisArr, 3)), geometry.setAttribute(`aSeed`, new Float32BufferAttribute(aSeedArr, 1)), frontSideDoubled) {
        let e = indices.length,
          t = Array(e * 2);
        for (let n = 0; n < e; n += 3) t[n] = indices[n], t[n + 1] = indices[n + 2], t[n + 2] = indices[n + 1];
        for (let n = 0; n < e; n++) t[e + n] = indices[n];
        geometry.setIndex(t);
      } else geometry.setIndex(indices);
      shardMesh = new Mesh(geometry, shardMaterial), shardMesh.frustumCulled = false, scene.add(shardMesh), shardUniforms.uSpread.value = Math.min(hostW, hostH) * .5 * explodeSpread, shardUniforms.uHalfW.value = textW * fitScale / 2;
      // Épaisseur de trait proportionnelle à la hauteur rendue (référence 260 px, facteur borné 0,4–2,5).
      let renderedTextH = textH * fitScale,
        widthScale = Math.min(Math.max(renderedTextH / 260, .4), 2.5);
      shardUniforms.uWidth.value = lineWidth * pixelRatio * widthScale, buildFloorGrid(textH * fitScale / 2 + 1, Math.max(hostW, hostH) * 1.1);
    }
    let loadedTypeface = null,
      overscanX = 0,
      overscanY = 0,
      canvasW = 1,
      canvasH = 1,
      lastHostW = 0,
      lastHostH = 0,
      lastInnerWidth = 0;
    // Redimensionnement : canvas = hôte + 22 % de marge de chaque côté ; distance caméra pour que 1 unité = 1 px CSS au plan z = 0.
    function resize() {
      let hostWidth = host.clientWidth,
        hostHeight = host.clientHeight;
      if (!hostWidth || !hostHeight || hostWidth === lastHostW && hostHeight === lastHostH && win.innerWidth === lastInnerWidth) return;
      lastHostW = hostWidth, lastHostH = hostHeight, lastInnerWidth = win.innerWidth;
      let padX = Math.round(hostWidth * OVERSCAN),
        padY = Math.round(hostHeight * OVERSCAN),
        fullW = hostWidth + padX * 2,
        fullH = hostHeight + padY * 2;
      overscanX = padX, overscanY = padY, canvasW = fullW, canvasH = fullH, renderer.setSize(fullW, fullH);
      let canvasEl = renderer.domElement;
      canvasEl.style.left = `${-padX}px`, canvasEl.style.top = `${-padY}px`, camera.aspect = fullW / fullH, orbitRadius = fullH / 2 / Math.tan(camera.fov * Math.PI / 360), camera.updateProjectionMatrix(), postTarget?.dispose();
      let bufferW = Math.round(fullW * pixelRatio),
        bufferH = Math.round(fullH * pixelRatio);
      postTarget = coarsePointer ? null : new WebGLRenderTarget(bufferW, bufferH, {
        format: RGBAFormat,
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        depthBuffer: useDepth
      }), shardUniforms.uRes.value.set(bufferW, bufferH), shardUniforms.uWidth.value = lineWidth * pixelRatio, loadedTypeface && buildText(loadedTypeface);
    }
    resize();
    // État d'interaction : pointeur (−1..1), inclinaison lissée, vitesse, glisser/lancer, molette, explosion (ressort).
    let pointerX = 0,
      pointerY = 0,
      tiltY = 0,
      tiltX = 0,
      smoothX = 0,
      smoothY = 0,
      pointerSpeed = 0,
      dragAngle = 0,
      throwVelocity = 0,
      autoOrbitWeight = 1,
      lastInteractionAt = -1e9,
      pressed = false,
      dragging = false,
      downX = 0,
      downY = 0,
      downAt = 0,
      lastDragX = 0,
      explodeTarget = 0,
      explodeValue = 0,
      explodeVelocity = 0;
    // Pointeur : traînée (pointeur fin), seuil de glisser 6 px (souris) / 12 px (tactile) ; glisser → angle d'orbite (3,5 rad par largeur × dragSensitivity).
    function onPointerMove(evt) {
      let rect = host.getBoundingClientRect();
      if (finePointer) {
        pointerX = (evt.clientX - rect.left) / rect.width * 2 - 1, pointerY = (evt.clientY - rect.top) / rect.height * 2 - 1;
        let e = mouseSpeedReact ? .35 + pointerSpeed * .65 : 1;
        trail.addTouch((evt.clientX - rect.left + overscanX) / canvasW, 1 - (evt.clientY - rect.top + overscanY) / canvasH, e);
      }
      if (pressed && !dragging) {
        let e = coarsePointer ? 12 : 6;
        Math.hypot(evt.clientX - downX, evt.clientY - downY) > e && (dragging = true, lastDragX = evt.clientX);
      }
      if (dragging) {
        let n = evt.clientX - lastDragX;
        lastDragX = evt.clientX;
        let r = n / host.getBoundingClientRect().width * 3.5 * dragSensitivity;
        dragAngle -= r, throwVelocity = -r, lastInteractionAt = performance.now();
      }
    }
    // Appui : explosion immédiate à la souris ; en tactile après 220 ms d'appui immobile (voir frame).
    function onPointerDown(e) {
      pressed = true, dragging = false, downX = e.clientX, downY = e.clientY, downAt = performance.now(), lastInteractionAt = downAt, coarsePointer || (explodeTarget = 1);
    }
    function onPointerUp() {
      pressed = false, dragging = false, explodeTarget = 0;
    }
    function onPointerLeaveTrail() {
      trail.clearLast();
    }
    // Interactif sauf mouvement réduit et canevas Framer.
    let interactive = !reducedMotion && !isCanvas;
    interactive && (host.addEventListener(`pointermove`, onPointerMove, {
      passive: true
    }), host.addEventListener(`pointerdown`, onPointerDown, {
      passive: true
    }), win.addEventListener(`pointerup`, onPointerUp, {
      passive: true
    }), host.addEventListener(`pointerleave`, onPointerUp, {
      passive: true
    }), host.addEventListener(`pointerleave`, onPointerLeaveTrail, {
      passive: true
    }));
    let wheelImpulse = 0,
      wheelVelocity = 0;
    // Molette : impulsion deltaY × 0,012 × scrollPan (ne bloque pas le défilement : passive).
    function onWheel(e) {
      wheelImpulse += e.deltaY * .012 * scrollPan, lastInteractionAt = performance.now();
    }
    interactive && host.addEventListener(`wheel`, onWheel, {
      passive: true
    });
    let windowResizeTimer = 0;
    function onWindowResize() {
      windowResizeTimer && win.clearTimeout(windowResizeTimer), windowResizeTimer = win.setTimeout(() => {
        resize(), interactive || renderStill();
      }, 120);
    }
    win.addEventListener(`resize`, onWindowResize, {
      passive: true
    });
    // Caméra en orbite : angle horizontal e, élévation t bornée 0,03–1,2 rad, regarde l'origine.
    function placeCamera(e, t) {
      let n = Math.min(Math.max(t, .03), 1.2);
      camera.position.set(Math.sin(e) * orbitRadius * Math.cos(n), Math.sin(n) * orbitRadius, Math.cos(e) * orbitRadius * Math.cos(n)), camera.lookAt(0, 0, 0);
    }
    // Image fixe (mouvement réduit / canevas) : uTime = 5,2, angle de départ, hauteur caméra.
    function renderStill() {
      shardUniforms.uTime.value = 5.2, placeCamera(startAngle * Math.PI / 180, cameraHeight), renderScene();
    }
    let startTime = performance.now(),
      lastFrameTime = startTime,
      orbitAngle = startAngle * Math.PI / 180;
    function tick() {
      if (!state.disposed) try {
        frame();
      } catch {
        state.raf && cancelAnimationFrame(state.raf), state.raf = 0;
      }
    }
    // Une image : dt ≤ 33 ms ; orbite auto (rotateSpeed) suspendue pendant le glisser et 2 s après une interaction ;
    // lancer amorti ×0,94 ; inclinaison souris ×0,06 ; molette lissée ×0,12, décroissance ×0,92 ; ressort d'explosion (raideur explodeSnap, amortissement 0,75 du critique).
    function frame() {
      let nowMs = performance.now(),
        deltaSec = Math.min((nowMs - lastFrameTime) / 1e3, .033);
      lastFrameTime = nowMs;
      let elapsed = (nowMs - startTime) / 1e3;
      shardUniforms.uTime.value = elapsed % 3600, coarsePointer && pressed && !dragging && explodeTarget === 0 && nowMs - downAt > 220 && (explodeTarget = 1);
      let sinceInteraction = nowMs - lastInteractionAt;
      autoOrbitWeight += ((dragging || sinceInteraction < 2e3 ? 0 : 1) - autoOrbitWeight) * (deltaSec * 2), orbitAngle += rotateSpeed * deltaSec * autoOrbitWeight, dragging || (dragAngle += throwVelocity, throwVelocity *= .94);
      let notDragging = +!dragging;
      tiltY += (pointerY * mouseFollow * notDragging - tiltY) * .06, tiltX += (pointerX * mouseFollow * notDragging - tiltX) * .06;
      let prevSmoothX = smoothX,
        prevSmoothY = smoothY;
      smoothX += (pointerX - smoothX) * .12, smoothY += (pointerY - smoothY) * .12;
      let smoothStep = Math.hypot(smoothX - prevSmoothX, smoothY - prevSmoothY);
      pointerSpeed += (Math.min(smoothStep * 60, 1) - pointerSpeed) * .08, postUniforms.uTime.value = shardUniforms.uTime.value, shardUniforms.uTrailTime.value = shardUniforms.uTime.value, postUniforms.uMouseVel.value = mouseSpeedReact ? .35 + pointerSpeed * .65 : 1, finePointer && trail.update(), wheelVelocity += (wheelImpulse - wheelVelocity) * .12, dragAngle += wheelVelocity * deltaSec, wheelImpulse *= .92, shardUniforms.uFlexV.value = Math.min(Math.abs(wheelVelocity) * .02, 1) * scrollFlex;
      let stiffness = explodeSnap,
        damping = 2 * Math.sqrt(stiffness) * .75,
        springAccel = (explodeTarget - explodeValue) * stiffness - explodeVelocity * damping;
      explodeVelocity += springAccel * deltaSec, explodeValue += explodeVelocity * deltaSec, shardUniforms.uExplode.value = Math.max(explodeValue, 0), placeCamera(orbitAngle + dragAngle + tiltX, cameraHeight + tiltY), renderScene(), state.visible && interactive ? state.raf = requestAnimationFrame(tick) : state.raf = 0;
    }
    // Démarrage : typeface → construction (rAF) → compilation (rAF) → boucle (rAF) ; canvas révélé (opacité 0 → 1 en 350 ms).
    function start() {
      state.disposed || state.started || (state.started = true, loadTypefaceJson(fontFile || fontUrl).then(e => {
        state.disposed || (loadedTypeface = e, requestAnimationFrame(() => {
          if (!state.disposed) {
            try {
              buildText(loadedTypeface);
            } catch {
              setFailed(true);
              return;
            }
            requestAnimationFrame(() => {
              if (!state.disposed) {
                try {
                  renderer.compile(scene, camera);
                } catch {}
                requestAnimationFrame(() => {
                  state.disposed || (interactive ? (lastFrameTime = performance.now(), state.raf ||= requestAnimationFrame(tick)) : renderStill(), renderer.domElement.style.opacity = `1`);
                });
              }
            });
          }
        }));
      }).catch(() => {
        state.disposed || setFailed(true);
      }));
    }
    let quietWaitRaf = 0;
    // Attend une période calme (6 images < 22 ms d'affilée, aucune animation WAAPI en cours, ≥ 250 ms) ou 1,6 s avant de démarrer.
    if (interactive) {
      renderer.domElement.style.opacity = `0`, renderer.domElement.style.transition = `opacity 350ms ease`;
      let e = 0,
        t = performance.now(),
        n = t,
        r = () => {
          if (state.disposed || state.started) return;
          let i = performance.now(),
            a = i - t;
          t = i, e = a < 22 ? e + 1 : 0;
          let s = false;
          try {
            s = (document.getAnimations ? document.getAnimations() : []).some(e => e.playState === `running`);
          } catch {}
          let c = i - n;
          e >= 6 && !s && c >= 250 || c > 1600 ? start() : quietWaitRaf = requestAnimationFrame(r);
        };
      quietWaitRaf = requestAnimationFrame(r);
    } else start();
    function onPageShow(e) {
      if (!state.disposed && e && e.persisted) try {
        renderScene();
      } catch {}
    }
    function onContextLost(e) {
      e.preventDefault(), state.raf &&= (cancelAnimationFrame(state.raf), 0);
    }
    function onContextRestored() {
      if (!state.disposed && state.started) try {
        loadedTypeface && buildText(loadedTypeface), interactive && state.visible && !state.raf ? (lastFrameTime = performance.now(), state.raf = requestAnimationFrame(tick)) : renderStill();
      } catch {}
    }
    // bfcache (pageshow persisted), perte/restauration de contexte, pause hors de la vue (IntersectionObserver), resize (debounce 120 ms).
    win.addEventListener(`pageshow`, onPageShow), renderer.domElement.addEventListener(`webglcontextlost`, onContextLost, false), renderer.domElement.addEventListener(`webglcontextrestored`, onContextRestored, false);
    let visibilityIO = new IntersectionObserver(([e]) => {
      state.visible = e.isIntersecting, state.visible && interactive && state.started && !state.raf ? (lastFrameTime = performance.now(), state.raf = requestAnimationFrame(tick)) : !state.visible && state.raf && (cancelAnimationFrame(state.raf), state.raf = 0);
    });
    visibilityIO.observe(host);
    let resizeDebounce = 0,
      resizeObserver = new ResizeObserver(() => {
        resizeDebounce && win.clearTimeout(resizeDebounce), resizeDebounce = win.setTimeout(() => {
          resize(), interactive || renderStill();
        }, 120);
      });
    // Nettoyage complet.
    return resizeObserver.observe(host), () => {
      state.disposed = true;
      try {
        state.raf && cancelAnimationFrame(state.raf), quietWaitRaf && cancelAnimationFrame(quietWaitRaf), resizeDebounce && win.clearTimeout(resizeDebounce), windowResizeTimer && win.clearTimeout(windowResizeTimer);
      } catch {}
      try {
        visibilityIO.disconnect(), resizeObserver.disconnect();
      } catch {}
      try {
        host.removeEventListener(`pointermove`, onPointerMove), host.removeEventListener(`pointerdown`, onPointerDown), win.removeEventListener(`pointerup`, onPointerUp), host.removeEventListener(`pointerleave`, onPointerUp), host.removeEventListener(`pointerleave`, onPointerLeaveTrail), host.removeEventListener(`wheel`, onWheel), win.removeEventListener(`resize`, onWindowResize), win.removeEventListener(`pageshow`, onPageShow), renderer.domElement.removeEventListener(`webglcontextlost`, onContextLost), renderer.domElement.removeEventListener(`webglcontextrestored`, onContextRestored);
      } catch {}
      try {
        shardMesh?.geometry.dispose(), gridMesh?.geometry.dispose(), shardMaterial.dispose(), gridMaterial.dispose(), postMaterial.dispose(), trail.dispose(), postTarget?.dispose();
      } catch {}
      try {
        renderer.dispose(), renderer.forceContextLoss?.(), renderer.domElement.remove();
      } catch {}
    };
  }, [text, fontFile, fontUrl, color, extrudeDepth, bevel, lineOpacity, rotateSpeed, startAngle, mouseFollow, dragSensitivity, lineWidth, scrollPan, warpStrength, warpRadius, trailDecay, grainScale, mouseSpeedReact, mouseChroma, scrollFlex, cameraHeight, floorGrid, envOpacity, explodeSpread, explodeSnap, shardSize, pressDepth, rippleAmount, minSize, fluidSize, maxSize, padding, isCanvas]), /*#__PURE__*/jsx(`div`, {
    ref: hostRef,
    style: {
      position: `relative`,
      overflow: `visible`,
      touchAction: `none`,
      ...style
    },
    children: failed && /*#__PURE__*/jsx(`span`, {
      style: {
        position: `absolute`,
        inset: 0,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontSize: `clamp(${minSize}px, ${fluidSize}vw, ${maxSize}px)`,
        fontWeight: 500,
        lineHeight: 1.1,
        color: color,
        pointerEvents: `none`
      },
      children: text
    })
  });
}
var typefaceCache, CursorTrail, NOISE_GLSL, SHARD_VERTEX_SHADER, SHARD_FRAGMENT_SHADER, POST_VERTEX_SHADER, POST_FRAGMENT_SHADER;
// Initialisation paresseuse du module : cache des typefaces, classe de traînée, shaders, contrôles Framer.
function initWireframe404Module() {
  return (initWireframe404Module = __lazyInit(() => {
    __initReact_R(), __initReact_s(), __initReact_T(), __initFramer_Q(), __initThree(), typefaceCache = {}, CursorTrail = class {
      // Ajoute des points tous les 0,02 (uv) entre la dernière position et la nouvelle ; force = min(d² × 8000, 1) × facteur vitesse.
      addTouch(e, t, n) {
        if (this.last) {
          let r = e - this.last.x,
            i = t - this.last.y,
            a = Math.sqrt(r * r + i * i);
          if (a < 4e-4) return;
          let o = Math.min(a * a * 8e3, 1) * n,
            s = Math.max(1, Math.floor(a / .02));
          for (let e = 1; e <= s; e++) {
            let t = e / s;
            this.trail.push({
              x: this.last.x + r * t,
              y: this.last.y + i * t,
              age: 0,
              force: o
            });
          }
        }
        this.last = {
          x: e,
          y: t
        };
      }
      clearLast() {
        this.last = null;
      }
      // Redessine le canvas 128×128 : fond noir, disques à gradient radial additifs (lighter) ; âge max = round(trailDecay × 60) images.
      update() {
        if (this.trail.length === 0 && this.clean && !miraLabFlag(`wttrail`)) return;
        let {
          ctx: e,
          size: t
        } = this;
        e.globalCompositeOperation = `source-over`, e.fillStyle = `black`, e.fillRect(0, 0, t, t), e.globalCompositeOperation = `lighter`;
        for (let n = this.trail.length - 1; n >= 0; n--) {
          let r = this.trail[n];
          if (r.age++, r.age > this.maxAge) {
            this.trail.splice(n, 1);
            continue;
          }
          let i = this.maxAge * .25,
            a = r.age < i ? easeOutSine(r.age / i) : easeOutSine(1 - (r.age - i) / (this.maxAge - i)),
            o = t * this.radius * (.55 + a * .45) * 1.5;
          if (o < .5) continue;
          let s = r.x * t,
            c = (1 - r.y) * t,
            l = e.createRadialGradient(s, c, 0, s, c, o),
            u = .2 * a * (.35 + r.force * .65);
          l.addColorStop(0, `rgba(255,255,255,${u})`), l.addColorStop(.35, `rgba(255,255,255,${u * .55})`), l.addColorStop(1, `rgba(0,0,0,0)`), e.fillStyle = l, e.beginPath(), e.arc(s, c, o, 0, Math.PI * 2), e.fill();
        }
        this.texture.needsUpdate = true, this.clean = this.trail.length === 0;
      }
      dispose() {
        this.texture.dispose();
      }
      // Canvas 2D 128×128 → CanvasTexture (minFilter Linear).
      constructor(e, t) {
        defineField(this, `size`, 128), defineField(this, `maxAge`, void 0), defineField(this, `radius`, void 0), defineField(this, `trail`, []), defineField(this, `canvas`, void 0), defineField(this, `ctx`, void 0), defineField(this, `texture`, void 0), defineField(this, `last`, null), defineField(this, `clean`, true), this.maxAge = Math.max(10, e), this.radius = t, this.canvas = document.createElement(`canvas`), this.canvas.width = this.canvas.height = this.size, this.ctx = this.canvas.getContext(`2d`), this.ctx.fillStyle = `black`, this.ctx.fillRect(0, 0, this.size, this.size), this.texture = new CanvasTexture(this.canvas), this.texture.minFilter = LinearFilter;
      }
    }, NOISE_GLSL = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m * m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}
float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * snoise(p);
        p = p * 2.1 + vec2(1.7, 9.2);
        a *= 0.5;
    }
    return v;
}
`, SHARD_VERTEX_SHADER = `
attribute vec3 aStart;
attribute vec3 aEnd;
attribute float aT;
attribute float aSide;
attribute vec3 aDir;
attribute vec3 aAxis;
attribute float aSeed;
uniform float uTime;
uniform float uExplode;
uniform float uSpread;
uniform float uFlexV;
uniform float uHalfW;
uniform vec2 uRes;
uniform float uWidth;
uniform sampler2D uTrail;
uniform float uPress;
uniform float uRipple;
uniform float uTrailTime;
varying float vDist;
${NOISE_GLSL}
vec3 rotAxis(vec3 v, vec3 axis, float ang) {
    float s = sin(ang);
    float c = cos(ang);
    return v * c + cross(axis, v) * s + axis * dot(axis, v) * (1.0 - c);
}
void main() {
    vec3 center0 = (aStart + aEnd) * 0.5;
    float sx = clamp(center0.x / max(uHalfW, 1.0) * 0.5 + 0.5, 0.0, 1.0);
    float flexZ = (sin(sx * 3.14159265) * 0.85 + 0.2) * uFlexV;

    float e = uExplode * (0.35 + aSeed * 0.65);
    float ang = e * (aSeed - 0.5) * 12.0
        + uTime * (0.4 + aSeed * 0.8) * uExplode;
    vec3 rs = rotAxis(aStart - center0, aAxis, ang);
    vec3 re = rotAxis(aEnd - center0, aAxis, ang);
    vec3 c = center0;
    c.z -= flexZ;
    c += aDir * uSpread * e;
    // Guard: only add drift when exploding — NaN-safe and cheaper
    if (uExplode > 0.001) {
        vec3 tangent = normalize(cross(aDir, vec3(0.0, 1.0, 0.0)) + vec3(1e-4));
        c += tangent * sin(uTime * (0.3 + aSeed * 0.5) + aSeed * 6.2831)
            * uSpread * 0.05 * uExplode;
    }

    // 3D trail response: sample the trail at the shard's projected
    // screen position, then press the shard AWAY in view-space depth
    // with a small fbm ripple. The cursor dents the wireframe IN the
    // space — perspective included — instead of smearing a flat image
    // on top of it.
    vec4 mvS = modelViewMatrix * vec4(c + rs, 1.0);
    vec4 mvE = modelViewMatrix * vec4(c + re, 1.0);
    vec4 cc = projectionMatrix * (mvS + mvE) * 0.5;
    vec2 suv = clamp(cc.xy / max(cc.w, 1e-4) * 0.5 + 0.5, 0.0, 1.0);
    float trail = texture2D(uTrail, suv).r;
    if (trail > 0.004) {
        float press = trail * trail * uPress;
        vec2 rUv = suv * 6.0 + vec2(uTrailTime * 0.4, -uTrailTime * 0.3);
        vec3 rip = vec3(
            snoise(rUv),
            snoise(rUv + vec2(7.1, 3.7)),
            0.0
        ) * trail * uRipple;
        mvS.z -= press;
        mvE.z -= press;
        mvS.xyz += rip;
        mvE.xyz += rip;
    }
    vec4 cs = projectionMatrix * mvS;
    vec4 ce = projectionMatrix * mvE;
    vec2 half_ = uRes * 0.5;
    vec2 sPx = cs.xy / cs.w * half_;
    vec2 ePx = ce.xy / ce.w * half_;
    vec2 d = ePx - sPx;
    float len = max(length(d), 1e-4);
    vec2 n = vec2(-d.y, d.x) / len;
    float halfWpx = uWidth * 0.5 + 1.0;
    vec4 clip = mix(cs, ce, aT);
    vec2 px = mix(sPx, ePx, aT) + n * aSide * halfWpx;
    clip.xy = px / half_ * clip.w;
    vDist = aSide * halfWpx;
    gl_Position = clip;
}
`, SHARD_FRAGMENT_SHADER = `
uniform vec3 uColor;
uniform float uOpacity;
uniform float uWidth;
varying float vDist;
void main() {
    float a = uOpacity
        * (1.0 - smoothstep(uWidth * 0.5 - 0.5, uWidth * 0.5 + 0.6, abs(vDist)));
    if (a < 0.01) discard;
    gl_FragColor = vec4(uColor, a);
}
`, POST_VERTEX_SHADER = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
}
`, POST_FRAGMENT_SHADER = `
uniform sampler2D tDiffuse;
uniform sampler2D uTrail;
uniform float uTime;
uniform float uMouseStrength;
uniform float uMouseChroma;
uniform float uMouseVel;
uniform float uGrain;
varying vec2 vUv;
${NOISE_GLSL}
void main() {
    // Falloff comes from the painted trail — path-shaped, blooming and
    // decaying — instead of a live circular radius. The displacement
    // math stays the showcase's verbatim field.
    float mFall = texture2D(uTrail, vUv).r;
    // PERF: outside the trail (almost everywhere, almost always) skip
    // the 8-snoise fbm entirely — plain passthrough.
    if (mFall < 0.004) {
        gl_FragColor = texture2D(tDiffuse, vUv);
        return;
    }
    float mStrength = 0.12 * uMouseStrength * uMouseVel;
    vec2 nUv = vUv * uGrain + vec2(uTime * 0.4, -uTime * 0.3);
    // Quadratic onset + fbm-modulated falloff: the effect's boundary
    // is noise-shaped and fades in from imperceptible — never a
    // locatable geometric edge, even under a stationary cursor.
    float shaped = mFall * mFall;
    float edgeN = fbm(nUv * 0.5 + vec2(3.7, 1.3)) * 0.5 + 0.5;
    shaped *= 0.6 + 0.8 * edgeN;
    // Finishing layer only: the primary response is the 3D press in
    // the shard shader; this smear stays faint so it never reads as a
    // flat sticker over the 3D scene.
    vec2 mDisp = vec2(fbm(nUv), fbm(nUv + vec2(7.1, 3.7)))
        * shaped * mStrength * 1.1;

    vec4 col;
    if (uMouseChroma > 0.001 && mFall > 0.002) {
        float split = uMouseChroma * 0.45;
        vec4 cG = texture2D(tDiffuse, vUv + mDisp);
        vec4 cR = texture2D(tDiffuse, vUv + mDisp * (1.0 - split));
        vec4 cB = texture2D(tDiffuse, vUv + mDisp * (1.0 + split));
        col = vec4(cR.r, cG.g, cB.b, max(cG.a, max(cR.a, cB.a) * 0.9));
    } else {
        col = texture2D(tDiffuse, vUv + mDisp);
    }
    gl_FragColor = col;
}
`, addPropertyControls(Wireframe404, {
      text: {
        type: ControlType.String,
        title: `Text`,
        defaultValue: `404`,
        description: `Rendered as real extruded 3D geometry — works with any characters your font file includes.`
      },
      fontFile: {
        type: ControlType.File,
        allowedFileTypes: [`json`],
        title: `Font File`,
        description: `Upload a typeface.json to match your template's type. Convert any .ttf/.otf at gero3.github.io/facetype.js. Ships with the template — no external URL.`
      },
      fontUrl: {
        type: ControlType.String,
        title: `Font URL`,
        defaultValue: `https://unpkg.com/three@0.128.0/examples/fonts/helvetiker_bold.typeface.json`,
        description: `Fallback, used only when no Font File is uploaded.`
      },
      color: {
        type: ControlType.Color,
        title: `Color`,
        defaultValue: `#FFFFFF`,
        description: `Wireframe and floor grid. Works on any background.`
      },
      minSize: {
        type: ControlType.Number,
        title: `Min Size`,
        min: 16,
        max: 400,
        defaultValue: 64,
        unit: `px`,
        description: `The three size controls work like clamp(min, vw, max) — the text tracks the viewport between a floor and a ceiling.`
      },
      fluidSize: {
        type: ControlType.Number,
        title: `Fluid Size`,
        min: 1,
        max: 40,
        step: .5,
        defaultValue: 14,
        unit: `vw`
      },
      maxSize: {
        type: ControlType.Number,
        title: `Max Size`,
        min: 40,
        max: 800,
        defaultValue: 320,
        unit: `px`
      },
      padding: {
        type: ControlType.Number,
        title: `Padding`,
        min: 0,
        max: .3,
        step: .01,
        defaultValue: .12,
        description: `Overflow guard as a fraction of the frame — the text never renders past it regardless of the size controls.`
      },
      lineWidth: {
        type: ControlType.Number,
        title: `Line Width`,
        min: .5,
        max: 5,
        step: .1,
        defaultValue: 1.6,
        unit: `px`,
        description: `Stroke weight at a 260px text height — it scales with the rendered size so the weight-to-glyph ratio stays constant across breakpoints. True antialiased thickness, not the 1px browser line limit.`
      },
      lineOpacity: {
        type: ControlType.Number,
        title: `Line Opacity`,
        min: .1,
        max: 1,
        step: .05,
        defaultValue: .9
      },
      extrudeDepth: {
        type: ControlType.Number,
        title: `Depth`,
        min: 2,
        max: 60,
        defaultValue: 22,
        description: `3D extrusion depth of the letterforms.`
      },
      bevel: {
        type: ControlType.Boolean,
        title: `Bevel`,
        defaultValue: true,
        description: `Adds the chamfered edge lines that give the wireframe its technical-drawing detail.`
      },
      shardSize: {
        type: ControlType.Number,
        title: `Shard Size`,
        min: 4,
        max: 30,
        step: 1,
        defaultValue: 10,
        unit: `px`,
        description: `Length of the pieces the wireframe breaks into when it explodes. Smaller reads as finer debris but costs more geometry.`
      },
      rotateSpeed: {
        type: ControlType.Number,
        title: `Orbit Speed`,
        min: -1.5,
        max: 1.5,
        step: .05,
        defaultValue: .4,
        unit: `rad/s`,
        description: `The camera pans 360° around the stationary text. Pauses while the visitor interacts, eases back in after ~2s. Negative reverses.`
      },
      startAngle: {
        type: ControlType.Number,
        title: `Start Angle`,
        min: -180,
        max: 180,
        defaultValue: -20,
        unit: `°`,
        description: `Which side of the text the page opens on.`
      },
      cameraHeight: {
        type: ControlType.Number,
        title: `Camera Height`,
        min: .05,
        max: .8,
        step: .01,
        defaultValue: .3,
        unit: `rad`,
        description: `Orbit elevation. Higher looks down more and shows more of the floor grid; lower is a dramatic near-horizon shot.`
      },
      mouseFollow: {
        type: ControlType.Number,
        title: `Mouse Follow`,
        min: 0,
        max: .6,
        step: .02,
        defaultValue: .16,
        description: `Subtle camera tilt toward the cursor. 0 disables.`
      },
      dragSensitivity: {
        type: ControlType.Number,
        title: `Drag Sensitivity`,
        min: .2,
        max: 3,
        step: .1,
        defaultValue: 1,
        description: `Visitors can grab and throw the orbit — release flings it with inertia. This scales how far a drag turns it.`
      },
      scrollPan: {
        type: ControlType.Number,
        title: `Scroll Pan`,
        min: 0,
        max: 3,
        step: .1,
        defaultValue: 1,
        description: `Scrolling spins the orbit — built for 100vh pages where the document itself never scrolls. 0 disables.`
      },
      scrollFlex: {
        type: ControlType.Number,
        title: `Scroll Flex`,
        min: 0,
        max: 300,
        defaultValue: 120,
        unit: `px`,
        description: `The text arches under scroll momentum and relaxes when it settles — the same flex behavior as the showcase cards.`
      },
      pressDepth: {
        type: ControlType.Number,
        title: `Press Depth`,
        min: 0,
        max: 250,
        defaultValue: 80,
        unit: `px`,
        description: `The cursor paints an invisible trail; wherever it's hot, the wireframe is pressed away in 3D and heals as it fades. The primary cursor interaction.`
      },
      rippleAmount: {
        type: ControlType.Number,
        title: `Ripple`,
        min: 0,
        max: 40,
        defaultValue: 12,
        unit: `px`,
        description: `3D sway of pressed lines while the trail is hot.`
      },
      warpStrength: {
        type: ControlType.Number,
        title: `Warp`,
        min: 0,
        max: 3,
        step: .05,
        defaultValue: 1,
        description: `Faint liquid-glass smear inside the trail, layered over the 3D press. Keep it subtle — the press carries the interaction.`
      },
      mouseChroma: {
        type: ControlType.Number,
        title: `Chroma`,
        min: 0,
        max: 1,
        step: .05,
        defaultValue: .35,
        description: `RGB split inside the warp. 0 for a clean smear.`
      },
      warpRadius: {
        type: ControlType.Number,
        title: `Brush Size`,
        min: .05,
        max: .3,
        step: .01,
        defaultValue: .13,
        description: `Width of the trail the cursor paints.`
      },
      trailDecay: {
        type: ControlType.Number,
        title: `Trail Decay`,
        min: .4,
        max: 3,
        step: .1,
        defaultValue: 1.2,
        unit: `s`,
        description: `How long the disturbance lingers along the cursor's path before healing.`
      },
      grainScale: {
        type: ControlType.Number,
        title: `Grain`,
        min: 4,
        max: 60,
        step: 1,
        defaultValue: 18,
        description: `Frequency of the noise field driving the warp. Lower is broader and soupier, higher is finer.`
      },
      mouseSpeedReact: {
        type: ControlType.Boolean,
        title: `React to Speed`,
        defaultValue: true,
        description: `Cursor effects intensify with cursor speed — calm on a slow hover, aggressive on a fast swipe.`
      },
      explodeSpread: {
        type: ControlType.Number,
        title: `Explode Spread`,
        min: .2,
        max: 2.5,
        step: .05,
        defaultValue: 1.1,
        description: `Press and hold anywhere to detonate the wireframe into its shards; it stays exploded — draggable — until release, then springs back. This scales how far the debris flies.`
      },
      explodeSnap: {
        type: ControlType.Number,
        title: `Explode Snap`,
        min: 20,
        max: 400,
        defaultValue: 130,
        description: `Spring stiffness of the detonation and reform. Higher is snappier, lower is floatier.`
      },
      floorGrid: {
        type: ControlType.Boolean,
        title: `Floor Grid`,
        defaultValue: true,
        description: `The perspective floor under the text — it's what sells the camera's motion through the space.`
      },
      envOpacity: {
        type: ControlType.Number,
        title: `Grid Opacity`,
        min: .03,
        max: .5,
        step: .01,
        defaultValue: .25,
        description: `Keep it a whisper — it should read as space, not decoration. Component from [LaunchNow Design](https://launchnow.design/?utm_source=codecomponent)`
      }
    });
  }))();
}

initWireframe404Module();
export default Wireframe404;
