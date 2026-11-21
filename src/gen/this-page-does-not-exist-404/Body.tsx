// Généré par scripts/genpage.mjs depuis reference/html/this-page-does-not-exist-404.html (D-033) — ne pas modifier à la main : régénérer.
import './Body.css';
import { T } from '@/data/text/this-page-does-not-exist-404';
import { HideOn } from '@/components/Variants';
import { Lk } from '@/components/Lk';
import { NOTFOUND_3D } from '@/data/webgl';
import { NavLinks } from '@/components/nav/parts';
import { SV } from '@/components/Variants';
import { VRoot, VEl } from '@/components/fx/Variant';
import { Wireframe404 } from '@/webgl/notfound/Wireframe404';


export function Body() {
  return (
    <div data-framer-root="" className="framer-S4eqZ framer-yTVl5 framer-Me6vv framer-wmpc5b" style={{ "minHeight": "100vh", "width": "auto" }}>
      <section className="framer-1yf627i" data-framer-name="404" style={{ "maxHeight": "100dvh" }}>
        <div className="framer-rhemwq" data-framer-name="Outer Container">
          <div className="framer-nwf2ea-container"><Wireframe404 {...NOTFOUND_3D} /></div>
          <div className="framer-1d7xdhl" data-framer-name="Inside Container">
            <header className="framer-dru264" data-framer-name="Top">
              <SV c="ssr-variant hidden-10j6zqb" show={["desktop","tablet"]}>
                <div className="framer-120bpfb-container">
                  <Lk aria-label={T[0]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="./" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                    <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                  </Lk>
                </div>
              </SV>
              <SV c="ssr-variant hidden-p4ork5 hidden-wmpc5b" show={["phone"]}>
                <div className="framer-120bpfb-container">
                  <Lk aria-label={T[1]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="./" style={{ "--159cm0u": "5px 0px 0px 0px" }} to="/">
                    <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                  </Lk>
                </div>
              </SV>
              <SV c="ssr-variant hidden-10j6zqb" show={["desktop","tablet"]}>
                <div className="framer-7u2wnf-container">
                  <SV c="ssr-variant hidden-p4ork5" show={["desktop","phone"]}>
                    <NavLinks variant="top" color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}  style={{"height":"100%","width":"100%"}} />
                  </SV>
                  <SV c="ssr-variant hidden-wmpc5b" show={["tablet","phone"]}>
                    <NavLinks variant="topTablet" color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}  style={{"height":"100%","width":"100%"}} />
                  </SV>
                </div>
              </SV>
              <SV c="ssr-variant hidden-p4ork5 hidden-wmpc5b" show={["phone"]}>
                <div className="framer-7u2wnf-container">
                  <NavLinks variant="phone" color={"var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))"}  style={{"height":"100%","width":"100%"}} />
                </div>
              </SV>
            </header>
            <div className="framer-1t5j36m" data-framer-name="Bottom">
              <HideOn on={["phone"]}>
              <div className="framer-106fh6v-container hidden-10j6zqb">
                <SV c="ssr-variant hidden-p4ork5" show={["desktop","phone"]}>
                  <VRoot as="a" map={{"jinEk1yag":{"cls":"framer-v-q8hg74","name":"Desktop - Right"},"oFaK7E_Aw":{"cls":"framer-v-8wbf3d","name":"Phone Left"},"RVD7A0_PA":{"cls":"framer-v-ra0to2","name":"Desktop - Left"},"UFuPupHWY":{"cls":"framer-v-ls2zup","name":"Phone Right"}}} initial="RVD7A0_PA" transition={{"delay":0,"duration":0.36,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["jinEk1yag","RVD7A0_PA"]} hoverNames={{"jinEk1yag-hover":"Desktop Right Arrow","RVD7A0_PA-hover":"Desktop Left Arrow"}} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-ra0to2 framer-ghew07" data-framer-name="Desktop - Left" href="./" to="/">
                    <div className="framer-1dzfdpz" data-framer-name="Text">
                      <VEl as="div" base={{"opacity":1}} variants={{"jinEk1yag-hover":{"opacity":0},"RVD7A0_PA-hover":{"opacity":0}}} className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "1", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                          {T[2]}
                        </p>
                      </VEl>
                      <VEl as="div" base={{"opacity":0}} variants={{"jinEk1yag-hover":{"opacity":1},"RVD7A0_PA-hover":{"opacity":1}}} className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                          {T[3]}
                        </p>
                      </VEl>
                    </div>
                    <VEl as="div" base={{"borderBottomLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":1}} variants={{"jinEk1yag-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95},"RVD7A0_PA-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95}}} className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                      <svg className="framer-4rnSx framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#3938257237\"></use>" }} />
                    </VEl>
                  </VRoot>
                </SV>
                <SV c="ssr-variant hidden-10j6zqb hidden-wmpc5b" show={["tablet"]}>
                  <VRoot as="a" map={{"jinEk1yag":{"cls":"framer-v-q8hg74","name":"Desktop - Right"},"oFaK7E_Aw":{"cls":"framer-v-8wbf3d","name":"Phone Left"},"RVD7A0_PA":{"cls":"framer-v-ra0to2","name":"Desktop - Left"},"UFuPupHWY":{"cls":"framer-v-ls2zup","name":"Phone Right"}}} initial="oFaK7E_Aw" transition={{"delay":0,"duration":0.36,"ease":[0.87,0,0.13,1],"type":"tween"}} hover={["jinEk1yag","RVD7A0_PA"]} hoverNames={{"jinEk1yag-hover":"Desktop Right Arrow","RVD7A0_PA-hover":"Desktop Left Arrow"}} className="framer-St8Ub framer-khCxy framer-q8hg74 framer-v-8wbf3d framer-ghew07" data-framer-name="Phone Left" href="./" to="/">
                    <div className="framer-1dzfdpz" data-framer-name="Text">
                      <VEl as="div" base={{"opacity":1}} variants={{"jinEk1yag-hover":{"opacity":0},"RVD7A0_PA-hover":{"opacity":0}}} className="framer-zixbhw" data-framer-name="Top Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "1", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                          {T[4]}
                        </p>
                      </VEl>
                      <VEl as="div" base={{"opacity":0}} variants={{"jinEk1yag-hover":{"opacity":1},"RVD7A0_PA-hover":{"opacity":1}}} className="framer-1396mtp" data-framer-name="Bottom Text" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-A0yGAsltz-v7Wd3N72W)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-A0yGAsltz-v7Wd3N72W": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "opacity": "0", "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-k5mxv3" data-styles-preset="JFK15baIL" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-A0yGAsltz-v7Wd3N72W))" }}>
                          {T[5]}
                        </p>
                      </VEl>
                    </div>
                    <VEl as="div" base={{"borderBottomLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":1}} variants={{"jinEk1yag-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95},"RVD7A0_PA-hover":{"borderBottomLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderBottomRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopLeftRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","borderTopRightRadius":"calc(8px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))","scale":0.95}}} className="framer-73np5u" data-framer-name="Chevron" style={{ "--corner-shape-fallback": "0.752", "backgroundColor": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))", "cornerShape": "superellipse(1.5)", "borderBottomLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderBottomRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopLeftRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "borderTopRightRadius": "calc(4px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))", "transform": "none" }}>
                      <svg className="framer-4rnSx framer-19pf2gr" role="presentation" viewBox="0 0 24 24" style={{ "--1m973uw": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "--js9iwy": "3" }} dangerouslySetInnerHTML={{ __html: "<use href=\"#3938257237\"></use>" }} />
                    </VEl>
                  </VRoot>
                </SV>
              </div>
              </HideOn>
              <div className="framer-1gt1tfz" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                <h1 className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-alignment": "justify", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                  {T[6]}
                  <span style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }} className="framer-text">
                    {T[7]}
                  </span>
                </h1>
              </div>
              <div className="framer-1omldqy" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                  {T[8]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
