import axios from 'axios'
import * as types from "../seniority/types";
const URL  = 'http://localhost:3000'
export default {
    state : {
        music_info:{},
        music_data:{},
        translate : 'translate',
        state : false
    },
    mutations : {
        play_music:(state,{data})=>{
            state.music_info.result = data
            state.music_data = {
                title : state.music_info.name,
                author : state.music_info.ar[0].name,
                src : data.url,
                pic : state.music_info.al.picUrl
            }
            state.translate = 'translate'
            setTimeout(()=>{
                state.translate = 'translate2'
            },2000)
        }
    },
    actions : {
        play_music:({commit},{id})=>{
            axios(`${URL}/music/url?id=${id}`)
                .then(res=>{
                    commit('play_music',{data:res.data.data[0]})
                })
        }
    }
}