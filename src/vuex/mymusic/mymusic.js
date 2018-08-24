import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
import store from '../index'
export default {
    state : {
        state:false,
        h : 0,
        playlist:[],
        my_list:[],
        collect_list:[],
        activeNames: ['1'],
        my_musicList:{}
    },
    mutations : {
        d_height:state=>{
            state.h = document.documentElement.clientHeight
        },
        my_music_list:(state,{data})=>{
            state.playlist = data
            state.my_list = []
            state.collect_list = []
            data.map((item,index)=>{
                if (!item.creator.userType){
                    state.my_list.push(item)
                }else{
                    state.collect_list.push(item)
                }
            })
            store.dispatch('MusicList',{id:state.my_list[0].id})
        },
        music_list:(state,{data})=>{
           state.my_musicList = data
        }
    },
    actions : {
        my_music_list:({commit},{id})=>{
             axios(`${URL}/user/playlist?uid=${id}`)
                 .then(res=>{
                     console.log(res)
                     commit('my_music_list',{data:res.data.playlist})
                 })
        },
        MusicList:({commit},{id})=>{
            console.log(id)
            axios(`${URL}/playlist/detail?id=${id}`)
                .then(res=>{
                    console.log(res)
                    commit('music_list',{data:res.data.playlist})
                })
        }
    }
}