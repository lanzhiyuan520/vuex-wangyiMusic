import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        album:{},
        comments:[],
        hotcomments:[],
        total : 0,
        currentPageNum:1,
    },
    mutations:{
        ablumDetail:(state,{data})=>{
            state.album = data.album
            state.album.tracks = data.songs
        },
        albumComments:(state,{data})=>{
            console.log(data)
            state.comments = data.comments
            state.hotcomments = data.hotComments
            state.total = data.total
            Loading.service().close();
        }
    },
    actions:{
        ablum_detail:({commit},{id})=>{
            axios(`${URL}/album?id=${id}`)
                .then(res=>{
                    commit('ablumDetail',{data:res.data})
                })
        },
        album_comments:({commit},{id,offset})=>{
            axios(`${URL}/comment/album?id=${id}&offset=${(offset-1)*20}&limit=20`)
                .then(res=>{
                    commit('albumComments',{data:res.data})
                })
        }
    }
}