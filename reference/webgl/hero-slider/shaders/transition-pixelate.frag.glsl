
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                float pixelSize = 0.05 * sin(3.1415926 * dispFactor);
                pixelSize = max(pixelSize, 0.0005);
                vec2 pixelatedUV = floor(uv / pixelSize) * pixelSize;
                vec4 _currentImage = texture2D(currentImage, uv);
                vec4 _nextImage = texture2D(nextImage, pixelatedUV);
                float blend = smoothstep(0.0, 1.0, dispFactor);
                vec4 finalTexture = mix(_currentImage, _nextImage, blend);
                gl_FragColor = finalTexture;
            }
        