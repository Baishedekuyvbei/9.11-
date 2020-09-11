/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-11 08:36:52
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-11 08:49:47
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children:[
        {
            path: '/home/homes',
            name: 'Homes',
            component: () => import(/* webpackChunkName: "homes" */ '../views/Homes.vue'),
        },
        {
            path: '/home/list',
            name: 'List',
            component: () => import(/* webpackChunkName: "list" */ '../views/List.vue'),
        },
        {
            path: '/home/price',
            name: 'Price',
            component: () => import(/* webpackChunkName: "price" */ '../views/Price.vue'),
        },
        {
            path:'/home',
            redirect:'/home/homes'
        }
    ]
  },
  {
      path:'/',
      redirect:'/home'
  }
  
]

const router = new VueRouter({
  routes
})

export default router
