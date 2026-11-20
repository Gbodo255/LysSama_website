
precision highp float;
varying vec2 vUv;

uniform vec2  uRes;       // canvas size in px
uniform float uTime;      // seconds
uniform vec3  uColor;     // overlay color
uniform float uProgress;  // 0 = fully covered, 1 = fully revealed (eased)
uniform float uVel;       // normalized eased velocity of the reveal
uniform float uEffect;    // 0 curve, 1 streaks, 2 liquid, 3 pixelate,
                          // 4 dissolve, 5 filmBurn, 6 glitch, 7 ink,
                          // 8 hex, 9 noiseWarp
uniform float uDir;       // 0 up, 1 down, 2 left, 3 right, 4 center
uniform float uBend;      // bend arc intensity (Curve wipe base)
uniform float uStrength;  // edge distortion strength (Streaks/Liquid/Pixelate)
uniform float uBand;      // width of the distorted zone around the edge
uniform float uChroma;    // RGB split of the reveal mask
uniform float uSoft;      // edge softness
uniform sampler2D uLogo;  // rasterized logo (alpha = the window shape)
uniform float uMask;      // 1 = logo-window mode active
uniform float uMaskScale; // current zoom of the window
uniform float uMaskW;     // window base width in CANVAS pixels
uniform float uMaskAspect;// logo width / height
uniform float uMaskFade;  // end-of-zoom fade

// --- Showcase / DistortoSlider simplex + fbm (verbatim) ---
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

