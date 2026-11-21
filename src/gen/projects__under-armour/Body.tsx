// Généré par scripts/genpage.mjs depuis reference/html/projects__under-armour.html (D-033) — ne pas modifier à la main : régénérer.
import './Body.css';
import { T } from '@/data/text/projects__under-armour';
import { Appear } from '@/components/Appear';
import { FormButtonFx } from '@/components/forms/FormFx';
import { FormFx } from '@/components/forms/FormFx';
import { HideOn } from '@/components/Variants';
import { InView } from '@/components/fx/InView';
import { Lk } from '@/components/Lk';
import { Loop } from '@/components/fx/Loop';
import { SV } from '@/components/Variants';
import { TextFx } from '@/components/fx/TextFx';
import { VRoot, VEl } from '@/components/fx/Variant';

const BPS = {"1o0hdey":"desktop","g87bww":"tablet","1nc0ivo":"phone","1pvmz1y":"phone","1wjgfnr":"tablet","1e6htkk":"desktop"} as const;
const AP = {"19jj9t8":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.55,"duration":1.2,"type":"spring"},"x":0,"y":0}},"1nc0ivo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.55,"duration":1.2,"type":"spring"},"x":0,"y":0}},"g87bww":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.55,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"1gjlcjd":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}},"1nc0ivo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}},"g87bww":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"t241s":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.05,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}},"1nc0ivo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.05,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}},"g87bww":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.05,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}}},"1by17e4":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.15,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}},"1nc0ivo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.15,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}},"g87bww":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.15,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}}},"6nrbi8":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.45,"duration":1.2,"type":"spring"},"x":0,"y":0}},"1nc0ivo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.45,"duration":1.2,"type":"spring"},"x":0,"y":0}},"g87bww":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.45,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"9t0tqy":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}},"1nc0ivo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}},"g87bww":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}}}};

