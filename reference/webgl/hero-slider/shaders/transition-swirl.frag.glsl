
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            void main() {
                vec2 uv = vUv;
                vec2 center = vec2(0.5, 0.5);
                vec2 toCenter = uv - center;
                float dist = length(toCenter);
                float angle = atan(toCenter.y, toCenter.x);
                float swirlAmount = dispFactor * 3.0;
                float swirl = swirlAmount * (1.0 - smoothstep(0.0, 0.5, dist));
                float newAngle = angle + direction * swirl * (1.0 - dispFactor);
                vec2 swirlUV = center + dist * vec2(cos(newAngle), sin(newAngle));
                swirlUV = clamp(swirlUV, vec2(0.0), vec2(1.0));
                vec4 _currentImage = texture2D(currentImage, uv);
                vec4 _nextImage = texture2D(nextImage, swirlUV);
                vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
                gl_FragColor = finalTexture;
            }
        