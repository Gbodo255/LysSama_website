// Source : reference/framer/js/2G6NJGLYB-I5i3aMi0aINtG2rPvQ1Qcmmh-2sDZsQtc.C3Ea9Zs_.mjs, littéral `vertexShader` en ligne du ShaderMaterial de la grille de sol (LineSegments). Texte verbatim ci-dessous.

                varying vec2 vXZ;
                void main() {
                    vXZ = position.xz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            