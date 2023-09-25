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
 */(()=>{"use strict";var a={};a.d=(o,e)=>{for(var t in e)a.o(e,t)&&!a.o(o,t)&&Object.defineProperty(o,t,{enumerable:!0,get:e[t]})},a.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),a.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var i={};a.r(i),a.d(i,{default:()=>b});const f=require("siyuan"),p="menu-config",h="custom_tab",g="dock_tab";class b extends f.Plugin{onload(){this.eventBus.on("click-editorcontent",this.FoldAction),document.addEventListener("dblclick",this.handleDoubleClick),console.log("Fold-Button")}onLayoutReady(){}onunload(){this.eventBus.off("click-editorcontent",this.FoldAction),document.removeEventListener("dblclick",this.handleDoubleClick)}eventBusLog({detail:e}){}FoldAction({detail:e}){const t=e.event.target.offsetParent;if(!t)return;const n=t.getAttribute("custom-fold")||"";n!=""&&l(n)}handleDoubleClick(e){let t=e.target;if(t.hasAttribute("contenteditable"))t=t.parentElement;else return;if(t.hasAttribute("data-node-id")){let n=t.getAttribute("data-node-id");if(n){let r;switch(t.getAttribute("data-type")){case"NodeParagraph":if(r=t.parentElement,r.matches("[data-type='NodeListItem']")){const c=r.children;let s=!1,u=0;for(let d=0;d<c.length;d++)if(c[d].getAttribute("data-node-id")&&u++,u>1){s=!0;break}if(!s)return;n=r.getAttribute("data-node-id"),n&&l(n)}break;default:}}}}}function l(o){fetch("http://127.0.0.1:6806/api/attr/getBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o})}).then(e=>e.json()).then(e=>{if(!e.data)return;const t=e.data.fold;let n;return t?n=t==="1"?"0":"1":n="1",fetch("http://127.0.0.1:6806/api/attr/setBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o,attrs:{fold:n}})})})}module.exports=i})();
