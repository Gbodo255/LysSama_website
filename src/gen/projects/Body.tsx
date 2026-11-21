// Généré par scripts/genpage.mjs depuis reference/html/projects.html (D-033) — ne pas modifier à la main : régénérer.
import './Body.css';
import { T } from '@/data/text/projects';
import { HideOn } from '@/components/Variants';
import { Lk } from '@/components/Lk';
import { ProjectsShowcase } from '@/webgl/projects/ProjectsShowcase';
import { SV } from '@/components/Variants';
import { SmoothScroll } from '@/components/SmoothScroll';


export function Body() {
  return (
    <div data-framer-root="" className="framer-nRW2Q framer-yTVl5 framer-2Ps8M framer-Me6vv framer-LubW4 framer-10hbnng" style={{ "minHeight": "100vh", "width": "auto", "display": "contents" }}>
      <SmoothScroll orientation="horizontal" className="framer-d0pt4p-container" data-framer-name="Lenis Smooth Scroll" {...{ name: "Lenis Smooth Scroll" }} />
      <div className="framer-e5br0d" data-framer-name="Main">
        <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
          <div className="framer-q5psbm-container">
            <div className="framer-yXQrW framer-gmtdri framer-v-gmtdri" data-framer-name="Spacer" style={{ "height": "100%" }} />
          </div>
        </SV>
        <section className="framer-1699frv" data-framer-name="Gallery" id="pricing" style={{ "maxHeight": "100dvh" }}>
          <div className="framer-hukja4" data-framer-name="Outer Container">
            <header className="framer-1qgzbbt" data-framer-name="Top">
              <HideOn on={["phone"]}>
              <div className="framer-1d80ykx-container hidden-a7wa0g">
                <Lk aria-label={T[0]} className="framer-fjOy7 framer-gesna7 framer-v-gesna7 framer-9gdys1" data-framer-name="Link Container" href="./" style={{ "--159cm0u": "0px 0px 0px 0px" }} to="/">
                  <div data-framer-name="Logo" className="framer-1xjrc framer-7h3po8" />
                </Lk>
              </div>
              </HideOn>
              <div className="framer-11g8pw4" data-framer-name="Text / Project count">
                <div className="framer-doc0mi" data-framer-name="Page Title" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                  <h1 className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                    {T[1]}
                  </h1>
                </div>
                <div className="framer-l1p39r-container">
                  <div aria-live="polite" style={{ "width": "max-content", "userSelect": "auto" }}>
                    <div className="framer-gbueqi" data-framer-name="Project count font">
                      <div className="framer-93y8ef" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                        <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-f277370d-904c-4e87-88c6-49451f154e33, rgb(255, 57, 3))" }}>
                          {T[2]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <SV c="ssr-variant" show={["desktop","tablet","phone"]}>
                <div className="framer-14z4bt-container">
                  <div className="framer-w6BnQ framer-yTVl5 framer-Me6vv framer-162pug6 framer-v-162pug6" data-framer-name="Big" style={{ "width": "100%" }}>
                    <div className="framer-14g1br8" data-framer-component-type="RichTextContainer" style={{ "justifyContent": "flex-end", "--extracted-r6o4lv": "var(--variable-reference-XU6EGhHcu-D21Ecyglh)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-XU6EGhHcu-D21Ecyglh": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))", "transform": "none" }}>
                      <p className="framer-text framer-styles-preset-1l3tbw0" data-styles-preset="cZ7bby0gR" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-XU6EGhHcu-D21Ecyglh))" }}>
                        {T[3]}
                      </p>
                    </div>
                  </div>
                </div>
              </SV>
            </header>
            <div className="framer-q4xdmx-container"><ProjectsShowcase slot={<div className="framer-1smkdlc" data-framer-name="Projects Source (Slot)">
                <Lk className="framer-12qg72k framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Project Card" href="./projects/gucci" to="/projects/gucci">
                  <div className="framer-e3lzt7" data-framer-name="Cover">
                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                      <img decoding="async" width={2400} height={1350} src="/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg" alt={T[4]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                    </div>
                  </div>
                  <div className="framer-1mlcts6-container" data-framer-name="Uploaded Video" {...{ name: "Uploaded Video" }}>
                    <video src="/assets/videos/o74zvFwrxG1ofp4gdhRqo1Ujgk.mp4" loop preload="none" poster="/assets/images/uQzt05iescwLlC6DKg4M1qwR6o.jpg" muted playsInline style={{ "cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "0px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%" }} />
                  </div>
                  <div className="framer-1nt3kx8" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                      {T[5]}
                    </h2>
                  </div>
                </Lk>
                <Lk className="framer-12qg72k framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Project Card" href="./projects/chanel" to="/projects/chanel">
                  <div className="framer-e3lzt7" data-framer-name="Cover">
                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                      <img decoding="async" width={2040} height={1148} src="/assets/images/7lmRyzySl3tRUJAR0FTAuBtPBtM.jpg" alt={T[6]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                    </div>
                  </div>
                  <div className="framer-1nt3kx8" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                      {T[7]}
                    </h2>
                  </div>
                </Lk>
                <Lk className="framer-12qg72k framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Project Card" href="./projects/puma" to="/projects/puma">
                  <div className="framer-e3lzt7" data-framer-name="Cover">
                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                      <img decoding="async" width={1152} height={1440} src="/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg" alt={T[8]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                    </div>
                  </div>
                  <div className="framer-1mlcts6-container" data-framer-name="Uploaded Video" {...{ name: "Uploaded Video" }}>
                    <video src="/assets/videos/LYIGz8CY670o999qJep8WeHqgzM.mp4" loop preload="none" poster="/assets/images/NuuceAGvddP5JL0LEhEjp8bdnM.jpg" muted playsInline style={{ "cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "0px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%" }} />
                  </div>
                  <div className="framer-1nt3kx8" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                      {T[9]}
                    </h2>
                  </div>
                </Lk>
                <Lk className="framer-12qg72k framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Project Card" href="./projects/adidas" to="/projects/adidas">
                  <div className="framer-e3lzt7" data-framer-name="Cover">
                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                      <img decoding="async" width={2400} height={1350} src="/assets/images/r7Srjn5YojuM8eQrAW1Mlzsb4.jpg" alt={T[10]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                    </div>
                  </div>
                  <div className="framer-1nt3kx8" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                      {T[11]}
                    </h2>
                  </div>
                </Lk>
                <Lk className="framer-12qg72k framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Project Card" href="./projects/nike" to="/projects/nike">
                  <div className="framer-e3lzt7" data-framer-name="Cover">
                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                      <img decoding="async" width={2040} height={1148} src="/assets/images/KAdttoufdbmENPnQbvgvJksBwm4.jpg" alt={T[12]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                    </div>
                  </div>
                  <div className="framer-1nt3kx8" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                      {T[13]}
                    </h2>
                  </div>
                </Lk>
                <Lk className="framer-12qg72k framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Project Card" href="./projects/under-armour" to="/projects/under-armour">
                  <div className="framer-e3lzt7" data-framer-name="Cover">
                    <div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true">
                      <img decoding="async" width={2040} height={1148} src="/assets/images/mDP6cFLJa8AkD35JWeKaC5TpHA.jpg" alt={T[14]} style={{ "display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover" }} />
                    </div>
                  </div>
                  <div className="framer-1nt3kx8" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <h2 className="framer-text framer-styles-preset-fvem1p" data-styles-preset="LMUl9NNGN" dir="auto" style={{ "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94, rgb(255, 255, 255))" }}>
                      {T[15]}
                    </h2>
                  </div>
                </Lk>
              </div>} fontSlot={<div className="framer-1wrhru3" data-framer-name="Title Font Goes Here">
                <div className="framer-6lhlmk" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                  <h2 className="framer-text framer-styles-preset-1c0t51l" data-styles-preset="iLKnB8A0V" dir="auto">
                    {T[16]}
                  </h2>
                </div>
              </div>} countFontSlot={<div className="framer-1is60kx" data-framer-name="Count Font Goes Here">
                <div className="framer-bowggs" data-framer-name="Count Text" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                  <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto">
                    {T[17]}
                  </p>
                </div>
              </div>} detailsSlot={<div className="framer-9lk2t" data-framer-name="Card Details (Slot)">
                <Lk className="framer-ed3rdn framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Details" href="./projects/gucci" to="/projects/gucci">
                  <div className="framer-32mldv" data-framer-name="Industry" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                      {T[18]}
                    </p>
                  </div>
                  <div className="framer-1steoaf" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                      <time dateTime="2026-07-08T00:00:00.000Z">
                        {T[19]}
                      </time>
                    </p>
                  </div>
                </Lk>
                <Lk className="framer-ed3rdn framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Details" href="./projects/chanel" to="/projects/chanel">
                  <div className="framer-32mldv" data-framer-name="Industry" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                      {T[20]}
                    </p>
                  </div>
                  <div className="framer-1steoaf" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                      <time dateTime="2024-07-10T00:00:00.000Z">
                        {T[21]}
                      </time>
                    </p>
                  </div>
                </Lk>
                <Lk className="framer-ed3rdn framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Details" href="./projects/puma" to="/projects/puma">
                  <div className="framer-32mldv" data-framer-name="Industry" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                      {T[22]}
                    </p>
                  </div>
                  <div className="framer-1steoaf" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                      <time dateTime="2025-05-05T00:00:00.000Z">
                        {T[23]}
                      </time>
                    </p>
                  </div>
                </Lk>
                <Lk className="framer-ed3rdn framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Details" href="./projects/adidas" to="/projects/adidas">
                  <div className="framer-32mldv" data-framer-name="Industry" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                      {T[24]}
                    </p>
                  </div>
                  <div className="framer-1steoaf" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                      <time dateTime="2025-04-15T00:00:00.000Z">
                        {T[25]}
                      </time>
                    </p>
                  </div>
                </Lk>
                <Lk className="framer-ed3rdn framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Details" href="./projects/nike" to="/projects/nike">
                  <div className="framer-32mldv" data-framer-name="Industry" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                      {T[26]}
                    </p>
                  </div>
                  <div className="framer-1steoaf" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                      <time dateTime="2025-01-01T00:00:00.000Z">
                        {T[27]}
                      </time>
                    </p>
                  </div>
                </Lk>
                <Lk className="framer-ed3rdn framer-1wrtkop" data-framer-cursor="9iwj27" data-framer-name="Details" href="./projects/under-armour" to="/projects/under-armour">
                  <div className="framer-32mldv" data-framer-name="Industry" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-alignment": "start", "--framer-text-color": "var(--token-27d215b1-9859-4ed9-910b-49be7f89fc94)" }}>
                      {T[28]}
                    </p>
                  </div>
                  <div className="framer-1steoaf" data-framer-name="Year" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}>
                    <p className="framer-text framer-styles-preset-c95aba" data-styles-preset="x8g4OBmQ1" dir="auto" style={{ "--framer-text-color": "var(--token-1486dbb4-cc20-4852-a20d-db81362153cb, rgb(188, 188, 188))" }}>
                      <time dateTime="2023-02-01T00:00:00.000Z">
                        {T[29]}
                      </time>
                    </p>
                  </div>
                </Lk>
              </div>} /></div>
          </div>
        </section>
      </div>
    </div>
  );
}
