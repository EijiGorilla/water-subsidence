"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[4476],{14476:(e,t,r)=>{r.r(t),r.d(t,{_fetchWrapper:()=>Fe,executeApplyEdits:()=>Ae,executeQuery:()=>be,executeQueryStreaming:()=>Pe,executeSearch:()=>Se,executeSearchStreaming:()=>xe,fetchKnowledgeGraph:()=>ke,kgRestServices:()=>Re,refreshDataModel:()=>Oe,refreshServiceDefinition:()=>je});r(35238);var n=r(55171),o=r(3825),i=r(50076),a=r(76460),s=r(35143),p=r(91967),l=r(46053),d=(r(81806),r(47249),r(85842));let u=class extends p.A{constructor(e){super(e),this.headerKeys=[],this.outSpatialReference=null,this.exceededTransferLimit=!1}};(0,s._)([(0,l.MZ)()],u.prototype,"headerKeys",void 0),(0,s._)([(0,l.MZ)()],u.prototype,"outSpatialReference",void 0),(0,s._)([(0,l.MZ)()],u.prototype,"exceededTransferLimit",void 0),u=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.GraphQueryResultHeader")],u);const c=u;let y=class extends p.A{constructor(e){super(e),this.resultRows=[],this.resultHeader=new c}};(0,s._)([(0,l.MZ)()],y.prototype,"resultRows",void 0),(0,s._)([(0,l.MZ)()],y.prototype,"resultHeader",void 0),y=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.GraphQueryResult")],y);const h=y;let f=class extends p.A{constructor(e){super(e),this.resultRowsStream=new ReadableStream,this.resultHeader=new c}};(0,s._)([(0,l.MZ)()],f.prototype,"resultRowsStream",void 0),(0,s._)([(0,l.MZ)()],f.prototype,"resultHeader",void 0),f=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.GraphQueryStreamingResult")],f);const _=f;var g=r(42553),w=r(13312);let m=class extends g.oY{constructor(e){super(e),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"unique",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],m.prototype,"ascending",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],m.prototype,"description",void 0),(0,s._)([(0,l.MZ)({type:[String],json:{write:!0}})],m.prototype,"fieldNames",void 0),m=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.FieldIndex")],m);const v=m;let E=class extends g.oY{constructor(e){super(e),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],E.prototype,"name",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],E.prototype,"alias",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],E.prototype,"fieldType",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],E.prototype,"geometryType",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"hasM",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"hasZ",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"nullable",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"editable",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"required",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"defaultVisibility",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],E.prototype,"systemMaintained",void 0),(0,s._)([(0,l.MZ)()],E.prototype,"role",void 0),(0,s._)([(0,l.MZ)({json:{write:!0}})],E.prototype,"defaultValue",void 0),E=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.GraphProperty")],E);const T=E;let M=class extends g.oY{constructor(e){super(e),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null,this.type=null}};(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],M.prototype,"name",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],M.prototype,"alias",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],M.prototype,"role",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],M.prototype,"strict",void 0),(0,s._)([(0,l.MZ)({type:[T],json:{write:!0}})],M.prototype,"properties",void 0),(0,s._)([(0,l.MZ)({type:[v],json:{write:!0}})],M.prototype,"fieldIndexes",void 0),M=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.GraphObjectType")],M);const G=M;let I=class extends G{constructor(e){super(e),this.type="entity"}};I=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.EntityType")],I);const R=I;let A=class extends G{constructor(e){super(e),this.endPoints=[],this.type="relationship"}};(0,s._)([(0,l.MZ)()],A.prototype,"endPoints",void 0),A=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.RelationshipType")],A);const b=A;let P=class extends g.oY{constructor(e){super(e),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null,this.metaEntityTypes=null}};(0,s._)([(0,l.MZ)({type:Date,json:{type:Number,write:{writer:(e,t)=>{t.timestamp=e?.getTime()}}}})],P.prototype,"timestamp",void 0),(0,s._)([(0,l.MZ)({type:w.A,json:{write:!0}})],P.prototype,"spatialReference",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],P.prototype,"strict",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],P.prototype,"objectIdField",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],P.prototype,"globalIdField",void 0),(0,s._)([(0,l.MZ)()],P.prototype,"arcgisManaged",void 0),(0,s._)([(0,l.MZ)()],P.prototype,"identifierInfo",void 0),(0,s._)([(0,l.MZ)()],P.prototype,"searchIndexes",void 0),(0,s._)([(0,l.MZ)({type:[R],json:{write:!0}})],P.prototype,"entityTypes",void 0),(0,s._)([(0,l.MZ)({type:[b],json:{write:!0}})],P.prototype,"relationshipTypes",void 0),(0,s._)([(0,l.MZ)({type:[R],json:{write:!0}})],P.prototype,"metaEntityTypes",void 0),P=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.DataModel")],P);const S=P;let x=class extends g.oY{constructor(e){super(e),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1,this.supportsProvenance=!1}};(0,s._)([(0,l.MZ)({type:[String],json:{write:!0}})],x.prototype,"capabilities",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],x.prototype,"supportsSearch",void 0),(0,s._)([(0,l.MZ)({type:[String],json:{write:!0}})],x.prototype,"supportedQueryFormats",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],x.prototype,"allowGeometryUpdates",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],x.prototype,"searchMaxRecordCount",void 0),(0,s._)([(0,l.MZ)({type:Object,json:{write:!0}})],x.prototype,"serviceCapabilities",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],x.prototype,"maxRecordCount",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],x.prototype,"description",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],x.prototype,"copyrightText",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],x.prototype,"units",void 0),(0,s._)([(0,l.MZ)({type:w.A,json:{write:!0}})],x.prototype,"spatialReference",void 0),(0,s._)([(0,l.MZ)({type:Number,json:{write:!0}})],x.prototype,"currentVersion",void 0),(0,s._)([(0,l.MZ)({type:Object,json:{write:!0}})],x.prototype,"dateFieldsTimeReference",void 0),(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],x.prototype,"serviceItemId",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],x.prototype,"supportsDocuments",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],x.prototype,"dataEditingNotSupported",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],x.prototype,"schemaEditingNotSupported",void 0),(0,s._)([(0,l.MZ)({type:Boolean,json:{write:!0}})],x.prototype,"supportsProvenance",void 0),x=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.ServiceDefinition")],x);const k=x;let O=class extends g.oY{constructor(e){super(e),this.dataModel=null,this.serviceDefinition=null}};(0,s._)([(0,l.MZ)({type:String,json:{write:!0}})],O.prototype,"url",void 0),(0,s._)([(0,l.MZ)({type:S,json:{write:!0}})],O.prototype,"dataModel",void 0),(0,s._)([(0,l.MZ)({type:k,json:{write:!0}})],O.prototype,"serviceDefinition",void 0),O=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.KnowledgeGraph")],O);const j=O;var F,Z,D,N=r(57502),L=r(66388),z=r(19247),C=r(65215),Y=r(23701);!function(e){e[e.OBJECT=0]="OBJECT",e[e.ENTITY=1]="ENTITY",e[e.RELATIONSHIP=2]="RELATIONSHIP",e[e.PATH=3]="PATH",e[e.ARRAY=4]="ARRAY"}(F||(F={})),function(e){e[e.view=0]="view",e[e.edit=1]="edit"}(Z||(Z={})),function(e){e[e.exclude=0]="exclude",e[e.include=1]="include"}(D||(D={}));var q=r(89189);function U(e,t){const r=new t.ArrayValue;return r.deleteLater(),e.forEach((e=>{r.add_value(B(e,t))})),r}function H(e,t){const r=new t.ObjectValue;r.deleteLater();for(const[n,o]of Object.entries(e))r.set_key_value(n,B(o,t));return r}function Q(e,t){if(e instanceof L.A)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.geometry_type=r.geometry_type=t.esriGeometryType.esriGeometryMultipoint,r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];o[0]=e.points.length;let i=0;return e.points.forEach((e=>{e.forEach((e=>{n[i]=e,i++}))})),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);if(e instanceof z.A)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.geometry_type=t.esriGeometryType.esriGeometryPoint,r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];o[0]=1,n[0]=e.x,n[1]=e.y;let i=2;return e.hasZ&&(n[i]=e.z,i++),e.hasM&&(n[i]=e.m,i++),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);if(e instanceof Y.A||e instanceof C.A)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];let i=[];e instanceof Y.A?(r.geometry_type=t.esriGeometryType.esriGeometryPolyline,i=e.paths):e instanceof C.A&&(r.geometry_type=t.esriGeometryType.esriGeometryPolygon,i=e.rings);let a=0,s=0;return i.forEach((e=>{let t=0;e.forEach((e=>{t++,e.forEach((e=>{n[s]=e,s++}))})),o[a]=t,a++})),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);throw new i.A("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:e})}function B(e,t){if(null==e)return"";if("object"!=typeof e)return e;if(e instanceof Date)return e;if(e instanceof q.A)return Q(e,t);if(Array.isArray(e)){const r=new t.ArrayValue;return r.deleteLater(),e.forEach((e=>{r.add_value(B(e,t))})),r}return H(e,t)}var V=r(9505),W=r(23908);function $(e,t){if(!e.typeName)throw new i.A("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(e instanceof V.A){const r=new t.EntityValue;r.deleteLater(),r.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))r.set_key_value(n,K(o,t));return e.id&&r.set_id(e.id),r}if(e instanceof W.A){const r=new t.RelationshipValue;r.deleteLater(),r.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))r.set_key_value(n,K(o,t));return e.id&&r.set_id(e.id),e.originId&&e.destinationId&&r.set_related_entity_ids(e.originId,e.destinationId),r}throw new i.A("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function K(e,t){return null==e?null:"object"!=typeof e||e instanceof Date?e:e instanceof q.A?Q(e,t):null}let J=class extends p.A{constructor(e){super(e),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};(0,s._)([(0,l.MZ)()],J.prototype,"name",void 0),(0,s._)([(0,l.MZ)()],J.prototype,"supportedCategory",void 0),(0,s._)([(0,l.MZ)()],J.prototype,"analyzers",void 0),(0,s._)([(0,l.MZ)()],J.prototype,"searchProperties",void 0),J=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.SearchIndex")],J);const X=J;var ee=r(31830);function te(e){return e.deleteLater(),new R(ne(e))}function re(e){return e.deleteLater(),new v({name:e.name,unique:e.unique,ascending:e.ascending,description:e.description,fieldNames:se(e.fields)})}function ne(e){return{name:e.name,alias:e.alias,role:ee.Eq[e.role.value]?ee.Eq[e.role.value]:null,strict:e.strict,properties:pe(e.properties),fieldIndexes:le(e.field_indexes)}}function oe(e){return e.deleteLater(),new T({alias:e.alias,name:e.name,fieldType:ee.r5[e.field_type.value]?ee.r5[e.field_type.value]:null,geometryType:ee.bV[e.geometry_type.value]?ee.bV[e.geometry_type.value]:null,hasM:e.has_m,hasZ:e.has_z,nullable:e.nullable,editable:e.editable,required:e.required,defaultVisibility:e.default_visibility,systemMaintained:e.system_maintained,role:ee.ti[e.role.value],defaultValue:e.default_value})}function ie(e){e.deleteLater();const t=ne(e),r=[];for(let n=0;n<e.end_points.size();n++){const t=e.end_points.get(n);r.push({originEntityType:t.origin_entity_type,destinationEntityType:t.dest_entity_type})}return e.end_points.delete(),new b(Object.assign({endPoints:r},t))}function ae(e){const t=[];for(let r=0;r<e.size();r++)t.push(te(e.get(r)));return e.delete(),t}function se(e){const t=[];for(let r=0;r<e.size();r++)t.push(e.get(r));return e.delete(),t}function pe(e){const t=[];for(let r=0;r<e.size();r++)t.push(oe(e.get(r)));return e.delete(),t}function le(e){const t=[];for(let r=0;r<e.size();r++)t.push(re(e.get(r)));return e.delete(),t}function de(e){const t=[];for(let r=0;r<e.size();r++)t.push(ie(e.get(r)));return e.delete(),t}function ue(e){const t=[];for(let r=0;r<e.size();r++){const r=new X,n=e.get(0);r.name=n.name,r.supportedCategory=ee.nP[n.supported_category.value];const o=n.analyzers.size();for(let e=0;e<o;e++)r.analyzers.push({name:n.analyzers.get(e).name});n.analyzers.delete();for(let e=0;e<n.search_properties.keys().size();e++){const t=n.search_properties.keys().get(e),o=n.search_properties.get(t),i=[];for(let e=0;e<o.property_names.size();e++)i.push(o.property_names.get(e));r.searchProperties.set(t,{propertyNames:i})}t.push(r)}return e.delete(),t}r(12831);var ce,ye=r(38156),he=r(68325);function fe(e,t){const r={spatialReference:t},n=_e(e,r),o=e.lengths,a=e.coords;let s="";if(e.geometry_type.value===ce.ESRI_GEOMETRY_POLYGON)s="rings";else{if(e.geometry_type.value!==ce.ESRI_GEOMETRY_POLYLINE)throw new i.A("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");s="paths"}r[s]=[];let p=0;return o.forEach((e=>{const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<n;t++)e[t]=a[p],p++;t.push(e)}r[s].push(t)})),r}function _e(e,t){let r=2;return e.has_z?(t.hasZ=e.has_z,r++):t.hasZ=!1,e.has_m?(t.hasM=e.has_m,r++):t.hasM=!1,r}!function(e){e[e.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",e[e.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",e[e.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",e[e.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",e[e.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",e[e.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",e[e.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",e[e.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH"}(ce||(ce={}));const ge=()=>a.A.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),we={decodedWasmObjToQueryResponseObj:(e,t,r)=>{if(null==e)return null;if("object"!=typeof e)return e;if("getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case ce.ESRI_GEOMETRY_POINT:return function(e,t){const r={spatialReference:t};let n=2;_e(e,r);const o=e.coords;return r.x=o[0],r.y=o[1],e.has_z&&(r.z=o[n],n++),e.has_m&&(r.m=o[n]),new z.A(r)}(e,r);case ce.ESRI_GEOMETRY_MULTIPOINT:return function(e,t){const r={spatialReference:t},n=_e(e,r),o=e.lengths,i=e.coords,a=o[0];r.points=[];let s=0;for(let p=0;p<a;p++){const e=[];for(let t=0;t<n;t++)e[t]=i[s],s++;r.points.push(e)}return new L.A(r)}(e,r);case ce.ESRI_GEOMETRY_POLYLINE:return function(e,t){return new Y.A(fe(e,t))}(e,r);case ce.ESRI_GEOMETRY_POLYGON:return function(e,t){return new C.A(fe(e,t))}(e,r);case ce.ESRI_GEOMETRY_ENVELOPE:case ce.ESRI_GEOMETRY_MULTI_PATCH:return ge().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case ce.ESRI_GEOMETRY_NULL:case ce.ESRI_GEOMETRY_ANY:default:return ge().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return ge().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case F.OBJECT:return function(e,t,r){return new ye.A(Ee(e,t,r))}(e,t,r);case F.ENTITY:return ve(e,t,r);case F.RELATIONSHIP:return Te(e,t,r);case F.PATH:return function(e,t,r){const n=e.entity_count(),o=e.relationship_count(),i=[];for(let a=0;a<n;a++)i.push(ve(e.get_entity_at(a),t,r)),a<o&&i.push(Te(e.get_relationship_at(a),t,r));return new he.A({path:i})}(e,t,r);case F.ARRAY:return function(e,t,r){const n=[],o=e.count();for(let i=0;i<o;i++){const o=e.get_value_at(i);n.push(me(o,t,r))}return n}(e,t,r);default:return ge().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function me(e,t,r){return we.decodedWasmObjToQueryResponseObj(e,t,r)}function ve(e,t,r){const n=e.type_name,o=Ee(e,t,r),i=e.get_id();return new V.A(Object.assign({typeName:n,id:i},o))}function Ee(e,t,r){const n={},o=e.key_count();for(let i=0;i<o;i++)n[e.get_key_at(i)]=me(e.get_value_at(i),t,r);return{properties:n}}function Te(e,t,r){const n=e.type_name,o=Ee(e,t,r);return new W.A(Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},o))}function Me(e){const t=[];for(let n=0;n<e.get_header_keys().size();n++)t.push(e.get_header_keys().get(n));const r=new w.A(e.get_out_sr());return new c({headerKeys:t,outSpatialReference:r,exceededTransferLimit:e.exceeded_transfer_limit()})}let Ge=class extends p.A{constructor(e){super(e),this.hasError=null,this.error=null,this.editResults=[]}};(0,s._)([(0,l.MZ)()],Ge.prototype,"hasError",void 0),(0,s._)([(0,l.MZ)()],Ge.prototype,"error",void 0),(0,s._)([(0,l.MZ)()],Ge.prototype,"editResults",void 0),Ge=(0,s._)([(0,d.$)("esri.rest.knowledgeGraph.GraphApplyEditsResult")],Ge);const Ie=Ge;const Re={fetchKnowledgeGraph:async e=>{const t=new j({url:e}),r=[];return r.push(Oe(t)),r.push(je(t)),await Promise.all(r),t},refreshDataModel:async e=>{e.dataModel=await Ye(e)},refreshServiceDefinition:async e=>{const t=(await(0,o.A)(e.url,{query:{f:"json"}})).data;return t.capabilities=t?.capabilities?.split(","),t.supportedQueryFormats=t?.supportedQueryFormats?.split(","),e.serviceDefinition=new k(t),e.serviceDefinition},executeQueryStreaming:async(e,t,r)=>{const n=`${e.url}/graph/query`;await Ze(e);const o=await Le(n,r);if(!e.serviceDefinition?.supportsProvenance&&"include"===t.provenanceBehavior)throw new i.A("knowledge-graph:provenance-not-supported","The Knowledge Graph Service definition indicated that provenance is not supported");o.data.body=await async function(e,t){const r=await(0,N.I)(),n=new r.GraphQueryRequestEncoder;if(n.deleteLater(),e.outputSpatialReference?n.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:n.output_spatial_reference=r.SpatialReferenceUtil.WGS84(),n.open_cypher_query=e.openCypherQuery,e.bindParameters)for(const[i,a]of Object.entries(e.bindParameters))Ne(i,a,n,r);if(e.bindGeometryQuantizationParameters)!function(e,t){t.input_quantization_parameters={xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}(e.bindGeometryQuantizationParameters,n);else{if(t.dataModel||await Oe(t),4326!==t.dataModel?.spatialReference?.wkid)throw new i.A("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");n.input_quantization_parameters=r.InputQuantizationUtil.WGS84_lossless()}e.outputQuantizationParameters&&function(e,t,r){if(!e.extent)throw new i.A("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",e.extent);if(!e.quantizeMode)throw new i.A("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",e.quantizeMode);if(!e.tolerance)throw new i.A("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",e.quantizeMode);t.output_quantization_parameters={extent:{xmax:e.extent.xmax,ymax:e.extent.ymax,xmin:e.extent.xmin,ymin:e.extent.ymin},quantize_mode:r.esriQuantizeMode[e.quantizeMode],tolerance:e.tolerance}}(e.outputQuantizationParameters,n,r),e.provenanceBehavior&&function(e,t){t.provenance_behavior={value:D[e]}}(e.provenanceBehavior,n);try{n.encode()}catch(v){throw new i.A("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:v})}const o=n.get_encoding_result();if(0!==o.error.error_code)throw new i.A("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:o.error.error_code,errorMessage:o.error.error_message});return structuredClone(o.get_byte_buffer())}(t,e);const a=await Fe(o.data.url,o.data);if(e.dataModel){const t=await Ce(a,e.dataModel);return new _({resultRowsStream:t.readableStream,resultHeader:t.resultHeader})}throw new i.A("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,t,r)=>{if(e.serviceDefinition?.dataEditingNotSupported)throw new i.A("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const n=`${e.url}/graph/applyEdits`;await Ze(e);const o=await Le(n,r);return o.data.body=await async function(e,t){if(t.dataModel||await Oe(t),!t.dataModel)throw new i.A("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const r=await(0,N.I)(),n=!!e.options?.cascadeDelete,o=new r.GraphApplyEditsEncoder(r.SpatialReferenceUtil.WGS84(),e.options?.inputQuantizationParameters?function(e){return{xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}(e.options?.inputQuantizationParameters):r.InputQuantizationUtil.WGS84_lossless());o.deleteLater(),o.cascade_delete=n;try{let t;e.entityAdds?.forEach((e=>{t=o.add_entity($(e,r)),De(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),e.relationshipAdds?.forEach((e=>{if(!e.originId||!e.destinationId)throw new i.A("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");t=o.add_relationship($(e,r)),De(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),e.entityUpdates?.forEach((e=>{if(!e.id)throw new i.A("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_entity($(e,r)),De(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),e.relationshipUpdates?.forEach((e=>{if(!e.id)throw new i.A("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_relationship($(e,r)),De(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),e.entityDeletes?.forEach((e=>{if(!e.typeName)throw new i.A("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!0);t.deleteLater(),e.ids?.forEach((e=>{t.delete_by_id(e)}))})),e.relationshipDeletes?.forEach((e=>{if(!e.typeName)throw new i.A("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!1);e.ids?.forEach((e=>{t.delete_by_id(e)}))})),o.encode()}catch(s){throw new i.A("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:s})}const a=o.get_encoding_result();return De(a.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(a.get_byte_buffer())}(t,e),async function(e){const t=e.headers.get("content-type");if(t?.includes("application/x-protobuf")){const t=await e.arrayBuffer(),r=new((await(0,N.I)()).GraphApplyEditsDecoder);return r.deleteLater(),r.decode(new Uint8Array(t)),function(e){const t=e.has_error(),r=new Ie({hasError:t,error:t?{errorCode:e.error.error_code,errorMessage:e.error.error_message}:null}),n=e.get_edit_results_count();for(let o=0;o<n;o++){const t=e.get_edit_results_at(o),n=e.get_edit_results_type_name_at(o),i=[],a=[],s=[],p=t.get_add_results_count(),l=t.get_update_results_count(),d=t.get_delete_results_count();for(let e=0;e<p;e++){const r=t.get_add_result_at(e);i.push({id:r.id,error:{errorCode:r.error.error_code,errorMessage:r.error.error_message}})}for(let e=0;e<l;e++){const r=t.get_update_result_at(e);a.push({id:r.id,error:{errorCode:r.error.error_code,errorMessage:r.error.error_message}})}for(let e=0;e<d;e++){const r=t.get_delete_result_at(e);s.push({id:r.id,error:{errorCode:r.error.error_code,errorMessage:r.error.error_message}})}r.editResults.push({typeName:n,adds:i,updates:a,deletes:s})}return r}(r)}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e.text()})}(await Fe(o.data.url,o.data))},executeQuery:async(e,t,r)=>{const n=`${e.url}/graph/query`,a=await(0,o.A)(n,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:t.openCypherQuery,...r?.query},signal:r?.signal,timeout:r?.timeout}),s=a.getHeader?.("content-type"),p=a.data;if(s?.includes("application/x-protobuf")){const t=new((await(0,N.I)()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel){const r=ze(t,p,e.dataModel);return new h({resultRows:r.resultRows,resultHeader:r.resultHeader})}throw new i.A("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:s,data:a.data})},executeSearch:async(e,t,r)=>{const n=t.typeCategoryFilter,a=`${e.url}/graph/search`,s=await(0,o.A)(a,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${t.searchQuery}"`,typeCategoryFilter:n,...r?.query},signal:r?.signal,timeout:r?.timeout}),p=s.getHeader?.("content-type"),l=s.data;if(p?.includes("application/x-protobuf")){const t=new((await(0,N.I)()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel){const r=ze(t,l,e.dataModel);return new h({resultRows:r.resultRows,resultHeader:r.resultHeader})}throw new i.A("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:p,data:s.data})},executeSearchStreaming:async(e,t,r)=>{const n=`${e.url}/graph/search`;await Ze(e);const o=await Le(n,r);o.data.body=await async function(e){const t=await(0,N.I)(),r=new t.GraphSearchRequestEncoder;if(r.deleteLater(),r.search_query=e.searchQuery,r.type_category_filter=t.esriNamedTypeCategory[e.typeCategoryFilter],!0===e.returnSearchContext&&(r.return_search_context=e.returnSearchContext),null!=e.start&&e.start>0&&(r.start_index=e.start),null!=e.num&&(r.max_num_results=e.num),null!=e.idsFilter&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{r.set_ids_filter(U(e.idsFilter,t))}catch(o){throw new i.A("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:o})}e.namedTypesFilter?.forEach((e=>{r.add_named_type_filter(e)}));try{r.encode()}catch(o){throw new i.A("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:o})}const n=r.get_encoding_result();if(0!==n.error.error_code)throw new i.A("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:n.error.error_code,errorMessage:n.error.error_message});return structuredClone(n.get_byte_buffer())}(t);const a=await Fe(o.data.url,o.data);if(e.dataModel){const t=await Ce(a,e.dataModel);return new _({resultRowsStream:t.readableStream,resultHeader:t.resultHeader})}throw new i.A("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},_fetchWrapper:async(e,t)=>fetch(e,t)};async function Ae(e,t,r){return Re.executeApplyEdits(e,t,r)}async function be(e,t,r){return Re.executeQuery(e,t,r)}async function Pe(e,t,r){return Re.executeQueryStreaming(e,t,r)}async function Se(e,t,r){return Re.executeSearch(e,t,r)}async function xe(e,t,r){return Re.executeSearchStreaming(e,t,r)}async function ke(e){return Re.fetchKnowledgeGraph(e)}async function Oe(e){return Re.refreshDataModel(e)}async function je(e){return Re.refreshServiceDefinition(e)}async function Fe(e,t){return Re._fetchWrapper(e,t)}async function Ze(e){const t=n.id?.findCredential(e.url);t||(e.dataModel?await Ye(e):await Oe(e))}function De(e,t,r){if(0!==e.error_code)throw new i.A(t,r,{errorCode:e.error_code,errorMessage:e.error_message})}function Ne(e,t,r,n){null==t?r.set_param_key_value(e,""):"object"!=typeof t||t instanceof Date?r.set_param_key_value(e,t):t instanceof q.A?r.set_param_key_value(e,Q(t,n)):Array.isArray(t)?r.set_param_key_value(e,U(t,n)):r.set_param_key_value(e,H(t,n))}async function Le(e,t){return(0,o.A)(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...t?.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:t?.signal,timeout:t?.timeout})}function ze(e,t,r,n){e.push_buffer(new Uint8Array(t));const o=[];let a,s,p=0;for(;e.next_row();){a&&s||(a=n??Me(e),s=a.outSpatialReference??new w.A({wkid:4326})),p||(p=e.get_header_keys().size());const t=new Array(p);for(let n=0;n<p;n++){const o=e.get_value(n);t[n]=me(o,r,s)}o.push(t)}if(e.has_error())throw new i.A("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - inner row decoding",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return{resultHeader:a,resultRows:o}}async function Ce(e,t){const r=e.headers.get("content-type");if(e.headers.get("content-length")&&a.A.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),r?.includes("application/x-protobuf")){const r=e.body?.getReader(),n=new((await(0,N.I)()).GraphQueryDecoder);let o,s,p;n.deleteLater();const l=new Promise(((e,t)=>{s=e,p=t}));let d=!1;return{readableStream:new ReadableStream({async start(e){try{return function l(){return r?.read().then((u=>{let{done:y,value:h}=u;try{if(y){let t;if(n.has_error()?t=new i.A("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded - query stream done",{errorCode:n.error.error_code,errorMessage:n.error.error_message}):d||s(new c),r.releaseLock(),t)throw e.error(t),p(t),t;return void e.close()}const a=ze(n,h,t,o),u=a.resultRows;return u.length>0&&e.enqueue(u),!o&&a.resultHeader&&(o=a.resultHeader,s(a.resultHeader),d=!0),l()}catch(le){throw a.A.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(le),p(le),new i.A("knowledge-graph:unexpected-server-response","Error inside streaming data return parsing",{error:le})}}))}()}catch(l){r?.releaseLock(),e.error(new i.A("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:l})),e.close()}}}),resultHeader:await l}}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:r,data:e.text()})}async function Ye(e){const t=`${e.url}/dataModel/queryDataModel`,r=await(0,o.A)(t,{responseType:"array-buffer",query:{f:"pbf"}}),n=r.getHeader?.("content-type"),a=r.data;if(n?.includes("application/x-protobuf")){const e=(await(0,N.I)()).decode_data_model_from_protocol_buffer(new Uint8Array(a));if(!e)throw new i.A("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return function(e){return e.deleteLater(),new S({timestamp:e.timestamp,spatialReference:new w.A(e.spatial_reference),strict:e.strict,objectIdField:e.objectid_property,globalIdField:e.globalid_property,arcgisManaged:e.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:ee.vy[e.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:e.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:e.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:ee.wr[e.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},searchIndexes:ue(e.search_indexes),entityTypes:ae(e.entity_types),relationshipTypes:de(e.relationship_types),metaEntityTypes:ae(e.meta_entity_types)})}(e)}throw new i.A("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:r.data})}},31830:(e,t,r)=>{var n,o,i,a,s,p,l;r.d(t,{Eq:()=>n,bV:()=>i,nP:()=>s,r5:()=>o,ti:()=>p,vy:()=>l,wr:()=>a}),function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document"}(n||(n={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(o||(o={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}(i||(i={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(a||(a={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth"}(s||(s={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension",e[e.esriGraphPropertyProvenanceInstanceId=10]="esriGraphPropertyProvenanceInstanceId",e[e.esriGraphPropertyProvenanceSourceType=11]="esriGraphPropertyProvenanceSourceType",e[e.esriGraphPropertyProvenanceSourceName=12]="esriGraphPropertyProvenanceSourceName",e[e.esriGraphPropertyProvenanceSource=13]="esriGraphPropertyProvenanceSource",e[e.esriGraphPropertyProvenanceComment=14]="esriGraphPropertyProvenanceComment",e[e.esriGraphPropertyProvenanceTypeName=15]="esriGraphPropertyProvenanceTypeName",e[e.esriGraphPropertyProvenancePropertyName=16]="esriGraphPropertyProvenancePropertyName"}(p||(p={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(l||(l={}))},57502:(e,t,r)=>{r.d(t,{I:()=>p});var n=r(28899),o=r(81806);const i="esri/rest/knowledgeGraph/wasmInterface/";let a,s=null;async function p(){const e=s??a;if(e)return e;const t=(0,o.A)("wasm-simd");return a=l(t),a}async function l(e){if(e){const{default:e}=await r.e(2585).then(r.bind(r,82585)).then((e=>e.a));return e({locateFile:e=>(0,n.s)(i+e)})}const{default:t}=await r.e(132).then(r.bind(r,47751)).then((e=>e.a));return t({locateFile:e=>(0,n.s)(i+e)})}}}]);
//# sourceMappingURL=4476.8a7af5e9.chunk.js.map