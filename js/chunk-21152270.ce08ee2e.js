(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21152270"],{"7d1e":function(e,t,r){},a70f:function(e,t,r){"use strict";var a=r("7d1e"),o=r.n(a);o.a},ede4:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("el-container",[r("div",{staticClass:"logo"},[r("img",{attrs:{src:"https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"}})]),r("el-main",[r("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData}},[r("el-form-item",{attrs:{label:"手机号",prop:"mobile"}},[r("el-input",{attrs:{placeholder:"请输入手机号",maxlength:"11"},model:{value:e.formData.mobile,callback:function(t){e.$set(e.formData,"mobile",t)},expression:"formData.mobile"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"请输入密码","show-password":""},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("formData")}}},[e._v("登 录")])],1)],1)],1),r("el-footer",[e._v(" ©2020 SH-HTML5-2008 "),r("i",{on:{click:function(t){return e.goindex()}}},[e._v("返回首页")])])],1)],1)},o=[],n=(r("96cf"),r("1da1")),s=r("4ec3"),i={data:function(){return{formData:{mobile:"",password:""},rules:{mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机格式不正确",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}]}}},created:function(){this.eventBus.$emit("footernav",!1)},beforeDestroy:function(){this.eventBus.$emit("footernav",!0)},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}return e.next=3,Object(s["i"])(t.formData);case 3:a=e.sent,1e3==a.data.code?(t.$store.commit("updatedToken",a.data.data._token),t.$route.query.refer?t.$router.push({path:t.$route.query.refer}):t.$router.push({path:"/center"})):alert(a.data.info);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},goindex:function(){this.$router.push({path:"/film"})}}},u=i,l=(r("a70f"),r("2877")),c=Object(l["a"])(u,a,o,!1,null,"1cfd6aff",null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-21152270.ce08ee2e.js.map