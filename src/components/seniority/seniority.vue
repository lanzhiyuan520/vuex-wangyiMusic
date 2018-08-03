<template>
    <div class="seniority-wrap" style="padding-bottom: 20px">
        <div class="seniority-content">
            <div class="seniority-list">
                <div class="seniority-box">
                    <h2>云音乐特色榜</h2>
                    <ul class="feature-list">
                        <li @click="feature_list(index,item.id,1)" v-for="(item,index) in state.seniority_list" :key="index" :class="index==state.active_seniority_num?state.activeBgc:''">
                            <div class="feature-img-wrap">
                                <img :src="item.img" alt="">
                                <span class="shard"></span>
                            </div>
                            <div class="feature-info">
                                <span class="feature-title">{{item.title}}</span>
                                <span class="update-time">{{item.update_time}}</span>
                            </div>
                        </li>
                    </ul>
                    <h2 style="margin-top: 10px">全球媒体榜</h2>
                    <ul class="feature-list">
                        <li @click="feature_list(index,item.id,2)" v-for="(item,index) in state.global_seniority_list" :key="index" :class="index==state.active_seniority_num?state.activeBgc2:''">
                            <div class="feature-img-wrap">
                                <img :src="item.img" alt="">
                                <span class="shard"></span>
                            </div>
                            <div class="feature-info">
                                <span class="feature-title">{{item.title}}</span>
                                <span class="update-time">{{item.update_time}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="seniority-info">
                <div class="seniority-info-head">
                    <div class="info-img-wrap">
                        <img :src="state.seniority.coverImgUrl">
                        <div class="msk"></div>
                    </div>
                    <div class="info-content">
                        <h2>{{state.seniority.name}}</h2>
                        <div class="seniority-update">
                            <span class="time-icon"></span>
                            <span class="recently-update">最近更新：{{state.seniority.updateTime | normalTime}}</span>
                            <span class="day-update">(每天更新)</span>
                        </div>
                        <div class="fun-list">
                            <span class="play-icon">
                                <span class="play-icon2">
                                    <em class="play-icon3"></em>
                                    播放
                                </span>
                            </span>
                            <span class="add-icon"></span>
                            <span class="collect-icon">
                                <span class="collect-icon2">({{state.seniority.subscribedCount}})</span>
                            </span>
                            <span class="share-icon">
                                <span class="share-icon2">({{state.seniority.shareCount}})</span>
                            </span>
                            <span class="down-icon">
                                <span class="down-icon2">下载</span>
                            </span>
                            <span class="comment-icon">
                                <span class="comment-icon">({{state.seniority.commentCount}})</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="seniority-song-list">
                    <Music :music="state.seniority"></Music>
                    <Comment :comments="state.comments" :commentCount="state.commentCount" :hotcomments="state.hotcomments"></Comment>
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
            </div>
        </div>
        <div class="play-music-wrap" :class="state.translate">
            <div class="play-content">
                <VueAplayer v-if="state.music_info " :music='state.music_data'></VueAplayer>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import { Loading } from 'element-ui';
    import VueAplayer from 'vue-aplayer'
    import Music from '../common/MusicList'
    import Comment from '../common/comments'
    export default {
        mounted(){
            Loading.service({text:'加载中...'});
            //显示子菜单
            this.$store.commit('show_children',true)
            //默认请求数据
            this.$store.dispatch('featureList',{index:0,id:3,flag:1})
        },
        computed:{
            ...mapState({
                state:state=>state.seniority
            })
        },
        methods:{
            ...mapMutations(['SHOW_TOOLS','HIDE_TOOLS']),
            current_page(val){

                Loading.service({text:'加载中...'});
                val = val - 1
                this.$store.dispatch('currentpage',{val})
            },
            feature_list(index,id,flag){
                this.$store.dispatch('featureList',{index,id,flag})
            },
        },
        components:{
            VueAplayer,
            Music,
            Comment
        }
    }
</script>

<style scoped lang="less">
    .seniority-wrap{
        background-color: #f5f5f5;
        .seniority-content{
            width: 980px;
            margin: 0 auto;
            display: flex;
            border: 1px solid #d3d3d3;
            .seniority-list{
                width: 240px;
                border-right: 1px solid #d3d3d3;
                background-color: #f9f9f9;
                .seniority-box{
                    margin-top:20px;
                    h2{
                        font-size: 14px;
                        padding: 0 10px 12px 15px;
                    }
                }
            }
            .seniority-info{
                width: 740px;
                background-color: #fff;
            }
        }
    }
    .feature-list{
        li{
            display: flex;
            padding: 10px 0 10px 20px;
            .feature-img-wrap{
                position: relative;
                img{
                    display: block;
                    width: 40px;
                    height: 40px;
                }
                .shard{
                    display: block;
                    width: 40px;
                    height: 40px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    background: url("../../assets/hot_bgc.png") no-repeat;
                    background-position: -310px -330px;
                }
            }
            .feature-info{
                padding-left: 10px;
                flex: 1;
                display: flex;
                flex-direction: column;
                .feature-title{
                    font-size: 12px;
                    color: #333;
                }
                .update-time{
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }
    .active-bgc{
        background-color: #e6e6e6;
    }
    .seniority-info-head{
        display: flex;
        padding: 40px;
        .info-img-wrap{
            position: relative;
            width: 150px;
            height: 150px;
            border: 1px solid #ccc;
            padding: 3px;
            img{
                width: 100%;
                height: 100%;
            }
            .msk{
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: url("../../assets/hot_bgc.png") no-repeat;
                background-position: -230px -380px;
            }
        }
    }
    .info-content{
        flex: 1;
        padding-left: 20px;
        h2{
            font-size: 20px;
            line-height: 24px;
            color: #333;
            margin: 16px 0 4px;
            font-weight: normal;
        }
        .seniority-update{
            display: flex;
            align-items: center;
            margin-top: 9px;
            margin-bottom: 20px;
            .time-icon{
                display: inline-block;
                width: 13px;
                height: 13px;
                background: url("../../assets/icon1.png") no-repeat;
                background-position: -18px -682px;
            }
            .recently-update{
                font-size: 12px;
                color: #666;
                margin-left: 5px;
            }
            .day-update{
                font-size: 12px;
                color: #999;
                margin-left: 10px;
            }
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
    .seniority-song-list{
        width: 100%;
        box-sizing: border-box;
        padding: 0 30px 40px 40px;

    }

    .paging-wrap{
        display: flex;
        justify-content: center;
        margin: 20px 0;
    }
    .play-music-wrap{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        /*height: 53px;*/
        /*background: url("../../assets/playbar.png");*/
        /*background-position:  0 0;*/
        /*background-repeat: repeat-x;*/
        background: rgba(0,0,0,.9);
        /*transform: translateY(90%);*/
        transition: all .5s linear;
        &:hover{
            transform: translateY(0%);
        }
    }
    .play-content{
        width: 980px;
        height: 100%;
        margin: 0 auto;
    }
    .translate{
        transform: translateY(0%);
    }
    .translate2{
        transform: translateY(90%);
    }

</style>