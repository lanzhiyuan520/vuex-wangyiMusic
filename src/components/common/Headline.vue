<template>
    <div class="title-wrap">
        <div class="title-content">
            <div class="title-text">{{title}}</div>
            <div class="more" @click="go_more">更多</div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['title','more'],
        methods:{
            go_more(){
                console.log(this.more)
                if (this.more == 1){
                    this.$router.push({path:'/index/musiclist'})
                }else if (this.more == 2){
                    this.$router.push({path:'/index/newsong'})
                }else if (this.more == 3){
                    this.$router.push({path:'/index/seniority'})
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .title-content{
        border-bottom: 2px solid #C10D0C;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title-text{
        font-size: 20px;
        padding-left: 10px;
        padding-bottom: 5px;
    }
    .more{
        font-size: 12px;
        color: #a5a5a5;
        padding-right: 10px;
    }
</style>