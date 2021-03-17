<template>
    <div>
        <v-touch v-on:swipeleft="onSwipeLeft" v-on:swiperight="onSwipeRight">
            <header class="header">
             <div class="left">
                 <div @click="gocity" class="city" data-enter-time="1602497043" data-click-fun="track_f_962415">
                    <span>{{city1}}</span> 
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC" width="6px" height="3px">
                </div>
            </div> 
            <div class="title">
                <div >影院</div>
            </div> 
            <div class="right">
                <div >
                    <div class="toCinemaSearch" data-enter-time="1602497043" data-click-fun="track_f_782811">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA2CAMAAABQrCHsAAABlVBMVEVHcEwaGh8/Pz8ZGxszMzMZGhwZGhsZGhsZGhsZGhscHBwnJycZGhskJCQaGh0fHx8ZGhsaGiMeHh4ZGhsZGhsbGxsZJiYaGhsZGhsZGhwZGhwZGxsZGxsaGhsfHx8ZGhsbGxsqKioaGhsbGxsZGxsbGxsZGhwaGh8ZGhskJCQZGxsZHh4ZGxsZGhsaGh0aGhsZGhsZMzMaGh0ZGhseHh4ZGhsZGhseHh4ZGhsZGhsZHh4aGh0aGhsZGhwbGxsaGh4ZIiIbGxsZGhwbGxsZGxsaGh1/f38aGhsZGxshISEZGxsZGxsZGhsZGhwfHx8aGh4aGhsdHR0ZGxv///8ZGhsqKioaGhwbGxtVVVUaGhwbGxsaGh8ZGhsZGxsaGhwZGxsaGhwaGhwgICAiIiIcHBwZGhsZGxsbGxsZGhsZGxsaGhwbGxsZGhsaGiAZGhwaGhsZGxsaGhwZGxsZGhwaGhsZHBwaGhwZHBwaGhwaGh0aGh0ZGhwbGxsaGh0aGhoZGhwaGiEZGxsZHBwZHR0aGhsaGhsZGhsIL5M3AAAAhnRSTlMAOQTsBeP76P73SA3qB2kY+B0i/fRBFKbfx62elq8QtzgG11V5L70w/BXOO6DeV6T2CnLwKsDWIenVMla5mUo6HhysQs9NAsSXF4uE06IITJwjggHMDFhxA5BAMd3Zj52Iah8PG/JmUuCDfS7LJ7aSqXVl0etQYlp8X2i+JXtz0CZ6Wzy4w4GfxwoAAAJjSURBVBgZrcEFUxQBAIbh77qL7m4ElFCxCQWDUFBQaaXDwu56f7cwzHLHsXe7N+Pz6D9pfPehovJvZcWHd42yx1n4uISkkseFTlmZejRHurlHU8pqaJpDruLN6Nvfb6ObxS4OTQ8pM/dVDoQXnszKMPtkIcyBq25lUNQHFDwI6aTQgwKgr0imejuArphOi3UBHb0yEfNAS7fMdbeAJ6ZTIqXQE1QmwR4ojSjdGHgLlVmhF8aU5hfwSdlEgfc6IVICo8puFEpqlWoGfA+V3UMfzCjFMxdEZSUKrmdKWoN5p6w452FNSXuwLGvLsKdjoTj+57L23E88JEM97MiOHaiX4QVsyY4teCFDGazLjnUok6EUamSHA0pl2IAV2bECGzLEISI7IhCXYR+KZEcR7MvwBrZlxza8keEPBGVHEKplKIfXsuM1lMvwCl7KjpfwSoZdWK2VtdpV2NWxOgjKWhDqlLQExbJWDEtKegr+Zllp9sNTpRiEK7JyBQaV6ocXrim7a+D9ohMqwJWnbPJcUKGTWj3QH1JmoX7wtCrNpbNQfU6ZnKuGs5d0ymWgLSFziTbgskx8BXztMtPuAy7myczHOOSfuaF0N87kgx/CDplx+IDAnftKdf9OAPB9C0CgU2YSlRy6d9dx+5akW7cdd+9xqDKhmjD4G2Tq+ghHvJ7vHi9HRq7rwIXzQLlbpm6WFZCqoOymjlQ1AZ+rZG58YnLYlw/k+4YnJ8Z1zL0I1OUpM+dA44BT6Rr8EHYoV/UBCHQqVzUXwf9TubpwHih3K0dVTUCTWzlyLwLvlbOGlkCzctca0z9q9NKFAyAIHQAAAABJRU5ErkJggg==" width="18px" height="18px" alt="">
                    </div>
                </div>
            </div>
        </header>
        <div class="cinema-list-tag">
            <div class="cinema-list-tag-name">
                    <label >
                        全城
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC" width="6px" height="4px">
                    </label>
                    <label >
                        APP订票
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC" width="6px" height="4px">
                    </label>
                    <label >
                        最近去过
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAJCAMAAAAIAYw9AAAAOVBMVEVHcEwZGhsZGxsZGhskJCQaGhwbGxsZHR0ZGhsZGhsZGhsZGhsZHBwaGhsaGhwZGxsaGh0bGxsZGhsAwt9XAAAAEnRSTlMA5Z7pB2scPfrK6NJskn6fcnH7htMrAAAAVElEQVQI11XNOQKAIBAEwQEXl0NQ+/+PNfDucIIabaGbnqyHXQHKfC9zgaABVD8Xr8CQlgw5SVLKkBdJ8gmIZhGY/BUoha9qKwDEz/fJJP3y1i5GB2jVA/F2X5USAAAAAElFTkSuQmCC" width="6px" height="4px">
                </label>
            </div>
        </div>
        <div class="scroll" :style="{height:height + 'px'}">
           <div>
                <div class="juan" v-if="cinemaOne">
            <div class="top">
                <p>{{cinemaOne.masterTitle}}</p>
                <p>影院卷</p>
            </div>
            <div>{{cinemaOne.name}}</div>
        </div>
        <div class="cinemaList" v-for="(item,index) in cinemas" :key="index" @click="goDetail(item.cinemaId)">
            <div class="up">
                <p>{{item.name}}</p>
                <p>￥{{item.lowPrice / 100}}起</p>
            </div>
            <div class="down">
                <p>{{item.address}}</p>
                <p>距离未知</p>
            </div>
        </div>
           </div>
        </div>
        </v-touch>
        
    </div>
