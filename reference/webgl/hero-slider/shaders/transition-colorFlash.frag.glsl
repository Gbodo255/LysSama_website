
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                vec4 _currentImage = texture2D(currentImage, uv);
                vec4 _nextImage = texture2D(nextImage, uv);
                float flash = smoothstep(0.3, 0.7, dispFactor);
                vec3 flashColor = mix(_currentImage.rgb, vec3(1.0, 0.0, 0.5), flash * (1.0 - abs(2.0 * dispFactor - 1.0)));
                vec4 flashMix = vec4(flashColor, 1.0);
                vec4 finalTexture = mix(_currentImage, flashMix, flash);
                finalTexture = mix(finalTexture, _nextImage, dispFactor);
                gl_FragColor = finalTexture;
            }
        