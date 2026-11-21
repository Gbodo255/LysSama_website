// Généré par scripts/genpage.mjs depuis reference/html/contact.html (D-033) — ne pas modifier à la main : régénérer.
import './Body.css';
import { T } from '@/data/text/contact';
import { Appear } from '@/components/Appear';
import { FormButtonFx } from '@/components/forms/FormFx';
import { FormFx } from '@/components/forms/FormFx';
import { HideOn } from '@/components/Variants';
import { InView } from '@/components/fx/InView';
import { Lk } from '@/components/Lk';
import { Loop } from '@/components/fx/Loop';
import { NavLinks } from '@/components/nav/parts';
import { SV } from '@/components/Variants';
import { SmoothScroll } from '@/components/SmoothScroll';
import { TextFx } from '@/components/fx/TextFx';
import { VRoot, VEl } from '@/components/fx/Variant';

const BPS = {"1o9zkmb":"desktop","47y8pw":"tablet","1h5o7sz":"phone","1pvmz1y":"phone","1wjgfnr":"tablet","1e6htkk":"desktop"} as const;
const AP = {"i3k6v0":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.2,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"6hdhbv":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.3,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"f17uai":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}}},"c6ixgn":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.4,"duration":1.2,"type":"spring"},"x":0,"y":0}},"1h5o7sz":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.4,"duration":1.2,"type":"spring"},"x":0,"y":0}},"47y8pw":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.4,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"wkv69t":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.5,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"1yutnjb":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.6,"duration":1.2,"type":"spring"},"x":0,"y":0}}}};

