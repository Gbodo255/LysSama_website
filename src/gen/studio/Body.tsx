// Généré par scripts/genpage.mjs depuis reference/html/studio.html (D-033) — ne pas modifier à la main : régénérer.
import './Body.css';
import { T } from '@/data/text/studio';
import { Appear } from '@/components/Appear';
import { Counter } from '@/components/fx/Counter';
import { FormButtonFx } from '@/components/forms/FormFx';
import { FormFx } from '@/components/forms/FormFx';
import { HideOn } from '@/components/Variants';
import { InView } from '@/components/fx/InView';
import { Lk } from '@/components/Lk';
import { Loop } from '@/components/fx/Loop';
import { NavLinks } from '@/components/nav/parts';
import { SV } from '@/components/Variants';
import { ScrollFx, Parallax } from '@/components/fx/Scroll';
import { SmoothScroll } from '@/components/SmoothScroll';
import { TextFx } from '@/components/fx/TextFx';
import { VRoot, VEl } from '@/components/fx/Variant';
import { studioNumbers } from '@/data/studio';

const BPS = {"ynarf2":"desktop","o8ajoo":"tablet","n4shxz":"phone","1pvmz1y":"phone","1wjgfnr":"tablet","1e6htkk":"desktop"} as const;
const AP = {"8330z8":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.25,"duration":1.2,"type":"spring"},"x":0,"y":0}},"n4shxz":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.25,"duration":1.2,"type":"spring"},"x":0,"y":0}},"o8ajoo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.25,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"7hchzy":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}},"n4shxz":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}},"o8ajoo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.35,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"1wbcwny":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.15,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}},"n4shxz":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.15,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}},"o8ajoo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1.15,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}}},"3ji1qe":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.45,"duration":1.2,"type":"spring"},"x":0,"y":0}},"n4shxz":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.45,"duration":1.2,"type":"spring"},"x":0,"y":0}},"o8ajoo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.45,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"lx5sm7":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.55,"duration":1.2,"type":"spring"},"x":0,"y":0}},"n4shxz":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.55,"duration":1.2,"type":"spring"},"x":0,"y":0}},"o8ajoo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.55,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"f6zjzb":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.65,"duration":1.2,"type":"spring"},"x":0,"y":0}},"n4shxz":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.65,"duration":1.2,"type":"spring"},"x":0,"y":0}},"o8ajoo":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.65,"duration":1.2,"type":"spring"},"x":0,"y":0}}}};

