// 导入需要使用的模块
import http from './http'
import{
    nowPlayingListUri,
    comingSoonListUri,
    detailListUri,
    cinemaListUri,
    cinemaListOneUri,
    cityListUri,
    loginUri,
    centerUri,
    cinemaDetailuri,
    cinemaDetailtwouri,
    cinemaUri,
}from '@/config/url'
// 请求正在热映列表数据
export const nowPlayingListData = (page) =>{
    http.defaults.headers.authorization=""
    http.defaults.headers.info = "film";
    return http.get(nowPlayingListUri + page)
}
// 请求即将上映列表数据
export const comingSoonListData = (page) =>{
    http.defaults.headers.authorization=""
    http.defaults.headers.info = "film";
    return http.get(comingSoonListUri + page)
}
// 请求电影详情的数据
export const detailListData = (filmId) =>{
    http.defaults.headers.authorization=""
    http.defaults.headers.info = "info";
    return http.get(detailListUri + filmId);
}
// 影院电影详情数据
export const cinemaListData = () =>{
    http.defaults.headers.authorization=""
    http.defaults.headers.info = "cinema";
    let cityId = localStorage.getItem('cityId')
    return http.get(cinemaListUri + cityId)
}
export const cinemaListOneData = () =>{
    http.defaults.headers.authorization=""
    http.defaults.headers.info = "one";
    let cityId = localStorage.getItem('cityId')
    return http.get(cinemaListOneUri + cityId)
}
// 城市信息详情数据
export const cityListData = async()=>{
    http.defaults.headers.authorization=""
    http.defaults.headers.info = "city";
    let ret = await http.get(cityListUri)
    // 定义基本数据
    let cities = ret.data.data.cities;
    let codeList = [];//字母信息(完整的26个字母)
    let dataList = [];//城市信息
    let indexList = [];//字母信息(经过筛选的字母)
    for(let i = 65;i<=90;i++){
        codeList.push(String.fromCharCode(i))
    }
    // 开始处理
    codeList.forEach((element)=>{
        // 与城市信息的拼音字段进行对比，如果符合则留下大字母
        let tempArr = cities.filter((item)=>element.toLowerCase() == item.pinyin.substr(0,1))
        if(tempArr.length > 0){
            indexList.push(element)
            dataList.push({
                index:element,
                data:tempArr
            })
        }
        
    })
    return Promise.resolve([dataList,indexList])
}
// 获取登录页面
export const loginData = (data) =>{
    http.defaults.headers.authorization=""
    return http.post(loginUri,data)
}

export const userInfo = (_token)=>{
    http.defaults.headers.authorization = _token
    // http.interceptors.response.use(function(response){
    //     response.data.user_info.gender = response.data.user_info.gender?"女":"男";
    //     return response
    // },function(error){

    // })
    return http.get(centerUri)
}

export const cinemaDetail = () =>{
    http.defaults.headers.authorization=""
    http.defaults.headers.info = "cinemaDetail";
    let cinemaId = localStorage.getItem('cinemaIdData')
    return http.get(cinemaDetailuri + cinemaId)
}
export const cinemaDetailtwo = () =>{
    http.defaults.headers.authorization=""
    http.defaults.headers.info = "cinemaDetailtwo";
    let cinemaId = localStorage.getItem('cinemaIdData')
    return http.get(cinemaDetailtwouri + cinemaId)
}

export const cinemaFData = (filmId, showDate) => {
        http.defaults.headers.info = "cinemaFData"
        http.defaults.headers.authorization = ""
        let a = localStorage.getItem('cinemaIdData')
        let b = localStorage.getItem('filmIde')
        let c = localStorage.getItem('showdeted')
        return http.get(cinemaUri + a + '&filmId=' + b + '&date=' + c )
    }