// Source : reference/framer/js/2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs, variable `qe` (fragmentShader des segments). Texte verbatim ci-dessous.

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