export function Body() {
  return (
    <div data-framer-root="" className="framer-Ur11b framer-yTVl5 framer-Me6vv framer-2Ps8M framer-LubW4 framer-ynarf2" style={{ "minHeight": "100vh", "width": "auto", "display": "contents" }}>
      <SmoothScroll className="framer-1mn4ta-container" data-framer-name="Lenis Smooth Scroll" {...{ name: "Lenis Smooth Scroll" }} />
      <main className="framer-es8rs7" data-framer-name="Main">
        <HideOn on={["phone"]}>
        <div className="framer-1i9wie5-container hidden-n4shxz">
          <div className="framer-yXQrW framer-gmtdri framer-v-gmtdri" data-framer-name="Spacer" />
        </div>
        </HideOn>
        <div className="framer-1n70wml" data-framer-name="Content">
          <SV c="ssr-variant hidden-n4shxz hidden-o8ajoo" show={["desktop"]}>
            <ScrollFx as="section" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}},{"ref":{"cls":"framer-1nyqe0x"},"target":{"opacity":0.6,"rotate":0,"rotateX":0,"rotateY":0,"scale":0.925,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={1} target={1} off={["phone","tablet"]} className="framer-1x0mefb" data-framer-name="Hero" style={{ "willChange": "transform", "opacity": "1", "transform": "none" }}>
              <div className="framer-oqp9pp" data-framer-name="BG Outer Container">
                <div className="framer-16v677h-container">
                  <VRoot as="div" map={{"DV6oTfLLg":{"cls":"framer-v-1shcg12","name":"Hidden Mask"},"Uh95rRMl7":{"cls":"framer-v-j4z1zy","name":"Revealed"}}} initial="DV6oTfLLg" transition={{"damping":25,"delay":0.8,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"Uh95rRMl7","threshold":0.5,"once":true}} className="framer-83xqy framer-j4z1zy framer-v-1shcg12" data-framer-name="Hidden Mask" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "cornerShape": "superellipse(1.5)", "height": "100%", "width": "100%", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                    <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","rotate":0,"scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"DV6oTfLLg":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","rotate":4,"scale":1.5,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-rbevx0" data-framer-name="BG" style={{ "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "transform": "scale(1.5) rotate(4deg)" }}>
                      <div className="framer-1q48sik" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                      <div className="framer-ios0bt" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" width={2816} height={1536} src="/assets/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </div>
                    </VEl>
                  </VRoot>
                </div>
              </div>
              <Parallax as="div" speed={130} off={["phone","tablet"]} className="framer-hb5ox2" data-framer-name="Inside Container" style={{ "willChange": "transform", "opacity": "1", "transform": "none" }}>
                <header className="framer-1k134jf" data-framer-name="Top">
                  <HideOn on={["phone"]}>
                  <Appear as="div" spec={AP["8330z8"]} bps={BPS} className="framer-8330z8-container hidden-n4shxz" data-framer-appear-id="8330z8" style={{ "opacity": "0.001", "transform": "none" }}>
                    <Lk aria-label={T[0]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="./" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                      <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                    </Lk>
                  </Appear>
                  </HideOn>
                  <HideOn on={["phone"]}>
                  <Appear as="div" spec={AP["7hchzy"]} bps={BPS} className="framer-7hchzy-container hidden-n4shxz" data-framer-appear-id="7hchzy" style={{ "opacity": "0.001", "transform": "none" }}>
                    <NavLinks variant="top" color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}  style={{"height":"100%","width":"100%"}} />
                  </Appear>
                  </HideOn>
                </header>
                <div className="framer-1338hsz" data-framer-name="Heading">
                  <HideOn on={["phone"]}>
                  <div className="framer-dx75ug hidden-n4shxz" data-framer-name="Filler" />
                  </HideOn>
                  <div className="framer-by1tpf" data-framer-name="Heading / Description">
                    <Appear as="svg" spec={AP["1wbcwny"]} bps={BPS} className="framer-1wbcwny" data-framer-appear-id="1wbcwny" data-framer-component-type="RichTextContainer" viewBox="0 0 527.5 126" style={{ "opacity": "0.001", "transform": "translateY(40px)" }} dangerouslySetInnerHTML={{ __html: "<foreignObject width=\"100%\" height=\"100%\" class=\"framer-fit-text\" transform=\"scale(1)\" style=\"overflow:visible;transform-origin:center center\"><h1 dir=\"auto\" style=\"--font-selector:R0Y7TW9uYSBTYW5zLXZhcmlhYmxlLXJlZ3VsYXJWRj1JbmRrZEdnaUlEYzFMQ0FpZDJkb2RDSWdOekF3;--framer-font-family:&quot;Mona Sans Variable&quot;, &quot;Mona Sans Variable Placeholder&quot;, sans-serif;--framer-font-open-type-features:'ss07' on;--framer-font-size:139.75742161231543px;--framer-font-variation-axes:&quot;wdth&quot; 75, &quot;wght&quot; 700;--framer-letter-spacing:-0.02em;--framer-line-height:90%;--framer-text-alignment:left;--framer-text-color:var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255));--framer-text-transform:uppercase\" class=\"framer-text\">the studio.</h1></foreignObject>" }} />
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":1.25,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" } }, segs: [T[1]] }]} className="framer-alv9ty" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                  </div>
                </div>
                <div className="framer-9yv8xi" data-framer-name="Bottom">
                  <Appear as="div" spec={AP["3ji1qe"]} bps={BPS} className="framer-3ji1qe" data-framer-appear-id="3ji1qe" data-framer-name="Location" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-vm4nnf" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                        {T[2]}
                      </p>
                    </div>
                    <div className="framer-1l9jy5e" data-framer-name="Locations">
                      <div className="framer-5rwonx" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[3]}
                        </p>
                      </div>
                      <div className="framer-1dw7mww" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[4]}
                        </p>
                      </div>
                    </div>
                  </Appear>
                  <Appear as="div" spec={AP["lx5sm7"]} bps={BPS} className="framer-lx5sm7" data-framer-appear-id="lx5sm7" data-framer-name="Services" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-1m5qp67" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                        {T[5]}
                      </p>
                    </div>
                    <div className="framer-vnicgi">
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[6]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[7]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[8]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[9]}
                        </p>
                      </div>
                    </div>
                  </Appear>
                  <Appear as="div" spec={AP["f6zjzb"]} bps={BPS} className="framer-f6zjzb-container" data-framer-appear-id="f6zjzb" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-shGv8 framer-4tnhfa framer-v-4tnhfa" data-framer-name="Desktop">
                      <div className="framer-17kf78c-container" data-framer-name="X" {...{ name: "X" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "X" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[10]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://x.com/ErmitePasNette" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-LAEqS framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1smje0b-container" data-framer-name="IG" {...{ name: "IG" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "IG" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[11]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://instagram.com/lys__sama" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-uZnUQ framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-t1kefs-container" data-framer-name="Dribbble" {...{ name: "Dribbble" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "Dribbble" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[12]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://www.tiktok.com/@lys.sama" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-K6Gdb framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1cdugcb-container" data-framer-name="Facebook" {...{ name: "Facebook" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "Facebook" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label="Lien Facebook" className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="#facebook-a-fournir" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-lYLYO framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1cdugcb-container" data-framer-name="WhatsApp" {...{ name: "WhatsApp" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "WhatsApp" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label="Lien WhatsApp" className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="#whatsapp-a-fournir" target="_blank">
                            <div data-framer-name="Top Icon" className="lys-whatsapp framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                    </div>
                  </Appear>
                </div>
              </Parallax>
            </ScrollFx>
          </SV>
          <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
            <ScrollFx as="section" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}},{"ref":{"cls":"framer-1nyqe0x"},"target":{"opacity":0.6,"rotate":0,"rotateX":0,"rotateY":0,"scale":0.925,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={1} target={1} off={["phone","tablet"]} className="framer-1x0mefb" data-framer-name="Hero" style={{ "opacity": "1", "transform": "none" }}>
              <div className="framer-oqp9pp" data-framer-name="BG Outer Container">
                <div className="framer-16v677h-container">
                  <VRoot as="div" map={{"DV6oTfLLg":{"cls":"framer-v-1shcg12","name":"Hidden Mask"},"Uh95rRMl7":{"cls":"framer-v-j4z1zy","name":"Revealed"}}} initial="DV6oTfLLg" transition={{"damping":25,"delay":0.8,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"Uh95rRMl7","threshold":0.5,"once":true}} className="framer-83xqy framer-j4z1zy framer-v-1shcg12" data-framer-name="Hidden Mask" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "cornerShape": "superellipse(1.5)", "height": "100%", "width": "100%", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                    <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","rotate":0,"scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"DV6oTfLLg":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","rotate":4,"scale":1.5,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-rbevx0" data-framer-name="BG" style={{ "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "transform": "scale(1.5) rotate(4deg)" }}>
                      <div className="framer-1q48sik" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                      <div className="framer-ios0bt" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" width={2816} height={1536} src="/assets/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </div>
                    </VEl>
                  </VRoot>
                </div>
              </div>
              <Parallax as="div" speed={130} off={["phone","tablet"]} className="framer-hb5ox2" data-framer-name="Inside Container" style={{ "opacity": "1", "transform": "none" }}>
                <header className="framer-1k134jf" data-framer-name="Top">
                  <HideOn on={["phone"]}>
                  <Appear as="div" spec={AP["8330z8"]} bps={BPS} className="framer-8330z8-container hidden-n4shxz" data-framer-appear-id="8330z8" style={{ "opacity": "0.001", "transform": "none" }}>
                    <Lk aria-label={T[14]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="./" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                      <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                    </Lk>
                  </Appear>
                  </HideOn>
                  <HideOn on={["phone"]}>
                  <Appear as="div" spec={AP["7hchzy"]} bps={BPS} className="framer-7hchzy-container hidden-n4shxz" data-framer-appear-id="7hchzy" style={{ "opacity": "0.001", "transform": "none" }}>
                    <NavLinks variant="top" color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}  style={{"height":"100%","width":"100%"}} />
                  </Appear>
                  </HideOn>
                </header>
                <div className="framer-1338hsz" data-framer-name="Heading">
                  <HideOn on={["phone"]}>
                  <div className="framer-dx75ug hidden-n4shxz" data-framer-name="Filler" />
                  </HideOn>
                  <div className="framer-by1tpf" data-framer-name="Heading / Description">
                    <Appear as="svg" spec={AP["1wbcwny"]} bps={BPS} className="framer-1wbcwny" data-framer-appear-id="1wbcwny" data-framer-component-type="RichTextContainer" viewBox="0 0 344 82" style={{ "opacity": "0.001", "transform": "translateY(40px)" }} dangerouslySetInnerHTML={{ __html: "<foreignObject width=\"100%\" height=\"100%\" class=\"framer-fit-text\" transform=\"scale(1)\" style=\"overflow:visible;transform-origin:center center\"><h1 dir=\"auto\" style=\"--font-selector:R0Y7TW9uYSBTYW5zLXZhcmlhYmxlLXJlZ3VsYXJWRj1JbmRrZEdnaUlEYzFMQ0FpZDJkb2RDSWdOekF3;--framer-font-family:&quot;Mona Sans Variable&quot;, &quot;Mona Sans Variable Placeholder&quot;, sans-serif;--framer-font-open-type-features:'ss07' on;--framer-font-size:91.10057276590504px;--framer-font-variation-axes:&quot;wdth&quot; 75, &quot;wght&quot; 700;--framer-letter-spacing:-0.02em;--framer-line-height:90%;--framer-text-alignment:left;--framer-text-color:var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255));--framer-text-transform:uppercase\" class=\"framer-text\">the studio.</h1></foreignObject>" }} />
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":1.25,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" } }, segs: [T[15]] }]} className="framer-alv9ty" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                  </div>
                </div>
                <div className="framer-9yv8xi" data-framer-name="Bottom">
                  <Appear as="div" spec={AP["3ji1qe"]} bps={BPS} className="framer-3ji1qe" data-framer-appear-id="3ji1qe" data-framer-name="Location" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-vm4nnf" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                        {T[16]}
                      </p>
                    </div>
                    <div className="framer-1l9jy5e" data-framer-name="Locations">
                      <div className="framer-5rwonx" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[17]}
                        </p>
                      </div>
                      <div className="framer-1dw7mww" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[18]}
                        </p>
                      </div>
                    </div>
                  </Appear>
                  <Appear as="div" spec={AP["lx5sm7"]} bps={BPS} className="framer-lx5sm7" data-framer-appear-id="lx5sm7" data-framer-name="Services" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-1m5qp67" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                        {T[19]}
                      </p>
                    </div>
                    <div className="framer-vnicgi">
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[20]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[21]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[22]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[23]}
                        </p>
                      </div>
                    </div>
                  </Appear>
                  <Appear as="div" spec={AP["f6zjzb"]} bps={BPS} className="framer-f6zjzb-container" data-framer-appear-id="f6zjzb" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-shGv8 framer-4tnhfa framer-v-5pv308" data-framer-name="Phone">
                      <div className="framer-17kf78c-container" data-framer-name="X" {...{ name: "X" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="rve8tPCSJ" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "X" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[24]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://x.com/ErmitePasNette" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-LAEqS framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1smje0b-container" data-framer-name="IG" {...{ name: "IG" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="rve8tPCSJ" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "IG" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[25]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://instagram.com/lys__sama" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-uZnUQ framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-t1kefs-container" data-framer-name="Dribbble" {...{ name: "Dribbble" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="rve8tPCSJ" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "Dribbble" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[26]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://www.tiktok.com/@lys.sama" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-K6Gdb framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1cdugcb-container" data-framer-name="Facebook" {...{ name: "Facebook" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="rve8tPCSJ" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "Facebook" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label="Lien Facebook" className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="#facebook-a-fournir" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-lYLYO framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1cdugcb-container" data-framer-name="WhatsApp" {...{ name: "WhatsApp" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="rve8tPCSJ" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "WhatsApp" }} className="framer-BF4Of framer-oxml7j framer-v-1qy02dt" data-framer-name="Phone" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label="Lien WhatsApp" className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="#whatsapp-a-fournir" target="_blank">
                            <div data-framer-name="Top Icon" className="lys-whatsapp framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                    </div>
                  </Appear>
                </div>
              </Parallax>
            </ScrollFx>
          </SV>
          <SV c="ssr-variant hidden-n4shxz hidden-ynarf2" show={["tablet"]}>
            <ScrollFx as="section" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}},{"ref":{"cls":"framer-1nyqe0x"},"target":{"opacity":0.6,"rotate":0,"rotateX":0,"rotateY":0,"scale":0.925,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={1} target={1} off={["phone","tablet"]} className="framer-1x0mefb" data-framer-name="Hero" style={{ "opacity": "1", "transform": "none" }}>
              <div className="framer-oqp9pp" data-framer-name="BG Outer Container">
                <div className="framer-16v677h-container">
                  <VRoot as="div" map={{"DV6oTfLLg":{"cls":"framer-v-1shcg12","name":"Hidden Mask"},"Uh95rRMl7":{"cls":"framer-v-j4z1zy","name":"Revealed"}}} initial="DV6oTfLLg" transition={{"damping":25,"delay":0.8,"mass":0.3,"stiffness":120,"type":"spring"}} appear={{"to":"Uh95rRMl7","threshold":0.5,"once":true}} className="framer-83xqy framer-j4z1zy framer-v-1shcg12" data-framer-name="Hidden Mask" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "cornerShape": "superellipse(1.5)", "height": "100%", "width": "100%", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                    <VEl as="div" base={{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add","rotate":0,"scale":1,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add"}} variants={{"DV6oTfLLg":{"mask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add","rotate":4,"scale":1.5,"WebkitMask":"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add"}}} className="framer-rbevx0" data-framer-name="BG" style={{ "mask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "WebkitMask": "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%) add", "transform": "scale(1.5) rotate(4deg)" }}>
                      <div className="framer-1q48sik" data-framer-name="Dark overlay" style={{ "backgroundColor": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0.65" }} />
                      <div className="framer-ios0bt" data-framer-name="BG Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                          <img decoding="async" width={2816} height={1536} src="/assets/images/Fcz0H6OyRLSzO1j6CmBZCeoCrYA.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                        </div>
                      </div>
                    </VEl>
                  </VRoot>
                </div>
              </div>
              <Parallax as="div" speed={130} off={["phone","tablet"]} className="framer-hb5ox2" data-framer-name="Inside Container" style={{ "opacity": "1", "transform": "none" }}>
                <header className="framer-1k134jf" data-framer-name="Top">
                  <HideOn on={["phone"]}>
                  <Appear as="div" spec={AP["8330z8"]} bps={BPS} className="framer-8330z8-container hidden-n4shxz" data-framer-appear-id="8330z8" style={{ "opacity": "0.001", "transform": "none" }}>
                    <Lk aria-label={T[28]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="./" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                      <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                    </Lk>
                  </Appear>
                  </HideOn>
                  <HideOn on={["phone"]}>
                  <Appear as="div" spec={AP["7hchzy"]} bps={BPS} className="framer-7hchzy-container hidden-n4shxz" data-framer-appear-id="7hchzy" style={{ "opacity": "0.001", "transform": "none" }}>
                    <NavLinks variant="topTablet" color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}  style={{"height":"100%","width":"100%"}} />
                  </Appear>
                  </HideOn>
                </header>
                <div className="framer-1338hsz" data-framer-name="Heading">
                  <HideOn on={["phone"]}>
                  <div className="framer-dx75ug hidden-n4shxz" data-framer-name="Filler" />
                  </HideOn>
                  <div className="framer-by1tpf" data-framer-name="Heading / Description">
                    <Appear as="svg" spec={AP["1wbcwny"]} bps={BPS} className="framer-1wbcwny" data-framer-appear-id="1wbcwny" data-framer-component-type="RichTextContainer" viewBox="0 0 508.5 121" style={{ "opacity": "0.001", "transform": "translateY(40px)" }} dangerouslySetInnerHTML={{ __html: "<foreignObject width=\"100%\" height=\"100%\" class=\"framer-fit-text\" transform=\"scale(1)\" style=\"overflow:visible;transform-origin:center center\"><h1 dir=\"auto\" style=\"--font-selector:R0Y7TW9uYSBTYW5zLXZhcmlhYmxlLXJlZ3VsYXJWRj1JbmRrZEdnaUlEYzFMQ0FpZDJkb2RDSWdOekF3;--framer-font-family:&quot;Mona Sans Variable&quot;, &quot;Mona Sans Variable Placeholder&quot;, sans-serif;--framer-font-open-type-features:'ss07' on;--framer-font-size:134.66974025191345px;--framer-font-variation-axes:&quot;wdth&quot; 75, &quot;wght&quot; 700;--framer-letter-spacing:-0.02em;--framer-line-height:90%;--framer-text-alignment:left;--framer-text-color:var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255));--framer-text-transform:uppercase\" class=\"framer-text\">the studio.</h1></foreignObject>" }} />
                    <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":1.25,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" } }, segs: [T[29]] }]} className="framer-alv9ty" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                  </div>
                </div>
                <div className="framer-9yv8xi" data-framer-name="Bottom">
                  <Appear as="div" spec={AP["3ji1qe"]} bps={BPS} className="framer-3ji1qe" data-framer-appear-id="3ji1qe" data-framer-name="Location" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-vm4nnf" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                        {T[30]}
                      </p>
                    </div>
                    <div className="framer-1l9jy5e" data-framer-name="Locations">
                      <div className="framer-5rwonx" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[31]}
                        </p>
                      </div>
                      <div className="framer-1dw7mww" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[32]}
                        </p>
                      </div>
                    </div>
                  </Appear>
                  <Appear as="div" spec={AP["lx5sm7"]} bps={BPS} className="framer-lx5sm7" data-framer-appear-id="lx5sm7" data-framer-name="Services" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-1m5qp67" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                        {T[33]}
                      </p>
                    </div>
                    <div className="framer-vnicgi">
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[34]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[35]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[36]}
                        </p>
                      </div>
                      <div className="framer-gmarkl" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                          {T[37]}
                        </p>
                      </div>
                    </div>
                  </Appear>
                  <Appear as="div" spec={AP["f6zjzb"]} bps={BPS} className="framer-f6zjzb-container" data-framer-appear-id="f6zjzb" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-shGv8 framer-4tnhfa framer-v-4tnhfa" data-framer-name="Desktop">
                      <div className="framer-17kf78c-container" data-framer-name="X" {...{ name: "X" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "X" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[38]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://x.com/ErmitePasNette" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-LAEqS framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1smje0b-container" data-framer-name="IG" {...{ name: "IG" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "IG" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[39]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://instagram.com/lys__sama" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-uZnUQ framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-t1kefs-container" data-framer-name="Dribbble" {...{ name: "Dribbble" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "Dribbble" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label={T[40]} className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="https://www.tiktok.com/@lys.sama" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-K6Gdb framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1cdugcb-container" data-framer-name="Facebook" {...{ name: "Facebook" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "Facebook" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label="Lien Facebook" className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="#facebook-a-fournir" target="_blank">
                            <div data-framer-name="Top Icon" className="framer-lYLYO framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                      <div className="framer-1cdugcb-container" data-framer-name="WhatsApp" {...{ name: "WhatsApp" }}>
                        <VRoot as="div" map={{"rve8tPCSJ":{"cls":"framer-v-1qy02dt","name":"Phone"},"ZdQbvFLzW":{"cls":"framer-v-oxml7j","name":"Desktop"}}} initial="ZdQbvFLzW" transition={{"delay":0,"duration":0.3,"ease":[0.4,0,0.2,1],"type":"tween"}} hover={["ZdQbvFLzW"]} hoverNames={{"ZdQbvFLzW-hover":null}} base={{"opacity":1}} variants={{"ZdQbvFLzW-hover":{"opacity":0.5}}} {...{ name: "WhatsApp" }} className="framer-BF4Of framer-oxml7j framer-v-oxml7j" data-framer-name="Desktop" data-highlight="true" tabIndex={0} style={{ "opacity": "1" }}>
                          <a aria-label="Lien WhatsApp" className="framer-10b7uxf framer-na8c8c" data-framer-name="Icon" href="#whatsapp-a-fournir" target="_blank">
                            <div data-framer-name="Top Icon" className="lys-whatsapp framer-1fo7tgr" style={{ "--87ol9m": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }} />
                          </a>
                        </VRoot>
                      </div>
                    </div>
                  </Appear>
                </div>
              </Parallax>
            </ScrollFx>
          </SV>
          <div className="framer-c2l0bx" data-framer-name="Studio">
            <section className="framer-1nyqe0x" data-framer-name="Culture" id="culture">
              <div className="framer-1emkou7" data-framer-name="Inside Container">
                <div className="framer-ty9ie9" data-framer-name="Statement / Images">
                  <div className="framer-1wzgagh" data-framer-name="Images / Text">
                    <div className="framer-1lm3ejt" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start" }}>
                        {T[42]}
                      </p>
                    </div>
                    <div className="framer-te4fjx" data-framer-name="Images">
                      <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":-20,"y":0},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1frrzdj" data-framer-name="1" id="1frrzdj" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(-20px)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={1920} height={2560} src="/assets/images/nSbtH034kMtV4RIIQvLQWKUqNE.jpg" alt={T[43]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                          </div>
                        </InView>
                      </SV>
                      <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":-20,"y":0},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1frrzdj" data-framer-name="1" id="1frrzdj" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(-20px)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={1920} height={2560} src="/assets/images/nSbtH034kMtV4RIIQvLQWKUqNE.jpg" alt={T[44]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                          </div>
                        </InView>
                      </SV>
                      <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":-20,"y":0},"transition":{"delay":0.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1jz2epk" data-framer-name="2" id="1jz2epk" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(-20px)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={1920} height={1280} src="/assets/images/0d8RfpcfGGwdXWT0Qp7kuUbdgo.png" alt={T[45]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                          </div>
                        </InView>
                      </SV>
                      <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":-20,"y":0},"transition":{"delay":0.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-1jz2epk" data-framer-name="2" id="1jz2epk" style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(-20px)" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" width={1920} height={1280} src="/assets/images/0d8RfpcfGGwdXWT0Qp7kuUbdgo.png" alt={T[46]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                          </div>
                        </InView>
                      </SV>
                    </div>
                  </div>
                  <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-fvem1p", "data-styles-preset": "LMUl9NNGN", "dir": "auto", style: { "--framer-text-alignment": "justify" } }, segs: [{ tag: "span", attrs: { style: { "--framer-text-color": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)" }, "className": "framer-text" }, text: T[47] }, T[48], { tag: "span", attrs: { style: { "--framer-text-color": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))" }, "className": "framer-text" }, text: T[49] }] }]} className="framer-1qpqs3n" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                </div>
                <div className="framer-1dufcq3" data-framer-name="Numbers">
                  <div className="framer-1saqg22" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)" }}>
                      {T[50]}
                    </p>
                  </div>
                  <div className="framer-1sbfwjx" data-framer-name="Metrics">
                    <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                      <div className="framer-1o91f3y-container" data-framer-name="1" {...{ name: "1" }}>
                        <div {...{ name: "1" }} className="framer-46ASr framer-Me6vv framer-LubW4 framer-1748x4p framer-v-1748x4p" data-framer-name="Counter" style={{ "width": "100%" }}>
                          <div className="framer-1kf02ph" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[51]}
                            </p>
                          </div>
                          <Counter as="div" m={studioNumbers.metrics[0]} className="framer-69b1z8-container" data-framer-name="Big Counter" {...{ name: "Big Counter" }}>
                            <div aria-live="polite" style={{ "width": "max-content", "userSelect": "none" }}>
                              <div className="framer-t2fsrl" data-framer-name="Counter Font">
                                <div className="framer-x5292j" data-framer-name="Big metric" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                                    {T[52]}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </Counter>
                        </div>
                      </div>
                    </SV>
                    <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                      <div className="framer-1o8w7s0-container" data-framer-name="2" {...{ name: "2" }}>
                        <div {...{ name: "2" }} className="framer-46ASr framer-Me6vv framer-LubW4 framer-1748x4p framer-v-1748x4p" data-framer-name="Counter" style={{ "width": "100%" }}>
                          <div className="framer-1kf02ph" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[53]}
                            </p>
                          </div>
                          <Counter as="div" m={studioNumbers.metrics[1]} className="framer-69b1z8-container" data-framer-name="Big Counter" {...{ name: "Big Counter" }}>
                            <div aria-live="polite" style={{ "width": "max-content", "userSelect": "none" }}>
                              <div className="framer-t2fsrl" data-framer-name="Counter Font">
                                <div className="framer-x5292j" data-framer-name="Big metric" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                                    {T[54]}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </Counter>
                        </div>
                      </div>
                    </SV>
                    <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                      <div className="framer-1gy3kbc-container" data-framer-name="3" {...{ name: "3" }}>
                        <div {...{ name: "3" }} className="framer-46ASr framer-Me6vv framer-LubW4 framer-1748x4p framer-v-1748x4p" data-framer-name="Counter" style={{ "width": "100%" }}>
                          <div className="framer-1kf02ph" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[55]}
                            </p>
                          </div>
                          <Counter as="div" m={studioNumbers.metrics[2]} className="framer-69b1z8-container" data-framer-name="Big Counter" {...{ name: "Big Counter" }}>
                            <div aria-live="polite" style={{ "width": "max-content", "userSelect": "none" }}>
                              <div className="framer-t2fsrl" data-framer-name="Counter Font">
                                <div className="framer-x5292j" data-framer-name="Big metric" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                                    {T[56]}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </Counter>
                        </div>
                      </div>
                    </SV>
                    <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                      <div className="framer-1g9nqon-container" data-framer-name="4" {...{ name: "4" }}>
                        <div {...{ name: "4" }} className="framer-46ASr framer-Me6vv framer-LubW4 framer-1748x4p framer-v-1748x4p" data-framer-name="Counter" style={{ "width": "100%" }}>
                          <div className="framer-1kf02ph" data-framer-name="Description" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "left", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[57]}
                            </p>
                          </div>
                          <Counter as="div" m={studioNumbers.metrics[3]} className="framer-69b1z8-container" data-framer-name="Big Counter" {...{ name: "Big Counter" }}>
                            <div aria-live="polite" style={{ "width": "max-content", "userSelect": "none" }}>
                              <div className="framer-t2fsrl" data-framer-name="Counter Font">
                                <div className="framer-x5292j" data-framer-name="Big metric" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "center", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-alignment": "left" }}>
                                    {T[58]}
                                  </h2>
                                </div>
                              </div>
                            </div>
                          </Counter>
                        </div>
                      </div>
                    </SV>
                  </div>
                </div>
              </div>
            </section>
            <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
              <div className="framer-zzq0ma-container">
                <SV c="ssr-variant hidden-o8ajoo" show={["desktop","phone"]}>
                  <div className="framer-EGaJK framer-2Ps8M framer-Me6vv framer-uqMg0 framer-QoPvp framer-s41k98 framer-v-s41k98" data-framer-name="Desktop" style={{ "width": "100%" }}>
                    <div className="framer-1fgvo0o" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <div className="framer-1n75itp" data-framer-name="Inside Container">
                        <div className="framer-1ixs85r" data-framer-name="Top">
                          <div className="framer-247kte" data-framer-name="Filler" />
                          <div data-framer-name="Logo" className="framer-1xjrc framer-1mi7dag" />
                          <div className="framer-mf8ywh-container">
                            <div className="framer-D1HnP framer-Me6vv framer-1875b8x framer-v-1875b8x" data-border="true" data-framer-name="Variant 1" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px" }}>
                              <div className="framer-x2q9so" data-framer-name="Globe">
                                <div data-framer-component-type="SVG" className="framer-186e1em" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                  <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                    <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1218111404_1106\"></use>" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="framer-6xha2i" data-border="true" data-framer-name="Text" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "1px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px" }}>
                                <div className="framer-19p5zwk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[59]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1bpmpdl" data-framer-name="Team">
                          <div className="framer-1np8gf2" data-framer-name="Text">
                            <div className="framer-1g8q1u1-container">
                              <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                                <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                    {T[60]}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0.5,"tokenization":"line","transition":{"delay":0.1,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-fvem1p", "data-styles-preset": "LMUl9NNGN", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-1of0zx5, rgba(13, 13, 13, 0.7))" } }, segs: [T[61], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, text: T[62] }, T[63], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1fiaymt, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, text: T[64] }, T[65]] }]} className="framer-13ru9tt" data-framer-component-type="RichTextContainer" style={{ "--extracted-1fiaymt": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1of0zx5": "rgba(13, 13, 13, 0.7)", "--extracted-1qn201a": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                          </div>
                          <div className="framer-1s5kewm">
                            <div className="framer-18o87xw" data-framer-name="Filler" />
                            <div className="framer-2myfj8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[66]}
                              </p>
                            </div>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.5,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                      <img decoding="async" width={655} height={872} src="/assets/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg" alt={T[67]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                    </div>
                                    <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                  </div>
                                </div>
                                <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "1px", "--1hefes9": "1 0 0px", "--1vmd1gw": "row" }}>
                                  <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p data-lys-logo="" className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[68]}
                                    </p>
                                  </div>
                                  <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[69]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                      <img decoding="async" width={528} height={701} src="/assets/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg" alt={T[70]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                    </div>
                                    <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                  </div>
                                </div>
                                <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "1px", "--1hefes9": "1 0 0px", "--1vmd1gw": "row" }}>
                                  <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[71]}
                                    </p>
                                  </div>
                                  <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[72]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.7,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                      <img decoding="async" width={528} height={701} src="/assets/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg" alt={T[73]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                    </div>
                                    <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                  </div>
                                </div>
                                <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "1px", "--1hefes9": "1 0 0px", "--1vmd1gw": "row" }}>
                                  <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[74]}
                                    </p>
                                  </div>
                                  <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[75]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.8,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                      <img decoding="async" width={528} height={701} src="/assets/images/h0uF4ecVvj33A97za3PYY3KMg.jpg" alt={T[76]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                    </div>
                                    <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                  </div>
                                </div>
                                <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "1px", "--1hefes9": "1 0 0px", "--1vmd1gw": "row" }}>
                                  <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[77]}
                                    </p>
                                  </div>
                                  <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[78]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </InView>
                          </div>
                        </div>
                        <div className="framer-1fqa5hs">
                          <div className="framer-1f3fres" data-framer-name="Hiring Block">
                            <div className="framer-ifuqey" data-framer-name="Top">
                              <div className="framer-3qoqaq">
                                <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h3", attrs: { "className": "framer-text framer-styles-preset-s3qbre", "data-styles-preset": "fXy3B9GKl", "dir": "auto", style: { "--framer-text-color": "var(--extracted-a0htzi, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[79]] }]} className="framer-1wxdbf5" data-framer-component-type="RichTextContainer" style={{ "--extracted-a0htzi": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                                <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":0.8}} className="framer-93quvr" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "willChange": "transform", "opacity": "0", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[80]}
                                  </p>
                                </InView>
                              </div>
                              <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.4,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1gw2wss" data-framer-name="Open Positions" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                                <div className="framer-1obh6ik" data-framer-name="Number" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-w43vs0" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                      {T[81]}
                                    </p>
                                  </div>
                                </div>
                                <div className="framer-ucp2mh" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[82]}
                                  </p>
                                </div>
                              </InView>
                            </div>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.5,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1k6hmdl-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <VRoot as="a" map={{"jinEk1yag":{"cls":"framer-v-q8hg74","name":"Desktop - Right"},"oFaK7E_Aw":{"cls":"framer-v-8wbf3d","name":"Phone Left"},"RVD7A0_PA":{"cls":"framer-v-ra0to2","name":"Desktop - Left"},"UFuPupHWY":{"cls":"framer-v-ls2zup","name":"Phone Right"}}} initial="jinEk1yag" transition={{"delay":0,"duration":0.36,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["jinEk1yag","RVD7A0_PA"]} hoverNames={{"jinEk1yag-hover":"Desktop Right Arrow","RVD7A0_PA-hover":"Desktop Left Arrow"}} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-q8hg74 framer-ghew07" data-framer-name="Desktop - Right">
                                <div className="framer-1dzfdpz" data-framer-name="Text">
                                  <VEl as="div" base={{"opacity":1}} variants={{"jinEk1yag-hover":{"opacity":0},"RVD7A0_PA-hover":{"opacity":0}}} className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "1", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                      {T[83]}
                                    </p>
                                  </VEl>
                                  <VEl as="div" base={{"opacity":0}} variants={{"jinEk1yag-hover":{"opacity":1},"RVD7A0_PA-hover":{"opacity":1}}} className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                      {T[84]}
                                    </p>
                                  </VEl>
                                </div>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":1}} variants={{"jinEk1yag-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95},"RVD7A0_PA-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95}}} className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                                  <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                                </VEl>
                              </VRoot>
                            </InView>
                          </div>
                          <div className="framer-13n93o6" data-framer-name="Filler" />
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1yvrc4p" data-framer-name="Team photo" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "willChange": "transform", "height": "auto", "aspectRatio": "1.4285714285714286", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "opacity": "0", "transform": "none" }}>
                            <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width={2040} height={1428} src="/assets/images/aln56RYSsLI44dsw9rKWKszI.jpg" alt={T[85]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                            </div>
                          </InView>
                        </div>
                      </div>
                      <div className="framer-15xi4dy" data-framer-name="Grain Overlay" style={{ "opacity": "0.07" }}>
                        <div data-framer-background-image-wrapper="true" style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0", "backgroundImage": "url(/assets/images/kelEr6s1qyt801dQcO45jKcaNkk.gif)", "backgroundRepeat": "repeat", "backgroundPosition": "center", "border": "0", "backgroundSize": "240px auto" }} />
                      </div>
                    </div>
                  </div>
                </SV>
                <SV c="ssr-variant hidden-ynarf2" show={["tablet","phone"]}>
                  <div className="framer-EGaJK framer-2Ps8M framer-Me6vv framer-uqMg0 framer-QoPvp framer-s41k98 framer-v-1enjxj0" data-framer-name="Tablet" style={{ "width": "100%" }}>
                    <div className="framer-1fgvo0o" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                      <div className="framer-1n75itp" data-framer-name="Inside Container">
                        <div className="framer-1ixs85r" data-framer-name="Top">
                          <div className="framer-247kte" data-framer-name="Filler" />
                          <div data-framer-name="Logo" className="framer-1xjrc framer-1mi7dag" />
                          <div className="framer-mf8ywh-container">
                            <div className="framer-D1HnP framer-Me6vv framer-1875b8x framer-v-1875b8x" data-border="true" data-framer-name="Variant 1" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px" }}>
                              <div className="framer-x2q9so" data-framer-name="Globe">
                                <div data-framer-component-type="SVG" className="framer-186e1em" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                  <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                    <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1218111404_1106\"></use>" }} />
                                  </div>
                                </div>
                              </div>
                              <div className="framer-6xha2i" data-border="true" data-framer-name="Text" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "1px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px" }}>
                                <div className="framer-19p5zwk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[86]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1bpmpdl" data-framer-name="Team">
                          <div className="framer-1np8gf2" data-framer-name="Text">
                            <div className="framer-1g8q1u1-container">
                              <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                                <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                    {T[87]}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0.5,"tokenization":"line","transition":{"delay":0.1,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-fvem1p", "data-styles-preset": "LMUl9NNGN", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-1of0zx5, rgba(13, 13, 13, 0.7))" } }, segs: [T[88], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, text: T[89] }, T[90], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1fiaymt, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, text: T[91] }, T[92]] }]} className="framer-13ru9tt" data-framer-component-type="RichTextContainer" style={{ "--extracted-1fiaymt": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1of0zx5": "rgba(13, 13, 13, 0.7)", "--extracted-1qn201a": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                          </div>
                          <div className="framer-1s5kewm">
                            <div className="framer-18o87xw" data-framer-name="Filler" />
                            <div className="framer-2myfj8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                {T[93]}
                              </p>
                            </div>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.9,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                      <img decoding="async" width={655} height={872} src="/assets/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg" alt={T[94]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                    </div>
                                    <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                  </div>
                                </div>
                                <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "100%", "--1vmd1gw": "column" }}>
                                  <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p data-lys-logo="" className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[95]}
                                    </p>
                                  </div>
                                  <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[96]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                      <img decoding="async" width={528} height={701} src="/assets/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg" alt={T[97]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                    </div>
                                    <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                  </div>
                                </div>
                                <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "100%", "--1vmd1gw": "column" }}>
                                  <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[98]}
                                    </p>
                                  </div>
                                  <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[99]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                      <img decoding="async" width={528} height={701} src="/assets/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg" alt={T[100]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                    </div>
                                    <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                  </div>
                                </div>
                                <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "100%", "--1vmd1gw": "column" }}>
                                  <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[101]}
                                    </p>
                                  </div>
                                  <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[102]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.2,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                      <img decoding="async" width={528} height={701} src="/assets/images/h0uF4ecVvj33A97za3PYY3KMg.jpg" alt={T[103]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                    </div>
                                    <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                  </div>
                                </div>
                                <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "100%", "--1vmd1gw": "column" }}>
                                  <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[104]}
                                    </p>
                                  </div>
                                  <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                      {T[105]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </InView>
                          </div>
                        </div>
                        <div className="framer-1fqa5hs">
                          <div className="framer-1f3fres" data-framer-name="Hiring Block">
                            <div className="framer-ifuqey" data-framer-name="Top">
                              <div className="framer-3qoqaq">
                                <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h3", attrs: { "className": "framer-text framer-styles-preset-s3qbre", "data-styles-preset": "fXy3B9GKl", "dir": "auto", style: { "--framer-text-color": "var(--extracted-a0htzi, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[106]] }]} className="framer-1wxdbf5" data-framer-component-type="RichTextContainer" style={{ "--extracted-a0htzi": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                                <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":0.8}} className="framer-93quvr" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "willChange": "transform", "opacity": "0", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[107]}
                                  </p>
                                </InView>
                              </div>
                              <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.4,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1gw2wss" data-framer-name="Open Positions" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                                <div className="framer-1obh6ik" data-framer-name="Number" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div className="framer-w43vs0" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                      {T[108]}
                                    </p>
                                  </div>
                                </div>
                                <div className="framer-ucp2mh" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[109]}
                                  </p>
                                </div>
                              </InView>
                            </div>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.5,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1k6hmdl-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <VRoot as="a" map={{"jinEk1yag":{"cls":"framer-v-q8hg74","name":"Desktop - Right"},"oFaK7E_Aw":{"cls":"framer-v-8wbf3d","name":"Phone Left"},"RVD7A0_PA":{"cls":"framer-v-ra0to2","name":"Desktop - Left"},"UFuPupHWY":{"cls":"framer-v-ls2zup","name":"Phone Right"}}} initial="jinEk1yag" transition={{"delay":0,"duration":0.36,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["jinEk1yag","RVD7A0_PA"]} hoverNames={{"jinEk1yag-hover":"Desktop Right Arrow","RVD7A0_PA-hover":"Desktop Left Arrow"}} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-q8hg74 framer-ghew07" data-framer-name="Desktop - Right">
                                <div className="framer-1dzfdpz" data-framer-name="Text">
                                  <VEl as="div" base={{"opacity":1}} variants={{"jinEk1yag-hover":{"opacity":0},"RVD7A0_PA-hover":{"opacity":0}}} className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "1", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                      {T[110]}
                                    </p>
                                  </VEl>
                                  <VEl as="div" base={{"opacity":0}} variants={{"jinEk1yag-hover":{"opacity":1},"RVD7A0_PA-hover":{"opacity":1}}} className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                      {T[111]}
                                    </p>
                                  </VEl>
                                </div>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":1}} variants={{"jinEk1yag-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95},"RVD7A0_PA-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95}}} className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                                  <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                                </VEl>
                              </VRoot>
                            </InView>
                          </div>
                          <div className="framer-13n93o6" data-framer-name="Filler" />
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1yvrc4p" data-framer-name="Team photo" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "willChange": "transform", "height": "auto", "aspectRatio": "1.4285714285714286", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "opacity": "0", "transform": "none" }}>
                            <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                              <img decoding="async" loading="lazy" width={2040} height={1428} src="/assets/images/aln56RYSsLI44dsw9rKWKszI.jpg" alt={T[112]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                            </div>
                          </InView>
                        </div>
                      </div>
                      <div className="framer-15xi4dy" data-framer-name="Grain Overlay" style={{ "opacity": "0.07" }}>
                        <div data-framer-background-image-wrapper="true" style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0", "backgroundImage": "url(/assets/images/kelEr6s1qyt801dQcO45jKcaNkk.gif)", "backgroundRepeat": "repeat", "backgroundPosition": "center", "border": "0", "backgroundSize": "240px auto" }} />
                      </div>
                    </div>
                  </div>
                </SV>
              </div>
            </SV>
            <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
              <div className="framer-zzq0ma-container">
                <div className="framer-EGaJK framer-2Ps8M framer-Me6vv framer-uqMg0 framer-QoPvp framer-s41k98 framer-v-1j52xp1" data-framer-name="Phone" style={{ "width": "100%" }}>
                  <div className="framer-1fgvo0o" data-framer-name="Outer Container" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                    <div className="framer-1n75itp" data-framer-name="Inside Container">
                      <div className="framer-1ixs85r" data-framer-name="Top">
                        <div data-framer-name="Logo" className="framer-1xjrc framer-1mi7dag" />
                        <div className="framer-mf8ywh-container">
                          <div className="framer-D1HnP framer-Me6vv framer-1875b8x framer-v-1875b8x" data-border="true" data-framer-name="Variant 1" style={{ "--border-bottom-width": "1px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px" }}>
                            <div className="framer-x2q9so" data-framer-name="Globe">
                              <div data-framer-component-type="SVG" className="framer-186e1em" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                  <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1218111404_1106\"></use>" }} />
                                </div>
                              </div>
                            </div>
                            <div className="framer-6xha2i" data-border="true" data-framer-name="Text" style={{ "--border-bottom-width": "0px", "--border-color": "rgba(255, 255, 255, 0.5)", "--border-left-width": "1px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "0px" }}>
                              <div className="framer-19p5zwk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[113]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1bpmpdl" data-framer-name="Team">
                        <div className="framer-1np8gf2" data-framer-name="Text">
                          <div className="framer-1g8q1u1-container">
                            <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                              <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                  {T[114]}
                                </p>
                              </div>
                            </div>
                          </div>
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0.5,"tokenization":"line","transition":{"delay":0.1,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-fvem1p", "data-styles-preset": "LMUl9NNGN", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-1of0zx5, rgba(13, 13, 13, 0.7))" } }, segs: [T[115], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, text: T[116] }, T[117], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1fiaymt, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, text: T[118] }, T[119]] }]} className="framer-13ru9tt" data-framer-component-type="RichTextContainer" style={{ "--extracted-1fiaymt": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1of0zx5": "rgba(13, 13, 13, 0.7)", "--extracted-1qn201a": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                        </div>
                        <div className="framer-1s5kewm">
                          <div className="framer-2myfj8" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                              {T[120]}
                            </p>
                          </div>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={655} height={872} src="/assets/images/mYGjKrp0gW5PReDsl8CDmODKzoc.jpeg" alt={T[121]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                  <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                </div>
                              </div>
                              <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "100%", "--1vmd1gw": "column" }}>
                                <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p data-lys-logo="" className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                    {T[122]}
                                  </p>
                                </div>
                                <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                    {T[123]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.4,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={528} height={701} src="/assets/images/O83WqKF5apvVU9qmpgDRLbAvWyo.jpg" alt={T[124]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                  <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                </div>
                              </div>
                              <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "100%", "--1vmd1gw": "column" }}>
                                <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                    {T[125]}
                                  </p>
                                </div>
                                <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                    {T[126]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.5,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={528} height={701} src="/assets/images/OJ7FFbgKuSOxXFrM0pc3gbYUoBI.jpg" alt={T[127]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                  <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                </div>
                              </div>
                              <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "100%", "--1vmd1gw": "column" }}>
                                <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                    {T[128]}
                                  </p>
                                </div>
                                <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                    {T[129]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":1.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1vyr7a1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-ZmXTs framer-yTVl5 framer-Me6vv framer-1hwt7ic framer-v-1hwt7ic" data-framer-name="Revealed" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div className="framer-1jw74wi" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-17tax9v" data-framer-name="Image" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "mask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "WebkitMask": "linear-gradient(0deg, rgba(0,0,0,1) 100%, rgba(0,0,0,0) 100%) add", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={528} height={701} src="/assets/images/h0uF4ecVvj33A97za3PYY3KMg.jpg" alt={T[130]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                  <div data-framer-name="Logo" className="framer-urcMH framer-h6mult" />
                                </div>
                              </div>
                              <div className="framer-3ohe8n" data-framer-name="Name / Role" style={{ "--16tf3t7": "100%", "--1vmd1gw": "column" }}>
                                <div className="framer-1dxru2s" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                    {T[131]}
                                  </p>
                                </div>
                                <div className="framer-11j9ui1" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-aeXuFgKS4-Y2D0ZEXbl": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0.8", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-aeXuFgKS4-Y2D0ZEXbl))" }}>
                                    {T[132]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </InView>
                        </div>
                      </div>
                      <div className="framer-1fqa5hs">
                        <div className="framer-1f3fres" data-framer-name="Hiring Block">
                          <div className="framer-ifuqey" data-framer-name="Top">
                            <div className="framer-3qoqaq">
                              <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h3", attrs: { "className": "framer-text framer-styles-preset-s3qbre", "data-styles-preset": "fXy3B9GKl", "dir": "auto", style: { "--framer-text-color": "var(--extracted-a0htzi, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[133]] }]} className="framer-1wxdbf5" data-framer-component-type="RichTextContainer" style={{ "--extracted-a0htzi": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                              <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":0.8}} className="framer-93quvr" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "willChange": "transform", "opacity": "0", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[134]}
                                </p>
                              </InView>
                            </div>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.4,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1gw2wss" data-framer-name="Open Positions" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-1obh6ik" data-framer-name="Number" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div className="framer-w43vs0" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                    {T[135]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-ucp2mh" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[136]}
                                </p>
                              </div>
                            </InView>
                          </div>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.5,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1k6hmdl-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <VRoot as="a" map={{"jinEk1yag":{"cls":"framer-v-q8hg74","name":"Desktop - Right"},"oFaK7E_Aw":{"cls":"framer-v-8wbf3d","name":"Phone Left"},"RVD7A0_PA":{"cls":"framer-v-ra0to2","name":"Desktop - Left"},"UFuPupHWY":{"cls":"framer-v-ls2zup","name":"Phone Right"}}} initial="jinEk1yag" transition={{"delay":0,"duration":0.36,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["jinEk1yag","RVD7A0_PA"]} hoverNames={{"jinEk1yag-hover":"Desktop Right Arrow","RVD7A0_PA-hover":"Desktop Left Arrow"}} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-q8hg74 framer-ghew07" data-framer-name="Desktop - Right">
                              <div className="framer-1dzfdpz" data-framer-name="Text">
                                <VEl as="div" base={{"opacity":1}} variants={{"jinEk1yag-hover":{"opacity":0},"RVD7A0_PA-hover":{"opacity":0}}} className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "1", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                    {T[137]}
                                  </p>
                                </VEl>
                                <VEl as="div" base={{"opacity":0}} variants={{"jinEk1yag-hover":{"opacity":1},"RVD7A0_PA-hover":{"opacity":1}}} className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                    {T[138]}
                                  </p>
                                </VEl>
                              </div>
                              <VEl as="div" base={{"borderBottomLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":1}} variants={{"jinEk1yag-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95},"RVD7A0_PA-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95}}} className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                                <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                              </VEl>
                            </VRoot>
                          </InView>
                        </div>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1yvrc4p" data-framer-name="Team photo" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "willChange": "transform", "height": "auto", "aspectRatio": "1.4285714285714286", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "opacity": "0", "transform": "none" }}>
                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                            <img decoding="async" loading="lazy" width={2040} height={1428} src="/assets/images/aln56RYSsLI44dsw9rKWKszI.jpg" alt={T[139]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                          </div>
                        </InView>
                      </div>
                    </div>
                    <div className="framer-15xi4dy" data-framer-name="Grain Overlay" style={{ "opacity": "0.07" }}>
                      <div data-framer-background-image-wrapper="true" style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0", "backgroundImage": "url(/assets/images/kelEr6s1qyt801dQcO45jKcaNkk.gif)", "backgroundRepeat": "repeat", "backgroundPosition": "center", "border": "0", "backgroundSize": "240px auto" }} />
                    </div>
                  </div>
                </div>
              </div>
            </SV>
            <section className="framer-epz8fu" data-framer-name="Principles">
              <div className="framer-1ryjy6b" data-framer-name="Inside Container">
                <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-alignment": "start", "--framer-text-color": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)" } }, segs: [T[140]] }]} className="framer-14z3fot" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                <div className="framer-1bhgxfc" data-framer-name="Principles" id="rules">
                  <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                    <div className="framer-vze3ri-container" data-framer-name="1" id="1" {...{ name: "1" }}>
                      <SV c="ssr-variant hidden-o8ajoo" show={["desktop","phone"]}>
                        <div {...{ name: "1" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-qptq4g" data-framer-name="Desktop" style={{ "width": "100%" }}>
                          <div className="framer-g4q8rv-container">
                            <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                            </VRoot>
                          </div>
                          <div className="framer-1dvm87i">
                            <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                              <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                                {T[141]}
                              </h2>
                            </ScrollFx>
                            <div className="framer-r3u1mx" data-framer-name="Text">
                              <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                  {T[142]}
                                </h3>
                              </div>
                              <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[143]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-ynarf2" show={["tablet","phone"]}>
                        <div {...{ name: "1" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-1h11oj7" data-framer-name="Phone" style={{ "width": "100%" }}>
                          <div className="framer-g4q8rv-container">
                            <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                            </VRoot>
                          </div>
                          <div className="framer-1dvm87i">
                            <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                              <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                                {T[144]}
                              </h2>
                            </ScrollFx>
                            <div className="framer-r3u1mx" data-framer-name="Text">
                              <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                  {T[145]}
                                </h3>
                              </div>
                              <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[146]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SV>
                    </div>
                  </SV>
                  <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                    <div className="framer-vze3ri-container" data-framer-name="1" id="1" {...{ name: "1" }}>
                      <div {...{ name: "1" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-1h11oj7" data-framer-name="Phone" style={{ "width": "100%" }}>
                        <div className="framer-g4q8rv-container">
                          <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                            <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                          </VRoot>
                        </div>
                        <div className="framer-1dvm87i">
                          <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                            <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                              {T[147]}
                            </h2>
                          </ScrollFx>
                          <div className="framer-r3u1mx" data-framer-name="Text">
                            <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                              <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                {T[148]}
                              </h3>
                            </div>
                            <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                {T[149]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SV>
                  <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                    <div className="framer-l3pwqf-container" data-framer-name="2" id="2" {...{ name: "2" }}>
                      <SV c="ssr-variant hidden-o8ajoo" show={["desktop","phone"]}>
                        <div {...{ name: "2" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-qptq4g" data-framer-name="Desktop" style={{ "width": "100%" }}>
                          <div className="framer-g4q8rv-container">
                            <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                            </VRoot>
                          </div>
                          <div className="framer-1dvm87i">
                            <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                              <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                                {T[150]}
                              </h2>
                            </ScrollFx>
                            <div className="framer-r3u1mx" data-framer-name="Text">
                              <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                  {T[151]}
                                </h3>
                              </div>
                              <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[152]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-ynarf2" show={["tablet","phone"]}>
                        <div {...{ name: "2" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-1h11oj7" data-framer-name="Phone" style={{ "width": "100%" }}>
                          <div className="framer-g4q8rv-container">
                            <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                            </VRoot>
                          </div>
                          <div className="framer-1dvm87i">
                            <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                              <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                                {T[153]}
                              </h2>
                            </ScrollFx>
                            <div className="framer-r3u1mx" data-framer-name="Text">
                              <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                  {T[154]}
                                </h3>
                              </div>
                              <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[155]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SV>
                    </div>
                  </SV>
                  <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                    <div className="framer-l3pwqf-container" data-framer-name="2" id="2" {...{ name: "2" }}>
                      <div {...{ name: "2" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-1h11oj7" data-framer-name="Phone" style={{ "width": "100%" }}>
                        <div className="framer-g4q8rv-container">
                          <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                            <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                          </VRoot>
                        </div>
                        <div className="framer-1dvm87i">
                          <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                            <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                              {T[156]}
                            </h2>
                          </ScrollFx>
                          <div className="framer-r3u1mx" data-framer-name="Text">
                            <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                              <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                {T[157]}
                              </h3>
                            </div>
                            <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                {T[158]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SV>
                  <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                    <div className="framer-k1zcwk-container" data-framer-name="3" id="3" {...{ name: "3" }}>
                      <SV c="ssr-variant hidden-o8ajoo" show={["desktop","phone"]}>
                        <div {...{ name: "3" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-qptq4g" data-framer-name="Desktop" style={{ "width": "100%" }}>
                          <div className="framer-g4q8rv-container">
                            <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                            </VRoot>
                          </div>
                          <div className="framer-1dvm87i">
                            <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                              <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                                {T[159]}
                              </h2>
                            </ScrollFx>
                            <div className="framer-r3u1mx" data-framer-name="Text">
                              <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                  {T[160]}
                                </h3>
                              </div>
                              <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[161]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-ynarf2" show={["tablet","phone"]}>
                        <div {...{ name: "3" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-1h11oj7" data-framer-name="Phone" style={{ "width": "100%" }}>
                          <div className="framer-g4q8rv-container">
                            <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                            </VRoot>
                          </div>
                          <div className="framer-1dvm87i">
                            <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                              <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                                {T[162]}
                              </h2>
                            </ScrollFx>
                            <div className="framer-r3u1mx" data-framer-name="Text">
                              <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                  {T[163]}
                                </h3>
                              </div>
                              <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[164]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SV>
                    </div>
                  </SV>
                  <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                    <div className="framer-k1zcwk-container" data-framer-name="3" id="3" {...{ name: "3" }}>
                      <div {...{ name: "3" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-1h11oj7" data-framer-name="Phone" style={{ "width": "100%" }}>
                        <div className="framer-g4q8rv-container">
                          <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                            <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                          </VRoot>
                        </div>
                        <div className="framer-1dvm87i">
                          <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                            <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                              {T[165]}
                            </h2>
                          </ScrollFx>
                          <div className="framer-r3u1mx" data-framer-name="Text">
                            <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                              <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                {T[166]}
                              </h3>
                            </div>
                            <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                {T[167]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SV>
                  <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                    <div className="framer-1wd0xq0-container" data-framer-name="4" id="4" {...{ name: "4" }}>
                      <SV c="ssr-variant hidden-o8ajoo" show={["desktop","phone"]}>
                        <div {...{ name: "4" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-qptq4g" data-framer-name="Desktop" style={{ "width": "100%" }}>
                          <div className="framer-g4q8rv-container">
                            <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                            </VRoot>
                          </div>
                          <div className="framer-1dvm87i">
                            <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                              <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                                {T[168]}
                              </h2>
                            </ScrollFx>
                            <div className="framer-r3u1mx" data-framer-name="Text">
                              <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                  {T[169]}
                                </h3>
                              </div>
                              <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[170]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-ynarf2" show={["tablet","phone"]}>
                        <div {...{ name: "4" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-1h11oj7" data-framer-name="Phone" style={{ "width": "100%" }}>
                          <div className="framer-g4q8rv-container">
                            <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                              <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                            </VRoot>
                          </div>
                          <div className="framer-1dvm87i">
                            <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                              <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                                {T[171]}
                              </h2>
                            </ScrollFx>
                            <div className="framer-r3u1mx" data-framer-name="Text">
                              <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                                <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                  {T[172]}
                                </h3>
                              </div>
                              <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[173]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SV>
                    </div>
                  </SV>
                  <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                    <div className="framer-1wd0xq0-container" data-framer-name="4" id="4" {...{ name: "4" }}>
                      <div {...{ name: "4" }} className="framer-chPbW framer-LubW4 framer-uqMg0 framer-khCxy framer-qptq4g framer-v-1h11oj7" data-framer-name="Phone" style={{ "width": "100%" }}>
                        <div className="framer-g4q8rv-container">
                          <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} scrollTargets={{"targets":[{"to":"iLlY2rby8"}],"threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                            <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                          </VRoot>
                        </div>
                        <div className="framer-1dvm87i">
                          <ScrollFx as="div" targets={[{"target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":-100}},{"ref":"self","target":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0}}]} threshold={0.5} target={1} off={[]} className="framer-c5hpba" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15))", "willChange": "transform", "opacity": "1", "transform": "translateY(-100px)" }}>
                            <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(245, 45, 15)))" }}>
                              {T[174]}
                            </h2>
                          </ScrollFx>
                          <div className="framer-r3u1mx" data-framer-name="Text">
                            <div className="framer-h0ky2k" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                              <h3 className="framer-text framer-styles-preset-s3qbre" data-styles-preset="fXy3B9GKl" dir="auto">
                                {T[175]}
                              </h3>
                            </div>
                            <div className="framer-fg5eoz" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                {T[176]}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SV>
                </div>
              </div>
            </section>
            <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
              <div className="framer-1mbb4u8-container">
                <SV c="ssr-variant hidden-o8ajoo" show={["desktop","phone"]}>
                  <section className="framer-HIOH4 framer-Me6vv framer-1npuuv8 framer-v-1npuuv8" data-framer-name="Desktop" style={{ "width": "100%" }}>
                    <div className="framer-10m73gh" data-framer-name="Inside Container">
                      <div className="framer-eoqtb1">
                        <div className="framer-1hebv9i-container">
                          <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                            <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                {T[177]}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="framer-v4fp35" data-framer-name="Logo / Rating">
                          <div className="framer-1v6x4pk" data-framer-name="Logos">
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.7,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1e2gkk0-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-gaSjD framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-w5jgsw-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-wSHP9 framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.8,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1b3ee75-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-yh1m0 framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.4,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1cx52vy-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-9SpMv framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1sk08w1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-CxFEq framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.5,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1rlkmsm-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-azjUT framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                          </div>
                          <div className="framer-11lsex1" data-framer-name="Year / Rating">
                            <div className="framer-15sxxv5" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[178]}
                              </p>
                            </div>
                            <div className="framer-r9bnxq-container">
                              <div className="framer-Vl2Hy framer-AWIXE framer-1apgf77 framer-v-1apgf77" data-framer-name="Rating" style={{ "--tilqha": "row", "width": "100%" }}>
                                <div className="framer-15gtnew" data-framer-name="Stacked Avatars">
                                  <div className="framer-4rons3" data-framer-name="Container">
                                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.6,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-zsjmne-container" data-framer-name="1" {...{ name: "1" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                      <div {...{ name: "1" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                        <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width={640} height={640} src="/assets/images/foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                          </div>
                                        </div>
                                      </div>
                                    </InView>
                                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.7,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-1ywp80p-container" data-framer-name="2" {...{ name: "2" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                      <div {...{ name: "2" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                        <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width={640} height={640} src="/assets/images/XCY5hpPBRBS6cdWzaAWas5dffkA.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                          </div>
                                        </div>
                                      </div>
                                    </InView>
                                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.8,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-r3qz5f-container" data-framer-name="3" {...{ name: "3" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                      <div {...{ name: "3" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                        <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width={640} height={640} src="/assets/images/qV50KoxOEdTy8EP8lnobhyGqbzE.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                          </div>
                                        </div>
                                      </div>
                                    </InView>
                                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.9,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-ac7ito" data-framer-name="4" style={{ "willChange": "transform", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%", "opacity": "0", "transform": "translateX(15px)" }}>
                                      <div className="framer-1dm823p" data-framer-name="Count" style={{ "--1l3zk6x": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1l3zk6x)", "transform": "translate(-50%, -50%)" }}>
                                        <div className="framer-c8d6lb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "translate(-50%, -50%)" }}>
                                          <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                            {T[179]}
                                          </p>
                                        </div>
                                      </div>
                                    </InView>
                                  </div>
                                </div>
                                <div className="framer-1gj1j7j" data-framer-name="Rating">
                                  <div className="framer-o7y3w4" data-framer-name="Rating / Stars">
                                    <div className="framer-1a07okb" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto">
                                        <strong className="framer-text">
                                          {T[180]}
                                        </strong>
                                        <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                          {T[181]}
                                        </span>
                                      </p>
                                    </div>
                                    <div className="framer-lhv1pj" data-framer-name="Stars">
                                      <div data-framer-component-type="SVG" className="framer-1kivror" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                      <div data-framer-component-type="SVG" className="framer-1xh3cuf" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                      <div data-framer-component-type="SVG" className="framer-1379222" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                      <div data-framer-component-type="SVG" className="framer-ydpjnm" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                      <div data-framer-component-type="SVG" className="framer-7174mc" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="framer-194ds1e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto">
                                      <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                        {T[182]}
                                      </span>
                                      {T[183]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </SV>
                <SV c="ssr-variant hidden-ynarf2" show={["tablet","phone"]}>
                  <section className="framer-HIOH4 framer-Me6vv framer-1npuuv8 framer-v-a12wje" data-framer-name="Tablet" style={{ "width": "100%" }}>
                    <div className="framer-10m73gh" data-framer-name="Inside Container">
                      <div className="framer-eoqtb1">
                        <div className="framer-1hebv9i-container">
                          <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                            <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                {T[184]}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="framer-v4fp35" data-framer-name="Logo / Rating">
                          <div className="framer-1v6x4pk" data-framer-name="Logos">
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.7,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1e2gkk0-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-gaSjD framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-w5jgsw-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-wSHP9 framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.8,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1b3ee75-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-yh1m0 framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.4,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1cx52vy-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-9SpMv framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1sk08w1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-CxFEq framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.5,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1rlkmsm-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div data-framer-name="Logo" className="framer-azjUT framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                              </div>
                            </InView>
                          </div>
                          <div className="framer-11lsex1" data-framer-name="Year / Rating">
                            <div className="framer-15sxxv5" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                                {T[185]}
                              </p>
                            </div>
                            <div className="framer-r9bnxq-container">
                              <div className="framer-Vl2Hy framer-AWIXE framer-1apgf77 framer-v-1apgf77" data-framer-name="Rating" style={{ "--tilqha": "row", "width": "100%" }}>
                                <div className="framer-15gtnew" data-framer-name="Stacked Avatars">
                                  <div className="framer-4rons3" data-framer-name="Container">
                                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.6,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-zsjmne-container" data-framer-name="1" {...{ name: "1" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                      <div {...{ name: "1" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                        <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width={640} height={640} src="/assets/images/foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                          </div>
                                        </div>
                                      </div>
                                    </InView>
                                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.7,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-1ywp80p-container" data-framer-name="2" {...{ name: "2" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                      <div {...{ name: "2" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                        <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width={640} height={640} src="/assets/images/XCY5hpPBRBS6cdWzaAWas5dffkA.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                          </div>
                                        </div>
                                      </div>
                                    </InView>
                                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.8,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-r3qz5f-container" data-framer-name="3" {...{ name: "3" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                      <div {...{ name: "3" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                        <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                          <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                            <img decoding="async" width={640} height={640} src="/assets/images/qV50KoxOEdTy8EP8lnobhyGqbzE.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                          </div>
                                        </div>
                                      </div>
                                    </InView>
                                    <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.9,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-ac7ito" data-framer-name="4" style={{ "willChange": "transform", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%", "opacity": "0", "transform": "translateX(15px)" }}>
                                      <div className="framer-1dm823p" data-framer-name="Count" style={{ "--1l3zk6x": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1l3zk6x)", "transform": "translate(-50%, -50%)" }}>
                                        <div className="framer-c8d6lb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "translate(-50%, -50%)" }}>
                                          <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                            {T[186]}
                                          </p>
                                        </div>
                                      </div>
                                    </InView>
                                  </div>
                                </div>
                                <div className="framer-1gj1j7j" data-framer-name="Rating">
                                  <div className="framer-o7y3w4" data-framer-name="Rating / Stars">
                                    <div className="framer-1a07okb" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                      <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto">
                                        <strong className="framer-text">
                                          {T[187]}
                                        </strong>
                                        <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                          {T[188]}
                                        </span>
                                      </p>
                                    </div>
                                    <div className="framer-lhv1pj" data-framer-name="Stars">
                                      <div data-framer-component-type="SVG" className="framer-1kivror" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                      <div data-framer-component-type="SVG" className="framer-1xh3cuf" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                      <div data-framer-component-type="SVG" className="framer-1379222" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                      <div data-framer-component-type="SVG" className="framer-ydpjnm" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                      <div data-framer-component-type="SVG" className="framer-7174mc" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                        <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                          <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="framer-194ds1e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto">
                                      <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                        {T[189]}
                                      </span>
                                      {T[190]}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </SV>
              </div>
            </SV>
            <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
              <div className="framer-1mbb4u8-container">
                <section className="framer-HIOH4 framer-Me6vv framer-1npuuv8 framer-v-kvuuzz" data-framer-name="Phone" style={{ "width": "100%" }}>
                  <div className="framer-10m73gh" data-framer-name="Inside Container">
                    <div className="framer-eoqtb1">
                      <div className="framer-1hebv9i-container">
                        <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                          <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                              {T[191]}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="framer-v4fp35" data-framer-name="Logo / Rating">
                        <div className="framer-1v6x4pk" data-framer-name="Logos">
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.1,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1e2gkk0-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div data-framer-name="Logo" className="framer-gaSjD framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                            </div>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.2,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-w5jgsw-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div data-framer-name="Logo" className="framer-wSHP9 framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                            </div>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.3,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1b3ee75-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div data-framer-name="Logo" className="framer-yh1m0 framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                            </div>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.4,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1cx52vy-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div data-framer-name="Logo" className="framer-9SpMv framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                            </div>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.5,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1sk08w1-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div data-framer-name="Logo" className="framer-CxFEq framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                            </div>
                          </InView>
                          <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-1rlkmsm-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                            <div className="framer-rE6x2 framer-1evdr1t framer-v-1evdr1t" data-framer-name="Case Study" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-52433e3c-3bdd-4e8f-b4eb-8bd6681644d3, rgb(247, 247, 247))", "cornerShape": "superellipse(1.5)", "width": "100%", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div data-framer-name="Logo" className="framer-azjUT framer-o7c73w" style={{ "--1mg0zwm": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))" }} />
                            </div>
                          </InView>
                        </div>
                        <div className="framer-11lsex1" data-framer-name="Year / Rating">
                          <div className="framer-15sxxv5" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                              {T[192]}
                            </p>
                          </div>
                          <div className="framer-r9bnxq-container">
                            <div className="framer-Vl2Hy framer-AWIXE framer-1apgf77 framer-v-1apgf77" data-framer-name="Rating" style={{ "--tilqha": "column", "width": "100%" }}>
                              <div className="framer-15gtnew" data-framer-name="Stacked Avatars">
                                <div className="framer-4rons3" data-framer-name="Container">
                                  <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.6,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-zsjmne-container" data-framer-name="1" {...{ name: "1" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                    <div {...{ name: "1" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                      <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                          <img decoding="async" width={640} height={640} src="/assets/images/foJh1zwI8ZAzyJVfsEgIaSkdMjk.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                        </div>
                                      </div>
                                    </div>
                                  </InView>
                                  <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.7,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-1ywp80p-container" data-framer-name="2" {...{ name: "2" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                    <div {...{ name: "2" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                      <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                          <img decoding="async" width={640} height={640} src="/assets/images/XCY5hpPBRBS6cdWzaAWas5dffkA.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                        </div>
                                      </div>
                                    </div>
                                  </InView>
                                  <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.8,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-r3qz5f-container" data-framer-name="3" {...{ name: "3" }} style={{ "willChange": "transform", "opacity": "0", "transform": "translateX(15px)" }}>
                                    <div {...{ name: "3" }} className="framer-oe2kI framer-134908u framer-v-134908u" data-framer-name="Large" style={{ "width": "100%", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%" }}>
                                      <div className="framer-17aumxd" data-framer-name="Image" style={{ "--1n9yj0l": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1n9yj0l)", "transform": "translate(-50%, -50%)" }}>
                                        <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                          <img decoding="async" width={640} height={640} src="/assets/images/qV50KoxOEdTy8EP8lnobhyGqbzE.jpg" alt="" style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                        </div>
                                      </div>
                                    </div>
                                  </InView>
                                  <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":15,"y":0},"transition":{"damping":32,"delay":0.9,"mass":1,"stiffness":165,"type":"spring"},"once":true,"threshold":0.5,"target":1}} className="framer-ac7ito" data-framer-name="4" style={{ "willChange": "transform", "borderBottomLeftRadius": "100%", "borderBottomRightRadius": "100%", "borderTopLeftRadius": "100%", "borderTopRightRadius": "100%", "opacity": "0", "transform": "translateX(15px)" }}>
                                    <div className="framer-1dm823p" data-framer-name="Count" style={{ "--1l3zk6x": "0px 0px 0px 2px var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(6px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "boxShadow": "var(--1l3zk6x)", "transform": "translate(-50%, -50%)" }}>
                                      <div className="framer-c8d6lb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "translate(-50%, -50%)" }}>
                                        <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[193]}
                                        </p>
                                      </div>
                                    </div>
                                  </InView>
                                </div>
                              </div>
                              <div className="framer-1gj1j7j" data-framer-name="Rating">
                                <div className="framer-o7y3w4" data-framer-name="Rating / Stars">
                                  <div className="framer-1a07okb" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto">
                                      <strong className="framer-text">
                                        {T[194]}
                                      </strong>
                                      <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                        {T[195]}
                                      </span>
                                    </p>
                                  </div>
                                  <div className="framer-lhv1pj" data-framer-name="Stars">
                                    <div data-framer-component-type="SVG" className="framer-1kivror" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                      <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                        <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                      </div>
                                    </div>
                                    <div data-framer-component-type="SVG" className="framer-1xh3cuf" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                      <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                        <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                      </div>
                                    </div>
                                    <div data-framer-component-type="SVG" className="framer-1379222" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                      <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                        <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                      </div>
                                    </div>
                                    <div data-framer-component-type="SVG" className="framer-ydpjnm" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                      <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                        <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                      </div>
                                    </div>
                                    <div data-framer-component-type="SVG" className="framer-7174mc" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0" }}>
                                      <div className="svgContainer" style={{ "width": "100%", "height": "100%", "aspectRatio": "inherit" }}>
                                        <svg style={{ "width": "100%", "height": "100%" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#svg1909637448_394\"></use>" }} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="framer-194ds1e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-ss7lqy" data-styles-preset="aT6ueLJwl" dir="auto">
                                    <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                      {T[196]}
                                    </span>
                                    {T[197]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </SV>
            <section className="framer-1v9qbyv" data-framer-name="Recognition">
              <div className="framer-maixoy" data-framer-name="Inside Container">
                <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-alignment": "start" } }, segs: [T[198]] }]} className="framer-1rg17ve" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                <div className="framer-1qjbmof" data-framer-name="Awards">
                  <div className="framer-1ea882b-container">
                    <div className="framer-w6BnQ framer-yTVl5 framer-Me6vv framer-162pug6 framer-v-19gulb1" data-framer-name="Small">
                      <div className="framer-14g1br8" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "--extracted-r6o4lv": "var(--variable-reference-XU6EGhHcu-D21Ecyglh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-XU6EGhHcu-D21Ecyglh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-XU6EGhHcu-D21Ecyglh))" }}>
                          {T[199]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="framer-fa2fr4" data-framer-name="Awards">
                    <div className="framer-1pyvfr0" data-framer-name="Labels">
                      <HideOn on={["phone"]}>
                      <div className="framer-1cb59fs hidden-n4shxz" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))" }}>
                          {T[200]}
                        </p>
                      </div>
                      </HideOn>
                      <div className="framer-1rhg9m6" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))" }}>
                          {T[201]}
                        </p>
                      </div>
                      <div className="framer-1qxli1a" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847)" }}>
                          {T[202]}
                        </p>
                      </div>
                    </div>
                    <div className="framer-1q3vn7z" data-framer-name="Awards">
                      <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                        <div className="framer-l40k6b-container">
                          <div className="framer-3Alku framer-khCxy framer-cnoxjv framer-v-cnoxjv" data-framer-name="Desktop" style={{ "width": "100%" }}>
                            <div className="framer-k2sxsh" data-framer-name="Award">
                              <div className="framer-1oo4cmj">
                                <div data-framer-component-type="SVG" className="framer-1i1frjn" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0", "backgroundSize": "100% 100%", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 29.996 24.008%22 overflow=%22visible%22><g><path d=%22M 11.929 21.114 C 10.885 20.876 9.872 20.747 9.331 20.689 C 8.513 18.81 8.767 18.963 6.412 16.463 C 6.382 18.406 7.585 19.533 8.071 20.341 C 7.817 20.099 7.511 19.852 7.068 19.65 C 6.436 19.36 6.341 19.174 6.34 19.173 L 6.333 19.147 C 6.337 19.158 6.32 19.137 6.32 19.137 L 6.29 19.099 C 6.289 17.269 6.044 15.944 4.51 14.282 C 4.471 14.908 4.653 16.955 5.185 18.039 C 4.489 17.453 4.225 16.671 4.222 16.661 L 4.213 16.635 C 4.213 16.634 4.194 16.613 4.194 16.613 L 4.016 16.413 C 3.889 15.829 3.959 14.827 4.155 14.013 C 4.402 12.986 4.116 11.364 3.432 10.892 C 3.085 11.583 3.383 13.21 3.28 14.476 C 3.133 13.968 2.907 13.658 2.699 13.373 C 2.589 13.225 2.483 13.079 2.392 12.912 C 2.276 11.904 2.662 11.346 2.978 10.832 C 3.324 10.27 3.823 8.979 3.451 8.105 C 3.38 8.944 2.276 9.69 2 11.106 C 1.95 10.551 1.932 10.031 1.927 9.748 C 2.51 8.778 4.249 7.098 4.583 5.132 C 3.308 6.19 2.565 7.05 2.092 8.106 C 2.178 7.307 2.363 6.602 2.475 6.193 C 3.155 5.633 4.875 4.927 4.973 2.521 C 4.647 3.468 3.64 4.017 2.829 4.738 C 2.914 4.474 3.019 4.196 3.146 3.924 C 4.839 2.724 5.537 0.998 5.729 0 C 4.409 0.893 3.383 2.319 3.012 3.574 C 2.738 4.1 2.547 4.667 2.427 5.135 C 2.398 5.168 2.367 5.2 2.34 5.234 C 2.797 4.327 3.343 1.348 3.014 0.785 C 3.02 0.875 2.693 2.065 2.036 3.007 C 1.43 3.874 1.901 5.469 2.145 6.355 C 2.07 6.641 1.982 7.009 1.909 7.425 C 1.724 6.339 1.221 4.936 1.338 3.345 C 0.931 4 0.382 5.902 0.663 7.097 C 0.898 8.097 1.426 9.015 1.65 9.758 C 1.655 10.051 1.673 10.579 1.726 11.148 C 1.515 10.309 1.27 9.643 0.934 9.169 C 0.463 8.503 0.062 7.541 0.075 7.046 C -0.221 8.329 0.345 11.277 2.078 12.9 C 2.192 13.15 2.335 13.346 2.475 13.537 C 2.694 13.835 2.917 14.141 3.047 14.676 C 2.6 14.033 1.359 13.159 0.418 11.922 C 0.636 14.274 2.712 16.425 3.936 16.739 L 3.969 16.776 C 4.024 16.932 4.321 17.685 5.024 18.265 C 4.001 17.794 2.63 16.119 1.318 15.346 C 2.477 16.875 2.101 18.686 5.12 19.095 C 5.412 19.151 5.749 19.143 6.105 19.318 C 6.167 19.422 6.359 19.629 6.953 19.901 C 7.285 20.052 7.53 20.229 7.74 20.413 C 6.454 19.757 4.62 20.115 3.4 19.073 C 4.058 21.131 7.647 21.899 9.178 20.951 C 9.494 20.983 10.061 21.048 10.727 21.16 C 10.38 21.208 10.038 21.287 9.704 21.397 C 6.315 22.514 5.377 21.855 4.965 21.633 C 5.68 22.704 8.489 23.81 10.443 22.647 C 12.397 21.483 13.526 21.729 13.526 21.729 C 14.647 22.041 16.005 22.885 16.509 23.978 L 17.436 24.008 C 16.564 22.912 14.428 21.27 11.929 21.114 Z%22 fill=%22rgb(2,4,7)%22></path><path d=%22M 18.067 21.114 C 19.111 20.876 20.124 20.747 20.665 20.689 C 21.482 18.81 21.229 18.963 23.585 16.463 C 23.614 18.406 22.411 19.533 21.923 20.341 C 22.179 20.099 22.485 19.852 22.927 19.65 C 23.559 19.36 23.654 19.174 23.655 19.173 L 23.663 19.147 C 23.658 19.158 23.675 19.137 23.675 19.137 L 23.705 19.099 C 23.706 17.269 23.951 15.944 25.486 14.282 C 25.524 14.908 25.343 16.955 24.81 18.039 C 25.506 17.453 25.771 16.671 25.774 16.661 L 25.783 16.635 C 25.783 16.634 25.802 16.613 25.802 16.613 L 25.979 16.413 C 26.106 15.829 26.037 14.827 25.841 14.013 C 25.593 12.986 25.88 11.364 26.564 10.892 C 26.911 11.583 26.613 13.21 26.716 14.476 C 26.862 13.968 27.089 13.658 27.298 13.373 C 27.407 13.225 27.513 13.079 27.604 12.912 C 27.721 11.904 27.333 11.346 27.018 10.832 C 26.672 10.27 26.172 8.979 26.545 8.105 C 26.616 8.944 27.719 9.69 27.996 11.106 C 28.046 10.551 28.063 10.031 28.069 9.748 C 27.486 8.778 25.747 7.098 25.413 5.132 C 26.687 6.19 27.431 7.05 27.903 8.106 C 27.818 7.307 27.632 6.602 27.521 6.193 C 26.841 5.633 25.121 4.927 25.022 2.521 C 25.349 3.468 26.356 4.017 27.167 4.738 C 27.082 4.474 26.977 4.196 26.85 3.924 C 25.157 2.724 24.458 0.998 24.267 0 C 25.587 0.893 26.612 2.319 26.984 3.574 C 27.258 4.1 27.449 4.667 27.569 5.135 C 27.597 5.168 27.628 5.2 27.657 5.234 C 27.199 4.327 26.652 1.348 26.982 0.785 C 26.976 0.875 27.302 2.065 27.96 3.007 C 28.566 3.874 28.094 5.469 27.851 6.355 C 27.925 6.641 28.014 7.009 28.086 7.425 C 28.272 6.339 28.775 4.936 28.658 3.345 C 29.065 4 29.614 5.902 29.333 7.097 C 29.098 8.097 28.57 9.015 28.346 9.758 C 28.34 10.051 28.323 10.579 28.27 11.148 C 28.481 10.309 28.726 9.643 29.061 9.169 C 29.533 8.503 29.934 7.541 29.921 7.046 C 30.217 8.329 29.65 11.277 27.918 12.9 C 27.803 13.15 27.661 13.346 27.521 13.537 C 27.302 13.835 27.078 14.141 26.948 14.676 C 27.396 14.033 28.636 13.159 29.578 11.922 C 29.359 14.274 27.283 16.425 26.06 16.739 L 26.027 16.776 C 25.971 16.932 25.675 17.685 24.972 18.265 C 25.994 17.794 27.365 16.119 28.677 15.346 C 27.518 16.875 27.894 18.686 24.876 19.095 C 24.583 19.151 24.247 19.143 23.891 19.318 C 23.828 19.422 23.636 19.629 23.042 19.901 C 22.711 20.052 22.465 20.229 22.255 20.413 C 23.541 19.757 25.375 20.115 26.595 19.073 C 25.938 21.131 22.349 21.899 20.818 20.951 C 20.501 20.983 19.935 21.048 19.269 21.16 C 19.606 21.207 19.948 21.284 20.291 21.397 C 23.681 22.514 24.618 21.855 25.03 21.633 C 24.316 22.704 21.507 23.81 19.553 22.647 C 17.599 21.483 16.469 21.729 16.469 21.729 C 15.349 22.041 13.991 22.885 13.487 23.978 L 12.56 24.008 C 13.431 22.912 15.568 21.27 18.067 21.114 Z%22 fill=%22rgb(2,4,7)%22></path></g></svg>')" }} />
                                <div className="framer-1xtgpmg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                    {T[203]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-w1hjrk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                  {T[204]}
                                </p>
                              </div>
                              <div className="framer-113syp9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847))" }}>
                                  <time dateTime="2026-01-01T00:00:00.000Z">
                                    {T[205]}
                                  </time>
                                </p>
                              </div>
                            </div>
                            <div className="framer-puc6sm-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                        <div className="framer-l40k6b-container">
                          <div className="framer-3Alku framer-khCxy framer-cnoxjv framer-v-qcl1vt" data-framer-name="Phone" style={{ "width": "100%" }}>
                            <div className="framer-k2sxsh" data-framer-name="Award">
                              <div className="framer-1oo4cmj">
                                <div data-framer-component-type="SVG" className="framer-1i1frjn" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0", "backgroundSize": "100% 100%", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 29.996 24.008%22 overflow=%22visible%22><g><path d=%22M 11.929 21.114 C 10.885 20.876 9.872 20.747 9.331 20.689 C 8.513 18.81 8.767 18.963 6.412 16.463 C 6.382 18.406 7.585 19.533 8.071 20.341 C 7.817 20.099 7.511 19.852 7.068 19.65 C 6.436 19.36 6.341 19.174 6.34 19.173 L 6.333 19.147 C 6.337 19.158 6.32 19.137 6.32 19.137 L 6.29 19.099 C 6.289 17.269 6.044 15.944 4.51 14.282 C 4.471 14.908 4.653 16.955 5.185 18.039 C 4.489 17.453 4.225 16.671 4.222 16.661 L 4.213 16.635 C 4.213 16.634 4.194 16.613 4.194 16.613 L 4.016 16.413 C 3.889 15.829 3.959 14.827 4.155 14.013 C 4.402 12.986 4.116 11.364 3.432 10.892 C 3.085 11.583 3.383 13.21 3.28 14.476 C 3.133 13.968 2.907 13.658 2.699 13.373 C 2.589 13.225 2.483 13.079 2.392 12.912 C 2.276 11.904 2.662 11.346 2.978 10.832 C 3.324 10.27 3.823 8.979 3.451 8.105 C 3.38 8.944 2.276 9.69 2 11.106 C 1.95 10.551 1.932 10.031 1.927 9.748 C 2.51 8.778 4.249 7.098 4.583 5.132 C 3.308 6.19 2.565 7.05 2.092 8.106 C 2.178 7.307 2.363 6.602 2.475 6.193 C 3.155 5.633 4.875 4.927 4.973 2.521 C 4.647 3.468 3.64 4.017 2.829 4.738 C 2.914 4.474 3.019 4.196 3.146 3.924 C 4.839 2.724 5.537 0.998 5.729 0 C 4.409 0.893 3.383 2.319 3.012 3.574 C 2.738 4.1 2.547 4.667 2.427 5.135 C 2.398 5.168 2.367 5.2 2.34 5.234 C 2.797 4.327 3.343 1.348 3.014 0.785 C 3.02 0.875 2.693 2.065 2.036 3.007 C 1.43 3.874 1.901 5.469 2.145 6.355 C 2.07 6.641 1.982 7.009 1.909 7.425 C 1.724 6.339 1.221 4.936 1.338 3.345 C 0.931 4 0.382 5.902 0.663 7.097 C 0.898 8.097 1.426 9.015 1.65 9.758 C 1.655 10.051 1.673 10.579 1.726 11.148 C 1.515 10.309 1.27 9.643 0.934 9.169 C 0.463 8.503 0.062 7.541 0.075 7.046 C -0.221 8.329 0.345 11.277 2.078 12.9 C 2.192 13.15 2.335 13.346 2.475 13.537 C 2.694 13.835 2.917 14.141 3.047 14.676 C 2.6 14.033 1.359 13.159 0.418 11.922 C 0.636 14.274 2.712 16.425 3.936 16.739 L 3.969 16.776 C 4.024 16.932 4.321 17.685 5.024 18.265 C 4.001 17.794 2.63 16.119 1.318 15.346 C 2.477 16.875 2.101 18.686 5.12 19.095 C 5.412 19.151 5.749 19.143 6.105 19.318 C 6.167 19.422 6.359 19.629 6.953 19.901 C 7.285 20.052 7.53 20.229 7.74 20.413 C 6.454 19.757 4.62 20.115 3.4 19.073 C 4.058 21.131 7.647 21.899 9.178 20.951 C 9.494 20.983 10.061 21.048 10.727 21.16 C 10.38 21.208 10.038 21.287 9.704 21.397 C 6.315 22.514 5.377 21.855 4.965 21.633 C 5.68 22.704 8.489 23.81 10.443 22.647 C 12.397 21.483 13.526 21.729 13.526 21.729 C 14.647 22.041 16.005 22.885 16.509 23.978 L 17.436 24.008 C 16.564 22.912 14.428 21.27 11.929 21.114 Z%22 fill=%22rgb(2,4,7)%22></path><path d=%22M 18.067 21.114 C 19.111 20.876 20.124 20.747 20.665 20.689 C 21.482 18.81 21.229 18.963 23.585 16.463 C 23.614 18.406 22.411 19.533 21.923 20.341 C 22.179 20.099 22.485 19.852 22.927 19.65 C 23.559 19.36 23.654 19.174 23.655 19.173 L 23.663 19.147 C 23.658 19.158 23.675 19.137 23.675 19.137 L 23.705 19.099 C 23.706 17.269 23.951 15.944 25.486 14.282 C 25.524 14.908 25.343 16.955 24.81 18.039 C 25.506 17.453 25.771 16.671 25.774 16.661 L 25.783 16.635 C 25.783 16.634 25.802 16.613 25.802 16.613 L 25.979 16.413 C 26.106 15.829 26.037 14.827 25.841 14.013 C 25.593 12.986 25.88 11.364 26.564 10.892 C 26.911 11.583 26.613 13.21 26.716 14.476 C 26.862 13.968 27.089 13.658 27.298 13.373 C 27.407 13.225 27.513 13.079 27.604 12.912 C 27.721 11.904 27.333 11.346 27.018 10.832 C 26.672 10.27 26.172 8.979 26.545 8.105 C 26.616 8.944 27.719 9.69 27.996 11.106 C 28.046 10.551 28.063 10.031 28.069 9.748 C 27.486 8.778 25.747 7.098 25.413 5.132 C 26.687 6.19 27.431 7.05 27.903 8.106 C 27.818 7.307 27.632 6.602 27.521 6.193 C 26.841 5.633 25.121 4.927 25.022 2.521 C 25.349 3.468 26.356 4.017 27.167 4.738 C 27.082 4.474 26.977 4.196 26.85 3.924 C 25.157 2.724 24.458 0.998 24.267 0 C 25.587 0.893 26.612 2.319 26.984 3.574 C 27.258 4.1 27.449 4.667 27.569 5.135 C 27.597 5.168 27.628 5.2 27.657 5.234 C 27.199 4.327 26.652 1.348 26.982 0.785 C 26.976 0.875 27.302 2.065 27.96 3.007 C 28.566 3.874 28.094 5.469 27.851 6.355 C 27.925 6.641 28.014 7.009 28.086 7.425 C 28.272 6.339 28.775 4.936 28.658 3.345 C 29.065 4 29.614 5.902 29.333 7.097 C 29.098 8.097 28.57 9.015 28.346 9.758 C 28.34 10.051 28.323 10.579 28.27 11.148 C 28.481 10.309 28.726 9.643 29.061 9.169 C 29.533 8.503 29.934 7.541 29.921 7.046 C 30.217 8.329 29.65 11.277 27.918 12.9 C 27.803 13.15 27.661 13.346 27.521 13.537 C 27.302 13.835 27.078 14.141 26.948 14.676 C 27.396 14.033 28.636 13.159 29.578 11.922 C 29.359 14.274 27.283 16.425 26.06 16.739 L 26.027 16.776 C 25.971 16.932 25.675 17.685 24.972 18.265 C 25.994 17.794 27.365 16.119 28.677 15.346 C 27.518 16.875 27.894 18.686 24.876 19.095 C 24.583 19.151 24.247 19.143 23.891 19.318 C 23.828 19.422 23.636 19.629 23.042 19.901 C 22.711 20.052 22.465 20.229 22.255 20.413 C 23.541 19.757 25.375 20.115 26.595 19.073 C 25.938 21.131 22.349 21.899 20.818 20.951 C 20.501 20.983 19.935 21.048 19.269 21.16 C 19.606 21.207 19.948 21.284 20.291 21.397 C 23.681 22.514 24.618 21.855 25.03 21.633 C 24.316 22.704 21.507 23.81 19.553 22.647 C 17.599 21.483 16.469 21.729 16.469 21.729 C 15.349 22.041 13.991 22.885 13.487 23.978 L 12.56 24.008 C 13.431 22.912 15.568 21.27 18.067 21.114 Z%22 fill=%22rgb(2,4,7)%22></path></g></svg>')" }} />
                                <div className="framer-1xtgpmg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                    {T[206]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-w1hjrk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                  {T[207]}
                                </p>
                              </div>
                              <div className="framer-113syp9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847))" }}>
                                  <time dateTime="2026-01-01T00:00:00.000Z">
                                    {T[208]}
                                  </time>
                                </p>
                              </div>
                            </div>
                            <div className="framer-puc6sm-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                        <div className="framer-l2hmjf-container">
                          <div className="framer-3Alku framer-khCxy framer-cnoxjv framer-v-cnoxjv" data-framer-name="Desktop" style={{ "width": "100%" }}>
                            <div className="framer-k2sxsh" data-framer-name="Award">
                              <div className="framer-1oo4cmj">
                                <div data-framer-component-type="SVG" className="framer-1i1frjn" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0", "backgroundSize": "100% 100%", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 29.996 24.008%22 overflow=%22visible%22><g><path d=%22M 11.929 21.114 C 10.885 20.876 9.872 20.747 9.331 20.689 C 8.513 18.81 8.767 18.963 6.412 16.463 C 6.382 18.406 7.585 19.533 8.071 20.341 C 7.817 20.099 7.511 19.852 7.068 19.65 C 6.436 19.36 6.341 19.174 6.34 19.173 L 6.333 19.147 C 6.337 19.158 6.32 19.137 6.32 19.137 L 6.29 19.099 C 6.289 17.269 6.044 15.944 4.51 14.282 C 4.471 14.908 4.653 16.955 5.185 18.039 C 4.489 17.453 4.225 16.671 4.222 16.661 L 4.213 16.635 C 4.213 16.634 4.194 16.613 4.194 16.613 L 4.016 16.413 C 3.889 15.829 3.959 14.827 4.155 14.013 C 4.402 12.986 4.116 11.364 3.432 10.892 C 3.085 11.583 3.383 13.21 3.28 14.476 C 3.133 13.968 2.907 13.658 2.699 13.373 C 2.589 13.225 2.483 13.079 2.392 12.912 C 2.276 11.904 2.662 11.346 2.978 10.832 C 3.324 10.27 3.823 8.979 3.451 8.105 C 3.38 8.944 2.276 9.69 2 11.106 C 1.95 10.551 1.932 10.031 1.927 9.748 C 2.51 8.778 4.249 7.098 4.583 5.132 C 3.308 6.19 2.565 7.05 2.092 8.106 C 2.178 7.307 2.363 6.602 2.475 6.193 C 3.155 5.633 4.875 4.927 4.973 2.521 C 4.647 3.468 3.64 4.017 2.829 4.738 C 2.914 4.474 3.019 4.196 3.146 3.924 C 4.839 2.724 5.537 0.998 5.729 0 C 4.409 0.893 3.383 2.319 3.012 3.574 C 2.738 4.1 2.547 4.667 2.427 5.135 C 2.398 5.168 2.367 5.2 2.34 5.234 C 2.797 4.327 3.343 1.348 3.014 0.785 C 3.02 0.875 2.693 2.065 2.036 3.007 C 1.43 3.874 1.901 5.469 2.145 6.355 C 2.07 6.641 1.982 7.009 1.909 7.425 C 1.724 6.339 1.221 4.936 1.338 3.345 C 0.931 4 0.382 5.902 0.663 7.097 C 0.898 8.097 1.426 9.015 1.65 9.758 C 1.655 10.051 1.673 10.579 1.726 11.148 C 1.515 10.309 1.27 9.643 0.934 9.169 C 0.463 8.503 0.062 7.541 0.075 7.046 C -0.221 8.329 0.345 11.277 2.078 12.9 C 2.192 13.15 2.335 13.346 2.475 13.537 C 2.694 13.835 2.917 14.141 3.047 14.676 C 2.6 14.033 1.359 13.159 0.418 11.922 C 0.636 14.274 2.712 16.425 3.936 16.739 L 3.969 16.776 C 4.024 16.932 4.321 17.685 5.024 18.265 C 4.001 17.794 2.63 16.119 1.318 15.346 C 2.477 16.875 2.101 18.686 5.12 19.095 C 5.412 19.151 5.749 19.143 6.105 19.318 C 6.167 19.422 6.359 19.629 6.953 19.901 C 7.285 20.052 7.53 20.229 7.74 20.413 C 6.454 19.757 4.62 20.115 3.4 19.073 C 4.058 21.131 7.647 21.899 9.178 20.951 C 9.494 20.983 10.061 21.048 10.727 21.16 C 10.38 21.208 10.038 21.287 9.704 21.397 C 6.315 22.514 5.377 21.855 4.965 21.633 C 5.68 22.704 8.489 23.81 10.443 22.647 C 12.397 21.483 13.526 21.729 13.526 21.729 C 14.647 22.041 16.005 22.885 16.509 23.978 L 17.436 24.008 C 16.564 22.912 14.428 21.27 11.929 21.114 Z%22 fill=%22rgb(2,4,7)%22></path><path d=%22M 18.067 21.114 C 19.111 20.876 20.124 20.747 20.665 20.689 C 21.482 18.81 21.229 18.963 23.585 16.463 C 23.614 18.406 22.411 19.533 21.923 20.341 C 22.179 20.099 22.485 19.852 22.927 19.65 C 23.559 19.36 23.654 19.174 23.655 19.173 L 23.663 19.147 C 23.658 19.158 23.675 19.137 23.675 19.137 L 23.705 19.099 C 23.706 17.269 23.951 15.944 25.486 14.282 C 25.524 14.908 25.343 16.955 24.81 18.039 C 25.506 17.453 25.771 16.671 25.774 16.661 L 25.783 16.635 C 25.783 16.634 25.802 16.613 25.802 16.613 L 25.979 16.413 C 26.106 15.829 26.037 14.827 25.841 14.013 C 25.593 12.986 25.88 11.364 26.564 10.892 C 26.911 11.583 26.613 13.21 26.716 14.476 C 26.862 13.968 27.089 13.658 27.298 13.373 C 27.407 13.225 27.513 13.079 27.604 12.912 C 27.721 11.904 27.333 11.346 27.018 10.832 C 26.672 10.27 26.172 8.979 26.545 8.105 C 26.616 8.944 27.719 9.69 27.996 11.106 C 28.046 10.551 28.063 10.031 28.069 9.748 C 27.486 8.778 25.747 7.098 25.413 5.132 C 26.687 6.19 27.431 7.05 27.903 8.106 C 27.818 7.307 27.632 6.602 27.521 6.193 C 26.841 5.633 25.121 4.927 25.022 2.521 C 25.349 3.468 26.356 4.017 27.167 4.738 C 27.082 4.474 26.977 4.196 26.85 3.924 C 25.157 2.724 24.458 0.998 24.267 0 C 25.587 0.893 26.612 2.319 26.984 3.574 C 27.258 4.1 27.449 4.667 27.569 5.135 C 27.597 5.168 27.628 5.2 27.657 5.234 C 27.199 4.327 26.652 1.348 26.982 0.785 C 26.976 0.875 27.302 2.065 27.96 3.007 C 28.566 3.874 28.094 5.469 27.851 6.355 C 27.925 6.641 28.014 7.009 28.086 7.425 C 28.272 6.339 28.775 4.936 28.658 3.345 C 29.065 4 29.614 5.902 29.333 7.097 C 29.098 8.097 28.57 9.015 28.346 9.758 C 28.34 10.051 28.323 10.579 28.27 11.148 C 28.481 10.309 28.726 9.643 29.061 9.169 C 29.533 8.503 29.934 7.541 29.921 7.046 C 30.217 8.329 29.65 11.277 27.918 12.9 C 27.803 13.15 27.661 13.346 27.521 13.537 C 27.302 13.835 27.078 14.141 26.948 14.676 C 27.396 14.033 28.636 13.159 29.578 11.922 C 29.359 14.274 27.283 16.425 26.06 16.739 L 26.027 16.776 C 25.971 16.932 25.675 17.685 24.972 18.265 C 25.994 17.794 27.365 16.119 28.677 15.346 C 27.518 16.875 27.894 18.686 24.876 19.095 C 24.583 19.151 24.247 19.143 23.891 19.318 C 23.828 19.422 23.636 19.629 23.042 19.901 C 22.711 20.052 22.465 20.229 22.255 20.413 C 23.541 19.757 25.375 20.115 26.595 19.073 C 25.938 21.131 22.349 21.899 20.818 20.951 C 20.501 20.983 19.935 21.048 19.269 21.16 C 19.606 21.207 19.948 21.284 20.291 21.397 C 23.681 22.514 24.618 21.855 25.03 21.633 C 24.316 22.704 21.507 23.81 19.553 22.647 C 17.599 21.483 16.469 21.729 16.469 21.729 C 15.349 22.041 13.991 22.885 13.487 23.978 L 12.56 24.008 C 13.431 22.912 15.568 21.27 18.067 21.114 Z%22 fill=%22rgb(2,4,7)%22></path></g></svg>')" }} />
                                <div className="framer-1xtgpmg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                    {T[209]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-w1hjrk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                  {T[210]}
                                </p>
                              </div>
                              <div className="framer-113syp9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847))" }}>
                                  <time dateTime="2025-01-01T00:00:00.000Z">
                                    {T[211]}
                                  </time>
                                </p>
                              </div>
                            </div>
                            <div className="framer-puc6sm-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                        <div className="framer-l2hmjf-container">
                          <div className="framer-3Alku framer-khCxy framer-cnoxjv framer-v-qcl1vt" data-framer-name="Phone" style={{ "width": "100%" }}>
                            <div className="framer-k2sxsh" data-framer-name="Award">
                              <div className="framer-1oo4cmj">
                                <div data-framer-component-type="SVG" className="framer-1i1frjn" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0", "backgroundSize": "100% 100%", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 29.996 24.008%22 overflow=%22visible%22><g><path d=%22M 11.929 21.114 C 10.885 20.876 9.872 20.747 9.331 20.689 C 8.513 18.81 8.767 18.963 6.412 16.463 C 6.382 18.406 7.585 19.533 8.071 20.341 C 7.817 20.099 7.511 19.852 7.068 19.65 C 6.436 19.36 6.341 19.174 6.34 19.173 L 6.333 19.147 C 6.337 19.158 6.32 19.137 6.32 19.137 L 6.29 19.099 C 6.289 17.269 6.044 15.944 4.51 14.282 C 4.471 14.908 4.653 16.955 5.185 18.039 C 4.489 17.453 4.225 16.671 4.222 16.661 L 4.213 16.635 C 4.213 16.634 4.194 16.613 4.194 16.613 L 4.016 16.413 C 3.889 15.829 3.959 14.827 4.155 14.013 C 4.402 12.986 4.116 11.364 3.432 10.892 C 3.085 11.583 3.383 13.21 3.28 14.476 C 3.133 13.968 2.907 13.658 2.699 13.373 C 2.589 13.225 2.483 13.079 2.392 12.912 C 2.276 11.904 2.662 11.346 2.978 10.832 C 3.324 10.27 3.823 8.979 3.451 8.105 C 3.38 8.944 2.276 9.69 2 11.106 C 1.95 10.551 1.932 10.031 1.927 9.748 C 2.51 8.778 4.249 7.098 4.583 5.132 C 3.308 6.19 2.565 7.05 2.092 8.106 C 2.178 7.307 2.363 6.602 2.475 6.193 C 3.155 5.633 4.875 4.927 4.973 2.521 C 4.647 3.468 3.64 4.017 2.829 4.738 C 2.914 4.474 3.019 4.196 3.146 3.924 C 4.839 2.724 5.537 0.998 5.729 0 C 4.409 0.893 3.383 2.319 3.012 3.574 C 2.738 4.1 2.547 4.667 2.427 5.135 C 2.398 5.168 2.367 5.2 2.34 5.234 C 2.797 4.327 3.343 1.348 3.014 0.785 C 3.02 0.875 2.693 2.065 2.036 3.007 C 1.43 3.874 1.901 5.469 2.145 6.355 C 2.07 6.641 1.982 7.009 1.909 7.425 C 1.724 6.339 1.221 4.936 1.338 3.345 C 0.931 4 0.382 5.902 0.663 7.097 C 0.898 8.097 1.426 9.015 1.65 9.758 C 1.655 10.051 1.673 10.579 1.726 11.148 C 1.515 10.309 1.27 9.643 0.934 9.169 C 0.463 8.503 0.062 7.541 0.075 7.046 C -0.221 8.329 0.345 11.277 2.078 12.9 C 2.192 13.15 2.335 13.346 2.475 13.537 C 2.694 13.835 2.917 14.141 3.047 14.676 C 2.6 14.033 1.359 13.159 0.418 11.922 C 0.636 14.274 2.712 16.425 3.936 16.739 L 3.969 16.776 C 4.024 16.932 4.321 17.685 5.024 18.265 C 4.001 17.794 2.63 16.119 1.318 15.346 C 2.477 16.875 2.101 18.686 5.12 19.095 C 5.412 19.151 5.749 19.143 6.105 19.318 C 6.167 19.422 6.359 19.629 6.953 19.901 C 7.285 20.052 7.53 20.229 7.74 20.413 C 6.454 19.757 4.62 20.115 3.4 19.073 C 4.058 21.131 7.647 21.899 9.178 20.951 C 9.494 20.983 10.061 21.048 10.727 21.16 C 10.38 21.208 10.038 21.287 9.704 21.397 C 6.315 22.514 5.377 21.855 4.965 21.633 C 5.68 22.704 8.489 23.81 10.443 22.647 C 12.397 21.483 13.526 21.729 13.526 21.729 C 14.647 22.041 16.005 22.885 16.509 23.978 L 17.436 24.008 C 16.564 22.912 14.428 21.27 11.929 21.114 Z%22 fill=%22rgb(2,4,7)%22></path><path d=%22M 18.067 21.114 C 19.111 20.876 20.124 20.747 20.665 20.689 C 21.482 18.81 21.229 18.963 23.585 16.463 C 23.614 18.406 22.411 19.533 21.923 20.341 C 22.179 20.099 22.485 19.852 22.927 19.65 C 23.559 19.36 23.654 19.174 23.655 19.173 L 23.663 19.147 C 23.658 19.158 23.675 19.137 23.675 19.137 L 23.705 19.099 C 23.706 17.269 23.951 15.944 25.486 14.282 C 25.524 14.908 25.343 16.955 24.81 18.039 C 25.506 17.453 25.771 16.671 25.774 16.661 L 25.783 16.635 C 25.783 16.634 25.802 16.613 25.802 16.613 L 25.979 16.413 C 26.106 15.829 26.037 14.827 25.841 14.013 C 25.593 12.986 25.88 11.364 26.564 10.892 C 26.911 11.583 26.613 13.21 26.716 14.476 C 26.862 13.968 27.089 13.658 27.298 13.373 C 27.407 13.225 27.513 13.079 27.604 12.912 C 27.721 11.904 27.333 11.346 27.018 10.832 C 26.672 10.27 26.172 8.979 26.545 8.105 C 26.616 8.944 27.719 9.69 27.996 11.106 C 28.046 10.551 28.063 10.031 28.069 9.748 C 27.486 8.778 25.747 7.098 25.413 5.132 C 26.687 6.19 27.431 7.05 27.903 8.106 C 27.818 7.307 27.632 6.602 27.521 6.193 C 26.841 5.633 25.121 4.927 25.022 2.521 C 25.349 3.468 26.356 4.017 27.167 4.738 C 27.082 4.474 26.977 4.196 26.85 3.924 C 25.157 2.724 24.458 0.998 24.267 0 C 25.587 0.893 26.612 2.319 26.984 3.574 C 27.258 4.1 27.449 4.667 27.569 5.135 C 27.597 5.168 27.628 5.2 27.657 5.234 C 27.199 4.327 26.652 1.348 26.982 0.785 C 26.976 0.875 27.302 2.065 27.96 3.007 C 28.566 3.874 28.094 5.469 27.851 6.355 C 27.925 6.641 28.014 7.009 28.086 7.425 C 28.272 6.339 28.775 4.936 28.658 3.345 C 29.065 4 29.614 5.902 29.333 7.097 C 29.098 8.097 28.57 9.015 28.346 9.758 C 28.34 10.051 28.323 10.579 28.27 11.148 C 28.481 10.309 28.726 9.643 29.061 9.169 C 29.533 8.503 29.934 7.541 29.921 7.046 C 30.217 8.329 29.65 11.277 27.918 12.9 C 27.803 13.15 27.661 13.346 27.521 13.537 C 27.302 13.835 27.078 14.141 26.948 14.676 C 27.396 14.033 28.636 13.159 29.578 11.922 C 29.359 14.274 27.283 16.425 26.06 16.739 L 26.027 16.776 C 25.971 16.932 25.675 17.685 24.972 18.265 C 25.994 17.794 27.365 16.119 28.677 15.346 C 27.518 16.875 27.894 18.686 24.876 19.095 C 24.583 19.151 24.247 19.143 23.891 19.318 C 23.828 19.422 23.636 19.629 23.042 19.901 C 22.711 20.052 22.465 20.229 22.255 20.413 C 23.541 19.757 25.375 20.115 26.595 19.073 C 25.938 21.131 22.349 21.899 20.818 20.951 C 20.501 20.983 19.935 21.048 19.269 21.16 C 19.606 21.207 19.948 21.284 20.291 21.397 C 23.681 22.514 24.618 21.855 25.03 21.633 C 24.316 22.704 21.507 23.81 19.553 22.647 C 17.599 21.483 16.469 21.729 16.469 21.729 C 15.349 22.041 13.991 22.885 13.487 23.978 L 12.56 24.008 C 13.431 22.912 15.568 21.27 18.067 21.114 Z%22 fill=%22rgb(2,4,7)%22></path></g></svg>')" }} />
                                <div className="framer-1xtgpmg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                    {T[212]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-w1hjrk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                  {T[213]}
                                </p>
                              </div>
                              <div className="framer-113syp9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847))" }}>
                                  <time dateTime="2025-01-01T00:00:00.000Z">
                                    {T[214]}
                                  </time>
                                </p>
                              </div>
                            </div>
                            <div className="framer-puc6sm-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                        <div className="framer-6uprm2-container">
                          <div className="framer-3Alku framer-khCxy framer-cnoxjv framer-v-cnoxjv" data-framer-name="Desktop" style={{ "width": "100%" }}>
                            <div className="framer-k2sxsh" data-framer-name="Award">
                              <div className="framer-1oo4cmj">
                                <div data-framer-component-type="SVG" className="framer-1i1frjn" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0", "backgroundSize": "100% 100%", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 29.996 24.008%22 overflow=%22visible%22><g><path d=%22M 11.929 21.114 C 10.885 20.876 9.872 20.747 9.331 20.689 C 8.513 18.81 8.767 18.963 6.412 16.463 C 6.382 18.406 7.585 19.533 8.071 20.341 C 7.817 20.099 7.511 19.852 7.068 19.65 C 6.436 19.36 6.341 19.174 6.34 19.173 L 6.333 19.147 C 6.337 19.158 6.32 19.137 6.32 19.137 L 6.29 19.099 C 6.289 17.269 6.044 15.944 4.51 14.282 C 4.471 14.908 4.653 16.955 5.185 18.039 C 4.489 17.453 4.225 16.671 4.222 16.661 L 4.213 16.635 C 4.213 16.634 4.194 16.613 4.194 16.613 L 4.016 16.413 C 3.889 15.829 3.959 14.827 4.155 14.013 C 4.402 12.986 4.116 11.364 3.432 10.892 C 3.085 11.583 3.383 13.21 3.28 14.476 C 3.133 13.968 2.907 13.658 2.699 13.373 C 2.589 13.225 2.483 13.079 2.392 12.912 C 2.276 11.904 2.662 11.346 2.978 10.832 C 3.324 10.27 3.823 8.979 3.451 8.105 C 3.38 8.944 2.276 9.69 2 11.106 C 1.95 10.551 1.932 10.031 1.927 9.748 C 2.51 8.778 4.249 7.098 4.583 5.132 C 3.308 6.19 2.565 7.05 2.092 8.106 C 2.178 7.307 2.363 6.602 2.475 6.193 C 3.155 5.633 4.875 4.927 4.973 2.521 C 4.647 3.468 3.64 4.017 2.829 4.738 C 2.914 4.474 3.019 4.196 3.146 3.924 C 4.839 2.724 5.537 0.998 5.729 0 C 4.409 0.893 3.383 2.319 3.012 3.574 C 2.738 4.1 2.547 4.667 2.427 5.135 C 2.398 5.168 2.367 5.2 2.34 5.234 C 2.797 4.327 3.343 1.348 3.014 0.785 C 3.02 0.875 2.693 2.065 2.036 3.007 C 1.43 3.874 1.901 5.469 2.145 6.355 C 2.07 6.641 1.982 7.009 1.909 7.425 C 1.724 6.339 1.221 4.936 1.338 3.345 C 0.931 4 0.382 5.902 0.663 7.097 C 0.898 8.097 1.426 9.015 1.65 9.758 C 1.655 10.051 1.673 10.579 1.726 11.148 C 1.515 10.309 1.27 9.643 0.934 9.169 C 0.463 8.503 0.062 7.541 0.075 7.046 C -0.221 8.329 0.345 11.277 2.078 12.9 C 2.192 13.15 2.335 13.346 2.475 13.537 C 2.694 13.835 2.917 14.141 3.047 14.676 C 2.6 14.033 1.359 13.159 0.418 11.922 C 0.636 14.274 2.712 16.425 3.936 16.739 L 3.969 16.776 C 4.024 16.932 4.321 17.685 5.024 18.265 C 4.001 17.794 2.63 16.119 1.318 15.346 C 2.477 16.875 2.101 18.686 5.12 19.095 C 5.412 19.151 5.749 19.143 6.105 19.318 C 6.167 19.422 6.359 19.629 6.953 19.901 C 7.285 20.052 7.53 20.229 7.74 20.413 C 6.454 19.757 4.62 20.115 3.4 19.073 C 4.058 21.131 7.647 21.899 9.178 20.951 C 9.494 20.983 10.061 21.048 10.727 21.16 C 10.38 21.208 10.038 21.287 9.704 21.397 C 6.315 22.514 5.377 21.855 4.965 21.633 C 5.68 22.704 8.489 23.81 10.443 22.647 C 12.397 21.483 13.526 21.729 13.526 21.729 C 14.647 22.041 16.005 22.885 16.509 23.978 L 17.436 24.008 C 16.564 22.912 14.428 21.27 11.929 21.114 Z%22 fill=%22rgb(2,4,7)%22></path><path d=%22M 18.067 21.114 C 19.111 20.876 20.124 20.747 20.665 20.689 C 21.482 18.81 21.229 18.963 23.585 16.463 C 23.614 18.406 22.411 19.533 21.923 20.341 C 22.179 20.099 22.485 19.852 22.927 19.65 C 23.559 19.36 23.654 19.174 23.655 19.173 L 23.663 19.147 C 23.658 19.158 23.675 19.137 23.675 19.137 L 23.705 19.099 C 23.706 17.269 23.951 15.944 25.486 14.282 C 25.524 14.908 25.343 16.955 24.81 18.039 C 25.506 17.453 25.771 16.671 25.774 16.661 L 25.783 16.635 C 25.783 16.634 25.802 16.613 25.802 16.613 L 25.979 16.413 C 26.106 15.829 26.037 14.827 25.841 14.013 C 25.593 12.986 25.88 11.364 26.564 10.892 C 26.911 11.583 26.613 13.21 26.716 14.476 C 26.862 13.968 27.089 13.658 27.298 13.373 C 27.407 13.225 27.513 13.079 27.604 12.912 C 27.721 11.904 27.333 11.346 27.018 10.832 C 26.672 10.27 26.172 8.979 26.545 8.105 C 26.616 8.944 27.719 9.69 27.996 11.106 C 28.046 10.551 28.063 10.031 28.069 9.748 C 27.486 8.778 25.747 7.098 25.413 5.132 C 26.687 6.19 27.431 7.05 27.903 8.106 C 27.818 7.307 27.632 6.602 27.521 6.193 C 26.841 5.633 25.121 4.927 25.022 2.521 C 25.349 3.468 26.356 4.017 27.167 4.738 C 27.082 4.474 26.977 4.196 26.85 3.924 C 25.157 2.724 24.458 0.998 24.267 0 C 25.587 0.893 26.612 2.319 26.984 3.574 C 27.258 4.1 27.449 4.667 27.569 5.135 C 27.597 5.168 27.628 5.2 27.657 5.234 C 27.199 4.327 26.652 1.348 26.982 0.785 C 26.976 0.875 27.302 2.065 27.96 3.007 C 28.566 3.874 28.094 5.469 27.851 6.355 C 27.925 6.641 28.014 7.009 28.086 7.425 C 28.272 6.339 28.775 4.936 28.658 3.345 C 29.065 4 29.614 5.902 29.333 7.097 C 29.098 8.097 28.57 9.015 28.346 9.758 C 28.34 10.051 28.323 10.579 28.27 11.148 C 28.481 10.309 28.726 9.643 29.061 9.169 C 29.533 8.503 29.934 7.541 29.921 7.046 C 30.217 8.329 29.65 11.277 27.918 12.9 C 27.803 13.15 27.661 13.346 27.521 13.537 C 27.302 13.835 27.078 14.141 26.948 14.676 C 27.396 14.033 28.636 13.159 29.578 11.922 C 29.359 14.274 27.283 16.425 26.06 16.739 L 26.027 16.776 C 25.971 16.932 25.675 17.685 24.972 18.265 C 25.994 17.794 27.365 16.119 28.677 15.346 C 27.518 16.875 27.894 18.686 24.876 19.095 C 24.583 19.151 24.247 19.143 23.891 19.318 C 23.828 19.422 23.636 19.629 23.042 19.901 C 22.711 20.052 22.465 20.229 22.255 20.413 C 23.541 19.757 25.375 20.115 26.595 19.073 C 25.938 21.131 22.349 21.899 20.818 20.951 C 20.501 20.983 19.935 21.048 19.269 21.16 C 19.606 21.207 19.948 21.284 20.291 21.397 C 23.681 22.514 24.618 21.855 25.03 21.633 C 24.316 22.704 21.507 23.81 19.553 22.647 C 17.599 21.483 16.469 21.729 16.469 21.729 C 15.349 22.041 13.991 22.885 13.487 23.978 L 12.56 24.008 C 13.431 22.912 15.568 21.27 18.067 21.114 Z%22 fill=%22rgb(2,4,7)%22></path></g></svg>')" }} />
                                <div className="framer-1xtgpmg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                    {T[215]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-w1hjrk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                  {T[216]}
                                </p>
                              </div>
                              <div className="framer-113syp9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847))" }}>
                                  <time dateTime="2024-01-01T00:00:00.000Z">
                                    {T[217]}
                                  </time>
                                </p>
                              </div>
                            </div>
                            <div className="framer-puc6sm-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                        <div className="framer-6uprm2-container">
                          <div className="framer-3Alku framer-khCxy framer-cnoxjv framer-v-qcl1vt" data-framer-name="Phone" style={{ "width": "100%" }}>
                            <div className="framer-k2sxsh" data-framer-name="Award">
                              <div className="framer-1oo4cmj">
                                <div data-framer-component-type="SVG" className="framer-1i1frjn" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0", "backgroundSize": "100% 100%", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 29.996 24.008%22 overflow=%22visible%22><g><path d=%22M 11.929 21.114 C 10.885 20.876 9.872 20.747 9.331 20.689 C 8.513 18.81 8.767 18.963 6.412 16.463 C 6.382 18.406 7.585 19.533 8.071 20.341 C 7.817 20.099 7.511 19.852 7.068 19.65 C 6.436 19.36 6.341 19.174 6.34 19.173 L 6.333 19.147 C 6.337 19.158 6.32 19.137 6.32 19.137 L 6.29 19.099 C 6.289 17.269 6.044 15.944 4.51 14.282 C 4.471 14.908 4.653 16.955 5.185 18.039 C 4.489 17.453 4.225 16.671 4.222 16.661 L 4.213 16.635 C 4.213 16.634 4.194 16.613 4.194 16.613 L 4.016 16.413 C 3.889 15.829 3.959 14.827 4.155 14.013 C 4.402 12.986 4.116 11.364 3.432 10.892 C 3.085 11.583 3.383 13.21 3.28 14.476 C 3.133 13.968 2.907 13.658 2.699 13.373 C 2.589 13.225 2.483 13.079 2.392 12.912 C 2.276 11.904 2.662 11.346 2.978 10.832 C 3.324 10.27 3.823 8.979 3.451 8.105 C 3.38 8.944 2.276 9.69 2 11.106 C 1.95 10.551 1.932 10.031 1.927 9.748 C 2.51 8.778 4.249 7.098 4.583 5.132 C 3.308 6.19 2.565 7.05 2.092 8.106 C 2.178 7.307 2.363 6.602 2.475 6.193 C 3.155 5.633 4.875 4.927 4.973 2.521 C 4.647 3.468 3.64 4.017 2.829 4.738 C 2.914 4.474 3.019 4.196 3.146 3.924 C 4.839 2.724 5.537 0.998 5.729 0 C 4.409 0.893 3.383 2.319 3.012 3.574 C 2.738 4.1 2.547 4.667 2.427 5.135 C 2.398 5.168 2.367 5.2 2.34 5.234 C 2.797 4.327 3.343 1.348 3.014 0.785 C 3.02 0.875 2.693 2.065 2.036 3.007 C 1.43 3.874 1.901 5.469 2.145 6.355 C 2.07 6.641 1.982 7.009 1.909 7.425 C 1.724 6.339 1.221 4.936 1.338 3.345 C 0.931 4 0.382 5.902 0.663 7.097 C 0.898 8.097 1.426 9.015 1.65 9.758 C 1.655 10.051 1.673 10.579 1.726 11.148 C 1.515 10.309 1.27 9.643 0.934 9.169 C 0.463 8.503 0.062 7.541 0.075 7.046 C -0.221 8.329 0.345 11.277 2.078 12.9 C 2.192 13.15 2.335 13.346 2.475 13.537 C 2.694 13.835 2.917 14.141 3.047 14.676 C 2.6 14.033 1.359 13.159 0.418 11.922 C 0.636 14.274 2.712 16.425 3.936 16.739 L 3.969 16.776 C 4.024 16.932 4.321 17.685 5.024 18.265 C 4.001 17.794 2.63 16.119 1.318 15.346 C 2.477 16.875 2.101 18.686 5.12 19.095 C 5.412 19.151 5.749 19.143 6.105 19.318 C 6.167 19.422 6.359 19.629 6.953 19.901 C 7.285 20.052 7.53 20.229 7.74 20.413 C 6.454 19.757 4.62 20.115 3.4 19.073 C 4.058 21.131 7.647 21.899 9.178 20.951 C 9.494 20.983 10.061 21.048 10.727 21.16 C 10.38 21.208 10.038 21.287 9.704 21.397 C 6.315 22.514 5.377 21.855 4.965 21.633 C 5.68 22.704 8.489 23.81 10.443 22.647 C 12.397 21.483 13.526 21.729 13.526 21.729 C 14.647 22.041 16.005 22.885 16.509 23.978 L 17.436 24.008 C 16.564 22.912 14.428 21.27 11.929 21.114 Z%22 fill=%22rgb(2,4,7)%22></path><path d=%22M 18.067 21.114 C 19.111 20.876 20.124 20.747 20.665 20.689 C 21.482 18.81 21.229 18.963 23.585 16.463 C 23.614 18.406 22.411 19.533 21.923 20.341 C 22.179 20.099 22.485 19.852 22.927 19.65 C 23.559 19.36 23.654 19.174 23.655 19.173 L 23.663 19.147 C 23.658 19.158 23.675 19.137 23.675 19.137 L 23.705 19.099 C 23.706 17.269 23.951 15.944 25.486 14.282 C 25.524 14.908 25.343 16.955 24.81 18.039 C 25.506 17.453 25.771 16.671 25.774 16.661 L 25.783 16.635 C 25.783 16.634 25.802 16.613 25.802 16.613 L 25.979 16.413 C 26.106 15.829 26.037 14.827 25.841 14.013 C 25.593 12.986 25.88 11.364 26.564 10.892 C 26.911 11.583 26.613 13.21 26.716 14.476 C 26.862 13.968 27.089 13.658 27.298 13.373 C 27.407 13.225 27.513 13.079 27.604 12.912 C 27.721 11.904 27.333 11.346 27.018 10.832 C 26.672 10.27 26.172 8.979 26.545 8.105 C 26.616 8.944 27.719 9.69 27.996 11.106 C 28.046 10.551 28.063 10.031 28.069 9.748 C 27.486 8.778 25.747 7.098 25.413 5.132 C 26.687 6.19 27.431 7.05 27.903 8.106 C 27.818 7.307 27.632 6.602 27.521 6.193 C 26.841 5.633 25.121 4.927 25.022 2.521 C 25.349 3.468 26.356 4.017 27.167 4.738 C 27.082 4.474 26.977 4.196 26.85 3.924 C 25.157 2.724 24.458 0.998 24.267 0 C 25.587 0.893 26.612 2.319 26.984 3.574 C 27.258 4.1 27.449 4.667 27.569 5.135 C 27.597 5.168 27.628 5.2 27.657 5.234 C 27.199 4.327 26.652 1.348 26.982 0.785 C 26.976 0.875 27.302 2.065 27.96 3.007 C 28.566 3.874 28.094 5.469 27.851 6.355 C 27.925 6.641 28.014 7.009 28.086 7.425 C 28.272 6.339 28.775 4.936 28.658 3.345 C 29.065 4 29.614 5.902 29.333 7.097 C 29.098 8.097 28.57 9.015 28.346 9.758 C 28.34 10.051 28.323 10.579 28.27 11.148 C 28.481 10.309 28.726 9.643 29.061 9.169 C 29.533 8.503 29.934 7.541 29.921 7.046 C 30.217 8.329 29.65 11.277 27.918 12.9 C 27.803 13.15 27.661 13.346 27.521 13.537 C 27.302 13.835 27.078 14.141 26.948 14.676 C 27.396 14.033 28.636 13.159 29.578 11.922 C 29.359 14.274 27.283 16.425 26.06 16.739 L 26.027 16.776 C 25.971 16.932 25.675 17.685 24.972 18.265 C 25.994 17.794 27.365 16.119 28.677 15.346 C 27.518 16.875 27.894 18.686 24.876 19.095 C 24.583 19.151 24.247 19.143 23.891 19.318 C 23.828 19.422 23.636 19.629 23.042 19.901 C 22.711 20.052 22.465 20.229 22.255 20.413 C 23.541 19.757 25.375 20.115 26.595 19.073 C 25.938 21.131 22.349 21.899 20.818 20.951 C 20.501 20.983 19.935 21.048 19.269 21.16 C 19.606 21.207 19.948 21.284 20.291 21.397 C 23.681 22.514 24.618 21.855 25.03 21.633 C 24.316 22.704 21.507 23.81 19.553 22.647 C 17.599 21.483 16.469 21.729 16.469 21.729 C 15.349 22.041 13.991 22.885 13.487 23.978 L 12.56 24.008 C 13.431 22.912 15.568 21.27 18.067 21.114 Z%22 fill=%22rgb(2,4,7)%22></path></g></svg>')" }} />
                                <div className="framer-1xtgpmg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                    {T[218]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-w1hjrk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                  {T[219]}
                                </p>
                              </div>
                              <div className="framer-113syp9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847))" }}>
                                  <time dateTime="2024-01-01T00:00:00.000Z">
                                    {T[220]}
                                  </time>
                                </p>
                              </div>
                            </div>
                            <div className="framer-puc6sm-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
                        <div className="framer-1nltjkl-container">
                          <div className="framer-3Alku framer-khCxy framer-cnoxjv framer-v-cnoxjv" data-framer-name="Desktop" style={{ "width": "100%" }}>
                            <div className="framer-k2sxsh" data-framer-name="Award">
                              <div className="framer-1oo4cmj">
                                <div data-framer-component-type="SVG" className="framer-1i1frjn" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0", "backgroundSize": "100% 100%", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 29.996 24.008%22 overflow=%22visible%22><g><path d=%22M 11.929 21.114 C 10.885 20.876 9.872 20.747 9.331 20.689 C 8.513 18.81 8.767 18.963 6.412 16.463 C 6.382 18.406 7.585 19.533 8.071 20.341 C 7.817 20.099 7.511 19.852 7.068 19.65 C 6.436 19.36 6.341 19.174 6.34 19.173 L 6.333 19.147 C 6.337 19.158 6.32 19.137 6.32 19.137 L 6.29 19.099 C 6.289 17.269 6.044 15.944 4.51 14.282 C 4.471 14.908 4.653 16.955 5.185 18.039 C 4.489 17.453 4.225 16.671 4.222 16.661 L 4.213 16.635 C 4.213 16.634 4.194 16.613 4.194 16.613 L 4.016 16.413 C 3.889 15.829 3.959 14.827 4.155 14.013 C 4.402 12.986 4.116 11.364 3.432 10.892 C 3.085 11.583 3.383 13.21 3.28 14.476 C 3.133 13.968 2.907 13.658 2.699 13.373 C 2.589 13.225 2.483 13.079 2.392 12.912 C 2.276 11.904 2.662 11.346 2.978 10.832 C 3.324 10.27 3.823 8.979 3.451 8.105 C 3.38 8.944 2.276 9.69 2 11.106 C 1.95 10.551 1.932 10.031 1.927 9.748 C 2.51 8.778 4.249 7.098 4.583 5.132 C 3.308 6.19 2.565 7.05 2.092 8.106 C 2.178 7.307 2.363 6.602 2.475 6.193 C 3.155 5.633 4.875 4.927 4.973 2.521 C 4.647 3.468 3.64 4.017 2.829 4.738 C 2.914 4.474 3.019 4.196 3.146 3.924 C 4.839 2.724 5.537 0.998 5.729 0 C 4.409 0.893 3.383 2.319 3.012 3.574 C 2.738 4.1 2.547 4.667 2.427 5.135 C 2.398 5.168 2.367 5.2 2.34 5.234 C 2.797 4.327 3.343 1.348 3.014 0.785 C 3.02 0.875 2.693 2.065 2.036 3.007 C 1.43 3.874 1.901 5.469 2.145 6.355 C 2.07 6.641 1.982 7.009 1.909 7.425 C 1.724 6.339 1.221 4.936 1.338 3.345 C 0.931 4 0.382 5.902 0.663 7.097 C 0.898 8.097 1.426 9.015 1.65 9.758 C 1.655 10.051 1.673 10.579 1.726 11.148 C 1.515 10.309 1.27 9.643 0.934 9.169 C 0.463 8.503 0.062 7.541 0.075 7.046 C -0.221 8.329 0.345 11.277 2.078 12.9 C 2.192 13.15 2.335 13.346 2.475 13.537 C 2.694 13.835 2.917 14.141 3.047 14.676 C 2.6 14.033 1.359 13.159 0.418 11.922 C 0.636 14.274 2.712 16.425 3.936 16.739 L 3.969 16.776 C 4.024 16.932 4.321 17.685 5.024 18.265 C 4.001 17.794 2.63 16.119 1.318 15.346 C 2.477 16.875 2.101 18.686 5.12 19.095 C 5.412 19.151 5.749 19.143 6.105 19.318 C 6.167 19.422 6.359 19.629 6.953 19.901 C 7.285 20.052 7.53 20.229 7.74 20.413 C 6.454 19.757 4.62 20.115 3.4 19.073 C 4.058 21.131 7.647 21.899 9.178 20.951 C 9.494 20.983 10.061 21.048 10.727 21.16 C 10.38 21.208 10.038 21.287 9.704 21.397 C 6.315 22.514 5.377 21.855 4.965 21.633 C 5.68 22.704 8.489 23.81 10.443 22.647 C 12.397 21.483 13.526 21.729 13.526 21.729 C 14.647 22.041 16.005 22.885 16.509 23.978 L 17.436 24.008 C 16.564 22.912 14.428 21.27 11.929 21.114 Z%22 fill=%22rgb(2,4,7)%22></path><path d=%22M 18.067 21.114 C 19.111 20.876 20.124 20.747 20.665 20.689 C 21.482 18.81 21.229 18.963 23.585 16.463 C 23.614 18.406 22.411 19.533 21.923 20.341 C 22.179 20.099 22.485 19.852 22.927 19.65 C 23.559 19.36 23.654 19.174 23.655 19.173 L 23.663 19.147 C 23.658 19.158 23.675 19.137 23.675 19.137 L 23.705 19.099 C 23.706 17.269 23.951 15.944 25.486 14.282 C 25.524 14.908 25.343 16.955 24.81 18.039 C 25.506 17.453 25.771 16.671 25.774 16.661 L 25.783 16.635 C 25.783 16.634 25.802 16.613 25.802 16.613 L 25.979 16.413 C 26.106 15.829 26.037 14.827 25.841 14.013 C 25.593 12.986 25.88 11.364 26.564 10.892 C 26.911 11.583 26.613 13.21 26.716 14.476 C 26.862 13.968 27.089 13.658 27.298 13.373 C 27.407 13.225 27.513 13.079 27.604 12.912 C 27.721 11.904 27.333 11.346 27.018 10.832 C 26.672 10.27 26.172 8.979 26.545 8.105 C 26.616 8.944 27.719 9.69 27.996 11.106 C 28.046 10.551 28.063 10.031 28.069 9.748 C 27.486 8.778 25.747 7.098 25.413 5.132 C 26.687 6.19 27.431 7.05 27.903 8.106 C 27.818 7.307 27.632 6.602 27.521 6.193 C 26.841 5.633 25.121 4.927 25.022 2.521 C 25.349 3.468 26.356 4.017 27.167 4.738 C 27.082 4.474 26.977 4.196 26.85 3.924 C 25.157 2.724 24.458 0.998 24.267 0 C 25.587 0.893 26.612 2.319 26.984 3.574 C 27.258 4.1 27.449 4.667 27.569 5.135 C 27.597 5.168 27.628 5.2 27.657 5.234 C 27.199 4.327 26.652 1.348 26.982 0.785 C 26.976 0.875 27.302 2.065 27.96 3.007 C 28.566 3.874 28.094 5.469 27.851 6.355 C 27.925 6.641 28.014 7.009 28.086 7.425 C 28.272 6.339 28.775 4.936 28.658 3.345 C 29.065 4 29.614 5.902 29.333 7.097 C 29.098 8.097 28.57 9.015 28.346 9.758 C 28.34 10.051 28.323 10.579 28.27 11.148 C 28.481 10.309 28.726 9.643 29.061 9.169 C 29.533 8.503 29.934 7.541 29.921 7.046 C 30.217 8.329 29.65 11.277 27.918 12.9 C 27.803 13.15 27.661 13.346 27.521 13.537 C 27.302 13.835 27.078 14.141 26.948 14.676 C 27.396 14.033 28.636 13.159 29.578 11.922 C 29.359 14.274 27.283 16.425 26.06 16.739 L 26.027 16.776 C 25.971 16.932 25.675 17.685 24.972 18.265 C 25.994 17.794 27.365 16.119 28.677 15.346 C 27.518 16.875 27.894 18.686 24.876 19.095 C 24.583 19.151 24.247 19.143 23.891 19.318 C 23.828 19.422 23.636 19.629 23.042 19.901 C 22.711 20.052 22.465 20.229 22.255 20.413 C 23.541 19.757 25.375 20.115 26.595 19.073 C 25.938 21.131 22.349 21.899 20.818 20.951 C 20.501 20.983 19.935 21.048 19.269 21.16 C 19.606 21.207 19.948 21.284 20.291 21.397 C 23.681 22.514 24.618 21.855 25.03 21.633 C 24.316 22.704 21.507 23.81 19.553 22.647 C 17.599 21.483 16.469 21.729 16.469 21.729 C 15.349 22.041 13.991 22.885 13.487 23.978 L 12.56 24.008 C 13.431 22.912 15.568 21.27 18.067 21.114 Z%22 fill=%22rgb(2,4,7)%22></path></g></svg>')" }} />
                                <div className="framer-1xtgpmg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                    {T[221]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-w1hjrk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                  {T[222]}
                                </p>
                              </div>
                              <div className="framer-113syp9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847))" }}>
                                  <time dateTime="2023-01-01T00:00:00.000Z">
                                    {T[223]}
                                  </time>
                                </p>
                              </div>
                            </div>
                            <div className="framer-puc6sm-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </SV>
                      <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
                        <div className="framer-1nltjkl-container">
                          <div className="framer-3Alku framer-khCxy framer-cnoxjv framer-v-qcl1vt" data-framer-name="Phone" style={{ "width": "100%" }}>
                            <div className="framer-k2sxsh" data-framer-name="Award">
                              <div className="framer-1oo4cmj">
                                <div data-framer-component-type="SVG" className="framer-1i1frjn" aria-hidden="true" style={{ "imageRendering": "pixelated", "flexShrink": "0", "backgroundSize": "100% 100%", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 xmlns:xlink=%22http://www.w3.org/1999/xlink%22 viewBox=%220 0 29.996 24.008%22 overflow=%22visible%22><g><path d=%22M 11.929 21.114 C 10.885 20.876 9.872 20.747 9.331 20.689 C 8.513 18.81 8.767 18.963 6.412 16.463 C 6.382 18.406 7.585 19.533 8.071 20.341 C 7.817 20.099 7.511 19.852 7.068 19.65 C 6.436 19.36 6.341 19.174 6.34 19.173 L 6.333 19.147 C 6.337 19.158 6.32 19.137 6.32 19.137 L 6.29 19.099 C 6.289 17.269 6.044 15.944 4.51 14.282 C 4.471 14.908 4.653 16.955 5.185 18.039 C 4.489 17.453 4.225 16.671 4.222 16.661 L 4.213 16.635 C 4.213 16.634 4.194 16.613 4.194 16.613 L 4.016 16.413 C 3.889 15.829 3.959 14.827 4.155 14.013 C 4.402 12.986 4.116 11.364 3.432 10.892 C 3.085 11.583 3.383 13.21 3.28 14.476 C 3.133 13.968 2.907 13.658 2.699 13.373 C 2.589 13.225 2.483 13.079 2.392 12.912 C 2.276 11.904 2.662 11.346 2.978 10.832 C 3.324 10.27 3.823 8.979 3.451 8.105 C 3.38 8.944 2.276 9.69 2 11.106 C 1.95 10.551 1.932 10.031 1.927 9.748 C 2.51 8.778 4.249 7.098 4.583 5.132 C 3.308 6.19 2.565 7.05 2.092 8.106 C 2.178 7.307 2.363 6.602 2.475 6.193 C 3.155 5.633 4.875 4.927 4.973 2.521 C 4.647 3.468 3.64 4.017 2.829 4.738 C 2.914 4.474 3.019 4.196 3.146 3.924 C 4.839 2.724 5.537 0.998 5.729 0 C 4.409 0.893 3.383 2.319 3.012 3.574 C 2.738 4.1 2.547 4.667 2.427 5.135 C 2.398 5.168 2.367 5.2 2.34 5.234 C 2.797 4.327 3.343 1.348 3.014 0.785 C 3.02 0.875 2.693 2.065 2.036 3.007 C 1.43 3.874 1.901 5.469 2.145 6.355 C 2.07 6.641 1.982 7.009 1.909 7.425 C 1.724 6.339 1.221 4.936 1.338 3.345 C 0.931 4 0.382 5.902 0.663 7.097 C 0.898 8.097 1.426 9.015 1.65 9.758 C 1.655 10.051 1.673 10.579 1.726 11.148 C 1.515 10.309 1.27 9.643 0.934 9.169 C 0.463 8.503 0.062 7.541 0.075 7.046 C -0.221 8.329 0.345 11.277 2.078 12.9 C 2.192 13.15 2.335 13.346 2.475 13.537 C 2.694 13.835 2.917 14.141 3.047 14.676 C 2.6 14.033 1.359 13.159 0.418 11.922 C 0.636 14.274 2.712 16.425 3.936 16.739 L 3.969 16.776 C 4.024 16.932 4.321 17.685 5.024 18.265 C 4.001 17.794 2.63 16.119 1.318 15.346 C 2.477 16.875 2.101 18.686 5.12 19.095 C 5.412 19.151 5.749 19.143 6.105 19.318 C 6.167 19.422 6.359 19.629 6.953 19.901 C 7.285 20.052 7.53 20.229 7.74 20.413 C 6.454 19.757 4.62 20.115 3.4 19.073 C 4.058 21.131 7.647 21.899 9.178 20.951 C 9.494 20.983 10.061 21.048 10.727 21.16 C 10.38 21.208 10.038 21.287 9.704 21.397 C 6.315 22.514 5.377 21.855 4.965 21.633 C 5.68 22.704 8.489 23.81 10.443 22.647 C 12.397 21.483 13.526 21.729 13.526 21.729 C 14.647 22.041 16.005 22.885 16.509 23.978 L 17.436 24.008 C 16.564 22.912 14.428 21.27 11.929 21.114 Z%22 fill=%22rgb(2,4,7)%22></path><path d=%22M 18.067 21.114 C 19.111 20.876 20.124 20.747 20.665 20.689 C 21.482 18.81 21.229 18.963 23.585 16.463 C 23.614 18.406 22.411 19.533 21.923 20.341 C 22.179 20.099 22.485 19.852 22.927 19.65 C 23.559 19.36 23.654 19.174 23.655 19.173 L 23.663 19.147 C 23.658 19.158 23.675 19.137 23.675 19.137 L 23.705 19.099 C 23.706 17.269 23.951 15.944 25.486 14.282 C 25.524 14.908 25.343 16.955 24.81 18.039 C 25.506 17.453 25.771 16.671 25.774 16.661 L 25.783 16.635 C 25.783 16.634 25.802 16.613 25.802 16.613 L 25.979 16.413 C 26.106 15.829 26.037 14.827 25.841 14.013 C 25.593 12.986 25.88 11.364 26.564 10.892 C 26.911 11.583 26.613 13.21 26.716 14.476 C 26.862 13.968 27.089 13.658 27.298 13.373 C 27.407 13.225 27.513 13.079 27.604 12.912 C 27.721 11.904 27.333 11.346 27.018 10.832 C 26.672 10.27 26.172 8.979 26.545 8.105 C 26.616 8.944 27.719 9.69 27.996 11.106 C 28.046 10.551 28.063 10.031 28.069 9.748 C 27.486 8.778 25.747 7.098 25.413 5.132 C 26.687 6.19 27.431 7.05 27.903 8.106 C 27.818 7.307 27.632 6.602 27.521 6.193 C 26.841 5.633 25.121 4.927 25.022 2.521 C 25.349 3.468 26.356 4.017 27.167 4.738 C 27.082 4.474 26.977 4.196 26.85 3.924 C 25.157 2.724 24.458 0.998 24.267 0 C 25.587 0.893 26.612 2.319 26.984 3.574 C 27.258 4.1 27.449 4.667 27.569 5.135 C 27.597 5.168 27.628 5.2 27.657 5.234 C 27.199 4.327 26.652 1.348 26.982 0.785 C 26.976 0.875 27.302 2.065 27.96 3.007 C 28.566 3.874 28.094 5.469 27.851 6.355 C 27.925 6.641 28.014 7.009 28.086 7.425 C 28.272 6.339 28.775 4.936 28.658 3.345 C 29.065 4 29.614 5.902 29.333 7.097 C 29.098 8.097 28.57 9.015 28.346 9.758 C 28.34 10.051 28.323 10.579 28.27 11.148 C 28.481 10.309 28.726 9.643 29.061 9.169 C 29.533 8.503 29.934 7.541 29.921 7.046 C 30.217 8.329 29.65 11.277 27.918 12.9 C 27.803 13.15 27.661 13.346 27.521 13.537 C 27.302 13.835 27.078 14.141 26.948 14.676 C 27.396 14.033 28.636 13.159 29.578 11.922 C 29.359 14.274 27.283 16.425 26.06 16.739 L 26.027 16.776 C 25.971 16.932 25.675 17.685 24.972 18.265 C 25.994 17.794 27.365 16.119 28.677 15.346 C 27.518 16.875 27.894 18.686 24.876 19.095 C 24.583 19.151 24.247 19.143 23.891 19.318 C 23.828 19.422 23.636 19.629 23.042 19.901 C 22.711 20.052 22.465 20.229 22.255 20.413 C 23.541 19.757 25.375 20.115 26.595 19.073 C 25.938 21.131 22.349 21.899 20.818 20.951 C 20.501 20.983 19.935 21.048 19.269 21.16 C 19.606 21.207 19.948 21.284 20.291 21.397 C 23.681 22.514 24.618 21.855 25.03 21.633 C 24.316 22.704 21.507 23.81 19.553 22.647 C 17.599 21.483 16.469 21.729 16.469 21.729 C 15.349 22.041 13.991 22.885 13.487 23.978 L 12.56 24.008 C 13.431 22.912 15.568 21.27 18.067 21.114 Z%22 fill=%22rgb(2,4,7)%22></path></g></svg>')" }} />
                                <div className="framer-1xtgpmg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                    {T[224]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-w1hjrk" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8))" }}>
                                  {T[225]}
                                </p>
                              </div>
                              <div className="framer-113syp9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847)", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847))" }}>
                                  <time dateTime="2023-01-01T00:00:00.000Z">
                                    {T[226]}
                                  </time>
                                </p>
                              </div>
                            </div>
                            <div className="framer-puc6sm-container">
                              <VRoot as="div" map={{"b5cbcgrAD":{"cls":"framer-v-14rrenl","name":"Hidden Horizontal"},"hdHzsrpyF":{"cls":"framer-v-t5kp41","name":"Hidden Vertical"},"iLlY2rby8":{"cls":"framer-v-dtr87q","name":"Show Horizontal"},"OMSvRHidC":{"cls":"framer-v-skgkib","name":"Show Vertical"}}} initial="b5cbcgrAD" transition={{"delay":0,"duration":1,"ease":[0.56,0.22,0.05,0.99],"type":"tween"}} appear={{"to":"iLlY2rby8","threshold":0.5,"once":true}} className="framer-sz7Kf framer-t5kp41 framer-v-14rrenl" data-framer-name="Hidden Horizontal" style={{ "--yvgczs": "flex-start", "height": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"backgroundColor":"var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))"}} variants={{"iLlY2rby8":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"},"OMSvRHidC":{"backgroundColor":"var(--token-e5145d68-ee3f-43dc-8638-41389fb43644, rgba(156, 156, 156, 0.2))"}}} className="framer-5nyabp" data-framer-name="Line" style={{ "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }} />
                              </VRoot>
                            </div>
                          </div>
                        </div>
                      </SV>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
              <div className="framer-191pcuc-container">
                <SV c="ssr-variant hidden-o8ajoo" show={["desktop","phone"]}>
                  <section className="framer-azsrl framer-LubW4 framer-1m7l3gw framer-v-1m7l3gw" data-framer-name="Desktop" style={{ "width": "100%" }}>
                    <div className="framer-1fq9aj0" data-framer-name="Inside Container">
                      <div className="framer-t0gxtr" data-framer-name="Label / Heading">
                        <div className="framer-nqgxp3" data-framer-name="Filler" />
                        <div className="framer-srsset" data-framer-name="Label / Heading">
                          <div className="framer-17ouwp8-container">
                            <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                              <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                  {T[227]}
                                </p>
                              </div>
                            </div>
                          </div>
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-alignment": "left" } }, segs: [T[228]] }]} className="framer-3j1snh" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                        </div>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-151hr3l-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                          <VRoot as="a" map={{"jinEk1yag":{"cls":"framer-v-q8hg74","name":"Desktop - Right"},"oFaK7E_Aw":{"cls":"framer-v-8wbf3d","name":"Phone Left"},"RVD7A0_PA":{"cls":"framer-v-ra0to2","name":"Desktop - Left"},"UFuPupHWY":{"cls":"framer-v-ls2zup","name":"Phone Right"}}} initial="jinEk1yag" transition={{"delay":0,"duration":0.36,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["jinEk1yag","RVD7A0_PA"]} hoverNames={{"jinEk1yag-hover":"Desktop Right Arrow","RVD7A0_PA-hover":"Desktop Left Arrow"}} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-q8hg74 framer-ghew07" data-framer-name="Desktop - Right" href="./journal" to="/journal">
                            <div className="framer-1dzfdpz" data-framer-name="Text">
                              <VEl as="div" base={{"opacity":1}} variants={{"jinEk1yag-hover":{"opacity":0},"RVD7A0_PA-hover":{"opacity":0}}} className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "1", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                  {T[229]}
                                </p>
                              </VEl>
                              <VEl as="div" base={{"opacity":0}} variants={{"jinEk1yag-hover":{"opacity":1},"RVD7A0_PA-hover":{"opacity":1}}} className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                  {T[230]}
                                </p>
                              </VEl>
                            </div>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":1}} variants={{"jinEk1yag-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95},"RVD7A0_PA-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95}}} className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                              <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                            </VEl>
                          </VRoot>
                        </InView>
                      </div>
                      <div className="framer-10d2acw">
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":0.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                          <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/fewer-projects-more-attention" style={{ "width": "100%" }} to="/journal/fewer-projects-more-attention">
                            <div className="framer-1mffi2y" data-framer-name="Category / Image">
                              <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[231]}
                                </p>
                              </div>
                              <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.4336198662846227", "transform": "none" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[232]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.4336198662846227", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[233]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                              </div>
                            </div>
                            <div className="framer-3pqa2g" data-framer-name="Title / Date">
                              <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                  {T[234]}
                                </p>
                              </div>
                              <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  <time dateTime="2026-06-15T00:00:00.000Z">
                                    {T[235]}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </VRoot>
                        </InView>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":0.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                          <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/awards-dont-build-brands" style={{ "width": "100%" }} to="/journal/awards-dont-build-brands">
                            <div className="framer-1mffi2y" data-framer-name="Category / Image">
                              <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[236]}
                                </p>
                              </div>
                              <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.7533333333333333", "transform": "none" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[237]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.7533333333333333", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[238]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                              </div>
                            </div>
                            <div className="framer-3pqa2g" data-framer-name="Title / Date">
                              <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                  {T[239]}
                                </p>
                              </div>
                              <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  <time dateTime="2026-05-05T00:00:00.000Z">
                                    {T[240]}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </VRoot>
                        </InView>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":0.5,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                          <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/why-we-quote-fixed" style={{ "width": "100%" }} to="/journal/why-we-quote-fixed">
                            <div className="framer-1mffi2y" data-framer-name="Category / Image">
                              <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[241]}
                                </p>
                              </div>
                              <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.7770034843205575", "transform": "none" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[242]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.7770034843205575", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[243]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                              </div>
                            </div>
                            <div className="framer-3pqa2g" data-framer-name="Title / Date">
                              <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                  {T[244]}
                                </p>
                              </div>
                              <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  <time dateTime="2026-04-03T00:00:00.000Z">
                                    {T[245]}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </VRoot>
                        </InView>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":0.6,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                          <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/the-best-type-is-invisible" style={{ "width": "100%" }} to="/journal/the-best-type-is-invisible">
                            <div className="framer-1mffi2y" data-framer-name="Category / Image">
                              <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[246]}
                                </p>
                              </div>
                              <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.753062224399804", "transform": "none" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[247]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.753062224399804", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[248]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                              </div>
                            </div>
                            <div className="framer-3pqa2g" data-framer-name="Title / Date">
                              <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                  {T[249]}
                                </p>
                              </div>
                              <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  <time dateTime="2026-03-20T00:00:00.000Z">
                                    {T[250]}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </VRoot>
                        </InView>
                      </div>
                    </div>
                  </section>
                </SV>
                <SV c="ssr-variant hidden-ynarf2" show={["tablet","phone"]}>
                  <section className="framer-azsrl framer-LubW4 framer-1m7l3gw framer-v-ld2pkr" data-framer-name="Tablet" style={{ "width": "100%" }}>
                    <div className="framer-1fq9aj0" data-framer-name="Inside Container">
                      <div className="framer-t0gxtr" data-framer-name="Label / Heading">
                        <div className="framer-nqgxp3" data-framer-name="Filler" />
                        <div className="framer-srsset" data-framer-name="Label / Heading">
                          <div className="framer-17ouwp8-container">
                            <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                              <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                  {T[251]}
                                </p>
                              </div>
                            </div>
                          </div>
                          <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-alignment": "left" } }, segs: [T[252]] }]} className="framer-3j1snh" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                        </div>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-151hr3l-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                          <VRoot as="a" map={{"jinEk1yag":{"cls":"framer-v-q8hg74","name":"Desktop - Right"},"oFaK7E_Aw":{"cls":"framer-v-8wbf3d","name":"Phone Left"},"RVD7A0_PA":{"cls":"framer-v-ra0to2","name":"Desktop - Left"},"UFuPupHWY":{"cls":"framer-v-ls2zup","name":"Phone Right"}}} initial="jinEk1yag" transition={{"delay":0,"duration":0.36,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["jinEk1yag","RVD7A0_PA"]} hoverNames={{"jinEk1yag-hover":"Desktop Right Arrow","RVD7A0_PA-hover":"Desktop Left Arrow"}} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-q8hg74 framer-ghew07" data-framer-name="Desktop - Right" href="./journal" to="/journal">
                            <div className="framer-1dzfdpz" data-framer-name="Text">
                              <VEl as="div" base={{"opacity":1}} variants={{"jinEk1yag-hover":{"opacity":0},"RVD7A0_PA-hover":{"opacity":0}}} className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "1", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                  {T[253]}
                                </p>
                              </VEl>
                              <VEl as="div" base={{"opacity":0}} variants={{"jinEk1yag-hover":{"opacity":1},"RVD7A0_PA-hover":{"opacity":1}}} className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                  {T[254]}
                                </p>
                              </VEl>
                            </div>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":1}} variants={{"jinEk1yag-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95},"RVD7A0_PA-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95}}} className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                              <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                            </VEl>
                          </VRoot>
                        </InView>
                      </div>
                      <div className="framer-10d2acw">
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":0.7,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                          <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/fewer-projects-more-attention" style={{ "width": "100%" }} to="/journal/fewer-projects-more-attention">
                            <div className="framer-1mffi2y" data-framer-name="Category / Image">
                              <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[255]}
                                </p>
                              </div>
                              <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.4336198662846227", "transform": "none" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[256]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.4336198662846227", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[257]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                              </div>
                            </div>
                            <div className="framer-3pqa2g" data-framer-name="Title / Date">
                              <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                  {T[258]}
                                </p>
                              </div>
                              <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  <time dateTime="2026-06-15T00:00:00.000Z">
                                    {T[259]}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </VRoot>
                        </InView>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":0.8,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                          <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/awards-dont-build-brands" style={{ "width": "100%" }} to="/journal/awards-dont-build-brands">
                            <div className="framer-1mffi2y" data-framer-name="Category / Image">
                              <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[260]}
                                </p>
                              </div>
                              <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.7533333333333333", "transform": "none" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[261]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.7533333333333333", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[262]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                              </div>
                            </div>
                            <div className="framer-3pqa2g" data-framer-name="Title / Date">
                              <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                  {T[263]}
                                </p>
                              </div>
                              <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  <time dateTime="2026-05-05T00:00:00.000Z">
                                    {T[264]}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </VRoot>
                        </InView>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":0.9,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                          <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/why-we-quote-fixed" style={{ "width": "100%" }} to="/journal/why-we-quote-fixed">
                            <div className="framer-1mffi2y" data-framer-name="Category / Image">
                              <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[265]}
                                </p>
                              </div>
                              <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.7770034843205575", "transform": "none" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[266]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.7770034843205575", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[267]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                              </div>
                            </div>
                            <div className="framer-3pqa2g" data-framer-name="Title / Date">
                              <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                  {T[268]}
                                </p>
                              </div>
                              <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  <time dateTime="2026-04-03T00:00:00.000Z">
                                    {T[269]}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </VRoot>
                        </InView>
                        <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                          <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/the-best-type-is-invisible" style={{ "width": "100%" }} to="/journal/the-best-type-is-invisible">
                            <div className="framer-1mffi2y" data-framer-name="Category / Image">
                              <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  {T[270]}
                                </p>
                              </div>
                              <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.753062224399804", "transform": "none" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[271]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                                <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.753062224399804", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                  <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                    <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[272]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                  </div>
                                </VEl>
                              </div>
                            </div>
                            <div className="framer-3pqa2g" data-framer-name="Title / Date">
                              <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                  {T[273]}
                                </p>
                              </div>
                              <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                  <time dateTime="2026-03-20T00:00:00.000Z">
                                    {T[274]}
                                  </time>
                                </p>
                              </div>
                            </div>
                          </VRoot>
                        </InView>
                      </div>
                    </div>
                  </section>
                </SV>
              </div>
            </SV>
            <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
              <div className="framer-191pcuc-container">
                <section className="framer-azsrl framer-LubW4 framer-1m7l3gw framer-v-so4lz9" data-framer-name="Phone" style={{ "width": "100%" }}>
                  <div className="framer-1fq9aj0" data-framer-name="Inside Container">
                    <div className="framer-t0gxtr" data-framer-name="Label / Heading">
                      <div className="framer-srsset" data-framer-name="Label / Heading">
                        <div className="framer-17ouwp8-container">
                          <div className="framer-Cuyir framer-Me6vv framer-mi0u4 framer-v-mi0u4" data-framer-name="Label">
                            <div className="framer-moe5to" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-fgjj4TIuY-gQb2X9aVh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-fgjj4TIuY-gQb2X9aVh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-fgjj4TIuY-gQb2X9aVh))" }}>
                                {T[275]}
                              </p>
                            </div>
                          </div>
                        </div>
                        <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-alignment": "left" } }, segs: [T[276]] }]} className="framer-3j1snh" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                      </div>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-151hr3l-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                        <VRoot as="a" map={{"jinEk1yag":{"cls":"framer-v-q8hg74","name":"Desktop - Right"},"oFaK7E_Aw":{"cls":"framer-v-8wbf3d","name":"Phone Left"},"RVD7A0_PA":{"cls":"framer-v-ra0to2","name":"Desktop - Left"},"UFuPupHWY":{"cls":"framer-v-ls2zup","name":"Phone Right"}}} initial="jinEk1yag" transition={{"delay":0,"duration":0.36,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["jinEk1yag","RVD7A0_PA"]} hoverNames={{"jinEk1yag-hover":"Desktop Right Arrow","RVD7A0_PA-hover":"Desktop Left Arrow"}} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-q8hg74 framer-ghew07" data-framer-name="Desktop - Right" href="./journal" to="/journal">
                          <div className="framer-1dzfdpz" data-framer-name="Text">
                            <VEl as="div" base={{"opacity":1}} variants={{"jinEk1yag-hover":{"opacity":0},"RVD7A0_PA-hover":{"opacity":0}}} className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "1", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                {T[277]}
                              </p>
                            </VEl>
                            <VEl as="div" base={{"opacity":0}} variants={{"jinEk1yag-hover":{"opacity":1},"RVD7A0_PA-hover":{"opacity":1}}} className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "opacity": "0", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                                {T[278]}
                              </p>
                            </VEl>
                          </div>
                          <VEl as="div" base={{"borderBottomLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":1}} variants={{"jinEk1yag-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95},"RVD7A0_PA-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95}}} className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                            <svg className="framer-ab47M framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#2903821725\"></use>" }} />
                          </VEl>
                        </VRoot>
                      </InView>
                    </div>
                    <div className="framer-10d2acw">
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":1.1,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                        <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/fewer-projects-more-attention" style={{ "width": "100%" }} to="/journal/fewer-projects-more-attention">
                          <div className="framer-1mffi2y" data-framer-name="Category / Image">
                            <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                {T[279]}
                              </p>
                            </div>
                            <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.4336198662846227", "transform": "none" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[280]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                </div>
                              </VEl>
                              <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.4336198662846227", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[281]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                </div>
                              </VEl>
                            </div>
                          </div>
                          <div className="framer-3pqa2g" data-framer-name="Title / Date">
                            <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                {T[282]}
                              </p>
                            </div>
                            <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                <time dateTime="2026-06-15T00:00:00.000Z">
                                  {T[283]}
                                </time>
                              </p>
                            </div>
                          </div>
                        </VRoot>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":1.2,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                        <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/awards-dont-build-brands" style={{ "width": "100%" }} to="/journal/awards-dont-build-brands">
                          <div className="framer-1mffi2y" data-framer-name="Category / Image">
                            <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                {T[284]}
                              </p>
                            </div>
                            <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.7533333333333333", "transform": "none" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[285]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                </div>
                              </VEl>
                              <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.7533333333333333", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[286]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                </div>
                              </VEl>
                            </div>
                          </div>
                          <div className="framer-3pqa2g" data-framer-name="Title / Date">
                            <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                {T[287]}
                              </p>
                            </div>
                            <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                <time dateTime="2026-05-05T00:00:00.000Z">
                                  {T[288]}
                                </time>
                              </p>
                            </div>
                          </div>
                        </VRoot>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":1.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                        <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/why-we-quote-fixed" style={{ "width": "100%" }} to="/journal/why-we-quote-fixed">
                          <div className="framer-1mffi2y" data-framer-name="Category / Image">
                            <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                {T[289]}
                              </p>
                            </div>
                            <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.7770034843205575", "transform": "none" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[290]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                </div>
                              </VEl>
                              <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.7770034843205575", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[291]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                </div>
                              </VEl>
                            </div>
                          </div>
                          <div className="framer-3pqa2g" data-framer-name="Title / Date">
                            <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                {T[292]}
                              </p>
                            </div>
                            <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                <time dateTime="2026-04-03T00:00:00.000Z">
                                  {T[293]}
                                </time>
                              </p>
                            </div>
                          </div>
                        </VRoot>
                      </InView>
                      <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"transition":{"delay":1.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"once":true,"threshold":0,"target":1}} className="framer-ggx1b3-container" data-framer-cursor="a8ccln" style={{ "willChange": "transform", "opacity": "0", "transform": "translateY(40px)" }}>
                        <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/the-best-type-is-invisible" style={{ "width": "100%" }} to="/journal/the-best-type-is-invisible">
                          <div className="framer-1mffi2y" data-framer-name="Category / Image">
                            <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                {T[294]}
                              </p>
                            </div>
                            <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.753062224399804", "transform": "none" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[295]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                </div>
                              </VEl>
                              <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.753062224399804", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[296]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                                </div>
                              </VEl>
                            </div>
                          </div>
                          <div className="framer-3pqa2g" data-framer-name="Title / Date">
                            <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                                {T[297]}
                              </p>
                            </div>
                            <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                              <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                <time dateTime="2026-03-20T00:00:00.000Z">
                                  {T[298]}
                                </time>
                              </p>
                            </div>
                          </div>
                        </VRoot>
                      </InView>
                    </div>
                  </div>
                </section>
              </div>
            </SV>
            <SV c="ssr-variant hidden-n4shxz" show={["desktop","tablet"]}>
              <div className="framer-vmd0ea-container">
                <SV c="ssr-variant hidden-o8ajoo" show={["desktop","phone"]}>
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
                                  {T[299]}
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
                                {T[300]}
                                <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                  {T[301]}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="framer-9qm67l-container">
                            <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                              <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[302]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                </div>
                              </div>
                              <div className="framer-lpw2kj" data-framer-name="Name / Role">
                                <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p data-lys-logo="" className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                    {T[303]}
                                  </p>
                                </div>
                                <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                    {T[304]}
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
                              <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[305], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[306] }, T[307]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                              <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[308], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[309] }, T[310]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                            </div>
                            <div className="framer-behbyg" data-framer-name="Form / Contact Info">
                              <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-13sow98-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                                <VRoot as="div" map={{"ecW7wXnOV":{"cls":"framer-v-hothbd","name":"Error"},"Esh2uhvll":{"cls":"framer-v-5vpfx1","name":"Success"},"NgDnrA0wF":{"cls":"framer-v-11230cp","name":"Default"},"SHEQP1pE0":{"cls":"framer-v-99qclq","name":"Loading"}}} initial="NgDnrA0wF" transition={{"delay":0,"duration":0.6,"ease":[0.87,0,0.13,1],"type":"tween"}} events={{"loading":"SHEQP1pE0","error":"ecW7wXnOV","success":"Esh2uhvll"}} className="framer-KEC63 framer-khCxy framer-QoPvp framer-xYquH framer-11230cp framer-v-11230cp" data-framer-name="Default" style={{ "maxWidth": "100%", "width": "100%" }}>
                                  <VEl as="div" base={{"opacity":0}} variants={{"SHEQP1pE0":{"opacity":1}}} className="framer-1i55y59-container" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                    <div className="framer-pEZXs framer-7sj87n framer-v-7sj87n" data-framer-name="Spinner">
                                      <div className="framer-1yqlm52" data-framer-name="Spinner" style={{ "mask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add", "WebkitMask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add" }}>
                                        <div className="framer-1m1l9lh" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "50%", "borderBottomRightRadius": "50%", "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%" }} />
                                      </div>
                                    </div>
                                  </VEl>
                                  <FormFx kind="studio" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                    <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                      <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                        <label className="framer-myo4nu" data-framer-name="Name">
                                          <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                              {T[311]}
                                            </p>
                                          </div>
                                          <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                            <input type="text" required name="Name" placeholder={T[312]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                          </div>
                                        </label>
                                        <label className="framer-c41om3" data-framer-name="Company">
                                          <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                              {T[313]}
                                            </p>
                                          </div>
                                          <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                            <input type="text" name="Company" placeholder={T[314]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                          </div>
                                        </label>
                                      </div>
                                      <label className="framer-ausbnb" data-framer-name="Help With">
                                        <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                            {T[315]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                          <input type="text" name="I need help with" placeholder={T[316]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                        </div>
                                      </label>
                                      <label className="framer-3t0b9d" data-framer-name="Pitch">
                                        <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                            {T[317]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                          <textarea required name="Pitch" placeholder={T[318]} className="framer-form-input" />
                                        </div>
                                      </label>
                                      <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                        <label className="framer-mvvosq" data-framer-name="Budget">
                                          <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                              {T[319]}
                                            </p>
                                          </div>
                                          <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                            <input type="text" name="Budget" placeholder={T[320]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                          </div>
                                        </label>
                                        <label className="framer-78o1yk" data-framer-name="Start">
                                          <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                              {T[321]}
                                            </p>
                                          </div>
                                          <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                            <select name="Start" required className="framer-form-input">
                                              <option value="" disabled>
                                                {T[322]}
                                              </option>
                                              <option value="ASAP">
                                                {T[323]}
                                              </option>
                                              <option value="Within a month">
                                                {T[324]}
                                              </option>
                                              <option value="This quarter">
                                                {T[325]}
                                              </option>
                                              <option value="Just exploring">
                                                {T[326]}
                                              </option>
                                            </select>
                                          </div>
                                        </label>
                                      </div>
                                      <label className="framer-u8bpr7" data-framer-name="Email">
                                        <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                            {T[327]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                          <input type="email" required name="Email" placeholder={T[328]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                        </div>
                                      </label>
                                    </VEl>
                                    <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                      <div className="framer-mrpb47" data-framer-name="Legal">
                                        <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                            {T[329]}
                                            <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./terms-conditions" to="/terms-conditions">
                                              {T[330]}
                                            </Lk>
                                            {T[331]}
                                            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                              {T[332]}
                                            </span>
                                            <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./privacy-policy" to="/privacy-policy">
                                              {T[333]}
                                            </Lk>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="framer-16ay88s-container">
                                        <FormButtonFx label={T[334]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
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
                                        {T[335]}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                      <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:melyssa.kekelipro@gmail.com" target="_blank" rel="">
                                        {T[336]}
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
                                    {T[337]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-re0eey" data-framer-name="Text">
                                <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[338]}
                                  </p>
                                </div>
                                <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[339]}
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
                                    {T[340]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-re0eey" data-framer-name="Text">
                                <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[341]}
                                  </p>
                                </div>
                                <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[342]}
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
                                    {T[343]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-re0eey" data-framer-name="Text">
                                <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[344]}
                                  </p>
                                </div>
                                <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[345]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </InView>
                        </div>
                      </div>
                    </div>
                  </section>
                </SV>
                <SV c="ssr-variant hidden-ynarf2" show={["tablet","phone"]}>
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
                                  {T[346]}
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
                                {T[347]}
                                <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                  {T[348]}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="framer-9qm67l-container">
                            <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                              <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                                <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                  <img decoding="async" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[349]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                                </div>
                              </div>
                              <div className="framer-lpw2kj" data-framer-name="Name / Role">
                                <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p data-lys-logo="" className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                    {T[350]}
                                  </p>
                                </div>
                                <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                    {T[351]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="framer-1vtoytd" data-framer-name="Middle">
                          <div className="framer-sec3t8" data-framer-name="Heading / Form">
                            <div className="framer-11w2tx5" data-framer-name="Heading / Description">
                              <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[352], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[353] }, T[354]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                              <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[355], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[356] }, T[357]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                            </div>
                            <div className="framer-behbyg" data-framer-name="Form / Contact Info">
                              <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-13sow98-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                                <VRoot as="div" map={{"ecW7wXnOV":{"cls":"framer-v-hothbd","name":"Error"},"Esh2uhvll":{"cls":"framer-v-5vpfx1","name":"Success"},"NgDnrA0wF":{"cls":"framer-v-11230cp","name":"Default"},"SHEQP1pE0":{"cls":"framer-v-99qclq","name":"Loading"}}} initial="NgDnrA0wF" transition={{"delay":0,"duration":0.6,"ease":[0.87,0,0.13,1],"type":"tween"}} events={{"loading":"SHEQP1pE0","error":"ecW7wXnOV","success":"Esh2uhvll"}} className="framer-KEC63 framer-khCxy framer-QoPvp framer-xYquH framer-11230cp framer-v-11230cp" data-framer-name="Default" style={{ "maxWidth": "100%", "width": "100%" }}>
                                  <VEl as="div" base={{"opacity":0}} variants={{"SHEQP1pE0":{"opacity":1}}} className="framer-1i55y59-container" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                    <div className="framer-pEZXs framer-7sj87n framer-v-7sj87n" data-framer-name="Spinner">
                                      <div className="framer-1yqlm52" data-framer-name="Spinner" style={{ "mask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add", "WebkitMask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add" }}>
                                        <div className="framer-1m1l9lh" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "50%", "borderBottomRightRadius": "50%", "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%" }} />
                                      </div>
                                    </div>
                                  </VEl>
                                  <FormFx kind="studio" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                    <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                      <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                        <label className="framer-myo4nu" data-framer-name="Name">
                                          <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                              {T[358]}
                                            </p>
                                          </div>
                                          <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                            <input type="text" required name="Name" placeholder={T[359]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                          </div>
                                        </label>
                                        <label className="framer-c41om3" data-framer-name="Company">
                                          <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                              {T[360]}
                                            </p>
                                          </div>
                                          <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                            <input type="text" name="Company" placeholder={T[361]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                          </div>
                                        </label>
                                      </div>
                                      <label className="framer-ausbnb" data-framer-name="Help With">
                                        <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                            {T[362]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                          <input type="text" name="I need help with" placeholder={T[363]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                        </div>
                                      </label>
                                      <label className="framer-3t0b9d" data-framer-name="Pitch">
                                        <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                            {T[364]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                          <textarea required name="Pitch" placeholder={T[365]} className="framer-form-input" />
                                        </div>
                                      </label>
                                      <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                        <label className="framer-mvvosq" data-framer-name="Budget">
                                          <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                              {T[366]}
                                            </p>
                                          </div>
                                          <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                            <input type="text" name="Budget" placeholder={T[367]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                          </div>
                                        </label>
                                        <label className="framer-78o1yk" data-framer-name="Start">
                                          <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                            <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                              {T[368]}
                                            </p>
                                          </div>
                                          <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                            <select name="Start" required className="framer-form-input">
                                              <option value="" disabled>
                                                {T[369]}
                                              </option>
                                              <option value="ASAP">
                                                {T[370]}
                                              </option>
                                              <option value="Within a month">
                                                {T[371]}
                                              </option>
                                              <option value="This quarter">
                                                {T[372]}
                                              </option>
                                              <option value="Just exploring">
                                                {T[373]}
                                              </option>
                                            </select>
                                          </div>
                                        </label>
                                      </div>
                                      <label className="framer-u8bpr7" data-framer-name="Email">
                                        <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                            {T[374]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                          <input type="email" required name="Email" placeholder={T[375]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                        </div>
                                      </label>
                                    </VEl>
                                    <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--1jqv5zi": "1 0 0px", "--tze0fu": "1px", "--xa888v": "row" }}>
                                      <div className="framer-mrpb47" data-framer-name="Legal">
                                        <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                            {T[376]}
                                            <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./terms-conditions" to="/terms-conditions">
                                              {T[377]}
                                            </Lk>
                                            {T[378]}
                                            <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                              {T[379]}
                                            </span>
                                            <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./privacy-policy" to="/privacy-policy">
                                              {T[380]}
                                            </Lk>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="framer-16ay88s-container">
                                        <FormButtonFx label={T[381]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
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
                                        {T[382]}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                    <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                      <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:melyssa.kekelipro@gmail.com" target="_blank" rel="">
                                        {T[383]}
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
                                    {T[384]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-re0eey" data-framer-name="Text">
                                <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[385]}
                                  </p>
                                </div>
                                <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[386]}
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
                                    {T[387]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-re0eey" data-framer-name="Text">
                                <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[388]}
                                  </p>
                                </div>
                                <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[389]}
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
                                    {T[390]}
                                  </p>
                                </div>
                              </div>
                              <div className="framer-re0eey" data-framer-name="Text">
                                <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    {T[391]}
                                  </p>
                                </div>
                                <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                    {T[392]}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </InView>
                        </div>
                      </div>
                    </div>
                  </section>
                </SV>
              </div>
            </SV>
            <SV c="ssr-variant hidden-o8ajoo hidden-ynarf2" show={["phone"]}>
              <div className="framer-vmd0ea-container">
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
                                {T[393]}
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
                              {T[394]}
                              <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                {T[395]}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="framer-9qm67l-container">
                          <div className="framer-QRwP7 framer-QoPvp framer-1kijlsy framer-v-1kijlsy" data-framer-name="Author" style={{ "width": "100%" }}>
                            <div className="framer-1ldgocu" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={84} height={84} src="/assets/images/I0Zin8u1THTGGeYzoOdXdo8LGQ8.jpg" alt={T[396]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                              </div>
                            </div>
                            <div className="framer-lpw2kj" data-framer-name="Name / Role">
                              <div className="framer-1mvw4z9" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-MmOfoxxQp-TJ9zZTo1g)", "--variable-reference-MmOfoxxQp-TJ9zZTo1g": "var(--token-33c8dbd0-eb94-4e90-8099-e7a3fee4ad2f, rgb(255, 255, 255))", "transform": "none" }}>
                                <p data-lys-logo="" className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-MmOfoxxQp-TJ9zZTo1g))" }}>
                                  {T[397]}
                                </p>
                              </div>
                              <div className="framer-t6pkcg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-DrFk2xWcP-TJ9zZTo1g)", "--variable-reference-DrFk2xWcP-TJ9zZTo1g": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-DrFk2xWcP-TJ9zZTo1g))" }}>
                                  {T[398]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="framer-1vtoytd" data-framer-name="Middle">
                        <div className="framer-sec3t8" data-framer-name="Heading / Form">
                          <div className="framer-11w2tx5" data-framer-name="Heading / Description">
                            <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.2,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":1.1,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "h2", attrs: { "className": "framer-text framer-styles-preset-1c0t51l", "data-styles-preset": "iLKnB8A0V", "dir": "auto", style: { "--framer-text-color": "var(--extracted-1of0zx5, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[399], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1qn201a, var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3)))" } }, text: T[400] }, T[401]] }]} className="framer-1xbm67e" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--extracted-1qn201a": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }} />
                            <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":10},"repeat":false,"startDelay":0.5,"threshold":0,"tokenization":"line","transition":{"delay":0.2,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" } }, segs: [T[402], { tag: "span", attrs: { "className": "framer-text", style: { "--framer-text-color": "var(--extracted-1w3ko1f, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" } }, text: T[403] }, T[404]] }]} className="framer-1ppt5ho" data-framer-component-type="RichTextContainer" style={{ "--extracted-1w3ko1f": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }} />
                          </div>
                          <div className="framer-behbyg" data-framer-name="Form / Contact Info">
                            <InView as="div" fx={{"enter":{"opacity":0,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"transition":{"bounce":0.1,"delay":0.6,"duration":1.2,"type":"spring"},"once":true,"threshold":0,"target":1}} className="framer-13sow98-container" style={{ "willChange": "transform", "opacity": "0", "transform": "none" }}>
                              <VRoot as="div" map={{"ecW7wXnOV":{"cls":"framer-v-hothbd","name":"Error"},"Esh2uhvll":{"cls":"framer-v-5vpfx1","name":"Success"},"NgDnrA0wF":{"cls":"framer-v-11230cp","name":"Default"},"SHEQP1pE0":{"cls":"framer-v-99qclq","name":"Loading"}}} initial="NgDnrA0wF" transition={{"delay":0,"duration":0.6,"ease":[0.87,0,0.13,1],"type":"tween"}} events={{"loading":"SHEQP1pE0","error":"ecW7wXnOV","success":"Esh2uhvll"}} className="framer-KEC63 framer-khCxy framer-QoPvp framer-xYquH framer-11230cp framer-v-11230cp" data-framer-name="Default" style={{ "maxWidth": "100%", "width": "100%" }}>
                                <VEl as="div" base={{"opacity":0}} variants={{"SHEQP1pE0":{"opacity":1}}} className="framer-1i55y59-container" style={{ "opacity": "0", "transform": "translate(-50%, -50%)" }}>
                                  <div className="framer-pEZXs framer-7sj87n framer-v-7sj87n" data-framer-name="Spinner">
                                    <div className="framer-1yqlm52" data-framer-name="Spinner" style={{ "mask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add", "WebkitMask": "url('/assets/icons/aUWUtcn3fJZH3ENCarDzP6b2ryQ.svg') alpha no-repeat center / cover add" }}>
                                      <div className="framer-1m1l9lh" style={{ "backgroundColor": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "borderBottomLeftRadius": "50%", "borderBottomRightRadius": "50%", "borderTopLeftRadius": "50%", "borderTopRightRadius": "50%" }} />
                                    </div>
                                  </div>
                                </VEl>
                                <FormFx kind="studio" vel base={{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"}} variants={{"ecW7wXnOV":{"filter":"none","opacity":1,"scale":1,"WebkitFilter":"none"},"Esh2uhvll":{"filter":"blur(5px)","opacity":0.35,"scale":0.95,"WebkitFilter":"blur(5px)"},"SHEQP1pE0":{"filter":"blur(5px)","scale":0.95,"WebkitFilter":"blur(5px)"}}} className="framer-3onib8" data-highlight="true" method="post" data-framer-form="" style={{ "filter": "none", "WebkitFilter": "none", "opacity": "1", "transform": "none" }}>
                                  <VEl as="div" base={{"opacity":1}} variants={{"ecW7wXnOV":{"opacity":0.5}}} className="framer-17d941x" data-framer-name="Fields" style={{ "opacity": "1" }}>
                                    <div className="framer-1c5kg59" data-framer-name="Name / Company" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                      <label className="framer-myo4nu" data-framer-name="Name">
                                        <div className="framer-fvxa39" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                            {T[405]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-d692lq framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                          <input type="text" required name="Name" placeholder={T[406]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                        </div>
                                      </label>
                                      <label className="framer-c41om3" data-framer-name="Company">
                                        <div className="framer-1ghdy9u" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                            {T[407]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-er8fe framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                          <input type="text" name="Company" placeholder={T[408]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                        </div>
                                      </label>
                                    </div>
                                    <label className="framer-ausbnb" data-framer-name="Help With">
                                      <div className="framer-17k9ytc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[409]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-1qo6tv9 framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="text" name="I need help with" placeholder={T[410]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                    <label className="framer-3t0b9d" data-framer-name="Pitch">
                                      <div className="framer-fgq56l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                          {T[411]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-9t7fli framer-form-textarea-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                        <textarea required name="Pitch" placeholder={T[412]} className="framer-form-input" />
                                      </div>
                                    </label>
                                    <div className="framer-1lq4m9b" data-framer-name="Budget & Timeline" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                      <label className="framer-mvvosq" data-framer-name="Budget">
                                        <div className="framer-16h4pdc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                            {T[413]}
                                          </p>
                                        </div>
                                        <div className="framer-form-text-input framer-form-input-wrapper framer-km6j1d framer-form-text-input-type" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                          <input type="text" name="Budget" placeholder={T[414]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                        </div>
                                      </label>
                                      <label className="framer-78o1yk" data-framer-name="Start">
                                        <div className="framer-k2st13" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "transform": "none" }}>
                                          <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94))" }}>
                                            {T[415]}
                                          </p>
                                        </div>
                                        <div className="framer-form-input-wrapper framer-form-select-wrapper framer-btzrlz" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)", "--framer-input-icon-color": "rgb(153, 153, 153)", "--framer-input-invalid-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb)" }}>
                                          <select name="Start" required className="framer-form-input">
                                            <option value="" disabled>
                                              {T[416]}
                                            </option>
                                            <option value="ASAP">
                                              {T[417]}
                                            </option>
                                            <option value="Within a month">
                                              {T[418]}
                                            </option>
                                            <option value="This quarter">
                                              {T[419]}
                                            </option>
                                            <option value="Just exploring">
                                              {T[420]}
                                            </option>
                                          </select>
                                        </div>
                                      </label>
                                    </div>
                                    <label className="framer-u8bpr7" data-framer-name="Email">
                                      <div className="framer-1ikczjy" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                          {T[421]}
                                        </p>
                                      </div>
                                      <div className="framer-form-text-input framer-form-input-wrapper framer-e811z7" style={{ "--corner-shape-fallback": "0.752", "--framer-input-background": "rgba(10, 10, 10, 0.75)", "--framer-input-border-radius-bottom-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-bottom-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-left": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-border-radius-top-right": "calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "--framer-input-corner-shape": "superellipse(1.5)", "--framer-input-font-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-input-icon-mask-image": "none", "--framer-input-placeholder-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                                        <input type="email" required name="Email" placeholder={T[422]} className="framer-form-input framer-form-input-empty" defaultValue="" />
                                      </div>
                                    </label>
                                  </VEl>
                                  <div className="framer-nxx5hd" data-framer-name="Legal / Submit" style={{ "--tze0fu": "100%", "--xa888v": "column" }}>
                                    <div className="framer-mrpb47" data-framer-name="Legal">
                                      <div className="framer-1mzwcwg" data-framer-component-type="RichTextContainer" style={{ "--extracted-3sq8v0": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "transform": "none" }}>
                                        <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                          {T[423]}
                                          <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./terms-conditions" to="/terms-conditions">
                                            {T[424]}
                                          </Lk>
                                          {T[425]}
                                          <span className="framer-text" style={{ "--framer-text-color": "var(--extracted-3sq8v0, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                                            {T[426]}
                                          </span>
                                          <Lk className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="./privacy-policy" to="/privacy-policy">
                                            {T[427]}
                                          </Lk>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="framer-16ay88s-container">
                                      <FormButtonFx label={T[428]} color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"} textColor={"var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(10, 10, 10))"} style={{"width":"100%"}} />
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
                                      {T[429]}
                                    </a>
                                  </p>
                                </div>
                                <div className="framer-1ejwr34" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                                  <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                    <a className="framer-text framer-styles-preset-3w9o9k" data-styles-preset="ajnWj2z9Q" href="mailto:melyssa.kekelipro@gmail.com" target="_blank" rel="">
                                      {T[430]}
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
                                  {T[431]}
                                </p>
                              </div>
                            </div>
                            <div className="framer-re0eey" data-framer-name="Text">
                              <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[432]}
                                </p>
                              </div>
                              <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                  {T[433]}
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
                                  {T[434]}
                                </p>
                              </div>
                            </div>
                            <div className="framer-re0eey" data-framer-name="Text">
                              <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[435]}
                                </p>
                              </div>
                              <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                  {T[436]}
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
                                  {T[437]}
                                </p>
                              </div>
                            </div>
                            <div className="framer-re0eey" data-framer-name="Text">
                              <div className="framer-qynumf" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-10r2g7l" data-styles-preset="YXSEQA_bn" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255)))" }}>
                                  {T[438]}
                                </p>
                              </div>
                              <div className="framer-127574l" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))", "--framer-paragraph-spacing": "0px", "transform": "none" }}>
                                <p className="framer-text framer-styles-preset-lu6cf5" data-styles-preset="XKitmogp0" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188)))" }}>
                                  {T[439]}
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
        </div>
      </main>
    </div>
  );
}
