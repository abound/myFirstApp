//入口文件
// console.log('ok')

import Vue from '../../node_modules/vue/dist/vue.js'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// import moment from 'moment'
// Vue.filters('dataFormat',function(datastr,pattern="YYY-MM-DD HH:mm:ss"){
//     return moment(datastr).format(pattern)
// })
import app from '../main/App.vue'
import 'mint-ui/lib/style.css'
import { Header,Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.use(VueResource)
import '../../lib/mui/css/mui.min.css'
import '../../lib/mui/css/icons-extra.css'
//导入自己的router
// import '../js/router.js'

import HomeContainer from '../../components/tabber/HomeContainer.vue'
import MemberContainer from '../../components/tabber/MemberContainer.vue'
import SearchContainer from '../../components/tabber/SearchContainer.vue'
import shopcar from '../../components/tabber/shopcar.vue'
import newlist from '../../components/news/newlist.vue'
import newinfo from '../../components/news/newinfo.vue'

var router = new  VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/shopcar',component:SearchContainer},
        {path:'/search',component:shopcar},
        {path:'/home/newlist',component:newlist},
        {path:'/home/newlist/:id',component:newinfo},

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