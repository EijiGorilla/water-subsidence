"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[3875],{55877:(e,t,i)=>{var l;i.d(t,{u:()=>l}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(l||(l={}))},12016:(e,t,i)=>{i.d(t,{B:()=>o});var l=i(18690),a=i(54901),s=i(76460),r=i(50346),n=i(16783);class o{constructor(e,t,i,l){let a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};this._mainMethod=t,this._transferLists=i,this._listeners=[],this._promise=(0,n.ho)(e,{...a,schedule:l}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,a.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>s.A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(e,t){const i={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,a.hA)((()=>{i.removed=!0,(0,l.TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const l=this._transferLists[e],a=l?l(t):[];return this._thread.invoke(e,t,{transferList:a,signal:i})}return this._promise?this._promise.then((()=>((0,r.Te)(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}},43875:(e,t,i)=>{i.r(t),i.d(t,{default:()=>O});var l=i(35143),a=i(3825),s=i(50076),r=i(30726),n=i(77717),o=i(50346),h=i(90534),c=i(46053),p=(i(81806),i(76460),i(47249),i(28379)),u=i(85842),d=i(91605),v=i(25515),f=i(76328),m=i(19502),y=i(11270),_=i(94729),w=i(95363);class g{constructor(e,t,i,l){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=l)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let i=1/0,l=-1/0,a=!0;for(const s of t)s===e?this._hasNoDataValues=!0:(i=s<i?s:i,l=s>l?s:l,a=!1);a?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=l>-3e38?l:0)}}var b=i(12016);class A extends b.B{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(T.forEach(((e,t)=>{e===this&&T.delete(t)})),this.destroy())}}const T=new Map;let D=class extends((0,f.f)((0,m.b)((0,y.q)((0,_.A)((0,n.P)(v.A)))))){constructor(){super(...arguments),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=T.get(e);return t||(null!=e?(t=new A((t=>e.immediate.schedule(t))),T.set(e,t)):(t=new A,T.set(null,t))),++t.ref,t}()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=(0,r.Gz)(this._lercDecoder)}readCapabilities(e,t){const i=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));return i?{operations:{supportsTileMap:i.includes("tilemap")}}:{operations:{supportsTileMap:!1}}}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords)for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new s.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(o.QP).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,l){const s=null!=(l=l||{signal:null}).signal?l.signal:l.signal=(new AbortController).signal,r={responseType:"array-buffer",signal:s},n={noDataValue:l.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,l))).then((()=>(0,a.A)(this.getTileUrl(e,t,i),r))).then((e=>this._lercDecoder.decode(e.data,n,s))).then((e=>new g(e)))}getTileUrl(e,t,i){const l=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,a=(0,h.x0)({...this.parsedUrl.query,blankTile:!l&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${i}${a?"?"+a:""}`}async queryElevation(e,t){const{ElevationQuery:l}=await i.e(3489).then(i.bind(i,53489));return(0,o.Te)(t),(new l).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:l}=await i.e(3489).then(i.bind(i,53489));return(0,o.Te)(t),(new l).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,l){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,l):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await(0,a.A)(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[M]}};(0,l._)([(0,c.MZ)({readOnly:!0})],D.prototype,"capabilities",void 0),(0,l._)([(0,p.w)("service","capabilities",["capabilities"])],D.prototype,"readCapabilities",null),(0,l._)([(0,c.MZ)({json:{read:{source:"copyrightText"}}})],D.prototype,"copyright",void 0),(0,l._)([(0,c.MZ)({readOnly:!0,type:d.A})],D.prototype,"heightModelInfo",void 0),(0,l._)([(0,c.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],D.prototype,"path",void 0),(0,l._)([(0,c.MZ)({type:["show","hide"]})],D.prototype,"listMode",void 0),(0,l._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],D.prototype,"minScale",void 0),(0,l._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],D.prototype,"maxScale",void 0),(0,l._)([(0,c.MZ)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],D.prototype,"opacity",void 0),(0,l._)([(0,c.MZ)({type:["ArcGISTiledElevationServiceLayer"]})],D.prototype,"operationalLayerType",void 0),(0,l._)([(0,c.MZ)()],D.prototype,"sourceJSON",void 0),(0,l._)([(0,c.MZ)({json:{read:!1},value:"elevation",readOnly:!0})],D.prototype,"type",void 0),(0,l._)([(0,c.MZ)(w.OZ)],D.prototype,"url",void 0),(0,l._)([(0,c.MZ)()],D.prototype,"version",void 0),(0,l._)([(0,p.w)("version",["currentVersion"])],D.prototype,"readVersion",null),D=(0,l._)([(0,u.$)("esri.layers.ElevationLayer")],D);const M=Symbol("default-fetch-tile");D.prototype.fetchTile[M]=!0;const O=D},76328:(e,t,i)=>{i.d(t,{f:()=>p});var l=i(35143),a=(i(35238),i(46053)),s=(i(81806),i(76460),i(47249),i(28379)),r=i(85842),n=i(88235),o=i(44067),h=i(82356),c=i(13312);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}readMaxScale(e,t){return null!=t.minLOD&&null!=t.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,t,i){const l=t.capabilities?.includes("Tilemap");let{minLOD:a,maxLOD:s,minScale:r,maxScale:c}=t;if(null==a&&null==s&&0!==r&&0!==c){const e=e=>Math.round(1e4*e)/1e4;r=e(r||t.tileInfo.lods[0].scale),c=e(c||t.tileInfo.lods[t.tileInfo.lods.length-1].scale);for(const i of t.tileInfo.lods){const t=e(i.scale);a=t>=r?i.level:a,s=t>=c?i.level:s}}if(l)return new h.d({layer:this,minLOD:a,maxLOD:s});if(t.tileInfo){const e=new n.A;return e.read(t.tileInfo,i),new o.A(e,a,s)}return null}};return(0,l._)([(0,a.MZ)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),(0,l._)([(0,a.MZ)()],t.prototype,"minScale",void 0),(0,l._)([(0,s.w)("service","minScale")],t.prototype,"readMinScale",null),(0,l._)([(0,a.MZ)()],t.prototype,"maxScale",void 0),(0,l._)([(0,s.w)("service","maxScale")],t.prototype,"readMaxScale",null),(0,l._)([(0,a.MZ)({type:c.A})],t.prototype,"spatialReference",void 0),(0,l._)([(0,a.MZ)({readOnly:!0})],t.prototype,"supportsBlankTile",null),(0,l._)([(0,a.MZ)({type:n.A})],t.prototype,"tileInfo",void 0),(0,l._)([(0,a.MZ)()],t.prototype,"tilemapCache",void 0),(0,l._)([(0,s.w)("service","tilemapCache",["capabilities","tileInfo"])],t.prototype,"readTilemapCache",null),(0,l._)([(0,a.MZ)()],t.prototype,"version",void 0),t=(0,l._)([(0,r.$)("esri.layers.mixins.ArcGISCachedService")],t),t}},44067:(e,t,i)=>{i.d(t,{A:()=>s});var l=i(50076),a=i(50346);class s{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.lods[e.lods.length-1].level;this.tileInfo=e,this.minLOD=t,this.maxLOD=i,e.lodAt(t)||(this.minLOD=e.lods[0].level),e.lodAt(i)||(this.maxLOD=e.lods[e.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(e,t,i){const l=this.tileInfo?.lodAt(e);return!l||e<this.minLOD||e>this.maxLOD?"unavailable":l.cols&&l.rows?i>=l.cols[0]&&i<=l.cols[1]&&t>=l.rows[0]&&t<=l.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(e,t,i,s){await(0,a.NO)(s);const r=this.getAvailability(e,t,i);if("unavailable"===r)throw new l.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return r}async fetchAvailabilityUpsample(e,t,i,l,s){await(0,a.NO)(s),l.level=e,l.row=t,l.col=i;const r=this.tileInfo;return r.updateTileInfo(l),this.fetchAvailability(e,t,i,s).catch((e=>{if((0,a.zf)(e))throw e;if(r.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,s);throw e}))}}},82356:(e,t,i)=>{i.d(t,{d:()=>T});var l,a=i(35143),s=i(3825),r=i(91967),n=i(55877),o=i(50076),h=i(54901),c=(i(81806),i(53521)),p=i(30015),u=i(50346),d=i(68134),v=i(52394),f=i(90534),m=i(46053),y=(i(76460),i(47249),i(85842)),_=i(11164),w=i(53084),g=i(78393);class b{constructor(e){!function(e){if(!e?.location)throw new o.A("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new o.A("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new o.A("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new o.A("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new o.A("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}(e);const{location:t,data:i}=e;this.location=Object.freeze((0,w.o8)(t));const l=this.location.width,a=this.location.height;let s=!0,r=!0;const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e<=g.y9?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(l*a/32));let h=0;for(let o=0;o<i.length;o++){const e=o%32;i[o]?(r=!1,n[h]|=1<<e):s=!1,31===e&&++h}r?(this._availability="unavailable",this.byteSize=40):s?(this._availability="available",this.byteSize=40):(this._availability=n,this.byteSize=40+(0,g.Ek)(n))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),l=i%32,a=i>>5,s=this._availability;return a<0||a>s.length?"unknown":s[a]&1<<l?"available":"unavailable"}static fromDefinition(e,t){const i=e.service.request||s.A,{row:l,col:a,width:r,height:n}=e,h={query:{f:"json"}};return t=t?{...h,...t}:h,i(function(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),t).then((e=>e.data)).catch((e=>{if(422===e?.details?.httpStatus)return{location:{top:l,left:a,width:r,height:n},valid:!0,data:new Array(r*n).fill(0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==a||e.location.width!==r||e.location.height!==n))throw new o.A("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:a,width:r,height:n}});return b.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new b(e))}}function A(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}let T=l=class extends r.A{constructor(e){super(e),this._pendingTilemapRequests={},this.request=s.A,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new c.q(2*n.u.MEGABYTES),this.addHandles((0,d.wB)((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),d.Vh))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const l=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return l?l.getAvailability(t,i):"unknown"}fetchAvailability(e,t,i,l){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new o.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):this._fetchTilemap(e,t,i,l).catch((e=>e)).then((l=>{if(l instanceof b){const a=l.getAvailability(t,i);if("unavailable"===a)throw new o.A("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i});return a}if((0,u.zf)(l))throw l;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,l,a){l.level=e,l.row=t,l.col=i;const s=this.layer.tileInfo;s.updateTileInfo(l);const r=this.fetchAvailability(e,t,i,a).catch((e=>{if((0,u.zf)(e))throw e;if(s.upsampleTile(l))return this.fetchAvailabilityUpsample(l.level,l.row,l.col,l,a);throw e}));return this._fetchAvailabilityUpsamplePrefetch(l.id,e,t,i,a,r),r}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,s,r){if(!this._prefetchingEnabled||null==e)return;const n=`prefetch-${e}`;if(this.hasHandles(n))return;const o=new AbortController;r.then((()=>o.abort()),(()=>o.abort()));let c=!1;const p=(0,h.hA)((()=>{c||(c=!0,o.abort())}));if(this.addHandles(p,n),await(0,v.md)(10,o.signal).catch((()=>{})),c||(c=!0,this.removeHandles(n)),(0,u.G4)(o))return;const d=new _.U(e,t,i,a),f={...s,signal:o.signal},m=this.layer.tileInfo;for(let h=0;l._prefetches.length<l._maxPrefetch&&m.upsampleTile(d);++h){const e=this.fetchAvailability(d.level,d.row,d.col,f);l._prefetches.push(e);const t=()=>{l._prefetches.removeUnordered(e)};e.then(t,t)}}_fetchTilemap(e,t,i,l){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new o.A("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const a=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,t,i,a);if(s)return Promise.resolve(s);const r=l?.signal;return l={...l,signal:null},new Promise(((e,t)=>{(0,u.u7)(r,(()=>t((0,u.NK)())));const i=A(a);let s=this._pendingTilemapRequests[i];if(!s){s=b.fromDefinition(a,l).then((e=>(this._tilemapCache.put(i,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[i]};this._pendingTilemapRequests[i]=s,s.then(e,e)}s.then(e,t)}))}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:(0,f.x0)({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,l){l.level=e,l.row=t-t%this.size,l.col=i-i%this.size;const a=A(l);return this._tilemapCache.get(a)}get test(){}};T._maxPrefetch=4,T._prefetches=new p.A({initialSize:l._maxPrefetch}),(0,a._)([(0,m.MZ)({constructOnly:!0})],T.prototype,"layer",void 0),(0,a._)([(0,m.MZ)({constructOnly:!0})],T.prototype,"minLOD",void 0),(0,a._)([(0,m.MZ)({constructOnly:!0})],T.prototype,"maxLOD",void 0),(0,a._)([(0,m.MZ)({constructOnly:!0})],T.prototype,"request",void 0),(0,a._)([(0,m.MZ)({constructOnly:!0})],T.prototype,"size",void 0),T=l=(0,a._)([(0,y.$)("esri.layers.support.TilemapCache")],T)}}]);
//# sourceMappingURL=3875.acc71221.chunk.js.map