export function Body() {
  return (
    <div data-framer-root="" className="framer-C69ZD framer-GC3F4 framer-yTVl5 framer-Me6vv framer-1o9zkmb" style={{ "minHeight": "100vh", "width": "auto", "display": "contents" }}>
      <SmoothScroll className="framer-155qwoq-container" data-framer-name="Lenis Smooth Scroll" {...{ name: "Lenis Smooth Scroll" }} />
      <main className="framer-176d49w" data-framer-name="Main">
        <SV c="ssr-variant" show={["desktop","tablet"]}>
          <HideOn on={["phone"]}>
          <div className="framer-4szon1-container hidden-1h5o7sz">
            <div className="framer-yXQrW framer-gmtdri framer-v-gmtdri" data-framer-name="Spacer" style={{ "height": "100%" }} />
          </div>
          </HideOn>
        </SV>
        <div className="framer-gj9w7s" data-framer-name="Content">
          <section className="framer-33hbc5" data-framer-name="Hero">
            <div className="framer-eze1q8" data-framer-name="Inside Container">
              <HideOn on={["phone"]}>
              <header className="framer-u167tj hidden-1h5o7sz" data-framer-name="Top">
                <Appear as="div" spec={AP["i3k6v0"]} bps={BPS} className="framer-i3k6v0-container" data-framer-appear-id="i3k6v0" style={{ "opacity": "0.001", "transform": "none" }}>
                  <Lk aria-label={T[0]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="./" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                    <div data-framer-name="Logo" className="framer-SHtMX framer-7h3po8" />
                  </Lk>
                </Appear>
                <Appear as="div" spec={AP["6hdhbv"]} bps={BPS} className="framer-6hdhbv-container" data-framer-appear-id="6hdhbv" style={{ "opacity": "0.001", "transform": "none" }}>
                  <SV c="ssr-variant hidden-47y8pw" show={["desktop","phone"]}>
                    <NavLinks variant="top" color={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))"}  style={{"height":"100%","width":"100%"}} />
                  </SV>
                  <SV c="ssr-variant hidden-1h5o7sz hidden-1o9zkmb" show={["tablet"]}>
                    <NavLinks variant="topTablet" color={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))"}  style={{"height":"100%","width":"100%"}} />
                  </SV>
                </Appear>
              </header>
              </HideOn>
              <div className="framer-129zzkw" data-framer-name="Middle">
                <HideOn on={["phone"]}>
                <div className="framer-qjvgsc hidden-1h5o7sz" data-framer-name="Filler" />
                </HideOn>
                <div className="framer-o3m68j" data-framer-name="Heading / Description">
                  <Appear as="div" spec={AP["f17uai"]} bps={BPS} className="framer-f17uai" data-framer-appear-id="f17uai" data-framer-component-type="RichTextContainer" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                    <h1 className="framer-text framer-styles-preset-15kw1n0" data-styles-preset="Tz81QJ8i1" dir="auto">
                      {T[1]}
                    </h1>
                  </Appear>
                  <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":1.1,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify" } }, segs: [{ tag: "span", attrs: { style: { "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))" }, "className": "framer-text" }, text: T[2] }, T[3]] }]} className="framer-142f1kq" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                </div>
              </div>
              <div className="framer-92y46i" data-framer-name="Bottom">
                <SV c="ssr-variant hidden-1h5o7sz hidden-47y8pw" show={["desktop"]}>
                  <Appear as="div" spec={AP["c6ixgn"]} bps={BPS} className="framer-c6ixgn-container" data-framer-appear-id="c6ixgn" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-shGv8 framer-4tnhfa framer-v-4tnhfa" data-framer-name="Desktop">
                      <div className="framer-17kf78c-container" data-framer-name="X" {...{ name: "X" }}>
                        <div {...{ name: "X" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[4]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://x.com" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-LAEqS framer-1fo7tgr" style={{ "--87ol9m": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }} />
                          </a>
                        </div>
                      </div>
                      <div className="framer-1smje0b-container" data-framer-name="IG" {...{ name: "IG" }}>
                        <div {...{ name: "IG" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[5]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://instagram.com" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-uZnUQ framer-1fo7tgr" style={{ "--87ol9m": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }} />
                          </a>
                        </div>
                      </div>
                      <div className="framer-t1kefs-container" data-framer-name="Dribbble" {...{ name: "Dribbble" }}>
                        <div {...{ name: "Dribbble" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[6]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://dribbble.com" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-K6Gdb framer-1fo7tgr" style={{ "--87ol9m": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }} />
                          </a>
                        </div>
                      </div>
                      <div className="framer-1cdugcb-container" data-framer-name="Behance" {...{ name: "Behance" }}>
                        <div {...{ name: "Behance" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[7]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://behance.com" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-lYLYO framer-1fo7tgr" style={{ "--87ol9m": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Appear>
                </SV>
                <SV c="ssr-variant hidden-1o9zkmb" show={["tablet","phone"]}>
                  <Appear as="div" spec={AP["c6ixgn"]} bps={BPS} className="framer-c6ixgn-container" data-framer-appear-id="c6ixgn" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-shGv8 framer-4tnhfa framer-v-5pv308" data-framer-name="Phone">
                      <div className="framer-17kf78c-container" data-framer-name="X" {...{ name: "X" }}>
                        <div {...{ name: "X" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[8]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://x.com" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-LAEqS framer-1fo7tgr" style={{ "--87ol9m": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }} />
                          </a>
                        </div>
                      </div>
                      <div className="framer-1smje0b-container" data-framer-name="IG" {...{ name: "IG" }}>
                        <div {...{ name: "IG" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[9]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://instagram.com" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-uZnUQ framer-1fo7tgr" style={{ "--87ol9m": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }} />
                          </a>
                        </div>
                      </div>
                      <div className="framer-t1kefs-container" data-framer-name="Dribbble" {...{ name: "Dribbble" }}>
                        <div {...{ name: "Dribbble" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[10]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://dribbble.com" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-K6Gdb framer-1fo7tgr" style={{ "--87ol9m": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }} />
                          </a>
                        </div>
                      </div>
                      <div className="framer-1cdugcb-container" data-framer-name="Behance" {...{ name: "Behance" }}>
                        <div {...{ name: "Behance" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[11]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://behance.com" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-lYLYO framer-1fo7tgr" style={{ "--87ol9m": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Appear>
                </SV>
                <Appear as="div" spec={AP["wkv69t"]} bps={BPS} className="framer-wkv69t" data-framer-appear-id="wkv69t" data-framer-name="Address" style={{ "opacity": "0.001", "transform": "none" }}>
                  <div className="framer-thyyxi" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                      {T[12]}
                    </p>
                  </div>
                  <div className="framer-e4ij6v" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))" }}>
                      {T[13]}
                    </p>
                  </div>
                </Appear>
                <Appear as="div" spec={AP["1yutnjb"]} bps={BPS} className="framer-1yutnjb" data-framer-appear-id="1yutnjb" data-framer-name="Office hours" style={{ "opacity": "0.001", "transform": "none" }}>
                  <div className="framer-1ixlzjk" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                      <strong className="framer-text">
                        {T[14]}
                      </strong>
                    </p>
                  </div>
                  <div className="framer-5f79wu" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))" }}>
                      {T[15]}
                    </p>
                  </div>
                </Appear>
              </div>
            </div>
          </section>
          <SV c="ssr-variant hidden-1h5o7sz hidden-47y8pw" show={["desktop"]}>
            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":1.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1yubnzo-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
              <section className="framer-qIn7C framer-QoPvp framer-LubW4 framer-yTVl5 framer-lt6Rw framer-xYquH framer-laVYw framer-14rm87n framer-v-14rm87n" data-framer-name="Desktop" style={{ "width": "100%" }}>
                <div className="framer-1sfsb0h" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                  <div className="framer-1blfm22-container">
                    <VRoot as="div" map={{"DlVS4BEWz":{"cls":"framer-v-1gumnrm","name":"End"},"XN1X2rc4T":{"cls":"framer-v-ygyp3d","name":"Start"}}} initial="XN1X2rc4T" transition={{"damping":25,"delay":0,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"DlVS4BEWz","threshold":0.5,"once":true}} className="framer-GJxp5 framer-ygyp3d framer-v-ygyp3d" data-framer-name="Start" style={{ "height": "100%", "width": "100%" }}>
                      <VEl as="div" base={{"filter":"grayscale(1)","WebkitFilter":"grayscale(1)"}} variants={{"DlVS4BEWz":{"filter":"grayscale(0)","WebkitFilter":"grayscale(0)"}}} className="framer-fbyx7b" data-framer-name="BG" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "filter": "grayscale(1)", "WebkitFilter": "grayscale(1)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div className="framer-2rkagx" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <VEl as="div" base={{"rotate":2,"scale":1.3}} variants={{"DlVS4BEWz":{"rotate":0,"scale":1}}} className="framer-1rd84u6" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3) rotate(2deg)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2400} height={1808} src="/assets/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
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
                              {T[16]}
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
                            {T[17]}
                            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                              {T[18]}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="framer-9qm67l-container">
                        <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                          <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[19]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                            </div>
                          </div>
                          <div className="framer-lpw2kj" data-framer-name="Name / Role">
                            <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                {T[20]}
                              </p>
                            </div>
                            <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                {T[21]}
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
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[22], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[23] }, T[24]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[25], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[26] }, T[27]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
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
                              <FormFx kind="contact" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                  <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                    <label className="framer-myo4nu" data-framer-name="Name">
                                      <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[28]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" required name="Name" placeholder={T[29]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-c41om3" data-framer-name="Company">
                                      <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[30]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" name="Company" placeholder={T[31]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-ausbnb" data-framer-name="Help With">
                                    <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[32]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="text" name="I need help with" placeholder={T[33]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                  <label className="framer-3t0b9d" data-framer-name="Pitch">
                                    <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[34]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                      <textarea required name="Pitch" placeholder={T[35]} className="framer-form-input" />
                                    </div>
                                  </label>
                                  <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                    <label className="framer-mvvosq" data-framer-name="Budget">
                                      <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[36]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <input type="text" name="Budget" placeholder={T[37]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-78o1yk" data-framer-name="Start">
                                      <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[38]}
                                        </p>
                                      </div>
                                      <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <select name="Start" required className="framer-form-input">
                                          <option value="" disabled>
                                            {T[39]}
                                          </option>
                                          <option value="ASAP">
                                            {T[40]}
                                          </option>
                                          <option value="Within a month">
                                            {T[41]}
                                          </option>
                                          <option value="This quarter">
                                            {T[42]}
                                          </option>
                                          <option value="Just exploring">
                                            {T[43]}
                                          </option>
                                        </select>
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-u8bpr7" data-framer-name="Email">
                                    <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                        {T[44]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="email" required name="Email" placeholder={T[45]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                </VEl>
                                <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                  <div className="framer-mrpb47" data-framer-name="Legal">
                                    <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                        {T[46]}
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./terms-conditions" to="/terms-conditions">
                                          {T[47]}
                                        </Lk>
                                        {T[48]}
                                        <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                          {T[49]}
                                        </span>
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./privacy-policy" to="/privacy-policy">
                                          {T[50]}
                                        </Lk>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="framer-16ay88s-container">
                                    <FormButtonFx label={T[51]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
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
                                    {T[52]}
                                  </a>
                                </p>
                              </div>
                              <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:hello@mira.studio" target="_blank" rel="">
                                    {T[53]}
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
                                {T[54]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[55]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[56]}
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
                                {T[57]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[58]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[59]}
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
                                {T[60]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[61]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[62]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                    </div>
                  </div>
                </div>
              </section>
            </InView>
          </SV>
          <SV c="ssr-variant hidden-1o9zkmb hidden-47y8pw" show={["phone"]}>
            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":1.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1yubnzo-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
              <section className="framer-qIn7C framer-QoPvp framer-LubW4 framer-yTVl5 framer-lt6Rw framer-xYquH framer-laVYw framer-14rm87n framer-v-b7iwrm" data-framer-name="Phone" style={{ "width": "100%" }}>
                <div className="framer-1sfsb0h" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                  <div className="framer-1blfm22-container">
                    <VRoot as="div" map={{"DlVS4BEWz":{"cls":"framer-v-1gumnrm","name":"End"},"XN1X2rc4T":{"cls":"framer-v-ygyp3d","name":"Start"}}} initial="XN1X2rc4T" transition={{"damping":25,"delay":0,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"DlVS4BEWz","threshold":0.5,"once":true}} className="framer-GJxp5 framer-ygyp3d framer-v-ygyp3d" data-framer-name="Start" style={{ "height": "100%", "width": "100%" }}>
                      <VEl as="div" base={{"filter":"grayscale(1)","WebkitFilter":"grayscale(1)"}} variants={{"DlVS4BEWz":{"filter":"grayscale(0)","WebkitFilter":"grayscale(0)"}}} className="framer-fbyx7b" data-framer-name="BG" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "filter": "grayscale(1)", "WebkitFilter": "grayscale(1)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div className="framer-2rkagx" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <VEl as="div" base={{"rotate":2,"scale":1.3}} variants={{"DlVS4BEWz":{"rotate":0,"scale":1}}} className="framer-1rd84u6" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3) rotate(2deg)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2400} height={1808} src="/assets/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
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
                              {T[63]}
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
                            {T[64]}
                            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                              {T[65]}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="framer-9qm67l-container">
                        <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                          <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[66]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                            </div>
                          </div>
                          <div className="framer-lpw2kj" data-framer-name="Name / Role">
                            <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                {T[67]}
                              </p>
                            </div>
                            <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                {T[68]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1vtoytd" data-framer-name="Middle">
                      <div className="framer-sec3t8" data-framer-name="Heading / Form">
                        <div className="framer-11w2tx5" data-framer-name="Heading / Description">
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[69], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[70] }, T[71]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[72], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[73] }, T[74]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
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
                              <FormFx kind="contact" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                  <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                    <label className="framer-myo4nu" data-framer-name="Name">
                                      <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[75]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" required name="Name" placeholder={T[76]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-c41om3" data-framer-name="Company">
                                      <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[77]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" name="Company" placeholder={T[78]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-ausbnb" data-framer-name="Help With">
                                    <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[79]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="text" name="I need help with" placeholder={T[80]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                  <label className="framer-3t0b9d" data-framer-name="Pitch">
                                    <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[81]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                      <textarea required name="Pitch" placeholder={T[82]} className="framer-form-input" />
                                    </div>
                                  </label>
                                  <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                    <label className="framer-mvvosq" data-framer-name="Budget">
                                      <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[83]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <input type="text" name="Budget" placeholder={T[84]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-78o1yk" data-framer-name="Start">
                                      <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[85]}
                                        </p>
                                      </div>
                                      <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <select name="Start" required className="framer-form-input">
                                          <option value="" disabled>
                                            {T[86]}
                                          </option>
                                          <option value="ASAP">
                                            {T[87]}
                                          </option>
                                          <option value="Within a month">
                                            {T[88]}
                                          </option>
                                          <option value="This quarter">
                                            {T[89]}
                                          </option>
                                          <option value="Just exploring">
                                            {T[90]}
                                          </option>
                                        </select>
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-u8bpr7" data-framer-name="Email">
                                    <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                        {T[91]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="email" required name="Email" placeholder={T[92]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                </VEl>
                                <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                  <div className="framer-mrpb47" data-framer-name="Legal">
                                    <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                        {T[93]}
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./terms-conditions" to="/terms-conditions">
                                          {T[94]}
                                        </Lk>
                                        {T[95]}
                                        <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                          {T[96]}
                                        </span>
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./privacy-policy" to="/privacy-policy">
                                          {T[97]}
                                        </Lk>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="framer-16ay88s-container">
                                    <FormButtonFx label={T[98]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
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
                                    {T[99]}
                                  </a>
                                </p>
                              </div>
                              <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:hello@mira.studio" target="_blank" rel="">
                                    {T[100]}
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
                                {T[101]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[102]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[103]}
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
                                {T[104]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[105]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[106]}
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
                                {T[107]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[108]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[109]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                    </div>
                  </div>
                </div>
              </section>
            </InView>
          </SV>
          <SV c="ssr-variant hidden-1h5o7sz hidden-1o9zkmb" show={["tablet"]}>
            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":1.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1yubnzo-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
              <section className="framer-qIn7C framer-QoPvp framer-LubW4 framer-yTVl5 framer-lt6Rw framer-xYquH framer-laVYw framer-14rm87n framer-v-1g58qed" data-framer-name="Tablet" style={{ "width": "100%" }}>
                <div className="framer-1sfsb0h" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                  <div className="framer-1blfm22-container">
                    <VRoot as="div" map={{"DlVS4BEWz":{"cls":"framer-v-1gumnrm","name":"End"},"XN1X2rc4T":{"cls":"framer-v-ygyp3d","name":"Start"}}} initial="XN1X2rc4T" transition={{"damping":25,"delay":0,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"DlVS4BEWz","threshold":0.5,"once":true}} className="framer-GJxp5 framer-ygyp3d framer-v-ygyp3d" data-framer-name="Start" style={{ "height": "100%", "width": "100%" }}>
                      <VEl as="div" base={{"filter":"grayscale(1)","WebkitFilter":"grayscale(1)"}} variants={{"DlVS4BEWz":{"filter":"grayscale(0)","WebkitFilter":"grayscale(0)"}}} className="framer-fbyx7b" data-framer-name="BG" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "filter": "grayscale(1)", "WebkitFilter": "grayscale(1)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div className="framer-2rkagx" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                        <VEl as="div" base={{"rotate":2,"scale":1.3}} variants={{"DlVS4BEWz":{"rotate":0,"scale":1}}} className="framer-1rd84u6" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "scale(1.3) rotate(2deg)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={2400} height={1808} src="/assets/images/EYivEG50p7YL92jdB9h51wLz4iU.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
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
                              {T[110]}
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
                            {T[111]}
                            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                              {T[112]}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="framer-9qm67l-container">
                        <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                          <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[113]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                            </div>
                          </div>
                          <div className="framer-lpw2kj" data-framer-name="Name / Role">
                            <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                {T[114]}
                              </p>
                            </div>
                            <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                {T[115]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="framer-1vtoytd" data-framer-name="Middle">
                      <div className="framer-sec3t8" data-framer-name="Heading / Form">
                        <div className="framer-11w2tx5" data-framer-name="Heading / Description">
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[116], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[117] }, T[118]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[119], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[120] }, T[121]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
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
                              <FormFx kind="contact" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                  <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                    <label className="framer-myo4nu" data-framer-name="Name">
                                      <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[122]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" required name="Name" placeholder={T[123]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-c41om3" data-framer-name="Company">
                                      <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[124]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" name="Company" placeholder={T[125]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-ausbnb" data-framer-name="Help With">
                                    <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[126]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="text" name="I need help with" placeholder={T[127]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                  <label className="framer-3t0b9d" data-framer-name="Pitch">
                                    <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                        {T[128]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                      <textarea required name="Pitch" placeholder={T[129]} className="framer-form-input" />
                                    </div>
                                  </label>
                                  <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                    <label className="framer-mvvosq" data-framer-name="Budget">
                                      <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[130]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <input type="text" name="Budget" placeholder={T[131]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-78o1yk" data-framer-name="Start">
                                      <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[132]}
                                        </p>
                                      </div>
                                      <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <select name="Start" required className="framer-form-input">
                                          <option value="" disabled>
                                            {T[133]}
                                          </option>
                                          <option value="ASAP">
                                            {T[134]}
                                          </option>
                                          <option value="Within a month">
                                            {T[135]}
                                          </option>
                                          <option value="This quarter">
                                            {T[136]}
                                          </option>
                                          <option value="Just exploring">
                                            {T[137]}
                                          </option>
                                        </select>
                                      </div>
                                    </label>
                                  </div>
                                  <label className="framer-u8bpr7" data-framer-name="Email">
                                    <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                        {T[138]}
                                      </p>
                                    </div>
                                    <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                      <input type="email" required name="Email" placeholder={T[139]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                    </div>
                                  </label>
                                </VEl>
                                <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                  <div className="framer-mrpb47" data-framer-name="Legal">
                                    <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                        {T[140]}
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./terms-conditions" to="/terms-conditions">
                                          {T[141]}
                                        </Lk>
                                        {T[142]}
                                        <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                          {T[143]}
                                        </span>
                                        <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./privacy-policy" to="/privacy-policy">
                                          {T[144]}
                                        </Lk>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="framer-16ay88s-container">
                                    <FormButtonFx label={T[145]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
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
                                    {T[146]}
                                  </a>
                                </p>
                              </div>
                              <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:hello@mira.studio" target="_blank" rel="">
                                    {T[147]}
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
                                {T[148]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[149]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[150]}
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
                                {T[151]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[152]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[153]}
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
                                {T[154]}
                              </p>
                            </div>
                          </div>
                          <div className="framer-re0eey" data-framer-name="Text">
                            <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[155]}
                              </p>
                            </div>
                            <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[156]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </InView>
                    </div>
                  </div>
                </div>
              </section>
            </InView>
          </SV>
          <SV c="ssr-variant hidden-1h5o7sz hidden-47y8pw" show={["desktop"]}>
            <div className="framer-1nk87jb-container">
              <section className="framer-Ia9oP framer-LubW4 framer-uqMg0 framer-QoPvp framer-uph3tr framer-v-uph3tr" data-framer-name="Desktop" style={{ "width": "100%" }}>
                <div className="framer-pbn94b" data-framer-name="Insider Container">
                  <div className="framer-13wq1ne-container">
                    <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                      <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                          {T[157]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1f7pes0">
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-alignment": "left" } }, segs: [T[158]] }]} className="framer-1yriwtq" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    <div className="framer-1gwkvmf">
                      <div className="framer-lxqxb0-container">
                        <div {...{ "xfvgfptcn": "tw5CtHDal" }} className="framer-BcSXX framer-12rngdm framer-v-12rngdm" data-framer-name="FAQ" style={{ "width": "100%" }}>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-126jzuy-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[159]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[160]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-g64ihk-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[161]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[162]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.5,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1g1zt2c-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[163]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[164]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.6,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-8f1u33-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[165]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[166]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.7,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1iqftmo-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[167]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[168]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.8,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-p6vj3b-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[169]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[170]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <div className="framer-1kp8kba-container" style={{ "transform": "translateX(-50%)" }}>
                            <div data-build="layout-jump-preventer-prod-20260926-01" aria-hidden="true" data-layout-jump-preventer="" style={{ "position": "relative", "pointerEvents": "none" }} />
                          </div>
                        </div>
                      </div>
                      <div className="framer-k0wudn" data-framer-name="Contact">
                        <div className="framer-fjmwxv">
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":1,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h3", attrs: { "className": "framer-text framer-styles-preset-s3qbre", "data-styles-preset": "fXy3B9GKl", "dir": "auto", style: { "--framer-text-alignment": "justify" } }, segs: [T[171]] }]} className="framer-1g3rpwd" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-16v0v5e" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[172]}
                            </p>
                          </InView>
                        </div>
                        <div className="framer-6ae9p9">
                          <div className="framer-1da612r" data-framer-name="Avatars">
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-nn6ref-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1.1,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-o7gwtl-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/r24iki3ocpS0eDELKDxFqrtWvE.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1.2,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-16czye0-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/jnuF1GFrbXtojrngr7MkxH565Q.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                          </div>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vtfl6s-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <a className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-q8hg74 framer-ghew07" data-framer-name="Desktop - Right" href="mailto:hello@mira.studio">
                              <div className="framer-1dzfdpz" data-framer-name="Text">
                                <div className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "1", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                    {T[173]}
                                  </p>
                                </div>
                                <div className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                    {T[174]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                                <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                              </div>
                            </a>
                          </InView>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SV>
          <SV c="ssr-variant hidden-1o9zkmb hidden-47y8pw" show={["phone"]}>
            <div className="framer-1nk87jb-container">
              <section className="framer-Ia9oP framer-LubW4 framer-uqMg0 framer-QoPvp framer-uph3tr framer-v-1tpt9v" data-framer-name="Phone" style={{ "width": "100%" }}>
                <div className="framer-pbn94b" data-framer-name="Insider Container">
                  <div className="framer-13wq1ne-container">
                    <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                      <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                          {T[175]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1f7pes0">
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-alignment": "left" } }, segs: [T[176]] }]} className="framer-1yriwtq" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    <div className="framer-1gwkvmf">
                      <div className="framer-lxqxb0-container">
                        <div {...{ "xfvgfptcn": "tw5CtHDal" }} className="framer-BcSXX framer-12rngdm framer-v-12rngdm" data-framer-name="FAQ" style={{ "width": "100%" }}>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-126jzuy-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[177]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[178]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-g64ihk-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[179]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[180]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.5,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1g1zt2c-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[181]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[182]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.6,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-8f1u33-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[183]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[184]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.7,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1iqftmo-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[185]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[186]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.8,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-p6vj3b-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[187]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[188]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <div className="framer-1kp8kba-container" style={{ "transform": "translateX(-50%)" }}>
                            <div data-build="layout-jump-preventer-prod-20260926-01" aria-hidden="true" data-layout-jump-preventer="" style={{ "position": "relative", "pointerEvents": "none" }} />
                          </div>
                        </div>
                      </div>
                      <div className="framer-k0wudn" data-framer-name="Contact">
                        <div className="framer-fjmwxv">
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":1,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h3", attrs: { "className": "framer-text framer-styles-preset-s3qbre", "data-styles-preset": "fXy3B9GKl", "dir": "auto", style: { "--framer-text-alignment": "justify" } }, segs: [T[189]] }]} className="framer-1g3rpwd" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-16v0v5e" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[190]}
                            </p>
                          </InView>
                        </div>
                        <div className="framer-6ae9p9">
                          <div className="framer-1da612r" data-framer-name="Avatars">
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-nn6ref-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1.1,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-o7gwtl-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/r24iki3ocpS0eDELKDxFqrtWvE.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1.2,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-16czye0-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/jnuF1GFrbXtojrngr7MkxH565Q.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                          </div>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vtfl6s-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <a className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-ls2zup framer-ghew07" data-framer-name="Phone Right" href="mailto:hello@mira.studio">
                              <div className="framer-1dzfdpz" data-framer-name="Text">
                                <div className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "1", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                    {T[191]}
                                  </p>
                                </div>
                                <div className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                    {T[192]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                                <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                              </div>
                            </a>
                          </InView>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </SV>
          <SV c="ssr-variant hidden-1h5o7sz hidden-1o9zkmb" show={["tablet"]}>
            <div className="framer-1nk87jb-container">
              <section className="framer-Ia9oP framer-LubW4 framer-uqMg0 framer-QoPvp framer-uph3tr framer-v-rhs3s9" data-framer-name="Tablet" style={{ "width": "100%" }}>
                <div className="framer-pbn94b" data-framer-name="Insider Container">
                  <div className="framer-13wq1ne-container">
                    <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                      <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                          {T[193]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-1f7pes0">
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-alignment": "left" } }, segs: [T[194]] }]} className="framer-1yriwtq" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                    <div className="framer-1gwkvmf">
                      <div className="framer-lxqxb0-container">
                        <div {...{ "xfvgfptcn": "tw5CtHDal" }} className="framer-BcSXX framer-12rngdm framer-v-12rngdm" data-framer-name="FAQ" style={{ "width": "100%" }}>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-126jzuy-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[195]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[196]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-g64ihk-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[197]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[198]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.5,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1g1zt2c-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[199]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[200]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.6,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-8f1u33-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[201]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[202]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.7,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1iqftmo-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[203]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[204]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":20},"transition":{"delay":0.8,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-p6vj3b-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(20px)" }}>
                            <VRoot as="div" map={{"tw5CtHDal":{"cls":"framer-v-c1bwse","name":"Closed"},"z490WtIIP":{"cls":"framer-v-10s7ezb","name":"Open"}}} initial="tw5CtHDal" transition={{"delay":0,"duration":0.46,"ease":[0.87,0,0.13,1],"type":"tween"}} tap={{"tw5CtHDal":"z490WtIIP","z490WtIIP":"tw5CtHDal"}} className="framer-pOYKh framer-laVYw framer-10s7ezb framer-v-c1bwse" data-framer-name="Closed" data-highlight="true" tabIndex={0} style={{ "--corner-shape-fallback": "1", "cornerShape": "superellipse(1)", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}} variants={{"tw5CtHDal":{"backgroundColor":"var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))"}}} className="framer-jfr4il" data-framer-name="Title" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"--extracted-r6o4lv":"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}} variants={{"tw5CtHDal":{"--extracted-r6o4lv":"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"}}} className="framer-1pe7kbn" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10)))" }}>
                                    {T[205]}
                                  </p>
                                </VEl>
                                <div className="framer-4atvja-container">
                                  <VRoot as="div" map={{"dwfiz8xsn":{"cls":"framer-v-1q1cc5y","name":"Closed"},"k601oOa0D":{"cls":"framer-v-5x09si","name":"Open"}}} initial="dwfiz8xsn" transition={{"delay":0,"duration":0.26,"ease":[0.87,0,0.13,1],"type":"tween"}} follow={{"tw5CtHDal":"dwfiz8xsn","z490WtIIP":"k601oOa0D"}} className="framer-LQ8sa framer-1q1cc5y framer-v-1q1cc5y" data-framer-name="Closed" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                    <VEl as="div" base={{"rotate":0}} variants={{"k601oOa0D":{"rotate":360}}} className="framer-1uijhxj" data-framer-name="Plus" style={{ "transform": "none" }}>
                                      <div className="framer-17e2lex" data-framer-name="V" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                      <div className="framer-1f2jp2r" data-framer-name="H" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                                    </VEl>
                                  </VRoot>
                                </div>
                              </VEl>
                              <VEl as="div" base={{"opacity":1}} variants={{"tw5CtHDal":{"opacity":0}}} className="framer-oupqxc" data-framer-name="Content" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                <div className="framer-12txq6p" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                    {T[206]}
                                  </p>
                                </div>
                              </VEl>
                            </VRoot>
                          </InView>
                          <div className="framer-1kp8kba-container" style={{ "transform": "translateX(-50%)" }}>
                            <div data-build="layout-jump-preventer-prod-20260926-01" aria-hidden="true" data-layout-jump-preventer="" style={{ "position": "relative", "pointerEvents": "none" }} />
                          </div>
                        </div>
                      </div>
                      <div className="framer-k0wudn" data-framer-name="Contact">
                        <div className="framer-fjmwxv">
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":1,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h3", attrs: { "className": "framer-text framer-styles-preset-s3qbre", "data-styles-preset": "fXy3B9GKl", "dir": "auto", style: { "--framer-text-alignment": "justify" } }, segs: [T[207]] }]} className="framer-1g3rpwd" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-16v0v5e" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[208]}
                            </p>
                          </InView>
                        </div>
                        <div className="framer-6ae9p9">
                          <div className="framer-1da612r" data-framer-name="Avatars">
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-nn6ref-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1.1,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-o7gwtl-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/r24iki3ocpS0eDELKDxFqrtWvE.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":1.2,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-16czye0-container" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                              <div className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" loading="lazy" width={84} height={84} src="/assets/images/jnuF1GFrbXtojrngr7MkxH565Q.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                  </div>
                                </div>
                              </div>
                            </InView>
                          </div>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vtfl6s-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <a className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-ls2zup framer-ghew07" data-framer-name="Phone Right" href="mailto:hello@mira.studio">
                              <div className="framer-1dzfdpz" data-framer-name="Text">
                                <div className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "1", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                    {T[209]}
                                  </p>
                                </div>
                                <div className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                    {T[210]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                                <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                              </div>
                            </a>
                          </InView>
                        </div>
                      </div>
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
