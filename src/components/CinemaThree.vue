<template>
    <div>
        <div class="schedule-list">
            <div>
                <div class="disable schedule-item">
                    <div class="left">
                        <div class="start-at">
                            15:55
                        </div>
                        <div class="end-at">
                            18:28散场
                        </div>
                    </div>
                    <div class="middle">
                        <div class="language">
                            国语2D
                        </div>
                        <div class="hall">
                            6号厅
                        </div>
                    </div>
                    <div class="right">
                        <div class="buy-ticket">
                            停售
                        </div>
                        <div class="lowest-price">
                            <span class="price-icon">￥</span>43
                        </div>
                    </div>
                </div> 
                <div class="disable schedule-item">
                    <div class="left">
                        <div class="start-at">
                            15:55
                        </div>
                        <div class="end-at">
                            18:28散场
                        </div>
                    </div>
                    <div class="middle">
                        <div class="language">
                            国语2D
                        </div>
                        <div class="hall">
                            6号厅
                        </div>
                    </div>
                    <div class="right">
                        <div class="buy-ticket">
                            停售
                        </div>
                        <div class="lowest-price">
                            <span class="price-icon">￥</span>43
                        </div>
                    </div>
                </div> 

            </div>
        </div>
    </div>
</template>
<script>
import {cinemaFData} from '@/api/api'
import moment from 'moment'  
export default {
    data() {
        return {
            oldFilmdte:'',
            filmIdte:'',
            // showDated:'',
            arr:[],
        }
    },
    props:['filmId','showDate',],
    watch:{
        filmId: async function(newData,oldData){
            this.oldFilmdte = oldData
            this.filmIdte = newData
           
            // this.arr = a.data.data.scheduies[0]
        },
        showDate: async function(newData,oldData){
            // this.showDated = newData
            let a = await cinemaFData(this.filmIdte,newData)
            console.log(a);
        },
    },
    filters:{
        gungun:function(v){
            return moment(v * 1000).format("hh:mm")
        }
    }
}
</script>

<style lang="scss" scoped>
.schedule-list {
    min-height: calc(100vh - 44px);
}
  .schedule-list .schedule-item {
    height: 60px;
    padding: 15px;
    position: relative;
    background: #fff;
}

    .schedule-list
    .schedule-item:not(:first-child):before {
    content: ' ';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #ededed;
    color: #ededed;
    transform-origin: 0 0;
    transform: scaleY(0.5);
}
  .schedule-list .schedule-item .left {
    float: left;
    width: 100px;
    margin-top: 12px;
}
  .schedule-list .schedule-item .left .start-at {
    font-size: 15px;
    color: #191a1b;
}
  .schedule-list .schedule-item .left .end-at {
    font-size: 13px;
    color: #797d82;
    margin-top: 2px;
}
  .schedule-list .schedule-item .middle {
    float: left;
    width: calc(100% - 240px);
}

.schedule-list
.schedule-item
.middle
.language {
    font-size: 15px;
    color: #191a1b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 12px;
}
  .schedule-list .schedule-item .middle .hall {
    font-size: 13px;
    color: #797d82;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
  .schedule-list .schedule-item .right {
    float: right;
    padding: 10px 0;
    line-height: 25px;
    color: #ff5f16;
    margin-top: 12px;
}

.schedule-list
.schedule-item
.right
.buy-ticket {
    float: right;
    height: 25px;
    width: 50px;
    border-radius: 2px;
    position: relative;
    text-align: center;
    font-size: 13px;
}

.schedule-list
.schedule-item
.right
.buy-ticket:after {
    content: ' ';
    transform: scale(0.5);
    position: absolute;
    border: 1px solid #ff5f16;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border-radius: 4px;
}

.schedule-list
.schedule-item
.right
.lowest-price {
    float: right;
    padding-right: 20px;
    font-size: 15px;
}

.schedule-list
.schedule-item
.right
.lowest-price
.price-icon {
    font-size: 10px;
}
</style>