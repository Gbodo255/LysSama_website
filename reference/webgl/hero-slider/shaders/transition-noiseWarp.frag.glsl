
        varying vec2 vUv;
        uniform sampler2D currentImage;
        uniform sampler2D nextImage;
        uniform float dispFactor;

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

        void main() {
    vec2 uv = vUv;
    if (dispFactor <= 0.001) { gl_FragColor = texture2D(currentImage, uv); return; }
    if (dispFactor >= 0.999) { gl_FragColor = texture2D(nextImage, uv); return; }

    float p = smoothstep(0.0, 1.0, dispFactor);
    float mid = sin(3.1415926 * p); // 0 -> 1 -> 0 intensity bell

    // Full-frame streak noise: the gallery's vertical-stretch recipe, ramped
    // by transition intensity instead of an edge mask. At the midpoint the
    // whole image is streaked; at the ends it's clean.
    vec2 noiseUV = uv * 1000.0 + vec2(p * 30.0, 0.0);
    float scale = mix(1.0, 1000.0, mid);
    noiseUV.y -= 0.5;
    noiseUV.y *= scale;
    noiseUV.y += 0.5;

    float n1 = fbm(noiseUV);
    float n2 = fbm(noiseUV + vec2(5.3, 3.1));

    // Both images smear along the streaks, outgoing harder than incoming.
    vec2 disp = vec2(n1, n2) * 0.12 * mid;
    vec4 c0 = texture2D(currentImage, uv + disp);
    vec4 c1 = texture2D(nextImage, uv - disp * 0.6);

    // Noise-thresholded reveal across the entire frame at once: brighter
    // streaks flip to the next image first, everything flips by the end.
    float streak = clamp(n1 * 0.5 + 0.5, 0.0, 1.0);
    float edgeSoft = 0.18;
    float mask = smoothstep(1.0 - p - edgeSoft, 1.0 - p + edgeSoft, streak);
    mask *= smoothstep(0.0, 0.08, p);          // no early flash at the start
    mask = max(mask, smoothstep(0.85, 0.99, p)); // guaranteed completion

    vec3 col = mix(c0.rgb, c1.rgb, mask);

    // Subtle colour decay inside the streaks, echoing the gallery's edges.
    float decay = 1.0 - 0.35 * mid * smoothstep(0.3, 1.2, abs(n1) + abs(n2));
    col *= decay;

    gl_FragColor = vec4(col, 1.0);
}
    