<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-11 08:36:52
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-11 09:21:00
-->
<template>
  <div class="home">
    <header>
       <Header />
    </header>
    <main>
        <router-view />
    </main>
  </div>
</template>

<script>
import Header from '../components/header'
export default {
  name: 'Home',
  components: {
      Header
  }
}
</script>

<style lang="scss">
    .home{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        header{
            height: 50px;
           
        }
        main{
            flex: 1;
            overflow: auto;
        }
    }
    
</style>