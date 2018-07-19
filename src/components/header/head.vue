<template>
    <div class="header-wrap">
        <div class="header-content">
            <h1 class="logo"></h1>
            <ul class="header-nav-list">
                <li v-for="(item,index) in nav_list" :class="parent_active==index?'active':''" :key="index" @click="change_parent_nav(item.path,index)">{{item.title}}</li>
            </ul>
            <div class="search-wrap">
                <div class="search-content">
                    <input type="text" placeholder="音乐/视频/电台/用户" class="_search">
                </div>
            </div>
            <div class="video-contribute-wrap">
                <div class="video-content">
                    视频投稿
                </div>
            </div>
            <div class="login-wrap">
                <div class="login-text">登录</div>
            </div>
        </div>
        <div class="children-nav">
            <ul class="children-list">
                <li :class="children_active==index?'active-children':''" @click="tab_nav(item.path,index)" v-for="(item,index) in children_nav" v-show="children_show">
                    <div>
                        {{item.title}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        mounted(){

        },
        computed:{
            ...mapState({
                nav_list:state=>state.head.head_list,
                children_nav:state=>state.head.children_nav,
                children_show:state=>state.head.children_show,
                children_active:state=>state.head.children_active,
                parent_active:state=>state.head.parent_active,
            })
        },
        methods:{
            tab_nav(path,index){
                this.$router.push(path)
                this.$store.commit('change_tab',index)
            },
            change_parent_nav(path,index){
                this.$router.push(path)
                this.$store.commit('change_parent_tab',index)
            }
        }
    }
</script>

<style scoped lang="less">
    .header-wrap{
        width: 100%;
        background-color: #242424;
    }
    .header-content{
        width: 1100px;
        height: 100%;
        margin: 0 auto;
        display: flex;
    }
    .logo{
        width: 176px;
        height: 69px;
        background-position: 0 0;
        background: url("../../assets/topbar.png") no-repeat;
    }
    .header-nav-list{
        display: flex;
    }
    .header-nav-list{
        li{
            padding: 0 19px;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #ccc;
            &:hover{
                color: #fff;
            }
        }
    }
    .active{
        color: #fff!important;
        background-color: #000!important;
    }
    .children-nav{
        width: 100%;
        background-color: #C20C0C;
        .children-list{
            box-sizing: border-box;
            height: 100%;
            width: 1100px;
            margin: 0 auto;
            padding-left: 180px;
            display: flex;
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 0;
                div{
                    display: inline-block;
                    box-sizing: border-box;
                    color: #fff;
                    padding: 0 13px;
                    font-size: 14px;
                    border-radius: 10px;
                }
            }
        }
    }
    .active-children{
        background-color: #9B0909;
    }
    .search-wrap{
        display: flex;
        align-items: center;
        margin-left: 60px;
    }
    .search-content{
        width: 158px;
        height: 32px;
        background-color: #fff;
        border-radius: 20px;
    }
    ._search{
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        border-radius: 20px;
        padding-left: 10px;
    }
    .video-content{
        width: 90px;
        height: 32px;
        border: 1px solid #454546;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ccc;
        font-size: 12px;
        &:hover{
            color: #fff;
            border: 1px solid #f5f5f5;
        }
    }
    .video-contribute-wrap{
        display: flex;
        align-items: center;
        margin-left: 20px;
    }
    .login-wrap{
        position: relative;
        display: flex;
        align-items: center;
        margin-left: 30px;
        .login-text{
            font-size: 10px;
            color: #787878;
        }
    }
</style>