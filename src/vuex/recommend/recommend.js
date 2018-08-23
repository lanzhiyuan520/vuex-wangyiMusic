import * as types from './types'
import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        banner_list:[],
        hot_list:[],
        new_music_list:[],
        soaring_list:[],
        new_sanking_list:[],
        original_sanking_list:[],
        enter_singer_list:[],
        login_text:'登录'
    },
    mutations:{
        [types.BANNER]:(state,data)=>{
            state.banner_list = data
            Loading.service().close();
        },
        [types.HOTLIST]:(state,data)=>{
            var result = data.slice(0,8)
            state.hot_list = result
        },
        [types.NEW_MUSIC_LIST]:(state,data)=>{
            var litter = []
            var more = []
            data.map((item,index)=>{
                if (index>=0 && index <5){
                    litter.push(item)
                }else{
                    more.push(item)
                }
            })
            state.new_music_list[0]=litter
            state.new_music_list[1]=more
        },
        [types.SOARING_RANKING]:(state,data)=> {
            state.soaring_list = []
            state.soaring_list.push(...data.tracks.slice(0, 10))
        },
        [types.NEW_RANKING]:(state,data)=>{
            state.new_sanking_list = []
            state.new_sanking_list.push(...data.tracks.slice(0, 10))
        },
        [types.ORIGINAL_SANKING]:(state,data)=>{
            state.original_sanking_list = []
            state.original_sanking_list.push(...data.tracks.slice(0, 10))
        },
        [types.ENTER_SINGER]:(state,data)=>{
            state.enter_singer_list = data
        }
    },
    getters:{

    },
    actions:{
        banner:({commit})=>{
            axios(`${URL}/banner`)
                .then(res=>{
                    setTimeout(()=>{
                        commit(types.BANNER,res.data.banners)
                    },500)
                })
        },
        hot_recommend:({commit})=>{
            axios(`${URL}/personalized`)
                .then(res=>{
                    commit(types.HOTLIST,res.data.result)
                })
        },
        new_music_list:({commit})=>{
            axios(`${URL}/top/album?offset=0&limit=10`)
                .then(res=>{
                    commit(types.NEW_MUSIC_LIST,res.data.albums)
                })
        },
        soaring_ranking:({commit})=>{
            axios(`${URL}/top/list?idx=3`)
                .then(res=>{
                    commit(types.SOARING_RANKING,res.data.playlist)
                })
        },
        new_ranking:({commit})=>{
            axios(`${URL}/top/list?idx=0`)
                .then(res=>{
                    commit(types.NEW_RANKING,res.data.playlist)
                })
        },
        original_sanking:({commit})=>{
            axios(`${URL}/top/list?idx=2`)
                .then(res=>{
                    commit(types.ORIGINAL_SANKING,res.data.playlist)
                })
        },
        enter_singer_list:({commit})=>{
            axios(`${URL}/artist/list?cat=5001&limit=5`)
                .then(res=>{
                    commit(types.ENTER_SINGER,res.data.artists)
                })
        }
    }
}