"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[1904],{21904:(t,e,i)=>{i.d(e,{m:()=>l});var s=i(85827),n=i(17400),o=i(8794),r=i(13692);class l extends o.q{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get children(){return this._children}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(t){(this._effectView||t)&&(this._effectView||(this._effectView=new n.$B),this._effectView.effect=t,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(t){if(!t)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions?.equals(t)||(this._highlightOptions=t,this._highlightGradient=(0,r.u4)(this._highlightGradient,t),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some((t=>t.hasHighlight))}get hasLabels(){return this.children.some((t=>t.hasLabels))}get requiresDedicatedFBO(){return this.children.some((t=>"blendMode"in t&&t.blendMode&&"normal"!==t.blendMode))}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectView&&(this._effectView.transitionStep(t,e),this._effectView.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t),{painter:i}=e;i.beforeRenderLayer(e,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(e),i.afterRenderLayer(e,this.computedOpacity)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.children.length;if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}beforeRender(t){super.beforeRender(t);for(const e of this.children)e.beforeRender(t)}afterRender(t){super.afterRender(t);for(const e of this.children)e.afterRender(t)}_createTransforms(){return{displayViewScreenMat3:(0,s.vt)()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.processRender(t)}createRenderParams(t){return{...t,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||t.highlightGradient}}}},8794:(t,e,i)=>{i.d(e,{q:()=>r});var s=i(54099),n=i(81806),o=i(50346);class r extends s.A{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,o.Tw)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,o.Tw)(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){const i=0===(0,n.A)("mapview-transitions-duration")?0:1/(0,n.A)("mapview-transitions-duration");if(this.fadeTransitionEnabled&&0!==i){const e=this._fadeOutResolver||!this.visible?0:this.opacity,s=this.computedOpacity;if(s===e)this.computedVisible=this.visible;else{const n=t*i;this.computedOpacity=s>e?Math.max(e,s-n):Math.min(e,s+n),this.computedVisible=this.computedOpacity>0;const o=e===this.computedOpacity;this.inFadeTransition=!o,o||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},90554:(t,e,i)=>{i.d(e,{$r:()=>r,M$:()=>l,mF:()=>o});var s=i(69539),n=i(7464);const o={selection:t=>new n.A({color:new s.A([t.color.r/2,t.color.g/2,t.color.b/2,t.color.a])}),highlight:t=>t,popup:t=>new n.A({color:new s.A([t.color.g,t.color.b,t.color.r,t.color.a])})};function r(t){if(!t)return 0;let e=1;for(const i in o){if(i===t)break;e<<=1}return e}const l=Object.keys(o)},5095:(t,e,i)=>{i.d(e,{$U:()=>P,C2:()=>a,CQ:()=>n,CR:()=>O,C_:()=>H,Cp:()=>y,DY:()=>l,GR:()=>z,Gh:()=>L,LY:()=>A,O5:()=>B,Pq:()=>d,Qb:()=>U,Sr:()=>m,TB:()=>Q,V3:()=>b,Vl:()=>K,Xh:()=>X,YS:()=>u,YV:()=>o,_M:()=>w,_x:()=>Y,cp:()=>Z,dV:()=>C,eG:()=>h,eI:()=>k,fq:()=>F,fy:()=>M,g0:()=>I,hM:()=>D,ie:()=>S,ju:()=>r,lL:()=>_,mg:()=>G,n9:()=>T,nM:()=>g,nW:()=>V,p:()=>N,qM:()=>s,r1:()=>W,sn:()=>R,uM:()=>f,ue:()=>c,vN:()=>E,vd:()=>v,yA:()=>x,yv:()=>q,z2:()=>p});const s=1e-30,n=512,o=16777216,r=8,l=29,h=24,a=4,d=0,c=0,u=0,f=1,p=2,g=3,_=4,R=5,T=6,m=12,v=5,O=6,y=5,E=6;var C;!function(t){t[t.FilterFlags=0]="FilterFlags",t[t.Animation=1]="Animation",t[t.GPGPU=2]="GPGPU",t[t.VV=3]="VV",t[t.DD0=4]="DD0",t[t.DD1=5]="DD1",t[t.DD2=6]="DD2"}(C||(C={}));const A=8,I=A<<1,L=1.05,M=3,b=1,w=3,S=3,P=5,G=6,H=1.15,D=2,N=128,x=256-2*D,V=2,F=10,q=1024,U=128,W=4,B=1,Y=1<<20,k=.75,X=10,K=.75,Q=256,z=32,Z=512},22799:(t,e,i)=>{i.d(e,{Ci:()=>r,HQ:()=>n,No:()=>l,XK:()=>o,aY:()=>s});const s=1,n=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r=256,l={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0}},61551:(t,e,i)=>{var s,n,o,r,l,h,a,d,c;i.d(e,{Be:()=>l,Gn:()=>o,RI:()=>a,S5:()=>n,ch:()=>d,uC:()=>c}),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"}(s||(s={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(n||(n={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(o||(o={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(r||(r={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(l||(l={})),function(t){t[t.DEFAULT=0]="DEFAULT",t[t.SIMPLE=1]="SIMPLE",t[t.DOT_DENSITY=2]="DOT_DENSITY",t[t.OUTLINE_FILL=3]="OUTLINE_FILL",t[t.OUTLINE_FILL_SIMPLE=4]="OUTLINE_FILL_SIMPLE",t[t.HEATMAP=5]="HEATMAP",t[t.PIE_CHART=6]="PIE_CHART"}(h||(h={})),function(t){t[t.All=0]="All",t[t.Highlight=1]="Highlight",t[t.InsideEffect=2]="InsideEffect",t[t.OutsideEffect=3]="OutsideEffect"}(a||(a={})),function(t){t[t.BATCHING=0]="BATCHING",t[t.STRICT_ORDER=1]="STRICT_ORDER",t[t.STRICT_MARKERS_AND_TEXT=2]="STRICT_MARKERS_AND_TEXT"}(d||(d={})),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT"}(c||(c={}))},63584:(t,e,i)=>{i.d(e,{Eq:()=>u,L4:()=>d,Pr:()=>m,QA:()=>_,Qu:()=>T,dJ:()=>c,r3:()=>g,vT:()=>R});var s=i(31633),n=i(5095),o=i(61551),r=i(93345);const l={color:{write:[!0,!0,!0,!0],blendMode:"composite"},depth:!1,stencil:{write:!1,test:{ref:t=>t.stencilRef,compare:r.MT.EQUAL,mask:255,op:{fail:r.eA.KEEP,zFail:r.eA.KEEP,zPass:r.eA.REPLACE}}}},h={color:{write:[!0,!0,!0,!0],blendMode:"additive"},depth:!1,stencil:!1},a={...l,color:{write:[!0,!0,!0,!0],blendMode:"delete"}};function d(t,e){let{pixelRatio:i,state:n,displayLevel:o,requiredLevel:r}=t;const l=1/2**(o-e.key.level),h=1/2**(r-e.key.level);return{displayMat3:Array.from(n.displayMat3),displayViewMat3:Array.from(n.displayViewMat3),displayViewScreenMat3:Array.from(e.transforms.displayViewScreenMat3),viewMat3:Array.from(n.viewMat3),tileMat3:Array.from(e.transforms.tileMat3),displayZoomFactor:l,requiredZoomFactor:h,tileOffset:[e.x,e.y],currentScale:n.scale,currentZoom:o,metersPerSRUnit:(0,s.GA)(n.spatialReference),rotation:n.rotation,pixelRatio:i}}function c(t){return"highlight"===t.passOptions?.type}function u(t){return"hittest"===t.passOptions?.type}function f(t){if(!u(t))return null;const{position:e,distance:i,smallSymbolDistance:s,smallSymbolSizeThreshold:n}=t.passOptions;return{position:e,distance:i,smallSymbolDistance:s,smallSymbolSizeThreshold:n}}function p(t){if(!c(t))return null;const{activeReasons:e,highlightAll:i}=t.passOptions;return{activeReasons:e,highlightAll:i?1:0}}function g(t,e,i){const s={};for(const n in i)i[n]instanceof Function?s[n]=i[n](t,e):s[n]=i[n];return s}function _(t,e){const{attributeView:i,context:s}=t;return{storage:i.getUniforms(s),view:d(t,e),hittestRequest:f(t),highlight:p(t)}}function R(t){return{inside:t.selection===o.RI.InsideEffect,outside:t.selection===o.RI.OutsideEffect}}function T(t){return u(t)?h:c(t)&&"clear"===t.passOptions.stepType?a:l}function m(t){const{row:e,col:i}=t.key,s=i*n.CQ,o=e*n.CQ;return{tileOffsetFromLocalOrigin:[s%n.YV,o%n.YV],maxIntsToLocalOrigin:[Math.floor(s/n.YV),Math.floor(o/n.YV)]}}},13692:(t,e,i)=>{i.d(e,{H_:()=>T,u4:()=>m,lB:()=>v,eh:()=>R});var s=i(45802),n=i(76460),o=i(90554),r=i(5095),l=i(22799),h=i(93345),a=i(98433),d=i(96673);const c=()=>n.A.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");const u=[0,0,0,0];class f{constructor(){this.type="single",this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:l.No.outlinePosition,outlineWidth:l.No.outlineWidth,innerHaloWidth:l.No.innerHaloWidth,outerHaloWidth:l.No.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*l.Ci),this._minMaxDistance=[0,0]}setHighlightOptions(t){const e=this._convertedHighlightOptions;!function(t,e){e.fillColor[0]=t.color.r/255,e.fillColor[1]=t.color.g/255,e.fillColor[2]=t.color.b/255,e.fillColor[3]=t.color.a,t.haloColor?(e.outlineColor[0]=t.haloColor.r/255,e.outlineColor[1]=t.haloColor.g/255,e.outlineColor[2]=t.haloColor.b/255,e.outlineColor[3]=t.haloColor.a):(e.outlineColor[0]=e.fillColor[0],e.outlineColor[1]=e.fillColor[1],e.outlineColor[2]=e.fillColor[2],e.outlineColor[3]=e.fillColor[3]),e.fillColor[3]*=t.fillOpacity,e.outlineColor[3]*=t.haloOpacity,e.fillColor[0]*=e.fillColor[3],e.fillColor[1]*=e.fillColor[3],e.fillColor[2]*=e.fillColor[3],e.outlineColor[0]*=e.outlineColor[3],e.outlineColor[1]*=e.outlineColor[3],e.outlineColor[2]*=e.outlineColor[3],e.outlineWidth=l.No.outlineWidth,e.outerHaloWidth=l.No.outerHaloWidth,e.innerHaloWidth=l.No.innerHaloWidth,e.outlinePosition=l.No.outlinePosition}(t,e);const i=e.outlinePosition-e.outlineWidth/2-e.outerHaloWidth,s=e.outlinePosition-e.outlineWidth/2,n=e.outlinePosition+e.outlineWidth/2,o=e.outlinePosition+e.outlineWidth/2+e.innerHaloWidth,r=Math.sqrt(Math.PI/2)*l.aY,h=Math.abs(i)>r?Math.round(10*(Math.abs(i)-r))/10:0,a=Math.abs(o)>r?Math.round(10*(Math.abs(o)-r))/10:0;let d;h&&!a?c().error("The outer rim of the highlight is "+h+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!h&&a?c().error("The inner rim of the highlight is "+a+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):h&&a&&c().error("The highlight is "+Math.max(h,a)+"px away from the edge of the feature; consider reducing some width values.");const f=[void 0,void 0,void 0,void 0];function p(t,e,i){f[0]=(1-i)*t[0]+i*e[0],f[1]=(1-i)*t[1]+i*e[1],f[2]=(1-i)*t[2]+i*e[2],f[3]=(1-i)*t[3]+i*e[3]}const{_texelData:g}=this;for(let c=0;c<l.Ci;++c)d=i+c/(l.Ci-1)*(o-i),d<i?(f[0]=0,f[1]=0,f[2]=0,f[3]=0):d<s?p(u,e.outlineColor,(d-i)/(s-i)):d<n?[f[0],f[1],f[2],f[3]]=e.outlineColor:d<o?p(e.outlineColor,e.fillColor,(d-n)/(o-n)):[f[0],f[1],f[2],f[3]]=e.fillColor,g[4*c]=255*f[0],g[4*c+1]=255*f[1],g[4*c+2]=255*f[2],g[4*c+3]=255*f[3];this._minMaxDistance[0]=i,this._minMaxDistance[1]=o,this._shadeTexChanged=!0}applyHighlightOptions(t,e){if(!this._shadeTex){const e=new d.R;e.wrapMode=h.pF.CLAMP_TO_EDGE,e.width=l.Ci,e.height=1,this._shadeTex=new a.g(t,e)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,l.Ci,1,this._texelData),this._shadeTexChanged=!1),t.bindTexture(this._shadeTex,r.CR),e.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}getReasonsWithGradients(){return[{activeReasons:(1<<o.M$.length)-1,activeGradient:this}]}}class p{constructor(){this.type="multi";const t={};for(const e in o.mF)t[e]=new f;this.gradients=t}setHighlightOptions(t){for(const e in o.mF){const i=o.mF[e](t);this.gradients[e].setHighlightOptions(i)}}applyHighlightOptions(t,e,i){this.gradients[i].applyHighlightOptions(t,e)}destroy(){for(const t in o.mF)this.gradients[t].destroy()}getReasonsWithGradients(){let t=1;const e=[];for(const i in this.gradients){const s=this.gradients[i];e.push({activeReasons:t,activeGradient:s}),t<<=1}return e}}var g=i(63584);const _=new s.J({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function R(t){return _.toJSON(t)}function T(t){const{bandCount:e,attributeTable:i,colormap:s,pixelType:n}=t.raster.rasterInfo;return 1===e&&(null!=i||null!=s||"u8"===n||"s8"===n)}function m(t,e){return"single"===t?.type&&e.multiHighlightEnabled&&(t.destroy(),t=null),"multi"!==t?.type||e.multiHighlightEnabled||(t.destroy(),t=null),t||(t=e.multiHighlightEnabled?new p:new f),t.setHighlightOptions(e),t}function v(t,e,i){const{painter:s,highlightGradient:n}=t,{highlight:o}=s.effects;if(!n)return;const r=t.passOptions,l=n.getReasonsWithGradients();for(let h=0;h<l.length;h++){const n={...t,passOptions:{type:"highlight",activeGradient:l[h].activeGradient,activeReasons:l[h].activeReasons,stepType:"burn",highlightAll:e}};if(o.bind(n),i(n),h<l.length-1){let s=0;for(let t=h+1;t<l.length;t++)s|=l[t].activeReasons;i({...t,passOptions:{type:"highlight",activeGradient:l[h].activeGradient,activeReasons:s,stepType:"clear",highlightAll:e}})}const r={...t,passOptions:{type:"highlight",activeGradient:l[h].activeGradient,activeReasons:l[h].activeReasons,stepType:"draw",highlightAll:e}};s.setPipelineState((0,g.Qu)(t)),s.updatePipelineState(t.context),o.draw(r),o.unbind()}t.passOptions=r}}}]);
//# sourceMappingURL=1904.424cf663.chunk.js.map