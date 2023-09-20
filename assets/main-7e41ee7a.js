import{g as w}from"./getDataSources-586408e8.js";const I=({name:o,basemapId:r})=>{const c=crypto.randomUUID(),i=localStorage.getItem("maps"),a=JSON.parse(i),t={id:c,name:o,basemapId:r,options:{center:[29,41],zoom:9,pitch:0,bearing:0,interactive:!0}};return a.push(t),localStorage.setItem("maps",JSON.stringify(a)),y(),window.location.href=`./maps/?mapId=${c}`,c},M=({name:o,url:r})=>{const c=localStorage.getItem("dataSources"),i=JSON.parse(c),a={name:o,url:r};i.push(a),localStorage.setItem("dataSources",JSON.stringify(i)),N()},C=()=>[{name:"Colorful",id:"colorful",description:"A colorful map which is each country has different color"},{name:"Open Street Map (OSM)",id:"openstreetmap",description:"A map which is provided by Open Street Map"},{name:"Mapbox Outdoors",id:"mapbox-outdoors",description:"Mapbox Outdoors"},{name:"Mapbox Navigation Day",id:"mapbox-navigation-day",description:"Mapbox Navigation Day"},{name:"Blank",id:"blank",description:"A blank map"}],k=()=>{localStorage.getItem("maps")||localStorage.setItem("maps",JSON.stringify([])),localStorage.getItem("dataSources")||localStorage.setItem("dataSources",JSON.stringify([]))},p=()=>{document.getElementById("modal").remove(),document.querySelector("body").classList.remove("overflow-hidden")},x=({title:o,type:r})=>{const c=C();document.querySelector("body").classList.add("overflow-hidden");const a=document.createElement("div");if(a.innerHTML=`
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
      ${r==="map"?`
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
  </div>`.trim(),document.body.appendChild(a.firstChild),r==="map"){const e=document.getElementById("list-studio-basemaps");c.forEach((l,L)=>{const s=document.createElement("li");s.dataset.basemapId=l.id,s.ariaChecked=!1,s.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",L===0&&(s.ariaChecked=!0,s.classList.add("border"),s.classList.add("border-red-500")),s.addEventListener("click",()=>{e.childNodes.forEach(h=>{h.ariaChecked=!1,h.classList.remove("border"),h.classList.remove("border-red-500")}),s.ariaChecked=!0,s.classList.add("border"),s.classList.add("border-red-500"),console.log("clicked")});const E=document.createElement("div");E.className="w-6 h-6 bg-gray-300 rounded-full mr-2",s.appendChild(E);const u=document.createElement("div");u.className="flex flex-col",s.appendChild(u);const g=document.createElement("h3");g.className="font-semibold",g.innerHTML=l.name,u.appendChild(g);const f=document.createElement("p");f.className="text-xs text-gray-500",f.innerHTML=l.description,u.appendChild(f),e.appendChild(s)});const d=document.getElementById("input-studio-map-name");d.addEventListener("input",()=>{d.value!==""?d.removeAttribute("required"):d.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(d.value===""){d.setAttribute("required",!0);return}const l=e.querySelector("[aria-checked=true]").dataset.basemapId;I({name:d.value,basemapId:l}),p()})}else if(r==="source"){const e=document.getElementById("input-studio-source-name");e.addEventListener("input",()=>{e.value!==""?e.removeAttribute("required"):e.setAttribute("required",!0)}),document.getElementById("btn-studio-create-map-data").addEventListener("click",()=>{if(e.value===""){e.setAttribute("required",!0);return}M({name:e.value}),p()})}const t=document.getElementById("modal");t.addEventListener("click",e=>{e.target===t&&p()}),document.getElementById("btn-modal-close").addEventListener("click",()=>{p()})},y=()=>{const o=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.add("hidden"),o.classList.remove("hidden");const c=localStorage.getItem("maps"),i=JSON.parse(c),a=document.getElementById("list-studio");if(a.innerHTML="",i.length===0){const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const n=document.createElement("div");n.className="flex flex-col",t.appendChild(n);const e=document.createElement("h3");e.className="font-medium",e.innerHTML="No maps found",n.appendChild(e),a.appendChild(t);return}i.forEach(t=>{const n=document.createElement("li");n.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",n.addEventListener("click",()=>{window.location.href=`./maps/?mapId=${t.id}`});const e=document.createElement("div");e.className="w-6 h-6 bg-gray-300 rounded-full mr-2",n.appendChild(e);const d=document.createElement("div");d.className="flex flex-col",n.appendChild(d);const m=document.createElement("h3");m.className="font-semibold",m.innerHTML=t.name,d.appendChild(m);const l=document.createElement("p");l.className="text-xs text-gray-500",l.innerHTML=t.basemapId,d.appendChild(l),a.appendChild(n)})},N=()=>{const o=document.getElementById("btn-studio-new-map");document.getElementById("btn-studio-new-data-source").classList.remove("hidden"),o.classList.add("hidden");const c=w(),i=document.getElementById("list-studio");if(i.innerHTML="",c.length===0){const a=document.createElement("li");a.className="flex justify-start items-center cursor-pointer p-2 rounded-md text-gray-400";const t=document.createElement("div");t.className="flex flex-col",a.appendChild(t);const n=document.createElement("h3");n.className="font-medium",n.innerHTML="No data sources found",t.appendChild(n),i.appendChild(a);return}c.forEach(a=>{const t=document.createElement("li");t.className="flex justify-start items-center cursor-pointer hover:bg-gray-100 hover:text-red-800 p-2 rounded-md",t.addEventListener("click",()=>{console.log("clicked")});const n=document.createElement("div");n.className="w-6 h-6 bg-gray-300 rounded-full mr-2",t.appendChild(n);const e=document.createElement("div");e.className="flex flex-col",t.appendChild(e);const d=document.createElement("h3");d.className="font-semibold",d.innerHTML=a.name,e.appendChild(d);const m=document.createElement("p");m.className="text-xs text-gray-500",m.innerHTML=a.url,e.appendChild(m),i.appendChild(t)})};k();const b=document.getElementById("btn-studio-maps"),v=document.getElementById("btn-studio-data"),S=document.getElementById("h-studio-type");S.innerHTML="Maps";y();b.addEventListener("click",()=>{v.classList.remove("active"),b.classList.add("active"),S.innerHTML="Maps",y()});v.addEventListener("click",()=>{b.classList.remove("active"),v.classList.add("active"),S.innerHTML="Sources",N()});const B=document.getElementById("btn-studio-new-map");B.addEventListener("click",()=>{const o=localStorage.getItem("maps");JSON.parse(o).length<5&&x({title:"Create map",type:"map"})});const D=document.getElementById("btn-studio-new-data-source");D.addEventListener("click",()=>{const o=localStorage.getItem("dataSources");JSON.parse(o).length<5&&x({title:"Create source",type:"source"})});const O=document.getElementById("reset-all");O.addEventListener("click",()=>{localStorage.setItem("maps",JSON.stringify([])),localStorage.setItem("dataSources",JSON.stringify([])),b.click()});
