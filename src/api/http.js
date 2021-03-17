
// 封装axios  拦截器处理添加请求头
import Vue from "vue";
import axios from "axios";
axios.defaults.baseURL = "https://m.maizuo.com";
axios.interceptors.request.use(
    function(config){
        let host = "mall.film-ticket.film.list";
        let info = config.headers.info;
        if("info" == info){
            host = "mall.film-ticket.film.info"
        }else if("cinema" == info){
            host = "mall.film-ticket.cinema.list"
        }else if("city" == info){
            host = "mall.film-ticket.city.list"
        }else if("film" == info){
            host = "mall.film-ticket.film.list"
        }else if("one" == info){
            host = "mall.cfg.cinema.banners"
        }else if("cinemaDetail" == info){
            host = "mall.film-ticket.cinema.info"
        }else if("cinemaDetailtwo"){
            host = "mall.film-ticket.film.cinema-show-film"
        }else if (info == 'cinemaFData') {
            host = 'mall.film-ticket.schedule.list'
        }
        if(config.headers.authorization){
            config.headers = {
                "authorization":config.headers.authorization
            }
        }else{
            config.headers = {
                "X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1598087896889693885431809","bc":"310100"}',
                "X-Host": host,
            }
        }
        return config
    },
    function(err){
        return Promise.reject(error)
    }
)

export default axios