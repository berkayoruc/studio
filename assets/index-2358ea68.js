(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const w=({name:s,basemapId:d})=>{console.log(d);const c=crypto.randomUUID(),r=localStorage.getItem("maps"),e=JSON.parse(r),t={id:c,name:s,basemapId:d};return e.push(t),localStorage.setItem("maps",JSON.stringify(e)),S(),window.location.href=`./maps/?mapId=${c}`,c},I=({name:s,url:d})=>{const c=localStorage.getItem("dataSources"),r=JSON.parse(c),e={name:s,url:d};r.push(e),localStorage.setItem("dataSources",JSON.stringify(r)),L()},M=()=>[{name:"Colorful",id:"colorful",description:"A colorful map which is each country has different color"},{name:"Open Street Map (OSM)",id:"openstreetmap",description:"A map which is provided by Open Street Map"},{name:"Open Topo Map",id:"opentopomap",description:"A map which is provided by Open Topo Map"},{name:"Blank",id:"blank",description:"A blank map"}],C=()=>{localStorage.getItem("maps")||localStorage.setItem("maps",JSON.stringify([])),localStorage.getItem("dataSources")||localStorage.setItem("dataSources",JSON.stringify([]))},L=()=>{const s=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.remove("hidden"),s.classList.add("hidden");const c=localStorage.getItem("dataSources"),r=JSON.parse(c),e=document.getElementById("list-studio");if(e.innerHTML="",r.length===0){const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const o=document.createElement("div");o.className="flex flex-col",t.appendChild(o);const a=document.createElement("h3");a.className="font-medium",a.innerHTML="No data sources found",o.appendChild(a),e.appendChild(t);return}r.forEach(t=>{const o=document.createElement("li");o.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",o.addEventListener("click",()=>{console.log("clicked")});const a=document.createElement("div");a.className="w-6 h-6 bg-gray-300 rounded-full mr-2",o.appendChild(a);const n=document.createElement("div");n.className="flex flex-col",o.appendChild(n);const u=document.createElement("h3");u.className="font-semibold",u.innerHTML=t.name,n.appendChild(u);const i=document.createElement("p");i.className="text-xs text-gray-500",i.innerHTML=t.url,n.appendChild(i),e.appendChild(o)})},S=()=>{const s=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.add("hidden"),s.classList.remove("hidden");const c=localStorage.getItem("maps"),r=JSON.parse(c),e=document.getElementById("list-studio");if(e.innerHTML="",r.length===0){const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const o=document.createElement("div");o.className="flex flex-col",t.appendChild(o);const a=document.createElement("h3");a.className="font-medium",a.innerHTML="No maps found",o.appendChild(a),e.appendChild(t);return}r.forEach(t=>{const o=document.createElement("li");o.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",o.addEventListener("click",()=>{window.location.href=`./maps/?mapId=${t.id}`});const a=document.createElement("div");a.className="w-6 h-6 bg-gray-300 rounded-full mr-2",o.appendChild(a);const n=document.createElement("div");n.className="flex flex-col",o.appendChild(n);const u=document.createElement("h3");u.className="font-semibold",u.innerHTML=t.name,n.appendChild(u);const i=document.createElement("p");i.className="text-xs text-gray-500",i.innerHTML=t.basemapId,n.appendChild(i),e.appendChild(o)})},p=()=>{document.getElementById("modal").remove(),document.querySelector("body").classList.remove("overflow-hidden")},x=({title:s,type:d})=>{const c=M();document.querySelector("body").classList.add("overflow-hidden");const e=document.createElement("div");if(e.innerHTML=`
  <div
    id="modal"
    class="w-full h-full fixed left-0 right-0 top-0 backdrop-blur-sm bg-gray-800 bg-opacity-25 justify-center items-center flex"
  >
    <div
      id="modal-inner"
      class="bg-white drop-shadow-xl flex flex-col rounded-lg p-4 gap-4 w-1/2 min-w-[300px] max-h-minus48 overflow-y-auto"
    >
      <div class="flex justify-between items-center font-medium">
        <h2 id="h2-modal-title">${s}</h2>
        <button id="btn-modal-close">&#10005;</button>
      </div>
      ${d==="map"?`
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
  </div>`.trim(),document.body.appendChild(e.firstChild),d==="map"){const a=document.getElementById("list-studio-basemaps");c.forEach((i,N)=>{const l=document.createElement("li");l.dataset.basemapId=i.id,l.ariaChecked=!1,l.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",N===0&&(l.ariaChecked=!0,l.classList.add("border"),l.classList.add("border-red-500")),l.addEventListener("click",()=>{a.childNodes.forEach(h=>{h.ariaChecked=!1,h.classList.remove("border"),h.classList.remove("border-red-500")}),l.ariaChecked=!0,l.classList.add("border"),l.classList.add("border-red-500"),console.log("clicked")});const E=document.createElement("div");E.className="w-6 h-6 bg-gray-300 rounded-full mr-2",l.appendChild(E);const m=document.createElement("div");m.className="flex flex-col",l.appendChild(m);const b=document.createElement("h3");b.className="font-semibold",b.innerHTML=i.name,m.appendChild(b);const g=document.createElement("p");g.className="text-xs text-gray-500",g.innerHTML=i.description,m.appendChild(g),a.appendChild(l)});const n=document.getElementById("input-studio-map-name");n.addEventListener("input",()=>{n.value!==""?n.removeAttribute("required"):n.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(n.value===""){n.setAttribute("required",!0);return}const i=a.querySelector("[aria-checked=true]").dataset.basemapId;w({name:n.value,basemapId:i}),p()})}else if(d==="source"){const a=document.getElementById("input-studio-source-name");a.addEventListener("input",()=>{a.value!==""?a.removeAttribute("required"):a.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(a.value===""){a.setAttribute("required",!0);return}I({name:a.value}),p()})}const t=document.getElementById("modal");t.addEventListener("click",a=>{a.target===t&&p()}),document.getElementById("btn-modal-close").addEventListener("click",()=>{p()})};C();const f=document.getElementById("btn-studio-maps"),y=document.getElementById("btn-studio-data"),v=document.getElementById("h-studio-type");v.innerHTML="Maps";S();f.addEventListener("click",()=>{y.classList.remove("active"),f.classList.add("active"),v.innerHTML="Maps",S()});y.addEventListener("click",()=>{f.classList.remove("active"),y.classList.add("active"),v.innerHTML="Sources",L()});const O=document.getElementById("btn-studio-new-map");O.addEventListener("click",()=>{const s=localStorage.getItem("maps");JSON.parse(s).length<5&&x({title:"Create map",type:"map"})});const B=document.getElementById("btn-studio-new-data-source");B.addEventListener("click",()=>{const s=localStorage.getItem("dataSources");JSON.parse(s).length<5&&x({title:"Create source",type:"source"})});const k=document.getElementById("reset-all");k.addEventListener("click",()=>{localStorage.setItem("maps",JSON.stringify([])),localStorage.setItem("dataSources",JSON.stringify([])),f.click()});
