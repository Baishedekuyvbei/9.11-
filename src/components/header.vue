<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-11 09:19:09
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-11 09:22:42
-->
<template>
  <div class="header">
       <i class="iconfont icon-gengduo"></i>
        <div>
            <router-link to="/home/list">关注</router-link>
            <router-link to="/home/homes">发现</router-link>
            <router-link to="/home/price">同城</router-link>
        </div>
        
        <i class="iconfont icon-paisheluxiang"></i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.header{
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #ccc;
    div{
        width: 50%;
        display: flex;
        justify-content: space-around;
    }
    a{
        
        text-decoration: none;
        color: #ccc;
        padding: 5px 0;
    }
    .router-link-active{
        border-bottom: orange 2px solid;
        color: #000;
    }
}
 
</style>