import{j as e,r as g,$ as A,L as k}from"./app-CLxL74cB.js";import{k as z,l as $,m as H,n as U,D as w,o as _,M as B,c as v,p as E,e as j,q as L,r as G,S as O,s as q,t as K,a as P,A as y,b,C as J,d,E as Q,f as Z,g as W,x as X,y as Y,Q as ee,z as se,h as ae,i as te,j as le,P as ne}from"./AuthenticatedLayout-FNBPBHFS.js";import{C as re,a as ie,b as oe,c as ce,d as S,e as I,f as de,u as me,T as xe,m as he,n as f,o as ue,p as F,q as ge,r as V,g as je,h as pe,i as fe,j as Ne,k as we,l as ve}from"./command-BGxswBid.js";import{B as o,c as p}from"./button-C8IOe_6Y.js";import{S as Ce,a as ye,b as be,c as Se,d as Ie}from"./select-BmbNATu0.js";import{I as D}from"./input-D18HD6kV.js";import{B as N,S as Fe}from"./badge-BO1GEFR3.js";import{P as Ve,a as De,b as Me}from"./popover-D8u-DhpO.js";import{ViewTouristDialog as Pe}from"./View-CU9dmmUs.js";import{DeleteTouristDialog as Re}from"./Delete-CD0ambmQ.js";import{Print as Te}from"./Print-DCQ2Dvg8.js";import"./index-cbqACyQa.js";import"./index-D1xUvb-1.js";import"./index-B8NKjWkD.js";import"./x-BgIleQgA.js";import"./dialog-CRR6Ri4u.js";import"./index-CzDFdiH0.js";import"./label-DIE-XY19.js";import"./eye-Dih7psDv.js";import"./alert-dialog-CUW-1gg4.js";import"./index-CAcYy167.js";function Ae({table:s}){return e.jsxs("div",{className:"flex items-center justify-between px-2",children:[e.jsxs("div",{className:"flex-1 text-sm text-muted-foreground",children:[s.getFilteredSelectedRowModel().rows.length," of"," ",s.getFilteredRowModel().rows.length," row(s) selected."]}),e.jsxs("div",{className:"flex items-center space-x-6 lg:space-x-8",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Rows per page"}),e.jsxs(Ce,{value:`${s.getState().pagination.pageSize}`,onValueChange:a=>{s.setPageSize(Number(a))},children:[e.jsx(ye,{className:"h-8 w-[70px]",children:e.jsx(be,{placeholder:s.getState().pagination.pageSize})}),e.jsx(Se,{side:"top",children:[10,20,30,40,50].map(a=>e.jsx(Ie,{value:`${a}`,children:a},a))})]})]}),e.jsxs("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",s.getState().pagination.pageIndex+1," of"," ",s.getPageCount()]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs(o,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>s.setPageIndex(0),disabled:!s.getCanPreviousPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to first page"}),e.jsx(z,{className:"h-4 w-4"})]}),e.jsxs(o,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>s.previousPage(),disabled:!s.getCanPreviousPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to previous page"}),e.jsx($,{className:"h-4 w-4"})]}),e.jsxs(o,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>s.nextPage(),disabled:!s.getCanNextPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to next page"}),e.jsx(H,{className:"h-4 w-4"})]}),e.jsxs(o,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>s.setPageIndex(s.getPageCount()-1),disabled:!s.getCanNextPage(),children:[e.jsx("span",{className:"sr-only",children:"Go to last page"}),e.jsx(U,{className:"h-4 w-4"})]})]})]})]})}function ke({table:s}){return e.jsxs(w,{children:[e.jsx(_,{asChild:!0,children:e.jsxs(o,{variant:"outline",size:"sm",className:"ml-auto hidden h-8 lg:flex",children:[e.jsx(B,{className:"mr-2 h-4 w-4"}),"View"]})}),e.jsxs(v,{align:"end",className:"w-[150px]",children:[e.jsx(E,{children:"Toggle columns"}),e.jsx(j,{}),s.getAllColumns().filter(a=>typeof a.accessorFn<"u"&&a.getCanHide()).map(a=>e.jsx(L,{className:"capitalize",checked:a.getIsVisible(),onCheckedChange:l=>a.toggleVisibility(!!l),children:a.id},a.id))]})]})}function ze({column:s,title:a,options:l}){const r=s==null?void 0:s.getFacetedUniqueValues(),n=new Set(s==null?void 0:s.getFilterValue());return e.jsxs(Ve,{children:[e.jsx(De,{asChild:!0,children:e.jsxs(o,{variant:"outline",size:"sm",className:"h-8 border-dashed",children:[e.jsx(G,{className:"mr-2 h-4 w-4"}),a,(n==null?void 0:n.size)>0&&e.jsxs(e.Fragment,{children:[e.jsx(O,{orientation:"vertical",className:"mx-2 h-4"}),e.jsx(N,{variant:"secondary",className:"rounded-sm px-1 font-normal lg:hidden",children:n.size}),e.jsx("div",{className:"hidden space-x-1 lg:flex",children:n.size>2?e.jsxs(N,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:[n.size," selected"]}):l.filter(t=>n.has(t.value)).map(t=>e.jsx(N,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:t.label},t.value))})]})]})}),e.jsx(Me,{className:"w-[200px] p-0",align:"start",children:e.jsxs(re,{children:[e.jsx(ie,{placeholder:a}),e.jsxs(oe,{children:[e.jsx(ce,{children:"No results found."}),e.jsx(S,{children:l.map(t=>{const c=n.has(t.value);return e.jsxs(I,{className:"cursor-pointer",onSelect:()=>{c?n.delete(t.value):n.add(t.value);const x=Array.from(n);s==null||s.setFilterValue(x.length?x:void 0)},children:[e.jsx("div",{className:p("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",c?"bg-primary text-primary-foreground":"opacity-50 [&_svg]:invisible"),children:e.jsx(q,{className:p("h-4 w-4")})}),t.icon&&e.jsx(t.icon,{className:"mr-2 h-4 w-4 text-muted-foreground"}),e.jsx("span",{children:t.label}),(r==null?void 0:r.get(t.value))&&e.jsx("span",{className:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",children:r.get(t.value)})]},t.value)})}),n.size>0&&e.jsxs(e.Fragment,{children:[e.jsx(de,{}),e.jsx(S,{children:e.jsx(I,{onSelect:()=>s==null?void 0:s.setFilterValue(void 0),className:"justify-center text-center",children:"Clear filters"})})]})]})]})})]})}function $e({table:s}){var l,r;const a=s.getState().columnFilters.length>0;return e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex flex-1 items-center space-x-2",children:[e.jsx(D,{placeholder:"Filter by Name...",value:((l=s.getColumn("name"))==null?void 0:l.getFilterValue())??"",onChange:n=>{var t;return(t=s.getColumn("name"))==null?void 0:t.setFilterValue(n.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),e.jsx(D,{placeholder:"Filter Nationality...",value:((r=s.getColumn("nationality"))==null?void 0:r.getFilterValue())??"",onChange:n=>{var t;return(t=s.getColumn("nationality"))==null?void 0:t.setFilterValue(n.target.value)},className:"h-8 w-[150px] lg:w-[250px]"})," ",s.getColumn("nationality")&&e.jsx(ze,{column:s.getColumn("nationality"),title:"Status",options:[{value:"Active",label:"Active"},{value:"Away",label:"Away"},{value:"Idle",label:"Idle"},{value:"Offline",label:"Offline"}]}),a&&e.jsxs(o,{variant:"ghost",onClick:()=>s.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Reset",e.jsx(K,{className:"ml-2 h-4 w-4"})]})]}),e.jsx(ke,{table:s})]})}function He({columns:s,data:a}){var C;const[l,r]=g.useState({}),[n,t]=g.useState({}),[c,x]=g.useState([]),[R,T]=g.useState([]),h=me({data:a,columns:s,state:{sorting:R,columnVisibility:n,rowSelection:l,columnFilters:c},initialState:{sortBy:[{id:"status",desc:!1}]},enableRowSelection:!0,onRowSelectionChange:r,onSortingChange:T,onColumnFiltersChange:x,onColumnVisibilityChange:t,getCoreRowModel:ve(),getFilteredRowModel:we(),getPaginationRowModel:Ne(),getSortedRowModel:fe(),getFacetedRowModel:pe(),getFacetedUniqueValues:je()});return e.jsxs("div",{className:"space-y-4",children:[e.jsx($e,{table:h}),e.jsx("div",{className:"rounded-md border",children:e.jsxs(xe,{children:[e.jsx(he,{children:h.getHeaderGroups().map(m=>e.jsx(f,{children:m.headers.map(i=>e.jsx(ue,{colSpan:i.colSpan,children:i.isPlaceholder?null:F(i.column.columnDef.header,i.getContext())},i.id))},m.id))}),e.jsx(ge,{children:(C=h.getRowModel().rows)!=null&&C.length?h.getRowModel().rows.map(m=>e.jsx(f,{"data-state":m.original.status==="Active"&&"selected",children:m.getVisibleCells().map(i=>e.jsx(V,{children:F(i.column.columnDef.cell,i.getContext())},i.id))},m.id)):e.jsx(f,{children:e.jsx(V,{colSpan:s.length,className:"h-24 text-center",children:"No results."})})})]})}),e.jsx(Ae,{table:h})]})}function u({column:s,title:a,className:l}){return s.getCanSort()?e.jsx("div",{className:p("flex items-center space-x-2",l),children:e.jsxs(w,{children:[e.jsx(P,{asChild:!0,children:e.jsxs(o,{variant:"ghost",size:"sm",className:"-ml-3 h-8 data-[state=open]:bg-accent",children:[e.jsx("span",{children:a}),s.getIsSorted()==="desc"?e.jsx(y,{className:"ml-2 h-4 w-4"}):s.getIsSorted()==="asc"?e.jsx(b,{className:"ml-2 h-4 w-4"}):e.jsx(J,{className:"ml-2 h-4 w-4"})]})}),e.jsxs(v,{align:"start",children:[e.jsxs(d,{onClick:()=>s.toggleSorting(!1),children:[e.jsx(b,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Asc"]}),e.jsxs(d,{onClick:()=>s.toggleSorting(!0),children:[e.jsx(y,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Desc"]}),e.jsx(j,{}),e.jsxs(d,{onClick:()=>s.toggleVisibility(!1),children:[e.jsx(Q,{className:"mr-2 h-3.5 w-3.5 text-muted-foreground/70"}),"Hide"]})]})]})}):e.jsx("div",{className:p(l),children:a})}function Ue({row:s}){return e.jsxs(w,{children:[e.jsx(P,{asChild:!0,children:e.jsxs(o,{variant:"ghost",className:"flex h-8 w-8 p-0 data-[state=open]:bg-muted",children:[e.jsx(Z,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Open menu"})]})}),e.jsxs(v,{align:"end",className:"w-[160px]",children:[e.jsx(d,{asChild:!0,children:e.jsx(Te,{row:s})}),e.jsx(j,{}),e.jsx(d,{asChild:!0,children:e.jsx(Pe,{row:s})}),e.jsx(d,{children:e.jsxs(A,{href:route("tourist.edit",s.original.id),className:"flex space-between w-full items-center",children:["Edit"," ",e.jsx(W,{children:e.jsx(Fe,{className:"h-4 w-4"})})]})}),e.jsx(j,{}),e.jsx(d,{asChild:!0,children:e.jsx(Re,{row:s})})]})]})}const M=[{value:"Active",label:"Active",icon:X},{value:"Idle",label:"Idle",icon:Y},{value:"Away",label:"Away",icon:ee},{value:"Offline",label:"Offline",icon:se}],_e=[{accessorKey:"id_no",header:({column:s})=>e.jsx(u,{column:s,title:"ID",className:"pl-3"}),cell:({row:s})=>e.jsxs("div",{className:"w-[80px] pl-3",children:["#",s.getValue("id_no")]}),enableSorting:!0,enableHiding:!0},{accessorKey:"name",header:({column:s})=>e.jsx(u,{column:s,title:"Name"}),cell:({row:s})=>{let a=M[Math.floor(Math.random()*M.length)].value,l=s.original.first_name,r=s.original.last_name;({M:"boy",F:"girl"})[s.original.gender];let n=`${l} ${r}`,t=s.original.country.toUpperCase();const c={Iran:"IR","United States":"US","United Kingdom":"GB",Canada:"CA",Australia:"AU",Germany:"DE",France:"FR",Spain:"ES",Italy:"IT",Japan:"JP",China:"CN",Zimbabwe:"ZW"};return Object.keys(c).includes(s.original.country)&&(t=c[s.original.country]),e.jsxs("div",{className:"flex space-x-2 ml-4 items-center",children:[e.jsx("div",{className:`avatar ${a.toLowerCase()}`,children:e.jsxs(ae,{className:"h-8 w-8 rounded-lg",children:[e.jsx(te,{src:`https://flagsapi.com/${t.slice(0,2)}/flat/64.png`,alt:"Avatar"}),e.jsx(le,{className:"font-semi-bold",children:`${l[0]}${r[0]}`})]})}),e.jsx("span",{className:"max-w-[500px] truncate font-medium",children:n})]})},filterFn:(s,a,l)=>{const r=s.getValue("firstName");return console.log(r,"rowValue"),l.includes(r.toLowerCase())}},{accessorKey:"nationality",header:({column:s})=>e.jsx(u,{column:s,title:"Nationality"}),cell:({row:s})=>e.jsx("div",{className:"flex items-center",children:e.jsx("span",{children:s.getValue("nationality")})}),toggleSorting:!0,filterFn:(s,a,l)=>l.includes(s.getValue(a))},{accessorKey:"phone_number",header:({column:s})=>e.jsx(u,{column:s,title:"Phone Number"}),cell:({row:s})=>e.jsx("div",{className:"flex items-center",children:e.jsx("span",{children:s.getValue("phone_number")})}),filterFn:(s,a,l)=>l.includes(s.getValue(a))},{accessorKey:"arrival_date",header:({column:s})=>e.jsx(u,{column:s,title:"Arrival Date"}),cell:({row:s})=>e.jsx("div",{className:"flex items-center",children:e.jsx("span",{children:s.getValue("arrival_date")})}),filterFn:(s,a,l)=>l.includes(s.getValue(a))},{id:"actions",cell:({row:s})=>e.jsx(Ue,{row:s})}];function os({data:s}){return e.jsxs(ne,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Tourist"}),breadcrumb:"Tourist",subBread:"View All",children:[e.jsx(k,{title:"Tourists"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg",children:e.jsx(He,{data:s,columns:_e})})})})]})}export{os as default};
