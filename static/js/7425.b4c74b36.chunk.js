"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[7425],{28778:(e,t,n)=>{n.d(t,{g:()=>i});const i={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const i=new r(e.getPointX(t),e.getPointY(t),n),s=e.hasZ(t),o=e.hasM(t);return s&&(i.z=e.getPointZ(t)),o&&(i.m=e.getPointM(t)),i},exportPolygon:function(e,t,n){return new s(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new l(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const i=e.hasZ(t),r=e.hasM(t),s=new a(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(i){const n=e.getZExtent(t);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=e.getMExtent(t);s.mmin=n.vmin,s.mmax=n.vmax}return s}};class r{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class s{constructor(e,t,n,i){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class o{constructor(e,t,n,i){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class l{constructor(e,t,n,i){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}class a{constructor(e,t,n,i,r){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},90321:(e,t,n)=>{function i(e,t){return e?t?4:3:t?3:2}function r(e,t,n,r){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const l=e.coords,a=[],u=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:f}=t,h=i(n,r);let m=0;for(const i of c){const e=s(u,f,m,i,n,r);e&&a.push(e),m+=i*h}if(a.sort(((e,t)=>{let i=e[2]-t[2];return 0===i&&n&&(i=e[4]-t[4]),i})),a.length){let e=6*a[0][2];l[0]=a[0][0]/e,l[1]=a[0][1]/e,n&&(e=6*a[0][4],l[2]=0!==e?a[0][3]/e:0),(l[0]<u[0]||l[0]>u[1]||l[1]<u[2]||l[1]>u[3]||n&&(l[2]<u[4]||l[2]>u[5]))&&(l.length=0)}if(!l.length){const e=t.lengths[0]?o(f,0,c[0],n,r):null;if(!e)return null;l[0]=e[0],l[1]=e[1],n&&e.length>2&&(l[2]=e[2])}return e}function s(e,t,n,r,s,o){const l=i(s,o);let a=n,u=n+l,c=0,f=0,h=0,m=0,p=0;for(let i=0,g=r-1;i<g;i++,a+=l,u+=l){const n=t[a],i=t[a+1],r=t[a+2],o=t[u],l=t[u+1],y=t[u+2];let g=n*l-o*i;m+=g,c+=(n+o)*g,f+=(i+l)*g,s&&(g=n*y-o*r,h+=(r+y)*g,p+=g),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),i<e[2]&&(e[2]=i),i>e[3]&&(e[3]=i),s&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(m>0&&(m*=-1),p>0&&(p*=-1),!m)return null;const y=[c,f,.5*m];return s&&(y[3]=h,y[4]=.5*p),y}function o(e,t,n,r,s){const o=i(r,s);let f=t,h=t+o,m=0,p=0,y=0,g=0;for(let i=0,d=n-1;i<d;i++,f+=o,h+=o){const t=e[f],n=e[f+1],i=e[f+2],s=e[h],o=e[h+1],d=e[h+2],R=r?a(t,n,i,s,o,d):l(t,n,s,o);if(R)if(m+=R,r){const e=c(t,n,i,s,o,d);p+=R*e[0],y+=R*e[1],g+=R*e[2]}else{const e=u(t,n,s,o);p+=R*e[0],y+=R*e[1]}}return m>0?r?[p/m,y/m,g/m]:[p/m,y/m]:n>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function l(e,t,n,i){const r=n-e,s=i-t;return Math.sqrt(r*r+s*s)}function a(e,t,n,i,r,s){const o=i-e,l=r-t,a=s-n;return Math.sqrt(o*o+l*l+a*a)}function u(e,t,n,i){return[e+.5*(n-e),t+.5*(i-t)]}function c(e,t,n,i,r,s){return[e+.5*(i-e),t+.5*(r-t),n+.5*(s-n)]}n.d(t,{Q:()=>r})},55167:(e,t,n)=>{n.d(t,{LQ:()=>u,ag:()=>f,pL:()=>c});var i=n(98618),r=n(1484);const s=new r.A,o=new r.A,l=new r.A,a={esriGeometryPoint:i.DF,esriGeometryPolyline:i.BW,esriGeometryPolygon:i.z5,esriGeometryMultipoint:i.qK};function u(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.hasZ,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.hasM;if(null==t)return null;const o=e.hasZ&&r,a=e.hasM&&s;if(n){const u=(0,i.Nl)(l,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,s);return(0,i.DF)(u,o,a)}return(0,i.DF)(t,o,a)}function c(e,t,n,r,u,c){let f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:t,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:n;const m=t&&f,p=n&&h,y=null!=r?"coords"in r?r:r.geometry:null;if(null==y)return null;if(u){let r=(0,i.kz)(o,y,t,n,e,u,f,h);return c&&(r=(0,i.Nl)(l,r,m,p,e,c)),a[e]?.(r,m,p)??null}if(c){const r=(0,i.Nl)(l,y,t,n,e,c,f,h);return a[e]?.(r,m,p)??null}return(0,i.Q4)(s,y,t,n,f,h),a[e]?.(s,m,p)??null}function f(e){return e&&h in e?JSON.parse(JSON.stringify(e,m)):e}const h="_geVersion",m=(e,t)=>e!==h?t:void 0},24586:(e,t,n)=>{n.d(t,{Cv:()=>g,Nk:()=>m,lK:()=>R});var i=n(18690),r=n(50346),s=n(26346),o=n(28778),l=n(80963),a=n(45417);const u=[0,0];function c(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,u),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,u),[n.xmax,n.ymax]=e(t.xmax,t.ymax,u),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:f(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:f(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:h(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function f(e,t){const n=[];for(const i of e)n.push(h(i,t));return n}function h(e,t){const n=[];for(const i of e){const e=t(i[0],i[1],[0,0]);n.push(e),i.length>2&&e.push(i[2]),i.length>3&&e.push(i[3])}return n}async function m(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map((e=>null!=e.geometry?e.geometry.spatialReference:null)).filter(i.Ru):[e];await(0,s.initializeProjection)(n.map((e=>({source:e,dest:t}))))}const p=c.bind(null,a.je),y=c.bind(null,a.tD);function g(e,t,n,i){if(!e)return e;if(n||(n=t,t=e.spatialReference),!(0,l.fn)(t)||!(0,l.fn)(n)||(0,l.aI)(t,n))return e;if((0,a.y7)(t,n)){const t=(0,l.K8)(n)?p(e):y(e);return t.spatialReference=n,t}return(0,s.projectMany)(o.g,[e],t,n,null,i)[0]}const d=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,n,i){if(!e?.length||!t||!n||(0,l.aI)(t,n))return e;const s={geometries:e,inSpatialReference:t,outSpatialReference:n,geographicTransformation:i,resolve:(0,r.Tw)()};return this._jobs.push(s),this._timer??=setTimeout(this._process,10),s.resolve.promise}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:n,outSpatialReference:i,resolve:r,geographicTransformation:u}=e;(0,a.y7)(n,i)?(0,l.K8)(i)?r(t.map(p)):r(t.map(y)):r((0,s.projectMany)(o.g,t,n,i,u,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function R(e,t,n,i){return d.push(e,t,n,i)}},71857:(e,t,n)=>{n.d(t,{GC:()=>m,T2:()=>p,v8:()=>h});var i=n(45802),r=n(31633),s=n(26346),o=n(27084),l=n(19902),a=n(1438),u=n(80963),c=n(24586);const f=new i.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),h=Object.freeze({});async function m(e,t,n){const{outFields:i,orderByFields:r,groupByFieldsForStatistics:s,outStatistics:o}=e;if(i)for(let l=0;l<i.length;l++)i[l]=i[l].trim();if(r)for(let l=0;l<r.length;l++)r[l]=r[l].trim();if(s)for(let l=0;l<s.length;l++)s[l]=s[l].trim();if(o)for(let l=0;l<o.length;l++)o[l].onStatisticField&&(o[l].onStatisticField=o[l].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),p(e,t,n)}async function p(e,t,i){if(!e)return null;let{where:s}=e;if(e.where=s=s?.trim(),(!s||/^1 *= *1$/.test(s)||t&&t===s)&&(e.where=null),!e.geometry)return e;let m=await async function(e){const{distance:t,units:i}=e,s=e.geometry;if(null==t||"vertexAttributes"in s)return s;const o=s.spatialReference,l=i?f.fromJSON(i):(0,r.Ij)(o),a=o&&((0,u.EA)(o)||(0,u.K8)(o))?s:await(0,c.Nk)(o,u.KK).then((()=>(0,c.Cv)(s,u.KK)));return(await async function(){return(await Promise.all([n.e(2612),n.e(4050)]).then(n.bind(n,1669))).geodesicBuffer}())(a.spatialReference,a,t,l)}(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;m=(0,o.HA)(m),m.spatialReference=t}if(m){await(0,c.Nk)(m.spatialReference,i),m=function(e,t){const n=e.spatialReference;return y(e,t)&&(0,l.ZC)(e)?{spatialReference:n,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}(m,i);const t=(await(0,a.el)((0,l.rS)(m)))[0];if(null==t)throw h;const n="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,r=n&&y(m,i)?{densificationStep:8*n}:void 0,s=t.toJSON(),o=(0,c.Cv)(s,s.spatialReference,i,r);if(!o)throw h;o.spatialReference=i,e.geometry=o}return e}function y(e,t){if(!e)return!1;const n=e.spatialReference;return((0,l.ZC)(e)||(0,l.Bi)(e)||(0,l.Rg)(e))&&!(0,u.aI)(n,t)&&!(0,s.canProjectWithoutEngine)(n,t)}},81376:(e,t,n)=>{n.d(t,{tC:()=>N,c0:()=>x,xt:()=>I});var i=n(50076),r=n(11352),s=n(65658);var o=n(19902),l=n(80963);function a(e,t){return e?t?4:3:t?3:2}function u(e,t,n,i,r,s){const o=a(r,s),{coords:l,lengths:u}=i;if(!u)return!1;for(let a=0,f=0;a<u.length;a++,f+=o)if(!c(e,t,n,l[f],l[f+1]))return!1;return!0}function c(e,t,n,i,r){if(!e)return!1;const s=a(t,n),{coords:o,lengths:l}=e;let u=!1,c=0;for(const a of l)u=f(u,o,s,c,a,i,r),c+=a*s;return u}function f(e,t,n,i,r,s,o){let l=e,a=i;for(let u=i,c=i+r*n;u<c;u+=n){a=u+n,a===c&&(a=i);const e=t[u],r=t[u+1],f=t[a],h=t[a+1];(r<o&&h>=o||h<o&&r>=o)&&e+(o-r)/(h-r)*(f-e)<s&&(l=!l)}return l}var h=n(98618),m=n(1484),p=n(55167),y=n(24586);const g="unsupported-query",d={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},R={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function I(e,t,i,l,a){if((0,o.Bi)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,h.Ye)(new m.A,t,!1,!1);return Promise.resolve((t=>function(e,t,n,i){return c(e,t,n,i.coords[0],i.coords[1])}(e,!1,!1,t)))}if((0,o.Bi)(t)&&"esriGeometryMultipoint"===i){const n=(0,h.Ye)(new m.A,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>u(n,!1,!1,e,l,a)))}if((0,o.ZC)(t)&&"esriGeometryPoint"===i&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,r.qz)(t,(0,p.pL)(i,l,a,e))));if((0,o.ZC)(t)&&"esriGeometryMultipoint"===i&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,r.rL)(t,(0,p.pL)(i,l,a,e))));if((0,o.ZC)(t)&&"esriSpatialRelIntersects"===e){const e=function(e){return"mesh"===e?s.xB:(0,s.xK)(e)}(i);return Promise.resolve((n=>e(t,(0,p.pL)(i,l,a,n))))}return Promise.all([n.e(2612),n.e(4050)]).then(n.bind(n,1669)).then((n=>{const r=n[d[e]].bind(null,t.spatialReference,t);return e=>r((0,p.pL)(i,l,a,e))}))}async function x(e,t,n){const{spatialRel:r,geometry:s}=e;if(s){if(!function(e){return null!=e&&!0===R.spatialRelationship[e]}(r))throw new i.A(g,"Unsupported query spatial relationship",{query:e});if((0,l.fn)(s.spatialReference)&&(0,l.fn)(n)){if(!function(e){return null!=e&&!0===R.queryGeometry[(0,o.$B)(e)]}(s))throw new i.A(g,"Unsupported query geometry type",{query:e});if(!function(e){return null!=e&&!0===R.layerGeometry[e]}(t))throw new i.A(g,"Unsupported layer geometry type",{query:e});if(e.outSR)return(0,y.Nk)(e.geometry?.spatialReference,e.outSR)}}}function N(e){if((0,o.ZC)(e))return!0;if((0,o.Bi)(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},23478:(e,t,n)=>{async function i(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:i,endTimeField:r}=e;let s=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY;if(i&&r)await t.forEach((e=>{const t=n.getAttribute(e,i),l=n.getAttribute(e,r);null==t||isNaN(t)||(s=Math.min(s,t)),null==l||isNaN(l)||(o=Math.max(o,l))}));else{const e=i||r;await t.forEach((t=>{const i=n.getAttribute(t,e);null==i||isNaN(i)||(s=Math.min(s,i),o=Math.max(o,i))}))}return{start:s,end:o}}function r(e,t,n){if(!t||!e)return null;const{startTimeField:i,endTimeField:r}=e;if(!i&&!r)return null;const{start:s,end:o}=t;if(null===s&&null===o)return null;if(void 0===s&&void 0===o)return()=>!1;const l=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return i&&r?function(e,t,n,i,r){return null!=i&&null!=r?s=>{const o=e(s,t),l=e(s,n);return(null==o||o<=r)&&(null==l||l>=i)}:null!=i?t=>{const r=e(t,n);return null==r||r>=i}:null!=r?n=>{const i=e(n,t);return null==i||i<=r}:void 0}(l,i,r,s,o):function(e,t,n,i){return null!=n&&null!=i&&n===i?i=>e(i,t)===n:null!=n&&null!=i?r=>{const s=e(r,t);return null!=s&&s>=n&&s<=i}:null!=n?i=>{const r=e(i,t);return null!=r&&r>=n}:null!=i?n=>{const r=e(n,t);return null!=r&&r<=i}:void 0}(l,i||r,s,o)}n.d(t,{I:()=>r,W:()=>i})}}]);
//# sourceMappingURL=7425.b4c74b36.chunk.js.map