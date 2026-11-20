
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            void main() {
                vec2 uv = vUv;
                float p = smoothstep(0.0, 1.0, dispFactor);

                vec2 corner = direction > 0.0 ? vec2(1.0, 0.0) : vec2(0.0, 0.0);
                vec2 d = uv - corner;
                float dist = length(d);
                float curl = smoothstep(0.15, 0.8, dist) * p;

                vec2 bend = uv;
                bend.x -= curl * 0.22 * direction;
                bend.y += curl * 0.18;

                float shadow = smoothstep(0.0, 0.35, curl) * (1.0 - smoothstep(0.2, 0.9, dist));

                vec4 c0 = texture2D(currentImage, clamp(bend, vec2(0.0), vec2(1.0)));
                vec4 c1 = texture2D(nextImage, clamp(uv, vec2(0.0), vec2(1.0)));

                vec4 mixed = mix(c0, c1, p);
                mixed.rgb *= (1.0 - shadow * 0.35);
                gl_FragColor = mixed;
            }
        