import { e as createComponent, m as maybeRenderHead, g as addAttribute, k as renderScript, r as renderTemplate, l as renderHead, n as renderSlot, o as renderComponent, h as createAstro, p as Fragment } from '../chunks/astro/server_D6H5045Y.mjs';
import 'piccolore';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ThemeDebugger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="theme-debugger" class="fixed bottom-4 right-4 z-50 flex flex-col items-end group"> <!-- The floating button --> <button id="theme-btn" class="w-12 h-12 bg-gray-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path> </svg> </button> <!-- The expandable panel --> <div id="theme-panel" class="hidden absolute bottom-16 right-0 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 w-80 translate-y-4 opacity-0 transition-all duration-300"> <div class="flex justify-between items-center mb-4"> <h3 class="font-bold text-gray-900 border-b border-gray-200 pb-2 w-full">
Theme Debugger
</h3> </div> <div id="theme-color-list" class="space-y-4 mb-6"> <div class="flex items-center justify-between color-row bg-white p-2 rounded -mx-2 hover:bg-gray-50 transition-colors" draggable="true"> <div class="cursor-move flex items-center pr-2 opacity-30 hover:opacity-100 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> <label class="text-xs font-semibold text-gray-500 uppercase pointer-events-none flex-grow">Background</label> <div class="flex items-center gap-2"> <input type="text" data-var="--bg" class="theme-text-input text-xs border border-gray-200 rounded p-1 w-20 text-center font-mono text-gray-600 focus:outline-none focus:border-primary" value="#F8FAFC"> <input type="color" data-var="--bg" class="theme-color-input w-8 h-8 rounded cursor-pointer border-0 p-0 shrink-0" value="#F8FAFC"> </div> </div> <div class="flex items-center justify-between color-row bg-white p-2 rounded -mx-2 hover:bg-gray-50 transition-colors" draggable="true"> <div class="cursor-move flex items-center pr-2 opacity-30 hover:opacity-100 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> <label class="text-xs font-semibold text-gray-500 uppercase pointer-events-none flex-grow">Text</label> <div class="flex items-center gap-2"> <input type="text" data-var="--text" class="theme-text-input text-xs border border-gray-200 rounded p-1 w-20 text-center font-mono text-gray-600 focus:outline-none focus:border-primary" value="#0F172A"> <input type="color" data-var="--text" class="theme-color-input w-8 h-8 rounded cursor-pointer border-0 p-0 shrink-0" value="#0F172A"> </div> </div> <div class="flex items-center justify-between color-row bg-white p-2 rounded -mx-2 hover:bg-gray-50 transition-colors" draggable="true"> <div class="cursor-move flex items-center pr-2 opacity-30 hover:opacity-100 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> <label class="text-xs font-semibold text-gray-500 uppercase pointer-events-none flex-grow">Primary</label> <div class="flex items-center gap-2"> <input type="text" data-var="--primary" class="theme-text-input text-xs border border-gray-200 rounded p-1 w-20 text-center font-mono text-gray-600 focus:outline-none focus:border-primary" value="#8B5CF6"> <input type="color" data-var="--primary" class="theme-color-input w-8 h-8 rounded cursor-pointer border-0 p-0 shrink-0" value="#8B5CF6"> </div> </div> <div class="flex items-center justify-between color-row bg-white p-2 rounded -mx-2 hover:bg-gray-50 transition-colors" draggable="true"> <div class="cursor-move flex items-center pr-2 opacity-30 hover:opacity-100 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> <label class="text-xs font-semibold text-gray-500 uppercase pointer-events-none flex-grow">Accent</label> <div class="flex items-center gap-2"> <input type="text" data-var="--accent" class="theme-text-input text-xs border border-gray-200 rounded p-1 w-20 text-center font-mono text-gray-600 focus:outline-none focus:border-primary" value="#0EA5E9"> <input type="color" data-var="--accent" class="theme-color-input w-8 h-8 rounded cursor-pointer border-0 p-0 shrink-0" value="#0EA5E9"> </div> </div> <div class="flex items-center justify-between color-row bg-white p-2 rounded -mx-2 hover:bg-gray-50 transition-colors" draggable="true"> <div class="cursor-move flex items-center pr-2 opacity-30 hover:opacity-100 transition-opacity"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01" stroke-linecap="round" stroke-linejoin="round"></path></svg> </div> <label class="text-xs font-semibold text-gray-500 uppercase pointer-events-none flex-grow">Neutral</label> <div class="flex items-center gap-2"> <input type="text" data-var="--neutral" class="theme-text-input text-xs border border-gray-200 rounded p-1 w-20 text-center font-mono text-gray-600 focus:outline-none focus:border-primary" value="#E2E8F0"> <input type="color" data-var="--neutral" class="theme-color-input w-8 h-8 rounded cursor-pointer border-0 p-0 shrink-0" value="#E2E8F0"> </div> </div> </div> <div> <label class="text-xs font-semibold text-gray-500 uppercase block mb-2">Paste JSON Palette Object</label> <textarea id="theme-json" rows="3" class="w-full text-xs p-2 bg-gray-50 border border-gray-200 rounded focus:ring-primary focus:border-primary font-mono"${addAttribute('{"Color 1": "hex", "Color 2": "hex"...}', "placeholder")}></textarea> <p id="theme-error" class="text-xs text-red-500 mt-1 hidden">
Invalid JSON
</p> </div> </div> </div> ${renderScript($$result, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/ThemeDebugger.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/ThemeDebugger.astro", void 0);

const $$Astro$7 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><!-- Import Google Fonts for typography --><link rel="preconnect" href="https://fonts.gstatic.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet"><!-- Tailwind CSS is built locally via PostCSS + Tailwind (see postcss.config.cjs) -->${renderHead()}</head> <body class="font-inter"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ThemeDebugger", $$ThemeDebugger, {})} </body></html>`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/layouts/Layout.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav id="main-nav" class="fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6"> <div class="container mx-auto px-6 flex justify-between items-center"> <a href="#" class="nav-logo text-2xl font-bold tracking-tighter text-gray-900 transition-colors duration-300">
Clau<span class="text-primary">OnTheGo</span> </a> <div class="hidden md:flex items-center space-x-10"> <a href="#hero" class="nav-link text-gray-900 hover:text-primary">Inicio</a> <a href="#sobre-mi" class="nav-link text-gray-900 hover:text-primary">Sobre mí</a> <a href="#filosofia" class="nav-link text-gray-900 hover:text-primary">Filosofía</a> <a href="#paquetes" class="nav-link text-gray-900 hover:text-primary">Paquetes</a> <a href="#contacto" class="nav-link text-gray-900 hover:text-primary">Contacto</a> </div> <!-- Mobile Menu Button --> <button class="md:hidden text-gray-900" id="menu-toggle"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> </nav> ${renderScript($$result, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Nav.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Nav.astro?astro&type=script&index=1&lang.ts")}`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Nav.astro", void 0);

const $$Astro$6 = createAstro();
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Hero;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative min-h-screen flex items-center justify-center bg-hero text-white overflow-hidden" data-astro-cid-bbe6dxrz> <div class="container mx-auto px-6 relative z-10 text-center" data-astro-cid-bbe6dxrz> <span class="inline-block text-accent font-bold tracking-[0.2em] uppercase mb-4 animate-fade-in drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" data-astro-cid-bbe6dxrz> ${content.role} </span> <h1 class="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight" data-astro-cid-bbe6dxrz> ${content.title.split(" ").slice(0, -1).join(" ")} <span class="text-primary inline-block font-bold drop-shadow-md" data-astro-cid-bbe6dxrz>${content.title.split(" ").slice(-1)}</span> </h1> <p class="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-12 font-light leading-relaxed drop-shadow-md min-h-[3rem] md:min-h-[4rem]" data-astro-cid-bbe6dxrz>
Ayudo a que tu Instagram <span id="typewriter" class="font-medium text-white"${addAttribute(JSON.stringify(content.dynamicPhrases), "data-phrases")} data-astro-cid-bbe6dxrz></span><span class="animate-pulse" data-astro-cid-bbe6dxrz>|</span> </p> <div class="flex flex-wrap justify-center gap-6" data-astro-cid-bbe6dxrz> <a href="#contacto" class="btn btn-primary" data-astro-cid-bbe6dxrz> ${content.actions[0]} </a> <a href="#sobre-mi" class="btn btn-outline" data-astro-cid-bbe6dxrz> Conocer más</a> </div> </div> <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" data-astro-cid-bbe6dxrz> <a href="#sobre-mi" class="text-white/50 hover:text-white transition-colors" data-astro-cid-bbe6dxrz> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bbe6dxrz> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" data-astro-cid-bbe6dxrz></path> </svg> </a> </div> </section> ${renderScript($$result, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Hero.astro", void 0);

const $$Astro$5 = createAstro();
const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SobreMi;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="sobre-mi" class="section-padding bg-white overflow-hidden"> <div class="container mx-auto px-6"> <div class="flex flex-col md:flex-row items-center gap-12 lg:gap-20"> <div class="w-full md:w-1/2"> <div class="relative"> <div class="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[color:var(--primary)]"></div> <div class="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-[color:var(--primary)]"></div> <div class="relative z-10 bg-white aspect-[4/5] rounded-2xl overflow-hidden shadow-xl shadow-gray-200 border border-gray-100"> <div class="w-full h-full flex items-center justify-center text-primary/40 animate-float"> <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path> </svg> </div> </div> </div> </div> <div class="w-full md:w-1/2"> <span class="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block">Conóceme</span> <h2 class="text-4xl md:text-5xl font-black mb-8 text-gray-900 leading-tight tracking-tight"> ${content.title} </h2> <div class="space-y-6 text-lg text-gray-600 font-light leading-relaxed"> ${content.content.map((p, i) => renderTemplate`<p${addAttribute(i === 0 ? "text-xl font-medium text-gray-800" : "", "class")}> ${p} </p>`)} </div> <div class="mt-10"> <a href="#contacto" class="btn btn-primary">Trabajemos juntos</a> </div> </div> </div> </div> </section>`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/SobreMi.astro", void 0);

const $$Astro$4 = createAstro();
const $$Filosofia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Filosofia;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="filosofia" class="section-padding bg-white"> <div class="container mx-auto px-6"> <div class="text-center max-w-3xl mx-auto mb-16"> <span class="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block">Valores</span> <h2 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight"> ${content.title} </h2> <div class="text-xl text-gray-600 font-light leading-relaxed"> ${content.intro.map((p) => renderTemplate`<p class="mb-4">${p}</p>`)} </div> </div> <div class="grid md:grid-cols-2 gap-12 lg:gap-20"> <div class="bg-white border border-gray-100 p-10 rounded-3xl shadow-xl shadow-gray-200/50"> <h3 class="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-900"> <span class="w-2 h-8 bg-primary rounded-full shadow-md shadow-primary/30"></span>
Mi Enfoque
</h3> <ul class="space-y-4"> ${content.enfoque.map((item) => renderTemplate`<li class="flex items-start gap-4 text-gray-600"> <span class="text-lg">${item}</span> </li>`)} </ul> </div> <div class="flex flex-col justify-center"> <h3 class="text-3xl font-black mb-6 text-gray-900">Nuestro Objetivo</h3> <p class="text-xl text-primary font-light leading-relaxed mb-8 italic">
"${content.objetivo}"
</p> <div class="space-y-6"> <h4 class="text-xl font-bold text-gray-800"> ${content.porqueElegirme.title} </h4> <div class="grid sm:grid-cols-2 gap-4"> ${content.porqueElegirme.items.map((item) => {
    const parts = item.split("\u2013");
    const boldPart = parts[0]?.trim();
    const normalPart = parts[1]?.trim();
    return renderTemplate`<div class="group relative bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 overflow-hidden transition-all duration-300"> <div class="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div> <p class="text-gray-700 text-sm leading-relaxed relative z-10"> ${boldPart && normalPart ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <strong class="text-gray-900 block mb-1"> ${boldPart} </strong> <span class="text-gray-500 font-light"> ${normalPart} </span> ` })}` : item} </p> </div>`;
  })} </div> </div> </div> </div> </div> </section>`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Filosofia.astro", void 0);

const $$Astro$3 = createAstro();
const $$Proceso = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Proceso;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="proceso" class="section-padding bg-gray-50"> <div class="container mx-auto px-6"> <div class="text-center max-w-3xl mx-auto mb-20"> <span class="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block">Metodología</span> <h2 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight"> ${content.title} </h2> <p class="text-lg text-gray-600 font-light italic"> ${content.note} </p> </div> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> ${content.steps.map((step, idx) => renderTemplate`<div class="relative group h-full"> ${idx !== content.steps.length - 1 && renderTemplate`<div class="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gray-200 -z-10 -translate-x-12"></div>`} <div class="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-200 h-full transition-all duration-300 group-hover:-translate-y-2 hover:border-primary/20 flex flex-col items-center text-center"> <div class="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-primary/20 group-hover:scale-110 transition-transform duration-300"> ${idx === 0 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg>`} ${idx === 1 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg>`} ${idx === 2 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path> </svg>`} ${idx === 3 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg>`} </div> <h3 class="text-xl font-bold mb-4 text-gray-900"> ${step.step.split(":")[1] || step.step} </h3> <p class="text-gray-600 font-light leading-relaxed"> ${step.description} </p> </div> </div>`)} </div> </div> </section>`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Proceso.astro", void 0);

