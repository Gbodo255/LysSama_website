// Source : reference/framer/js/2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs, variable `Ke` (vertexShader des segments/éclats). Le marqueur ${Ge} est remplacé à l'exécution par le contenu de noise.glsl. Texte verbatim ci-dessous.

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
${Ge}
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
