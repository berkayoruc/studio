import"./modulepreload-polyfill-3cfb730f.js";const w=({name:n,basemapId:s})=>{console.log(s);const i=crypto.randomUUID(),l=localStorage.getItem("maps"),d=JSON.parse(l),a={id:i,name:n,basemapId:s};return d.push(a),localStorage.setItem("maps",JSON.stringify(d)),v(),window.location.href=`./maps/?mapId=${i}`,i},I=({name:n,url:s})=>{const i=localStorage.getItem("dataSources"),l=JSON.parse(i),d={name:n,url:s};l.push(d),localStorage.setItem("dataSources",JSON.stringify(l)),E()},M=()=>[{name:"Colorful",id:"colorful",description:"A colorful map which is each country has different color"},{name:"Open Street Map (OSM)",id:"openstreetmap",description:"A map which is provided by Open Street Map"},{name:"Mapbox Outdoors",id:"mapbox-outdoors",description:"Mapbox Outdoors"},{name:"Mapbox Navigation Day",id:"mapbox-navigation-day",description:"Mapbox Navigation Day"},{name:"Mapbox Satellite Streets",id:"mapbox-satellite-streets",description:"Mapbox Satellite Streets"},{name:"Blank",id:"blank",description:"A blank map"}],C=()=>{localStorage.getItem("maps")||localStorage.setItem("maps",JSON.stringify([])),localStorage.getItem("dataSources")||localStorage.setItem("dataSources",JSON.stringify([]))},E=()=>{const n=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.remove("hidden"),n.classList.add("hidden");const i=localStorage.getItem("dataSources"),l=JSON.parse(i),d=document.getElementById("list-studio");if(d.innerHTML="",l.length===0){const a=document.createElement("li");a.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const t=document.createElement("div");t.className="flex flex-col",a.appendChild(t);const e=document.createElement("h3");e.className="font-medium",e.innerHTML="No data sources found",t.appendChild(e),d.appendChild(a);return}l.forEach(a=>{const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",t.addEventListener("click",()=>{console.log("clicked")});const e=document.createElement("div");e.className="w-6 h-6 bg-gray-300 rounded-full mr-2",t.appendChild(e);const o=document.createElement("div");o.className="flex flex-col",t.appendChild(o);const m=document.createElement("h3");m.className="font-semibold",m.innerHTML=a.name,o.appendChild(m);const r=document.createElement("p");r.className="text-xs text-gray-500",r.innerHTML=a.url,o.appendChild(r),d.appendChild(t)})},v=()=>{const n=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.add("hidden"),n.classList.remove("hidden");const i=localStorage.getItem("maps"),l=JSON.parse(i),d=document.getElementById("list-studio");if(d.innerHTML="",l.length===0){const a=document.createElement("li");a.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const t=document.createElement("div");t.className="flex flex-col",a.appendChild(t);const e=document.createElement("h3");e.className="font-medium",e.innerHTML="No maps found",t.appendChild(e),d.appendChild(a);return}l.forEach(a=>{const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",t.addEventListener("click",()=>{window.location.href=`./maps/?mapId=${a.id}`});const e=document.createElement("div");e.className="w-6 h-6 bg-gray-300 rounded-full mr-2",t.appendChild(e);const o=document.createElement("div");o.className="flex flex-col",t.appendChild(o);const m=document.createElement("h3");m.className="font-semibold",m.innerHTML=a.name,o.appendChild(m);const r=document.createElement("p");r.className="text-xs text-gray-500",r.innerHTML=a.basemapId,o.appendChild(r),d.appendChild(t)})},p=()=>{document.getElementById("modal").remove(),document.querySelector("body").classList.remove("overflow-hidden")},N=({title:n,type:s})=>{const i=M();document.querySelector("body").classList.add("overflow-hidden");const d=document.createElement("div");if(d.innerHTML=`
  <div
    id="modal"
    class="w-full h-full fixed left-0 right-0 top-0 backdrop-blur-sm bg-gray-800 bg-opacity-25 justify-center items-center flex"
  >
    <div
      id="modal-inner"
      class="bg-white drop-shadow-xl flex flex-col rounded-lg p-4 gap-4 w-1/2 min-w-[300px] max-h-minus48 overflow-y-auto"
    >
      <div class="flex justify-between items-center font-medium">
        <h2 id="h2-modal-title">${n}</h2>
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
  </div>`.trim(),document.body.appendChild(d.firstChild),s==="map"){const e=document.getElementById("list-studio-basemaps");i.forEach((r,L)=>{const c=document.createElement("li");c.dataset.basemapId=r.id,c.ariaChecked=!1,c.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",L===0&&(c.ariaChecked=!0,c.classList.add("border"),c.classList.add("border-red-500")),c.addEventListener("click",()=>{e.childNodes.forEach(h=>{h.ariaChecked=!1,h.classList.remove("border"),h.classList.remove("border-red-500")}),c.ariaChecked=!0,c.classList.add("border"),c.classList.add("border-red-500"),console.log("clicked")});const x=document.createElement("div");x.className="w-6 h-6 bg-gray-300 rounded-full mr-2",c.appendChild(x);const u=document.createElement("div");u.className="flex flex-col",c.appendChild(u);const g=document.createElement("h3");g.className="font-semibold",g.innerHTML=r.name,u.appendChild(g);const f=document.createElement("p");f.className="text-xs text-gray-500",f.innerHTML=r.description,u.appendChild(f),e.appendChild(c)});const o=document.getElementById("input-studio-map-name");o.addEventListener("input",()=>{o.value!==""?o.removeAttribute("required"):o.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(o.value===""){o.setAttribute("required",!0);return}const r=e.querySelector("[aria-checked=true]").dataset.basemapId;w({name:o.value,basemapId:r}),p()})}else if(s==="source"){const e=document.getElementById("input-studio-source-name");e.addEventListener("input",()=>{e.value!==""?e.removeAttribute("required"):e.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(e.value===""){e.setAttribute("required",!0);return}I({name:e.value}),p()})}const a=document.getElementById("modal");a.addEventListener("click",e=>{e.target===a&&p()}),document.getElementById("btn-modal-close").addEventListener("click",()=>{p()})};C();const b=document.getElementById("btn-studio-maps"),S=document.getElementById("btn-studio-data"),y=document.getElementById("h-studio-type");y.innerHTML="Maps";v();b.addEventListener("click",()=>{S.classList.remove("active"),b.classList.add("active"),y.innerHTML="Maps",v()});S.addEventListener("click",()=>{b.classList.remove("active"),S.classList.add("active"),y.innerHTML="Sources",E()});const k=document.getElementById("btn-studio-new-map");k.addEventListener("click",()=>{const n=localStorage.getItem("maps");JSON.parse(n).length<5&&N({title:"Create map",type:"map"})});const B=document.getElementById("btn-studio-new-data-source");B.addEventListener("click",()=>{const n=localStorage.getItem("dataSources");JSON.parse(n).length<5&&N({title:"Create source",type:"source"})});const O=document.getElementById("reset-all");O.addEventListener("click",()=>{localStorage.setItem("maps",JSON.stringify([])),localStorage.setItem("dataSources",JSON.stringify([])),b.click()});
