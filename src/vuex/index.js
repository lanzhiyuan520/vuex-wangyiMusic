import Vue from 'vue'
import Vuex from 'vuex'
import head from './head/head'
import recommend from './recommend/recommend'
import seniority from './seniority/seniority'
import musicList from './music_list/music_list'
import newsong from './newsong/newsong'
import songList from './songList/songList'
import album from './album/album'
import playmv from './playmv/playmv'
import mymusic from './mymusic/mymusic'
import login from './login/login'
import common from './common/common'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        head,
        recommend,
        seniority,
        musicList,
        newsong,
        songList,
        album,
        playmv,
        mymusic,
        login,
        common
    }
})