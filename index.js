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
 */(()=>{"use strict";var o={};o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};o.r(a),o.d(a,{default:()=>i});const l=require("siyuan"),u="menu-config",f="custom_tab",p="dock_tab";class i extends l.Plugin{onload(){this.eventBus.on("click-editorcontent",this.FoldAction),console.log("FoldTargetOn")}onLayoutReady(){this.loadData("FoldButton ~"),console.log(`frontend: ${(0,l.getFrontend)()}; backend: ${(0,l.getBackend)()}`)}onunload(){this.eventBus.off("click-editorcontent",this.FoldAction)}eventBusLog({detail:t}){console.log(t)}FoldAction({detail:t}){const n=t.event.target.offsetParent;if(!n)return;const s=n.getAttribute("custom-fold")||"";s!=""&&fetch("http://127.0.0.1:6806/api/attr/getBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s})}).then(r=>r.json()).then(r=>{if(!r.data)return;const d=r.data.fold;let c;return d?c=d==="1"?"0":"1":c="1",fetch("http://127.0.0.1:6806/api/attr/setBlockAttrs",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:s,attrs:{fold:c}})})})}}module.exports=a})();
