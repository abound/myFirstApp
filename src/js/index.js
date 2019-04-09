//入口文件
// console.log('ok')

import Vue from '../../node_modules/vue/dist/vue.js'


import app from '../main/App.vue'
import 'mint-ui/lib/style.css'
import { Header } from 'mint-ui'
import '../../lib/mui/css/mui.min.css'

Vue.component(Header.name, Header)

var vm= new Vue({
    el:"#app",
    data:{},
    methods: {
        
    },
    render: 
        c => c (app)
    
})