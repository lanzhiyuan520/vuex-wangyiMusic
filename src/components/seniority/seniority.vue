<template>
    <div class="seniority-wrap">
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
                    <div class="seniority-info-title">
                        <div class="seniority-info-title-left">
                            <h3>歌曲列表</h3>
                            <span class="song-num">{{state.seniority.trackCount}}首歌</span>
                        </div>
                        <div class="seniority-info-title-right">
                            <span class="play-text">播放：</span>
                            <span class="play-num">{{state.seniority.playCount}}</span>
                            <span class="play-text">次</span>
                        </div>
                    </div>
                    <div class="seniority-song-content">
                        <div class="seniority-title-box">
                            <div class="empty-box"></div>
                            <div class="title-box">
                                <div class="title-text">标题</div>
                            </div>
                            <div class="duration-box">
                                <div class="duration-text">时长</div>
                            </div>
                            <div class="singer-box">
                                <div class="singer-text">歌手</div>
                            </div>
                        </div>
                        <ul class="seniority-list-box">
                            <li v-for="(item,index) in state.seniority.tracks">
                                <div class="song-index-wrap">
                                    <span class="song-index">{{index+1}}</span>
                                    <div class="song-icon-wrap">
                                        <span class="song-new"></span>
                                    </div>
                                </div>
                                <div class="song-play-box">
                                    <div class="play-icon"></div>
                                    <div class="play-text">{{item.name}}</div>
                                    <div class="mv-icon" v-if="item.mv!=0"></div>
                                </div>
                                <div class="song-duration-box">
                                    <span class="song-duration-text">{{item.dt | time}}</span>
                                    <div class="tools-wrap" style="display: none">
                                        <span class="add-icon"></span>
                                        <span class="collect-icon"></span>
                                        <span class="share-icon"></span>
                                        <span class="down-icon"></span>
                                    </div>
                                </div>
                                <div class="singer-box">
                                    <span>{{item.ar[0].name}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="seniority-comments-list-wrap">
                        <div class="seniority-info-title">
                            <div class="seniority-info-title-left">
                                <h3>评论</h3>
                                <div class="comments-num-wrap">
                                    共23233213评论
                                </div>
                            </div>
                        </div>
                        <div class="comment-box">
                            <div class="comment-content-wrap">
                                <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50" class="comment-icon" />
                                <textarea class="comment-content" placeholder="评论"></textarea>
                            </div>
                            <div class="comment-btn-wrap">
                                <div class="comment-btn">评论</div>
                            </div>
                        </div>
                        <div class="comment-item-wrap">
                            <div class="comment-title" v-if="state.hotcomments.length != 0">精彩评论</div>
                            <div class="comment-item" v-if="state.hotcomments.length != 0" v-for="(item,index) in state.hotcomments" :key="item.id">
                                <div class="user-img-wrap">
                                    <img :src="item.user.avatarUrl">
                                </div>
                                <div class="comment">
                                    <div class="comment-text-wrap">
                                        <span class="user-name">{{item.user.nickname}}:</span>
                                        <span class="user-content">{{item.content}}</span>
                                    </div>
                                    <div class="like">
                                        <div class="comment-time">asda</div>
                                        <div class="like-wrap">
                                            <span class="like-icon"></span>
                                            <span class="like-num">（{{item.likedCount}}）</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="comment-title" style="margin-top: 30px">最新评论</div>
                            <div class="comment-item" v-for="(item,index) in state.comments" :key="index">
                                <div class="user-img-wrap">
                                    <img :src="item.user.avatarUrl">
                                </div>
                                <div class="comment">
                                    <div class="comment-text-wrap">
                                        <span class="user-name">{{item.user.nickname}}:</span>
                                        <span class="user-content">{{item.content}}</span>
                                    </div>
                                    <div class="like">
                                        <div class="comment-time">asda</div>
                                        <div class="like-wrap">
                                            <span class="like-icon"></span>
                                            <span class="like-num">（{{item.likedCount}}）</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import { Loading } from 'element-ui';
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
            feature_list(index,id,flag){
                this.$store.dispatch('featureList',{index,id,flag})
                    .then(res=>{
                        console.log('ssss')
                    })
            }
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
        .seniority-info-title{
            height: 33px;
            border-bottom: 2px solid #c20c0c;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .seniority-info-title-left{
                display: flex;
                align-items: center;
                h3{
                    font-size: 20px;
                    line-height: 20px;
                }
                .song-num{
                    color: #666;
                    font-size: 12px;
                    margin-left: 15px;
                    margin-top: 5px;
                }
            }
            .seniority-info-title-right{
                .play-text{
                    font-size: 12px;
                    color: #666;
                }
                .play-num{
                    font-size: 13px;
                    font-weight: bold;
                    color: #c20c0c;
                }
            }
        }
    }
    .seniority-song-content{
        border: 1px solid #d9d9d9;
        .seniority-title-box{
            display: flex;
            .empty-box{
                width: 77px;
                height: 38px;
                background: url("../../assets/table.png");
                background-color: #f7f7f7;
                background-position: 0 0;
                background-repeat: repeat-x;
            }
            .title-box{
                height: 38px;
                background-color: #f7f7f7;
                background-position: 0 0;
                background: url("../../assets/table.png") no-repeat;
                background-repeat: repeat-x;
                .title-text{
                    height: 18px;
                    width: 387px;
                    font-size: 12px;
                    font-weight: normal;
                    color: #666;
                    line-height: 18px;
                    padding: 8px 10px 8px 10px;
                    background: url("../../assets/table.png") no-repeat;
                    background-position: 0 -43px;
                }
            }
            .duration-box{
                width: 91px;
                height: 38px;
                background-color: #f7f7f7;
                background-position: 0 0;
                background: url("../../assets/table.png");
                background-repeat: repeat-x;
                .duration-text{
                    height: 18px;
                    line-height: 18px;
                    padding: 8px 10px;
                    background: url("../../assets/table.png") no-repeat;
                    background-position: 0 -43px;
                    font-size: 12px;
                    color: #666;
                }
            }
            .singer-box{
                width: 14%;
                height: 38px;
                background-color: #f7f7f7;
                background-position: 0 0;
                background: url("../../assets/table.png");
                background-repeat: repeat-x;
                .singer-text{
                    height: 18px;
                    line-height: 18px;
                    padding: 8px 10px;
                    background: url("../../assets/table.png") no-repeat;
                    background-position: 0 -43px;
                    font-size: 12px;
                    color: #666;
                }
            }
        }
    }
    .seniority-list-box{
        li{
            display: flex;
            &:hover{
                .song-duration-text{
                    display: none;
                }
                .tools-wrap{
                    display: flex!important;
                }
            }
            .song-index-wrap{
                display: flex;
                padding: 6px 10px;
                .song-index{
                    display: inline-flex;
                    font-size: 12px;
                    width: 25px;
                    color: #999;
                }
                .song-icon-wrap{
                    width: 32px;
                    .song-new{
                        display: block;
                        width: 16px;
                        height: 17px;
                        margin: 0 auto;
                        background: url("../../assets/icon4.png") no-repeat;
                        background-position: -67px -283px;
                    }
                }
            }
            .song-play-box{
                display: flex;
                padding: 6px 10px;
                width: 387px;
                .play-icon{
                    width: 17px;
                    height: 17px;
                    margin-right: 8px;
                    background: url("../../assets/table.png") no-repeat;
                    background-position: 0 -103px;
                    &:hover{
                        background-position: 0 -128px;
                    }
                }
                .play-text{
                    max-width: 92%;
                    display: inline-block;
                    padding-right: 25px;
                    margin-right: -25px;
                    height: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 12px;
                    color: #333;
                }
                .mv-icon{
                    width: 23px;
                    height: 17px;
                    margin: 1px 0 0 0;
                    background: url("../../assets/table.png") no-repeat;
                    background-position: 0 -151px;
                    margin-left: 3px;
                }
            }
            .song-duration-box{
                display: flex;
                padding: 6px 10px;
                width: 70px;
                .song-duration-text{
                    font-size: 12px;
                    color: #333;
                }
            }
            .singer-box{
                display: flex;
                width: 70px;
                padding: 6px 10px;
                span{
                    display: block;
                    font-size: 12px;
                    color: #333;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            .tools-wrap{
                display: flex;
                .add-icon{
                    margin-top: 2px;
                    width: 13px;
                    height: 13px;
                    background: url("../../assets/icon4.png") no-repeat;
                    background-position: 0 -700px;
                    &:hover{
                        background-position: -22px -700px;
                    }
                }
                .collect-icon{
                    width: 18px;
                    height: 16px;
                    margin: 2px 0 0 4px;
                    overflow: hidden;
                    background: url("../../assets/table.png") no-repeat;
                    background-position: 0 -174px;
                    &:hover{
                        background-position: -20px -174px;
                    }
                }
                .share-icon{
                    width: 18px;
                    height: 16px;
                    margin: 2px 0 0 4px;
                    background: url("../../assets/table.png") no-repeat;
                    background-position: 0 -195px;
                    &:hover{
                        background-position: -20px -195px;
                    }
                }
                .down-icon{
                    width: 18px;
                    height: 16px;
                    margin: 2px 0 0 4px;
                    overflow: hidden;
                    background: url("../../assets/table.png") no-repeat;
                    background-position: -81px -174px;
                    &:hover{
                        background-position: -104px -174px;
                    }
                }
            }
        }
    }
    .seniority-comments-list-wrap{
        margin-top: 40px;
    }
    .comments-num-wrap{
        font-size: 12px;
        color: #666;
        margin-left: 30px;
        margin-top: 10px;
    }
    .comment-box{
        .comment-content-wrap{
            display: flex;
            margin-top: 20px;
            .comment-icon{
                width: 50px;
                height: 50px;
            }
            .comment-content{
                display: block;
                width: 100% !important;
                flex: 1;
                height: 50px;
                outline: none;
                border: 1px solid #cdcdcd;
                resize: none;
                overflow: auto;
                font-size: 12px;
                margin-left: 10px!important;
                padding: 5px 6px 6px;
            }
        }
    }
    .comment-btn-wrap{
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        .comment-btn{
            width: 46px;
            height: 25px;
            background: url("../../assets/icon2.png");
            background-position: -84px -64px;
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 25px;
        }
    }
    .comment-title{
        height: 20px;
        border-bottom: 1px solid #cfcfcf;
        color: #333;
        font-size: 12px;
        padding-bottom: 2px;
    }
    .user-img-wrap{
        img{
            width: 50px;
            height: 50px;
        }
    }
    .comment-item{
        padding: 15px 0;
        border-bottom: 1px dotted #ccc;
        display: flex;
        .comment-text-wrap{
            flex: 1;
            .user-name{
                font-size: 12px;
                color: #0c73c2;
            }
            .user-content{
                font-size: 12px;
            }
        }
    }
    .like{
        display: flex;
        margin-top: 15px;
        justify-content: space-between;
        .like-wrap{
            display: flex;
            margin-right: 10px;
            .like-num{
                font-size: 12px;
                color: #333;
            }
            .like-icon{
                display: inline-flex;
                width: 15px;
                height: 14px;
                background: url("../../assets/icon5.png") no-repeat;
                background-position: -150px 0;
            }
        }
        .comment-time{
            font-size: 12px;
            color: #999;
        }
    }

    .comment{
        width: 100%;
        padding-left: 10px;
    }
</style>