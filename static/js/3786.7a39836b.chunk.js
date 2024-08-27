/*! For license information please see 3786.7a39836b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwater_subsidence=self.webpackChunkwater_subsidence||[]).push([[3786],{73786:(e,t,i)=>{i.r(t),i.d(t,{CalciteTooltip:()=>u,defineCustomElement:()=>v});var o=i(95146),n=i(39879),s=i(24192),r=i(66418),l=i(37268),a=i(9620);const c="container",d="aria-describedby";function h(e){const{referenceElement:t}=e;return("string"===typeof t?(0,n.q)(e,{id:t}):t)||null}const f=new class{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverOpenTimeout=null,this.hoverCloseTimeout=null,this.activeTooltip=null,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.keyDownHandler=e=>{if("Escape"===e.key&&!e.defaultPrevented){const{activeTooltip:t}=this;if(t?.open){this.clearHoverTimeout(),this.closeActiveTooltip();const i=h(t);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.pointerMoveHandler=e=>{const t=e.composedPath(),{activeTooltip:i}=this,o=this.queryTooltip(t);this.pathHasOpenTooltip(o,t)?this.clearHoverTimeout():o?this.openHoveredTooltip(o):i?.open&&this.closeHoveredTooltip()},this.clickHandler=e=>{const t=e.composedPath(),i=this.queryTooltip(t);this.pathHasOpenTooltip(i,t)?this.clearHoverTimeout():(this.closeActiveTooltip(),i&&(this.clearHoverTimeout(),i.closeOnClick?this.toggleTooltip(i,!1):this.toggleTooltip(i,!0)))},this.blurHandler=()=>{this.closeActiveTooltip()},this.focusInHandler=e=>{const t=e.composedPath(),i=this.queryTooltip(t);this.closeTooltipIfNotActive(i),i&&this.toggleFocusedTooltip(i,!0)},this.openHoveredTooltip=e=>{this.hoverOpenTimeout=window.setTimeout((()=>{null!==this.hoverOpenTimeout&&(this.clearHoverCloseTimeout(),this.closeTooltipIfNotActive(e),this.toggleTooltip(e,!0))}),this.activeTooltip?.open?0:300)},this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout((()=>{null!==this.hoverCloseTimeout&&this.closeActiveTooltip()}),500)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){const t=this.getReferenceElShadowRootNode(e);t&&this.unregisterShadowRoot(t),this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}pathHasOpenTooltip(e,t){const{activeTooltip:i}=this;return i?.open&&t.includes(i)||e?.open&&t.includes(e)}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler,{capture:!0})}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler,{capture:!0})}addListeners(){window.addEventListener("keydown",this.keyDownHandler,{capture:!0}),window.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),window.addEventListener("click",this.clickHandler,{capture:!0}),window.addEventListener("focusin",this.focusInHandler,{capture:!0}),window.addEventListener("blur",this.blurHandler)}removeListeners(){window.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),window.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),window.removeEventListener("click",this.clickHandler,{capture:!0}),window.removeEventListener("focusin",this.focusInHandler,{capture:!0}),window.removeEventListener("blur",this.blurHandler)}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout),this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout),this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout(),this.clearHoverCloseTimeout()}closeTooltipIfNotActive(e){this.activeTooltip!==e&&this.closeActiveTooltip()}closeActiveTooltip(){const{activeTooltip:e}=this;e?.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,this.activeTooltip=t?e:null}registerShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e),o=Math.min(("number"===typeof i?i:0)+1,1);1===o&&this.addShadowListeners(e),t.set(e,o)}unregisterShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e),o=Math.max(("number"===typeof i?i:1)-1,0);0===o&&this.removeShadowListeners(e),t.set(e,o)}getReferenceElShadowRootNode(e){return e instanceof Element?(0,n.H)(e):null}},p=(0,o.w$)(class extends o.wt{constructor(){var e;super(),e=this,this.__registerHost(),this.__attachShadow(),this.calciteTooltipBeforeClose=(0,o.lh)(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=(0,o.lh)(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=(0,o.lh)(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=(0,o.lh)(this,"calciteTooltipOpen",6),this.guid=`calcite-tooltip-${(0,r.g)()}`,this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.setUpReferenceElement=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.removeReferences(),e.effectiveReferenceElement=h(e.el),(0,s.c)(e,e.effectiveReferenceElement,e.el);const{el:i,referenceElement:o,effectiveReferenceElement:n}=e;t&&o&&!n&&console.warn(`${i.tagName}: reference-element id "${o}" was not found.`,{el:i}),e.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(d,t),f.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(d),f.unregisterElement(e))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=s.d,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0,this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(){(0,l.o)(this),this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(!0),this.open&&(0,l.o)(this)}async componentWillLoad(){this.open&&(0,l.o)(this)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),(0,s.a)(this,this.effectiveReferenceElement,this.el)}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{el:t,effectiveReferenceElement:i,placement:o,overlayPositioning:n,offsetDistance:r,offsetSkidding:l,arrowEl:a}=this;return(0,s.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:n,placement:o,offsetDistance:r,offsetSkidding:l,arrowEl:a,type:"tooltip"},e)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:e,label:t,open:i,floatingLayout:r}=this,l=e&&i,d=!l;return(0,o.h)(o.xr,{key:"fc8b3d3b7c730b670afe3d15ad110548841e08cb","aria-hidden":(0,n.t)(d),"aria-label":t,"aria-live":"polite","calcite-hydrated-hidden":d,id:this.getId(),role:"tooltip"},(0,o.h)("div",{key:"4a0d137962212382b6c1979c5405f31ffab156fc",class:{[s.F.animation]:!0,[s.F.animationActive]:l},ref:this.setTransitionEl},(0,o.h)(a.F,{key:"6543e9d376fea7bad9bb1691238c7f7d76779f04",floatingLayout:r,ref:e=>this.arrowEl=e}),(0,o.h)("div",{key:"0e628ca7befad9ffafbf5af533c805e590cfd8e1",class:c},(0,o.h)("slot",{key:"c4e11f40221197e9d717e1975812d85cff4ff5f7"}))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1)}.arrow::before{outline:1px solid var(--calcite-color-border-3)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],floatingLayout:[32],reposition:[64]},void 0,{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}]);function m(){if("undefined"===typeof customElements)return;["calcite-tooltip"].forEach((e=>{if("calcite-tooltip"===e)customElements.get(e)||customElements.define(e,p)}))}m();const u=p,v=m}}]);
//# sourceMappingURL=3786.7a39836b.chunk.js.map