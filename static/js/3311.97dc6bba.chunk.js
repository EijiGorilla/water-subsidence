"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[3311],{63733:(e,t,r)=>{r.d(t,{A:()=>c});var o=r(35143),i=r(46053),l=(r(81806),r(76460),r(47249),r(85842)),n=r(5364),a=r(25515),s=r(65624),y=r(5682),p=r(64519),u=r(731);let d=class extends((0,s.dM)((0,y.j)(a.A))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new p.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,o._)([(0,i.MZ)({type:u.A})],d.prototype,"elevationInfo",void 0),(0,o._)([(0,i.MZ)((0,n.C)(p.Y,"graphics"))],d.prototype,"graphics",void 0),(0,o._)([(0,i.MZ)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,o._)([(0,i.MZ)()],d.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,i.MZ)({readOnly:!0})],d.prototype,"type",void 0),(0,o._)([(0,i.MZ)({constructOnly:!0})],d.prototype,"internal",void 0),d=(0,o._)([(0,l.$)("esri.layers.GraphicsLayer")],d);const c=d},43311:(e,t,r)=>{r.r(t),r.d(t,{default:()=>B});var o=r(35143),i=(r(35238),r(39356)),l=(r(95444),r(94643)),n=r(50076),a=r(53084),s=r(77717),y=r(48611),p=r(62754),u=r(46053),d=(r(81806),r(76460),r(28379)),c=r(85842),m=r(17707),f=r(26346),h=r(2413),g=r(1438),b=r(80963),S=r(38451),w=r(63733),M=r(25515),O=r(33754),_=r(65624),v=r(11270),N=r(94729),L=r(5682),C=r(44135),J=r(86875),T=r(7246),Z=r(76940),x=r(86659),A=r(13312),I=r(76797);function j(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!E(e)))}function E(e){let{layerDefinition:t,featureSet:r}=e;const o=t.geometryType??r.geometryType;return F.find((e=>o===e.geometryTypeJSON&&t.drawingInfo?.renderer?.symbol?.type===e.identifyingSymbol.type))}function R(){return new I.A({xmin:-180,ymin:-90,xmax:180,ymax:90})}const D=new C.A({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),P=new C.A({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0,length:255});let G=class extends w.A{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){const e=this.layer?.spatialReference,t=this.fullBounds;return e?null==t?(0,f.projectOrLoad)(R(),e).geometry:(0,h.w1)(t,e):null}get fullBounds(){const e=this.layer?.spatialReference;if(!e)return null;const t=(0,h.Ie)();return this.graphics.forEach((r=>{const o=null!=r.geometry?(0,f.projectOrLoad)(r.geometry,e).geometry:null;null!=o&&(0,h.fT)(t,"point"===o.type?o:o.extent,t)})),(0,h.aI)(t,h.qv)?null:t}get sublayers(){return this.graphics}};(0,o._)([(0,u.MZ)({readOnly:!0})],G.prototype,"fullExtent",null),(0,o._)([(0,u.MZ)({readOnly:!0})],G.prototype,"fullBounds",null),(0,o._)([(0,u.MZ)({readOnly:!0})],G.prototype,"sublayers",null),(0,o._)([(0,u.MZ)()],G.prototype,"layer",void 0),(0,o._)([(0,u.MZ)()],G.prototype,"layerId",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],G.prototype,"visibilityMode",void 0),G=(0,o._)([(0,c.$)("esri.layers.MapNotesLayer.MapNotesSublayer")],G);const F=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new J.A).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new T.A).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new Z.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new Z.A).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new x.A).toJSON()}];let k=class extends((0,_.dM)((0,L.j)((0,v.q)((0,N.A)((0,s.P)(M.A)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=A.A.WGS84,this.sublayers=new l.A(F.map((e=>new G({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!j(t)&&"portal-item"!==r?.origin}}}readFeatureCollections(e,t,r){if(!j(t))return null;const o=t.layers.map((e=>{const t=new S.default;return t.read(e,r),t}));return new l.A({items:o})}readLegacyfeatureCollectionJSON(e,t){return j(t)?(0,a.o8)(t.featureCollection):null}get fullExtent(){const e=this.spatialReference,t=(0,h.Ie)();return null!=this.sublayers?this.sublayers.forEach((e=>{let{fullBounds:r}=e;return null!=r?(0,h.fT)(t,r,t):t}),t):this.featureCollectionJSON?.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((r=>{const o=(0,f.projectOrLoad)(r.layerDefinition.extent,e).geometry;null!=o&&(0,h.fT)(t,o,t)})),(0,h.aI)(t,h.qv)?(0,f.projectOrLoad)(R(),e).geometry:(0,h.w1)(t,e)}readMinScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.minScale)return r.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const r of t.layers)if(null!=r.layerDefinition.maxScale)return r.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?A.A.fromJSON(t.layers[0].layerDefinition.spatialReference):A.A.WGS84}readSublayers(e,t,r){if(j(t))return null;const o=[];let n=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const l of t.layers){const{layerDefinition:e,featureSet:t}=l,r=e.id??n++,a=E(l);if(null!=a){const l=new G({id:a.id,title:e.name,layerId:r,layer:this,graphics:t.features.map((e=>{let{geometry:t,symbol:r,attributes:o,popupInfo:l}=e;return i.A.fromJSON({attributes:o,geometry:t,symbol:r,popupTemplate:l})}))});o.push(l)}}return new l.A(o)}writeSublayers(e,t,r,o){const{minScale:i,maxScale:l}=this;if(null==e)return;const a=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(a&&o?.messages?.push(new n.A("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const s=[];let p=this.spatialReference.toJSON();e:for(const n of e)for(const e of n.graphics)if(null!=e.geometry){p=e.geometry.spatialReference.toJSON();break e}for(const n of F){const t=e.find((e=>n.id===e.id));this._writeMapNoteSublayer(s,t,n,i,l,p,o)}(0,y.sM)("featureCollection.layers",s,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,a.o8)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if(null==this.sublayers)return;let e=null;const t=[];for(const o of this.sublayers)for(const r of o.graphics)if(null!=r.geometry){const o=r.geometry;e?(0,b.aI)(o.spatialReference,e)||((0,f.canProjectWithoutEngine)(o.spatialReference,e)||(0,f.isLoaded)()||await(0,f.load)(),r.geometry=(0,f.project)(o,e)):e=o.spatialReference,t.push(r)}const r=await(0,g.el)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){return null==this.sublayers?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,r,o,i,l,n){const s=[];if(null!=t){for(const e of t.graphics)this._writeMapNote(s,e,r.geometryType,n);this._normalizeObjectIds(s,D),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,a.o8)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:o,maxScale:i,objectIdField:"OBJECTID",fields:[D.toJSON(),P.toJSON()],spatialReference:l},featureSet:{features:s,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,o){if(null==t)return;const{geometry:i,symbol:l,popupTemplate:n}=t;if(null==i)return;if(i.type!==r)return void o?.messages?.push(new p.A("map-notes-layer:invalid-geometry-type",`Geometry "${i.type}" cannot be saved in "${r}" layer`,{graphic:t}));if(null==l)return void o?.messages?.push(new p.A("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const a={attributes:{...t.attributes},geometry:i.toJSON(),symbol:l.toJSON()};null!=n&&(a.popupInfo=n.toJSON()),e.push(a)}_normalizeObjectIds(e,t){const r=t.name;let o=(0,O.H)(r,e)+1;const i=new Set;for(const l of e){l.attributes||(l.attributes={});const{attributes:e}=l;(null==e[r]||i.has(e[r]))&&(e[r]=o++),i.add(e[r])}}};(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"capabilities",void 0),(0,o._)([(0,d.w)(["portal-item","web-map"],"capabilities",["layers"])],k.prototype,"readCapabilities",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"featureCollections",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"featureCollections",["layers"])],k.prototype,"readFeatureCollections",null),(0,o._)([(0,u.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],k.prototype,"featureCollectionJSON",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],k.prototype,"readLegacyfeatureCollectionJSON",null),(0,o._)([(0,u.MZ)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],k.prototype,"featureCollectionType",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"fullExtent",null),(0,o._)([(0,u.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],k.prototype,"legendEnabled",void 0),(0,o._)([(0,u.MZ)({type:["show","hide","hide-children"]})],k.prototype,"listMode",void 0),(0,o._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"minScale",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"minScale",["layers"])],k.prototype,"readMinScale",null),(0,o._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:!1}})],k.prototype,"maxScale",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"maxScale",["layers"])],k.prototype,"readMaxScale",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"multipointLayer",null),(0,o._)([(0,u.MZ)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],k.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"pointLayer",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"polygonLayer",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"polylineLayer",null),(0,o._)([(0,u.MZ)({type:A.A})],k.prototype,"spatialReference",void 0),(0,o._)([(0,d.w)(["web-map","portal-item"],"spatialReference",["layers"])],k.prototype,"readSpatialReference",null),(0,o._)([(0,u.MZ)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],k.prototype,"sublayers",void 0),(0,o._)([(0,d.w)("web-map","sublayers",["layers"])],k.prototype,"readSublayers",null),(0,o._)([(0,m.K)("web-map","sublayers")],k.prototype,"writeSublayers",null),(0,o._)([(0,u.MZ)({readOnly:!0})],k.prototype,"textLayer",null),(0,o._)([(0,u.MZ)()],k.prototype,"title",void 0),(0,o._)([(0,u.MZ)({readOnly:!0,json:{read:!1}})],k.prototype,"type",void 0),k=(0,o._)([(0,c.$)("esri.layers.MapNotesLayer")],k);const B=k},33754:(e,t,r)=>{r.d(t,{H:()=>i,L:()=>o});const o=1;function i(e,t){let r=0;for(const o of t){const t=o.attributes?.[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}}}]);
//# sourceMappingURL=3311.97dc6bba.chunk.js.map