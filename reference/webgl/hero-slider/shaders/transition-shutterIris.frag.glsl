
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;

            float polygon(vec2 p, float sides) {
                float a = atan(p.y, p.x);
                float r = length(p);
                float seg = 6.2831853 / sides;
                return cos(floor(0.5 + a / seg) * seg - a) * r;
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

                vec2 pc = uv - vec2(0.5);
                float iris = polygon(pc, 6.0);

                float radius = mix(0.0, 0.78, p);
                float feather = 0.03;
                float mask = smoothstep(radius + feather, radius - feather, iris);
                mask = clamp(mask, 0.0, 1.0);

                vec4 c0 = texture2D(currentImage, uv);
                vec4 c1 = texture2D(nextImage, uv);

                gl_FragColor = mix(c0, c1, mask);
            }
        