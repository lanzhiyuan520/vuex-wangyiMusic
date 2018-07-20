<template>
    <div class="recommend-wrap" style="background-color: #F4F3F4">
        <div class="banner-wrap">
            <el-carousel height="330px">
                <el-carousel-item v-for="(item,index) in state.banner_list" :key="index" :style="'background: url('+item.backgroundUrl+')'">
                    <a :href="item.url" style="display:inline-block;margin-right: 250px" >
                        <img :src="item.picUrl" style="">
                    </a>
                </el-carousel-item>
            </el-carousel>
            <router-link tag='div' to="/index/download">
                <div class="down-load"></div>
            </router-link>
        </div>
        <div class="recommend-content">
            <div class="recommend-box">
                <div class="hot-recommend">
                    <Headline title='热门推荐'></Headline>
                    <div class="hot-list-wrap">
                        <ul class="hot-list">
                            <li v-for="(item,index) in state.hot_list" :key="index" :class="index==3 || index==state.hot_list.length-1?'active-list':''">
                                <div class="img-wrap">
                                    <div class="marsk">
                                        <span class="listen-icon"></span>
                                        <span class="listen-num">{{item.playCount | listen_num}}</span>
                                        <span class="play-music"></span>
                                    </div>
                                    <img :src="item.picUrl">
                                </div>
                                <p class="hot-name">{{item.name}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="new-recommend">
                    <Headline title='新碟上架'></Headline>
                    <div class="new-recommend-wrap">
                        <el-carousel arrow="always" indicator-position="none" height="188px">
                            <el-carousel-item>
                                <ul class="new-recommend-list">
                                    <li>
                                        <div class="new-recommend-img">
                                            <img src="">
                                            <p class="img-marsk"></p>
                                        </div>
                                        <p>qqqqq</p>
                                        <p>qqqq</p>
                                    </li>
                                </ul>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
            <div class="recommend-login"></div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import Headline from '../common/Headline'
    import { Loading } from 'element-ui';
    export default {
        name: "recommend",
        mounted(){
            Loading.service({text:'加载中...'});
            this.$store.commit('show_children',true)
            this.$store.dispatch('banner')
            this.$store.dispatch('hot_recommend')
        },
        components:{
            Headline
        },
        computed:{
            ...mapState({
                state:state=>state.recommend
            }),
            ...mapGetters([])
        },
        methods:{
            ...mapMutations([])
        },
        filters:{
            listen_num(count){
               count = count + ""
               var result = count.slice(0,2)
               return result + '万'
            }
        }
    }
</script>

<style scoped lang="less">
    .el-carousel__item{
        display: flex;
        justify-content: center;
    }
    .banner-wrap{
        position: relative;
    }
    .down-load{
        position: absolute;
        z-index: 2;
        width: 254px;
        height: 330px;
        background-color: #fff;
        top: 0;
        right: 357px;
        background: url("../../assets/download.png") no-repeat;
    }
    .recommend-content{
        width: 980px;
        height: 1000px;
        margin: 0 auto;
        display: flex;

    }
    .recommend-box{
        width: 730px;
        height: 100%;
        border-left: 1px solid #d3d3d3;
        border-right: 1px solid #d3d3d3;
        padding: 20px 20px 40px;
        background-color: #fff;
    }
    .recommend-login{
        display: flex;
        flex: 1;
        height: 100%;
    }
    .hot-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 20px;
        li{
            width: 140px;
            height: 204px;
            padding-right: 42px;
            margin-bottom: 42px;
            img{
                width: 140px;
                height: 140px;

            }
        }
    }
    .active-list{
        padding-right: 0!important;
    }
    .hot-name{
        font-size: 14px;
        color: #000;
    }
    .img-wrap{
        position: relative;
    }
    .marsk{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 27px;
        background: url("../../assets/hot_bgc.png") no-repeat;
        background-position: 0 -542px;
    }
    .listen-icon{
        display: inline-block;
        width: 14px;
        height: 11px;
        background: url("../../assets/bgc.png") no-repeat;
        background-position: 0 -23px;
        margin-left: 10px;
    }
    .listen-num{
        font-size: 12px;
        color: #ccc;
    }
    .play-music{
        position: absolute;
        bottom: 7px;
        right: 10px;
        display: inline-block;
        width: 16px;
        height: 17px;
        background: url("../../assets/bgc.png") no-repeat;
        background-position: 0 0;
    }
    .play-music:hover{
        background-position: 0 -60px;
    }
    .new-recommend-wrap{
        width: 100%;
        height: 186px;
        background-color: #F4F3F4;
        border:1px solid #d3d3d3;
        margin: 20px 0 37px;
    }
    .new-recommend-list{
        width: 645px;
        margin: 28px auto 0;
        li{
            width: 118px;
            height: 150px;
            background: url("../../assets/new_bgc.png") no-repeat;
            background-position: -262px 99px;
            .new-recommend-img{
                width: 100px;
                height: 100px;
                position: relative;
                img{
                    width: 100%;
                    height: 100%;
                }
                .img-marsk{
                    position: absolute;
                    width: 118px;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: url("../../assets/hot_bgc.png") no-repeat;
                    background-position: 0 -570px;
                }
            }
        }
    }
</style>