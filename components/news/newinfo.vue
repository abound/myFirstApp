<template>
    <div class="newinfo-content">
        <h3 class="title">{{newinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{newinfo.add_time}}</span>
            <span>点击次数：{{newinfo.click}}次</span>
        </p>

        <hr>

        <div class="newlist" v-html="newinfo.newlist"></div>

        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from '../subcomponents/comments.vue'
export default {
    data(){
        return  {
            id: this.$route.params.id,
            newinfo:[]
        }
    },
     created(){
        this.getNewlist();
    },
    methods:{
        getNewlist(){
            this.$http.get('http://127.0.0.1:8000/script').then(function(result){
                this.newinfo=result.body[0]
                // console.log(result.body);
            })
        }
    },
    components:{
        'comment-box': comment
    }
}
</script>


<style scoped>
.newinfo-content{
    padding-left: 5px;
}
.title {
    font-size: 20px;
    text-align: center;
    margin: 15px, 0;
    color: red;
}
.subtitle{
    color: #226aff;
    display: flex;
    justify-content: space-between;
}
</style>
