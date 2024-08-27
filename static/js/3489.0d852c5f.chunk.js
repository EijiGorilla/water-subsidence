"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[3489],{53489:(e,t,n)=>{n.d(t,{ElevationQuery:()=>q});var i=n(98773),s=n(50076),l=n(30726),a=n(50346),o=n(31633),r=n(66388),c=n(19247),u=n(23701),h=n(26346),f=n(2413),p=(n(35238),n(81806),n(54901)),m=n(76460),d=n(45417);const y=()=>m.A.getLogger("esri.layers.support.ElevationSampler");class x{queryElevation(e){return function(e,t){const n=g(e,t.spatialReference);if(!n)return null;switch(e.type){case"point":!function(e,t,n){e.z=n.elevationAt(t.x,t.y)}(e,n,t);break;case"polyline":!function(e,t,n){T.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let s=0;s<e.paths.length;s++){const l=e.paths[s],a=t.paths[s];for(let e=0;e<l.length;e++){const t=l[e],s=a[e];T.x=s[0],T.y=s[1],i&&(t[3]=t[2]),t[2]=n.elevationAt(T.x,T.y)}}e.hasZ=!0}(e,n,t);break;case"multipoint":!function(e,t,n){T.spatialReference=t.spatialReference;const i=e.hasM&&!e.hasZ;for(let s=0;s<e.points.length;s++){const l=e.points[s],a=t.points[s];T.x=a[0],T.y=a[1],i&&(l[3]=l[2]),l[2]=n.elevationAt(T.x,T.y)}e.hasZ=!0}(e,n,t)}return e}(e.clone(),this)}on(){return(0,p.hA)()}projectIfRequired(e,t){return g(e,t)}}class v extends x{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){super(),this.tile=e,this.noDataValue=n;const i=e.tile.extent;this.extent=(0,f.w1)(i,t.spatialReference),this.extent.zmin=e.zmin,this.extent.zmax=e.zmax,this._aaExtent=i;const s=(0,o.GA)(t.spatialReference),l=t.lodAt(e.tile.level).resolution*s;this.demResolution={min:l,max:l}}contains(e){const t=this.projectIfRequired(e,this.spatialReference);return null!=t&&this.containsAt(t.x,t.y)}containsAt(e,t){return(0,f.Rj)(this._aaExtent,e,t)}elevationAt(e,t){if(!this.containsAt(e,t)){const n=this.extent,i=`${n.xmin}, ${n.ymin}, ${n.xmax}, ${n.ymax}`;return y().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${i})`),this.noDataValue}return this.tile.sample(e,t)??this.noDataValue}}class w extends x{get spatialReference(){return this.extent.spatialReference}constructor(e,t,n){let i;super(),"number"==typeof t?(this.noDataValue=t,i=null):(i=t,this.noDataValue=n),this.samplers=i?e.map((e=>new v(e,i,this.noDataValue))):e;const s=this.samplers[0];if(s){this.extent=s.extent.clone();const{min:e,max:t}=s.demResolution;this.demResolution={min:e,max:t};for(let n=1;n<this.samplers.length;n++){const e=this.samplers[n];this.extent.union(e.extent),this.demResolution.min=Math.min(this.demResolution.min,e.demResolution.min),this.demResolution.max=Math.max(this.demResolution.max,e.demResolution.max)}}else this.extent=(0,f.w1)((0,f.vt)(),i.spatialReference),this.demResolution={min:0,max:0}}elevationAt(e,t){let n,i=!1;for(const s of this.samplers)if(s.containsAt(e,t)&&(i=!0,n=s.elevationAt(e,t),n!==s.noDataValue))return n;return null!=n?n:(i||y().warn("#elevationAt()",`Point used to sample elevation (${e}, ${t}) is outside of the sampler`),this.noDataValue)}}function g(e,t){if(null==e)return null;const n=e.spatialReference;if(n.equals(t))return e;const i=(0,d.Cv)(e,t);return i||y().error(`Cannot project geometry spatial reference (wkid:${n.wkid}) to elevation sampler spatial reference (wkid:${t.wkid})`),i}const T=new c.A;class A{constructor(e,t){this.data=e,this.safeWidth=.99999999*(e.width-1),this.dx=(e.width-1)/(t[2]-t[0]),this.dy=(e.width-1)/(t[3]-t[1]),this.x0=t[0],this.y1=t[3]}}class R{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.tile=e,null!=t&&null!=e){const n=e.extent;this._samplerData=new A(t,n)}}get zmin(){return null!=this._samplerData?this._samplerData.data.minValue:0}get zmax(){return null!=this._samplerData?this._samplerData.data.maxValue:0}get hasNoDataValues(){return!!this._samplerData?.data.hasNoDataValues}sample(e,t){if(null==this._samplerData)return;const{safeWidth:n,data:i,dx:s,dy:l,y1:a,x0:o}=this._samplerData,{width:r,values:c,noDataValue:u}=i,h=_(l*(a-t),0,n),f=_(s*(e-o),0,n),p=Math.floor(h),m=Math.floor(f),d=p*r+m,y=d+r,x=c[d],v=c[y],w=c[d+1],g=c[y+1];if(x!==u&&v!==u&&w!==u&&g!==u){const e=f-m,t=x+(w-x)*e;return t+(v+(g-v)*e-t)*(h-p)}}}function _(e,t,n){return e<t?t:e>n?n:e}var E=n(11164);class q{async queryAll(e,t,n){if(!(e=n?.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s.A("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");const i=D.fromGeometry(t);let l=!1;n?.returnSampleInfo||(l=!0);const a={...b,...n,returnSampleInfo:!0},o=await this.query(e[e.length-1],i,a),r=await this._queryAllContinue(e,o,a);return r.geometry=r.geometry.export(),l&&delete r.sampleInfo,r}async query(e,t,n){if(!e)throw new s.A("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||!(t instanceof D)&&"point"!==t.type&&"multipoint"!==t.type&&"polyline"!==t.type)throw new s.A("elevation-query:invalid-geometry","Only point, polyline and multipoint geometries can be used to query elevation");const i={...b,...n},a=new z(e,t.spatialReference,i),r=i.signal;return await e.load({signal:r}),await async function(e,t,n){let i;const l=e.layer.tileInfo.spatialReference;if(t instanceof D?i=await t.project(l,n):(await(0,h.initializeProjection)([{source:t.spatialReference,dest:l}],{signal:n}),i=(0,h.project)(t,l)),!i)throw new s.A("elevation-query:spatial-reference-mismatch",`Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${l.wkid}'`);e.geometry=D.fromGeometry(i)}(a,t,r),await this._selectTiles(a,r),await F(a,r),function(e){e.geometry.coordinates.forEach((t=>{const n=t.elevationTile;let i=e.options.noDataValue;if(n){const e=n.sample(t.x,t.y);null!=e?i=e:t.elevationTile=null}t.z=i}))}(a),async function(e,t){const n=await e.geometry.project(e.outSpatialReference,t);(0,l.Lw)(n);const i={geometry:n.export(),noDataValue:e.options.noDataValue};return e.options.returnSampleInfo&&(i.sampleInfo=function(e){const t=e.layer.tileInfo,n=(0,o.GA)(t.spatialReference);return e.geometry.coordinates.map((i=>{let s=-1;return i.elevationTile&&i.elevationTile!==e.outsideExtentTile&&(s=t.lodAt(i.elevationTile.tile.level).resolution*n),{demResolution:s}}))}(e)),e.geometry.coordinates.forEach((e=>{e.tile=null,e.elevationTile=null})),i}(a,r)}async createSampler(e,t,n){if(!e)throw new s.A("elevation-query:invalid-layer","Elevation queries require an elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s.A("elevation-query:invalid-extent","Invalid or undefined extent");const i={...b,...n};return this._createSampler(e,t,i)}async createSamplerAll(e,t,n){if(!(e=n?.ignoreInvisibleLayers?e.filter((e=>e.visible)):e.slice()).length)throw new s.A("elevation-query:invalid-layer","Elevation queries require at least one elevation layer to fetch tiles from");if(!t||"extent"!==t.type)throw new s.A("elevation-query:invalid-extent","Invalid or undefined extent");const i={...b,...n,returnSampleInfo:!0},l=await this._createSampler(e[e.length-1],t,i);return this._createSamplerAllContinue(e,t,l,i)}async _createSampler(e,t,n,i){const s=n.signal;await e.load({signal:s});const l=t.spatialReference,a=e.tileInfo.spatialReference;l.equals(a)||(await(0,h.initializeProjection)([{source:l,dest:a}],{signal:s}),t=(0,h.project)(t,a));const o=new M(e,t,n,i);return await this._selectTiles(o,s),await F(o,s),new w(o.elevationTiles,o.layer.tileInfo,o.options.noDataValue)}async _createSamplerAllContinue(e,t,n,i){if(e.pop(),!e.length)return n;const s=n.samplers.filter((e=>!e.tile.hasNoDataValues)).map((e=>(0,f.VY)(e.extent))),l=await this._createSampler(e[e.length-1],t,i,s);if(0===l.samplers.length)return n;const a=n.samplers.concat(l.samplers),o=new w(a,i.noDataValue);return this._createSamplerAllContinue(e,t,o,i)}async _queryAllContinue(e,t,n){const i=e.pop(),s=t.geometry.coordinates,a=t.sampleInfo;(0,l.Lw)(a);const o=[],r=[];for(let l=0;l<s.length;l++){const t=a[l];t.demResolution>=0?t.source||(t.source=i):e.length&&(o.push(s[l]),r.push(l))}if(!e.length||0===o.length)return t;const c=t.geometry.clone(o),u=await this.query(e[e.length-1],c,n),h=u.sampleInfo;if(!h)throw new Error("no sampleInfo");return r.forEach(((e,t)=>{s[e].z=u.geometry.coordinates[t].z,a[e].demResolution=h[t].demResolution})),this._queryAllContinue(e,t,n)}async _selectTiles(e,t){"geometry"===e.type&&function(e){if(null==e.layer.fullExtent)return;const t=new R(null);t.sample=()=>e.options.noDataValue,e.outsideExtentTile=t;const n=e.layer.fullExtent;e.geometry.coordinates.forEach((e=>{const i=e.x,s=e.y;(i<n.xmin||i>n.xmax||s<n.ymin||s>n.ymax)&&(e.elevationTile=t)}))}(e);const n=e.options.demResolution;if("number"==typeof n)!function(e,t){const n=function(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,s=t/(0,o.GA)(n.spatialReference),l=k(n,i);let a=l[0],r=0;for(let o=1;o<l.length;o++){const e=l[o];Math.abs(e.resolution-s)<Math.abs(a.resolution-s)&&(a=e,r=o)}return r}(e,t);e.selectTilesAtLOD(n)}(e,n);else if("finest-contiguous"===n)await this._selectTilesFinestContiguous(e,t);else{if("auto"!==n)throw new s.A("elevation-query:invalid-dem-resolution",`Invalid dem resolution value '${n}', expected a number, "finest-contiguous" or "auto"`);await this._selectTilesAuto(e,t)}}async _selectTilesFinestContiguous(e,t){const{tileInfo:n,tilemapCache:i}=e.layer,s=V(n,i,e.options.minDemResolution);await this._selectTilesFinestContiguousAt(e,s,t)}async _selectTilesFinestContiguousAt(e,t,n){const i=e.layer;if(e.selectTilesAtLOD(t),t<0)return;const l=i.tilemapCache,o=e.getTilesToFetch();try{if(l&&!$(l))await(0,a.qr)(Promise.all(o.map((e=>l.fetchAvailability(e.level,e.row,e.col,{signal:n})))),n);else if(await F(e,n),!e.allElevationTilesFetched())throw e.clearElevationTiles(),new s.A("elevation-query:has-unavailable-tiles")}catch(v){(0,a.QP)(v),await this._selectTilesFinestContiguousAt(e,t-1,n)}}async _selectTilesAuto(e,t){(function(e){const{tileInfo:t,tilemapCache:n}=e.layer,i=V(t,n,e.options.minDemResolution);e.selectTilesAtLOD(i,e.options.maximumAutoTileRequests)})(e),function(e){const t=e.layer.tileInfo;let n=0;const i={},s=e=>{null!=e.id&&(e.id in i?i[e.id]++:(i[e.id]=1,n++))},l=e=>{if(null==e.id)return;const t=i[e.id];1===t?(delete i[e.id],n--):i[e.id]=t-1};e.forEachTileToFetch(s,l);let a=!0;for(;a&&(a=!1,e.forEachTileToFetch((i=>{n<=e.options.maximumAutoTileRequests||(l(i),t.upsampleTile(i)&&(a=!0),s(i))}),l),a););}(e);const n=e.layer.tilemapCache;if(!n||$(n))return this._selectTilesAutoPrefetchUpsample(e,t);const s=e.getTilesToFetch(),l={},o=s.map((async e=>{const s=new E.U(null,0,0,0,(0,f.vt)()),o=await(0,i.Ke)(n.fetchAvailabilityUpsample(e.level,e.row,e.col,s,{signal:t}));!1!==o.ok?null!=e.id&&(l[e.id]=s):(0,a.QP)(o.error)}));await(0,a.qr)(Promise.all(o),t),e.remapTiles(l)}async _selectTilesAutoPrefetchUpsample(e,t){const n=e.layer.tileInfo;await F(e,t);let i=!1;e.forEachTileToFetch(((e,t)=>{n.upsampleTile(e)?i=!0:t()})),i&&await this._selectTilesAutoPrefetchUpsample(e,t)}}class D{export(){return this._exporter(this.coordinates,this.spatialReference)}clone(e){const t=new D;return t.geometry=this.geometry,t.spatialReference=this.spatialReference,t.coordinates=e||this.coordinates.map((e=>e.clone())),t._exporter=this._exporter,t}async project(e,t){if(this.spatialReference.equals(e))return this.clone();await(0,h.initializeProjection)([{source:this.spatialReference,dest:e}],{signal:t});const n=new r.A({spatialReference:this.spatialReference,points:this.coordinates.map((e=>[e.x,e.y]))}),i=(0,h.project)(n,e);if(!i)return null;const s=this.coordinates.map(((e,t)=>{const n=e.clone(),s=i.points[t];return n.x=s[0],n.y=s[1],n})),l=this.clone(s);return l.spatialReference=e,l}static fromGeometry(e){const t=new D;if(t.geometry=e,t.spatialReference=e.spatialReference,e instanceof D)t.coordinates=e.coordinates.map((e=>e.clone())),t._exporter=(t,n)=>{const i=e.clone(t);return i.spatialReference=n,i};else switch(e.type){case"point":{const n=e,{hasZ:i,hasM:s}=n;t.coordinates=i&&s?[new I(n.x,n.y,n.z,n.m)]:i?[new I(n.x,n.y,n.z)]:s?[new I(n.x,n.y,null,n.m)]:[new I(n.x,n.y)],t._exporter=(t,n)=>e.hasM?new c.A(t[0].x,t[0].y,t[0].z,t[0].m,n):new c.A(t[0].x,t[0].y,t[0].z,n);break}case"multipoint":{const n=e,{hasZ:i,hasM:s}=n;t.coordinates=i&&s?n.points.map((e=>new I(e[0],e[1],e[2],e[3]))):i?n.points.map((e=>new I(e[0],e[1],e[2]))):s?n.points.map((e=>new I(e[0],e[1],null,e[2]))):n.points.map((e=>new I(e[0],e[1]))),t._exporter=(t,n)=>e.hasM?new r.A({points:t.map((e=>[e.x,e.y,e.z,e.m])),hasZ:!0,hasM:!0,spatialReference:n}):new r.A(t.map((e=>[e.x,e.y,e.z])),n);break}case"polyline":{const n=e,i=[],s=[],{hasZ:l,hasM:a}=e;let o=0;for(const e of n.paths)if(s.push([o,o+e.length]),o+=e.length,l&&a)for(const t of e)i.push(new I(t[0],t[1],t[2],t[3]));else if(l)for(const t of e)i.push(new I(t[0],t[1],t[2]));else if(a)for(const t of e)i.push(new I(t[0],t[1],null,t[2]));else for(const t of e)i.push(new I(t[0],t[1]));t.coordinates=i,t._exporter=(t,n)=>{const i=e.hasM?t.map((e=>[e.x,e.y,e.z,e.m])):t.map((e=>[e.x,e.y,e.z])),l=s.map((e=>i.slice(e[0],e[1])));return new u.A({paths:l,hasM:e.hasM,hasZ:!0,spatialReference:n})};break}}return t}}class I{constructor(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null;this.x=e,this.y=t,this.z=n,this.m=i,this.tile=s,this.elevationTile=l}clone(){return new I(this.x,this.y,this.z,this.m)}}class C{constructor(e,t){this.layer=e,this.options=t}}class z extends C{constructor(e,t,n){super(e,n),this.outSpatialReference=t,this.type="geometry"}selectTilesAtLOD(e){if(e<0)this.geometry.coordinates.forEach((e=>e.tile=null));else{const{tileInfo:t,tilemapCache:n}=this.layer,i=k(t,n)[e].level;this.geometry.coordinates.forEach((e=>e.tile=t.tileAt(i,e.x,e.y)))}}allElevationTilesFetched(){return!this.geometry.coordinates.some((e=>!e.elevationTile))}clearElevationTiles(){for(const e of this.geometry.coordinates)e.elevationTile!==this.outsideExtentTile&&(e.elevationTile=null)}populateElevationTiles(e){for(const t of this.geometry.coordinates)!t.elevationTile&&t.tile?.id&&(t.elevationTile=e[t.tile.id])}remapTiles(e){for(const t of this.geometry.coordinates){const n=t.tile?.id;t.tile=n?e[n]:null}}getTilesToFetch(){const e={},t=[];for(const n of this.geometry.coordinates){const i=n.tile;if(!i)continue;const s=n.tile?.id;n.elevationTile||!s||e[s]||(e[s]=i,t.push(i))}return t}forEachTileToFetch(e){for(const t of this.geometry.coordinates)t.tile&&!t.elevationTile&&e(t.tile,(()=>{t.tile=null}))}}class M extends C{constructor(e,t,n,i){super(e,n),this.type="extent",this.elevationTiles=[],this._candidateTiles=[],this._fetchedCandidates=new Set,this.extent=t.clone().intersection(e.fullExtent),this.maskExtents=i}selectTilesAtLOD(e,t){const n=this._maximumLodForRequests(t),i=Math.min(n,e);i<0?this._candidateTiles.length=0:this._selectCandidateTilesCoveringExtentAt(i)}_maximumLodForRequests(e){const{tileInfo:t,tilemapCache:n}=this.layer,i=k(t,n);if(!e)return i.length-1;const s=this.extent;if(null==s)return-1;for(let l=i.length-1;l>=0;l--){const n=i[l],a=n.resolution*t.size[0],o=n.resolution*t.size[1];if(Math.ceil(s.width/a)*Math.ceil(s.height/o)<=e)return l}return-1}allElevationTilesFetched(){return this._candidateTiles.length===this.elevationTiles.length}clearElevationTiles(){this.elevationTiles.length=0,this._fetchedCandidates.clear()}populateElevationTiles(e){for(const t of this._candidateTiles){const n=t.id&&e[t.id];n&&(this._fetchedCandidates.add(t),this.elevationTiles.push(n))}}remapTiles(e){this._candidateTiles=S(this._candidateTiles.map((t=>e[t.id])))}getTilesToFetch(){return this._candidateTiles}forEachTileToFetch(e,t){const n=this._candidateTiles;this._candidateTiles=[],n.forEach((n=>{if(this._fetchedCandidates.has(n))return void(t&&t(n));let i=!1;e(n,(()=>i=!0)),i?t&&t(n):this._candidateTiles.push(n)})),this._candidateTiles=S(this._candidateTiles,t)}_selectCandidateTilesCoveringExtentAt(e){this._candidateTiles.length=0;const t=this.extent;if(null==t)return;const{tileInfo:n,tilemapCache:i}=this.layer,s=k(n,i)[e],l=n.tileAt(s.level,t.xmin,t.ymin),a=l.extent;if(null==a)return;const o=s.resolution*n.size[0],r=s.resolution*n.size[1],c=Math.ceil((t.xmax-a[0])/o),u=Math.ceil((t.ymax-a[1])/r);for(let h=0;h<u;h++)for(let e=0;e<c;e++){const t=new E.U(null,l.level,l.row-h,l.col+e);n.updateTileInfo(t),this._tileIsMasked(t)||this._candidateTiles.push(t)}}_tileIsMasked(e){return!!this.maskExtents&&this.maskExtents.some((t=>e.extent&&(0,f.gR)(t,e.extent)))}}function V(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const i=k(e,t);let s=i.length-1;if(n>0){const t=n/(0,o.GA)(e.spatialReference),l=i.findIndex((e=>e.resolution<t));0===l?s=0:l>0&&(s=l-1)}return s}const b={maximumAutoTileRequests:20,noDataValue:0,returnSampleInfo:!1,demResolution:"auto",minDemResolution:0};function k(e,t){const n=e.lods;if($(t)){const{effectiveMinLOD:e,effectiveMaxLOD:i}=t;return n.filter((t=>t.level>=e&&t.level<=i))}return n}async function F(e,t){const n=e.getTilesToFetch(),i={},s=e.options.cache,l=e.options.noDataValue,o=n.map((async n=>{if(null==n.id)return;const a=`${e.layer.uid}:${n.id}:${l}`,o=null!=s?s.get(a):null,r=null!=o?o:await e.layer.fetchTile(n.level,n.row,n.col,{noDataValue:l,signal:t});null!=s&&s.put(a,r),i[n.id]=new R(n,r)}));await(0,a.qr)(Promise.allSettled(o),t),e.populateElevationTiles(i)}function S(e,t){const n={},i=[];for(const l of e){const e=l.id;e&&!n[e]?(n[e]=l,i.push(l)):t&&t(l)}const s=i.sort(((e,t)=>e.level-t.level));return s.filter(((e,n)=>{for(let i=0;i<n;i++){const n=s[i].extent;if(n&&e.extent&&(0,f.gR)(n,e.extent))return t&&t(e),!1}return!0}))}function $(e){return null!=e?.tileInfo}}}]);
//# sourceMappingURL=3489.0d852c5f.chunk.js.map