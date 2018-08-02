import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        total : '',
        song_list : []
    },
    mutations:{
        hotSong:(state,data)=>{
            state.total = data.total
            state.song_list = data.albums
        }
    },
    actions:{
        hot_song:({commit},{offset})=>{
            axios(`${URL}/top/album?offset=0&limit=35`)
                .then(res=>{
                    commit('hotSong',res.data)
                })
        }
    }
}