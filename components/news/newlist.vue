<template>
    <div>
        <ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media"  v-for="newlist in newlists" :key="newlist.id">
        <router-link :to="'/home/newlist/'+newlist.id">
            <img class="mui-media-object mui-pull-left" src="http://img.cdn.qiniu.dcloud.net.cn/cbd.jpg">
            <div class="mui-media-body">
               <h1> {{newlist.title}}</h1>
                <p class='mui-ellipsis'>{{newlist.digist}}</p>
                <span>发表时间：{{newlist.add_time  }}</span>
                <span>点击：{{newlist.click}}次</span>
            </div>
        </router-link>
    </li>
   
    
</ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
        newlists:[],
        };
    },
    created(){
        this.getNewlist();
    },
    methods:{
        getNewlist(){
            this.$http.get('http://127.0.0.1:8000/script').then(function(result){
                this.newlists=result.body
                // console.log(result.body);
            })
        }
    }
}
</script>


<style scoped>
.mui-table-view li h1{
    
        font-size: 10px;
        
    

}
.mui-media-body span{
            font-size: 10px;
            color: #226aff;
        }
</style>
