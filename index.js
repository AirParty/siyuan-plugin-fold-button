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
 */(()=>{"use strict";var r={};r.d=(a,e)=>{for(var t in e)r.o(e,t)&&!r.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})},r.o=(a,e)=>Object.prototype.hasOwnProperty.call(a,e),r.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var s={};r.r(s),r.d(s,{default:()=>h});const p=require("siyuan"),m="menu-config",y="custom_tab",A="dock_tab";class h extends p.Plugin{onload(){this.eventBus.on("click-editorcontent",this.FoldAction),document.addEventListener("dblclick",this.handleDoubleClick),this.protyleSlash=[{filter:["fold","FoldNext","\u6298\u53E0","collpase"],html:`<div class="b3-list-item__first"><span class="b3-list-item__text">${this.i18n.foldNext}</span><span class="b3-list-item__meta">Next</span></div>`,id:"creatFoldNext",callback(e){const t=e.protyle.breadcrumb.id;let o={};k(t,"custom-fold",()=>{o={"custom-fold":""},l(t,o),setTimeout(()=>e.insert("<span></span>"),200)},()=>{o={"custom-fold":"next"},l(t,o),setTimeout(()=>e.insert("<span></span>"),200)})}}],console.log("Fold-Button")}onLayoutReady(){}onunload(){this.eventBus.off("click-editorcontent",this.FoldAction),document.removeEventListener("dblclick",this.handleDoubleClick)}FoldAction({detail:e}){const t=e.event.target.offsetParent;if(!t)return;const o=t.getAttribute("custom-fold")||"";if(o!=="")switch(o){case"next":g(e);break;default:i(o);break}}handleDoubleClick(e){let t=e.target;if(t.hasAttribute("contenteditable"))t=t.parentElement;else return;if(t.hasAttribute("data-node-id")){let o=t.getAttribute("data-node-id");if(o){let n;switch(t.getAttribute("data-type")){case"NodeParagraph":if(n=t.parentElement,n.matches("[data-type='NodeListItem']")){const u=n.children;let f=!1,b=0;for(let d=0;d<u.length;d++)if(u[d].getAttribute("data-node-id")&&b++,b>1){f=!0;break}if(!f)return;o=n.getAttribute("data-node-id"),o&&i(o)}break;default:}}}}}function g(a){const e=a.event.target.offsetParent.nextSibling;if(!e)return;switch(e.getAttribute("data-type")){case"NodeSuperBlock":break;case"NodeBlockQueryEmbed":break;case"NodeParagraph":break;case"NodeList":break;case"NodeCodeBlock":break;case"NodeTable":break;case"NodeAttributeView":break;default:return}const o=e.getAttribute("data-node-id")||"";o!==""&&i(o)}function i(a){fetch("http://127.0.0.1:6806/api/attr/getBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a})}).then(e=>e.json()).then(e=>{if(!e.data)return;const t=e.data.fold;let o;return t?o=t==="1"?"0":"1":o="1",fetch("http://127.0.0.1:6806/api/attr/setBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a,attrs:{fold:o}})})})}function l(a,e,t=null){const o=JSON.stringify({id:a,attrs:e});fetch("http://127.0.0.1:6806/api/attr/setBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:o}).then(n=>n.json()).then(n=>{t&&t(n)})}function k(a,e,t,o){return fetch("http://127.0.0.1:6806/api/attr/getBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:a})}).then(n=>n.json()).then(n=>{n.data[e]?t&&t():o&&o()}),!1}module.exports=s})();
