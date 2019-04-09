//入口文件
// console.log('ok')

import Vue from '../../node_modules/vue/dist/vue.js'

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import app from '../main/App.vue'
import 'mint-ui/lib/style.css'
import { Header,Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import '../../lib/mui/css/mui.min.css'
import '../../lib/mui/css/icons-extra.css'
//导入自己的router
// import '../js/router.js'

import HomeContainer from '../../components/tabber/HomeContainer.vue'
import MemberContainer from '../../components/tabber/MemberContainer.vue'
import SearchContainer from '../../components/tabber/SearchContainer.vue'
import shopcar from '../../components/tabber/shopcar.vue'



var router = new  VueRouter({
    routes:[
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:SearchContainer},
        {path:'/search',component:shopcar},

    ],
    linkActiveClass:'mui-active'
})

var vm= new Vue({
    el:"#app",
    data:{},
    methods: {
        
    },
    render: 
        c => c (app),
    
    router
})