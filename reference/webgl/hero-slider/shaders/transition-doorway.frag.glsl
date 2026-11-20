
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                vec4 _currentImage = texture2D(currentImage, uv);
                vec4 _nextImage = texture2D(nextImage, uv);
                float progress = smoothstep(0.0, 1.0, dispFactor);
                float doorWidth = 0.5 * progress;
                float leftDoor = step(uv.x, 0.5 - doorWidth);
                float rightDoor = step(1.0 - uv.x, 0.5 - doorWidth);
                float mask = leftDoor + rightDoor;
                vec4 finalTexture = mix(_nextImage, _currentImage, mask);
                gl_FragColor = finalTexture;
            }
        