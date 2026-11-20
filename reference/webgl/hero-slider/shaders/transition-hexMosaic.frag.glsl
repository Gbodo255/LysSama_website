
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            vec2 hexCell(vec2 uv, float scale) {
                vec2 q = vec2(uv.x * scale, uv.y * scale);
                q.x *= 1.1547;
                vec2 a = vec2(q.x + q.y * 0.5, q.y);
                vec2 ai = floor(a);
                vec2 center = (ai + 0.5);
                vec2 r;
                r.y = center.y;
                r.x = center.x - center.y * 0.5;
                r.x /= 1.1547;
                r /= scale;
                return r;
            }

            void main() {
                vec2 uv = vUv;
                float p = smoothstep(0.0, 1.0, dispFactor);

                float s = mix(6.0, 40.0, abs(2.0 * p - 1.0));
                vec2 snapped = hexCell(uv, s);
                snapped = clamp(snapped, vec2(0.0), vec2(1.0));

                vec4 c0 = texture2D(currentImage, uv);
                vec4 c1 = texture2D(nextImage, snapped);

                float m = smoothstep(0.2, 0.8, p);
                gl_FragColor = mix(c0, c1, m);
            }
        