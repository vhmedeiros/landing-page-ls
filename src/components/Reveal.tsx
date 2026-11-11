/**
 * Animação de entrada ao rolar (estilo AOS), sem biblioteca.
 *
 * Como usar: coloque data-reveal no elemento ("up" é o padrão; também
 * "left", "right" e "zoom") e, se quiser cascata, style={delay(i * 80)}.
 *
 * Segurança:
 * - <RevealHead /> (no <head>) só liga as animações se a pessoa NÃO pediu
 *   "reduzir movimento". Sem JavaScript, nada é escondido.
 * - Se o script do fim da página não rodar em 2,5 s, as animações são
 *   desligadas e tudo aparece (o conteúdo nunca fica invisível).
 */
import type { CSSProperties } from "react";

const head = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches){var r=document.documentElement;r.classList.add("anim-ready");setTimeout(function(){if(!window.__reveal)r.classList.remove("anim-ready")},2500)}}catch(e){}`;

const body = `(function(){var r=document.documentElement;if(!r.classList.contains("anim-ready"))return;window.__reveal=1;var els=[].slice.call(document.querySelectorAll("[data-reveal]"));function show(el){el.setAttribute("data-shown","");var d=parseInt(el.style.getPropertyValue("--d"))||0;setTimeout(function(){el.removeAttribute("data-reveal");el.removeAttribute("data-shown");el.style.removeProperty("--d")},900+d)}if(!("IntersectionObserver" in window)){els.forEach(show);return}var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){show(e.target);io.unobserve(e.target)}})},{rootMargin:"0px 0px -8% 0px",threshold:0.12});els.forEach(function(el){io.observe(el)})})();`;

/** Vai no <head> do layout. */
export function RevealHead() {
  return <script dangerouslySetInnerHTML={{ __html: head }} />;
}

/** Vai no FIM da página (depois de todos os elementos com data-reveal). */
export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: body }} />;
}

/** Atraso da cascata, em ms. */
export function delay(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}
