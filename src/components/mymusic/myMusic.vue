<template>
    <div class="my-music">
        <div class="no-login" v-if="!this.$store.state.login.login">
            <div class="no-login-content">
                <div class="empty"></div>
                <div class="btn" @click="login_state(1)"></div>
            </div>
        </div>
        <div class="login" v-if="this.$store.state.login.login">
            <div class="left" :style="{height:state.h+'px'}">
                <div class="my-music-list">
                    <el-collapse v-model="state.activeNames" @change="handleChange">
                        <el-collapse-item title="创建的歌单">
                            <div class="music-list-wrap" v-for="(item,index) in state.my_list" :key="index" @click="change_list(item.id)">
                                <img :src="item.coverImgUrl" >
                                <div class="music-info">
                                    <p class="music-list-name">{{item.name}}</p>
                                    <p class="music-num">{{item.trackCount}}首</p>
                                </div>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="收藏的歌单">
                            <div class="music-list-wrap" v-for="(item,index) in state.collect_list" :key="index" @click="change_list(item.id)">
                                <img :src="item.coverImgUrl" >
                                <div class="music-info">
                                    <p class="music-list-name">{{item.name}}</p>
                                    <p class="music-num">{{item.trackCount}}首</p>
                                </div>
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
            <div class="right" :style="{minHeight:state.h+'px'}">
                <Music :music="state.my_musicList"></Music>
            </div>
        </div>
    </div>
</template>

<script>
    import Login from '../common/login'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import {UserInfo} from '../common/tools'
    import Music from '../common/MusicList'
    import { Loading } from 'element-ui';
    export default {
        name: "my-music",
        mounted(){
            var userInfo = UserInfo('userInfo')
            this.$store.commit('show_children',false)
            this.$store.commit('change_parent_tab',1)
            this.$store.commit('d_height')
            this.$store.state.head.p = 'fixed'
            if (userInfo){
                this.$store.dispatch('my_music_list',{id:userInfo.account.id})
            }
        },
        computed:{
            ...mapState({
                state:state=>state.mymusic
            })
        },
        components:{
            Login,
            Music
        },
        methods:{
            login_state(flag){
                this.$store.commit('loginState',{flag})
            },
            handleChange(){

            },
            change_list(id){
                Loading.service({text:'加载中...'});
                this.$store.dispatch('MusicList',{id})
            }
        }
    }
</script>

<style scoped lang="less">
    .my-music{
        background-color: #f5f5f5;
    }
    .no-login{
        width: 980px;
        background: #fff;
        border: 1px solid #d3d3d3;
        margin: 0 auto;
        min-height: 700px;
        padding-top: 70px;
    }
    .no-login-content{
        width: 807px;
        height: 268px;
        margin: 0 auto 0;
        padding-top: 104px;
        background: url("../../assets/mymusic.png") no-repeat;
        background-position: 0 104px;
    }
    .empty{
        width: 100%;
        height: 100px;
    }
    .btn{
        width: 167px;
        height: 45px;
        margin: 102px 0 0 482px;
        background: url("../../assets/mymusic.png") no-repeat;
        background-position: 0 9999px;
        &:hover{
            background-position: 0 -278px;
        }
    }
    .login{
        width: 980px;
        margin: 0 auto;
    }
    .left{
        position: fixed;
        top: 70px;
        float: left;
        width: 240px;
        border-right: 1px solid #d3d3d3;
        border-left: 1px solid #d3d3d3;
    }
    .right{
        box-sizing: border-box;
        width: 740px;
        border-right: 1px solid #d3d3d3;
        margin-left: 240px;
        padding: 100px 30px 40px 40px;
    }
    .my-music-list{
        padding-top: 40px;
    }
    .music-list-wrap{
        background: #e6e6e6;
        height: 42px;
        padding: 6px 0 6px 20px;
        display: flex;
        border-bottom: 1px solid #f5f5f5;
        img{
            width: 40px;
            height: 40px;
        }
    }
    .music-info{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 10px;
        .music-list-name{
            color: #000;
            font-size: 12px;
        }
        .music-num{
            color: #999;
            font-size: 12px;
        }
    }
</style>