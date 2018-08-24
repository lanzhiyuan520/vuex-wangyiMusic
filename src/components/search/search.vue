<template>
    <div class="search">
        <Head></Head>
        <div class="music-list">
            <div class="search_wrap">
                <input type="text" :value="state.search_v" class="scrf" @input="change_text" >
                <a href="javascript:;" class="search-icon" @click="search" @keyup.enter="search"></a>
            </div>
            <Music :music="state.music_list" :flag="true"></Music>
        </div>
    </div>
</template>

<script>
    import Head from '../header/head'
    import {mapState} from 'vuex'
    import Music from '../common/MusicList'
    export default {
        mounted(){
            this.$store.state.head.parent_active = 10
            this.$store.commit('show_children',false)
            this.$store.state.common.search_v = this.$store.state.common.search_v?this.$store.state.common.search_v:this.$route.query.search_text
            this.$store.dispatch('search',{keywords:this.$store.state.common.search_v?this.$store.state.common.search_v:this.$route.query.search_text})
        },
        computed:{
            ...mapState({
                state:state=>state.common
            })
        },
        methods:{
            change_text(e){
                this.$store.commit('change_text',{val:e.target.value})
            },
            search(){
                this.$store.dispatch('search',{keywords:this.$store.state.common.search_v})
            }
        },
        components:{
            Head,
            Music
        }
    }
</script>

<style scoped lang="less">
    .search{
        background-color: #f5f5f5;
    }
    .music-list{
        width: 740px;
        background-color: #fff;
        margin: 0 auto;
        min-height: 700px;
        box-sizing: border-box;
        padding: 80px 30px 40px 40px;
    }
    .search_wrap{
        width: 420px;
        height: 40px;
        margin: 0 auto;
        background: url("../../assets/sprite.png") no-repeat;
        background-position: 0 0;
        margin-bottom: 20px;
    }
    .scrf{
        width: 320px;
        height: 17px;
        margin: 12px 0 0 20px;
        padding: 0;
        background: #fff;
        border: none;
        outline: none;
    }
    .search-icon{
        float: right;
        width: 50px;
        height: 40px;
    }
</style>