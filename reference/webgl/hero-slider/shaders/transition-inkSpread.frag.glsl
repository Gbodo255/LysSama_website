
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            float hash21(vec2 p) {
                p = fract(p * vec2(127.1, 311.7));
                p += dot(p, p + 34.7);
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

                vec2 c = vec2(0.5);
                float n = noise(uv * 6.0);
                float radius = mix(0.0, 0.9, p);
                float dist = length(uv - c);

                float edge = 0.08;
                float m = smoothstep(radius + edge, radius - edge, dist + (n - 0.5) * 0.18);
                float mask = clamp(m, 0.0, 1.0);

                vec4 c0 = texture2D(currentImage, uv);
                vec4 c1 = texture2D(nextImage, uv);
                gl_FragColor = mix(c0, c1, mask);
            }
        