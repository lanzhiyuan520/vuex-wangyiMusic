<template>
    <div>
        <Head></Head>
        <div class="song-list-wrap">
            <div class="song-left">
                <div class="song-content">
                    <div class="song-head-info">
                        <div class="song-head-img">
                            <img :src="state.songdetail.coverImgUrl">
                            <div class="msk"></div>
                        </div>
                        <div class="song-info-content">
                            <div class="song-content-title-wrap">
                                <div class="song-bgc"></div>
                                <div class="song-title-text">{{state.songdetail.name}}</div>
                            </div>
                            <div class="created">
                                <img :src="state.songdetail.creator.avatarUrl">
                                <div class="created-user">{{state.songdetail.creator.nickname}}</div>
                                <div class="created-time">{{state.songdetail.createTime | created}} 创建</div>
                            </div>
                            <div class="fun-list">
                                <span class="play-icon" @click="playmusic">
                                    <span class="play-icon2">
                                        <em class="play-icon3"></em>
                                        播放
                                    </span>
                                </span>
                                    <span class="add-icon"></span>
                                    <span class="collect-icon">
                                    <span class="collect-icon2">({{state.songdetail.subscribedCount}})</span>
                                </span>
                                    <span class="share-icon">
                                    <span class="share-icon2">({{state.songdetail.shareCount}})</span>
                                </span>
                                    <span class="down-icon">
                                    <span class="down-icon2">下载</span>
                                </span>
                                    <span class="comment-icon">
                                    <span class="comment-icon">({{state.songdetail.commentCount}})</span>
                                </span>
                            </div>
                            <div class="tag-list">
                                <div class="tag-text">标签:</div>
                                <div class="tag-item" v-for="(item,index) in state.songdetail.tags" :key="index">{{item}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="music-list" style="margin-top: 30px">
                        <Music :music="state.songdetail"></Music>
                    </div>
                    <div class="comments-wrap">
                        <Comment :comments="state.comments" :commentCount="state.commentCount" :hotcomments="state.hotcomments"></Comment>
                    </div>
                </div>
                <div class="paging-wrap">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="state.commentCount"
                            :page-size="20"
                            @current-change="current_page"
                            :current-page.sync='state.currentPageNum'
                    >
                    </el-pagination>
                </div>
            </div>
            <div class="song-right"></div>
        </div>
        <div class="play-music-wrap" :class="this.$store.state.seniority.translate">
            <div class="play-content">
                <VueAplayer v-if="this.$store.state.seniority.music_info " :music='this.$store.state.seniority.music_data'></VueAplayer>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from '../header/head'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import { Loading } from 'element-ui';
    import Music from '../common/MusicList'
    import Comment from '../common/comments'
    import VueAplayer from 'vue-aplayer'
    export default {
        mounted(){
            Loading.service({text:'加载中...'});
            this.$store.commit('show_children',true)
            this.$store.state.head.children_active = 10
            this.song_detaild(this.$route.query.id)
            this.$store.state.songList.currentPageNum = 0
        },
        computed:{
            ...mapState({
                state:state=>state.songList
            })
        },
        methods:{
              song_detaild(id){
                  this.$store.dispatch('song_detail',{id})
                  this.$store.dispatch('song_comments',{id,offset:1})
              },
              current_page(val){
                  Loading.service({text:'加载中...'});
                  this.$store.dispatch('song_comments',{id:this.$route.query.id,offset:val})
              },
              playmusic(){
                  this.$store.state.seniority.music_info = this.$store.state.songList.songdetail.tracks[0]
                  this.$store.dispatch('playMusic',{id:this.$store.state.songList.songdetail.tracks[0].id})
              }
        },
        components:{
            Head,
            Music,
            VueAplayer,
            Comment
        }
    }
</script>

<style scoped lang="less">
    .song-list-wrap{
        width: 980px;
        border: 1px solid #d3d3d3;
        margin: 0 auto;
        display: flex;
    }
    .song-left{
        width: 710px;
        padding-bottom: 20px;
    }
    .song-right{
        display: flex;
        flex: 1;
        border-left: 1px solid #d3d3d3;
    }
    .song-content{
        padding: 47px 30px 40px 39px;
    }
    .song-head-info{
        display: flex;
        position: relative;
        .song-head-img{
            width: 200px;
            height: 200px;
            img{
                width: 100%;
                height: 100%;
            }
            .msk{
                position: absolute;
                width: 208px;
                height: 208px;
                top: -4px;
                left: -4px;
                background: url("../../assets/hot_bgc.png") no-repeat;
                background-position: 0 -1285px;
            }
        }
    }
    .song-info-content{
        flex: 1;
        padding-left: 30px;
    }
    .song-content-title-wrap{
        display: flex;

        margin-bottom: 12px;
        .song-bgc{
            width: 58px;
            height: 24px;
            background: url("../../assets/icon1.png") no-repeat;
            background-position: 0 -243px;
            margin-right: 10px;
            margin-top: 5px;
        }
        .song-title-text{
            font-size: 24px;
        }
    }
    .created{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        img{
            width: 35px;
            height: 35px;
        }
        .created-user{
            font-size: 12px;
            color: #0c73c2;
            margin:0 15px 0 10px;
        }
        .created-time{
            font-size: 12px;
            color: #999;
        }
    }
    .fun-list{
        display: flex;
        align-items: center;
        margin-top: 30px;
        .play-icon{
            display: inline-block;
            height: 31px;
            background: url("../../assets/icon3.png") no-repeat;
            background-position: right -428px;
            &:hover .play-icon3{
                color: #fff;
                background-position: -28px -1622px;
            }
            .play-icon2{
                display: inline-flex;
                align-items: center;
                background: url("../../assets/icon3.png") no-repeat;
                background-position: 0 -387px;
                color: #fff;
                font-size: 12px;
                padding: 0 7px 0 8px;
                line-height: 31px;
                &:hover{
                    color: #fff;
                    background-position: 0 -469px;
                }
                &:hover .play-icon3{
                    background-position: -28px -1622px;
                }
                .play-icon3{
                    display: inline-block;
                    margin: 0 2px 2px 0;
                    width: 20px;
                    height: 18px;
                    background: url("../../assets/icon3.png") no-repeat;
                    background-position: 0 -1622px;
                    overflow: hidden;
                }
            }
        }
        .add-icon{
            display: inline-flex;
            width: 32px;
            height: 31px;
            background: url("../../assets/icon3.png") no-repeat;
            background-position: 0 -1588px;
            &:hover{
                background-position: -40px -1588px;
            }
        }
        .collect-icon{
            display: inline-flex;
            background: url("../../assets/icon3.png") no-repeat;
            background-position: right -1020px;
            margin-right: 6px;
            padding: 0 5px 0 0;
            margin-left: 5px;
            &:hover{
                background-position: right -1106px;
            }
            .collect-icon2{
                background: url("../../assets/icon3.png") no-repeat;
                background-position: 0 -977px;
                padding-right: 2px;
                padding-left: 28px;
                height: 31px;
                line-height: 31px;
                font-size: 12px;
                color: #333;
                &:hover{
                    background-position: 0 -1063px;
                }
            }
        }
        .share-icon{
            display: inline-flex;
            padding: 0 5px 0 0;
            background: url("../../assets/icon3.png") no-repeat;
            background-position: right -1020px;
            &:hover{
                background-position: right -1106px;
            }
            .share-icon2{
                display: inline-flex;
                align-items: center;
                height: 31px;
                line-height: 30px;
                min-width: 23px;
                background: url("../../assets/icon3.png") no-repeat;
                background-position: 0 -1225px;
                padding: 0 7px 0 30px;
                font-size: 12px;
                color: #333;
                &:hover{
                    background-position: 0 -1268px;
                }
            }
        }
        .down-icon{
            display: inline-flex;
            background: url("../../assets/icon3.png") no-repeat;
            background-position: right -1020px;
            padding: 0 5px 0 0;
            height: 31px;
            &:hover{
                background-position: right -1106px;
            }
            .down-icon2{
                display: inline-flex;
                font-size: 12px;
                align-items: center;
                margin-left: 5px;
                color: #333;
                padding-right: 2px;
                background: url("../../assets/icon3.png") no-repeat;
                height: 31px;
                padding-left: 28px;
                background-position: 0 -2761px;
                &:hover{
                    background-position: 0 -2805px;
                }
            }
        }
        .comment-icon{
            display: inline-flex;
            background: url("../../assets/icon3.png") no-repeat;
            background-position: right -1020px;
            padding: 0 5px 0 0;
            height: 31px;
            &:hover{
                background-position: right -1106px;
            }
            .comment-icon{
                display: inline-flex;
                padding-right: 2px;
                padding-left: 28px;
                background: url("../../assets/icon3.png") no-repeat;
                background-position: 0 -1465px;
                align-items: center;
                font-size: 12px;
                color: #333;
                margin-left: 5px;
                &:hover{
                    background-position: 0 -1508px;
                }
            }
        }
    }
    .tag-list{
        display: flex;
        margin-top: 25px;
        .tag-text{
            font-size: 12px;
            color:#666;;
        }
        .tag-item{
            font-size: 12px;
            margin: 0 0 3px 10px;
            padding: 0 15px 0;
            display: inline-flex;
            border: 1px solid #d3d3d3;
            border-radius: 20px;
            color: #777;
            background-color: #f4f4f4;
            &:hover{
                background-color: #fff;
            }
        }
    }
    .paging-wrap{
        display: flex;
        justify-content: center;
    }
</style>