// Source : reference/framer/js/AMcQRZfITfjQMtwTc9L6feHZ3p0EKUbo_RHe9QFmX_Y.DexPvT_c.mjs, variable `Tt` (fragmentShader des cartes). Texte verbatim ci-dessous.

uniform sampler2D uTexture;
uniform sampler2D uTexturePrev;
uniform float uImageAspect;
uniform float uPrevAspect;
uniform float uPlaneAspect;
uniform float uHasTexture;
// 0 -> previous texture, 1 -> current. Ramped by the loop when a texture is
// replaced in place (poster -> video, tiny placeholder -> full res): a GPU
// mix() between two OPAQUE layers has no dark dip by construction, unlike
// stacked DOM alphas or a fade through the empty card.
uniform float uSwap;
uniform float uRadius;
varying vec2 vUv;

vec2 coverUV(vec2 uv, float imageAspect, float planeAspect) {
    vec2 scale = vec2(1.0);
    vec2 offset = vec2(0.0);
    if (imageAspect > planeAspect) {
        scale.x = planeAspect / imageAspect;
        offset.x = (1.0 - scale.x) * 0.5;
    } else {
        scale.y = imageAspect / planeAspect;
        offset.y = (1.0 - scale.y) * 0.5;
    }
    return uv * scale + offset;
}

void main() {
    float planeAspect = max(0.0001, uPlaneAspect);
    vec2 uv = coverUV(vUv, max(0.0001, uImageAspect), planeAspect);
    vec2 uvPrev = coverUV(vUv, max(0.0001, uPrevAspect), planeAspect);
    vec4 color = vec4(0.1, 0.1, 0.1, 1.0);
    // Textures fade in over the placeholder instead of popping. Sampling is
    // unconditional (conditional sampling breaks mipmap derivatives); a null
    // texture reads black but uHasTexture is 0 until one is attached.
    vec4 texCur = texture2D(uTexture, uv);
    vec4 texPrev = texture2D(uTexturePrev, uvPrev);
    // Each layer keeps its own correct cover framing during the dissolve, so
    // mismatched poster/video aspect ratios cross-dissolve instead of
    // snapping to a new crop.
    vec4 texColor = mix(texPrev, texCur, clamp(uSwap, 0.0, 1.0));
    color = mix(color, texColor, clamp(uHasTexture, 0.0, 1.0));

    if (uRadius > 0.0001) {
        // SDF rounded rectangle in plane space (height normalized to 1).
        float r = min(uRadius, min(0.5, planeAspect * 0.5));
        vec2 p = (vUv - 0.5) * vec2(planeAspect, 1.0);
        vec2 b = vec2(planeAspect, 1.0) * 0.5 - r;
        vec2 q = abs(p) - b;
        float sdf = length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0) - r;
        float fw = max(fwidth(sdf), 0.0008);
        color.a *= 1.0 - smoothstep(-fw, fw, sdf);
    }

    gl_FragColor = color;
}
