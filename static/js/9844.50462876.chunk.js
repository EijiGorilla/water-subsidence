"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[9844],{59844:(e,t,n)=>{n.d(t,{DO:()=>J,FT:()=>F,Hh:()=>G,OM:()=>q,Ps:()=>H,Wo:()=>k,_I:()=>A,_l:()=>I,dK:()=>$,eh:()=>V,l0:()=>K,t$:()=>U,uk:()=>W,vI:()=>v,xh:()=>p});n(35238);var i,o,s=n(18690),r=n(50076),a=n(31633),l=n(7724),c=n(26346),f=n(80963),u=n(76797),h=n(19247),x=n(65215),m=n(13312);function p(e,t,n){return!(0,c.canProjectWithoutEngine)(e,t,n)}function g(e,t,n){const i=p(e,t,n);if(i&&!(0,c.isLoaded)())throw new r.A("rasterprojectionhelper-project","projection engine is not loaded");return i}(o=i||(i={}))[o.None=0]="None",o[o.North=1]="North",o[o.South=2]="South",o[o.Both=3]="Both";const d=function(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;if(1===n[0])return[0,0];let o=1,s=-1,r=1,a=-1;for(let g=0;g<e.length;g+=2)isNaN(e[g])||(o=o>e[g]?e[g]:o,s=s>e[g]?s:e[g],r=r>e[g+1]?e[g+1]:r,a=a>e[g+1]?a:e[g+1]);const{cols:l,rows:c}=t,f=(s-o)/l/n[0],u=(a-r)/c/n[1],h=2*i;let x=0,m=!1,p=[0,0];for(let g=0;g<l-3;g++){for(let t=0;t<c-3;t++){const n=g*c*2+2*t,i=(e[n]+e[n+4]+e[n+4*c]+e[n+4*c+4])/4,o=(e[n+1]+e[n+5]+e[n+4*c+1]+e[n+4*c+5])/4,s=Math.abs((i-e[n+2*c+2])/f),r=Math.abs((o-e[n+2*c+3])/u);if(s+r>x&&(x=s+r,p=[s,r]),h&&x>h){m=!0;break}}if(m)break}return p},y={3395:20037508.342789244,3410:17334193.943686873,3857:20037508.342788905,3975:17367530.445161372,4087:20037508.342789244,4088:20015108.787169147,6933:17367530.445161372,32662:20037508.342789244,53001:20015086.79602057,53002:10007543.39801029,53003:20015086.79602057,53004:20015086.79602057,53016:14152803.599503474,53017:17333573.624304302,53034:20015086.79602057,53079:20015114.352186374,53080:20015114.352186374,54001:20037508.342789244,54002:10018754.171394624,54003:20037508.342789244,54004:20037508.342789244,54016:14168658.027268292,54017:17367530.44516137,54034:20037508.342789244,54079:20037508.342789244,54080:20037508.342789244,54100:20037508.342789244,54101:20037508.342789244},w=32,M=4,R=M,P=new Map,S=new Map,b=500;async function G(){(0,c.isLoaded)()||await(0,c.load)()}function v(e,t,n){return g(e.spatialReference,t),n?(0,c.getTransformation)(t,e.spatialReference,e):(0,c.getTransformation)(e.spatialReference,t,e)}function k(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;const o=e.spatialReference;if(o.equals(t))return e;g(o,t,i);const s=n.center,r=new u.A({xmin:s.x-e.x/2,xmax:s.x+e.x/2,ymin:s.y-e.y/2,ymax:s.y+e.y/2,spatialReference:o}),l=(0,c.project)(r,t,i),f=F(t);let h;if(null==l||null!=f&&l.width>=f){const n=(0,a.GA)(o)/(0,a.GA)(t);h={x:e.x*n,y:e.y*n}}else h={x:l.width,y:l.height};return h}function N(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;return(0,a.GA)(e)?t/(0,a.GA)(e):0}function A(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const o=e.spatialReference;if(o.equals(t))return e;g(o,t,n);const s=(0,c.project)(e,t,n);return i&&s?(E([e],[s],o,t),s):s}function E(e,t,n,i){const o=B(n,!0),s=B(i,!0),r=N(n,b),a=N(i,b);if(r&&null!=o&&null!=s)for(let l=0;l<e.length;l++){const n=t[l];if(!n)continue;const{x:i}=e[l],{x:c}=n;c>=s[1]-a&&Math.abs(i-o[0])<r?n.x-=s[1]-s[0]:c<=s[0]+a&&Math.abs(i-o[1])<r&&(n.x+=s[1]-s[0])}}function T(e){const{inSR:t,outSR:n,datumTransformation:i,preferPE:o}=e;if(t.equals(n)){const{points:t}=j(e,null);return t}if(t.isWebMercator&&n.isWGS84||t.isWGS84&&n.isWebMercator)return function(e){const{cols:t,rows:n,xres:i,yres:o,usePixelCenter:s,inSR:r,outSR:a}=e;let{xmin:l,ymax:f}=e;s&&(l+=i/2,f-=o/2);const u=[],x=[],m=Math.max(t,n);for(let g=0;g<m;g++){const e=l+i*Math.min(t,g),s=f-o*Math.min(n,g),m=(0,c.project)(new h.A({x:e,y:s,spatialReference:r}),a);g<=t&&u.push(m.x),g<=n&&x.push(m.y)}const p=[];for(let c=0;c<t;c++)for(let e=0;e<n;e++)p.push([u[c],x[e]]);return p}(e);if(g(t,n,i)&&o){if(t.isGeographic)return C(e);if(null!=_(t))return C(e)}return function(e){const{points:t}=j(e,null),{inSR:n,outSR:i,datumTransformation:o}=e,s=t.map((e=>new h.A(e[0],e[1],n))),r=(0,c.project)(s,i,o);return o&&E(s,r,n,i),r.map((e=>e?[e.x,e.y]:[NaN,NaN]))}(e)}function C(e){const{inSR:t,outSR:n,datumTransformation:i}=e,o=_(t),{points:s,mask:r}=j(e,o);if(!t.isGeographic){const e=t.wkid?l.P.coordsys(t.wkid):l.P.fromString(t.isGeographic?l.a.PE_TYPE_GEOGCS:l.a.PE_TYPE_PROJCS,t.wkt2||t.wkt);l.g.projToGeog(e,s.length,s)}if(null!=i&&i.steps.length){let e;const t=179.9955;if(n.isGeographic&&(e=s.map((e=>{let[n]=e;return n>t?1:n<-t?-1:0}))),i.steps.forEach((e=>{const t=e.wkid?l.P.geogtran(e.wkid):l.P.fromString(l.a.PE_TYPE_GEOGTRAN,e.wkt);l.h.geogToGeog(t,s.length,s,null,e.isInverse?l.a.PE_TRANSFORM_2_TO_1:l.a.PE_TRANSFORM_1_TO_2)})),e)for(let n=0;n<s.length;n++){const i=e[n],o=s[n][0],r=o>t?1:o<-t?-1:0;i&&r&&i!==r&&(s[n][0]=i>0?o+360:o-360)}}if(!n.isGeographic){const e=_(n,!0),t=null!=e&&e.isEnvelope?[e.bbox[1],e.bbox[3]]:[-90,90];!function(e,t){const[n,i]=t;for(let o=0;o<e.length;o++){const t=e[o][1];(t<n||t>i)&&(e[o]=[NaN,NaN])}}(s,t);const i=n.wkid?l.P.coordsys(n.wkid):l.P.fromString(n.isGeographic?l.a.PE_TYPE_GEOGCS:l.a.PE_TYPE_PROJCS,n.wkt2||n.wkt);l.g.geogToProj(i,s.length,s)}let a=s;if(r&&s.length!==r.length){a=[];for(let e=0,t=0;e<r.length;e++)r[e]?a.push(s[t++]):a.push([NaN,NaN])}return a}function _(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.wkid||e.wkt2||e.wkt;if(!n||e.isGeographic)return null;if(n=String(n),P.has(n)){const e=P.get(n);return t?e?.gcs:e?.pcs}const i=e.wkid?l.P.coordsys(e.wkid):l.P.fromString(e.isGeographic?l.a.PE_TYPE_GEOGCS:l.a.PE_TYPE_PROJCS,e.wkt2||e.wkt),o=L(i,N(e,1e-4)),s=L(i,0,!0);return P.set(n,{pcs:o,gcs:s}),t?s:o}function L(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const i=l.j.generate(e),o=n?e.horizonGcsGenerate():e.horizonPcsGenerate();if(!i||!o?.length)return null;let s=!1,r=o.find((e=>1===e.getInclusive()&&1===e.getKind()));if(!r){if(r=o.find((e=>1===e.getInclusive()&&0===e.getKind())),!r)return null;s=!0}const a=n?0:(2===i.getNorthPoleLocation()?1:0)|(2===i.getSouthPoleLocation()?2:0),c=i.isPannableRectangle(),f=r.getCoord();if(s)return{isEnvelope:s,isPannable:c,vertices:f,coef:null,bbox:[f[0][0]-t,f[0][1]-t,f[1][0]+t,f[1][1]+t],poleLocation:a};let u=0;const h=[];let[x,m]=f[0],[p,g]=f[0];for(let l=0,d=f.length;l<d;l++){u++,u===d&&(u=0);const[e,t]=f[l],[n,i]=f[u];if(i===t)h.push([e,n,t,i,2]);else{const o=(n-e)/(i-t||1e-4),s=e-o*t;t<i?h.push([o,s,t,i,0]):h.push([o,s,i,t,1])}x=x<e?x:e,m=m<t?m:t,p=p>e?p:e,g=g>t?g:t}return{isEnvelope:!1,isPannable:c,vertices:f,coef:h,bbox:[x,m,p,g],poleLocation:a}}function j(e,t){const n=[],{cols:i,rows:o,xres:s,yres:r,usePixelCenter:a}=e;let{xmin:l,ymax:c}=e;if(a&&(l+=s/2,c-=r/2),null==t){for(let e=0;e<i;e++)for(let t=0;t<o;t++)n.push([l+s*e,c-r*t]);return{points:n}}const f=new Uint8Array(i*o);if(t.isEnvelope){const{bbox:[e,a,u,h]}=t;for(let x=0,m=0;x<i;x++){const i=l+s*x,p=t.isPannable||i>=e&&i<=u;for(let e=0;e<o;e++,m++){const t=c-r*e;p&&t>=a&&t<=h&&(n.push([i,t]),f[m]=1)}}return{points:n,mask:f}}const u=t.coef,h=[];for(let x=0;x<o;x++){const e=c-r*x,t=[],n=[];for(let o=0;o<u.length;o++){const[i,s,r,a,l]=u[o];if(e===r&&r===a)t.push(i),t.push(s),n.push(2),n.push(2);else if(e>=r&&e<=a){const o=i*e+s;t.push(o),n.push(l)}}let i=t;if(t.length>2){let e=2===n[0]?0:n[0],o=t[0];i=[];for(let s=1;s<n.length;s++)2===n[s]&&s!==n.length-1||(n[s]!==e&&(i.push(0===e?Math.min(o,t[s-1]):Math.max(o,t[s-1])),e=n[s],o=t[s]),s===n.length-1&&i.push(0===n[s]?Math.min(o,t[s]):Math.max(o,t[s])));i.sort(((e,t)=>e-t))}else t[0]>t[1]&&(i=[t[1],t[0]]);h.push(i)}for(let x=0,m=0;x<i;x++){const e=l+s*x;for(let t=0;t<o;t++,m++){const i=c-r*t,o=h[t];if(2===o.length)e>=o[0]&&e<=o[1]&&(n.push([e,i]),f[m]=1);else if(o.length>2){let t=!1;for(let n=0;n<o.length;n+=2)if(e>=o[n]&&e<=o[n+1]){t=!0;break}t&&(n.push([e,i]),f[m]=1)}}}return{points:n,mask:f}}function z(e,t){const n=F(e[0].spatialReference);if(e.length<2||null==n)return e[0];if(t=t??N(e[0].spatialReference),1===(e=e.filter((e=>e.width>t))).length)return e[0];let{xmin:i,xmax:o,ymin:s,ymax:r}=e[0];for(let a=1;a<e.length;a++){const t=e[a];o=t.xmax+n*a,s=Math.min(s,t.ymin),r=Math.max(r,t.ymax)}return new u.A({xmin:i,xmax:o,ymin:s,ymax:r,spatialReference:e[0].spatialReference})}function I(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];const r=e.spatialReference;if(r.equals(t))return e;const a=q(e),l=F(r,!0),f=F(t);if(0===a||null==l||null==f){const s=O(e,t,n,o);if(null==l&&null!=f&&Math.abs(s.width-f)<N(t)&&(0,c.isLoaded)()){const n=_(r);if(null!=n&&n.poleLocation===i.None&&e.width<(n.bbox[2]-n.bbox[0])/2)return function(e,t){const n=F(t);if(null==n)return null;let{xmin:i,ymin:o,xmax:s,ymax:r}=e;const a=e.spatialReference,l=new x.A({spatialReference:a,rings:[[[i,o],[s,o],[s,r],[i,r],[i,o]]]}),f=(0,c.project)(l,t);if(2!==f.rings.length||!f.rings[0].length||!f.rings[1].length)return null;const{rings:h}=f,m=N(a),p=new u.A({spatialReference:t});for(let c=0;c<2;c++){i=s=h[c][0][0],o=r=h[c][0][1];for(let e=0;e<h[c].length;e++)i=i>h[c][e][0]?h[c][e][0]:i,s=s<h[c][e][0]?h[c][e][0]:s,o=o>h[c][e][1]?h[c][e][1]:o,r=r<h[c][e][1]?h[c][e][1]:r;if(0===c)p.ymin=o,p.ymax=r,p.xmin=i,p.xmax=s;else if(p.ymin=Math.min(p.ymin,o),p.ymax=Math.max(p.ymax,r),Math.abs(s-n/2)<m)p.xmin=i,p.xmax=p.xmax+n;else{if(!(Math.abs(i+n/2)<m))return null;p.xmax=s+n}}return p}(e,t)||s}return s}const h=e.clone().normalize();if(1===h.length&&e.xmax<l&&e.xmax-l/2>N(r)){const{xmin:t,xmax:n}=e;for(let i=0;i<=a;i++){const o=0===i?t:-l/2,s=i===a?n-l*i:l/2;h[i]=new u.A({xmin:o,xmax:s,ymin:e.ymin,ymax:e.ymax,spatialReference:r})}}return z(h.map((e=>O(e,t,n,o))).filter(s.Ru))}function W(e,t,n){if("extent"===e.type){const{xmin:t,ymin:n,xmax:i,ymax:o,spatialReference:s}=e;e=new x.A({rings:[[[t,o],[i,o],[i,n],[t,n],[t,o]]],spatialReference:s})}return e.spatialReference.equals(t)?e:(g(e.spatialReference,t,n),(0,c.project)(e,t,n))}function O(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];const s=e.spatialReference;if(s.equals(t)||!t)return e;g(s,t,n);const r=(0,c.project)(e,t,n);if(o&&t.isWebMercator&&r&&(r.ymax=Math.min(20037508.342787,r.ymax),r.ymin=Math.max(-20037508.342787,r.ymin),r.ymin>=r.ymax))return null;if(!i||!r)return r;const a=B(s,!0),l=B(t,!0);if(null==a||null==l)return r;const f=N(s,.001),u=N(s,b),x=N(t,.001);if(Math.abs(r.xmin-l[0])<x&&Math.abs(r.xmax-l[1])<x){const i=Math.abs(e.xmin-a[0]),o=Math.abs(a[1]-e.xmax);if(i<f&&o>u){r.xmin=l[0];const i=[];i.push(new h.A(e.xmax,e.ymin,s)),i.push(new h.A(e.xmax,(e.ymin+e.ymax)/2,s)),i.push(new h.A(e.xmax,e.ymax,s));const o=i.map((e=>A(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));r.xmax=Math.max.apply(null,o)}if(o<f&&i>u){r.xmax=l[1];const i=[];i.push(new h.A(e.xmin,e.ymin,s)),i.push(new h.A(e.xmin,(e.ymin+e.ymax)/2,s)),i.push(new h.A(e.xmin,e.ymax,s));const o=i.map((e=>A(e,t,n))).filter((e=>!isNaN(e?.x))).map((e=>e.x));r.xmin=Math.min.apply(null,o)}}else{const e=N(t,.001);Math.abs(r.xmin-l[0])<e&&(r.xmin=l[0]),Math.abs(r.xmax-l[1])<e&&(r.xmax=l[1])}return r}function F(e){if(!e)return null;const t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]?20037508.342787:20037508.342788905;return e.isWebMercator?2*t:e.wkid&&e.isGeographic?360:2*y[e.wkid]||null}function B(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e.isGeographic)return[-180,180];const n=F(e,t);return null!=n?[-n/2,n/2]:null}function Y(e,t,n,i){let o=(e-t)/n;return o-Math.floor(o)!=0?o=Math.floor(o):i&&(o-=1),o}function q(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=F(e.spatialReference);if(null==n)return 0;const i=t?0:-n/2,o=N(e.spatialReference),s=!t&&Math.abs(e.xmax-n/2)<o?n/2:e.xmax,r=!t&&Math.abs(e.xmin+n/2)<o?-n/2:e.xmin;return Y(s,i,n,!0)-Y(r,i,n,!1)}function J(e){const t=e.storageInfo.origin.x,n=F(e.spatialReference,!0);if(null==n)return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const i=n/2,{nativePixelSize:o,storageInfo:s,extent:r}=e,{maximumPyramidLevel:a,blockWidth:l,pyramidScalingFactor:c}=s;let f=o.x;const u=[],h=null!=e.transform&&"gcs-shift"===e.transform.type,x=t+(h?0:i),m=h?n-t:i-t;for(let p=0;p<=a;p++){const e=(r.xmax-t)/f/l,n=e-Math.floor(e)==0?e:Math.ceil(e),i=m/f/l,o=i-Math.floor(i)==0?i:Math.ceil(i),s=Math.floor(x/f/l),a=Math.round(x/f)%l,h=(l-Math.round(m/f)%l)%l;u.push({resolutionX:f,blockWidth:l,datasetColumnCount:n,worldColumnCountFromOrigin:o,leftMargin:a,rightPadding:h,originColumnOffset:s}),f*=c}return{originX:t,halfWorldWidth:i,pyramidsInfo:u,hasGCSSShiftTransform:h}}function K(e){const t=e.isAdaptive&&null==e.spacing;let n=e.spacing||[w,w],i=X(e),o={cols:i.size[0]+1,rows:i.size[1]+1};const s=i.outofBoundPointCount>0&&i.outofBoundPointCount<i.offsets.length/2;let r=i.outofBoundPointCount===i.offsets.length/2||t&&s?[0,0]:d(i.offsets,o,n,R);const a=(r[0]+r[1])/2,c=e.projectedExtent.spatialReference,f=e.srcBufferExtent.spatialReference;if(t&&(s||a>R)&&(p(c,f,e.datumTransformation)&&(c.isGeographic||_(c)),n=[M,M],i=X({...e,spacing:n}),o={cols:i.size[0]+1,rows:i.size[1]+1},r=d(i.offsets,o,n,R)),i.error=r,n[0]>1&&(i.coefficients=D(i.offsets,o,s)),e.includeGCSGrid&&!c.isGeographic&&!c.isWebMercator)if(f.isGeographic)i.gcsGrid={offsets:i.offsets,coefficients:i.coefficients,spacing:n};else{const t=_(c);if(null!=t&&!t.isEnvelope){const t=function(e){if(!e||e.isGeographic)return e;const t=String(e.wkid||e.wkt2||e.wkt);let n;return S.has(t)?n=S.get(t):(n=(e.wkid?l.P.coordsys(e.wkid):l.P.fromString(l.a.PE_TYPE_PROJCS,e.wkt2||e.wkt)).getGeogcs().getCode(),S.set(t,n)),new m.A({wkid:n})}(c),r=I(e.projectedExtent,t),{offsets:a}=X({...e,srcBufferExtent:r,spacing:n}),f=D(a,o,s);i.gcsGrid={offsets:a,coefficients:f,spacing:n}}}return i}function X(e){const{projectedExtent:t,srcBufferExtent:n,pixelSize:i,datumTransformation:o,rasterTransform:s}=e,r=t.spatialReference,a=n.spatialReference,l=g(r,a),{xmin:c,ymin:f,xmax:u,ymax:x}=t,m=F(a),p=null!=m&&(e.hasWrapAround||"gcs-shift"===s?.type),d=e.spacing||[w,w],y=d[0]*i.x,R=d[1]*i.y,P=1===d[0],S=Math.ceil((u-c)/y-.1/d[0])+(P?0:1),G=Math.ceil((x-f)/R-.1/d[1])+(P?0:1),v=T({cols:S,rows:G,xmin:c,ymax:x,xres:y,yres:R,inSR:r,outSR:a,datumTransformation:o,preferPE:d[0]<=M,usePixelCenter:P}),k=[];let A,E=0;const C=P?-1:NaN,{xmin:L,xmax:j,ymax:z,width:I,height:W}=n,O=N(a,b),B=null!=m&&L>0&&j>m/2;let Y=!1;if(l){const e=_(r);Y=null!=e&&e.poleLocation>0}for(let g=0;g<S;g++){const e=[];for(let t=0;t<G;t++){let n=v[g*G+t];if(p&&n[0]>j&&n[0]>m/2-O?n[0]-=m:p&&0===g&&n[0]<0&&B&&!s&&(n[0]+=m),!n||isNaN(n[0])||isNaN(n[1]))k.push(C),k.push(C),e.push(null),E++;else{if(s){const e=s.inverseTransform(new h.A({x:n[0],y:n[1],spatialReference:a}));n=[e.x,e.y]}e.push(n),g>0&&p&&A[t]&&n[0]<A[t][0]&&(n[0]+=m,Y&&n[0]>j&&n[0]>m&&(n[0]-=m)),k.push((n[0]-L)/I),k.push((z-n[1])/W)}}A=e}return{offsets:k,error:null,coefficients:null,outofBoundPointCount:E,spacing:d,size:P?[S,G]:[S-1,G-1]}}function D(e,t,n){const{cols:i,rows:o}=t,s=new Float32Array((i-1)*(o-1)*2*6),r=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),a=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let l=0;l<i-1;l++){for(let t=0;t<o-1;t++){let n=l*o*2+2*t;const c=e[n],f=e[n+1],u=e[n+2],h=e[n+3];n+=2*o;const x=e[n],m=e[n+1],p=e[n+2],g=e[n+3];let d=0,y=12*(t*(i-1)+l);for(let e=0;e<3;e++)s[y++]=r[d++]*c+r[d++]*u+r[d++]*p;d=0;for(let e=0;e<3;e++)s[y++]=r[d++]*f+r[d++]*h+r[d++]*g;d=0;for(let e=0;e<3;e++)s[y++]=a[d++]*c+a[d++]*x+a[d++]*p;d=0;for(let e=0;e<3;e++)s[y++]=a[d++]*f+a[d++]*m+a[d++]*g}if(n)for(let e=0;e<s.length;e++)isNaN(s[e])&&(s[e]=-1)}return s}function H(e){const{spatialReference:t}=e,n=(0,f.Vp)(t);if(!n)return e;const[i,o]=n.valid,s=o-i;let r=0;if(e.xmin<i){const t=i-e.xmin;r=Math.ceil(t/s)}else if(e.xmin>o){const t=e.xmin-o;r=-Math.ceil(t/s)}return new u.A({spatialReference:e.spatialReference,xmin:e.xmin+r*s,ymin:e.ymin,xmax:e.xmax+r*s,ymax:e.ymax})}function U(e,t,n){const{storageInfo:i,pixelSize:o}=t;let s=0,r=!1;const{pyramidResolutions:l}=i,c="mixed"===i.tileInfo.format?.toLowerCase()?Math.max(1,Math.min(3,i.tileInfo.dpi/96)):1,f=(e.x+e.y)/2/c;if(null!=l&&l.length){const e=l[l.length-1],i=(e.x+e.y)/2,c=(o.x+o.y)/2;if(f<=c)s=0;else if(f>=i)s=l.length,r=f/i>8;else{let e,t=c;for(let i=1;i<=l.length;i++){if(e=(l[i-1].x+l[i-1].y)/2,f<=e){f===e?s=i:"down"===n?(s=i-1,r=f/t>8):s="up"===n||f-t>e-f||f/t>2?i:i-1;break}t=e}}const u=0===s?o:l[s-1];return r&&Math.min(u.x,u.y)*(0,a.GA)(t.spatialReference)>19567&&(r=!1),{pyramidLevel:s,pyramidResolution:new h.A({x:u.x,y:u.y,spatialReference:t.spatialReference}),excessiveReading:r}}const u=Math.log(e.x/o.x)/Math.LN2,x=Math.log(e.y/o.y)/Math.LN2,m=t.storageInfo.maximumPyramidLevel||0;s="down"===n?Math.floor(Math.min(u,x)):"up"===n?Math.ceil(Math.max(u,x)):Math.round((u+x)/2),s<0?s=0:s>m&&(r=s>m+3,s=m);const p=2**s;return{pyramidLevel:s,pyramidResolution:new h.A({x:p*t.nativePixelSize.x,y:p*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:r}}function V(e,t){const{pixelSize:n,extent:i}=e,o=v(i,t,!1);return I(function(e,t){const n=e.clone().normalize();return 1===n.length?n[0]:z(n,t)}(i,(n.x+n.y)/16),t,o)}function $(e,t,n){const i=n?.tileSize??512,o=n?.alignGlobalDatasetWithAGOL??!0,s=!!n?.limitToSrcResolution,{extent:r,spatialReference:l,pixelSize:c}=e,f=k(new h.A({x:c.x,y:c.y,spatialReference:l}),t,r);if(null==f)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const u=(f.x+f.y)/2,x=(0,a.GA)(t),m=u*x*96*39.37,p=t.isGeographic?256/i*295828763.7958547:256/i*591657527.591555;let g="vector-magdir"===e.dataType||"vector-uv"===e.dataType;const d=V(e,t),y=Math.min(Math.ceil(Math.log(Math.min(e.width,e.height)/32)/Math.LN2),Math.ceil(Math.log(p/2/m)/Math.LN2));if(!g&&o&&(t.isGeographic||t.isWebMercator)){const n=F(t);if(g=q(d)>0||null!=n&&d.width>n/4,!g&&null!=n){let t=-1;if(y<3)t=2**y*u*i;else if(e.storageInfo){const{maximumPyramidLevel:n=0,pyramidScalingFactor:o=2}=e.storageInfo;t=o**n*u*i}const o=Math.ceil(n/t);g=1===o||2===o&&n/2-d.xmax<t}}let w,M=m;const R=1.001,P=Math.min(2,Math.max(1.414,e.storageInfo?.pyramidScalingFactor||2));if(g){M=p;const e=t.isGeographic?1341104507446289e-21:.29858214164761665,n=e*(96*x*39.37),i=t.isGeographic?4326:3857;w=k(new h.A({x:e,y:e,spatialReference:{wkid:i}}),l,d),w.x*=M/n,w.y*=M/n}else{w={x:c.x,y:c.y};let e=0;for(;M<p*(R/2)&&e<y;)e++,M*=P,w.x*=P,w.y*=P;Math.max(M,p)/Math.min(M,p)<=R&&(M=p)}const S=[M],b=[{x:w.x,y:w.y}],G=Math.min(70.5310735,m)/R;for(;M>=G;)M/=P,w.x/=P,w.y/=P,S.push(M),b.push({x:w.x,y:w.y});if(s){const e=.001*c.x;let t=b.findIndex((t=>t.x>=c.x-e&&t.x<=c.x+e));t>-1?(b.length=t+1,S.length=t+1):(t=b.findIndex((t=>t.x<=c.x+e)),t>0&&(b.length=t,S.length=t))}return{projectedPixelSize:f,scales:S,srcResolutions:b,isCustomTilingScheme:!g}}}}]);
//# sourceMappingURL=9844.50462876.chunk.js.map