(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const L=()=>{const a=localStorage.getItem("maps"),s=JSON.parse(a),l=document.getElementById("list-studio");l.innerHTML="",s.forEach(d=>{console.log(d);const e=document.createElement("li");e.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",e.addEventListener("click",()=>{console.log("clicked")});const t=document.createElement("div");t.className="w-6 h-6 bg-gray-300 rounded-full mr-2",e.appendChild(t);const r=document.createElement("div");r.className="flex flex-col",e.appendChild(r);const n=document.createElement("h3");n.className="font-semibold",n.innerHTML=d.name,r.appendChild(n);const c=document.createElement("p");c.className="text-xs text-gray-500",c.innerHTML=d.basemapId,r.appendChild(c),l.appendChild(e)})},x=({name:a,basemapId:s})=>{console.log(s);const l=localStorage.getItem("maps"),d=JSON.parse(l),e={name:a,basemapId:s};d.push(e),localStorage.setItem("maps",JSON.stringify(d)),L()},S=()=>[{name:"OpenStreetMap",id:"openstreetmap"},{name:"OpenTopoMap",id:"opentopomap"}],M=({title:a})=>{const s=S();document.querySelector("body").classList.add("overflow-hidden");const d=document.createElement("div");d.innerHTML=`
  <div
    id="modal"
    class="w-full h-full fixed left-0 right-0 top-0 backdrop-blur-sm bg-gray-800 bg-opacity-25 justify-center items-center flex"
  >
    <div
      id="modal-inner"
      class="bg-white drop-shadow-xl flex flex-col rounded-lg p-4 gap-4 w-1/2 min-w-[300px] max-h-minus48 overflow-y-auto"
    >
      <div class="flex justify-between items-center font-medium">
        <h2 id="h2-modal-title">${a}</h2>
        <button id="btn-modal-close">&#10005;</button>
      </div>

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
      </div>
      <button
        id="btn-studio-create-map"
        class="w-full bg-red-500 text-white py-2 rounded-md"
      >
        Submit
      </button>
    </div>
  </div>`.trim(),document.body.appendChild(d.firstChild);const e=document.getElementById("list-studio-basemaps");s.forEach((i,E)=>{const o=document.createElement("li");o.dataset.basemapId=i.id,o.ariaChecked=!1,o.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",E===0&&(o.ariaChecked=!0,o.classList.add("border"),o.classList.add("border-red-500")),o.addEventListener("click",()=>{e.childNodes.forEach(f=>{f.ariaChecked=!1,f.classList.remove("border"),f.classList.remove("border-red-500")}),o.ariaChecked=!0,o.classList.add("border"),o.classList.add("border-red-500"),console.log("clicked")});const v=document.createElement("div");v.className="w-6 h-6 bg-gray-300 rounded-full mr-2",o.appendChild(v);const m=document.createElement("div");m.className="flex flex-col",o.appendChild(m);const u=document.createElement("h3");u.className="font-semibold",u.innerHTML=i.name,m.appendChild(u);const p=document.createElement("p");p.className="text-xs text-gray-500",p.innerHTML=i.id,m.appendChild(p),e.appendChild(o)});const t=document.getElementById("modal");t.addEventListener("click",i=>{i.target===t&&b()}),document.getElementById("btn-modal-close").addEventListener("click",()=>{b()});const n=document.getElementById("input-studio-map-name");n.addEventListener("input",()=>{n.value!==""?n.removeAttribute("required"):n.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map").addEventListener("click",()=>{if(n.value===""){n.setAttribute("required",!0);return}const i=e.querySelector("[aria-checked=true]").dataset.basemapId;console.log(i),x({name:n.value,basemapId:i}),b()})},b=()=>{document.getElementById("modal").remove(),document.querySelector("body").classList.remove("overflow-hidden")};localStorage.getItem("maps")||localStorage.setItem("maps",JSON.stringify([]));const g=document.getElementById("btn-studio-maps"),h=document.getElementById("btn-studio-data"),w=document.getElementById("btn-studio-new-map"),y=document.getElementById("h-studio-type");y.innerHTML="Maps";L();g.addEventListener("click",()=>{h.classList.remove("active"),g.classList.add("active"),y.innerHTML="Maps"});h.addEventListener("click",()=>{g.classList.remove("active"),h.classList.add("active"),y.innerHTML="Data"});w.addEventListener("click",()=>{const a=localStorage.getItem("maps");JSON.parse(a).length<5&&M({title:"Create new map"})});
