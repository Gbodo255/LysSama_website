
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            void main() {
                vec2 uv = vUv;
                float p = smoothstep(0.0, 1.0, dispFactor);
                vec2 c = vec2(0.5);
                vec2 d = uv - c;

                float m = sin(3.1415926 * p);
                vec2 par = normalize(d + vec2(1e-4)) * 0.05 * m * direction;

                vec2 uv0 = clamp(uv - par * 0.8 * p, vec2(0.0), vec2(1.0));
                vec2 uv1 = clamp(uv + par * 0.8 * (1.0 - p), vec2(0.0), vec2(1.0));

                vec4 c0 = texture2D(currentImage, uv0);
                vec4 c1 = texture2D(nextImage, uv1);
                gl_FragColor = mix(c0, c1, p);
            }
        