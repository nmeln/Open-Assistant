"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[8355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(n),d=o,h=l["".concat(c,".").concat(d)]||l[d]||f[d]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[l]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"The Architecture so Far!",description:"This is the architecture of our app so far.",slug:"2023-02-11-architecture",authors:"AbdBarho",tags:["open-assistant"]},s=void 0,i={permalink:"/Open-Assistant/blog/2023-02-11-architecture",source:"@site/blog/2023-02-11-architecture.md",title:"The Architecture so Far!",description:"This is the architecture of our app so far.",date:"2023-02-11T00:00:00.000Z",formattedDate:"February 11, 2023",tags:[{label:"open-assistant",permalink:"/Open-Assistant/blog/tags/open-assistant"}],readingTime:1.15,hasTruncateMarker:!1,authors:[{name:"Abdullah Barhoum",title:"Semi-professional D\xf6ner Enjoyer",imageURL:"https://avatars.githubusercontent.com/u/24505302?v=4",key:"AbdBarho"}],frontMatter:{title:"The Architecture so Far!",description:"This is the architecture of our app so far.",slug:"2023-02-11-architecture",authors:"AbdBarho",tags:["open-assistant"]},prevItem:{title:"Open Assistant Inference Backend Development (Hands-On Coding)",permalink:"/Open-Assistant/blog/2023/02/24/open-assistant-inference-backend-development-hands-on-coding"},nextItem:{title:"We Need Your Help!",permalink:"/Open-Assistant/blog/we-need-your-help"}},c={authorsImageUrls:[void 0]},u=[],p={toc:u},l="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I thought it would make sense to document our architecture as a blog post, since\nit would be easily visible for everyone, and it would also be nice to look back\na couple months from now and see how stuff has changed :)"),(0,o.kt)("p",null,"A lot of work was done in the past couple of week to establish the needed\ninfrastructure both for data collection and inference purposes. Thanks to\neveryone, and especially community members who supported us so far!"),(0,o.kt)("p",null,"Our current plan for the architecture of the Open Assistant is as follows:"),(0,o.kt)("mermaid",{value:"flowchart TD\n  subgraph next[Web Frontend]\n    direction TB\n    website([Browser]) & nextbackend[Backend] & webpostgres[(PostgreSQL)]\n  end\n\n  subgraph data[Python backend]\n    direction TB\n    backend[Backend] & postgres[(PostgreSQL)] & redis[(Redis)]\n  end\n\n  subgraph inference[Inference Service]\n    direction TB\n    inferenceServer[Server] -.- infpostgres[(PostgreSQL)]\n  end\n\n  subgraph workers[Inference Workers]\n    direction TB\n    worker1[Worker] --- textgen1[Text\\ngenerator]\n    worker2[Worker] --- textgen2[Text\\ngenerator]\n    worker3[Worker] --- textgen3[Text\\ngenerator]\n  end\n\n  website --\x3e nextbackend\n  nextbackend -.- webpostgres\n\n  next --- data\n\n  backend -.- postgres & redis\n\n  next --- inference\n\n  inference --- workers"}),(0,o.kt)("p",null,"We are working on setting up the inference as shown above, and considering our\noptions for hosting, also, we want to move our authentication from the website\nto the python backend."),(0,o.kt)("p",null,"Of course, this is by no means final, and lot of questions are still open, and\nthat is the fun of it! If you want to join us on our journey, just give our\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/LAION-AI/Open-Assistant"},"github")," a look!"))}f.isMDXComponent=!0}}]);