
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            float hash21(vec2 p) {
                p = fract(p * vec2(123.34, 456.21));
                p += dot(p, p + 45.32);
                return fract(p.x * p.y);
            }

            float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                float a = hash21(i);
                float b = hash21(i + vec2(1.0, 0.0));
                float c = hash21(i + vec2(0.0, 1.0));
                float d = hash21(i + vec2(1.0, 1.0));
                vec2 u = f * f * (3.0 - 2.0 * f);
                return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
            }

            void main() {
                vec2 uv = clamp(vUv, vec2(0.0), vec2(1.0));
                if (dispFactor <= 0.001) {
                    gl_FragColor = texture2D(currentImage, uv);
                    return;
                }
                if (dispFactor >= 0.999) {
                    gl_FragColor = texture2D(nextImage, uv);
                    return;
                }

                float p = smoothstep(0.0, 1.0, dispFactor);
                float m = sin(3.1415926 * p);
                float n = noise(uv * 9.0 + vec2(0.0, p * 4.0));

                float xDir = direction > 0.0 ? uv.x : 1.0 - uv.x;
                float edgePos = mix(1.2, -0.2, p) + (n - 0.5) * 0.12 * m;
                float feather = 0.03;
                float mask = smoothstep(edgePos - feather, edgePos + feather, xDir);
                mask = clamp(mask, 0.0, 1.0);

                vec4 c0 = texture2D(currentImage, uv);
                vec4 c1 = texture2D(nextImage, uv);

                float glowBand = 1.0 - abs(xDir - edgePos) / max(1e-4, feather * 2.5);
                glowBand = clamp(glowBand, 0.0, 1.0);
                vec3 glow = vec3(1.3, 0.55, 0.15) * glowBand * 0.9;

                vec3 base = mix(c0.rgb, c1.rgb, mask);
                base += glow * (1.0 - abs(2.0 * p - 1.0));
                gl_FragColor = vec4(base, 1.0);
            }
        