import 'piccolore';
import { q as decodeKey } from './chunks/astro/server_D6H5045Y.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BOPRxmrh.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/matthew.elliot/Documents/ClauOnTheGo/","cacheDir":"file:///Users/matthew.elliot/Documents/ClauOnTheGo/node_modules/.astro/","outDir":"file:///Users/matthew.elliot/Documents/ClauOnTheGo/dist/","srcDir":"file:///Users/matthew.elliot/Documents/ClauOnTheGo/src/","publicDir":"file:///Users/matthew.elliot/Documents/ClauOnTheGo/public/","buildClientDir":"file:///Users/matthew.elliot/Documents/ClauOnTheGo/dist/client/","buildServerDir":"file:///Users/matthew.elliot/Documents/ClauOnTheGo/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/matthew.elliot/Documents/ClauOnTheGo/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_M1lZ2lCH.mjs","/Users/matthew.elliot/Documents/ClauOnTheGo/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_brjREKD2.mjs","/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Nav.astro?astro&type=script&index=0&lang.ts":"_astro/Nav.astro_astro_type_script_index_0_lang.CndO4uu9.js","/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Nav.astro?astro&type=script&index=1&lang.ts":"_astro/Nav.astro_astro_type_script_index_1_lang.BApszyhU.js","/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Hero.astro?astro&type=script&index=0&lang.ts":"_astro/Hero.astro_astro_type_script_index_0_lang.D27BqOwi.js","/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Paquetes.astro?astro&type=script&index=0&lang.ts":"_astro/Paquetes.astro_astro_type_script_index_0_lang.B-gq656c.js","/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Contacto.astro?astro&type=script&index=0&lang.ts":"_astro/Contacto.astro_astro_type_script_index_0_lang.CVq5NHXv.js","/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/ThemeDebugger.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeDebugger.astro_astro_type_script_index_0_lang.BlNxRTSk.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Nav.astro?astro&type=script&index=0&lang.ts","const n=Array.from(document.querySelectorAll(\"section[id]\")),c=Array.from(document.querySelectorAll(\".nav-link\")),i=new Map(n.map(e=>[e.id,0]));function a(e){c.forEach(t=>{t.classList.toggle(\"active\",t.getAttribute(\"href\")===`#${e}`)})}const l=new IntersectionObserver(e=>{e.forEach(o=>{i.set(o.target.id,o.isIntersecting?o.intersectionRatio:0)});let t=null,r=0;for(const[o,s]of i.entries())s>r&&(r=s,t=o);t&&a(t)},{threshold:[0,.25,.5,.75,1],rootMargin:\"-80px 0px -40% 0px\"});n.forEach(e=>l.observe(e));"],["/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Nav.astro?astro&type=script&index=1&lang.ts","const e=document.getElementById(\"main-nav\");window.addEventListener(\"scroll\",()=>{window.scrollY>50?e?.classList.add(\"nav-scrolled\"):e?.classList.remove(\"nav-scrolled\")});"],["/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Hero.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"typewriter\");if(s){let a=function(){const r=n[l];t?(s.textContent=r.substring(0,e-1),e--):(s.textContent=r.substring(0,e+1),e++);let i=t?30:50;!t&&e===r.length?(i=2e3,t=!0):t&&e===0&&(t=!1,l=(l+1)%n.length,i=500),setTimeout(a,i)};const n=JSON.parse(s.dataset.phrases||\"[]\");let l=0,e=0,t=!1;n.length>0&&setTimeout(a,500)}"],["/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Paquetes.astro?astro&type=script&index=0&lang.ts","const a=document.querySelectorAll(\".plan-btn\");a.forEach(t=>{t.addEventListener(\"click\",()=>{const l=t.getAttribute(\"data-plan\");document.querySelectorAll('input[name=\"interest\"]').forEach(e=>{const n=e.nextElementSibling;n&&n.textContent?.trim()===l&&(e.checked=!0)})})});"],["/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/Contacto.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"contact-form\"),t=document.getElementById(\"submit-button\"),s=document.getElementById(\"submit-text\"),r=document.getElementById(\"submit-loading\"),e=document.getElementById(\"form-status\");o&&o.addEventListener(\"submit\",async d=>{if(d.preventDefault(),!(!t||!s||!r||!e)){t.disabled=!0,t.classList.add(\"opacity-70\",\"cursor-not-allowed\"),s.classList.add(\"hidden\"),r.classList.remove(\"hidden\"),e.classList.add(\"hidden\");try{const n=new FormData(o),i=Object.fromEntries(n.entries()),a=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(i)}),c=await a.json();if(a.ok)e.textContent=\"¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.\",e.className=\"mb-4 p-4 rounded-xl text-sm font-medium bg-green-50 text-green-700 border border-green-200\",o.reset();else throw new Error(c.error||\"Error al enviar el mensaje\")}catch(n){e.textContent=n instanceof Error?n.message:\"Hubo un error al enviar el mensaje. Inténtalo de nuevo.\",e.className=\"mb-4 p-4 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200\"}finally{t.disabled=!1,t.classList.remove(\"opacity-70\",\"cursor-not-allowed\"),s.classList.remove(\"hidden\"),r.classList.add(\"hidden\"),e.classList.remove(\"hidden\")}}});"],["/Users/matthew.elliot/Documents/ClauOnTheGo/src/components/ThemeDebugger.astro?astro&type=script&index=0&lang.ts","const y=document.getElementById(\"theme-btn\"),i=document.getElementById(\"theme-panel\");let d=!1;y?.addEventListener(\"click\",()=>{d=!d,d?(i?.classList.remove(\"hidden\"),setTimeout(()=>{i?.classList.remove(\"translate-y-4\",\"opacity-0\")},10)):(i?.classList.add(\"translate-y-4\",\"opacity-0\"),setTimeout(()=>{i?.classList.add(\"hidden\")},300))});const E=document.querySelectorAll(\".theme-color-input\"),L=document.querySelectorAll(\".theme-text-input\"),g=(e,t)=>{document.documentElement.style.setProperty(e,t)},b=(e,t,a)=>\"#\"+[e,t,a].map(s=>{const n=parseInt(s).toString(16);return n.length===1?\"0\"+n:n}).join(\"\").toUpperCase(),S=e=>{if(!e)return null;if(e.startsWith(\"#\"))return e.toUpperCase();if(e.startsWith(\"rgb\")){const t=e.match(/\\d+/g);if(t&&t.length>=3)return b(t[0],t[1],t[2])}return null};L.forEach(e=>{const t=e.getAttribute(\"data-var\"),a=document.querySelector(`.theme-color-input[data-var=\"${t}\"]`);if(t){const n=getComputedStyle(document.documentElement).getPropertyValue(t).trim(),o=S(n)||e.value;e.value=o,a&&(a.value=o)}e.addEventListener(\"input\",s=>{let n=s.target.value;n.length===7&&n.startsWith(\"#\")&&(g(t,n),a&&(a.value=n))}),a&&a.addEventListener(\"input\",s=>{const n=s.target.value.toUpperCase();e.value=n,g(t,n)})});const h=document.querySelectorAll(\".color-row\");let u=null;h.forEach(e=>{e.addEventListener(\"dragstart\",function(){u=this,setTimeout(()=>this.classList.add(\"opacity-50\"),0)}),e.addEventListener(\"dragend\",function(){setTimeout(()=>this.classList.remove(\"opacity-50\"),0),u=null,h.forEach(t=>t.classList.remove(\"bg-gray-200\"))}),e.addEventListener(\"dragover\",function(t){t.preventDefault()}),e.addEventListener(\"dragenter\",function(t){t.preventDefault(),this!==u&&u&&this.classList.add(\"bg-gray-200\")}),e.addEventListener(\"dragleave\",function(t){this.classList.remove(\"bg-gray-200\")}),e.addEventListener(\"drop\",function(t){if(t.stopPropagation(),this.classList.remove(\"bg-gray-200\"),u&&u!==this){const a=u.querySelector(\".theme-color-input\"),s=this.querySelector(\".theme-color-input\");if(a&&s){const n=a.value;a.value=s.value,s.value=n;const o=a.getAttribute(\"data-var\"),l=s.getAttribute(\"data-var\");if(o){document.documentElement.style.setProperty(o,a.value);const r=document.querySelector(`.theme-text-input[data-var=\"${o}\"]`);r&&(r.value=a.value.toUpperCase())}if(l){document.documentElement.style.setProperty(l,s.value);const r=document.querySelector(`.theme-text-input[data-var=\"${l}\"]`);r&&(r.value=s.value.toUpperCase())}}}return!1})});const m=document.getElementById(\"theme-json\"),f=document.getElementById(\"theme-error\");m?.addEventListener(\"input\",()=>{f?.classList.add(\"hidden\");const e=m.value.trim();if(e)try{const t=JSON.parse(e),a=Object.values(t),s=document.querySelectorAll(\".theme-color-input\"),n=Array.from(s).map(l=>l.getAttribute(\"data-var\")),o=a.map(l=>{let r=String(l).trim();return r.startsWith(\"#\")||(r=\"#\"+r),r}).filter(l=>/^#[0-9A-Fa-f]{6}$/.test(l));o.length>0&&(E.forEach((l,r)=>{const c=n[r];if(c&&o[r]){const v=document.querySelector(`.theme-color-input[data-var=\"${c}\"]`),p=document.querySelector(`.theme-text-input[data-var=\"${c}\"]`);v&&p&&(v.value=o[r],p.value=o[r].toUpperCase(),document.documentElement.style.setProperty(c,o[r]))}}),setTimeout(()=>{m.value=\"\"},1e3))}catch{f?.classList.remove(\"hidden\")}});"]],"assets":["/_astro/index.BsuKVe5r.css","/favicon.ico","/favicon.svg","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"/Y9Wdje4JvmcRWpvTToDRMVfu3oO0gX7rr9WpjbZvdw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
