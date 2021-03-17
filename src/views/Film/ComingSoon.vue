<template>
    <div>

        <ComingSoonListPage :list="shuju" :type="type" :key="'film' + shuju.length"></ComingSoonListPage>
        <router-view></router-view>
    </div>
</template>

<script>
import {comingSoonListData} from "@/api/api"
import ComingSoonListPage from '@/components/Listpage'
export default {
     data:function(){
        return {
            shuju:[],
            page:1,
            type:2,
        }
    },
    async mounted(){
      let res = await comingSoonListData(this.page)
      this.shuju = res.data.data.films
    },
    components:{
        ComingSoonListPage,
    }
}
</script>