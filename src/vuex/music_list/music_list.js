import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        title : '全部',
        classify:[],
        play_lists:[],
        total : 0 ,
        offset : 0,
        currentPageNum:1
    },
    mutations :{
        musicList:(state,data)=>{
            state.classify = data
        },
        changeList:(state,{data,tag,total})=>{
            console.log(data)
            state.total = total
            state.title = tag
            state.play_lists = data
            Loading.service().close();
        }
    },
    actions:{
        music_list:({commit})=>{
            axios(`${URL}/playlist/catlist`)
                .then(res=>{
                    commit('musicList',res.data.sub)
                })
        },
        change_list:({commit},{tag,offset})=>{
            if (isNaN(offset)){
                offset = 1
            }
            axios(`${URL}/top/playlist?cat=${tag}&limit=35&offset=${(offset-1)*35}`)
                .then(res=>{
                    commit('changeList',{data:res.data.playlists,tag,total:res.data.total})
                })
        }
    }
}