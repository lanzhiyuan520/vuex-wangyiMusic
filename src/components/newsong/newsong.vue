<template>
    <div class="new-song-wrap">
        <div class="new-song-content">
            <div class="new-song-list-wrap">
                <div class="new-song-title">全部新碟</div>
                <ul class="hot-song-list">
                    <li v-for="(item,index) in state.song_list" :key="index">
                        <div class="hot-list-wrap">
                            <img :src="item.picUrl">
                            <div class="mask"></div>
                        </div>
                        <p class="song-introduce">{{item.name}}</p>
                        <p class="singer-name">{{item.artist.name}}</p>
                    </li>
                </ul>
                <div class="paging-wrap">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="state.total"
                            :page-size="35"
                            @current-change="current_page"
                            :current-page.sync='state.currentPageNum'
                    >
                    </el-pagination>
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
            this.$store.commit('show_children',true)
            this.$store.state.head.children_active = 3
            this.$store.dispatch('hot_song',{offset:1})
        },
        computed:{
            ...mapState({
                state:state=>state.newsong
            }),
        },
        methods:{
            current_page(val){
                this.$store.dispatch('hot_song',{offset:val})
            }
        }
    }
</script>

<style scoped lang="less">
    .new-song-wrap{
        background: #f5f5f5;
    }
    .new-song-content{
        width: 980px;
        margin: 0 auto;
        border: 1px solid #d3d3d3;
        background-color: #fff;
    }
    .new-song-list-wrap{
        padding: 40px;
    }
    .new-song-title{
        height: 40px;
        font-size: 24px;
        border-bottom: 2px solid #c20c0c;
    }
    .hot-song-list{
        margin: 20px 0 0 -33px;
        display: flex;
        flex-wrap: wrap;
        li{
            padding-left: 33px;
            width: 153px;
            height: 178px;
            padding-bottom:30px;
            .hot-list-wrap{
                position: relative;
                width: 130px;
                height: 130px;
                img{
                    width: 100%;

                }
                .mask{
                    position: absolute;
                    width: 153px;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: url("../../assets/hot_bgc.png") no-repeat;
                    background-position: 0 -845px;
                }
            }
            .song-introduce{
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                font-size: 14px;
            }
            .singer-name{
                font-size: 12px;
                color: #666;
            }
        }
    }
    .paging-wrap{
        display: flex;
        justify-content: center;
    }
</style>