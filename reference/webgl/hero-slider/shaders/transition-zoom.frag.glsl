
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                vec2 centeredUV = uv - 0.5;
                vec2 currentUV = centeredUV * (1.0 - dispFactor) + 0.5;
                vec2 nextUV = centeredUV * (1.0 - (1.0 - dispFactor) * 0.2) + 0.5;
                vec4 _currentImage = texture2D(currentImage, currentUV);
                vec4 _nextImage = texture2D(nextImage, nextUV);
                vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
                gl_FragColor = finalTexture;
            }
        