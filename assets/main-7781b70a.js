import"./modulepreload-polyfill-3cfb730f.js";const w=({name:o,basemapId:c})=>{const i=crypto.randomUUID(),l=localStorage.getItem("maps"),n=JSON.parse(l),a={id:i,name:o,basemapId:c,options:{center:[29,41],zoom:9,pitch:0,bearing:0,interactive:!0}};return n.push(a),localStorage.setItem("maps",JSON.stringify(n)),v(),window.location.href=`./maps/?mapId=${i}`,i},I=({name:o,url:c})=>{const i=localStorage.getItem("dataSources"),l=JSON.parse(i),n={name:o,url:c};l.push(n),localStorage.setItem("dataSources",JSON.stringify(l)),x()},M=()=>[{name:"Colorful",id:"colorful",description:"A colorful map which is each country has different color"},{name:"Open Street Map (OSM)",id:"openstreetmap",description:"A map which is provided by Open Street Map"},{name:"Mapbox Outdoors",id:"mapbox-outdoors",description:"Mapbox Outdoors"},{name:"Mapbox Navigation Day",id:"mapbox-navigation-day",description:"Mapbox Navigation Day"},{name:"Blank",id:"blank",description:"A blank map"}],C=()=>{localStorage.getItem("maps")||localStorage.setItem("maps",JSON.stringify([])),localStorage.getItem("dataSources")||localStorage.setItem("dataSources",JSON.stringify([]))},x=()=>{const o=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.remove("hidden"),o.classList.add("hidden");const i=localStorage.getItem("dataSources"),l=JSON.parse(i),n=document.getElementById("list-studio");if(n.innerHTML="",l.length===0){const a=document.createElement("li");a.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const t=document.createElement("div");t.className="flex flex-col",a.appendChild(t);const e=document.createElement("h3");e.className="font-medium",e.innerHTML="No data sources found",t.appendChild(e),n.appendChild(a);return}l.forEach(a=>{const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",t.addEventListener("click",()=>{console.log("clicked")});const e=document.createElement("div");e.className="w-6 h-6 bg-gray-300 rounded-full mr-2",t.appendChild(e);const d=document.createElement("div");d.className="flex flex-col",t.appendChild(d);const m=document.createElement("h3");m.className="font-semibold",m.innerHTML=a.name,d.appendChild(m);const s=document.createElement("p");s.className="text-xs text-gray-500",s.innerHTML=a.url,d.appendChild(s),n.appendChild(t)})},v=()=>{const o=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.add("hidden"),o.classList.remove("hidden");const i=localStorage.getItem("maps"),l=JSON.parse(i),n=document.getElementById("list-studio");if(n.innerHTML="",l.length===0){const a=document.createElement("li");a.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const t=document.createElement("div");t.className="flex flex-col",a.appendChild(t);const e=document.createElement("h3");e.className="font-medium",e.innerHTML="No maps found",t.appendChild(e),n.appendChild(a);return}l.forEach(a=>{const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",t.addEventListener("click",()=>{window.location.href=`./maps/?mapId=${a.id}`});const e=document.createElement("div");e.className="w-6 h-6 bg-gray-300 rounded-full mr-2",t.appendChild(e);const d=document.createElement("div");d.className="flex flex-col",t.appendChild(d);const m=document.createElement("h3");m.className="font-semibold",m.innerHTML=a.name,d.appendChild(m);const s=document.createElement("p");s.className="text-xs text-gray-500",s.innerHTML=a.basemapId,d.appendChild(s),n.appendChild(t)})},p=()=>{document.getElementById("modal").remove(),document.querySelector("body").classList.remove("overflow-hidden")},N=({title:o,type:c})=>{const i=M();document.querySelector("body").classList.add("overflow-hidden");const n=document.createElement("div");if(n.innerHTML=`
  <div
    id="modal"
    class="w-full h-full fixed left-0 right-0 top-0 backdrop-blur-sm bg-gray-800 bg-opacity-25 justify-center items-center flex"
  >
    <div
      id="modal-inner"
      class="bg-white drop-shadow-xl flex flex-col rounded-lg p-4 gap-4 w-1/2 min-w-[300px] max-h-minus48 overflow-y-auto"
    >
      <div class="flex justify-between items-center font-medium">
        <h2 id="h2-modal-title">${o}</h2>
        <button id="btn-modal-close">&#10005;</button>
      </div>
      ${c==="map"?`
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
  </div>`.trim(),document.body.appendChild(n.firstChild),c==="map"){const e=document.getElementById("list-studio-basemaps");i.forEach((s,L)=>{const r=document.createElement("li");r.dataset.basemapId=s.id,r.ariaChecked=!1,r.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",L===0&&(r.ariaChecked=!0,r.classList.add("border"),r.classList.add("border-red-500")),r.addEventListener("click",()=>{e.childNodes.forEach(h=>{h.ariaChecked=!1,h.classList.remove("border"),h.classList.remove("border-red-500")}),r.ariaChecked=!0,r.classList.add("border"),r.classList.add("border-red-500"),console.log("clicked")});const E=document.createElement("div");E.className="w-6 h-6 bg-gray-300 rounded-full mr-2",r.appendChild(E);const u=document.createElement("div");u.className="flex flex-col",r.appendChild(u);const g=document.createElement("h3");g.className="font-semibold",g.innerHTML=s.name,u.appendChild(g);const f=document.createElement("p");f.className="text-xs text-gray-500",f.innerHTML=s.description,u.appendChild(f),e.appendChild(r)});const d=document.getElementById("input-studio-map-name");d.addEventListener("input",()=>{d.value!==""?d.removeAttribute("required"):d.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(d.value===""){d.setAttribute("required",!0);return}const s=e.querySelector("[aria-checked=true]").dataset.basemapId;w({name:d.value,basemapId:s}),p()})}else if(c==="source"){const e=document.getElementById("input-studio-source-name");e.addEventListener("input",()=>{e.value!==""?e.removeAttribute("required"):e.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(e.value===""){e.setAttribute("required",!0);return}I({name:e.value}),p()})}const a=document.getElementById("modal");a.addEventListener("click",e=>{e.target===a&&p()}),document.getElementById("btn-modal-close").addEventListener("click",()=>{p()})};C();const b=document.getElementById("btn-studio-maps"),S=document.getElementById("btn-studio-data"),y=document.getElementById("h-studio-type");y.innerHTML="Maps";v();b.addEventListener("click",()=>{S.classList.remove("active"),b.classList.add("active"),y.innerHTML="Maps",v()});S.addEventListener("click",()=>{b.classList.remove("active"),S.classList.add("active"),y.innerHTML="Sources",x()});const k=document.getElementById("btn-studio-new-map");k.addEventListener("click",()=>{const o=localStorage.getItem("maps");JSON.parse(o).length<5&&N({title:"Create map",type:"map"})});const B=document.getElementById("btn-studio-new-data-source");B.addEventListener("click",()=>{const o=localStorage.getItem("dataSources");JSON.parse(o).length<5&&N({title:"Create source",type:"source"})});const O=document.getElementById("reset-all");O.addEventListener("click",()=>{localStorage.setItem("maps",JSON.stringify([])),localStorage.setItem("dataSources",JSON.stringify([])),b.click()});
