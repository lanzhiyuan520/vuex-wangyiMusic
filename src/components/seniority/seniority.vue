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
                        <img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150">
                        <div class="msk"></div>
                    </div>
                    <div class="info-content">
                        <h2>云音乐飙升榜</h2>
                        <div class="seniority-update">
                            <span class="time-icon"></span>
                            <span class="recently-update">最近更新:07月26日</span>
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
                                <span class="collect-icon2">(1111)</span>
                            </span>
                            <span class="share-icon">
                                <span class="share-icon2">(11111)</span>
                            </span>
                            <span class="down-icon"></span>
                            <span class="comment-icon"></span>
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
            ...mapMutations([]),
            feature_list(index,id,flag){
                this.$store.dispatch('featureList',{index,id,flag})
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
        .play-icon{
            display: inline-block;
            height: 31px;
            background: url("../../assets/icon3.png") no-repeat;
            background-position: right -428px;
            .play-icon2{
                display: inline-flex;
                align-items: center;
                background: url("../../assets/icon3.png") no-repeat;
                background-position: 0 -387px;
                color: #fff;
                font-size: 12px;
                padding: 0 7px 0 8px;
                line-height: 31px;
                .play-icon3{
                    display: inline-block;
                    margin: 0 2px 2px 0;
                    width: 20px;
                    height: 18px;
                    background: url("../../assets/icon3.png") no-repeat;
                    background-position: 0 -1622px;
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
            }
        }
    }
</style>