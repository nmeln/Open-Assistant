"use strict";(self.webpackChunkopen_assistant=self.webpackChunkopen_assistant||[]).push([[5828],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},y="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),y=p(n),c=l,k=y["".concat(s,".").concat(c)]||y[c]||u[c]||a;return n?r.createElement(k,i(i({ref:e},d),{},{components:n})):r.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[y]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},81494:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const a={},i="Query Frontend User",o={type:"api",id:"query-frontend-user",unversionedId:"query-frontend-user",title:"Query Frontend User",description:"",slug:"/query-frontend-user",frontMatter:{},api:{tags:["frontend_users"],description:"Query frontend user.",operationId:"query_frontend_user_api_v1_frontend_users__auth_method___username__get",parameters:[{required:!0,schema:{title:"Auth Method",type:"string"},name:"auth_method",in:"path"},{required:!0,schema:{title:"Username",type:"string"},name:"username",in:"path"},{required:!1,schema:{title:"Api Client Id",type:"string",format:"uuid"},name:"api_client_id",in:"query"}],responses:{200:{description:"Successful Response",content:{"application/json":{schema:{title:"FrontEndUser",required:["id","display_name","auth_method","user_id","enabled","deleted","notes","show_on_leaderboard"],type:"object",properties:{id:{title:"Id",type:"string"},display_name:{title:"Display Name",type:"string"},auth_method:{title:"Auth Method",enum:["discord","local","system"],type:"string"},user_id:{title:"User Id",type:"string",format:"uuid"},enabled:{title:"Enabled",type:"boolean"},deleted:{title:"Deleted",type:"boolean"},notes:{title:"Notes",type:"string"},created_date:{title:"Created Date",type:"string",format:"date-time"},show_on_leaderboard:{title:"Show On Leaderboard",type:"boolean"},streak_days:{title:"Streak Days",type:"integer"},streak_last_day_date:{title:"Streak Last Day Date",type:"string",format:"date-time"},last_activity_date:{title:"Last Activity Date",type:"string",format:"date-time"}}}}}},422:{description:"Validation Error",content:{"application/json":{schema:{title:"HTTPValidationError",type:"object",properties:{detail:{title:"Detail",type:"array",items:{title:"ValidationError",required:["loc","msg","type"],type:"object",properties:{loc:{title:"Location",type:"array",items:{anyOf:[{type:"string"},{type:"integer"}]}},msg:{title:"Message",type:"string"},type:{title:"Error Type",type:"string"}}}}}}}}}},security:[{"api-key":[]},{"api-key":[]}],method:"get",path:"/api/v1/frontend_users/{auth_method}/{username}",securitySchemes:{"api-key":{type:"apiKey",in:"header",name:"X-API-Key"},"oasst-user":{type:"apiKey",in:"header",name:"x-oasst-user"},HTTPBearer:{type:"http",scheme:"bearer"},APIKeyCookie:{type:"apiKey",in:"cookie",name:"next-auth.session-token"}},info:{title:"open-assistant backend",version:"0.1.0"},postman:{name:"Query Frontend User",description:{content:"Query frontend user.",type:"text/plain"},url:{path:["api","v1","frontend_users",":auth_method",":username"],host:["{{baseUrl}}"],query:[{description:{content:"",type:"text/plain"},key:"api_client_id",value:"<uuid>"}],variable:[{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"auth_method"},{description:{content:"(Required) ",type:"text/plain"},type:"any",value:"<string>",key:"username"}]},method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"X-API-Key",key:"key"},{type:"any",value:!0,key:"value"},{type:"any",value:"header",key:"in"}]}}},source:"@site/docs/api/openapi.json",sourceDirName:".",permalink:"/Open-Assistant/api/query-frontend-user",previous:{title:"Get Users Ordered By Username",permalink:"/Open-Assistant/api/get-users-ordered-by-username-1"},next:{title:"Query Frontend User Messages",permalink:"/Open-Assistant/api/query-frontend-user-messages"}},s=[],p={toc:s},d="wrapper";function y(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"query-frontend-user"},"Query Frontend User"),(0,l.kt)("p",null,"Query frontend user."),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Path Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"auth_method"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"username"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Username"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Query Parameters"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"api_client_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"))))),(0,l.kt)("table",{style:{display:"table",width:"100%"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Responses"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"200")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Successful Response"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"display_name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Display Name"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"auth_method"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Auth Method"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"),(0,l.kt)("div",{style:{marginTop:"var(--ifm-table-cell-padding)"}},(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Possible values:")," ","[",(0,l.kt)("inlineCode",{parentName:"p"},"discord"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"local"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"system"),"]")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"user_id"),(0,l.kt)("span",{style:{opacity:"0.6"}}," uuid"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"enabled"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Enabled"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"deleted"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Deleted"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"notes"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Notes"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"created_date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"show_on_leaderboard"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Show On Leaderboard"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"streak_days"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Streak Days"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"streak_last_day_date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," date-time"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"last_activity_date"),(0,l.kt)("span",{style:{opacity:"0.6"}}," date-time")))))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("div",{style:{display:"flex"}},(0,l.kt)("div",{style:{marginRight:"var(--ifm-table-cell-padding)"}},(0,l.kt)("code",null,"422")),(0,l.kt)("div",null,(0,l.kt)("p",null,"Validation Error"))),(0,l.kt)("div",null,(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",{style:{textAlign:"left"}},"Schema ",(0,l.kt)("div",null)))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"detail"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,l.kt)("table",{style:{display:"table",width:"100%",marginTop:"var(--ifm-table-cell-padding)",marginBottom:"0px"}},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"loc"),(0,l.kt)("span",{style:{opacity:"0.6"}}," undefined[]"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"msg"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Message"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("code",null,"type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," Error Type"),(0,l.kt)("span",{style:{opacity:"0.6"}}," \u2014 "),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," REQUIRED")))))))))))))))}y.isMDXComponent=!0}}]);