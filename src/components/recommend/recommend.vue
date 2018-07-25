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
                        <el-carousel :autoplay="false" arrow="hover" indicator-position="none" height="188px">
                            <el-carousel-item v-for="(item,index) in state.new_music_list" :key="index">
                                <ul class="new-recommend-list">
                                    <li v-for="(item,index) in item" :key="index">
                                        <div class="new-recommend-img">
                                            <img :src="item.picUrl">
                                            <p class="img-marsk"></p>
                                        </div>
                                        <p class="music_name">{{item.name}}</p>
                                        <p class="song_name">{{item.artist.name}}</p>
                                    </li>
                                </ul>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
                <div class="ranking-wrap">
                    <Headline title='榜单'></Headline>
                    <div class="ranking-content">
                        <div class="soaring-ranking">
                            <div class="soaring-head">
                                <div class="soaring-head-content">
                                    <div class="head-img-wrap">
                                        <img src="http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100">
                                        <div class="shade"></div>
                                    </div>
                                    <div class="ranking-info-wrap">
                                        <p class="ranking-text">云音乐飙升榜</p>
                                        <div class="ranking-bgc">
                                            <div class="play-bgc"></div>
                                            <div class="collect-bgc"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="soaring-list">
                                <li v-for="(item,index) in state.soaring_list" :key="index" :class="index%2==0?'active-list-bgc':''">
                                    <div class="song_name_list">
                                        <span class="soaring-list-num" :class="index<3?'active-num':''">{{index+1}}</span>
                                        <span class="soaring-list-songname">{{item.name}}</span>
                                    </div>
                                    <div class="play-bgc-wrap">
                                        <div class="play-bgc2"></div>
                                        <div class="collect-bgc2"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="soaring-ranking" style="border-left: 1px solid #d2d2d2;border-right: 1px solid #d2d2d2;">
                            <div class="soaring-head">
                                <div class="soaring-head-content">
                                    <div class="head-img-wrap">
                                        <img src="http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100">
                                        <div class="shade"></div>
                                    </div>
                                    <div class="ranking-info-wrap">
                                        <p class="ranking-text">云音乐新歌榜</p>
                                        <div class="ranking-bgc">
                                            <div class="play-bgc"></div>
                                            <div class="collect-bgc"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="soaring-list">
                                <li v-for="(item,index) in state.new_sanking_list" :key="index" :class="index%2==0?'active-list-bgc':''">
                                    <div class="song_name_list">
                                        <span class="soaring-list-num" :class="index<3?'active-num':''">{{index+1}}</span>
                                        <span class="soaring-list-songname">{{item.name}}</span>
                                    </div>
                                    <div class="play-bgc-wrap">
                                        <div class="play-bgc2"></div>
                                        <div class="collect-bgc2"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="soaring-ranking">
                            <div class="soaring-head">
                                <div class="soaring-head-content">
                                    <div class="head-img-wrap">
                                        <img src="http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100">
                                        <div class="shade"></div>
                                    </div>
                                    <div class="ranking-info-wrap">
                                        <p class="ranking-text">云音乐原创歌曲榜</p>
                                        <div class="ranking-bgc">
                                            <div class="play-bgc"></div>
                                            <div class="collect-bgc"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="soaring-list">
                                <li v-for="(item,index) in state.original_sanking_list" :key="index" :class="index%2==0?'active-list-bgc':''">
                                    <div class="song_name_list">
                                        <span class="soaring-list-num" :class="index<3?'active-num':''">{{index+1}}</span>
                                        <span class="soaring-list-songname">{{item.name}}</span>
                                    </div>
                                    <div class="play-bgc-wrap">
                                        <div class="play-bgc2"></div>
                                        <div class="collect-bgc2"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
            //是否显示子菜单
            this.$store.commit('show_children',true)
            //banner数据
            this.$store.dispatch('banner')
            //热门推荐
            this.$store.dispatch('hot_recommend')
            //新碟上架
            this.$store.dispatch('new_music_list')
            //云音乐飙升榜
            this.$store.dispatch('soaring_ranking')
            //云音乐新歌榜
            this.$store.dispatch('new_ranking')
            //云音乐原创歌曲榜
            this.$store.dispatch('original_sanking')
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
        right: 301px;
        background: url("../../assets/download.png") no-repeat;
    }
    .recommend-content{
        width: 980px;
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
        display: flex;
        justify-content:space-between ;
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
    .music_name{
        font-size: 12px;
        color: #000;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin-top: 5px;
    }
    .song_name{
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        font-size: 12px;
        color: #666;
    }
    .ranking-content{
        width: 100%;
        border: 1px solid #d2d2d2;
        background-color: #F4F4F4;
        display: flex;
        margin-top: 20px;
        .soaring-ranking{
            width: 33.333%;
            height: 100%;
            box-sizing: border-box;
            .soaring-head{
                height: 100px;
                padding: 20px 0 0 19px;
                .soaring-head-content{
                    width: 100%;
                    display: flex;
                    .head-img-wrap{
                        position: relative;
                        img{
                            display: block;
                            width: 80px;
                            height: 80px;
                        }
                        .shade{
                            width: 80px;
                            height: 80px;
                            position: absolute;
                            top: 0;
                            left: 0;
                            background: url("../../assets/hot_bgc.png") no-repeat;
                            background-position: -145px -57px;
                        }
                    }
                    .ranking-info-wrap{
                        flex: 1;
                        padding-left: 10px;
                        .ranking-text{
                            font-size: 14px;
                            font-weight: 900;
                        }
                        .ranking-bgc{
                            display: flex;
                            margin-top: 8px;

                        }

                    }
                }

            }
            .soaring-list{
                li{
                    position: relative;
                    box-sizing: border-box;
                    width: 100%;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    padding-left: 30px;
                    &:hover .play-bgc-wrap{
                        z-index: 2;
                    }
                    .song_name_list{

                    }
                }
            }
        }
        .new-ranking{
            width: 33.333%;
            height: 100%;
        }
        .original-ranking{
            width: 33.333%;
            height: 100%;
        }
    }
    .play-bgc{
        width: 22px;
        height: 22px;
        background: url("../../assets/new_bgc.png") no-repeat;
        background-position: -267px -205px;
        margin-right: 5px;
        &:hover{
            background-position: -267px -235px;
        }
    }
    .collect-bgc{
        width: 22px;
        height: 22px;
        background: url("../../assets/new_bgc.png") no-repeat;
        background-position: -298px -205px;
        &:hover{
            background-position: -298px -235px;
        }
    }
    .play-bgc-wrap{
        z-index: -1;
        position: absolute;
        right: 10px;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .play-bgc2{
        width: 17px;
        height: 17px;
        background: url("../../assets/new_bgc.png") no-repeat;
        background-position: -267px -268px;
        margin-right: 5px;
        &:hover{
            background-position: -267px -288px;
        }
    }
    .collect-bgc2{
        width: 17px;
        height: 17px;
        background: url("../../assets/new_bgc.png") no-repeat;
        background-position: -297px -268px;
        &:hover{
            background-position: -297px -288px;
        }
    }
    .soaring-list-songname{
        font-size: 13px;
    }
    .soaring-list-num{
        font-size: 15px;
        margin-right: 5px;
    }
    .active-num{
        color: #c10d0c;
    }
    .active-list-bgc{
        background-color: #e8e8e8;
    }
</style>