<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-11 08:45:06
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-11 09:16:54
-->
<template>
  <div>
     <ul>
         <li v-for="(item,index) in list" :key="index">
             <div>
                 <img :src="item.img" alt="">
             </div>
             <p>
                 <span>{{item.name}}</span>
                 <span>喜欢：{{item.look}}万</span>
             </p>
         </li>
     </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        Axios.get('/api/list').then(res => {
            console.log(res)
            this.list = res.data.data.data
        })
    }
}
</script>

<style lang="scss" scoped>
    ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 50%;
            display: flex;
            flex-direction: column;
            p{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
            }
        }
    }
</style>