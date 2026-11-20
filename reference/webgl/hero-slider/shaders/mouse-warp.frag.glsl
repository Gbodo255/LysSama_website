
uniform sampler2D tDiffuse;
uniform vec2 uMouse;
uniform vec2 uResolution;
uniform float uTime;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseEffect;   // 0 push, 1 pull, 2 swirl, 3 ripple, 4 noise
uniform float uMouseRadius;
uniform float uMouseChroma;
uniform float uMouseVel;      // 1, or smoothed cursor speed when React to Speed is on
varying vec2 vUv;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m * m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * snoise(p);
        p = p * 2.1 + vec2(1.7, 9.2);
        a *= 0.5;
    }
    return v;
}

void main() {
    float ar = uResolution.x / max(uResolution.y, 1.0);
    vec2 warpedUV = vUv;

    // --- Mouse effect: mode-dispatched displacement around the cursor.
    // Push (mode 0) with radius 0.1, chroma 0, vel 1 reproduces the original
    // repulsion exactly.
    vec2 toMouse = warpedUV - uMouse;
    toMouse.x *= ar;
    float mDist = length(toMouse);
    float mStrength = 0.12 * uMouseStrength * uMouseVel;
    float mFall = 1.0 - smoothstep(0.0, uMouseRadius, mDist);
    mFall = mFall * mFall * mFall;
    vec2 mDir = normalize(toMouse / vec2(ar, 1.0) + vec2(1e-6));
    vec2 mDisp = vec2(0.0);
    if (uMouseEffect < 0.5) {
        // push: displace away from the cursor
        mDisp = -mDir * mFall * mStrength;
    } else if (uMouseEffect < 1.5) {
        // pull: lens-like attraction toward the cursor
        mDisp = mDir * mFall * mStrength;
    } else if (uMouseEffect < 2.5) {
        // swirl: rotate around the cursor, angle scaled by falloff
        float ang = mFall * mStrength * 24.0;
        float s = sin(ang);
        float c = cos(ang);
        vec2 rotated = vec2(c * toMouse.x - s * toMouse.y, s * toMouse.x + c * toMouse.y);
        mDisp = (rotated - toMouse) / vec2(ar, 1.0);
    } else if (uMouseEffect < 3.5) {
        // ripple: animated rings radiating from the cursor
        float wave = sin(mDist * 60.0 - uTime * 7.0);
        mDisp = -mDir * wave * mFall * mStrength;
    } else {
        // noise: fbm smear inside the cursor radius
        vec2 nUv = warpedUV * 18.0 + vec2(uTime * 0.4, -uTime * 0.3);
        mDisp = vec2(fbm(nUv), fbm(nUv + vec2(7.1, 3.7))) * mFall * mStrength * 1.8;
    }
    mDisp *= uMouseEnabled;

    vec4 col;
    if (uMouseChroma > 0.001) {
        // chromatic aberration along the displacement vector
        float split = uMouseChroma * 0.45;
        col = texture2D(tDiffuse, warpedUV + mDisp);
        col.r = texture2D(tDiffuse, warpedUV + mDisp * (1.0 - split)).r;
        col.b = texture2D(tDiffuse, warpedUV + mDisp * (1.0 + split)).b;
    } else {
        col = texture2D(tDiffuse, warpedUV + mDisp);
    }

    gl_FragColor = col;
}
