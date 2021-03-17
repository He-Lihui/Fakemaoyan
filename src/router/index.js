import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由模块化的文件
import centerRouter from './routes/center'
import cinemaRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'
import photosRouter from './routes/photos'
import cityRouter from './routes/city'
import loginRouter from './routes/login'
import cinemaDetailRouter from './routes/CinemaDetail'

const routes = [
  {
    path: '/',
    // 重定向  访问根路由跳转到电影页面
    redirect:'/film'
  },
  centerRouter,
  cinemaRouter,
  filmRouter,
  detailRouter,
  photosRouter,
  cityRouter,
  loginRouter,
  cinemaDetailRouter,
]

const router = new VueRouter({
  mode: 'history', 
  // base: process.env.BASE_URL,
  routes
})

// 路由守卫
// router.beforeEach((to,from,next)=>{
//   let arr = [
//     //需要登录的页面地址
//     "/cinema",
//   ];
//   if(arr.includes(to.path)){
//     //返回真则在（需要登录判断）
//     if(localStorage.getItem("_token")){
//       next()
//     }else{
//       next({path:'/login',query:{refer:to.fullPath}})
//     }
//   }else{
//     next()
//   }
// });

export default router
