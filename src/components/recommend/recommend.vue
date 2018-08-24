<template>
    <div class="recommend-wrap" style="background-color: #F4F3F4">
        <div class="banner-wrap">
            <el-carousel height="330px">
                <el-carousel-item v-for="(item,index) in state.banner_list" :key="index" :style="'background: url('+item.backgroundUrl+')'">
                    <a :href="item.url" target="_blank" style="display:inline-block;margin-right: 250px" >
                        <img :src="item.picUrl" style="">
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="recommend-content">
            <div class="recommend-box">
                <div class="hot-recommend">
                    <Headline title='热门推荐' :more="1"></Headline>
                    <div class="hot-list-wrap">
                        <ul class="hot-list">
                            <li v-for="(item,index) in state.hot_list" :key="index" @click="go_songlist(item)" :class="index==3 || index==state.hot_list.length-1?'active-list':''">
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
                    <Headline title='新碟上架' :more="2"></Headline>
                    <div class="new-recommend-wrap">
                        <el-carousel :autoplay="false" arrow="hover" indicator-position="none" height="188px">
                            <el-carousel-item v-for="(item,index) in state.new_music_list" :key="index">
                                <ul class="new-recommend-list">
                                    <li v-for="(item,index) in item" :key="index" @click="go_album(item)">
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
                    <Headline title='榜单' :more="3"></Headline>
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
                                        <div class="play-bgc2" @click="play_music(item)"></div>
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
                                        <div class="play-bgc2" @click="play_music(item)" ></div>
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
                                        <div class="play-bgc2" @click="play_music(item)"></div>
                                        <div class="collect-bgc2"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="recommend-login">
                <a href="https://music.163.com/#/download" target="_blank">
                    <div class="down-load"></div>
                </a>
                <div class="recommend-login-box">
                    <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                    <div class="login-btn" @click="login">{{this.$store.state.login.login_text}}</div>
                </div>
                <div class="enter-singer-wrap">
                    <div class="enter-singer-head">
                        <span class="enter-singer-text">入驻歌手</span>
                        <span class="look-more">查看全部</span>
                    </div>
                    <ul class="enter-singer-list">
                        <li v-for="(item,index) in state.enter_singer_list" :key="index">
                            <div class="singer-img-wrap">
                                <img :src="item.picUrl">
                            </div>
                            <div class="singer-info-wrap">
                                <p class="singer-name">{{item.name}}</p>
                                <p class="singer-intorduce"></p>
                            </div>
                        </li>
                    </ul>
                    <div class="apply">申请成为网易云音乐</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import VueAplayer from 'vue-aplayer'
    import Headline from '../common/Headline'
    import { Loading } from 'element-ui';
    export default {
        name: "recommend",
        mounted(){
            this.$store.state.head.children_active = 0
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
            //入驻歌手
            this.$store.dispatch('enter_singer_list')
            //判断是否登录
            if (this.$store.state.login.login){
                this.$store.state.login.login_text = '已登录'
            } else {
                this.$store.state.login.login_text = '登录'
            }
            this.$store.state.head.p = 'static'
        },
        components:{
            Headline,
            VueAplayer
        },
        computed:{
            ...mapState({
                state:state=>state.recommend
            }),
            ...mapGetters([])
        },
        methods:{
            ...mapMutations([]),
            play_music(item){
                this.$store.state.common.music_info = item
                this.$store.dispatch('play_music',{id:item.id})
            },
            go_songlist(item){
                this.$router.push({path:'/songlist',query:{id:item.id}})
            },
            login(){
                if (this.$store.state.login.login_text == '已登录'){
                    return
                }
                this.$store.commit('loginState',{flag:1})
            },
            go_album(item){
                this.$router.push({
                    path : '/album',
                    query:{id:item.id}
                })
            }
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
        width: 250px;
        height: 330px;
        background-color: #fff;
        top: -330px;
        right: 0;
        background: url("../../assets/download.png") no-repeat;
    }
    .recommend-content{
        width: 980px;
        margin: 0 auto;
        display: flex;

    }
    .recommend-box{
        box-sizing: border-box;
        width: 730px;
        height: 100%;
        border-left: 1px solid #d3d3d3;
        border-right: 1px solid #d3d3d3;
        padding: 20px 20px 40px;
        background-color: #fff;
    }
    .recommend-login{
        position: relative;
        display: flex;
        flex: 1;
        flex-direction: column;
        
        background-color: #fff;
        .recommend-login-box{
            width: 100%;
            background: url("../../assets/new_bgc.png") no-repeat;
            height: 126px;
            p{
                width: 205px;
                margin: 0 auto;
                padding: 16px 0;
                font-size: 12px;
                line-height: 22px;
            }
            .login-btn{
                width: 100px;
                height: 31px;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: 12px;
                text-shadow: 0 1px 0 #8a060b;
                background: url("../../assets/new_bgc.png") no-repeat;
                background-position: 0 -195px;
                margin: 0 auto;

                &:hover{
                    background-position: -110px -195px;
                }
            }
        }
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
    .enter-singer-wrap{
        margin-top: 15px;
        .enter-singer-head{
            border-bottom: 1px solid #ccc;
            display: flex;
            justify-content: space-between;
            margin: 0 20px;
            padding-bottom: 5px;
            .enter-singer-text{
                font-size: 12px;
                color: #333;
            }
            .look-more{
                font-size: 12px;
                color: #666;
            }
        }
        .enter-singer-list{
            margin: 6px 0 14px 20px;
            li{
                width: 210px;
                height: 62px;
                background-color: #fafafa;
                margin-top: 14px;
                display: flex;
                &:hover{
                    background-color: #f2f2f2;
                }
                .singer-img-wrap{
                    img{
                        display: block;
                        width: 62px;
                        height: 62px;
                    }
                }
                .singer-info-wrap{
                    border: 1px solid #e9e9e9;
                    flex: 1;
                    padding-left: 10px;

                    .singer-name{
                        width: 90%;
                        font-weight: bold;
                        padding-top: 5px;
                    }
                    .singer-intorduce{
                        color: #666;
                        margin-top: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        word-wrap: normal;
                        width: 90%;
                    }
                }
            }
        }
    }
    .apply{
        width: 210px;
        height: 29px;
        border: 1px solid #ccc;
        margin: 0 auto;
        border-radius: 5px;
        background-color: #f7f7f7;
        font-size: 13px;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: #fff;
        }
    }
</style>