const $$Astro$2 = createAstro();
const $$Paquetes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Paquetes;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="paquetes" class="section-padding bg-white relative z-10"> <div class="container mx-auto px-6"> <div class="text-center max-w-3xl mx-auto mb-20"> <span class="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block">Servicios</span> <h2 class="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight"> ${content.title} </h2> <div class="text-lg text-gray-600 font-light space-y-4"> ${content.intro.map((p) => renderTemplate`<p>${p}</p>`)} </div> </div> <div class="grid lg:grid-cols-3 gap-8"> ${content.planes.map((plan, idx) => renderTemplate`<div${addAttribute(`relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.03] flex flex-col ${idx === 1 ? "shadow-[0_20px_40px_rgba(168,85,247,0.15)] bg-white border border-gray-200" : "bg-white border border-gray-200 shadow-xl shadow-gray-200/50 hover:border-primary/30"}`, "class")}> ${idx === 1 && renderTemplate`<div class="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/30 border border-white/20">
Recomendado
</div>`} <h3 class="text-2xl font-bold mb-2 text-gray-900">${plan.name}</h3> <p${addAttribute(`text-4xl font-black mb-6 ${idx === 1 ? "text-primary" : "text-gray-900"}`, "class")}> ${plan.price.split("\u2014")[0]} </p> <div class="mb-8 space-y-4"> <p class="text-sm opacity-80 uppercase font-bold tracking-widest text-primary">
Ideal para:
</p> <p class="text-lg font-medium leading-snug text-gray-700"> ${plan.paraQuien} </p> </div> <div class="flex-grow"> <p class="text-sm opacity-80 uppercase font-bold tracking-widest mb-4 text-gray-900">
Lo que incluye:
</p> <ul class="space-y-3 mb-8"> ${plan.incluye.slice(0, 8).map((item) => renderTemplate`<li class="flex items-start gap-3 text-sm text-gray-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path> </svg> <span>${item}</span> </li>`)} </ul> </div> <a href="#contacto"${addAttribute(plan.name, "data-plan")}${addAttribute(`plan-btn btn w-full text-center ${idx === 1 ? "btn-primary" : "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-transparent hover:border-gray-300"}`, "class")}>
Seleccionar Plan
</a> </div>`)} </div> </div> </section> ${renderScript($$result, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Paquetes.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Paquetes.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacto;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="contacto" class="section-padding bg-gray-50 relative z-10"> <div class="container mx-auto px-6"> <div class="flex flex-col lg:flex-row gap-16"> <div class="w-full lg:w-5/12 lg:pr-8"> <span class="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 inline-block">Hablemos</span> <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-8 text-gray-900"> ${content.title} </h2> <div class="space-y-6 text-gray-600 font-light leading-relaxed"> ${content.description.map((p) => renderTemplate`<p>${p}</p>`)} </div> <div class="mt-12 pt-12 border-t border-gray-200"> <p class="text-sm uppercase tracking-widest text-gray-500 mb-4">
Expectativas
</p> <div class="space-y-4"> ${content.gracias.slice(2).map((p) => renderTemplate`<p class="text-sm text-gray-600 italic">${p}</p>`)} </div> </div> </div> <div class="w-full lg:w-7/12"> <form id="contact-form" class="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-transparent text-gray-900 grid grid-cols-1 md:grid-cols-2 gap-6 relative overflow-hidden"> <div class="md:col-span-2 relative z-10"> <label class="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">Información Personal</label> <input type="text" name="name" required${addAttribute(content.fields[0], "placeholder")} class="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900 placeholder-gray-400"> </div> <div class="relative z-10"> <input type="email" name="email" required${addAttribute(content.fields[1], "placeholder")} class="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900 placeholder-gray-400"> </div> <div class="relative z-10"> <input type="tel" name="phone"${addAttribute(content.fields[2], "placeholder")} class="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900 placeholder-gray-400"> </div> <div class="md:col-span-2 relative z-10"> <label class="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-2">${content.fields[12]}</label> <textarea name="message" required placeholder="Cuéntame un poco sobre ti..." rows="3" class="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-900 placeholder-gray-400"></textarea> </div> <div class="md:col-span-2 relative z-10"> <label class="block text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">${content.fields[8]}</label> <div class="flex flex-wrap gap-6"> ${content.fields.slice(9, 12).map((option) => renderTemplate`<label class="flex items-center gap-2 cursor-pointer group"> <input type="radio" name="interest"${addAttribute(option, "value")} class="w-4 h-4 text-primary bg-gray-50 border-gray-300 focus:ring-primary focus:ring-offset-0"> <span class="text-sm text-gray-600 group-hover:text-gray-900 transition-colors"> ${option} </span> </label>`)} </div> </div> <div class="md:col-span-2 mt-4"> <div id="form-status" class="hidden mb-4 p-4 rounded-xl text-sm font-medium"></div> <button id="submit-button" type="submit" class="w-full py-4 text-xl font-bold text-white rounded-[32px] bg-gradient-to-r from-indigo-500 to-sky-400 hover:scale-[1.02] hover:shadow-xl hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300"> <span id="submit-text">Enviar Solicitud</span> <span id="submit-loading" class="hidden">Enviando...</span> </button> </div> </form> </div> </div> </div> </section> ${renderScript($$result, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Contacto.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Contacto.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  const { content } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="py-12 bg-gray-900 border-t border-white/5"> <div class="container mx-auto px-6 text-center"> <a href="#" class="text-2xl font-bold tracking-tighter text-white mb-6 inline-block">
Clau<span class="text-primary">OnTheGo</span> </a> <p class="text-gray-500 max-w-md mx-auto mb-8 font-light"> ${content.service} — Ayudando a marcas y profesionales a brillar en Instagram.
</p> <div class="flex justify-center gap-6 mb-12"> <a href="https://instagram.com/clauonthego" target="_blank" class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"> <span class="sr-only">Instagram</span> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg> </a> </div> <div class="text-xs text-gray-600 uppercase tracking-[0.3em]"> ${content.copyright} — ClauOnTheGo
</div> </div> </footer>`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Footer.astro", void 0);

const siteContent = {
  hero: {
    title: "Gestión Estratégica de Instagram",
    subtitle: "para Profesionales y Marcas de Servicios",
    description: [
      "Ayudo a que tu Instagram refleje el verdadero valor de tu negocio",
      "con contenido estratégico, coherente y enfocado en atraer a los clientes correctos",
      "Enfocado en posicionamiento, confianza y crecimiento sostenible para atraer clientes correctos"
    ],
    dynamicPhrases: [
      "refleje la calidad premium de tus servicios",
      "posicione tu marca como un referente en tu sector",
      "convierta tu perfil en un imán de clientes ideales",
      "transforme visitas en oportunidades reales de negocio",
      "construya una reputación basada en la confianza",
      "deje la improvisación para enfocarse en resultados sostenibles"
    ],
    actions: ["Agenda una llamada", "Ver portafolio"],
    name: "Claudia Ramos",
    role: "Especialista en Gestión Estratégica de Instagram",
    degree: "Lic. en Administración de Empresas"
  },
  sobreMi: {
    title: "SOBRE MÍ",
    content: [
      "Hola, soy Claudia Ramos.",
      "Antes de dedicarme a la gestión estratégica de Instagram, trabajé varios años en atención al cliente, donde aprendí algo fundamental: un buen servicio no se basa en vender a cualquier costo, sino en generar confianza.",
      "Con el tiempo, escuché a muchos emprendedores y profesionales decir lo mismo: habían contratado servicios de redes sociales, pero no se sentían representados, escuchados ni identificados con su propio contenido.",
      "Ahí entendí que no se trata solo de manejar una cuenta, sino de comprender el negocio, su esencia y sus objetivos.",
      "Por eso, hoy enfoco mi trabajo en acompañar a mis clientes, escuchar sus necesidades y transformar sus ideas en una presencia digital coherente, profesional y alineada a su valor real.",
      "Creo en la claridad, la honestidad y el compromiso a largo plazo.",
      "Me importa cuidar la reputación de cada marca como si fuera propia."
    ]
  },
  filosofia: {
    title: "MI FILOSOFÍA DE TRABAJO",
    intro: [
      "Creo que tu negocio merece honestidad, estrategia y coherencia.",
      "Instagram no es solo visibilidad, es una herramienta de posicionamiento.",
      "En los negocios de servicios, la confianza vale más que la viralidad."
    ],
    enfoque: [
      "Estrategia antes que improvisación",
      "Posicionamiento antes que solo alcance",
      "Claridad antes que modas",
      "Coherencia de marca",
      "Acompañamiento real y cercano"
    ],
    objetivo: "No busco crecer seguidores por crecer: mi objetivo es que tu marca sea profesional, confiable y alineada a la imagen que quieres proyectar, para que cada visita se convierta en una oportunidad real.",
    porqueElegirme: {
      title: "¿POR QUÉ ELEGIRME?",
      items: [
        "Estrategia personalizada – Todo el contenido y planificación se diseña según tu negocio y objetivos.",
        "Contenido congruente – Publicaciones alineadas a tu marca; no todo contenido de tendencia es adecuado para ti.",
        "Entregas responsables y confiables – Cumplo con los tiempos y la calidad acordada.",
        "Resultados sostenibles – No se trata solo de likes, sino de generar oportunidades reales para tu negocio."
      ]
    },
    aQuienAcompano: {
      title: "A QUIÉN ACOMPAÑO",
      content: [
        "Trabajo con profesionales y marcas de servicios que buscan construir una presencia digital coherente, confiable y alineada a su valor real.",
        "Acompaño a negocios que entienden que su reputación y su imagen influyen directamente en sus oportunidades.",
        "En un entorno donde los clientes buscan, comparan y deciden online, tu presencia digital debe transmitir profesionalismo, claridad y confianza.",
        "Ese es el tipo de marca que construimos juntos."
      ]
    }
  },
  proceso: {
    title: "MI PROCESO DE TRABAJO",
    steps: [
      {
        step: "Paso 1: Diagnóstico",
        description: "Analizo tu marca, tu contenido y tus objetivos."
      },
      {
        step: "Paso 2: Estrategia",
        description: "Definimos qué comunicar, cómo hacerlo y con qué enfoque."
      },
      {
        step: "Paso 3: Producción",
        description: "Creo, edito y optimizo cada pieza de contenido."
      },
      {
        step: "Paso 4: Análisis",
        description: "Revisamos resultados y ajustamos mes a mes."
      }
    ],
    note: "Todo el proceso está enfocado en crecimiento sostenible, no en publicaciones sin sentido."
  },
  paquetes: {
    title: "SERVICIOS / PAQUETES",
    intro: [
      "PLANES DE GESTIÓN ESTRATÉGICA DE INSTAGRAM",
      "Trabajo con un enfoque estratégico, enfocado en posicionamiento, coherencia de marca y generación de oportunidades reales.",
      "Todos los planes incluyen acompañamiento, asesoría y optimización continua.",
      "El plan ideal se define luego de una conversación inicial para entender tu negocio y tus objetivos."
    ],
    planes: [
      {
        name: "Plan Impulso",
        price: "desde S/ 650 mensuales",
        paraQuien: "Negocios que recién empiezan o tienen poca presencia digital y necesitan orden, claridad y una base profesional.",
        enfoque: "Organizar tu cuenta, mejorar tu imagen y crear una presencia coherente desde el inicio.",
        incluye: [
          "Diagnóstico inicial",
          "Revisión de tu perfil, publicaciones actuales y objetivos.",
          "Optimización del perfil",
          "Ajuste de bio, foto, destacados y enlaces para que comuniquen mejor tu servicio.",
          "Asesoría de contenido",
          "Te indico qué grabar, cómo grabarlo y qué mostrar.",
          "Hasta 6 contenidos al mes",
          "Reels simples, carruseles o posts.",
          "Edición básica de foto y video",
          "Corte, orden, subtítulos simples y ajustes visuales.",
          "Captions estratégicos",
          "Textos pensados para conectar y posicionar tu servicio.",
          "Publicación optimizada",
          "Uso de estructura, palabras clave y formato adecuado.",
          "Revisión mensual",
          "Feedback y recomendaciones de mejora."
        ],
        noIncluye: [
          "Estrategia profunda",
          "Stories",
          "Gestión diaria",
          "Análisis avanzado"
        ],
        objetivo: "Construir una presencia clara, ordenada y profesional desde el inicio."
      },
      {
        name: "Plan Crecimiento",
        price: "desde S/ 1,050 mensuales — Más recomendado",
        paraQuien: "Marcas con presencia en Instagram que no están obteniendo resultados claros o han sido mal gestionadas.",
        enfoque: "Convertir tu contenido en una herramienta real de crecimiento y posicionamiento.",
        incluye: [
          "Diagnóstico completo",
          "Análisis de perfil, métricas, público y oportunidades.",
          "Estrategia mensual personalizada",
          "Definición de enfoque, calendario y objetivos.",
          "Asesoría continua de contenido",
          "Guía constante sobre qué grabar y cómo mostrar tu servicio.",
          "Hasta 8 contenidos al mes",
          "Reels y carruseles estratégicos.",
          "Edición cuidada",
          "Subtítulos, ritmo, narrativa visual y coherencia estética.",
          "Captions con CTA suave",
          "Textos que invitan a interactuar y contactar.",
          "Investigación de tendencias del sector",
          "Selección de tendencias útiles (no genéricas).",
          "Programación del contenido",
          "Análisis mensual",
          "Resultados, aprendizajes y ajustes.",
          "Asesoría personalizada"
        ],
        objetivo: "Mejorar alcance, engagement y generar oportunidades reales."
      },
      {
        name: "Plan Posicionamiento",
        price: "desde S/ 1,450 mensuales",
        paraQuien: "Marcas que buscan verse premium, diferenciarse y consolidarse como referentes en su sector.",
        enfoque: "Autoridad, imagen sólida y posicionamiento profesional.",
        incluye: [
          "Dirección creativa integral",
          "Definición de estilo visual, tono y narrativa.",
          "Branding digital aplicado",
          "Cómo se ve y comunica tu marca en Instagram.",
          "Estrategia avanzada",
          "Enfoque a mediano y largo plazo.",
          "Asesoría estratégica permanente",
          "Acompañamiento cercano.",
          "Hasta 10 contenidos al mes",
          "Reels con texto, motion y narrativa visual + carruseles diseñados.",
          "Guía estratégica de stories",
          "Ideas, estructura y frecuencia.",
          "Edición avanzada",
          "Ritmo, storytelling y estética cuidada.",
          "Análisis avanzado de métricas",
          "Reportes + decisiones estratégicas.",
          "Prioridad en entregas"
        ],
        objetivo: "Construir autoridad, diferenciación y presencia sólida en el mercado."
      }
    ]
  },
  contacto: {
    title: "Agendar conversación",
    intro: "Ese botón lleva a la siguiente sección",
    description: [
      "Esta conversación es para entender tu negocio y definir si alguno de mis planes es el adecuado para ti.",
      "No es una asesoría estratégica ni incluye propuestas de contenido.",
      "Si hay encaje, te enviaré una propuesta clara de trabajo."
    ],
    fields: [
      "Nombre y apellido (y nombre del negocio)",
      "Correo electrónico",
      "Número de WhatsApp",
      "(Usaré estos datos solo para contactarte respecto a esta solicitud)",
      "¿A qué te dedicas y desde cuándo?",
      "¿Qué te gustaría mejorar en tu Instagram hoy?",
      "¿Qué sientes que no está funcionando en tu Instagram actualmente?",
      "¿Con qué presupuesto mensual te sentirías cómodo para la gestión?",
      "Plan elegido",
      "Plan Impulso",
      "Plan Crecimiento",
      "Plan Posicionamiento",
      "¿Por qué crees que ahora es un buen momento para trabajar tu Instagram?"
    ],
    gracias: [
      "Gracias por tu mensaje.",
      "Reviso personalmente cada solicitud.",
      "Si considero que mi forma de trabajo es la adecuada para tu negocio, me pondré en contacto contigo para agendar una conversación.",
      "En caso contrario, te avisaré igualmente.",
      "Tiempo de respuesta estimado: 24–48 horas hábiles."
    ]
  },
  footer: {
    name: "Claudia Ramos",
    service: "Gestión Estratégica de Instagram",
    instagram: "@clauonthego",
    copyright: "© 2026"
  }
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": siteContent.hero.title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "Hero", $$Hero, { "content": siteContent.hero })} ${renderComponent($$result2, "SobreMi", $$SobreMi, { "content": siteContent.sobreMi })} ${renderComponent($$result2, "Filosofia", $$Filosofia, { "content": siteContent.filosofia })} ${renderComponent($$result2, "Proceso", $$Proceso, { "content": siteContent.proceso })} ${renderComponent($$result2, "Paquetes", $$Paquetes, { "content": siteContent.paquetes })} ${renderComponent($$result2, "Contacto", $$Contacto, { "content": siteContent.contacto })} ${renderComponent($$result2, "Footer", $$Footer, { "content": siteContent.footer })} ` })}`;
}, "/Users/matthew.elliot/Documents/ClauOnTheGo/src/pages/index.astro", void 0);

const $$file = "/Users/matthew.elliot/Documents/ClauOnTheGo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
