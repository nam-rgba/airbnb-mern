import{r as c,_ as d,m as e,j as t,n as E}from"./index-f43ef311.js";import{s as _}from"./tabs.module-b06a7fa1.js";const g="_cardContainer_1yl00_1",v="_map_1yl00_23",h="_name_1yl00_67",o={cardContainer:g,map:v,name:h};function I(n){const[i,r]=c.useState();try{if(d(Object.assign({"../../assets/countries/001-united-kingdom.png":()=>e(()=>import("./001-united-kingdom-1f6c498c.js"),[]),"../../assets/countries/002-flexible.png":()=>e(()=>import("./002-flexible-45df965c.js"),[]),"../../assets/countries/003-united-states.png":()=>e(()=>import("./003-united-states-be1256da.js"),[]),"../../assets/countries/004-germany.png":()=>e(()=>import("./004-germany-2cb4f977.js"),[]),"../../assets/countries/005-france.png":()=>e(()=>import("./005-france-7f93ed8f.js"),[]),"../../assets/countries/006-china.png":()=>e(()=>import("./006-china-39c4fd47.js"),[]),"../../assets/countries/007-india.png":()=>e(()=>import("./007-india-33bf99e7.js"),[]),"../../assets/countries/008-brazil.png":()=>e(()=>import("./008-brazil-578e8826.js"),[]),"../../assets/countries/009-spain.png":()=>e(()=>import("./009-spain-c68193b8.js"),[]),"../../assets/countries/010-italy.png":()=>e(()=>import("./010-italy-d3214169.js"),[]),"../../assets/countries/011-australia.png":()=>e(()=>import("./011-australia-ae048d4d.js"),[]),"../../assets/countries/012-vietnam.png":()=>e(()=>import("./012-vietnam-e707fed4.js"),[]),"../../assets/countries/013-portugal.png":()=>e(()=>import("./013-portugal-b72af426.js"),[]),"../../assets/countries/014-south-korea.png":()=>e(()=>import("./014-south-korea-ba45f3ef.js"),[]),"../../assets/countries/015-thailand.png":()=>e(()=>import("./015-thailand-9c83ff80.js"),[]),"../../assets/countries/016-philippines.png":()=>e(()=>import("./016-philippines-ff6de9cd.js"),[]),"../../assets/countries/017-poland.png":()=>e(()=>import("./017-poland-5bd2a6ad.js"),[]),"../../assets/countries/018-poland.png":()=>e(()=>import("./018-poland-2f1ac1b5.js"),[])}),`../../assets/countries/${n.name}.png`).then(a=>{r(a.default)}),!i)return null}catch{return console.log(`Image with name "${n.name}" does not exist`),null}return t.jsxs("div",{className:o.cardContainer,children:[t.jsx("div",{className:o.map,children:t.jsx("img",{src:i,alt:n.name})}),t.jsx("div",{className:o.name,children:n.displayName})]})}function R({handleChoose:n,setSearchValue:i,searchValue:r}){const[a,u]=c.useState(""),l=E.filter(s=>s.name.toLowerCase().includes(a.toLowerCase())),m=s=>{u(s.target.value)},p=s=>{console.log("just call change country to... "+s),i({...r,country:s}),n()};return t.jsxs("div",{className:_.container,children:[t.jsx("div",{className:_.search_input,children:t.jsx("input",{type:"text",placeholder:"Somewhere only we know...",value:a,onChange:m})}),t.jsx("div",{className:_.result_where,children:l.map(s=>t.jsx("div",{onClick:()=>p(s.nameDisplay),children:t.jsx(I,{name:s.name,displayName:s.nameDisplay})},s.id))})]})}export{R as default};