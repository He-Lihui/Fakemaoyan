<template>
    <div>  
        <NowPlayingListPage :list="shuju" :type="type" :key="'film' + shuju.length"></NowPlayingListPage>
        <router-view></router-view>
    </div>
</template>

<script>
import {nowPlayingListData} from "@/api/api"
import NowPlayingListPage from '@/components/Listpage'
export default {
     data:function(){
        return {
            shuju:[],
            page:1,
            type:1,
        }
    },
    async mounted(){
      let res = await nowPlayingListData(this.page)
      this.shuju = res.data.data.films
    },
    components:{
        NowPlayingListPage,
    }
}
</script>