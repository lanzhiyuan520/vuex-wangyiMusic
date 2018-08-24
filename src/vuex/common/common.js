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
        comment_content:''
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