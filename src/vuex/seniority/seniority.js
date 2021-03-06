import * as types from './types'
import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
import store from '../index'
export default {
    state : {
        seniority_list:[
            {
                img:'http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=40y40',
                title:'云音乐飙升榜',
                update_time : '每天更新',
                id:3
            },
            {
                img:'http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=40y40',
                title:'云音乐新歌榜',
                update_time : '每天更新',
                id : 0
            },
            {
                img:'http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=40y40',
                title:'网易原创歌曲榜',
                update_time : '刚刚更新',
                id :2
            },
            {
                img:'http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg?param=40y40',
                title:'云音乐热歌榜',
                update_time : '刚刚更新',
                id :1
            }
        ],
        global_seniority_list:[
            {
                img:'http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg?param=40y40',
                title:'云音乐电音榜',
                update_time : '每周五更新',
                id :4
            },
            {
                img:'http://p1.music.126.net/RChr5NydlXafIV1GVEHJdg==/19073228207465342.jpg?param=40y40',
                title:'云音乐嘻哈榜',
                update_time : '每周五更新',
                id :23
            },
            {
                img:'http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg?param=40y40',
                title:'云音乐ACG音乐榜',
                update_time : '每周四更新',
                id :22
            },
            {
                img:'http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg?param=40y40',
                title:'UK排行榜周榜',
                update_time : '每周一更新',
                id :5
            },
            {
                img:'http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg?param=40y40',
                title:'美国Billboard周榜',
                update_time : '每周三更新',
                id :6
            },
            {
                img:'http://p1.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg?param=40y40',
                title:'Beatport全球电子舞曲榜',
                update_time : '每周四更新',
                id :21
            },
            {
                img:'http://p1.music.126.net/83pU_bx5Cz0NlcTq-P3R3g==/18588343581028558.jpg?param=40y40',
                title:'iTunes榜',
                update_time : '每周一更新',
                id :8
            },
            {
                img:'http://p1.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg?param=40y40',
                title:'日本Oricon周榜',
                update_time : '每周一更新',
                id :10
            },
            {
                img:'http://p1.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg?param=40y40',
                title:'Hit FM Top榜',
                update_time : '每周一更新',
                id :9
            },
            {
                img:'http://p1.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg?param=40y40',
                title:'台湾Hito排行榜',
                update_time : '每周一更新',
                id :20
            },
            {
                img:'http://p1.music.126.net/JPh-zekmt0sW2Z3TZMsGzA==/18967675090783713.jpg?param=40y40',
                title:'中国TOP排行榜（港台榜）',
                update_time : '每周一更新',
                id :14
            },
            {
                img:'http://p1.music.126.net/2klOtThpDQ0CMhOy5AOzSg==/18878614648932971.jpg?param=40y40',
                title:'中国TOP排行榜（内地榜）',
                update_time : '每周一更新',
                id :15
            },
            {
                img:'http://p1.music.126.net/YQsr07nkdkOyZrlAkf0SHA==/18976471183805915.jpg?param=40y40',
                title:'香港电台中文歌曲龙虎榜',
                update_time : '每周五更新',
                id :16
            },
            {
                img:'http://p1.music.126.net/_nwkQTFtOdAjFvOI8Wg7Tg==/18922595114302109.jpg?param=40y40',
                title:'中国嘻哈榜',
                update_time : '每周五更新',
                id :18
            }
        ],
        active_seniority_num : 0,
        activeBgc:'active-bgc',
        activeBgc2:'',
        seniority:{},
        tools:false,
        comments:[],
        hotcomments:[],
        song_id: null,
        seniority_id:null,
        offset : 0,
        flag:null,
        index:null,
        commentCount:0,
        currentPageNum:1,
        music_info:null,
        music_data : {},
        translate : 'translate'
    },
    mutations : {
        [types.FEATURELIST]:(state,{index,id,flag,data})=>{
            console.log(data)
            store.state.common.songs = data.tracks
            state.song_id = data.id
            state.seniority_id = id
            state.flag = flag
            state.index = index
            state.commentCount = data.commentCount
            state.offset = 0
            state.currentPageNum = 1
            if (flag == 1){
                state.active_seniority_num = index
                state.activeBgc2 = ''
                state.activeBgc = 'active-bgc'
            }else{
                state.active_seniority_num = index
                state.activeBgc = ''
                state.activeBgc2 = 'active-bgc'
            }
            state.seniority = data
            axios(`${URL}/comment/playlist?id=${state.song_id}&offset=${state.offset}&limit=20`)
                .then(res=>{
                    state.comments = res.data.comments
                    state.hotcomments = res.data.hotComments
                })

        },
        [types.SHOW_TOOLS]:state=>{
            state.tools = true
        },
        [types.HIDE_TOOLS]:state=>{
            state.tools = false
        },
        [types.CURRENTPAGE]:(state,{val})=>{
            state.offset = val
            state.currentPageNum = val+1
            axios(`${URL}/comment/playlist?id=${state.song_id}&offset=${(state.offset)*20}&limit=20`)
                .then(res=>{
                    Loading.service().close();
                    state.comments = res.data.comments
                })
        },
        [types.PLAY_MUSIC]:(state,data)=>{
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
        featureList:({commit},{index,id,flag})=>{
            axios(`${URL}/top/list?idx=${id}`)
                .then(res=>{
                    Loading.service().close();
                    commit(types.FEATURELIST,{index,id,flag,data:res.data.playlist})
                })
        },
        currentpage:({commit},{val})=>{
            commit(types.CURRENTPAGE,{val})
        },
        playMusic:({commit},{id})=>{
            axios(`${URL}/music/url?id=${id}`)
                .then(res=>{
                    commit(types.PLAY_MUSIC,res.data.data[0])
                })
        },
        collect:({commit},{id,flag})=>{
            console.log(id,flag);
            axios(`${URL}/playlist/subscribe?t=${flag}&id=${id}`)
                .then(res=>{
                    console.log(res)
                })
        }
    }
}