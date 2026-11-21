// Généré par scripts/genpage.mjs depuis reference/html/journal.html (D-033) — ne pas modifier à la main : régénérer.
import './Body.css';
import { T } from '@/data/text/journal';
import { Appear } from '@/components/Appear';
import { HideOn } from '@/components/Variants';
import { Lk } from '@/components/Lk';
import { SV } from '@/components/Variants';
import { SmoothScroll } from '@/components/SmoothScroll';
import { TextFx } from '@/components/fx/TextFx';
import { VRoot, VEl } from '@/components/fx/Variant';
import { articles } from '@/data/journal';

const BPS = {"1idsw5c":"desktop","1f0wwcx":"tablet","15bxuw3":"phone","1pvmz1y":"phone","1wjgfnr":"tablet","1e6htkk":"desktop"} as const;
const AP = {"479px2":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.2,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"t46hau":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.3,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"1jg9bh7":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.4,"duration":1.2,"type":"spring"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.4,"duration":1.2,"type":"spring"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":0},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"bounce":0.1,"delay":1.4,"duration":1.2,"type":"spring"},"x":0,"y":0}}},"l7fzdx":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"damping":25,"delay":1,"mass":0.3,"stiffness":120,"type":"spring"},"x":0,"y":0}}},"1goa1hn-0":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.2,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.2,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.2,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}}},"1goa1hn-4":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.6,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.6,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.6,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}}},"1goa1hn-1":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.3,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}}},"1goa1hn-5":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.7,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.7,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.7,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}}},"1goa1hn-2":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.4,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}}},"1goa1hn-6":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.8,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.8,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.8,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}}},"1goa1hn-3":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.5,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.5,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.5,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}}},"1goa1hn-7":{"default":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.9,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"15bxuw3":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.9,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}},"1f0wwcx":{"initial":{"opacity":0.001,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":40},"animate":{"opacity":1,"rotate":0,"rotateX":0,"rotateY":0,"scale":1,"skewX":0,"skewY":0,"transition":{"delay":1.9,"duration":0.85,"ease":[0.215,0.61,0.355,1],"type":"tween"},"x":0,"y":0}}}};