export function Body() {
  return (
    <div data-framer-root="" className="framer-hglyy framer-GC3F4 framer-Me6vv framer-QoPvp framer-2Ps8M framer-laVYw framer-lt6Rw framer-1o0hdey" style={{ "minHeight": "100vh", "width": "auto", "display": "contents" }}>
      <div className="framer-w9o3t8-container" data-framer-name="Lenis Smooth Scroll" {...{ name: "Lenis Smooth Scroll" }} />
      <main className="framer-3o3340" data-framer-name="Main">
        <HideOn on={["phone"]}>
        <div className="framer-ffrjd1-container hidden-1nc0ivo">
          <div className="framer-yXQrW framer-gmtdri framer-v-gmtdri" data-framer-name="Spacer" />
        </div>
        </HideOn>
        <div className="framer-mtqnda" data-framer-name="Content">
          <div className="framer-4wzv44" data-framer-name="Hero / Project">
            <SV c="ssr-variant hidden-1nc0ivo hidden-g87bww" show={["desktop"]}>
              <section className="framer-3ye8xs" data-framer-name="Hero" style={{ "willChange": "transform", "opacity": "1", "transform": "none" }}>
                <div className="framer-by5zon" data-framer-name="BG Outer Container">
                  <div className="framer-1vzwwht-container">
                    <VRoot as="div" map={{"DV6oTfLLg":{"cls":"framer-v-1shcg12","name":"Hidden Mask"},"Uh95rRMl7":{"cls":"framer-v-j4z1zy","name":"Revealed"}}} initial="DV6oTfLLg" transition={{"damping":25,"delay":0.8,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"Uh95rRMl7","threshold":0.5,"once":true}} className="framer-83xqy framer-j4z1zy framer-v-1shcg12" data-framer-name="Hidden Mask" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "cornerShape": "superellipse(1.5)", "height": "100%", "width": "100%", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","rotate":0,"scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"DV6oTfLLg":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","rotate":4,"scale":1.5,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-rbevx0" data-framer-name="BG" style={{ "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "transform": "scale(1.5) rotate(4deg)" }}>
                        <div className="framer-1q48sik" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <div className="framer-ios0bt" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[0]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                          </div>
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </div>
                <div className="framer-9cugxo" data-framer-name="Inside Container" style={{ "willChange": "transform", "opacity": "1", "transform": "none" }}>
                  <header className="framer-5km0ir" data-framer-name="Top">
                    <Appear as="div" spec={AP["19jj9t8"]} bps={BPS} className="framer-19jj9t8-container" data-framer-appear-id="19jj9t8" style={{ "opacity": "0.001", "transform": "none" }}>
                      <Lk className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-ra0to2 framer-ghew07" data-framer-name="Desktop - Left" href="../projects" to="/projects">
                        <div className="framer-1dzfdpz" data-framer-name="Text">
                          <div className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "1", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                              {T[1]}
                            </p>
                          </div>
                          <div className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                              {T[2]}
                            </p>
                          </div>
                        </div>
                        <div className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                          <svg className="framer-4rnSx framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#3938257237\"></use>" }} />
                        </div>
                      </Lk>
                    </Appear>
                    <HideOn on={["phone"]}>
                    <Appear as="div" spec={AP["1gjlcjd"]} bps={BPS} className="framer-1gjlcjd-container hidden-1nc0ivo" data-framer-appear-id="1gjlcjd" style={{ "opacity": "0.001", "transform": "none" }}>
                      <Lk aria-label={T[3]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="../" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                        <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                      </Lk>
                    </Appear>
                    </HideOn>
                  </header>
                  <div className="framer-184oqzw" data-framer-name="Image / Project Info">
                    <Appear as="div" spec={AP["t241s"]} bps={BPS} className="framer-t241s" data-framer-appear-id="t241s" data-framer-name="Image / Video" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <div className="framer-8k5osh" id="8k5osh" draggable={false} style={{ "height": "auto", "aspectRatio": "1.7770034843205575" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[4]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </div>
                    </Appear>
                    <div className="framer-1niuf3q" data-framer-name="Filler" />
                    <div className="framer-1wtwicl" data-framer-name="Project Info">
                      <Appear as="div" spec={AP["1by17e4"]} bps={BPS} className="framer-1by17e4" data-framer-appear-id="1by17e4" data-framer-name="Title / Year" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                        <div className="framer-3xnncp" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <h1 className="framer-text framer-styles-preset-15kw1n0" data-styles-preset="Tz81QJ8i1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                            {T[5]}
                          </h1>
                        </div>
                        <div className="framer-16eh77w" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                            <time dateTime="2023-02-01T00:00:00.000Z">
                              {T[6]}
                            </time>
                          </p>
                        </div>
                      </Appear>
                      <div className="framer-11q1tjf-container">
                        <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "maxWidth": "100%", "width": "100%" }}>
                          <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                        </VRoot>
                      </div>
                      <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":1.25,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.6,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-lu6cf5", "data-styles-preset": "XKitmogp0", "dir": "auto", style: { "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" } }, segs: [T[7]] }]} className="framer-18lk34a" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    </div>
                  </div>
                  <div className="framer-1l9jlre" data-framer-name="Bottom Info">
                    <Appear as="div" spec={AP["6nrbi8"]} bps={BPS} className="framer-6nrbi8" data-framer-appear-id="6nrbi8" data-framer-name="Timeline" style={{ "opacity": "0.001", "transform": "none" }}>
                      <div className="framer-zw3fh5" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                          {T[8]}
                        </p>
                      </div>
                      <div className="framer-en6sck" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[9]}
                        </p>
                      </div>
                    </Appear>
                    <Appear as="div" spec={AP["9t0tqy"]} bps={BPS} className="framer-9t0tqy" data-framer-appear-id="9t0tqy" data-framer-name="Scope" style={{ "opacity": "0.001", "transform": "none" }}>
                      <div className="framer-1osspgd" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                          {T[10]}
                        </p>
                      </div>
                      <div className="framer-1kxi1cl" data-framer-name="Scope">
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[11]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[12]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[13]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[14]}
                          </p>
                        </div>
                      </div>
                    </Appear>
                  </div>
                </div>
              </section>
            </SV>
            <SV c="ssr-variant hidden-g87bww hidden-1o0hdey" show={["phone"]}>
              <section className="framer-3ye8xs" data-framer-name="Hero" style={{ "opacity": "1", "transform": "none" }}>
                <div className="framer-by5zon" data-framer-name="BG Outer Container">
                  <div className="framer-1vzwwht-container">
                    <VRoot as="div" map={{"DV6oTfLLg":{"cls":"framer-v-1shcg12","name":"Hidden Mask"},"Uh95rRMl7":{"cls":"framer-v-j4z1zy","name":"Revealed"}}} initial="DV6oTfLLg" transition={{"damping":25,"delay":0.8,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"Uh95rRMl7","threshold":0.5,"once":true}} className="framer-83xqy framer-j4z1zy framer-v-1shcg12" data-framer-name="Hidden Mask" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "cornerShape": "superellipse(1.5)", "height": "100%", "width": "100%", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","rotate":0,"scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"DV6oTfLLg":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","rotate":4,"scale":1.5,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-rbevx0" data-framer-name="BG" style={{ "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "transform": "scale(1.5) rotate(4deg)" }}>
                        <div className="framer-1q48sik" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <div className="framer-ios0bt" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[15]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                          </div>
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </div>
                <div className="framer-9cugxo" data-framer-name="Inside Container" style={{ "opacity": "1", "transform": "none" }}>
                  <header className="framer-5km0ir" data-framer-name="Top">
                    <Appear as="div" spec={AP["19jj9t8"]} bps={BPS} className="framer-19jj9t8-container" data-framer-appear-id="19jj9t8" style={{ "opacity": "0.001", "transform": "none" }}>
                      <Lk className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-ra0to2 framer-ghew07" data-framer-name="Desktop - Left" href="../projects" to="/projects">
                        <div className="framer-1dzfdpz" data-framer-name="Text">
                          <div className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "1", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                              {T[16]}
                            </p>
                          </div>
                          <div className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                              {T[17]}
                            </p>
                          </div>
                        </div>
                        <div className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                          <svg className="framer-4rnSx framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#3938257237\"></use>" }} />
                        </div>
                      </Lk>
                    </Appear>
                    <HideOn on={["phone"]}>
                    <Appear as="div" spec={AP["1gjlcjd"]} bps={BPS} className="framer-1gjlcjd-container hidden-1nc0ivo" data-framer-appear-id="1gjlcjd" style={{ "opacity": "0.001", "transform": "none" }}>
                      <Lk aria-label={T[18]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="../" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                        <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                      </Lk>
                    </Appear>
                    </HideOn>
                  </header>
                  <div className="framer-184oqzw" data-framer-name="Image / Project Info">
                    <Appear as="div" spec={AP["t241s"]} bps={BPS} className="framer-t241s" data-framer-appear-id="t241s" data-framer-name="Image / Video" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <div className="framer-8k5osh" draggable={false} style={{ "height": "auto", "aspectRatio": "1.7770034843205575" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[19]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </div>
                    </Appear>
                    <div className="framer-1niuf3q" data-framer-name="Filler" />
                    <div className="framer-1wtwicl" data-framer-name="Project Info">
                      <Appear as="div" spec={AP["1by17e4"]} bps={BPS} className="framer-1by17e4" data-framer-appear-id="1by17e4" data-framer-name="Title / Year" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                        <div className="framer-3xnncp" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <h1 className="framer-text framer-styles-preset-15kw1n0" data-styles-preset="Tz81QJ8i1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                            {T[20]}
                          </h1>
                        </div>
                        <div className="framer-16eh77w" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                            <time dateTime="2023-02-01T00:00:00.000Z">
                              {T[21]}
                            </time>
                          </p>
                        </div>
                      </Appear>
                      <div className="framer-11q1tjf-container">
                        <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "maxWidth": "100%", "width": "100%" }}>
                          <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                        </VRoot>
                      </div>
                      <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":1.25,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.6,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-lu6cf5", "data-styles-preset": "XKitmogp0", "dir": "auto", style: { "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" } }, segs: [T[22]] }]} className="framer-18lk34a" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    </div>
                  </div>
                  <div className="framer-1l9jlre" data-framer-name="Bottom Info">
                    <Appear as="div" spec={AP["6nrbi8"]} bps={BPS} className="framer-6nrbi8" data-framer-appear-id="6nrbi8" data-framer-name="Timeline" style={{ "opacity": "0.001", "transform": "none" }}>
                      <div className="framer-zw3fh5" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                          {T[23]}
                        </p>
                      </div>
                      <div className="framer-en6sck" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[24]}
                        </p>
                      </div>
                    </Appear>
                    <Appear as="div" spec={AP["9t0tqy"]} bps={BPS} className="framer-9t0tqy" data-framer-appear-id="9t0tqy" data-framer-name="Scope" style={{ "opacity": "0.001", "transform": "none" }}>
                      <div className="framer-1osspgd" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                          {T[25]}
                        </p>
                      </div>
                      <div className="framer-1kxi1cl" data-framer-name="Scope">
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[26]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[27]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[28]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[29]}
                          </p>
                        </div>
                      </div>
                    </Appear>
                  </div>
                </div>
              </section>
            </SV>
            <SV c="ssr-variant hidden-1nc0ivo hidden-1o0hdey" show={["tablet"]}>
              <section className="framer-3ye8xs" data-framer-name="Hero" style={{ "opacity": "1", "transform": "none" }}>
                <div className="framer-by5zon" data-framer-name="BG Outer Container">
                  <div className="framer-1vzwwht-container">
                    <VRoot as="div" map={{"DV6oTfLLg":{"cls":"framer-v-1shcg12","name":"Hidden Mask"},"Uh95rRMl7":{"cls":"framer-v-j4z1zy","name":"Revealed"}}} initial="DV6oTfLLg" transition={{"damping":25,"delay":0.8,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"Uh95rRMl7","threshold":0.5,"once":true}} className="framer-83xqy framer-j4z1zy framer-v-1shcg12" data-framer-name="Hidden Mask" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "cornerShape": "superellipse(1.5)", "height": "100%", "width": "100%", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","rotate":0,"scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"DV6oTfLLg":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","rotate":4,"scale":1.5,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-rbevx0" data-framer-name="BG" style={{ "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "transform": "scale(1.5) rotate(4deg)" }}>
                        <div className="framer-1q48sik" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <div className="framer-ios0bt" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[30]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                          </div>
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </div>
                <div className="framer-9cugxo" data-framer-name="Inside Container" style={{ "opacity": "1", "transform": "none" }}>
                  <header className="framer-5km0ir" data-framer-name="Top">
                    <Appear as="div" spec={AP["19jj9t8"]} bps={BPS} className="framer-19jj9t8-container" data-framer-appear-id="19jj9t8" style={{ "opacity": "0.001", "transform": "none" }}>
                      <Lk className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-ra0to2 framer-ghew07" data-framer-name="Desktop - Left" href="../projects" to="/projects">
                        <div className="framer-1dzfdpz" data-framer-name="Text">
                          <div className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "1", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                              {T[31]}
                            </p>
                          </div>
                          <div className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                              {T[32]}
                            </p>
                          </div>
                        </div>
                        <div className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                          <svg className="framer-4rnSx framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#3938257237\"></use>" }} />
                        </div>
                      </Lk>
                    </Appear>
                    <HideOn on={["phone"]}>
                    <Appear as="div" spec={AP["1gjlcjd"]} bps={BPS} className="framer-1gjlcjd-container hidden-1nc0ivo" data-framer-appear-id="1gjlcjd" style={{ "opacity": "0.001", "transform": "none" }}>
                      <Lk aria-label={T[33]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="../" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                        <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                      </Lk>
                    </Appear>
                    </HideOn>
                  </header>
                  <div className="framer-184oqzw" data-framer-name="Image / Project Info">
                    <Appear as="div" spec={AP["t241s"]} bps={BPS} className="framer-t241s" data-framer-appear-id="t241s" data-framer-name="Image / Video" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <div className="framer-8k5osh" id="8k5osh" draggable={false} style={{ "height": "auto", "aspectRatio": "1.7770034843205575" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[34]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </div>
                    </Appear>
                    <div className="framer-1niuf3q" data-framer-name="Filler" />
                    <div className="framer-1wtwicl" data-framer-name="Project Info">
                      <Appear as="div" spec={AP["1by17e4"]} bps={BPS} className="framer-1by17e4" data-framer-appear-id="1by17e4" data-framer-name="Title / Year" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                        <div className="framer-3xnncp" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <h1 className="framer-text framer-styles-preset-15kw1n0" data-styles-preset="Tz81QJ8i1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                            {T[35]}
                          </h1>
                        </div>
                        <div className="framer-16eh77w" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                            <time dateTime="2023-02-01T00:00:00.000Z">
                              {T[36]}
                            </time>
                          </p>
                        </div>
                      </Appear>
                      <div className="framer-11q1tjf-container">
                        <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "maxWidth": "100%", "width": "100%" }}>
                          <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                        </VRoot>
                      </div>
                      <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":1.25,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.6,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-lu6cf5", "data-styles-preset": "XKitmogp0", "dir": "auto", style: { "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" } }, segs: [T[37]] }]} className="framer-18lk34a" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    </div>
                  </div>
                  <div className="framer-1l9jlre" data-framer-name="Bottom Info">
                    <Appear as="div" spec={AP["6nrbi8"]} bps={BPS} className="framer-6nrbi8" data-framer-appear-id="6nrbi8" data-framer-name="Timeline" style={{ "opacity": "0.001", "transform": "none" }}>
                      <div className="framer-zw3fh5" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                          {T[38]}
                        </p>
                      </div>
                      <div className="framer-en6sck" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[39]}
                        </p>
                      </div>
                    </Appear>
                    <Appear as="div" spec={AP["9t0tqy"]} bps={BPS} className="framer-9t0tqy" data-framer-appear-id="9t0tqy" data-framer-name="Scope" style={{ "opacity": "0.001", "transform": "none" }}>
                      <div className="framer-1osspgd" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                          {T[40]}
                        </p>
                      </div>
                      <div className="framer-1kxi1cl" data-framer-name="Scope">
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[41]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[42]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[43]}
                          </p>
                        </div>
                        <div className="framer-8qo32r" data-framer-name="Service" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                            {T[44]}
                          </p>
                        </div>
                      </div>
                    </Appear>
                  </div>
                </div>
              </section>
            </SV>
            <div className="framer-dm7c33" data-framer-name="Project ">
              <section className="framer-102xlp0" data-framer-name="Client / Brief" id="hero-trigger">
                <div className="framer-wmm6pc" data-framer-name="Inside Container">
                  <div className="framer-1od0ywm" data-framer-name="Client Logo / About them">
                    <div className="framer-XiWvG framer-1nqnto0" />
                    <div className="framer-6x907c" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))" }}>
                        {T[45]}
                      </p>
                    </div>
                  </div>
                  <div className="framer-1iv0l1s" data-framer-name="Brief / Live Link">
                    <div className="framer-at2bt6" data-framer-name="Approach Split">
                      <div className="framer-gnismn" data-framer-name="Label / Heading">
                        <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0,"duration":1,"ease":[0.4,0,0.2,1],"type":"tween"},"once":true,"threshold":0.5,"target":1}} className="framer-105cjq5-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label" style={{ "maxWidth": "100%", "width": "100%" }}>
                              <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                  {T[46]}
                                </p>
                              </div>
                            </div>
                          </InView>
                        </SV>
                        <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0.5,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-fvem1p", "data-styles-preset": "LMUl9NNGN", "dir": "auto", style: { "--framer-text-color": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)" } }, segs: [T[47]] }]} className="framer-onrclc" data-framer-name="Big Text" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                      </div>
                      <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":5},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"word","transition":{"delay":0.02,"duration":0.6,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-10r2g7l", "data-styles-preset": "YXSEQA_bn", "dir": "auto", style: { "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847)" } }, segs: [{ tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[48] }, T[49], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[50] }, T[51], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[52] }, T[53], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[54] }, T[55], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[56] }, T[57], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[58] }, T[59], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[60] }, T[61], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[62] }, T[63], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[64] }, T[65], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[66] }, T[67], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[68] }, T[69], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[70] }, T[71], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[72] }, T[73], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[74] }, T[75], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[76] }, T[77], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[78] }, T[79], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[80] }, T[81], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[82] }, T[83], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[84] }, T[85], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[86] }, T[87], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[88] }, T[89], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[90] }, T[91], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[92] }, T[93], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[94] }, T[95], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(5px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[96] }] }]} className="framer-4e5inr" data-framer-name="Small Text" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    </div>
                    <SV c="ssr-variant hidden-1nc0ivo hidden-g87bww" show={["desktop"]}>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0.3,"duration":1,"ease":[0.4,0,0.2,1],"type":"tween"},"once":true,"threshold":0.5,"target":1}} className="framer-1dh416h-container" data-framer-name="Live Link" {...{ name: "Live Link" }} style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                        <a {...{ name: "Live Link" }} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-q8hg74 framer-ghew07" data-framer-name="Desktop - Right" href="https://launchnow.design?utm_source=miratemplate" target="_blank">
                          <div className="framer-1dzfdpz" data-framer-name="Text">
                            <div className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "1", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                {T[97]}
                              </p>
                            </div>
                            <div className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                {T[98]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                            <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                          </div>
                        </a>
                      </InView>
                    </SV>
                    <SV c="ssr-variant hidden-1o0hdey" show={["tablet","phone"]}>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0.3,"duration":1,"ease":[0.4,0,0.2,1],"type":"tween"},"once":true,"threshold":0.5,"target":1}} className="framer-1dh416h-container" data-framer-name="Live Link" {...{ name: "Live Link" }} style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                        <a {...{ name: "Live Link" }} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-ls2zup framer-ghew07" data-framer-name="Phone Right" href="https://launchnow.design?utm_source=miratemplate" target="_blank">
                          <div className="framer-1dzfdpz" data-framer-name="Text">
                            <div className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "1", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                {T[99]}
                              </p>
                            </div>
                            <div className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                {T[100]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                            <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                          </div>
                        </a>
                      </InView>
                    </SV>
                  </div>
                </div>
              </section>
              <section className="framer-1p5i3vy" data-framer-name="Image Section">
                <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                  <div className="framer-pgnxge-container" data-framer-name="1" {...{ name: "1" }}>
                    <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "1" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="iGryK2vFK-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "1.3392857142857142", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={1800} height={1344} src="/assets/images/vnm9m0Uei6UhjZqXwDd1J8XX77c.jpg" alt={T[101]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </SV>
                <div className="framer-1x8wi03" data-framer-name="Bottom Images">
                  <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                    <div className="framer-nhp5bo-container" data-framer-name="2" {...{ name: "2" }}>
                      <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "2" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="vg5sDbSIn-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "0.7466666666666667", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" loading="lazy" width={1344} height={1800} src="/assets/images/OTjft5MCpe1ZIm83rHxbvtd91Is.jpg" alt={T[102]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                          </div>
                        </VEl>
                      </VRoot>
                    </div>
                  </SV>
                  <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                    <div className="framer-12ft01b-container" data-framer-name="3" {...{ name: "3" }}>
                      <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "3" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="J_rDS0qwE-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "0.7466666666666667", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" loading="lazy" width={1344} height={1800} src="/assets/images/SG02Z58TlwLtrf5kZ1Ovewhv78.jpg" alt={T[103]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                          </div>
                        </VEl>
                      </VRoot>
                    </div>
                  </SV>
                </div>
              </section>
              <section className="framer-qgqtua" data-framer-name="Approach">
                <div className="framer-106actt" data-framer-name="Inside Container">
                  <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                    <div className="framer-tok2gr-container">
                      <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label" style={{ "maxWidth": "100%", "width": "100%" }}>
                        <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                            {T[104]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SV>
                  <div className="framer-1pu5h6j" data-framer-name="Big Text / Small Text">
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0.5,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-fvem1p", "data-styles-preset": "LMUl9NNGN", "dir": "auto", style: { "--framer-text-color": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)" } }, segs: [T[105]] }]} className="framer-rxaauc" data-framer-name="Big Text" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":2},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"word","transition":{"delay":0.02,"duration":0.6,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-10r2g7l", "data-styles-preset": "YXSEQA_bn", "dir": "auto", style: { "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847)" } }, segs: [{ tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[106] }, T[107], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[108] }, T[109], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[110] }, T[111], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[112] }, T[113], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[114] }, T[115], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[116] }, T[117], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[118] }, T[119], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[120] }, T[121], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[122] }, T[123], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[124] }, T[125], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[126] }, T[127], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[128] }, T[129], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[130] }, T[131], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[132] }, T[133], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[134] }, T[135], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[136] }, T[137], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[138] }, T[139], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[140] }, T[141], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[142] }, T[143], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[144] }, T[145], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[146] }, T[147], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[148] }, T[149], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[150] }, T[151], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[152] }, T[153], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[154] }, T[155], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[156] }, T[157], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[158] }, T[159], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[160] }, T[161], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[162] }, T[163], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[164] }, T[165], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[166] }, T[167], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[168] }, T[169], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[170] }, T[171], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[172] }, T[173], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[174] }, T[175], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[176] }] }]} className="framer-1vesi0q" data-framer-name="Small Text" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                  </div>
                </div>
              </section>
              <section className="framer-fu09xc">
                <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                  <div className="framer-1lrcd5x-container" data-framer-name="1" {...{ name: "1" }} style={{ "--1q1styz": "span 2" }}>
                    <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "1" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="tw5rDJXHw-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "0.7466666666666667", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={1344} height={1800} src="/assets/images/twFq2C702WAlYFgUMOigfzXxmc.jpg" alt={T[177]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </SV>
                <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                  <div className="framer-1lrcd5x-container" data-framer-name="1" {...{ name: "1" }} style={{ "--1q1styz": "span 2" }}>
                    <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "1" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="tw5rDJXHw-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "0.7466666666666667", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={1344} height={1800} src="/assets/images/Qrq41RDwWjYez6cdKCt0QDIqRQw.jpg" alt={T[178]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </SV>
                <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                  <div className="framer-1lrcd5x-container" data-framer-name="1" {...{ name: "1" }} style={{ "--1q1styz": "span 2" }}>
                    <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "1" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="tw5rDJXHw-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "0.7466666666666667", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={1344} height={1800} src="/assets/images/ADEYBq7Wf4XmgvtnCjS0GtpFhY.jpg" alt={T[179]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </SV>
                <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                  <div className="framer-1lrcd5x-container" data-framer-name="1" {...{ name: "1" }} style={{ "--1q1styz": "span 2" }}>
                    <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "1" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="tw5rDJXHw-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "0.7466666666666667", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={1344} height={1800} src="/assets/images/xrmKRvB9dpGe31Rj3chvWIsGjo.jpg" alt={T[180]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </SV>
                <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                  <div className="framer-1lrcd5x-container" data-framer-name="1" {...{ name: "1" }} style={{ "--1q1styz": "span 2" }}>
                    <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "1" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="tw5rDJXHw-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "0.7466666666666667", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={1344} height={1800} src="/assets/images/eXa2q6JhWPIKKCjgvGkAgj0CckI.jpg" alt={T[181]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </SV>
                <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                  <div className="framer-1lrcd5x-container" data-framer-name="1" {...{ name: "1" }} style={{ "--1q1styz": "span 2" }}>
                    <VRoot as="div" map={{"bst1eaA3L":{"cls":"framer-v-14neqw2","name":"Revealed"},"SEOMcnqgJ":{"cls":"framer-v-1fvw07s","name":"Hidden"}}} initial="SEOMcnqgJ" transition={{"delay":0,"duration":1.2,"ease":[0.87,0,0.13,1],"type":"tween"}} appear={{"to":"bst1eaA3L","threshold":0,"once":true}} {...{ name: "1" }} className="framer-pVIbn framer-14neqw2 framer-v-1fvw07s" data-framer-name="Hidden" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"SEOMcnqgJ":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","scale":1.3,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-cbal85" data-framer-name="1" id="tw5rDJXHw-cbal85" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "height": "auto", "aspectRatio": "0.7466666666666667", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3)" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={1344} height={1800} src="/assets/images/8DdK1PW6D47U4dZVHY3BzUAsiQ.jpg" alt={T[182]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </VEl>
                    </VRoot>
                  </div>
                </SV>
              </section>
              <section className="framer-1ui1s1v" data-framer-name="Outcomes">
                <div className="framer-11zw2la" data-framer-name="Inside Container">
                  <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                    <div className="framer-vc7mx5-container">
                      <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label" style={{ "maxWidth": "100%", "width": "100%" }}>
                        <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                            {T[183]}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SV>
                  <div className="framer-lycdyf" data-framer-name="Big Text / Small Text">
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0.5,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-fvem1p", "data-styles-preset": "LMUl9NNGN", "dir": "auto", style: { "--framer-text-color": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)" } }, segs: [T[184]] }]} className="framer-1pjpizp" data-framer-name="Big Text" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":2},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"word","transition":{"delay":0.02,"duration":0.6,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-10r2g7l", "data-styles-preset": "YXSEQA_bn", "dir": "auto", style: { "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847)" } }, segs: [{ tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[185] }, T[186], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[187] }, T[188], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[189] }, T[190], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[191] }, T[192], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[193] }, T[194], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[195] }, T[196], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[197] }, T[198], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[199] }, T[200], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[201] }, T[202], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[203] }, T[204], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[205] }, T[206], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[207] }, T[208], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[209] }, T[210], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[211] }, T[212], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[213] }, T[214], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[215] }, T[216], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[217] }, T[218], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[219] }, T[220], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[221] }, T[222], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[223] }, T[224], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[225] }, T[226], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[227] }, T[228], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[229] }, T[230], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[231] }, T[232], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[233] }, T[234], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[235] }, T[236], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[237] }, T[238], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[239] }] }]} className="framer-1761imj" data-framer-name="Small Text" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section className="framer-x2p7po" data-framer-name="Results / Testimonial">
            <div className="framer-1smvlsv" data-framer-name="Outer Container">
              <div className="framer-euk6vp" data-framer-name="Inside Container">
                <div className="framer-1diamj1" data-framer-name="Metrics">
                  <div className="framer-17al0v9" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                      {T[240]}
                    </p>
                  </div>
                  <div className="framer-h7w56c" data-framer-name="Metrics">
                    <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                      <div className="framer-1gxwewy-container" data-framer-name="Metric" {...{ name: "Metric" }}>
                        <div {...{ name: "Metric" }} className="framer-M6TOJ framer-Me6vv framer-2Ps8M framer-khCxy framer-QoPvp framer-1l3encs framer-v-1l3encs" data-framer-name="Dark" style={{ "width": "100%", "borderBottomLeftRadius": "4px", "borderBottomRightRadius": "4px", "borderTopLeftRadius": "4px", "borderTopRightRadius": "4px" }}>
                          <div className="framer-19iwyhl" data-framer-name="Stat">
                            <div className="framer-nrs2ax" data-framer-name="Count" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[241]}
                              </p>
                            </div>
                            <div className="framer-1d57mhn" data-framer-name="Number / Description">
                              <div className="framer-w3nx7a" data-framer-name="Metric" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[242]}
                                </h2>
                              </div>
                              <div className="framer-dkfec8" data-framer-name="Label / Description">
                                <div className="framer-qouc4r" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[243]}
                                  </p>
                                </div>
                                <div className="framer-1rvpfig" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[244]}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-12vlvse-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SV>
                    <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                      <div className="framer-1gxwewy-container" data-framer-name="Metric" {...{ name: "Metric" }}>
                        <div {...{ name: "Metric" }} className="framer-M6TOJ framer-Me6vv framer-2Ps8M framer-khCxy framer-QoPvp framer-1l3encs framer-v-1l3encs" data-framer-name="Dark" style={{ "width": "100%", "borderBottomLeftRadius": "4px", "borderBottomRightRadius": "4px", "borderTopLeftRadius": "4px", "borderTopRightRadius": "4px" }}>
                          <div className="framer-19iwyhl" data-framer-name="Stat">
                            <div className="framer-nrs2ax" data-framer-name="Count" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[245]}
                              </p>
                            </div>
                            <div className="framer-1d57mhn" data-framer-name="Number / Description">
                              <div className="framer-w3nx7a" data-framer-name="Metric" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[246]}
                                </h2>
                              </div>
                              <div className="framer-dkfec8" data-framer-name="Label / Description">
                                <div className="framer-qouc4r" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[247]}
                                  </p>
                                </div>
                                <div className="framer-1rvpfig" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[248]}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-12vlvse-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SV>
                    <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                      <div className="framer-1gxwewy-container" data-framer-name="Metric" {...{ name: "Metric" }}>
                        <div {...{ name: "Metric" }} className="framer-M6TOJ framer-Me6vv framer-2Ps8M framer-khCxy framer-QoPvp framer-1l3encs framer-v-1l3encs" data-framer-name="Dark" style={{ "width": "100%", "borderBottomLeftRadius": "4px", "borderBottomRightRadius": "4px", "borderTopLeftRadius": "4px", "borderTopRightRadius": "4px" }}>
                          <div className="framer-19iwyhl" data-framer-name="Stat">
                            <div className="framer-nrs2ax" data-framer-name="Count" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[249]}
                              </p>
                            </div>
                            <div className="framer-1d57mhn" data-framer-name="Number / Description">
                              <div className="framer-w3nx7a" data-framer-name="Metric" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[250]}
                                </h2>
                              </div>
                              <div className="framer-dkfec8" data-framer-name="Label / Description">
                                <div className="framer-qouc4r" data-framer-name="Label" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[251]}
                                  </p>
                                </div>
                                <div className="framer-1rvpfig" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[252]}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="framer-12vlvse-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SV>
                  </div>
                </div>
                <div className="framer-1i331ad" data-framer-name="Quote">
                  <div className="framer-18arrr4" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                      {T[253]}
                    </p>
                  </div>
                  <div className="framer-vx867a" data-framer-name="Author Card">
                    <SV c="ssr-variant hidden-1nc0ivo" show={["desktop","tablet"]}>
                      <div className="framer-2sx8n0" draggable={false}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={640} height={640} src="/assets/images/qV50KoxOEdTy8EP8lnobhyGqbzE.jpg" alt={T[254]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </div>
                    </SV>
                    <SV c="ssr-variant hidden-g87bww hidden-1o0hdey" show={["phone"]}>
                      <div className="framer-2sx8n0" draggable={false}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" loading="lazy" width={640} height={640} src="/assets/images/qV50KoxOEdTy8EP8lnobhyGqbzE.jpg" alt={T[255]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </div>
                    </SV>
                    <div className="framer-18y1rde" data-framer-name="Name / Role">
                      <div className="framer-169brk5" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[256]}
                        </p>
                      </div>
                      <div className="framer-1xpol5b" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                          {T[257]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1cax6r0" data-framer-name="Quote">
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0.5,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-ervepf", "data-styles-preset": "SM8X5ezGX", "dir": "auto", style: { "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" } }, segs: [T[258]] }]} className="framer-i1tksj" data-framer-name="Quote" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":2},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"word","transition":{"delay":0.02,"duration":0.6,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-10r2g7l", "data-styles-preset": "YXSEQA_bn", "dir": "auto", style: { "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" } }, segs: [{ tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[259] }, T[260], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[261] }, T[262], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[263] }, T[264], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[265] }, T[266], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[267] }, T[268], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[269] }, T[270], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[271] }, T[272], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[273] }, T[274], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[275] }, T[276], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[277] }, T[278], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[279] }, T[280], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[281] }, T[282], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[283] }, T[284], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[285] }, T[286], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[287] }, T[288], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[289] }, T[290], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[291] }, T[292], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[293] }, T[294], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[295] }, T[296], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[297] }, T[298], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[299] }, T[300], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[301] }, T[302], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[303] }, T[304], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[305] }, T[306], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[307] }, T[308], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[309] }, T[310], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[311] }, T[312], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[313] }, T[314], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[315] }, T[316], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[317] }, T[318], { tag: "span", attrs: { style: { "display": "inline-block", "opacity": "0.001", "transform": "translateX(0px) translateY(2px) scale(1) rotate(0deg) skewX(0deg) skewY(0deg)" } }, text: T[319] }] }]} className="framer-wo1sty" data-framer-name="Small Text" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="framer-npfnrg" data-framer-name="More Projects">
            <div className="framer-11bn4s5" data-framer-name="Inside Container">
              <div className="framer-pjaw51" data-framer-name="Filler" />
              <div className="framer-xrsurv" data-framer-name="Projects">
                <div className="framer-ug8u0a" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))" }}>
                    {T[320]}
                  </p>
                </div>
                <div className="framer-vf3z5h">
                  <SV c="ssr-variant hidden-1nc0ivo hidden-g87bww" show={["desktop"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.2,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-oubejw framer-m0zkdh" data-framer-name="Desktop" href="./gucci" style={{ "width": "100%" }} to="/projects/gucci">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[321]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[322]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-07-08T00:00:00.000Z">
                                {T[323]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "0" }}>
                          <div className="framer-5lad91" data-framer-name="Filler" />
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-9pqtfb-container" data-framer-name="Uploaded Video" {...{ name: "Uploaded Video" }}>
                              <video src="/assets/videos/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4" loop preload="none" poster="/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg" muted playsInline style={{ "cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "0px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%" }} />
                            </div>
                            <div className="framer-r4h57g" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.45" }} />
                            <div className="framer-yyqxO framer-pcgtig" style={{ "--1mg0zwm": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "translate(-50%, -50%)" }} />
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1o0hdey" show={["tablet","phone"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-1pcouco framer-m0zkdh" data-framer-name="Phone" href="./gucci" style={{ "width": "100%" }} to="/projects/gucci">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[324]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[325]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-07-08T00:00:00.000Z">
                                {T[326]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "1" }}>
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-9pqtfb-container" data-framer-name="Uploaded Video" {...{ name: "Uploaded Video" }}>
                              <video src="/assets/videos/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4" loop preload="none" poster="/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg" muted playsInline style={{ "cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "0px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%" }} />
                            </div>
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1nc0ivo hidden-g87bww" show={["desktop"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-oubejw framer-m0zkdh" data-framer-name="Desktop" href="./chanel" style={{ "width": "100%" }} to="/projects/chanel">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[327]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[328]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2024-07-10T00:00:00.000Z">
                                {T[329]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "0" }}>
                          <div className="framer-5lad91" data-framer-name="Filler" />
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cyk90i" id="undefined-cyk90i" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.7770034843205575", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width={2040} height={1148} src="/assets/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg" alt={T[330]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </div>
                            <div className="framer-r4h57g" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.45" }} />
                            <div className="framer-s4DmF framer-pcgtig" style={{ "--1mg0zwm": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "translate(-50%, -50%)" }} />
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1o0hdey" show={["tablet","phone"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.5,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-1pcouco framer-m0zkdh" data-framer-name="Phone" href="./chanel" style={{ "width": "100%" }} to="/projects/chanel">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[331]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[332]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2024-07-10T00:00:00.000Z">
                                {T[333]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "1" }}>
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cyk90i" id="undefined-cyk90i" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width={2040} height={1148} src="/assets/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg" alt={T[334]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1nc0ivo hidden-g87bww" show={["desktop"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.6,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-oubejw framer-m0zkdh" data-framer-name="Desktop" href="./puma" style={{ "width": "100%" }} to="/projects/puma">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[335]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[336]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-05-05T00:00:00.000Z">
                                {T[337]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "0" }}>
                          <div className="framer-5lad91" data-framer-name="Filler" />
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-9pqtfb-container" data-framer-name="Uploaded Video" {...{ name: "Uploaded Video" }}>
                              <video src="/assets/videos/LYIGz8CY670o999qJep8WeHqgzM.mp4" loop preload="none" poster="/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg" muted playsInline style={{ "cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "0px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%" }} />
                            </div>
                            <div className="framer-r4h57g" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.45" }} />
                            <div className="framer-eO2kt framer-pcgtig" style={{ "--1mg0zwm": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "translate(-50%, -50%)" }} />
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1o0hdey" show={["tablet","phone"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.7,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-1pcouco framer-m0zkdh" data-framer-name="Phone" href="./puma" style={{ "width": "100%" }} to="/projects/puma">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[338]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[339]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-05-05T00:00:00.000Z">
                                {T[340]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "1" }}>
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-9pqtfb-container" data-framer-name="Uploaded Video" {...{ name: "Uploaded Video" }}>
                              <video src="/assets/videos/LYIGz8CY670o999qJep8WeHqgzM.mp4" loop preload="none" poster="/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg" muted playsInline style={{ "cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "0px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%" }} />
                            </div>
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1nc0ivo hidden-g87bww" show={["desktop"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.8,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-oubejw framer-m0zkdh" data-framer-name="Desktop" href="./adidas" style={{ "width": "100%" }} to="/projects/adidas">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[341]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[342]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-04-15T00:00:00.000Z">
                                {T[343]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "0" }}>
                          <div className="framer-5lad91" data-framer-name="Filler" />
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cyk90i" id="undefined-cyk90i" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.7777777777777777", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width={2400} height={1350} src="/assets/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg" alt={T[344]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </div>
                            <div className="framer-r4h57g" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.45" }} />
                            <div className="framer-CxFEq framer-pcgtig" style={{ "--1mg0zwm": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "translate(-50%, -50%)" }} />
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1o0hdey" show={["tablet","phone"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.9,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-1pcouco framer-m0zkdh" data-framer-name="Phone" href="./adidas" style={{ "width": "100%" }} to="/projects/adidas">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[345]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[346]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-04-15T00:00:00.000Z">
                                {T[347]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "1" }}>
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cyk90i" id="undefined-cyk90i" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width={2400} height={1350} src="/assets/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg" alt={T[348]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1nc0ivo hidden-g87bww" show={["desktop"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-oubejw framer-m0zkdh" data-framer-name="Desktop" href="./nike" style={{ "width": "100%" }} to="/projects/nike">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[349]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[350]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-01-01T00:00:00.000Z">
                                {T[351]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "0" }}>
                          <div className="framer-5lad91" data-framer-name="Filler" />
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cyk90i" id="undefined-cyk90i" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.7770034843205575", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width={2040} height={1148} src="/assets/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg" alt={T[352]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </div>
                            <div className="framer-r4h57g" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.45" }} />
                            <div className="framer-gaSjD framer-pcgtig" style={{ "--1mg0zwm": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "translate(-50%, -50%)" }} />
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant hidden-1o0hdey" show={["tablet","phone"]}>
                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":1.1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-366ugj-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                      <Lk className="framer-8TEAn framer-2Ps8M framer-Me6vv framer-oubejw framer-v-1pcouco framer-m0zkdh" data-framer-name="Phone" href="./nike" style={{ "width": "100%" }} to="/projects/nike">
                        <div className="framer-11z2nkk" data-framer-name="Nav Item">
                          <div className="framer-1nl3ckl" data-framer-name="Text">
                            <div className="framer-a32j11" data-framer-name="Top" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "opacity": "1", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                {T[353]}
                              </h2>
                            </div>
                            <div className="framer-1o2749o" data-framer-name="Bottom" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "opacity": "0", "transform": "none" }}>
                              <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" }}>
                                {T[354]}
                              </h2>
                            </div>
                          </div>
                          <div className="framer-1u3jrt9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-01-01T00:00:00.000Z">
                                {T[355]}
                              </time>
                            </p>
                          </div>
                        </div>
                        <div className="framer-16o5iqg" data-framer-name="Image / Video Preview" style={{ "opacity": "1" }}>
                          <div className="framer-1omuosn" data-framer-name="Image / Video" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cyk90i" id="undefined-cyk90i" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" loading="lazy" width={2040} height={1148} src="/assets/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg" alt={T[356]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Lk>
                    </InView>
                  </SV>
                  <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                    <div className="framer-td6puf-container" />
                  </SV>
                </div>
              </div>
            </div>
          </section>
          <SV c="ssr-variant hidden-1nc0ivo hidden-g87bww" show={["desktop"]}>
            <div className="framer-1vs0idl-container">
              <section className="framer-qIn7C framer-QoPvp framer-LubW4 framer-yTVl5 framer-lt6Rw framer-xYquH framer-laVYw framer-14rm87n framer-v-14rm87n" data-framer-name="Desktop" style={{ "width": "100%" }}>
                <div className="framer-1sfsb0h" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                  <div className="framer-1blfm22-container">
                    <VRoot as="div" map={{"DlVS4BEWz":{"cls":"framer-v-1gumnrm","name":"End"},"XN1X2rc4T":{"cls":"framer-v-ygyp3d","name":"Start"}}} initial="XN1X2rc4T" transition={{"damping":25,"delay":0,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"DlVS4BEWz","threshold":0.5,"once":true}} className="framer-GJxp5 framer-ygyp3d framer-v-ygyp3d" data-framer-name="Start" style={{ "height": "100%", "width": "100%" }}>
                      <VEl as="div" base={{"filter":"grayscale(1)","WebkitFilter":"grayscale(1)"}} variants={{"DlVS4BEWz":{"filter":"grayscale(0)","WebkitFilter":"grayscale(0)"}}} className="framer-fbyx7b" data-framer-name="BG" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "filter": "grayscale(1)", "WebkitFilter": "grayscale(1)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div className="framer-2rkagx" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <VEl as="div" base={{"rotate":2,"scale":1.3}} variants={{"DlVS4BEWz":{"rotate":0,"scale":1}}} className="framer-1rd84u6" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3) rotate(2deg)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[357]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                          </div>
                        </VEl>
                      </VEl>
                    </VRoot>
                  </div>
                  <div className="framer-18ffh8y" data-framer-name="Inside Container">
                    <div className="framer-1xd81fe" data-framer-name="Top">
                      <div className="framer-1p123he-container">
                        <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                          <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                              {T[358]}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1x9xq4c" data-framer-name="Availability" style={{ "borderBottomLeftRadius": "24px", "borderBottomRightRadius": "24px", "borderTopLeftRadius": "24px", "borderTopRightRadius": "24px" }}>
                        <div className="framer-1z5wvg-container">
                          <div className="framer-fqvLJ framer-c37j5z framer-v-1ki7lk6" data-framer-name="2">
                            <div className="framer-1qqkmal-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-7l2lys" data-framer-name="Active" style={{ "opacity": "1" }}>
                                <Loop as="div" fx={{"to":{"opacity":0.5,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0,"duration":0.7,"ease":[0.87,0,0.13,1],"type":"tween"},"repeatType":"mirror","repeatDelay":0,"pauseOffscreen":true}} className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-1n486yj-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-7l2lys" data-framer-name="Active" style={{ "opacity": "1" }}>
                                <Loop as="div" fx={{"to":{"opacity":0.5,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0,"duration":0.7,"ease":[0.87,0,0.13,1],"type":"tween"},"repeatType":"mirror","repeatDelay":0,"pauseOffscreen":true}} className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-1c1ff8w-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-104eq85-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-qeeinq-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="framer-11fc1lh" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                            {T[359]}
                            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                              {T[360]}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="framer-9qm67l-container">
                        <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                          <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[361]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                            </div>
                          </div>
                          <div className="framer-lpw2kj" data-framer-name="Name / Role">
                            <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                {T[362]}
                              </p>
                            </div>
                            <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                {T[363]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1vtoytd" data-framer-name="Middle">
                      <div className="framer-13uprae" data-framer-name="Filler" />
                      <div className="framer-sec3t8" data-framer-name="Heading / Form">
                        <div className="framer-11w2tx5" data-framer-name="Heading / Description">
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[364], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[365] }, T[366]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[367], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[368] }, T[369]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                        </div>
                        <div className="framer-behbyg" data-framer-name="Form / Contact Info">
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-13sow98-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <VRoot as="div" map={{"ecW7wXnOV":{"cls":"framer-v-hothbd","name":"Error"},"Esh2uhvll":{"cls":"framer-v-5vpfx1","name":"Success"},"NgDnrA0wF":{"cls":"framer-v-11230cp","name":"Default"},"SHEQP1pE0":{"cls":"framer-v-99qclq","name":"Loading"}}} initial="NgDnrA0wF" transition={{"delay":0,"duration":0.6,"ease":[0.87,0,0.13,1],"type":"tween"}} events={{"loading":"SHEQP1pE0","error":"ecW7wXnOV","success":"Esh2uhvll"}} className="framer-KEC63 framer-khCxy framer-QoPvp framer-xYquH framer-11230cp framer-v-11230cp" data-framer-name="Default" style={{ "maxWidth": "100%", "width": "100%" }}>
                              <div className="framer-1i55y59-container" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-pEZXs framer-7sj87n framer-v-7sj87n" data-framer-name="Spinner">
                                  <div className="framer-1yqlm52" data-framer-name="Spinner" style={{ "mask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add", "WebkitMask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add" }}>
                                    <div className="framer-1m1l9lh" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "50%", "borderBottomRightRadius": "50%", "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%" }} />
                                  </div>
                                </div>
                              </div>
                              <FormFx kind="projects__under-armour" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                  <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                    <label className="framer-myo4nu" data-framer-name="Name">
                                      <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[370]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" required name="Name" placeholder={T[371]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-c41om3" data-framer-name="Company">
                                      <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[372]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" name="Company" placeholder={T[373]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-ausbnb" data-framer-name="Help With">
                                    <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[374]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="text" name="I need help with" placeholder={T[375]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                  <label className="framer-3t0b9d" data-framer-name="Pitch">
                                    <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[376]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                      <textarea required name="Pitch" placeholder={T[377]} className="framer-form-input" />
                                    </div>
                                  </label>
                                  <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                    <label className="framer-mvvosq" data-framer-name="Budget">
                                      <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[378]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <input type="text" name="Budget" placeholder={T[379]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-78o1yk" data-framer-name="Start">
                                      <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[380]}
                                        </p>
                                      </div>
                                      <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <select name="Start" required className="framer-form-input">
                                          <option value="" disabled>
                                            {T[381]}
                                          </option>
                                          <option value="ASAP">
                                            {T[382]}
                                          </option>
                                          <option value="Within a month">
                                            {T[383]}
                                          </option>
                                          <option value="This quarter">
                                            {T[384]}
                                          </option>
                                          <option value="Just exploring">
                                            {T[385]}
                                          </option>
                                        </select>
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-u8bpr7" data-framer-name="Email">
                                    <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                        {T[386]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="email" required name="Email" placeholder={T[387]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                </VEl>
                                <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                  <div className="framer-mrpb47" data-framer-name="Legal">
                                    <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                        {T[388]}
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="../terms-conditions" to="/terms-conditions">
                                          {T[389]}
                                        </Lk>
                                        {T[390]}
                                        <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                          {T[391]}
                                        </span>
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="../privacy-policy" to="/privacy-policy">
                                          {T[392]}
                                        </Lk>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="framer-16ay88s-container">
                                    <FormButtonFx label={T[393]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
                                  </div>
                                </div>
                                <input type="text" name="website" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="company" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="message" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="subject" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="title" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="description" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="feedback" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="notes" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="details" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="remarks" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="comments" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                              </FormFx>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.7,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-xxp7hb" data-framer-name="Contact / Logo" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-1g9sbcz" data-framer-name="Phone / Email">
                              <div className="framer-irhihs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-ervepf" data-styles-preset="SM8X5ezGX" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="tel:+18054501432" target="_blank" rel="">
                                    {T[394]}
                                  </a>
                                </p>
                              </div>
                              <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:hello@mira.studio" target="_blank" rel="">
                                    {T[395]}
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div data-framer-name="Logo" className="framer-1xjrc framer-swsyrf" />
                          </InView>
                        </div>
                      </div>
                    </div>
                    <div className="framer-casp62" data-framer-name="Bottom">
                      <div className="framer-1aggwsw" data-framer-name="Filler" />
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1xxi6mr-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[396]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[397]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[398]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.2,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1ldqm2m-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[399]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[400]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[401]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-18kvjba-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[402]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[403]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[404]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SV>
          <SV c="ssr-variant hidden-g87bww hidden-1o0hdey" show={["phone"]}>
            <div className="framer-1vs0idl-container">
              <section className="framer-qIn7C framer-QoPvp framer-LubW4 framer-yTVl5 framer-lt6Rw framer-xYquH framer-laVYw framer-14rm87n framer-v-b7iwrm" data-framer-name="Phone" style={{ "width": "100%" }}>
                <div className="framer-1sfsb0h" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                  <div className="framer-1blfm22-container">
                    <VRoot as="div" map={{"DlVS4BEWz":{"cls":"framer-v-1gumnrm","name":"End"},"XN1X2rc4T":{"cls":"framer-v-ygyp3d","name":"Start"}}} initial="XN1X2rc4T" transition={{"damping":25,"delay":0,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"DlVS4BEWz","threshold":0.5,"once":true}} className="framer-GJxp5 framer-ygyp3d framer-v-ygyp3d" data-framer-name="Start" style={{ "height": "100%", "width": "100%" }}>
                      <VEl as="div" base={{"filter":"grayscale(1)","WebkitFilter":"grayscale(1)"}} variants={{"DlVS4BEWz":{"filter":"grayscale(0)","WebkitFilter":"grayscale(0)"}}} className="framer-fbyx7b" data-framer-name="BG" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "filter": "grayscale(1)", "WebkitFilter": "grayscale(1)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div className="framer-2rkagx" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <VEl as="div" base={{"rotate":2,"scale":1.3}} variants={{"DlVS4BEWz":{"rotate":0,"scale":1}}} className="framer-1rd84u6" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3) rotate(2deg)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[405]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                          </div>
                        </VEl>
                      </VEl>
                    </VRoot>
                  </div>
                  <div className="framer-18ffh8y" data-framer-name="Inside Container">
                    <div className="framer-1xd81fe" data-framer-name="Top">
                      <div className="framer-1p123he-container">
                        <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                          <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                              {T[406]}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1x9xq4c" data-framer-name="Availability" style={{ "borderBottomLeftRadius": "24px", "borderBottomRightRadius": "24px", "borderTopLeftRadius": "24px", "borderTopRightRadius": "24px" }}>
                        <div className="framer-1z5wvg-container">
                          <div className="framer-fqvLJ framer-c37j5z framer-v-1ki7lk6" data-framer-name="2">
                            <div className="framer-1qqkmal-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-7l2lys" data-framer-name="Active" style={{ "opacity": "1" }}>
                                <Loop as="div" fx={{"to":{"opacity":0.5,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0,"duration":0.7,"ease":[0.87,0,0.13,1],"type":"tween"},"repeatType":"mirror","repeatDelay":0,"pauseOffscreen":true}} className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-1n486yj-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-7l2lys" data-framer-name="Active" style={{ "opacity": "1" }}>
                                <Loop as="div" fx={{"to":{"opacity":0.5,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0,"duration":0.7,"ease":[0.87,0,0.13,1],"type":"tween"},"repeatType":"mirror","repeatDelay":0,"pauseOffscreen":true}} className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-1c1ff8w-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-104eq85-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-qeeinq-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="framer-11fc1lh" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                            {T[407]}
                            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                              {T[408]}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="framer-9qm67l-container">
                        <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                          <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[409]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                            </div>
                          </div>
                          <div className="framer-lpw2kj" data-framer-name="Name / Role">
                            <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                {T[410]}
                              </p>
                            </div>
                            <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                {T[411]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1vtoytd" data-framer-name="Middle">
                      <div className="framer-sec3t8" data-framer-name="Heading / Form">
                        <div className="framer-11w2tx5" data-framer-name="Heading / Description">
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[412], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[413] }, T[414]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[415], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[416] }, T[417]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                        </div>
                        <div className="framer-behbyg" data-framer-name="Form / Contact Info">
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-13sow98-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <VRoot as="div" map={{"ecW7wXnOV":{"cls":"framer-v-hothbd","name":"Error"},"Esh2uhvll":{"cls":"framer-v-5vpfx1","name":"Success"},"NgDnrA0wF":{"cls":"framer-v-11230cp","name":"Default"},"SHEQP1pE0":{"cls":"framer-v-99qclq","name":"Loading"}}} initial="NgDnrA0wF" transition={{"delay":0,"duration":0.6,"ease":[0.87,0,0.13,1],"type":"tween"}} events={{"loading":"SHEQP1pE0","error":"ecW7wXnOV","success":"Esh2uhvll"}} className="framer-KEC63 framer-khCxy framer-QoPvp framer-xYquH framer-11230cp framer-v-11230cp" data-framer-name="Default" style={{ "maxWidth": "100%", "width": "100%" }}>
                              <div className="framer-1i55y59-container" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-pEZXs framer-7sj87n framer-v-7sj87n" data-framer-name="Spinner">
                                  <div className="framer-1yqlm52" data-framer-name="Spinner" style={{ "mask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add", "WebkitMask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add" }}>
                                    <div className="framer-1m1l9lh" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "50%", "borderBottomRightRadius": "50%", "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%" }} />
                                  </div>
                                </div>
                              </div>
                              <FormFx kind="projects__under-armour" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                  <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                    <label className="framer-myo4nu" data-framer-name="Name">
                                      <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[418]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" required name="Name" placeholder={T[419]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-c41om3" data-framer-name="Company">
                                      <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[420]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" name="Company" placeholder={T[421]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-ausbnb" data-framer-name="Help With">
                                    <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[422]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="text" name="I need help with" placeholder={T[423]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                  <label className="framer-3t0b9d" data-framer-name="Pitch">
                                    <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[424]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                      <textarea required name="Pitch" placeholder={T[425]} className="framer-form-input" />
                                    </div>
                                  </label>
                                  <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                    <label className="framer-mvvosq" data-framer-name="Budget">
                                      <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[426]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <input type="text" name="Budget" placeholder={T[427]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-78o1yk" data-framer-name="Start">
                                      <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[428]}
                                        </p>
                                      </div>
                                      <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <select name="Start" required className="framer-form-input">
                                          <option value="" disabled>
                                            {T[429]}
                                          </option>
                                          <option value="ASAP">
                                            {T[430]}
                                          </option>
                                          <option value="Within a month">
                                            {T[431]}
                                          </option>
                                          <option value="This quarter">
                                            {T[432]}
                                          </option>
                                          <option value="Just exploring">
                                            {T[433]}
                                          </option>
                                        </select>
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-u8bpr7" data-framer-name="Email">
                                    <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                        {T[434]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="email" required name="Email" placeholder={T[435]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                </VEl>
                                <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                  <div className="framer-mrpb47" data-framer-name="Legal">
                                    <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                        {T[436]}
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="../terms-conditions" to="/terms-conditions">
                                          {T[437]}
                                        </Lk>
                                        {T[438]}
                                        <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                          {T[439]}
                                        </span>
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="../privacy-policy" to="/privacy-policy">
                                          {T[440]}
                                        </Lk>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="framer-16ay88s-container">
                                    <FormButtonFx label={T[441]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
                                  </div>
                                </div>
                                <input type="text" name="website" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="company" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="message" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="subject" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="title" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="description" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="feedback" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="notes" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="details" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="remarks" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="comments" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                              </FormFx>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-xxp7hb" data-framer-name="Contact / Logo" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-1g9sbcz" data-framer-name="Phone / Email">
                              <div className="framer-irhihs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-ervepf" data-styles-preset="SM8X5ezGX" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="tel:+18054501432" target="_blank" rel="">
                                    {T[442]}
                                  </a>
                                </p>
                              </div>
                              <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:hello@mira.studio" target="_blank" rel="">
                                    {T[443]}
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div data-framer-name="Logo" className="framer-1xjrc framer-swsyrf" />
                          </InView>
                        </div>
                      </div>
                    </div>
                    <div className="framer-casp62" data-framer-name="Bottom">
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1xxi6mr-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[444]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[445]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[446]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1ldqm2m-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[447]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[448]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[449]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-18kvjba-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[450]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[451]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[452]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SV>
          <SV c="ssr-variant hidden-1nc0ivo hidden-1o0hdey" show={["tablet"]}>
            <div className="framer-1vs0idl-container">
              <section className="framer-qIn7C framer-QoPvp framer-LubW4 framer-yTVl5 framer-lt6Rw framer-xYquH framer-laVYw framer-14rm87n framer-v-1g58qed" data-framer-name="Tablet" style={{ "width": "100%" }}>
                <div className="framer-1sfsb0h" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                  <div className="framer-1blfm22-container">
                    <VRoot as="div" map={{"DlVS4BEWz":{"cls":"framer-v-1gumnrm","name":"End"},"XN1X2rc4T":{"cls":"framer-v-ygyp3d","name":"Start"}}} initial="XN1X2rc4T" transition={{"damping":25,"delay":0,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"DlVS4BEWz","threshold":0.5,"once":true}} className="framer-GJxp5 framer-ygyp3d framer-v-ygyp3d" data-framer-name="Start" style={{ "height": "100%", "width": "100%" }}>
                      <VEl as="div" base={{"filter":"grayscale(1)","WebkitFilter":"grayscale(1)"}} variants={{"DlVS4BEWz":{"filter":"grayscale(0)","WebkitFilter":"grayscale(0)"}}} className="framer-fbyx7b" data-framer-name="BG" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "filter": "grayscale(1)", "WebkitFilter": "grayscale(1)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div className="framer-2rkagx" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <VEl as="div" base={{"rotate":2,"scale":1.3}} variants={{"DlVS4BEWz":{"rotate":0,"scale":1}}} className="framer-1rd84u6" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3) rotate(2deg)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[453]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                          </div>
                        </VEl>
                      </VEl>
                    </VRoot>
                  </div>
                  <div className="framer-18ffh8y" data-framer-name="Inside Container">
                    <div className="framer-1xd81fe" data-framer-name="Top">
                      <div className="framer-1p123he-container">
                        <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                          <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                              {T[454]}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1x9xq4c" data-framer-name="Availability" style={{ "borderBottomLeftRadius": "24px", "borderBottomRightRadius": "24px", "borderTopLeftRadius": "24px", "borderTopRightRadius": "24px" }}>
                        <div className="framer-1z5wvg-container">
                          <div className="framer-fqvLJ framer-c37j5z framer-v-1ki7lk6" data-framer-name="2">
                            <div className="framer-1qqkmal-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-7l2lys" data-framer-name="Active" style={{ "opacity": "1" }}>
                                <Loop as="div" fx={{"to":{"opacity":0.5,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0,"duration":0.7,"ease":[0.87,0,0.13,1],"type":"tween"},"repeatType":"mirror","repeatDelay":0,"pauseOffscreen":true}} className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-1n486yj-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-7l2lys" data-framer-name="Active" style={{ "opacity": "1" }}>
                                <Loop as="div" fx={{"to":{"opacity":0.5,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"delay":0,"duration":0.7,"ease":[0.87,0,0.13,1],"type":"tween"},"repeatType":"mirror","repeatDelay":0,"pauseOffscreen":true}} className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-1c1ff8w-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-104eq85-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                            <div className="framer-qeeinq-container">
                              <div {...{ "cye7cb3go": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))" }} className="framer-E3D9I framer-7l2lys framer-v-n4w2md" data-framer-name="Inactive" style={{ "opacity": "0.4" }}>
                                <div className="framer-w3tiya" data-framer-name="Slot" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "2px", "borderBottomRightRadius": "2px", "borderTopLeftRadius": "2px", "borderTopRightRadius": "2px", "opacity": "1", "transform": "none" }} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="framer-11fc1lh" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                            {T[455]}
                            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                              {T[456]}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="framer-9qm67l-container">
                        <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                          <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[457]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                            </div>
                          </div>
                          <div className="framer-lpw2kj" data-framer-name="Name / Role">
                            <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                {T[458]}
                              </p>
                            </div>
                            <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                {T[459]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1vtoytd" data-framer-name="Middle">
                      <div className="framer-sec3t8" data-framer-name="Heading / Form">
                        <div className="framer-11w2tx5" data-framer-name="Heading / Description">
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[460], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[461] }, T[462]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[463], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[464] }, T[465]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                        </div>
                        <div className="framer-behbyg" data-framer-name="Form / Contact Info">
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-13sow98-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <VRoot as="div" map={{"ecW7wXnOV":{"cls":"framer-v-hothbd","name":"Error"},"Esh2uhvll":{"cls":"framer-v-5vpfx1","name":"Success"},"NgDnrA0wF":{"cls":"framer-v-11230cp","name":"Default"},"SHEQP1pE0":{"cls":"framer-v-99qclq","name":"Loading"}}} initial="NgDnrA0wF" transition={{"delay":0,"duration":0.6,"ease":[0.87,0,0.13,1],"type":"tween"}} events={{"loading":"SHEQP1pE0","error":"ecW7wXnOV","success":"Esh2uhvll"}} className="framer-KEC63 framer-khCxy framer-QoPvp framer-xYquH framer-11230cp framer-v-11230cp" data-framer-name="Default" style={{ "maxWidth": "100%", "width": "100%" }}>
                              <div className="framer-1i55y59-container" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-pEZXs framer-7sj87n framer-v-7sj87n" data-framer-name="Spinner">
                                  <div className="framer-1yqlm52" data-framer-name="Spinner" style={{ "mask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add", "WebkitMask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add" }}>
                                    <div className="framer-1m1l9lh" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "50%", "borderBottomRightRadius": "50%", "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%" }} />
                                  </div>
                                </div>
                              </div>
                              <FormFx kind="projects__under-armour" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                  <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                    <label className="framer-myo4nu" data-framer-name="Name">
                                      <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[466]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" required name="Name" placeholder={T[467]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-c41om3" data-framer-name="Company">
                                      <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[468]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" name="Company" placeholder={T[469]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-ausbnb" data-framer-name="Help With">
                                    <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[470]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="text" name="I need help with" placeholder={T[471]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                  <label className="framer-3t0b9d" data-framer-name="Pitch">
                                    <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[472]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                      <textarea required name="Pitch" placeholder={T[473]} className="framer-form-input" />
                                    </div>
                                  </label>
                                  <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                    <label className="framer-mvvosq" data-framer-name="Budget">
                                      <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[474]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <input type="text" name="Budget" placeholder={T[475]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-78o1yk" data-framer-name="Start">
                                      <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[476]}
                                        </p>
                                      </div>
                                      <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <select name="Start" required className="framer-form-input">
                                          <option value="" disabled>
                                            {T[477]}
                                          </option>
                                          <option value="ASAP">
                                            {T[478]}
                                          </option>
                                          <option value="Within a month">
                                            {T[479]}
                                          </option>
                                          <option value="This quarter">
                                            {T[480]}
                                          </option>
                                          <option value="Just exploring">
                                            {T[481]}
                                          </option>
                                        </select>
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-u8bpr7" data-framer-name="Email">
                                    <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                        {T[482]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="email" required name="Email" placeholder={T[483]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                </VEl>
                                <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                  <div className="framer-mrpb47" data-framer-name="Legal">
                                    <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                        {T[484]}
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="../terms-conditions" to="/terms-conditions">
                                          {T[485]}
                                        </Lk>
                                        {T[486]}
                                        <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                          {T[487]}
                                        </span>
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="../privacy-policy" to="/privacy-policy">
                                          {T[488]}
                                        </Lk>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="framer-16ay88s-container">
                                    <FormButtonFx label={T[489]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
                                  </div>
                                </div>
                                <input type="text" name="website" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="company" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="message" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="subject" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="title" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="description" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="feedback" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="notes" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="details" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="remarks" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                                <input type="text" name="comments" tabIndex={-1} autoComplete="one-time-code" aria-hidden="true" style={{ "position": "absolute", "transform": "scale(0)" }} data-1p-ignore="true" data-lpignore="true" data-form-type="other" data-bwignore="true" defaultValue="" />
                              </FormFx>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.7,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-xxp7hb" data-framer-name="Contact / Logo" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-1g9sbcz" data-framer-name="Phone / Email">
                              <div className="framer-irhihs" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-ervepf" data-styles-preset="SM8X5ezGX" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="tel:+18054501432" target="_blank" rel="">
                                    {T[490]}
                                  </a>
                                </p>
                              </div>
                              <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:hello@mira.studio" target="_blank" rel="">
                                    {T[491]}
                                  </a>
                                </p>
                              </div>
                            </div>
                            <div data-framer-name="Logo" className="framer-1xjrc framer-swsyrf" />
                          </InView>
                        </div>
                      </div>
                    </div>
                    <div className="framer-casp62" data-framer-name="Bottom">
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1xxi6mr-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[492]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[493]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[494]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.2,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1ldqm2m-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[495]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[496]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[497]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-18kvjba-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                        <div className="framer-4Ch77 framer-Me6vv framer-laVYw framer-QoPvp framer-9kx42m framer-v-9kx42m" data-framer-name="Dark" style={{ "width": "100%" }}>
                          <div className="framer-v8qtu5" data-framer-name="Step" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div className="framer-cnai0k" data-framer-name="01" data-framer-component-type="RichTextContainer" style={{ "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[498]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[499]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[500]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SV>
        </div>
      </main>
    </div>
  );
}
