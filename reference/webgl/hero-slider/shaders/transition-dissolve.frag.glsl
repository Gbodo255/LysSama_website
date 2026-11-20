
            varying vec2 vUv;
            uniform sampler2D currentImage;
            uniform sampler2D nextImage;
            uniform float dispFactor;
            float rand(vec2 co) {
                return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
            }
            float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                float a = rand(i);
                float b = rand(i + vec2(1.0, 0.0));
                float c = rand(i + vec2(0.0, 1.0));
                float d = rand(i + vec2(1.0, 1.0));
                vec2 u = f * f * (3.0 - 2.0 * f);
                return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
            }
            void main() {
                vec2 uv = vUv;
                float n = noise(uv * 20.0 + dispFactor * 10.0);
                float threshold = dispFactor;
                float edge = 0.04;
                float mask = smoothstep(threshold - edge, threshold + edge, n);
                vec4 _currentImage = texture2D(currentImage, uv);
                vec4 _nextImage = texture2D(nextImage, uv);
                vec3 color = mix(_currentImage.rgb, _nextImage.rgb, mask);
                gl_FragColor = vec4(color, 1.0);
            }
        