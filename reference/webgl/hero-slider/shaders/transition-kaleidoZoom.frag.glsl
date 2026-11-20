
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            vec2 kaleido(vec2 uv, float segments) {
                vec2 p = uv - 0.5;
                float a = atan(p.y, p.x);
                float r = length(p);
                float seg = 6.2831853 / segments;
                a = mod(a, seg);
                a = abs(a - seg * 0.5);
                return 0.5 + r * vec2(cos(a), sin(a));
            }

            void main() {
                vec2 uv = vUv;
                float p = smoothstep(0.0, 1.0, dispFactor);
                float mid = 1.0 - abs(2.0 * p - 1.0);

                float zoom = mix(1.0, 0.65, mid);
                vec2 z = 0.5 + (uv - 0.5) * zoom;
                vec2 k = kaleido(z, 8.0);

                vec2 uvk = clamp(mix(uv, k, mid), vec2(0.0), vec2(1.0));

                vec4 c0 = texture2D(currentImage, uv);
                vec4 c1 = texture2D(nextImage, uvk);
                gl_FragColor = mix(c0, c1, p);
            }
        