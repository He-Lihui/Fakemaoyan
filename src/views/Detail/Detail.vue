<template>
    <div class="detail">
        <div class="film-header"><div class="goBack" ><img @click="goback" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
        ///////////////////////////////////////////////////////////////////////////////////
        97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
        </div> <div class="title"></div> </div>
        <div class="img" >
            <img v-lazy="film.poster" />
        </div>
        <div class="btt">
            <div class="name a">
                <p>{{film.name}}</p>
                <i v-if="film.grade">{{film.grade}}分</i>
            </div>
            <div class="a">{{film.category}}</div>
            <div class="a">{{film.premiereAt | parsePremiereAt}}上映</div>
            <div class="a">{{film.nation}} | {{film.runtime}}</div>
            <div class="a" :class="{active:isActive}">{{film.synopsis}}</div>
            <p class="more" @click="pull()">展开更多</p>
        </div>
            <p class="border"></p>
                <div class="person">
                    <div class="biaoti">演职人员</div>
                    <Swiper :key="'actors' + film.actors.length">
                        <div class="swiper-slide" v-for="(item,index) in film.actors" :key="index">
                            <img v-lazy="item.avatarAddress" alt="">
                            <div class="name">{{item.name}}</div>
                            <div class="dao">{{item.role}}</div>
                        </div>
                    </Swiper>
                </div>
            <p class="border"></p>
                 <div class="person">
                    <div class="juzhao">
                        <p>剧照</p>
                        <i @click="goPhotos(film.photos)">全部({{film.photos.length}}) ></i>
                    </div>
                    <Swiper :key="'actors' + film.actors.length">
                        <div class="swiper-slide" v-for="(item,index) in film.photos" :key="index">
                            <img v-lazy="item" alt="">
                        </div>
                    </Swiper>
                </div>
            <div class="foot">
                立即购票
            </div>
    </div>
</template>
<script>
import {detailListData} from '@/api/api'
import moment from 'moment'
import Swiper from '@/components/Swiper'
export default {
    data() {
        return {
            film:{actors:[],photos:[]},
            isActive:true
        }
    },
    async mounted(){
        let ret = await detailListData(this.$route.params.filmId)
        this.film = ret.data.data.film
    },
    filters:{
        parsePremiereAt:function(value){
            return moment(value * 1000).format('YYYY-MM-DD')
        }
    },
    methods:{
        pull:function(){
            this.isActive = !this.isActive
        },
        goback:function(){
             this.$router.go(-1)
        },
        goPhotos:function(film){
            this.$router.push({name:'photos',params:{film}})
        }
    },
    components:{
        Swiper,
    },
    created(){
        // 发起通知，通知app.vue组件移除底部菜单
        this.eventBus.$emit('footernav',false)
    },
    beforeDestroy(){
        // 发起通知，通知app.vue组件恢复底部菜单
        this.eventBus.$emit('footernav',true)
    },
    

}

</script>

<style lang="scss" scoped>
.detail {
    overflow: hidden;
    margin-bottom: 50px;
    .active{
        height: 35px;
        overflow: hidden;
    }
    .img {
        width: 100%;
        height: 182px;
        overflow: hidden;
        img {
            width: 100%;
            margin-top: -148px;
        }
    }
    .btt{
        padding: 10px;
        font-size: 13px;
        color: rgb(136, 130, 130);
        .name{
        font-size: 18px;
        margin-bottom: 6px;
        color: black;
        display: flex;
        justify-content: space-between;
        i{
            color: red;
        }
        }
        .a{
        margin-bottom: 6px;
        }
        .more{
            text-align: center;
            border-radius: 5px;
            height: 17px;
        }
    }
    .swiper-slide {
        img {
            width: 82px; 
        }
        div{
            text-align: center;
            font-size: 14px;
        }
        .dao{
            color: rgb(175, 169, 169);
            width: 80px;
        }
        .name{
             overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }   
    }
    .juzhao{
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i{
            font-style: normal;
            font-size: 13px;
            color: rgb(175, 169, 169);
        }
        img{
            height: 100px;
        }
    }
    .person{
        padding: 10px;
    }
    .border{
            height: 1px;
            border-bottom: 12px solid rgb(241, 241, 241);
            margin-bottom: 10px;
    }
    .biaoti{
        margin-bottom: 10px;
    }
    .film-header{
        position: fixed;
        background-color: hsla(0,0%,100%,0);
        color: transparent;
        transition: all .3s ease;
        width: 100vw;
        height: 44px;
        z-index: 1;
        img{
            margin: 10px;
            width: 35px;
        }
    }
    .foot{
        background: orange;
        width: 100%;
        height: 50px;
        color: white;
        text-align: center;
        line-height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 9999;
    }
    
}
</style>