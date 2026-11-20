
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                vec4 _currentImage = texture2D(currentImage, uv);
                vec4 _nextImage = texture2D(nextImage, uv);
                float wipe = step(direction > 0.0 ? uv.x : 1.0 - uv.x, dispFactor);
                vec4 finalTexture = mix(_currentImage, _nextImage, wipe);
                gl_FragColor = finalTexture;
            }
        