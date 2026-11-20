// Source : reference/framer/js/2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs, variable `Ye` (fragmentShader de la passe plein écran : déformation dans la traînée). Le marqueur ${Ge} est remplacé à l'exécution par le contenu de noise.glsl. Texte verbatim ci-dessous.

uniform sampler2D tDiffuse;
uniform sampler2D uTrail;
uniform float uTime;
uniform float uMouseStrength;
uniform float uMouseChroma;
uniform float uMouseVel;
uniform float uGrain;
varying vec2 vUv;
${Ge}
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
