"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9840],{9840:function(e,a,r){r.r(a);var i=r(29439),s=r(72791),l=r(31243),t=r(78983),c=(r(33035),r(24846)),n=r(99161),o=(r(72276),r(42613),r(6733),r(42812),r(53507),r(70683),r(96558),r(8379),r(80184));a.default=function(){var e=(0,s.useState)([]),a=(0,i.Z)(e,2),r=(a[0],a[1],(0,s.useState)(!1)),d=(0,i.Z)(r,2),h=d[0],u=d[1],p=(0,s.useState)(!1),m=(0,i.Z)(p,2),x=m[0],y=m[1],g=(0,s.useState)(""),j=(0,i.Z)(g,2),b=j[0],f=j[1],v=(0,s.useState)(""),C=(0,i.Z)(v,2),N=C[0],Z=C[1],w=(0,s.useState)(""),M=(0,i.Z)(w,2),A=M[0],R=M[1],J=(0,s.useState)(""),k=(0,i.Z)(J,2),S=k[0],F=k[1],H=(0,s.useState)(""),V=(0,i.Z)(H,2),$=V[0],_=V[1],B=(0,s.useState)(""),D=(0,i.Z)(B,2),E=D[0],O=D[1],T=(0,s.useState)(""),Y=(0,i.Z)(T,2),P=(Y[0],Y[1],function(){var e=new FormData;e.append("courierID",b),e.append("receiverName",A+" "+S),e.append("status","COMPLETE"),e.append("deliverDate",$),e.append("deliverTime",E),e.append("receiverRollNo",N),(0,l.Z)({url:"http://localhost:9090/updateCourier",method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("details")).token},data:e}).then((function(e){u(!0),y(!1)})).catch((function(e){y(!0),u(!1)}))});return(0,o.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,o.jsx)(t.KB,{children:(0,o.jsx)(t.rb,{className:"justify-content-center",children:(0,o.jsx)(t.b7,{md:9,lg:7,xl:6,children:(0,o.jsx)(t.xH,{className:"mx-4",children:(0,o.jsxs)(t.sl,{className:"p-4",children:[(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)(t.Gc,{dismissible:!0,color:"success",visible:h,children:"Courier Receiver Info Updated!"})}),(0,o.jsx)("div",{className:"mt-2",children:(0,o.jsx)(t.Gc,{dismissible:!0,color:"danger",visible:x,children:"Courier Update Failed!"})}),(0,o.jsxs)(t.lx,{onSubmit:function(){P()},children:[(0,o.jsx)("h1",{children:"Reciever Info Update"}),(0,o.jsx)("p",{className:"text-medium-emphasis",children:"Enter the following details"}),(0,o.jsxs)(t.YR,{className:"mb-3",children:[(0,o.jsx)(t.wV,{children:(0,o.jsx)(c.Z,{icon:n.E})}),(0,o.jsx)(t.jO,{placeholder:"Courier ID",autoComplete:"cid",value:b,onChange:function(e){f(e.target.value)}})]}),(0,o.jsxs)(t.YR,{className:"mb-3",children:[(0,o.jsx)(t.wV,{children:(0,o.jsx)(c.Z,{icon:n.E})}),(0,o.jsx)(t.jO,{placeholder:"Reciever Roll Number",autoComplete:"username",value:N,onChange:function(e){Z(e.target.value)}})]}),(0,o.jsxs)(t.YR,{className:"mb-3",children:[(0,o.jsx)(t.wV,{children:(0,o.jsx)(c.Z,{icon:n.E})}),(0,o.jsx)(t.jO,{placeholder:"First Name",value:A,onChange:function(e){R(e.target.value)}})]}),(0,o.jsxs)(t.YR,{className:"mb-3",children:[(0,o.jsx)(t.wV,{children:(0,o.jsx)(c.Z,{icon:n.E})}),(0,o.jsx)(t.jO,{placeholder:"Last Name",value:S,onChange:function(e){F(e.target.value)}})]}),(0,o.jsxs)(t.YR,{className:"mb-3",children:[(0,o.jsx)(t.wV,{children:(0,o.jsx)(c.Z,{icon:n.E})}),(0,o.jsx)(t.jO,{placeholder:"Date (YYYY-MM-DD)",value:$,onChange:function(e){_(e.target.value)}})]}),(0,o.jsxs)(t.YR,{className:"mb-3",children:[(0,o.jsx)(t.wV,{children:(0,o.jsx)(c.Z,{icon:n.E})}),(0,o.jsx)(t.jO,{placeholder:"Time (HH:MM:SS)",value:E,onChange:function(e){O(e.target.value)}})]}),(0,o.jsx)("div",{className:"d-grid",children:(0,o.jsx)(t.u5,{type:"submit",color:"success",children:"Recieve Courier"})})]})]})})})})})})}},96558:function(e,a,r){var i=r(1413),s=(r(72791),r(78983)),l=r(24846),t=r(30434),c=r(24914),n=r(75015),o=r(49909),d=r(33035),h=r(80184);a.Z=function(e){var a=e.withCharts,r={elements:{line:{tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}};return(0,h.jsxs)(s.rb,{children:[(0,h.jsx)(s.b7,{sm:6,lg:3,children:(0,h.jsx)(s.bP,(0,i.Z)((0,i.Z)({className:"mb-4"},a&&{chart:(0,h.jsx)(d.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[65,59,84,84,51,55,40],fill:!0}]},options:r})}),{},{icon:(0,h.jsx)(l.Z,{icon:t.t,height:52,className:"my-4 text-white"}),values:[{title:"friends",value:"89K"},{title:"feeds",value:"459"}],style:{"--cui-card-cap-bg":"#3b5998"}}))}),(0,h.jsx)(s.b7,{sm:6,lg:3,children:(0,h.jsx)(s.bP,(0,i.Z)((0,i.Z)({className:"mb-4"},a&&{chart:(0,h.jsx)(d.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[1,13,9,17,34,41,38],fill:!0}]},options:r})}),{},{icon:(0,h.jsx)(l.Z,{icon:c._,height:52,className:"my-4 text-white"}),values:[{title:"followers",value:"973k"},{title:"tweets",value:"1.792"}],style:{"--cui-card-cap-bg":"#00aced"}}))}),(0,h.jsx)(s.b7,{sm:6,lg:3,children:(0,h.jsx)(s.bP,(0,i.Z)((0,i.Z)({className:"mb-4"},a&&{chart:(0,h.jsx)(d.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[78,81,80,45,34,12,40],fill:!0}]},options:r})}),{},{icon:(0,h.jsx)(l.Z,{icon:n.n,height:52,className:"my-4 text-white"}),values:[{title:"contacts",value:"500"},{title:"feeds",value:"1.292"}],style:{"--cui-card-cap-bg":"#4875b4"}}))}),(0,h.jsx)(s.b7,{sm:6,lg:3,children:(0,h.jsx)(s.bP,(0,i.Z)((0,i.Z)({className:"mb-4",color:"warning"},a&&{chart:(0,h.jsx)(d.FR,{className:"position-absolute w-100 h-100",type:"line",data:{labels:["January","February","March","April","May","June","July"],datasets:[{backgroundColor:"rgba(255,255,255,.1)",borderColor:"rgba(255,255,255,.55)",pointHoverBackgroundColor:"#fff",borderWidth:2,data:[35,23,56,22,97,23,64],fill:!0}]},options:r})}),{},{icon:(0,h.jsx)(l.Z,{icon:o.J,height:52,className:"my-4 text-white"}),values:[{title:"events",value:"12+"},{title:"meetings",value:"4"}]}))})]})}},8379:function(e,a,r){r(72791);var i=r(78983),s=r(76131),l=r(33035),t=r(24846),c=r(38957),n=r(3896),o=r(40289),d=r(80184);a.Z=function(){return(0,d.jsxs)(i.rb,{children:[(0,d.jsx)(i.b7,{sm:6,lg:3,children:(0,d.jsx)(i.co,{className:"mb-4",color:"primary",value:(0,d.jsxs)(d.Fragment,{children:["26K"," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(-12.4% ",(0,d.jsx)(t.Z,{icon:c.t}),")"]})]}),title:"Users",action:(0,d.jsxs)(i.w5,{alignment:"end",children:[(0,d.jsx)(i.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:n.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(i.$H,{children:[(0,d.jsx)(i.$f,{children:"Action"}),(0,d.jsx)(i.$f,{children:"Another action"}),(0,d.jsx)(i.$f,{children:"Something else here..."}),(0,d.jsx)(i.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(l.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,s.Z)("--cui-primary"),data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(i.b7,{sm:6,lg:3,children:(0,d.jsx)(i.co,{className:"mb-4",color:"info",value:(0,d.jsxs)(d.Fragment,{children:["$6.200"," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(40.9% ",(0,d.jsx)(t.Z,{icon:o.T}),")"]})]}),title:"Income",action:(0,d.jsxs)(i.w5,{alignment:"end",children:[(0,d.jsx)(i.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:n.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(i.$H,{children:[(0,d.jsx)(i.$f,{children:"Action"}),(0,d.jsx)(i.$f,{children:"Another action"}),(0,d.jsx)(i.$f,{children:"Something else here..."}),(0,d.jsx)(i.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(l.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:(0,s.Z)("--cui-info"),data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(i.b7,{sm:6,lg:3,children:(0,d.jsx)(i.co,{className:"mb-4",color:"warning",value:(0,d.jsxs)(d.Fragment,{children:["2.49"," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(84.7% ",(0,d.jsx)(t.Z,{icon:o.T}),")"]})]}),title:"Conversion Rate",action:(0,d.jsxs)(i.w5,{alignment:"end",children:[(0,d.jsx)(i.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:n.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(i.$H,{children:[(0,d.jsx)(i.$f,{children:"Action"}),(0,d.jsx)(i.$f,{children:"Another action"}),(0,d.jsx)(i.$f,{children:"Something else here..."}),(0,d.jsx)(i.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(l.oK,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(i.b7,{sm:6,lg:3,children:(0,d.jsx)(i.co,{className:"mb-4",color:"danger",value:(0,d.jsxs)(d.Fragment,{children:["44K"," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(-23.6% ",(0,d.jsx)(t.Z,{icon:c.t}),")"]})]}),title:"Sessions",action:(0,d.jsxs)(i.w5,{alignment:"end",children:[(0,d.jsx)(i.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:n.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(i.$H,{children:[(0,d.jsx)(i.$f,{children:"Action"}),(0,d.jsx)(i.$f,{children:"Another action"}),(0,d.jsx)(i.$f,{children:"Something else here..."}),(0,d.jsx)(i.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(l.JZ,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})}},30434:function(e,a,r){r.d(a,{t:function(){return i}});var i=["32 32","<path d='M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z'/>"]},75015:function(e,a,r){r.d(a,{n:function(){return i}});var i=["32 32","<path d='M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z'/>"]},24914:function(e,a,r){r.d(a,{_:function(){return i}});var i=["32 32","<path d='M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z'/>"]},38957:function(e,a,r){r.d(a,{t:function(){return i}});var i=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75' class='ci-primary'/>"]},40289:function(e,a,r){r.d(a,{T:function(){return i}});var i=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>"]},49909:function(e,a,r){r.d(a,{J:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z' class='ci-primary'/><rect width='32' height='32' x='112' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"]},3896:function(e,a,r){r.d(a,{t:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z' class='ci-primary'/>"]},99161:function(e,a,r){r.d(a,{E:function(){return i}});var i=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M411.6,343.656l-72.823-47.334,27.455-50.334A80.23,80.23,0,0,0,376,207.681V128a112,112,0,0,0-224,0v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L116.4,343.656A79.725,79.725,0,0,0,80,410.732V496H448V410.732A79.727,79.727,0,0,0,411.6,343.656ZM416,464H112V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,184,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L296.5,307.007l97.662,63.479h0A47.836,47.836,0,0,1,416,410.732Z' class='ci-primary'/>"]},76131:function(e,a,r){r.d(a,{Z:function(){return i}});var i=function(e,a){return void 0===a&&(a=document.body),window.getComputedStyle(a,null).getPropertyValue(e).replace(/^\s/,"")}},72276:function(e,a,r){e.exports=r.p+"static/media/1.34eedf58c0876517e858.jpg"},42613:function(e,a,r){e.exports=r.p+"static/media/2.0c06e43dc16bee6cdfed.jpg"},6733:function(e,a,r){e.exports=r.p+"static/media/3.07e357f51e1b86d9e741.jpg"},42812:function(e,a,r){e.exports=r.p+"static/media/4.3ddf28ab435770c6d69f.jpg"},53507:function(e,a,r){e.exports=r.p+"static/media/5.3e55ee5f667d94054da3.jpg"},70683:function(e,a,r){e.exports=r.p+"static/media/6.edefb235566ed72a7429.jpg"}}]);
//# sourceMappingURL=9840.ce417348.chunk.js.map