export function Body() {
  return (
    <div data-framer-root="" className="framer-4vxtl framer-yTVl5 framer-AWIXE framer-Me6vv framer-GC3F4 framer-1idsw5c" style={{ "minHeight": "100vh", "width": "auto", "display": "contents" }}>
      <SmoothScroll className="framer-48vjmc-container" data-framer-name="Lenis Smooth Scroll" {...{ name: "Lenis Smooth Scroll" }} />
      <main className="framer-vk992d" data-framer-name="Main">
        <HideOn on={["phone"]}>
        <div className="framer-1papd5a-container hidden-15bxuw3">
          <div className="framer-yXQrW framer-gmtdri framer-v-gmtdri" data-framer-name="Spacer" />
        </div>
        </HideOn>
        <div className="framer-w36nlq" data-framer-name="Content">
          <section className="framer-hsv7p6" data-framer-name="Header">
            <div className="framer-1w6hea" data-framer-name="Inside Container">
              <header className="framer-1tto8yq" data-framer-name="Top">
                <HideOn on={["phone"]}>
                <Appear as="div" spec={AP["479px2"]} bps={BPS} className="framer-479px2-container hidden-15bxuw3" data-framer-appear-id="479px2" style={{ "opacity": "0.001", "transform": "none" }}>
                  <Lk aria-label={T[0]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="./" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                    <div data-framer-name="Logo" className="framer-SHtMX framer-7h3po8" />
                  </Lk>
                </Appear>
                </HideOn>
                <Appear as="div" spec={AP["t46hau"]} bps={BPS} className="framer-t46hau" data-framer-appear-id="t46hau" data-framer-name="Article Count" style={{ "opacity": "0.001", "transform": "none" }}>
                  <div className="framer-mr1if5" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }}>
                      {T[1]}
                    </p>
                  </div>
                  <div className="framer-1wi6erx-container">
                    <div aria-live="polite" style={{ "width": "max-content", "userSelect": "auto" }}>
                      <div className="framer-14j50wt" data-framer-name="Article Count Font">
                        <div className="framer-yejo9x" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                          <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }}>
                            {`(${articles.length})`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Appear>
                <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                  <Appear as="div" spec={AP["1jg9bh7"]} bps={BPS} className="framer-1jg9bh7-container" data-framer-appear-id="1jg9bh7" style={{ "opacity": "0.001", "transform": "none" }}>
                    <div className="framer-w6BnQ framer-yTVl5 framer-Me6vv framer-162pug6 framer-v-162pug6" data-framer-name="Big" style={{ "width": "100%" }}>
                      <div className="framer-14g1br8" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "--extracted-r6o4lv": "var(--variable-reference-XU6EGhHcu-D21Ecyglh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-XU6EGhHcu-D21Ecyglh": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-XU6EGhHcu-D21Ecyglh))" }}>
                          {T[2]}
                        </p>
                      </div>
                    </div>
                  </Appear>
                </SV>
              </header>
              <div className="framer-ljl91v" data-framer-name="Heading">
                <HideOn on={["phone"]}>
                <div className="framer-sg8fmg hidden-15bxuw3" data-framer-name="Filler" />
                </HideOn>
                <div className="framer-1tp47vp" data-framer-name="Heading / Description">
                  <Appear as="div" spec={AP["l7fzdx"]} bps={BPS} className="framer-l7fzdx" data-framer-appear-id="l7fzdx" data-framer-component-type="RichTextContainer" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                    <h1 className="framer-text framer-styles-preset-15kw1n0" data-styles-preset="Tz81QJ8i1" dir="auto">
                      {T[3]}
                    </h1>
                  </Appear>
                  <TextFx as="div" fx={{"effect":{"opacity":0.001,"rotate":0,"scale":1,"skewX":0,"skewY":0,"x":0,"y":15},"repeat":false,"startDelay":1.1,"threshold":0,"tokenization":"line","transition":{"delay":0.1,"duration":0.8,"ease":[0.215,0.61,0.355,1],"type":"tween"},"trigger":"onInView","type":"appear"}} paras={[{ tag: "p", attrs: { "className": "framer-text framer-styles-preset-1l3tbw0", "data-styles-preset": "cZ7bby0gR", "dir": "auto", style: { "--framer-text-alignment": "justify", "--framer-text-color": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))" } }, segs: [T[4], { tag: "span", attrs: { style: { "--framer-text-color": "var(--token-d33926f3-e1ef-47a7-a2fc-872ea608e7c8, rgb(13, 13, 13))" }, "className": "framer-text" }, text: T[5] }] }]} className="framer-8yi7pu" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }} />
                </div>
              </div>
            </div>
          </section>
          <section className="framer-ciy0ua" data-framer-name="Articles">
            <div className="framer-15hfomq" data-framer-name="Inside Container">
              <SV c="ssr-variant hidden-15bxuw3 hidden-1f0wwcx" show={["desktop"]}>
                <div className="framer-1i49lb8" style={{ "gridTemplateColumns": "repeat(4, 1fr)" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "rowGap": "40px", "width": "100%" }}>
                    <Appear as="div" spec={AP["1goa1hn-0"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-0" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/fewer-projects-more-attention" style={{ "width": "100%" }} to="/journal/fewer-projects-more-attention">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[6]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.4336198662846227", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[7]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.4336198662846227", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[8]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[9]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-06-15T00:00:00.000Z">
                                {T[10]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-4"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-4" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/on-saying-no" style={{ "width": "100%" }} to="/journal/on-saying-no">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[11]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.113240418118467", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1278} height={1148} src="/assets/images/k15t4NH13VUuxLJcDCP4aIums.jpg" alt={T[12]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.113240418118467", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1278} height={1148} src="/assets/images/k15t4NH13VUuxLJcDCP4aIums.jpg" alt={T[13]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[14]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-02-18T00:00:00.000Z">
                                {T[15]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <div className="framer-ddrj6j-container" />
                  </div>
                  <div style={{ "display": "flex", "flexDirection": "column", "rowGap": "40px", "width": "100%" }}>
                    <Appear as="div" spec={AP["1goa1hn-1"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-1" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/awards-dont-build-brands" style={{ "width": "100%" }} to="/journal/awards-dont-build-brands">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[16]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.7533333333333333", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[17]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.7533333333333333", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[18]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[19]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-05-05T00:00:00.000Z">
                                {T[20]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-5"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-5" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/the-brief-before-the-brief" style={{ "width": "100%" }} to="/journal/the-brief-before-the-brief">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[21]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.7848432055749129", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={901} height={1148} src="/assets/images/3WFEUak51uY8vHBvH8hhaIvI.jpg" alt={T[22]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.7848432055749129", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={901} height={1148} src="/assets/images/3WFEUak51uY8vHBvH8hhaIvI.jpg" alt={T[23]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[24]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-01-28T00:00:00.000Z">
                                {T[25]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                  </div>
                  <div style={{ "display": "flex", "flexDirection": "column", "rowGap": "40px", "width": "100%" }}>
                    <Appear as="div" spec={AP["1goa1hn-2"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-2" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/why-we-quote-fixed" style={{ "width": "100%" }} to="/journal/why-we-quote-fixed">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[26]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.7770034843205575", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[27]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.7770034843205575", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[28]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[29]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-04-03T00:00:00.000Z">
                                {T[30]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-6"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-6" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/small-looks-expensive" style={{ "width": "100%" }} to="/journal/small-looks-expensive">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[31]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.8", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1632} height={2040} src="/assets/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg" alt={T[32]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.8", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1632} height={2040} src="/assets/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg" alt={T[33]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[34]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-12-12T00:00:00.000Z">
                                {T[35]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                  </div>
                  <div style={{ "display": "flex", "flexDirection": "column", "rowGap": "40px", "width": "100%" }}>
                    <Appear as="div" spec={AP["1goa1hn-3"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-3" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/the-best-type-is-invisible" style={{ "width": "100%" }} to="/journal/the-best-type-is-invisible">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[36]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.753062224399804", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[37]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.753062224399804", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[38]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[39]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-03-20T00:00:00.000Z">
                                {T[40]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-7"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-7" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="qkJaMXuuZ" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-n8zo7t framer-1e4az23" data-framer-name="Desktop" href="./journal/the-founder-is-the-brand" style={{ "width": "100%" }} to="/journal/the-founder-is-the-brand">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[41]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.6666666666666666", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1360} height={2040} src="/assets/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg" alt={T[42]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.6666666666666666", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1360} height={2040} src="/assets/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg" alt={T[43]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[44]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-11-04T00:00:00.000Z">
                                {T[45]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                  </div>
                </div>
              </SV>
              <SV c="ssr-variant hidden-1idsw5c" show={["tablet","phone"]}>
                <div className="framer-1i49lb8" style={{ "gridTemplateColumns": "repeat(2, 1fr)" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "rowGap": "40px", "width": "100%" }}>
                    <Appear as="div" spec={AP["1goa1hn-0"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-0" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/fewer-projects-more-attention" style={{ "width": "100%" }} to="/journal/fewer-projects-more-attention">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[46]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.4336198662846227", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[47]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.4336198662846227", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1501} height={1047} src="/assets/images/QScxeG0hFA9OqTSpKLf3gz2xrk.jpeg" alt={T[48]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[49]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-06-15T00:00:00.000Z">
                                {T[50]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-2"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-2" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/why-we-quote-fixed" style={{ "width": "100%" }} to="/journal/why-we-quote-fixed">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[51]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.7770034843205575", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[52]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.7770034843205575", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={2040} height={1148} src="/assets/images/ZpxY6EqIMMqzzyJ6gL7tXpVEO5E.jpg" alt={T[53]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[54]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-04-03T00:00:00.000Z">
                                {T[55]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-4"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-4" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/on-saying-no" style={{ "width": "100%" }} to="/journal/on-saying-no">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[56]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "1.113240418118467", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1278} height={1148} src="/assets/images/k15t4NH13VUuxLJcDCP4aIums.jpg" alt={T[57]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "1.113240418118467", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1278} height={1148} src="/assets/images/k15t4NH13VUuxLJcDCP4aIums.jpg" alt={T[58]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[59]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-02-18T00:00:00.000Z">
                                {T[60]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-6"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-6" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/small-looks-expensive" style={{ "width": "100%" }} to="/journal/small-looks-expensive">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[61]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.8", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1632} height={2040} src="/assets/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg" alt={T[62]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.8", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1632} height={2040} src="/assets/images/1I2rFExVypdmLtMAuiNjBMIHg.jpg" alt={T[63]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[64]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-12-12T00:00:00.000Z">
                                {T[65]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <div className="framer-ddrj6j-container" />
                  </div>
                  <div style={{ "display": "flex", "flexDirection": "column", "rowGap": "40px", "width": "100%" }}>
                    <Appear as="div" spec={AP["1goa1hn-1"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-1" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/awards-dont-build-brands" style={{ "width": "100%" }} to="/journal/awards-dont-build-brands">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[66]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.7533333333333333", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[67]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.7533333333333333", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={904} height={1200} src="/assets/images/flVP3AWr4maQWn3qiFyeFYgkc.jpeg" alt={T[68]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[69]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-05-05T00:00:00.000Z">
                                {T[70]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-3"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-3" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/the-best-type-is-invisible" style={{ "width": "100%" }} to="/journal/the-best-type-is-invisible">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[71]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.753062224399804", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[72]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.753062224399804", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1537} height={2041} src="/assets/images/6oZOHgmZZVkcK3G0Wiee0kkF5AI.jpg" alt={T[73]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[74]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-03-20T00:00:00.000Z">
                                {T[75]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-5"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-5" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/the-brief-before-the-brief" style={{ "width": "100%" }} to="/journal/the-brief-before-the-brief">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[76]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.7848432055749129", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={901} height={1148} src="/assets/images/3WFEUak51uY8vHBvH8hhaIvI.jpg" alt={T[77]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.7848432055749129", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={901} height={1148} src="/assets/images/3WFEUak51uY8vHBvH8hhaIvI.jpg" alt={T[78]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[79]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2026-01-28T00:00:00.000Z">
                                {T[80]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                    <Appear as="div" spec={AP["1goa1hn-7"]} bps={BPS} className="framer-1goa1hn-container" data-framer-appear-id="1goa1hn-7" data-framer-cursor="a8ccln" style={{ "opacity": "0.001", "transform": "translateY(40px)" }}>
                      <VRoot as="a" map={{"L_gdk_7Fe":{"cls":"framer-v-fcep5","name":"Phone"},"qkJaMXuuZ":{"cls":"framer-v-n8zo7t","name":"Desktop"}}} initial="L_gdk_7Fe" transition={{"delay":0,"duration":0.56,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["qkJaMXuuZ"]} hoverNames={{"qkJaMXuuZ-hover":"Article Card Content"}} className="framer-qXCbS framer-Me6vv framer-yTVl5 framer-n8zo7t framer-v-fcep5 framer-1e4az23" data-framer-name="Phone" href="./journal/the-founder-is-the-brand" style={{ "width": "100%" }} to="/journal/the-founder-is-the-brand">
                        <div className="framer-1mffi2y" data-framer-name="Category / Image">
                          <div className="framer-kdqgfg" data-framer-name="Category" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              {T[81]}
                            </p>
                          </div>
                          <div className="framer-v9hp8k" data-framer-name="Image Container" style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))" }}>
                            <VEl as="div" base={{"filter":"none","scale":1,"WebkitFilter":"none"}} variants={{"qkJaMXuuZ-hover":{"filter":"blur(5px)","scale":1.2,"WebkitFilter":"blur(5px)"}}} className="framer-yme2qk" data-framer-name="Bg Image" draggable={false} style={{ "filter": "none", "WebkitFilter": "none", "height": "auto", "aspectRatio": "0.6666666666666666", "transform": "none" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1360} height={2040} src="/assets/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg" alt={T[82]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                            <VEl as="div" base={{"borderBottomLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}} variants={{"qkJaMXuuZ-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))"}}} className="framer-oqgboy" draggable={false} style={{ "--corner-shape-fallback": "0.752", "cornerShape": "superellipse(1.5)", "height": "auto", "aspectRatio": "0.6666666666666666", "borderBottomLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(10px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "translate(-50%, -50%)" }}>
                              <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                                <img decoding="async" width={1360} height={2040} src="/assets/images/2eiFPxAgnGHeZbpcEWbmMREckg.jpg" alt={T[83]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} draggable={false} />
                              </div>
                            </VEl>
                          </div>
                        </div>
                        <div className="framer-3pqa2g" data-framer-name="Title / Date">
                          <div className="framer-1fg44cf" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto">
                              {T[84]}
                            </p>
                          </div>
                          <div className="framer-1kgjso1" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}>
                            <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-82d92470-f077-4c9d-9673-709d01132847, rgb(104, 104, 104)))" }}>
                              <time dateTime="2025-11-04T00:00:00.000Z">
                                {T[85]}
                              </time>
                            </p>
                          </div>
                        </div>
                      </VRoot>
                    </Appear>
                  </div>
                </div>
              </SV>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
