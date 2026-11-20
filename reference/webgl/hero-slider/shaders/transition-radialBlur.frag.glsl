
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                vec4 color = vec4(0.0);
                float blur = dispFactor * 0.25;
                for (int i = 0; i < 16; i++) {
                    float t = float(i) / 15.0;
                    vec2 offset = (uv - vec2(0.5, 0.5)) * t * blur;
                    color += texture2D(currentImage, uv - offset);
                }
                color /= 16.0;
                vec4 _nextImage = texture2D(nextImage, uv);
                vec4 finalTexture = mix(color, _nextImage, dispFactor);
                gl_FragColor = finalTexture;
            }
        