(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29263a52"],{"0833":function(t,i,e){},"4a02":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"box"},[e("div",{staticClass:"header"},[e("div",{staticClass:"left"},[e("van-icon",{staticClass:"icon",attrs:{name:"cross"},on:{click:function(i){return t.goba()}}})],1),e("div",{staticClass:"title"},[t._v("当前城市 - "+t._s(t.position))])]),e("div",{staticClass:"search-city-input"},[e("div",{staticClass:"input-wrap"},[e("van-icon",{staticClass:"search-icon",attrs:{name:"search"}}),e("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"}})],1)]),e("div",{staticClass:"list-parents"},[e("van-index-bar",{staticClass:"list",staticStyle:{"margin-top":"93px"},attrs:{"index-list":t.indexList}},[e("div",{staticClass:"recommend-city"},[e("div",{staticClass:"gprs-city"},[e("div",{staticClass:"city-index-title"},[t._v(" GPS定位你所在城市 ")]),e("ul",{staticClass:"city-index-detail cleanfix"},[e("li",{staticClass:"city-item-detail city-item-detail-gprs"},[e("div",{staticClass:"city-item-text"},[t._v(" "+t._s(t.position)+" ")])])])]),e("div",{staticClass:"hot-city"},[e("div",{staticClass:"city-index-title"},[t._v("热门城市")]),e("ul",{staticClass:"city-index-detail cleanfix"},[e("li",{staticClass:"city-item-detail"},[e("div",{staticClass:"city-item-text"},[t._v("北京")])]),e("li",{staticClass:"city-item-detail"},[e("div",{staticClass:"city-item-text"},[t._v("上海")])]),e("li",{staticClass:"city-item-detail"},[e("div",{staticClass:"city-item-text"},[t._v("广州")])]),e("li",{staticClass:"city-item-detail"},[e("div",{staticClass:"city-item-text"},[t._v("深圳")])])])])]),t._l(t.dataList,(function(i,n){return[e("van-index-anchor",{key:n,staticStyle:{background:"#F4F4F4"},attrs:{index:i.index}}),t._l(i.data,(function(i,n){return e("van-cell",{key:n,attrs:{title:i.name},on:{click:function(e){return t.chooseCity(i.name,i.cityId)}}})}))]}))],2)],1)])},s=[],c=(e("96cf"),e("1da1")),a=e("4ec3"),l=e("2b0e"),r=e("d282"),o=e("a142"),u=e("02de"),d=e("1325"),h=e("a8c1"),f=e("3875"),v=e("9884"),b=e("5fbe");function x(){for(var t=[],i="A".charCodeAt(0),e=0;e<26;e++)t.push(String.fromCharCode(i+e));return t}var p=Object(r["a"])("index-bar"),y=p[0],g=p[1],m=y({mixins:[f["a"],Object(v["b"])("vanIndexBar"),Object(b["a"])((function(t){this.scroller||(this.scroller=Object(h["d"])(this.$el)),t(this.scroller,"scroll",this.onScroll)}))],props:{zIndex:[Number,String],highlightColor:String,sticky:{type:Boolean,default:!0},stickyOffsetTop:{type:Number,default:0},indexList:{type:Array,default:x}},data:function(){return{activeAnchorIndex:null}},computed:{sidebarStyle:function(){if(Object(o["c"])(this.zIndex))return{zIndex:this.zIndex+1}},highlightStyle:function(){var t=this.highlightColor;if(t)return{color:t}}},watch:{indexList:function(){this.$nextTick(this.onScroll)}},methods:{onScroll:function(){var t=this;if(!Object(u["a"])(this.$el)){var i=Object(h["c"])(this.scroller),e=this.getScrollerRect(),n=this.children.map((function(i){return{height:i.height,top:t.getElementTop(i.$el,e)}})),s=this.getActiveAnchorIndex(i,n);this.activeAnchorIndex=this.indexList[s],this.sticky&&this.children.forEach((function(c,a){if(a===s||a===s-1){var l=c.$el.getBoundingClientRect();c.left=l.left,c.width=l.width}else c.left=null,c.width=null;if(a===s)c.active=!0,c.top=Math.max(t.stickyOffsetTop,n[a].top-i)+e.top;else if(a===s-1){var r=n[s].top-i;c.active=r>0,c.top=r+e.top-c.height}else c.active=!1}))}},getScrollerRect:function(){return this.scroller.getBoundingClientRect?this.scroller.getBoundingClientRect():{top:0,left:0}},getElementTop:function(t,i){var e=this.scroller;if(e===window||e===document.body)return Object(h["a"])(t);var n=t.getBoundingClientRect();return n.top-i.top+Object(h["c"])(e)},getActiveAnchorIndex:function(t,i){for(var e=this.children.length-1;e>=0;e--){var n=e>0?i[e-1].height:0,s=this.sticky?n+this.stickyOffsetTop:0;if(t+s>=i[e].top)return e}return-1},onClick:function(t){this.scrollToElement(t.target)},onTouchMove:function(t){if(this.touchMove(t),"vertical"===this.direction){Object(d["c"])(t);var i=t.touches[0],e=i.clientX,n=i.clientY,s=document.elementFromPoint(e,n);if(s){var c=s.dataset.index;this.touchActiveIndex!==c&&(this.touchActiveIndex=c,this.scrollToElement(s))}}},scrollToElement:function(t){var i=t.dataset.index;if(i){var e=this.children.filter((function(t){return String(t.index)===i}));e[0]&&(e[0].scrollIntoView(),this.sticky&&this.stickyOffsetTop&&Object(h["g"])(Object(h["b"])()-this.stickyOffsetTop),this.$emit("select",e[0].index))}},onTouchEnd:function(){this.active=null}},render:function(){var t=this,i=arguments[0],e=this.indexList.map((function(e){var n=e===t.activeAnchorIndex;return i("span",{class:g("index",{active:n}),style:n?t.highlightStyle:null,attrs:{"data-index":e}},[e])}));return i("div",{class:g()},[i("div",{class:g("sidebar"),style:this.sidebarStyle,on:{click:this.onClick,touchstart:this.touchStart,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchEnd}},[e]),this.slots("default")])}}),C=e("b1d2"),k=Object(r["a"])("index-anchor"),S=k[0],O=k[1],w=S({mixins:[Object(v["a"])("vanIndexBar",{indexKey:"childrenIndex"})],props:{index:[Number,String]},data:function(){return{top:0,left:null,width:null,active:!1}},computed:{sticky:function(){return this.active&&this.parent.sticky},anchorStyle:function(){if(this.sticky)return{zIndex:""+this.parent.zIndex,left:this.left?this.left+"px":null,width:this.width?this.width+"px":null,transform:"translate3d(0, "+this.top+"px, 0)",color:this.parent.highlightColor}}},mounted:function(){this.height=this.$el.offsetHeight},methods:{scrollIntoView:function(){this.$el.scrollIntoView()}},render:function(){var t,i=arguments[0],e=this.sticky;return i("div",{style:{height:e?this.height+"px":null}},[i("div",{style:this.anchorStyle,class:[O({sticky:e}),(t={},t[C["a"]]=e,t)]},[this.slots("default")||this.index])])}}),j=e("c31d"),I=e("2638"),T=e.n(I),B=e("ba31"),$=e("48f4"),_={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,iconPrefix:String,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},A=e("ad06"),L=Object(r["a"])("cell"),E=L[0],z=L[1];function R(t,i,e,n){var s=i.icon,c=i.size,a=i.title,l=i.label,r=i.value,u=i.isLink,d=e.title||Object(o["c"])(a);function h(){var n=e.label||Object(o["c"])(l);if(n)return t("div",{class:[z("label"),i.labelClass]},[e.label?e.label():l])}function f(){if(d)return t("div",{class:[z("title"),i.titleClass],style:i.titleStyle},[e.title?e.title():t("span",[a]),h()])}function v(){var n=e.default||Object(o["c"])(r);if(n)return t("div",{class:[z("value",{alone:!d}),i.valueClass]},[e.default?e.default():t("span",[r])])}function b(){return e.icon?e.icon():s?t(A["a"],{class:z("left-icon"),attrs:{name:s,classPrefix:i.iconPrefix}}):void 0}function x(){var n=e["right-icon"];if(n)return n();if(u){var s=i.arrowDirection;return t(A["a"],{class:z("right-icon"),attrs:{name:s?"arrow-"+s:"arrow"}})}}function p(t){Object(B["a"])(n,"click",t),Object($["a"])(n)}var y=u||i.clickable,g={clickable:y,center:i.center,required:i.required,borderless:!i.border};return c&&(g[c]=c),t("div",T()([{class:z(g),attrs:{role:y?"button":null,tabindex:y?0:null},on:{click:p}},Object(B["b"])(n)]),[b(),f(),v(),x(),null==e.extra?void 0:e.extra()])}R.props=Object(j["a"])({},_,$["c"]);var N=E(R);e("157a");l["default"].use(m),l["default"].use(w),l["default"].use(N),l["default"].use(A["a"]);var P={data:function(){return{dataList:[],indexList:[],address:"",position:"地球"}},created:function(){this.eventBus.$emit("footernav",!1)},beforeDestroy:function(){this.eventBus.$emit("footernav",!0)},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function i(){var e;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,Object(a["f"])();case 2:e=i.sent,t.dataList=e[0],t.indexList=e[1];case 5:case"end":return i.stop()}}),i)})))()},methods:{chooseCity:function(t,i){console.log(t,i),localStorage.setItem("city",t),localStorage.setItem("cityId",i),this.$router.go(-1),this.$store.commit("setCity",t)},goba:function(){this.$router.go(-1)}}},F=P,M=(e("d0bf"),e("2877")),q=Object(M["a"])(F,n,s,!1,null,"3d5b7f38",null);i["default"]=q.exports},d0bf:function(t,i,e){"use strict";var n=e("0833"),s=e.n(n);s.a}}]);
//# sourceMappingURL=chunk-29263a52.dc66252d.js.map