(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69323fba"],{bcc3:function(t,s,i){"use strict";var e=i("d07b"),a=i.n(e);a.a},d07b:function(t,s,i){},f574:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"detail"},[i("div",{staticClass:"film-header"},[i("div",{staticClass:"goBack"},[i("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz\n    ///////////////////////////////////////////////////////////////////////////////////\n    97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC",alt:""},on:{click:t.goback}})]),t._v(" "),i("div",{staticClass:"title"})]),i("div",{staticClass:"img"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.film.poster,expression:"film.poster"}]})]),i("div",{staticClass:"btt"},[i("div",{staticClass:"name a"},[i("p",[t._v(t._s(t.film.name))]),t.film.grade?i("i",[t._v(t._s(t.film.grade)+"分")]):t._e()]),i("div",{staticClass:"a"},[t._v(t._s(t.film.category))]),i("div",{staticClass:"a"},[t._v(t._s(t._f("parsePremiereAt")(t.film.premiereAt))+"上映")]),i("div",{staticClass:"a"},[t._v(t._s(t.film.nation)+" | "+t._s(t.film.runtime))]),i("div",{staticClass:"a",class:{active:t.isActive}},[t._v(t._s(t.film.synopsis))]),i("p",{staticClass:"more",on:{click:function(s){return t.pull()}}},[t._v("展开更多")])]),i("p",{staticClass:"border"}),i("div",{staticClass:"person"},[i("div",{staticClass:"biaoti"},[t._v("演职人员")]),i("Swiper",{key:"actors"+t.film.actors.length},t._l(t.film.actors,(function(s,e){return i("div",{key:e,staticClass:"swiper-slide"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.avatarAddress,expression:"item.avatarAddress"}],attrs:{alt:""}}),i("div",{staticClass:"name"},[t._v(t._s(s.name))]),i("div",{staticClass:"dao"},[t._v(t._s(s.role))])])})),0)],1),i("p",{staticClass:"border"}),i("div",{staticClass:"person"},[i("div",{staticClass:"juzhao"},[i("p",[t._v("剧照")]),i("i",{on:{click:function(s){return t.goPhotos(t.film.photos)}}},[t._v("全部("+t._s(t.film.photos.length)+") >")])]),i("Swiper",{key:"actors"+t.film.actors.length},t._l(t.film.photos,(function(t,s){return i("div",{key:s,staticClass:"swiper-slide"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{alt:""}})])})),0)],1),i("div",{staticClass:"foot"},[t._v(" 立即购票 ")])])},a=[],n=(i("96cf"),i("1da1")),r=i("4ec3"),l=i("c1df"),c=i.n(l),o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},[t._t("default")],2)])},v=[],m=i("6d3b"),u=(i("e25d"),{mounted:function(){this.$nextTick((function(){new m["a"](".swiper-container",{slidesPerView:4,spaceBetween:10})}))}}),d=u,f=i("2877"),p=Object(f["a"])(d,o,v,!1,null,null,null),A=p.exports,h={data:function(){return{film:{actors:[],photos:[]},isActive:!0}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,Object(r["h"])(t.$route.params.filmId);case 2:i=s.sent,t.film=i.data.data.film;case 4:case"end":return s.stop()}}),s)})))()},filters:{parsePremiereAt:function(t){return c()(1e3*t).format("YYYY-MM-DD")}},methods:{pull:function(){this.isActive=!this.isActive},goback:function(){this.$router.go(-1)},goPhotos:function(t){this.$router.push({name:"photos",params:{film:t}})}},components:{Swiper:A},created:function(){this.eventBus.$emit("footernav",!1)},beforeDestroy:function(){this.eventBus.$emit("footernav",!0)}},C=h,g=(i("bcc3"),Object(f["a"])(C,e,a,!1,null,"b6096a50",null));s["default"]=g.exports}}]);
//# sourceMappingURL=chunk-69323fba.c9803ecb.js.map