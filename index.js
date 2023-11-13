/*!
 * MIT License
 *
 * Copyright (c) 2023 SiYuan 思源笔记
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */(()=>{"use strict";var r={};r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.r=n=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})};var i={};r.r(i),r.d(i,{default:()=>h});const b=require("siyuan"),m="menu-config",k="custom_tab",A="dock_tab";class h extends b.Plugin{onload(){this.eventBus.on("click-editorcontent",this.FoldAction),document.addEventListener("dblclick",this.handleDoubleClick),this.protyleSlash=[{filter:["fold","FoldNext","\u6298\u53E0","collpase"],html:`<div class="b3-list-item__first"><span class="b3-list-item__text">${this.i18n.foldNext}</span><span class="b3-list-item__meta">Next</span></div>`,id:"creatFoldNext",callback(t){const e=t.protyle.breadcrumb.id;y(e,"custom-fold",()=>{const s={"custom-fold":""};setTimeout(()=>d(e,s),20)},()=>{const s={"custom-fold":"next"};setTimeout(()=>d(e,s),20)}),t.insert("<span></span>")}}],console.log("Fold-Button")}onLayoutReady(){}onunload(){this.eventBus.off("click-editorcontent",this.FoldAction),document.removeEventListener("dblclick",this.handleDoubleClick)}eventBusLog({detail:t}){}FoldAction({detail:t}){const e=t.event.target.offsetParent;if(!e)return;const o=e.getAttribute("custom-fold")||"";if(o!=="")switch(o){case"next":g(t);break;default:l(o);break}}handleDoubleClick(t){let e=t.target;if(e.hasAttribute("contenteditable"))e=e.parentElement;else return;if(e.hasAttribute("data-node-id")){let o=e.getAttribute("data-node-id");if(o){let a;switch(e.getAttribute("data-type")){case"NodeParagraph":if(a=e.parentElement,a.matches("[data-type='NodeListItem']")){const u=a.children;let f=!1,p=0;for(let c=0;c<u.length;c++)if(u[c].getAttribute("data-node-id")&&p++,p>1){f=!0;break}if(!f)return;o=a.getAttribute("data-node-id"),o&&l(o)}break;default:}}}}}function g(n){const t=n.event.target.offsetParent.nextSibling;if(!t)return;switch(t.getAttribute("data-type")){case"NodeSuperBlock":break;case"NodeBlockQueryEmbed":break;case"NodeParagraph":break;case"NodeList":break;default:return}const o=t.getAttribute("data-node-id")||"";o!==""&&l(o)}function l(n){fetch("http://127.0.0.1:6806/api/attr/getBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then(t=>t.json()).then(t=>{if(!t.data)return;const e=t.data.fold;let o;return e?o=e==="1"?"0":"1":o="1",fetch("http://127.0.0.1:6806/api/attr/setBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n,attrs:{fold:o}})})})}function d(n,t){const o=JSON.stringify({id:n,attrs:t});fetch("http://127.0.0.1:6806/api/attr/setBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:o}).then(a=>a.json()).then(a=>console.log(a))}function y(n,t,e,o){return fetch("http://127.0.0.1:6806/api/attr/getBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n})}).then(a=>a.json()).then(a=>{a.data[t]?e&&e():o&&o()}),!1}module.exports=i})();
