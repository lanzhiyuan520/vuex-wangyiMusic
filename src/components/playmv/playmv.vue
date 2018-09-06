<template>
    <div>
        <Head></Head>
        <div class="play-mv-wrap">
            <div class="left">
                <div class="mv-title">
                    <div class="mv-icon"></div>
                    <h2>{{state.mv_name}}</h2>
                    <div class="mv-name">{{state.article_name}}</div>
                </div>
                <div class="video-wrap" :class="{'video-box':state.video_c ,'video-box2':state.video_c2}" ref="video">
                    <video-player  class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="state.playerOptions"
                        v-if="state.playerOptions.sources[0].src"
                    ></video-player>
                </div>
                <div class="comments">
                    <Comment :comments="state.comments" :commentCount="state.commentCount" :hotcomments="state.hotcomments"></Comment>
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
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import { Loading } from 'element-ui';
    import Comment from '../common/comments'
    import Head from '../header/head'
    export default {
        mounted(){
            window.addEventListener('scroll',this.handleScroll)
            document.body.scrollTop = 0
            Loading.service({text:'加载中...'});
            this.$store.state.head.children_active = 10
            this.mv_data(this.$route.query.id)
            this.$store.state.playmv.currentPageNum = 1
            this.$store.state.head.p = 'static'
        },
        computed:{
            ...mapState({
                state:state=>state.playmv
            })
        },
        methods:{
            mv_data(id){
                this.$store.dispatch('mv_data',{id})
                this.$store.dispatch('mv_comments',{id,offset:1})
            },
            current_page(val){
                Loading.service({text:'加载中...'});
                this.$store.dispatch('mv_comments',{id:this.$route.query.id,offset:val})
            },
            handleScroll(e){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > 156){
                    this.$store.commit('video_top',{flag:1})
                }else{
                    this.$store.commit('video_top',{flag:0})
                }
            }
        },
        components:{
            Head,
            Comment
        }
    }
</script>

<style scoped lang="less">
    .play-mv-wrap{
        width: 980px;
        border: 1px solid #d3d3d3;
        margin: 0 auto;
        display: flex;
    }
    .left{
        width: 710px;
        padding: 47px 30px 40px 39px;
    }
    .right{
        width: 270px;
        border-left: 1px solid #d3d3d3;
    }
    .mv-title{
        display: flex;
        align-items: center;
        h2{
            font-size: 24px;
            margin: 0 5px;
        }
        .mv-icon{
            width: 29px;
            height: 18px;
            background: url("../../assets/icon5.png") no-repeat;
            background-position: -230px -480px;
        }
        .mv-name{
            font-size: 12px;
            color: #0c73c2;
            margin-top: 5px;
        }
    }
    .video-wrap{
        margin-top: 5px;
        transition:all .5s linear;
    }
    .video-box{
        position: fixed;
        width: 617px;
        height: 370px;
    }
    .video-box2{
        transform: translate(100px,0);
        width: 30%;
        top: 0;
        right: 10%;

    }
    .paging-wrap{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
    }
</style>