
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                vec2 center = vec2(0.5, 0.5);
                vec2 toCenter = uv - center;
                float dist = length(toCenter);
                float rippleStrength = 0.04 * smoothstep(0.0, 0.5, 1.0 - abs(2.0 * dispFactor - 1.0));
                float rippleFreq = mix(30.0, 70.0, dispFactor);
                float ripple = sin(dist * rippleFreq - dispFactor * 10.0) * rippleStrength;
                vec2 rippleUV = uv + toCenter * ripple;
                rippleUV = clamp(rippleUV, vec2(0.0), vec2(1.0));
                vec4 _currentImage = texture2D(currentImage, uv);
                vec4 _nextImage = texture2D(nextImage, rippleUV);
                vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
                gl_FragColor = finalTexture;
            }
        