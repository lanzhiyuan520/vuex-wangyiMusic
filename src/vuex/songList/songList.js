import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        songdetail:{},
        comments:[],
        hotcomments:[],
        commentCount:0,
        currentPageNum : 0
    },
    mutations:{
        songDetail:(state,{data})=>{
            Loading.service().close();
            state.songdetail = data
            state.commentCount = data.commentCount
        },
        songComments:(state,{data})=>{
            state.comments = data.comments
            state.hotcomments = data.hotComments
            Loading.service().close();
        }
    },
    actions:{
        song_detail:({commit},{id})=>{
            axios(`${URL}/playlist/detail?id=${id}`)
                .then(res=>{
                    commit('songDetail',{data:res.data.playlist})
                })
        },
        song_comments:({commit},{id,offset})=>{
            axios(`${URL}/comment/playlist?id=${id}&offset=${(offset-1)*20}&limit=20`)
                .then(res=>{
                    commit('songComments',{data:res.data})
                })
        }
    }
}