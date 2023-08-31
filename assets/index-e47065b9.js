(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const w=({name:d,basemapId:s})=>{console.log(s);const i=localStorage.getItem("maps"),r=JSON.parse(i),e={name:d,basemapId:s};r.push(e),localStorage.setItem("maps",JSON.stringify(r)),S()},I=({name:d,url:s})=>{const i=localStorage.getItem("dataSources"),r=JSON.parse(i),e={name:d,url:s};r.push(e),localStorage.setItem("dataSources",JSON.stringify(r)),L()},C=()=>[{name:"OpenStreetMap",id:"openstreetmap"},{name:"OpenTopoMap",id:"opentopomap"}],M=()=>{localStorage.getItem("maps")||localStorage.setItem("maps",JSON.stringify([])),localStorage.getItem("dataSources")||localStorage.setItem("dataSources",JSON.stringify([]))},L=()=>{const d=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.remove("hidden"),d.classList.add("hidden");const i=localStorage.getItem("dataSources"),r=JSON.parse(i),e=document.getElementById("list-studio");if(e.innerHTML="",r.length===0){const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const o=document.createElement("div");o.className="flex flex-col",t.appendChild(o);const a=document.createElement("h3");a.className="font-medium",a.innerHTML="No data sources found",o.appendChild(a),e.appendChild(t);return}r.forEach(t=>{const o=document.createElement("li");o.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",o.addEventListener("click",()=>{console.log("clicked")});const a=document.createElement("div");a.className="w-6 h-6 bg-gray-300 rounded-full mr-2",o.appendChild(a);const n=document.createElement("div");n.className="flex flex-col",o.appendChild(n);const u=document.createElement("h3");u.className="font-semibold",u.innerHTML=t.name,n.appendChild(u);const c=document.createElement("p");c.className="text-xs text-gray-500",c.innerHTML=t.url,n.appendChild(c),e.appendChild(o)})},S=()=>{const d=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.add("hidden"),d.classList.remove("hidden");const i=localStorage.getItem("maps"),r=JSON.parse(i),e=document.getElementById("list-studio");if(e.innerHTML="",r.length===0){const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const o=document.createElement("div");o.className="flex flex-col",t.appendChild(o);const a=document.createElement("h3");a.className="font-medium",a.innerHTML="No maps found",o.appendChild(a),e.appendChild(t);return}r.forEach(t=>{const o=document.createElement("li");o.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",o.addEventListener("click",()=>{console.log("clicked")});const a=document.createElement("div");a.className="w-6 h-6 bg-gray-300 rounded-full mr-2",o.appendChild(a);const n=document.createElement("div");n.className="flex flex-col",o.appendChild(n);const u=document.createElement("h3");u.className="font-semibold",u.innerHTML=t.name,n.appendChild(u);const c=document.createElement("p");c.className="text-xs text-gray-500",c.innerHTML=t.basemapId,n.appendChild(c),e.appendChild(o)})},p=()=>{document.getElementById("modal").remove(),document.querySelector("body").classList.remove("overflow-hidden")},x=({title:d,type:s})=>{const i=C();document.querySelector("body").classList.add("overflow-hidden");const e=document.createElement("div");if(e.innerHTML=`
  <div
    id="modal"
    class="w-full h-full fixed left-0 right-0 top-0 backdrop-blur-sm bg-gray-800 bg-opacity-25 justify-center items-center flex"
  >
    <div
      id="modal-inner"
      class="bg-white drop-shadow-xl flex flex-col rounded-lg p-4 gap-4 w-1/2 min-w-[300px] max-h-minus48 overflow-y-auto"
    >
      <div class="flex justify-between items-center font-medium">
        <h2 id="h2-modal-title">${d}</h2>
        <button id="btn-modal-close">&#10005;</button>
      </div>
      ${s==="map"?`
          <div class="w-full">
            <div class="text-gray-400 text-xs w-full mb-1">* Required</div>
            <input
              placeholder="Map name"
              class="w-full border border-red-50 rounded-sm focus:outline-none focus:border-red-200 required:border-red-500 placeholder:text-sm placeholder:text-gray-200 p-2"
              type="text"
              name="map-name"
              id="input-studio-map-name"
            />
          </div>
          <div>
            <h4 class="text-sm">Select basemap</h4>
            <ul id="list-studio-basemaps"></ul>
          </div>`:`
          <div class="w-full">
            <div class="text-gray-400 text-xs w-full mb-1">* Required</div>
            <input
              placeholder="Source name"
              class="w-full border border-red-50 rounded-sm focus:outline-none focus:border-red-200 required:border-red-500 placeholder:text-sm placeholder:text-gray-200 p-2"
              type="text"
              name="source-name"
              id="input-studio-source-name"
            />
          </div>
          `}
      <button
        id="btn-studio-create-map-data"
        class="w-full bg-red-500 text-white py-2 rounded-md"
      >
        Submit
      </button>
    </div>
  </div>`.trim(),document.body.appendChild(e.firstChild),s==="map"){const a=document.getElementById("list-studio-basemaps");i.forEach((c,N)=>{const l=document.createElement("li");l.dataset.basemapId=c.id,l.ariaChecked=!1,l.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",N===0&&(l.ariaChecked=!0,l.classList.add("border"),l.classList.add("border-red-500")),l.addEventListener("click",()=>{a.childNodes.forEach(h=>{h.ariaChecked=!1,h.classList.remove("border"),h.classList.remove("border-red-500")}),l.ariaChecked=!0,l.classList.add("border"),l.classList.add("border-red-500"),console.log("clicked")});const E=document.createElement("div");E.className="w-6 h-6 bg-gray-300 rounded-full mr-2",l.appendChild(E);const m=document.createElement("div");m.className="flex flex-col",l.appendChild(m);const g=document.createElement("h3");g.className="font-semibold",g.innerHTML=c.name,m.appendChild(g);const b=document.createElement("p");b.className="text-xs text-gray-500",b.innerHTML=c.id,m.appendChild(b),a.appendChild(l)});const n=document.getElementById("input-studio-map-name");n.addEventListener("input",()=>{n.value!==""?n.removeAttribute("required"):n.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(n.value===""){n.setAttribute("required",!0);return}const c=a.querySelector("[aria-checked=true]").dataset.basemapId;w({name:n.value,basemapId:c}),p()})}else if(s==="source"){const a=document.getElementById("input-studio-source-name");a.addEventListener("input",()=>{a.value!==""?a.removeAttribute("required"):a.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(a.value===""){a.setAttribute("required",!0);return}I({name:a.value}),p()})}const t=document.getElementById("modal");t.addEventListener("click",a=>{a.target===t&&p()}),document.getElementById("btn-modal-close").addEventListener("click",()=>{p()})};M();const f=document.getElementById("btn-studio-maps"),y=document.getElementById("btn-studio-data"),v=document.getElementById("h-studio-type");v.innerHTML="Maps";S();f.addEventListener("click",()=>{y.classList.remove("active"),f.classList.add("active"),v.innerHTML="Maps",S()});y.addEventListener("click",()=>{f.classList.remove("active"),y.classList.add("active"),v.innerHTML="Data",L()});const B=document.getElementById("btn-studio-new-map");B.addEventListener("click",()=>{const d=localStorage.getItem("maps");JSON.parse(d).length<5&&x({title:"Create map",type:"map"})});const O=document.getElementById("btn-studio-new-data-source");O.addEventListener("click",()=>{const d=localStorage.getItem("dataSources");JSON.parse(d).length<5&&x({title:"Create source",type:"source"})});const k=document.getElementById("reset-all");k.addEventListener("click",()=>{localStorage.setItem("maps",JSON.stringify([])),localStorage.setItem("dataSources",JSON.stringify([])),f.click()});
