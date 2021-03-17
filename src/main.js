import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

// 引入element ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


Vue.config.productionTip = false

// 使用懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  loading: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602478179150&di=b5414f701691c0a5029b63be491ccc2d&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F464ac755e43f02f80cb4821cbdea95116f02d23b234b8-X6O8RP_fw658",
})

// 事件总线（后续需要使用的）
Vue.prototype.eventBus = new Vue();

// 导入vuex的store对象
import store from '@/store/vuex'

// 同步localStorage数据到vuex
let _token = localStorage.getItem("_token")
if(_token){
  store.commit('updatedToken',_token)
}


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
