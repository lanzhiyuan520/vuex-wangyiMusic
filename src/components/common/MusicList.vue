<template>
    <div>
        <div class="seniority-info-title">
            <div class="seniority-info-title-left">
                <h3>歌曲列表</h3>
                <span class="song-num" v-if="!flag">{{music.trackCount?music.trackCount:music.size}}首歌</span>
                <span class="song-num" v-if="flag && music.songs">{{music.songs.length?music.songs.length:'0'}}首歌</span>
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
            <ul class="seniority-list-box" v-if="!flag">
                <li v-for="(item,index) in music.tracks" :class="index%2==0?'active-bgc2':''">
                    <div class="song-index-wrap">
                        <span class="song-index">{{index+1}}</span>
                        <div class="song-icon-wrap">
                            <span class="song-new"></span>
                        </div>
                    </div>
                    <div class="song-play-box">
                        <div class="play-icon" @click="play_music(item,index)"></div>
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
            <ul class="seniority-list-box" v-if="flag">
                <li v-for="(item,index) in music.songs" :class="index%2==0?'active-bgc2':''">
                    <div class="song-index-wrap">
                        <span class="song-index">{{index+1}}</span>
                        <div class="song-icon-wrap">
                            <span class="song-new"></span>
                        </div>
                    </div>
                    <div class="song-play-box">
                        <div class="play-icon" @click="play_music(item,index)"></div>
                        <div class="play-text">{{item.name}}</div>
                        <div class="mv-icon" v-if="item.mvid!=0" @click="play_mv(item)"></div>
                    </div>
                    <div class="song-duration-box">
                        <span class="song-duration-text">{{item.duration | time}}</span>
                        <div class="tools-wrap" style="display: none">
                            <span class="add-icon"></span>
                            <span class="collect-icon"></span>
                            <span class="share-icon"></span>
                            <span class="down-icon"></span>
                        </div>
                    </div>
                    <div class="singer-box">
                        <span>{{item.artists[0].name}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        props:['music','flag'],
        mounted(){

        },
        methods:{
            play_music(item,index){
                // this.$store.state.seniority.music_info = item
                this.$store.state.common.music_info = item
                this.$store.dispatch('play_music',{id:item.id,index,item})
                // this.$store.dispatch('playMusic',{id:item.id})
            },
            play_mv(item){
                if (item.mv){
                    this.$router.push({
                        path:"/playmv",
                        query:{id:item.mv}
                    })
                } else {
                    this.$router.push({
                        path:"/playmv",
                        query:{id:item.mvid}
                    })
                }

            }
        }
    }
</script>

<style scoped lang="less">
    @import "../../css/music";
</style>