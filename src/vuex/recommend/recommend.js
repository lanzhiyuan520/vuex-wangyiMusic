import * as types from './types'
import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        banner_list:[],
        hot_list:[]
    },
    mutations:{
        [types.BANNER]:(state,data)=>{
            state.banner_list = data
            Loading.service().close();
        },
        [types.HOTLIST]:(state,data)=>{
            var result = data.slice(0,8)
            state.hot_list = result
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
        }
    }
}