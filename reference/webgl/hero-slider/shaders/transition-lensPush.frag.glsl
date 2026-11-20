
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            void main() {
                vec2 uv = vUv;
                float p = smoothstep(0.0, 1.0, dispFactor);

                vec2 c = vec2(0.5);
                vec2 d = uv - c;
                float r = length(d);

                float push = 1.0 - direction * 0.35 * sin(3.1415926 * p);
                vec2 zoomUV = c + d * push;
                zoomUV = clamp(zoomUV, vec2(0.0), vec2(1.0));

                float vignette = smoothstep(0.9, 0.25, r);
                vec4 c0 = texture2D(currentImage, uv);
                vec4 c1 = texture2D(nextImage, zoomUV);
                vec4 mixed = mix(c0, c1, p);
                mixed.rgb *= mix(0.88, 1.0, vignette);
                gl_FragColor = mixed;
            }
        