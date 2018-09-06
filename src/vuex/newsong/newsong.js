import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        total : null,
        song_list : [],
        currentPageNum : 1
    },
    mutations:{
        hotSong:(state,data)=>{
            console.log(data)
            state.total = parseInt(data.total)
            state.song_list = data.albums
            Loading.service().close();
            window.scrollTo(0,0)
        }
    },
    actions:{
        hot_song:({commit},{offset})=>{
            Loading.service({text:'加载中...'});
            axios(`${URL}/top/album?offset=${(offset-1)*35}&limit=35`)
                .then(res=>{
                    commit('hotSong',res.data)
                })
        }
    }
}