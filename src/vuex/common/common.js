import axios from 'axios'
import * as types from "../seniority/types";
import {Notification} from "element-ui";
const URL  = 'http://localhost:3000'
export default {
    state : {
        music_info:{},
        music_data:{},
        translate : 'translate',
        state : false,
        comment_content:'',
        search_v : '',
        music_list:[],
        index : 0,
        songs : []
    },
    mutations : {
        play_music:(state,{data,index})=>{
            state.music_info.result = data
            state.index = index
            console.log(state.music_info)
            state.translate = 'translate'
            if (state.music_info.artists){
                state.music_data = {
                    title : state.music_info.name,
                    author : state.music_info.artists[0].name,
                    src : data.url,
                    pic : state.music_info.artists[0].img1v1Url
                }
            } else {
                state.music_data = {
                    title : state.music_info.name,
                    author : state.music_info.ar[0].name,
                    src : data.url,
                    pic : state.music_info.al.picUrl
                }
            }

            setTimeout(()=>{
                state.translate = 'translate2'
            },2000)
        },
        comment_content:(state,{val})=>{
            state.comment_content = val
        },
        c_submit:(state)=>{
            var comment_content = state.comment_content.replace(/(^\s*)|(\s*$)/g, "")
            if (!comment_content) {
                Notification({
                    title : '请输入内容',
                    type : 'error',
                    duration : '2000'
                })
            }
        },
        disabled:(state)=>{
            Notification({
                title : '暂不可用',
                type : 'error',
                duration : '2000'
            })
        },
        search:(state,{data})=>{
            state.music_list = data
            state.songs = data
        },
        change_text:(state,{val})=>{
            state.search_v = val
        }
    },
    actions : {
        play_music:({commit},{id,index})=>{
            axios(`${URL}/music/url?id=${id}`)
                .then(res=>{
                    commit('play_music',{data:res.data.data[0],index})
                })
        },
        search:({commit},{keywords})=>{
            axios(`${URL}/search?keywords=${keywords}`)
                .then(res=>{
                    commit('search',{data:res.data.result})
                })
        }
    }
}