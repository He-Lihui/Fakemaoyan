(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6568f56a"],{"913a":function(t,e,a){"use strict";var n=a("a889"),i=a.n(n);i.a},a0a1:function(t,e,a){"use strict";var n=a("de04"),i=a.n(n);i.a},a889:function(t,e,a){},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,s=Function.prototype,r=s.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in s)&&i(s,u,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(t){return""}}})},b8c1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("NowPlayingListPage",{key:"film"+t.shuju.length,attrs:{list:t.shuju,type:t.type}}),a("router-view")],1)},i=[],s=(a("96cf"),a("1da1")),r=a("4ec3"),c=a("e85e"),u={data:function(){return{shuju:[],page:1,type:1}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["j"])(t.page);case 2:a=e.sent,t.shuju=a.data.data.films;case 4:case"end":return e.stop()}}),e)})))()},components:{NowPlayingListPage:c["a"]}},l=u,o=a("2877"),d=Object(o["a"])(l,n,i,!1,null,null,null);e["default"]=d.exports},de04:function(t,e,a){},e85e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list scroll",style:{height:t.height+"px"}},[t.loading?a("Loading"):t._e(),a("div",t._l(t.data,(function(e,n){return a("div",{key:n,staticClass:"item",on:{click:function(a){return t.goDetail(e.filmId)}}},[a("div",{staticClass:"left"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.poster,expression:"item.poster"}]})]),a("div",{staticClass:"middle"},[a("div",[t._v(t._s(e.name))]),1==t.type?a("div",[a("span",[t._v("观众评分")]),a("span",{staticClass:"grade"},[t._v(t._s(e.grade))])]):t._e(),a("div",{staticClass:"dan"},[t._v("主演："+t._s(t._f("paserActors")(e.actors)))]),a("div",[t._v(t._s(e.nation)+" | "+t._s(e.runtime)+"分钟")])]),a("div",{staticClass:"right"},[1==t.type?a("span",[t._v("购票")]):a("span",[t._v("预购")])])])})),0)],1)},i=[],s=(a("99af"),a("4160"),a("b0c0"),a("159b"),a("96cf"),a("1da1")),r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("div",{staticClass:"out-box"}),a("div",{staticClass:"inner-box"}),a("div",{staticClass:"text-box"},[t._v("loading")])])}],u=(a("913a"),a("2877")),l={},o=Object(u["a"])(l,r,c,!1,null,"40699eda",null),d=o.exports,f=a("f40f"),h=a("4ec3"),p={data:function(){return{loading:!0,height:0,bs:null,page:1,flag:!0,data:[]}},props:["list","type"],components:{Loading:d},created:function(){this.data=this.list,this.data.length>0?this.loading=!1:this.loading=!0},filters:{paserActors:function(t){var e="";return t.forEach((function(t){e+=t.name+" "})),e}},methods:{goDetail:function(t){this.$router.push({name:"detail",params:{filmId:t}})},getData:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!this.flag){t.next=13;break}if(this.page++,1!=this.type){t.next=8;break}return t.next=5,Object(h["j"])(this.page);case 5:e=t.sent,t.next=11;break;case 8:return t.next=10,Object(h["g"])(this.page);case 10:e=t.sent;case 11:e.data.data.films.length<10&&(this.flag=!1),this.data=this.data.concat(e.data.data.films);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},mounted:function(){this.height=document.documentElement.clientHeight-110},updated:function(){var t=this;this.bs=new f["a"](".scroll",{pullUpLoad:!0,pullDownRefresh:!0,click:!0}),this.bs.on("pullingUp",(function(){t.getData(),t.bs.finishPullUp()})),this.bs.on("pullingDown",(function(){t.getData(),t.bs.finishPullDown()}))}},g=p,v=(a("a0a1"),Object(u["a"])(g,n,i,!1,null,"871bc06c",null));e["a"]=v.exports}}]);
//# sourceMappingURL=chunk-6568f56a.f30cf4fd.js.map