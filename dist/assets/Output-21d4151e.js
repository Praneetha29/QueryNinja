import{j as e,d as m,r as a}from"./index-e97369d7.js";function g(){const t=()=>{const s=["customer_id,first_name,last_name,age,country",...m.map(n=>`${n.customer_id},${n.first_name},${n.last_name},${n.age},${n.country}`)].join(`
`),l=new Blob([s],{type:"text/csv"}),o=URL.createObjectURL(l),c=document.createElement("a");c.href=o,c.download="customer_data.csv",c.click(),URL.revokeObjectURL(o)};return e.jsx("button",{className:"export-button",onClick:t,"aria-label":"Export CSV",children:"Export CSV"})}function P({data:t}){const[s,l]=a.useState(1),[o,c]=a.useState("Run a query to see output"),n=a.useRef(null);a.useEffect(()=>{t.length>0?c(""):c("Run a query to see output")},[t]);const u=(s-1)*10,x=u+10,j=t.slice(u,x),i=Math.ceil(t.length/10),d=r=>{l(r)};return e.jsxs("div",{className:"output-console",ref:n,children:[e.jsx("h2",{children:"Output Console"}),t.length>0&&e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Customer ID"}),e.jsx("th",{children:"First Name"}),e.jsx("th",{children:"Last Name"}),e.jsx("th",{children:"Age"}),e.jsx("th",{children:"Country"})]})}),e.jsx("tbody",{children:j.map((r,p)=>e.jsxs("tr",{children:[e.jsx("td",{children:r.customer_id}),e.jsx("td",{children:r.first_name}),e.jsx("td",{children:r.last_name}),e.jsx("td",{children:r.age}),e.jsx("td",{children:r.country})]},p))})]}),o&&e.jsx("div",{className:"placeholder",children:o}),t.length>0&&e.jsxs("div",{className:"pagination",children:[e.jsx("button",{disabled:s===1,onClick:()=>d(s-1),children:"Previous"}),e.jsxs("span",{children:["Page ",s," of ",i]}),e.jsx("button",{disabled:s===i,onClick:()=>d(s+1),children:"Next"})]}),t.length>0&&e.jsx(g,{})]})}export{P as default};