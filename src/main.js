/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-11 08:36:52
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-11 09:15:39
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './font/iconfont.css'
import './Mock'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
