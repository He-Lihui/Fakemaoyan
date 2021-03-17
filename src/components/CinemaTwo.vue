<template>
    <div>
        <div class="date-list">
            <div class="tabs-bar-wrapper dateWrap">
                <div class="tabs-bar">
                    <ul class="tabs-nav">
                        <van-tabs v-model="active" @click="clickTime">
                            <van-tab v-for="(v, k) in ret" :key="k">
                                <template #title>
                                    {{ v | gun }}
                                </template>
                            </van-tab>
                        </van-tabs>
                    </ul>
                </div>
            </div>
        </div>
        <cinemaThree :filmId="filmId" :showDate="showDate"></cinemaThree>
    </div>
</template>
<script>
import moment from 'moment'
moment.locale("zh-cn");
import {cinemaDetail} from '@/api/api'
import Vue from "vue";
import { Icon, Tab, Tabs } from "vant";
import "vant/lib/index.css";
Vue.use(Icon);
Vue.use(Tab);
Vue.use(Tabs);
import cinemaThree from '@/components/CinemaThree'
export default {
    data() {
        return {
            ret:[],
            active:0,
        }
    },
    props:['cinemaDatatwo','showDate','filmId'],
    watch: {
        cinemaDatatwo:function(newData,oldData){
            this.ret = newData[0].showDate
        },
        showDate:function(newData,oldData){
            this.ret = newData
        }
    },
    filters:{
        gun:function(v){
            return moment(v * 1000).format("ddd MM月DD日")
        }
    },
    methods:{
        clickTime:function(kney,val){
            // console.log(val,kney);
        }
    },
    components:{
        cinemaThree,
    }
    
}
</script>
<style lang="scss" scoped>
.date-list {
    width: 100%;
}
.tabs-bar-wrapper {
    position: relative;
    z-index: 100;
    width: 100%;
    overflow-x: hidden;
    background: #fff;
}
.tabs-bar-wrapper .tabs-bar {
    height: 49px;
    display: flex;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    transition: -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    position: relative;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: 100%;
}
.active {
    color: #ff5f16;
}
// .tabs-bar-wrapper .tabs-bar .tabs-nav li.active {
//     color: #ff5f16;
// }
.tabs-bar-wrapper .tabs-bar .tabs-nav li {
    flex-shrink: 0;
    color: #191a1b;
    text-align: center;
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    cursor: pointer;
}
.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper {
    position: absolute;
    margin: auto;
    top: 30px;
    left: 0;
    transform: translateZ(0);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
}
.tabs-bar-wrapper .tabs-bar .tabs-nav .tab-ink-bar-wrapper .tab-ink-bar {
    border-bottom: 2px solid #ff5f16;
    border-radius: 20px;
    display: block;
    margin: auto;
}
.tabs-bar-wrapper .tabs-bar:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    transform-origin: 0 100%;
    transform: scaleY(0.5);
}
</style>