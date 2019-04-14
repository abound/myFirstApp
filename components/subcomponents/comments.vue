<template>
    <div>
       <h3>发表评论</h3>
       <hr>
       <textarea placeholder="请输入你的评论(最多120字)" maxlength="120"></textarea>
       
       <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
           <div class="cmt-item">
               <div class="cmt-title">
                   第一楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间：2012-12-12 12:12:12
               </div>
               <div class="cmt-body">
                   锄禾日当午
               </div>
           </div>
       </div>
       <mt-button type="danger" size="large" plain>评论更多</mt-button>


       
    </div>
</template>


<script>
export default {
    
}
</script>

<style scope>
.h3{
    font-size: 18px;
}
.textarea{
    font-size: 16px;
    height: 85px;
    margin: 0;
}
.cmt-item{
    font-size: 17px;
}
.cmt-title{
    background: #ccc;

}
</style>