</template>

<script>
import {cinemaListData,cinemaListOneData} from '@/api/api'
import {mapState} from 'vuex'
import axios from 'axios'
import BScroll from 'better-scroll';

export default {
    data() {
        return {
            cinemas:[],
            cinemaOne:[],
            bs:null,
            height:0,
            city1:'',
        }
    },
    async  mounted() {
        let clickName = localStorage.getItem('city')
        if(clickName == null){
            this.city1 = this.city
        }else{
            this.city1 = clickName
        }

        let ret = await cinemaListData();
        this.cinemas = ret.data.data.cinemas;
        
        let res = await cinemaListOneData();
        this.cinemaOne = res.data.data[0] ;

        // console.log(this.cinemas);
        

        var _this = this;
        if(this.city == '地球' || this.city == undefined){
            getLocation();
        }
		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
				// 支持
			} else {
				// 不支持
				console.log("不支持地理位置接口");
			}
		}
		function geoSuccess(event) {
			let jingdu = event.coords.latitude;
			let weidu = event.coords.longitude;
			axios
				.get(`https://api.i-lynn.cn/poi?location=${weidu},${jingdu}`)
				.then((ret) => {
					_this.data1 = ret.data.regeocode.addressComponent.province;
                    _this.$store.commit("setCity", _this.data1);
                    // console.log(ret);
				});
		}
		//拒绝授权
		function geoError(error) {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					alert("定位失败,用户拒绝请求地理定位");
					break;
				case error.POSITION_UNAVAILABLE:
					alert("定位失败,位置信息是不可用");
					break;
				case error.TIMEOUT:
					alert("定位失败,请求获取用户位置超时");
					break;
				case error.UNKNOWN_ERROR:
					alert("定位失败,定位系统失效");
					break;
			}
        }
    this.height = document.documentElement.clientHeight - 75
        

    },
    computed: {
        ...mapState(['city']),
    },
    methods:{

        gocity:function(){
            this.$router.push({path:'city'}) 
        },
        goDetail:function(cinemaId){
            localStorage.setItem('cinemaIdData',cinemaId)
            this.$router.push({path:'cinemaDetail'})
        },
        onSwipeLeft:function(){
            this.$router.push({path:'center'})
        },
        onSwipeRight:function(){
            this.$router.push({path:'film'})

        },
    },
}
</script>

<style lang="scss" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    z-index: 3000;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    .left,.right{
        margin: 0 15px;
        span{
            margin-right: 5px;
        }
        .city{
            display: flex;
            align-items: center;
        }
    }
    .title{
        margin-left: -60px;
    }
}
.cinema-list-tag {
    position: fixed;
    height: 30px;
    width: 100%;
    top: 44px;
    right: 0;
    text-align: center;
    background-color: #fff;
    z-index: 2000;
    font-size: 14px;
    .cinema-list-tag-name{
        display: flex;
        justify-content: space-around;
        label{
            display: flex;
            align-items: center;
            img{
                margin-left: 5px;
            }
        }
    }
}
.scroll{
 overflow-x: hidden;
}
.juan{
    padding: 10px;
    margin-top: 70px;
    border-bottom: 1px solid rgb(243, 241, 241);
    .top{
        display: flex;
        margin-bottom: 10px;
        p:nth-child(2){
            margin-left: 5px;
            border: 0.5px solid gold;
            color: gold;
            font-size: 13px;
            width: 46px;
            height: 16px;
            text-align: center;
            line-height: 16px;
            border-radius: 3px;
        }
    }
    div:nth-child(2){
        font-size: 13px;
        color: rgb(136, 113, 113);
    }
}
.cinemaList{
    padding: 10px;
    border-bottom: 1px solid rgb(243, 241, 241);
    margin-bottom: 20px;
    .up,.down{
        display: flex;
        justify-content: space-between;
    }
    .up{
        margin-bottom: 10px;
        font-size: 15px;
        p:nth-child(2){
            color: red;
        }
    }
    .down{
        font-size: 13px;
        color: rgb(136, 113, 113);
        margin-bottom: 10px;
    }
    
}
</style>