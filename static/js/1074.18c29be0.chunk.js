"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[1074],{18138:(e,t,i)=>{i.d(t,{Y:()=>y});var s=i(35143),r=(i(76460),i(81806),i(47249),i(50076),i(85842)),n=i(2413),a=i(85827),o=i(16060),l=i(78440);class p extends l.Y{constructor(e,t,i,s,r,n){let a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;super(e,t,i,s,r,n),this.bitmap=new o.mb(a),this.bitmap.coordScale=[r,n],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:(0,a.vt)(),tileMat3:(0,a.vt)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var h=i(69139),d=i(61551),u=i(46550);class c extends u.A{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,n.vt)(),e),i=this._tileInfoView.getTileResolution(e.level),[s,r]=this._tileInfoView.tileInfo.size;return new p(e,i,t[0],t[3],s,r)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[h.d.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:d.S5.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===d.S5.MAP&&super.doRender(e)}}const y=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new c(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return t=(0,s._)([(0,r.$)("esri.views.2d.layers.BitmapTileLayerView2D")],t),t}},90104:(e,t,i)=>{i.d(t,{e:()=>R});var s,r=i(35143),n=i(94643),a=i(3975),o=i(50076),l=i(68134),p=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),d=i(21904),u=i(7464),c=i(97001);let y=s=class extends c.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,r._)([(0,p.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=s=(0,r._)([(0,h.$)("esri.views.layers.support.ClipRect")],y);const v=y;var g=i(47266);let m=class extends c.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,p.MZ)({type:[[[Number]]],json:{write:!0}})],m.prototype,"path",void 0),m=(0,r._)([(0,h.$)("esri.views.layers.support.Path")],m);const f=m;var w=i(90992);const b=n.A.ofType({key:"type",base:null,typeMap:{rect:v,path:f,geometry:g.A}}),R=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new b,this.highlightOptions=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new d.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(e=>{let{scale:t,scaleRange:i}=e;const s=(0,w.E5)(i,t);s!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=s)}),l.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported;return t&&(e.spatialReferenceNotSupported=t),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,p.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,p.MZ)({type:b,set(e){const t=(0,a.V)(e,this._get("clips"),b);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,p.MZ)({type:u.A})],t.prototype,"highlightOptions",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"updating",null),(0,r._)([(0,p.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,p.MZ)()],t.prototype,"_visibleAtCurrentScale",void 0),(0,r._)([(0,p.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",null),t=(0,r._)([(0,h.$)("esri.views.2d.layers.LayerView2D")],t),t}},26697:(e,t,i)=>{function s(e,t,i,s){if(i.level===s.level)return t;const n=e.tileInfo.size,a=e.getTileResolution(i.level),o=e.getTileResolution(s.level);let l=e.getLODInfoAt(s.level);const p=l.getXForColumn(s.col),h=l.getYForRow(s.row);l=e.getLODInfoAt(i.level);const d=l.getXForColumn(i.col),u=l.getYForRow(i.row),c=function(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}(t)/n[0],y=function(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}(t)/n[1],v=Math.round(c*((p-d)/a)),g=Math.round(y*(-(h-u)/a)),m=Math.round(c*n[0]*(o/a)),f=Math.round(y*n[1]*(o/a)),w=r(n);return w.getContext("2d").drawImage(t,v,g,m,f,0,0,n[0],n[1]),w}function r(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}i.d(t,{G:()=>r,t:()=>s})},91196:(e,t,i)=>{i.d(t,{A:()=>v});var s=i(35143),r=i(91967),n=i(54099),a=i(5632),o=i(76460),l=i(30726),p=i(91291),h=i(46053),d=(i(81806),i(47249),i(85842)),u=i(19451),c=i(90992);let y=class extends((0,a.sA)((0,p.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";o.A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&(0,c.g7)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return(0,c.g7)(t)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,h.MZ)()],y.prototype,"view",void 0),(0,s._)([(0,h.MZ)()],y.prototype,"fullOpacity",null),(0,s._)([(0,h.MZ)()],y.prototype,"layer",void 0),(0,s._)([(0,h.MZ)()],y.prototype,"parent",void 0),(0,s._)([(0,h.MZ)({readOnly:!0})],y.prototype,"suspended",null),(0,s._)([(0,h.MZ)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s._)([(0,h.MZ)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s._)([(0,h.MZ)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,h.MZ)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s._)([(0,h.MZ)()],y.prototype,"updateSuspended",null),(0,s._)([(0,h.MZ)()],y.prototype,"visible",null),(0,s._)([(0,h.MZ)({readOnly:!0})],y.prototype,"visibleAtCurrentScale",null),(0,s._)([(0,h.MZ)({readOnly:!0})],y.prototype,"visibleAtCurrentTimeExtent",null),y=(0,s._)([(0,d.$)("esri.views.layers.LayerView")],y);const v=y},771:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(35143),r=i(76460),n=i(50346),a=i(68134),o=(i(81806),i(47249),i(50076),i(85842));const l=e=>{let t=class extends e{initialize(){this.addHandles((0,a.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,n.zf)(e)||r.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,o.$)("esri.views.layers.RefreshableLayerView")],t),t}},97001:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(35143),r=i(42553),n=i(46053),a=(i(81806),i(76460),i(47249),i(85842));let o=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,s._)([(0,a.$)("esri.views.layers.support.ClipArea")],o);const l=o},47266:(e,t,i)=>{i.d(t,{A:()=>y});var s,r=i(35143),n=(i(35238),i(46053)),a=(i(81806),i(76460),i(47249),i(85842)),o=i(89189),l=i(19902),p=i(97001),h=i(76797),d=i(65215);const u={base:o.A,key:"type",typeMap:{extent:h.A,polygon:d.A}};let c=s=class extends p.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new s({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:u,json:{read:l.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,a.$)("esri.views.layers.support.Geometry")],c);const y=c}}]);
//# sourceMappingURL=1074.18c29be0.chunk.js.map