import { w as attr_class, x as slot } from "../../chunks/index.js";
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let scrolled = false;
    $$renderer2.push(`<nav${attr_class("", void 0, { "scrolled": scrolled })}><div class="layout nav-container svelte-12qhfyh"><a href="/portfolio-app/" class="logo svelte-12qhfyh"><span class="logo-bracket svelte-12qhfyh">[</span> <span class="logo-name svelte-12qhfyh">GS</span> <span class="logo-bracket svelte-12qhfyh">]</span></a> <div class="nav-links svelte-12qhfyh"><a href="#sobre" class="nav-link svelte-12qhfyh"><span class="nav-number svelte-12qhfyh">01.</span> <span class="nav-text svelte-12qhfyh">Sobre</span></a> <a href="#projetos" class="nav-link svelte-12qhfyh"><span class="nav-number svelte-12qhfyh">02.</span> <span class="nav-text svelte-12qhfyh">Projetos</span></a> <a href="#contato" class="nav-link svelte-12qhfyh"><span class="nav-number svelte-12qhfyh">03.</span> <span class="nav-text svelte-12qhfyh">Contato</span></a> <a href="https://github.com/G-shiy" target="_blank" rel="noopener noreferrer" class="nav-btn svelte-12qhfyh"><svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="svelte-12qhfyh"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg> <span class="svelte-12qhfyh">GitHub</span></a></div></div></nav> <main><div class="layout"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></div></main>`);
  });
}
export {
  _layout as default
};
