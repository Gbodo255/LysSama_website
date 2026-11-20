
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                float p = smoothstep(0.0, 1.0, dispFactor);
                float feather = 0.06;

                float diag = uv.x + (1.0 - uv.y) - 1.0;
                float diagN = clamp(diag * 0.5 + 0.5, 0.0, 1.0);
                if (direction < 0.0) diagN = 1.0 - diagN;
                float mask = smoothstep(p - feather, p + feather, diagN);

                vec4 c0 = texture2D(currentImage, uv);
                vec4 c1 = texture2D(nextImage, uv);
                gl_FragColor = mix(c0, c1, mask);
            }
        