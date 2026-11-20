// Source : reference/framer/js/2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs, littéral `fragmentShader` en ligne du ShaderMaterial de la grille de sol. Texte verbatim ci-dessous.

                uniform vec3 uColor;
                uniform float uOpacity;
                uniform float uExtent;
                varying vec2 vXZ;
                void main() {
                    float r = length(vXZ) / uExtent;
                    float a = uOpacity * (1.0 - smoothstep(0.55, 1.0, r));
                    if (a < 0.005) discard;
                    gl_FragColor = vec4(uColor, a);
                }
            