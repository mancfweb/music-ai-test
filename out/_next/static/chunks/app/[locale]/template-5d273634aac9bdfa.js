(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[718],{8194:(e,l,t)=>{Promise.resolve().then(t.bind(t,3401)),Promise.resolve().then(t.bind(t,8193)),Promise.resolve().then(t.bind(t,9835)),Promise.resolve().then(t.bind(t,5682))},9835:(e,l,t)=>{"use strict";t.d(l,{default:()=>d});var s=t(5155),a=t(7266),i=t(5887),n=t(2880),c=t(4036);let r=e=>{let{children:l,className:t,...a}=e;return(0,s.jsx)("select",{className:"appearance-none h-[44px] py-2 px-4 bg-mswhite-10 bg-arrow-select bg-no-repeat rounded-lg ".concat(t),...a,children:l})};r.Option=e=>{let{children:l,value:t}=e;return(0,s.jsx)("option",{value:t,children:l})};let o=e=>{let{item:l}=e;return(0,s.jsx)("ul",{className:"flex flex-col gap-4",children:l.dropdown.map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(i.N_,{href:e.link,title:e.title,className:"text-mswhite-60 font-semibold hover:text-mswhite-80",children:e.title})},"footermenu-subitem-".concat(l.id,"-").concat(e.id)))})},x=e=>{let{item:l,children:t,className:a}=e;return l.link&&l.openNewWindow?(0,s.jsx)("a",{href:l.link,target:"_blank",title:l.title,className:a,children:t}):l.link&&!l.openNewWindow?(0,s.jsx)(i.N_,{href:l.link,title:l.title,className:a,children:t}):(0,s.jsx)("h4",{className:a,children:t})},d=e=>{let{data:l}=e,t=(0,i.a8)(),d=(0,i.rd)(),h=(0,a.useLocale)(),m=(0,a.useTranslations)("footer"),f=e=>{d.replace(t,{locale:e})},p=Object.keys(l.social);return(0,s.jsx)("footer",{className:"relative py-10 bg-black overflow-hidden before:gradient-circle-one after:gradient-circle-two lg:py-20",children:(0,s.jsxs)("div",{className:"relative z-10 container mx-auto px-6 lg:px-0",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-start w-full lg:flex-row lg:justify-between",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(n.A,{}),(0,s.jsx)("p",{className:"mt-2",children:l.helpText})]}),(0,s.jsxs)(r,{className:"my-10 max-w-[56%] lg:max-w-auto",defaultValue:h,onChange:e=>f(e.target.value),children:[(0,s.jsx)(r.Option,{value:"en",children:"English"}),(0,s.jsx)(r.Option,{value:"pt",children:"Portugu\xeas"})]}),(0,s.jsx)("ul",{className:"flex items-center gap-6",children:p.map(e=>{let t=l.social[e];return(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:t,target:"_blank",title:e,className:"text-white hover:text-mswhite-80",children:(0,s.jsx)(c.A,{name:e.toLocaleLowerCase(),className:"w-6 h-6"})})},"footer-social-item-".concat(e))})})]}),(0,s.jsx)("div",{className:"flex flex-col gap-10 mt-10 lg:flex-row lg:mt-0",children:l.footerMenu.map(e=>(0,s.jsxs)("div",{className:"flex flex-col w-40",children:[(0,s.jsx)(x,{item:e,className:"mb-5 text-sm text-mswhite-40 font-semibold uppercase",children:e.title}),e.dropdown.length>0&&(0,s.jsx)(o,{item:e})]},"footermenu-item-".concat(e.id)))})]}),(0,s.jsx)("hr",{className:"mt-12 mb-10 border-mswhite-25 lg:mt-20"}),(0,s.jsxs)("div",{className:"flex flex-col items-start justify-start w-full lg:flex-row lg:items-center lg:justify-between",children:[(0,s.jsx)("p",{children:l.copyright}),(0,s.jsxs)("p",{className:"flex items-center gap-1.5 text-sm text-mswhite-40",children:["Status"," ",(0,s.jsxs)("span",{className:"flex items-center gap-1.5 text-[#0AFFA7]",children:[(0,s.jsx)("span",{className:"flex w-1.5 h-1.5 rounded-full bg-[#0AFFA7]"})," ",m("status")]})]})]})]})})}},5682:(e,l,t)=>{"use strict";t.d(l,{default:()=>o});var s=t(5155),a=t(2115),i=t(5887),n=t(2880),c=t(4036);let r={mobileOpen:"inset-0 z-[9991] bg-black flex-col justify-start items-start",default:"top-0 inset-x-0 justify-between items-center"},o=e=>{var l;let{data:t}=e,[o,x]=(0,a.useState)(!1),d=e=>{document.body.style.overflowY=e?"hidden":"scroll",x(e)},h=t.menu.find(e=>e.link&&"/login"===e.link);return(0,s.jsxs)("header",{className:"fixed flex container px-6 mx-auto lg:py-[21px] lg:px-0 ".concat(o?r.mobileOpen:r.default," "),children:[(0,s.jsxs)("div",{className:"flex items-center justify-between w-full py-6 lg:py-0 lg:w-auto",children:[(0,s.jsx)(i.N_,{href:"/",title:"Go to Home",children:(0,s.jsx)(n.A,{})}),o?(0,s.jsx)("button",{type:"button",className:"flex items-center justify-center lg:hidden",onClick:()=>d(!1),children:(0,s.jsx)(c.A,{name:"close",className:"w-[18px] h-[12px]"})}):(0,s.jsx)("button",{type:"button",className:"flex items-center justify-center lg:hidden",onClick:()=>d(!0),children:(0,s.jsx)(c.A,{name:"bars",className:"w-[18px] h-[12px]"})})]}),(0,s.jsx)("nav",{className:"".concat(o?"flex flex-col flex-grow mt-2.5":"hidden"," items-start gap-2 lg:flex lg:items-center lg:gap-5 lg:pr-10 lg:relative"),children:t.menu.filter(e=>"/login"!==e.link).map(e=>{var l;return(0,s.jsx)(i.N_,{href:null!==(l=e.link)&&void 0!==l?l:"#",title:e.title,className:"py-3 px-0 text-sm font-medium lg:px-3 ".concat(1===e.id?"text-white":"text-msgray-200 hover:text-white"),children:e.title},"header-menu-".concat(e.id))})}),h&&(0,s.jsxs)(i.N_,{title:h.title,href:null!==(l=h.link)&&void 0!==l?l:"#",className:"".concat(o?"flex mb-10":"hidden"," items-center py-3 text-base font-semibold text-white lg:flex hover:text-mswhite-80"),children:[h.title," ",(0,s.jsx)(c.A,{name:"arrow-right",className:"w-6 h-6"})]})]})}},2880:(e,l,t)=>{"use strict";t.d(l,{A:()=>a});var s=t(5155);let a=()=>(0,s.jsx)("span",{children:(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"104",height:"22",fill:"none",viewBox:"0 0 104 22",children:[(0,s.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M16.925.302a.75.75 0 0 1 .299.599v14.052999999999999a3 3 0 0 1-2.177 2.884l-1.315.376a2.554 2.554 0 1 1-1.401-4.91l2.305-.658a1.5 1.5 0 0 0 1.088-1.442V5.645l-9 2.572v9.737a3 3 0 0 1-2.177 2.884l-1.32.377-.01.003a2.553 2.553 0 0 1-1.402-4.91l.01-.002 2.31-.66a1.5 1.5 0 0 0 1.088-1.442V3.9a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122M6.723 6.657l9-2.572v-2.19l-9 2.572zm-1.5 10.145a3 3 0 0 1-.675.286l-2.304.658a1.053 1.053 0 0 0 .578 2.025l1.313-.375a1.5 1.5 0 0 0 1.088-1.442zm10.5-3a3 3 0 0 1-.676.286l-2.31.66-.01.003a1.053 1.053 0 1 0 .578 2.025l.01-.003 1.32-.377a1.5 1.5 0 0 0 1.088-1.442zM31.46 4.15h-4.236V15.28h4.237c3.62 0 5.521-1.988 5.521-5.564S35.08 4.15 31.461 4.15m-.216 9.3h-1.835V5.98h1.835c2.519 0 3.503 1.113 3.503 3.736s-.984 3.735-3.503 3.735M46.436 11.13c0 .206-.017.381-.05.54H40.13c.134 1.574.951 2.274 2.403 2.274 1.017 0 1.6-.398 1.884-1.225h1.902c-.45 1.829-1.918 2.766-3.92 2.766-2.352 0-4.287-1.335-4.287-4.308 0-2.988 1.902-4.323 4.254-4.323 2.419 0 4.07 1.367 4.07 4.276m-6.306-.588h4.287c-.05-1.32-.733-2.13-2.085-2.13-1.284 0-2.068.73-2.202 2.13",clipRule:"evenodd"}),(0,s.jsx)("path",{fill:"#fff",d:"m49.83 15.278-3.202-8.266h2.169l2.335 6.327h.083l2.336-6.327h2.185l-3.22 8.266z"}),(0,s.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M64.257 11.13c0 .206-.016.381-.05.54h-6.255c.133 1.574.95 2.274 2.402 2.274 1.017 0 1.601-.398 1.885-1.225h1.902c-.45 1.829-1.919 2.766-3.92 2.766-2.352 0-4.287-1.335-4.287-4.308 0-2.988 1.901-4.323 4.253-4.323 2.419 0 4.07 1.367 4.07 4.276m-6.305-.588h4.287c-.05-1.32-.734-2.13-2.085-2.13-1.285 0-2.069.73-2.202 2.13",clipRule:"evenodd"}),(0,s.jsx)("path",{fill:"#fff",d:"M65.62 15.279V4.15h2.135v11.128z"}),(0,s.jsx)("path",{fill:"#fff",fillRule:"evenodd",d:"M73.432 15.438c-2.285 0-4.303-1.415-4.303-4.292 0-2.878 2.018-4.292 4.303-4.292 2.269 0 4.304 1.414 4.304 4.292 0 2.877-2.035 4.292-4.304 4.292m0-1.701c1.335 0 2.285-.874 2.285-2.591s-.95-2.592-2.285-2.592c-1.351 0-2.302.875-2.302 2.592s.95 2.59 2.302 2.59M83.929 6.854c1.968 0 3.82 1.383 3.82 4.292s-1.852 4.292-3.82 4.292c-1.251 0-2.269-.54-2.686-1.352V18.3h-2.135V7.012h2.135v1.193c.417-.811 1.435-1.351 2.686-1.351m-.5 6.883c1.284 0 2.318-.922 2.318-2.591s-1.034-2.592-2.319-2.592c-1.267 0-2.285.922-2.285 2.592s1.018 2.59 2.285 2.59M97.114 11.13c0 .206-.016.381-.05.54H90.81c.133 1.574.95 2.274 2.402 2.274 1.017 0 1.601-.398 1.885-1.225h1.901c-.45 1.829-1.918 2.766-3.92 2.766-2.352 0-4.287-1.335-4.287-4.308 0-2.988 1.902-4.323 4.254-4.323 2.419 0 4.07 1.367 4.07 4.276m-6.305-.588h4.287c-.05-1.32-.734-2.13-2.085-2.13-1.285 0-2.069.73-2.202 2.13",clipRule:"evenodd"}),(0,s.jsx)("path",{fill:"#fff",d:"M103.231 6.949c.25 0 .467.031.667.08v1.716a6 6 0 0 0-.667-.048c-1.535 0-2.619.89-2.619 2.735v3.846h-2.135V7.012h2.135v1.971h.05c.317-1.208 1.185-2.034 2.569-2.034"})]})})}},e=>{var l=l=>e(e.s=l);e.O(0,[173,751,652,441,517,358],()=>l(8194)),_N_E=e.O()}]);