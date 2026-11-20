// Source : reference/framer/js/AMcQRZfITfjQMtwTc9L6feHZ3p0EKUbo_RHe9QFmX_Y.DexPvT_c.mjs, variable `Et` (vertexShader de la passe plein écran). Texte verbatim ci-dessous.

varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
