<template>
    <div>
        <div class="seniority-info-title">
            <div class="seniority-info-title-left">
                <h3>歌曲列表</h3>
                <span class="song-num">{{music.trackCount?music.trackCount:music.size}}首歌</span>
            </div>
            <div class="seniority-info-title-right">
                <span class="play-text">播放：</span>
                <span class="play-num">{{music.playCount?music.playCount:'暂无数据'}}</span>
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
                <li v-for="(item,index) in music.tracks" :class="index%2==0?'active-bgc2':''">
                    <div class="song-index-wrap">
                        <span class="song-index">{{index+1}}</span>
                        <div class="song-icon-wrap">
                            <span class="song-new"></span>
                        </div>
                    </div>
                    <div class="song-play-box">
                        <div class="play-icon" @click="play_music(item)"></div>
                        <div class="play-text">{{item.name}}</div>
                        <div class="mv-icon" v-if="item.mv!=0" @click="play_mv(item)"></div>
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
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        props:['music'],
        methods:{
            play_music(item){
                this.$store.state.seniority.music_info = item
                this.$store.dispatch('playMusic',{id:item.id})
            },
            play_mv(item){
                this.$router.push({
                    path:"/playmv",
                    query:{id:item.mv}
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../css/music";
</style>