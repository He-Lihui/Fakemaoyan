import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
     state:{
         count:0,
         city:'上海',
         _token:"",
     },
     mutations:{
        setCity:function(state,cityName){
            state.city = cityName
        },
        updatedToken:function(state,token)  {
            state._token = token
            localStorage.setItem('_token',token)
        },
     },
     actions:{

     },
     getters:{

     }
})