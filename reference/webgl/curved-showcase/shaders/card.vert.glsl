// Source : reference/framer/js/AMcQRZfITfjQMtwTc9L6feHZ3p0EKUbo_RHe9QFmX_Y.DexPvT_c.mjs, variable `wt` (vertexShader des cartes). Texte verbatim ci-dessous.

uniform float uScrollVelocity;
uniform float uBendIntensity;
varying vec2 vUv;
void main() {
    vUv = uv;
    vec3 p = position;
    float v = clamp(abs(uScrollVelocity) * 0.02, 0.0, 1.0);
    vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    float sx = clamp((clip.x / clip.w) * 0.5 + 0.5, 0.0, 1.0);
    float bend = sin(sx * 3.14159265);
    p.z -= bend * pow(v, 1.0) * 0.85 * uBendIntensity;
    p.z -= v * 0.2 * uBendIntensity;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
}
