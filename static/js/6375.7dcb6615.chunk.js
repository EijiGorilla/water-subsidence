"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[6375],{10947:(e,t,r)=>{r.d(t,{a:()=>o,b:()=>i,n:()=>u,s:()=>l,t:()=>f});r(81806);var n=r(76460);function o(e,t,r){f(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function f(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n;if(e.length/n!=t.length/o)return;const f=e.length/n,u=r[0],i=r[1],l=r[2],c=r[3],a=r[4],s=r[5],d=r[6],p=r[7],y=r[8];let m=0,g=0;for(let T=0;T<f;T++){const r=t[m],f=t[m+1],T=t[m+2],h=t[m+3];e[g]=u*r+c*f+d*T,e[g+1]=i*r+a*f+p*T,e[g+2]=l*r+s*f+y*T,e[g+3]=h,m+=o,g+=n}}function u(e,t){const r=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,f=t.typedBuffer,u=t.typedBufferStride;for(let i=0;i<r;i++){const e=i*o,t=i*u,r=f[t],l=f[t+1],c=f[t+2],a=r*r+l*l+c*c;if(a>0){const t=1/Math.sqrt(a);n[e]=t*r,n[e+1]=t*l,n[e+2]=t*c}}}function i(e,t,r){l(e.typedBuffer,t,r,e.typedBufferStride)}function l(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4;const o=Math.min(e.length/n,t.count),f=t.typedBuffer,u=t.typedBufferStride;let i=0,l=0;for(let c=0;c<o;c++)e[l]=r*f[i],e[l+1]=r*f[i+1],e[l+2]=r*f[i+2],e[l+3]=r*f[i+3],i+=u,l+=n}Object.freeze(Object.defineProperty({__proto__:null,normalize:u,scale:l,scaleView:i,transformMat3:f,transformMat3View:o,transformMat4:function(e,t,r){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:4,f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:o;if(e.length/o!=t.length/f)return void n.A.getLogger("esri.views.3d.support.buffer.math").error("source and destination buffers need to have the same number of elements");const u=e.length/o,i=r[0],l=r[1],c=r[2],a=r[3],s=r[4],d=r[5],p=r[6],y=r[7],m=r[8],g=r[9],T=r[10],h=r[11],A=r[12],P=r[13],M=r[14],B=r[15];let O=0,_=0;for(let n=0;n<u;n++){const r=t[O],n=t[O+1],u=t[O+2],v=t[O+3];e[_]=i*r+s*n+m*u+A*v,e[_+1]=l*r+d*n+g*u+P*v,e[_+2]=c*r+p*n+T*u+M*v,e[_+3]=a*r+y*n+h*u+B*v,O+=f,_+=o}},transformMat4View:function(e,t,r){if(e.count!==t.count)return;const n=e.count,o=r[0],f=r[1],u=r[2],i=r[3],l=r[4],c=r[5],a=r[6],s=r[7],d=r[8],p=r[9],y=r[10],m=r[11],g=r[12],T=r[13],h=r[14],A=r[15],P=e.typedBuffer,M=e.typedBufferStride,B=t.typedBuffer,O=t.typedBufferStride;for(let _=0;_<n;_++){const e=_*M,t=_*O,r=B[t],n=B[t+1],v=B[t+2],N=B[t+3];P[e]=o*r+l*n+d*v+g*N,P[e+1]=f*r+c*n+p*v+T*N,P[e+2]=u*r+a*n+y*v+h*N,P[e+3]=i*r+s*n+m*v+A*N}}},Symbol.toStringTag,{value:"Module"}))},26375:(e,t,r)=>{r.d(t,{$5:()=>v,CN:()=>M,JP:()=>P,KM:()=>S,Mv:()=>E,X4:()=>B,gr:()=>_,project:()=>C,qs:()=>N,si:()=>O,xA:()=>F});var n=r(15941),o=r(63919),f=r(44680),u=r(34761),i=r(13191),l=r(20664),c=r(9392),a=r(26346),s=r(98510),d=r(90707),p=r(45308),y=r(44815),m=(r(14556),r(80963)),g=r(45417),T=r(88105),h=r(45136),A=r(10947);const P="Projection may be possible after calling projection.load().";function M(e,t,r,n){e.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${r.wkid}).${n?" ":""}${n}`)}function B(e,t,r,n,o){return w(x.TO_PCPF,T.xs.fromTypedArray(e),R.NORMAL,T.Xm.fromTypedArray(t),T.Xm.fromTypedArray(r),n,T.xs.fromTypedArray(o))?o:null}function O(e,t,r,n,o){return w(x.FROM_PCPF,T.xs.fromTypedArray(e),R.NORMAL,T.Xm.fromTypedArray(t),T.Xm.fromTypedArray(r),n,T.xs.fromTypedArray(o))?o:null}function _(e,t,r){return(0,p.projectBuffer)(e,t,0,r,(0,s.lO)(t),0,e.length/3)?r:null}function v(e,t,r){return(0,p.projectBuffer)(e,(0,s.lO)(r),0,t,r,0,e.length/3)?t:null}function N(e,t,r){return(0,o.Ge)(X,r),(0,h.t)(t,e,X),(0,n.or)(X)&&(0,h.n)(t,t),t}function S(e,t,r){return(0,o.z0)(X,r),(0,A.t)(t,e,X),(0,n.or)(X)&&(0,h.n)(t,t,4),t}function F(e,t,r,n,o){if(!w(x.TO_PCPF,T.xs.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),R.TANGENT,T.Xm.fromTypedArray(t),T.Xm.fromTypedArray(r),n,T.xs.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let f=3;f<e.length;f+=4)o[f]=e[f];return o}function E(e,t,r,n,o){if(!w(x.FROM_PCPF,T.xs.fromTypedArray(e,16),R.TANGENT,T.Xm.fromTypedArray(t),T.Xm.fromTypedArray(r),n,T.xs.fromTypedArray(o,16)))return null;for(let f=3;f<e.length;f+=4)o[f]=e[f];return o}var R,x,b;function j(e,t,r,n,f){switch((0,d.l)(n,r,V,n),e===x.FROM_PCPF&&(0,u.B8)(V,V),t){case R.NORMAL:return(0,o.Ge)(f,V);case R.TANGENT:return(0,o.z0)(f,V)}}function w(e,t,r,n,o,f,u){if(!t)return;const i=n.count,c=(0,s.lO)(f);if(function(e){return e.isWGS84||(0,m.x1)(e)||(0,m.q8)(e)||(0,m.KQ)(e)}(f))for(let a=0;a<i;a++)o.getVec(a,z),t.getVec(a,G),(0,l.t)(G,G,j(e,r,z,c,X)),u.setVec(a,G);else for(let a=0;a<i;a++){o.getVec(a,z),t.getVec(a,G);const f=(0,g.jg)(n.get(a,1));let i=Math.cos(f);r===R.TANGENT!=(e===x.TO_PCPF)&&(i=1/i),j(e,r,z,c,X),e===x.TO_PCPF?(X[0]*=i,X[1]*=i,X[2]*=i,X[3]*=i,X[4]*=i,X[5]*=i):(X[0]*=i,X[3]*=i,X[6]*=i,X[1]*=i,X[4]*=i,X[7]*=i),(0,l.t)(G,G,X),(0,l.n)(G,G),u.setVec(a,G)}return u}function C(e){return"local"===e.vertexSpace.type?function(e){let{vertexSpace:t,transform:r,inSpatialReference:n,outSpatialReference:o,localMode:f,outPositions:l,positions:m}=e;const g=t.origin??c.uY,T=null!=t.origin?r?.localMatrix??i.zK:i.zK,A=(0,s.lO)(n),P=o.isWebMercator&&f||!(0,a.canProjectWithoutEngine)(n,A)?n:A;(0,d.l)(n,g,V,P),(0,u.lw)(V,V,T);const M=l??(0,y.jh)(m.length);return(0,h.a)(M,m,V),(0,p.projectBuffer)(M,P,0,M,o,0,M.length/3),M}(e):function(e){let{vertexSpace:t,transform:r,outPositions:n,positions:o,inSpatialReference:f,outSpatialReference:a}=e;const s=null!=t.origin?r?.localMatrix??i.zK:i.zK,d=n??(0,y.jh)(o.length);(0,u.aI)(s,i.zK)?(0,y.s)(d,o):(0,h.a)(d,o,s);const m=t.origin??c.uY;if(!(0,l.e)(m,c.uY)){const[e,t,r]=m;for(let n=0;n<d.length;n+=3)d[n]+=e,d[n+1]+=t,d[n+2]+=r}return(0,p.projectBuffer)(d,f,0,d,a,0,d.length/3)?d:null}(e)}(b=R||(R={}))[b.NORMAL=0]="NORMAL",b[b.TANGENT=1]="TANGENT",function(e){e[e.TO_PCPF=0]="TO_PCPF",e[e.FROM_PCPF=1]="FROM_PCPF"}(x||(x={}));const z=(0,c.vt)(),G=(0,c.vt)(),V=(0,i.vt)(),X=(0,f.vt)()}}]);
//# sourceMappingURL=6375.7dcb6615.chunk.js.map