
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            float rand(vec2 co){
                return fract(sin(dot(co.xy,vec2(12.9898,78.233))) * 43758.5453);
            }
            void main() {
                vec2 uv = vUv;
                float strength = 0.08 * (1.0 - abs(2.0 * dispFactor - 1.0));
                vec2 glassOffset = vec2(rand(uv + 0.123) - 0.5, rand(uv - 0.456) - 0.5) * strength;
                vec2 glassUV1 = clamp(uv + glassOffset * (1.0 - dispFactor), vec2(0.0), vec2(1.0));
                vec2 glassUV2 = clamp(uv + glassOffset * dispFactor, vec2(0.0), vec2(1.0));
                vec4 _currentImage = texture2D(currentImage, glassUV1);
                vec4 _nextImage = texture2D(nextImage, glassUV2);
                vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
                gl_FragColor = finalTexture;
            }
        