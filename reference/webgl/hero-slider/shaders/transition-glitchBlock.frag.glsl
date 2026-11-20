
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            float hash21(vec2 p) {
                p = fract(p * vec2(311.7, 127.1));
                p += dot(p, p + 34.7);
                return fract(p.x * p.y);
            }

            void main() {
                vec2 uv = vUv;
                float p = smoothstep(0.0, 1.0, dispFactor);
                float m = sin(3.1415926 * p);

                vec2 grid = vec2(12.0, 8.0);
                vec2 cell = floor(uv * grid);
                float r = hash21(cell);

                float amount = 0.04 * m * step(0.65, r);
                float line = step(0.92, hash21(vec2(cell.y, cell.x + 7.0)));
                amount += 0.02 * m * line;

                vec2 shift = vec2(
                    amount * (hash21(cell + 1.3) - 0.5) * 2.0,
                    amount * (hash21(cell + 9.1) - 0.5) * 2.0
                );

                vec2 uv0 = clamp(uv + shift * (1.0 - p), vec2(0.0), vec2(1.0));
                vec2 uv1 = clamp(uv - shift * p, vec2(0.0), vec2(1.0));

                vec4 c0 = texture2D(currentImage, uv0);
                vec4 c1 = texture2D(nextImage, uv1);

                gl_FragColor = mix(c0, c1, p);
            }
        