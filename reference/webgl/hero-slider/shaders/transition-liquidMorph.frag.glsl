
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            float hash21(vec2 p) {
                p = fract(p * vec2(234.34, 435.345));
                p += dot(p, p + 34.345);
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

            float fbm(vec2 p) {
                float v = 0.0;
                float a = 0.5;
                for (int i = 0; i < 4; i++) {
                    v += a * noise(p);
                    p *= 2.0;
                    a *= 0.5;
                }
                return v;
            }

            void main() {
                vec2 uv = vUv;
                float p = smoothstep(0.0, 1.0, dispFactor);
                float m = sin(3.1415926 * p);

                vec2 warp = vec2(
                    fbm(uv * 4.0 + p * 2.0),
                    fbm(uv * 4.0 - p * 2.0)
                );
                warp = (warp - 0.5) * 0.08 * m;

                vec2 uv0 = clamp(uv + warp * (1.0 - p), vec2(0.0), vec2(1.0));
                vec2 uv1 = clamp(uv - warp * p, vec2(0.0), vec2(1.0));

                vec4 c0 = texture2D(currentImage, uv0);
                vec4 c1 = texture2D(nextImage, uv1);
                gl_FragColor = mix(c0, c1, p);
            }
        