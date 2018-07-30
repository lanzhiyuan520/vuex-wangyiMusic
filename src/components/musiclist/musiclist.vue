<template>
    <div class="music-list-wrap">
        <div class="music-list-content">
            <div class="music-head-wrap">
                <div class="music-title-text">{{state.title}}</div>
                <div class="music-menu-list">
                    <el-dropdown trigger="click" @command="change_menu">
                        <el-button type="primary">
                            选择分类<i class="el-icon-arrow-down el-icon--right"></i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(item,index) in state.classify"  :command="item.name" :key="index">{{item.name}}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <ul class="music-list">
                <li v-for="(item,index) in state.play_lists" :key="index">
                    <div class="img-wrap">
                        <img :src="item.coverImgUrl">
                        <div class="mask">
                            <span class="listen-icon"></span>
                            <span class="listen-num">{{item.playCount}}</span>
                            <span class="play-music"></span>
                        </div>
                    </div>
                    <p class="item-title">{{item.name}}</p>
                    <p class="item-name">{{item.creator.nickname}}</p>
                </li>
            </ul>
            <div class="paging-wrap">
                <el-pagination
                        background
                        layout="prev, pager, next"
                        :page-size="35"
                        :total="state.total"
                        @current-change="current_page"
                        :current-page.sync='state.currentPageNum'
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    import { Loading } from 'element-ui';
    export default {
        name: "musiclist",
        mounted(){
            Loading.service({text:'加载中...'});
            this.$store.commit('show_children',true)
            this.$store.state.head.children_active = 2
            this.$store.dispatch('music_list')
            this.$store.dispatch('change_list',{tag:'全部',offset:1})
        },
        computed:{
            ...mapState({
                state:state=>state.musicList
            })
        },
        methods:{
            current_page(val){
                this.change_menu(this.$store.state.musicList.title,val)
            },
            change_menu(command,offset){
                if (isNaN(offset)){
                    this.$store.state.musicList.currentPageNum = 1
                }
                this.$store.dispatch('change_list',{tag:command,offset:offset})
            }
        }
    }
</script>
<style lang="less">
    .el-button{
        padding: 7px 2px!important;
        background-color: #fff!important;
        color: #0c73c2!important;
    }
    .el-popper{
        top: 176px!important;
    }
</style>
<style scoped lang="less">
    .music-list-content{
        width: 980px;
        margin: 0 auto;
        border: 1px solid #d3d3d3;
        padding: 40px;
    }
    .music-head-wrap{
        width: 100%;
        height: 40px;
        border-bottom: 2px solid rgb(194, 12, 12);
        display: flex;
        align-items: center;
    }
    .music-title-text{
        color: rgb(51, 51, 51);
        font-size: 24px;
    }
    .music-menu-list{
        margin-left: 10px;
    }
    .music-list{
        margin: 30px 0 0 -50px;
        display: flex;
        flex-wrap: wrap;
        li{
            width: 140px;
            height: 188px;
            padding: 0 0 30px 50px;
            .img-wrap{
                position: relative;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                .mask{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 27px;
                    color:rgb(204, 204, 204);
                    display: flex;
                    align-items: center;
                    background: url("../../assets/hot_bgc.png") no-repeat;
                    background-position: 0 -537px;
                    .listen-icon{
                        display: inline-block;
                        width: 14px;
                        height: 11px;
                        background: url("../../assets/bgc.png") no-repeat;
                        background-position: 0 -23px;
                        margin-left: 10px;
                        margin-right: 5px;
                    }
                    .listen-num{
                        font-size: 12px;
                        color: #ccc;
                    }
                    .play-music{
                        position: absolute;
                        bottom: 4px;
                        right: 10px;
                        display: inline-block;
                        width: 16px;
                        height: 17px;
                        background: url("../../assets/bgc.png") no-repeat;
                        background-position: 0 0;
                        &:hover{
                            background-position: 0px -60px;
                        }
                    }
                }
            }
            .item-title{
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                overflow: hidden;
                font-size: 14px;
                color: #000;
            }
            .item-name{
                text-overflow: ellipsis;
                white-space: nowrap;
                word-wrap: normal;
                overflow: hidden;
                color: rgb(102, 102, 102);
                font-size: 12px;
            }
        }
    }
    .paging-wrap{
        display: flex;
        justify-content: center;
    }
</style>