// --- DistortoSlider "Dissolve" (verbatim) ---
float randD(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}
float noiseD(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = randD(i);
    float b = randD(i + vec2(1.0, 0.0));
    float c = randD(i + vec2(0.0, 1.0));
    float d = randD(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// --- DistortoSlider "Film Burn" (verbatim) ---
float hashFB(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
}
float noiseFB(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hashFB(i);
    float b = hashFB(i + vec2(1.0, 0.0));
    float c = hashFB(i + vec2(0.0, 1.0));
    float d = hashFB(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// --- DistortoSlider "Glitch Blocks" (verbatim) ---
float hashGL(vec2 p) {
    p = fract(p * vec2(311.7, 127.1));
    p += dot(p, p + 34.7);
    return fract(p.x * p.y);
}

// --- DistortoSlider "Ink Spread" (verbatim) ---
float hashIK(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 34.7);
    return fract(p.x * p.y);
}
float noiseIK(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    float a = hashIK(i);
    float b = hashIK(i + vec2(1.0, 0.0));
    float c = hashIK(i + vec2(0.0, 1.0));
    float d = hashIK(i + vec2(1.0, 1.0));
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// --- DistortoSlider "Hex Mosaic" cell snap (verbatim) ---
vec2 hexCell(vec2 uv, float scale) {
    vec2 q = vec2(uv.x * scale, uv.y * scale);
    q.x *= 1.1547;
    vec2 a = vec2(q.x + q.y * 0.5, q.y);
    vec2 ai = floor(a);
    vec2 center = (ai + 0.5);
    vec2 r;
    r.y = center.y;
    r.x = center.x - center.y * 0.5;
    r.x /= 1.1547;
    r /= scale;
    return r;
}

// Progress axis + cross axis. Directional modes reveal first at the edge
// the curtain moves away from; "center" uses radial distance as the axis
// and the angle as the cross coordinate, so every front-based effect can
// bloom outward from the middle.
vec2 axes(vec2 uv) {
    if (uDir < 0.5) return vec2(uv.y, uv.x);         // up
    if (uDir < 1.5) return vec2(1.0 - uv.y, uv.x);   // down
    if (uDir < 2.5) return vec2(1.0 - uv.x, uv.y);   // left
    if (uDir < 3.5) return vec2(uv.x, uv.y);          // right
    // center
    float ar = uRes.x / max(uRes.y, 1.0);
    vec2 q = (uv - 0.5) * vec2(ar, 1.0);
    float maxR = length(vec2(ar, 1.0) * 0.5);
    return vec2(length(q) / maxR, atan(q.y, q.x) / 6.2831853 + 0.5);
}

// Film Burn's ember glow and Noise Warp's streak decay, computed alongside
// coverage.
float gGlow;
float gDecay;

// Coverage of the overlay at this coordinate: 1 = opaque color,
// 0 = revealed page. One function so the chroma split can re-evaluate it
// at offset positions for every mode.
float coverage(vec2 uv) {
    float p = clamp(uProgress, 0.0, 1.0);
    float s = max(uSoft, 0.002);
    float t = uTime * 0.2;
    float v = clamp(uVel, 0.0, 1.0);
    gGlow = 0.0;
    gDecay = 1.0;

    // The slider's transitions guard their endpoints the same way: fully
    // solid at rest, fully gone at the end.
    if (p <= 0.001) return 1.0;
    if (p >= 0.999) return 0.0;

    // Directional stagger for the field modes: local progress leads at the
    // axis origin (or the center) and trails behind by up to spread, so
    // Noise Warp / Dissolve / Hex honor the Direction control — including
    // Center — while keeping their source shaders' exact noise and
    // thresholds. spread 0 would reproduce the slider's uniform timing.
    float aAx = axes(uv).x;
    float spread = 0.6;
    float lp = clamp(p * (1.0 + spread) - aAx * spread, 0.0, 1.0);

    // ---- NOISE WARP: the slider's full-frame streak reveal, verbatim.
    // Vertically-stretched fbm across the whole frame, noise-thresholded so
    // brighter streaks flip first, with the streak color decay.
    if (uEffect > 8.5) {
        float mid = sin(3.1415926 * p);
        vec2 noiseUV = uv * 1000.0 + vec2(p * 30.0, 0.0);
        float scale = mix(1.0, 1000.0, mid);
        noiseUV.y -= 0.5;
        noiseUV.y *= scale;
        noiseUV.y += 0.5;
        float n1 = fbm(noiseUV);
        float n2 = fbm(noiseUV + vec2(5.3, 3.1));
        float streak = clamp(n1 * 0.5 + 0.5, 0.0, 1.0);
        float edgeSoft = 0.18;
        float mask = smoothstep(1.0 - lp - edgeSoft, 1.0 - lp + edgeSoft, streak);
        mask *= smoothstep(0.0, 0.08, lp);
        mask = max(mask, smoothstep(0.85, 0.99, lp));
        gDecay = 1.0 - 0.35 * mid * smoothstep(0.3, 1.2, abs(n1) + abs(n2));
        return 1.0 - mask;
    }

    // ---- DISSOLVE: the slider's exact noise field; the threshold sweeps
    // just past the noise range so both endpoints are clean.
    if (uEffect > 3.5 && uEffect < 4.5) {
        float n = noiseD(uv * 20.0 + p * 10.0);
        float th = mix(-0.05, 1.05, lp);
        return smoothstep(th - 0.04, th + 0.04, n);
    }

    // ---- FILM BURN: exact envelope (sin(pi*p)), travel (1.2 -> -0.2),
    // wobble (0.12), feather (0.03); the ember glow rides the edge.
    if (uEffect > 4.5 && uEffect < 5.5) {
        vec2 ac = axes(uv);
        float env = sin(3.1415926 * p);
        float n = noiseFB(uv * 9.0 + vec2(0.0, p * 4.0));
        float edgePos = mix(1.2, -0.2, p) + (n - 0.5) * 0.12 * env;
        float feather = 0.03;
        float aa = 1.0 - ac.x;
        float m = 1.0 - smoothstep(edgePos - feather, edgePos + feather, aa);
        float glowBand = 1.0 - abs(aa - edgePos) / max(1e-4, feather * 2.5);
        gGlow = clamp(glowBand, 0.0, 1.0) * 0.9 * (1.0 - abs(2.0 * p - 1.0));
        return clamp(m, 0.0, 1.0);
    }

    // ---- GLITCH BLOCKS: the exact 12x8 hashed cell shifts and scanline
    // rows displace the wipe coordinate — the edge tears into blocks.
    if (uEffect > 5.5 && uEffect < 6.5) {
        float env = sin(3.1415926 * p);
        vec2 grid = vec2(12.0, 8.0);
        vec2 cell = floor(uv * grid);
        float r = hashGL(cell);
        float amount = 0.04 * env * step(0.65, r);
        float line = step(0.92, hashGL(vec2(cell.y, cell.x + 7.0)));
        amount += 0.02 * env * line;
        vec2 shift = vec2(
            amount * (hashGL(cell + 1.3) - 0.5) * 2.0,
            amount * (hashGL(cell + 9.1) - 0.5) * 2.0
        );
        vec2 ac = axes(uv + shift * 3.0);
        float front = p * (1.0 + s * 2.0) - s;
        return smoothstep(front - s, front + s, ac.x);
    }

    // ---- INK SPREAD: exact radial noise-eaten edge.
    if (uEffect > 6.5 && uEffect < 7.5) {
        vec2 c = vec2(0.5);
        float n = noiseIK(uv * 6.0);
        float radius = mix(0.0, 0.9, p);
        float dist = length(uv - c);
        float m = smoothstep(radius + 0.08, radius - 0.08, dist + (n - 0.5) * 0.18);
        return 1.0 - clamp(m, 0.0, 1.0);
    }

    // ---- HEX MOSAIC: exact hex snap + 6 -> 40 scale ramp; each cell
    // carries a hashed delay so the surface breaks up cell by cell.
    if (uEffect > 7.5) {
        float sc = mix(6.0, 40.0, abs(2.0 * p - 1.0));
        vec2 snapped = hexCell(uv, sc);
        float jitter = hashGL(snapped * 37.0);
        return 1.0 - smoothstep(0.2, 0.8, lp + (jitter - 0.5) * 0.3);
    }

    // ---- Front-based family: Curve / Streaks / Liquid / Pixelate. The
    // wipe front carries the card vertex shader's exact bend formula —
    // sin * |v| * 0.85 * intensity — driven by reveal velocity the way the
    // cards are driven by scroll velocity.
    vec2 ac0 = axes(uv);
    float arcMax = 0.85 * uBend * 0.5;
    float arc = sin(ac0.y * 3.14159265) * v * 0.85 * uBend * 0.5;
    float baseFront = p * (1.0 + arcMax + s * 2.0) - arcMax - s + arc;

    float band = max(uBand, 0.02);
    float edgeMask = 1.0 - smoothstep(0.0, band, abs(ac0.x - baseFront));
    float eAmt = pow(edgeMask, 2.0) * uStrength * clamp(uVel * 1.4, 0.35, 1.0);

    vec2 warpedUV = uv;
    if (uEffect > 0.5 && uEffect < 1.5) {
        // streaks: the showcase Edge Warp "Streaks" smear, verbatim.
        vec2 noiseUV = uv * 1000.0 + vec2(t * (step(uv.x, 0.5) - 0.5) / 0.5, 0.0) * 10.0;
        float scale = mix(1.0, 1000.0, edgeMask);
        noiseUV.y -= 0.5;
        noiseUV.y *= scale;
        noiseUV.y += 0.5;
        float dx = fbm(noiseUV) * 0.1;
        float dy = fbm(noiseUV + vec2(5.3, 3.1)) * 0.1;
        warpedUV = uv + vec2(dx, dy) * eAmt;
    } else if (uEffect > 1.5 && uEffect < 2.5) {
        // liquid: the showcase Edge Warp "Liquid" / Liquid Morph, verbatim.
        vec2 nUv = uv * 5.0 + vec2(t * 0.7, -t * 0.5);
        vec2 w = vec2(fbm(nUv), fbm(nUv + vec2(3.7, 8.1))) * 0.14;
        warpedUV = uv + w * eAmt * 1.3;
    } else if (uEffect > 2.5 && uEffect < 3.5) {
        // pixelate: the showcase Edge Warp "Pixelate" mosaic snap, verbatim.
        float pxAmt = clamp(eAmt, 0.0, 1.0);
        float px = mix(0.002, 0.05, pxAmt);
        vec2 pUV = (floor(uv / px) + 0.5) * px;
        warpedUV = mix(uv, pUV, smoothstep(0.05, 0.6, pxAmt));
    }

    vec2 ac = axes(warpedUV);
    float arcW = sin(ac.y * 3.14159265) * v * 0.85 * uBend * 0.5;
    float front = p * (1.0 + arcMax + s * 2.0) - arcMax - s + arcW;
    return smoothstep(front - s, front + s, ac.x);
}

// The direction axis as a uv vector, for the chroma split offset.
vec2 axisDir() {
    if (uDir < 0.5) return vec2(0.0, 1.0);
    if (uDir < 1.5) return vec2(0.0, -1.0);
    if (uDir < 2.5) return vec2(-1.0, 0.0);
    if (uDir < 3.5) return vec2(1.0, 0.0);
    return normalize(vUv - 0.5 + vec2(1e-5)); // center: radial split
}

void main() {
    vec2 uv = vUv;
    float m;
    float glow;
    float decay;
    vec3 col = uColor;

    if (uChroma > 0.001) {
        // RGB split of the coverage mask along the travel axis — the same
        // displacement-aligned aberration as the showcase's cursor effect.
        float split = uChroma * 0.012 * clamp(uVel, 0.25, 1.0);
        vec2 d = axisDir() * split;
        float mR = coverage(uv + d);
        m = coverage(uv);
        glow = gGlow;
        decay = gDecay;
        float mB = coverage(uv - d);
        col = uColor * vec3(mR, m, mB) / max(m, 1e-4);
        col = clamp(col, 0.0, 1.5);
    } else {
        m = coverage(uv);
        glow = gGlow;
        decay = gDecay;
    }

    // Noise Warp's streak color decay on the covered side.
    col *= decay;

    // Film Burn's ember rim, in the slider's exact glow color.
    if (glow > 0.001) {
        col += vec3(1.3, 0.55, 0.15) * glow;
    }

    if (uMask > 0.5) {
        // LOGO WINDOW, computed per-pixel per-frame at full canvas
        // resolution: sampling the high-res logo texture in screen space
        // keeps the window edge RAZOR SHARP at any zoom — a CSS mask
        // rasterizes once at logo size and turns to mush when transform-
        // scaled 60x. Outside the window: solid overlay color. Inside:
        // whatever the effect pipeline produced (or solid coverage when
        // the inner effect is off — uProgress stays 0 and m is 1, so the
        // window cuts straight through to the page).
        vec2 px = (vUv - 0.5) * uRes;
        float holeW = max(uMaskW * uMaskScale, 1.0);
        float holeH = holeW / max(uMaskAspect, 0.05);
        // Texture is uploaded from a 2D canvas (y-down); vUv is y-up.
        vec2 luv = vec2(px.x / holeW + 0.5, 0.5 - px.y / holeH);
        float hole = 0.0;
        if (luv.x > 0.0 && luv.x < 1.0 && luv.y > 0.0 && luv.y < 1.0) {
            float aRaw = texture2D(uLogo, luv).a;
            // Alpha-threshold sharpening (alpha-tested magnification):
            // re-thresholding the antialiased alpha around 0.5 with a
            // screen-derivative-sized smoothstep keeps the window edge
            // SHARP at any magnification. Blended in as the zoom grows so
            // the logo's designed antialiasing is untouched at rest.
#ifdef HAS_DERIV
            float aw = max(fwidth(aRaw) * 0.7, 1e-4);
#else
            float aw = 0.02;
#endif
            float aSharp = smoothstep(0.5 - aw, 0.5 + aw, aRaw);
            float k = clamp((uMaskScale - 1.5) * 0.5, 0.0, 1.0);
            hole = mix(aRaw, aSharp, k);
        }
        // The window is the ONLY motion. A calm, solid surround and a
        // razor-sharp growing silhouette — every attempt to layer effect
        // activity onto this moment competed with it. The reference's
        // restraint is the polish.
        float outM = (1.0 - hole) * clamp(uMaskFade, 0.0, 1.0);
        gl_FragColor = vec4(uColor * outM, outM);
        return;
    }

    gl_FragColor = vec4(col * m, m);
}
