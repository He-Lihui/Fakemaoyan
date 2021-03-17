<template>
    <div class="out">
        <div class="head">
            <img @click="goback" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz
            ///////////////////////////////////////////////////////////////////////////////////
            97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
            <p>剧照({{film.length}})</p>
            <i></i>
        </div>
       <div v-for="(item,index) in film" :key="index" class="juzhao">
           <img :src="item" alt="">
       </div>
    </div>
</template>

<script>
import {detailListData} from '@/api/api'
export default {
    data() {
        return {
            film:{}
        }
    },
    async mounted() {
        let ret = await detailListData(this.$route.params.filmId)
        this.film = ret.data.data.film.photos
    },
    methods:{
        goback:function(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .out{
        display: flex;
        flex-wrap: wrap;
        img{
            width: 136px;
            height: 140px;
            margin-right: 2px;
        }
        .head{
            width: 100%;
            height: 45px;
            display: flex;
            padding:0 5px;
            justify-content: space-between;
            align-items: center;
            img{
                width: 30px;
                height: 30px;
            }
            p{
                margin-left: -30px;
            }
        }
    }
</style>