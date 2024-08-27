"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[6717],{76717:(e,t,i)=>{i.r(t),i.d(t,{default:()=>q});var h=i(35143),s=i(54901),l=i(76460),a=i(50346),r=i(46053),n=(i(81806),i(47249),i(85842)),p=i(80963),c=i(64519),u=(i(50076),i(52394),i(15434),i(59784),i(86560),i(15941),i(76797),i(61425),i(3789),i(89189),i(66388),i(19247),i(65215),i(23701),i(5568),i(62032),i(89425),i(15709),i(88764),i(9435),i(50724),i(94046),i(94168),i(73988),i(27847),i(33049),i(4754),i(31385),i(278),i(71687),i(6134),i(9190),i(5104),i(41704),i(16083),i(27150),i(19313),i(28808),i(5095),i(59422),i(71447),i(84202),i(42436),i(14522),i(17400),i(54099),i(13692),i(61551),i(38545),i(28608),i(61678),i(93345),i(12331),i(35363),i(89179),i(98433),i(61247),i(89241),i(84662),i(35048),i(63584),i(99588),i(41838),i(83531),i(76418),i(8254),i(47709),i(3825),i(90534),i(29234),i(56789),i(72729),i(28972),i(68928),i(32743),i(81320),i(13308),i(33346),i(13720),i(38550),i(9410),i(57156),i(98112),i(42294),i(69539),i(81615),i(64346),i(26455),i(4480),i(41406),i(57162),i(64839),i(33721),i(68009),i(43321)),o=(i(98773),i(94643),i(68452),i(94151),i(38983),i(83755),i(73548),i(13312),i(14556),i(35238),i(55171),i(56924),i(19451),i(86529),i(18138)),g=i(90104),d=i(70822),f=i(26697),_=i(40181),w=i(93453),y=i(15389),m=i(96345),I=i(91196),V=i(771),v=i(93080),H=i(55754);const T=[0,0];let b=class extends((0,V.A)((0,o.Y)((0,g.e)(I.A)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new c.Y,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new _.A(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new y.A({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new m.A({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),(0,v.ox)(this,this.layer)){const e=this._highlightView=new u.A({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new d.A(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new v.Uh({createFetchPopupFeaturesQueryGeometry:(e,t)=>(0,H.V)(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh()}))),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):(0,s.hA)()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return(0,p.aI)(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const t=this._bitmapView.createTile(e),i=t.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(T,t.key),i.resolution=this._tileInfoView.getTileResolution(t.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(t)),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const i=this.tilemapCache,{signal:h,resamplingLevel:s=0}=t;if(!i)try{return await this._fetchImage(e,h)}catch(n){if(!(0,a.zf)(n)&&!this.resampling)return(0,f.G)(this._tileInfoView.tileInfo.size);if(s<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const h=new w.A(i),l=await this.fetchTile(h,{...t,resamplingLevel:s+1});return(0,f.t)(this._tileInfoView,l,h,e)}}throw n}const l=new w.A(0,0,0,0);let r;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,l,{signal:h}),l.level!==e.level&&!this.resampling)return(0,f.G)(this._tileInfoView.tileInfo.size);r=await this._fetchImage(l,h)}catch(n){if((0,a.zf)(n))throw n;r=await this._fetchImage(e,h)}return this.resampling?(0,f.t)(this._tileInfoView,r,l,e):r}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){(0,a.zf)(t)||l.A.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};(0,h._)([(0,r.MZ)()],b.prototype,"resampling",null),(0,h._)([(0,r.MZ)()],b.prototype,"tilemapCache",null),b=(0,h._)([(0,n.$)("esri.views.2d.layers.TileLayerView2D")],b);const q=b}}]);
//# sourceMappingURL=6717.88d7fc96.chunk.js.map