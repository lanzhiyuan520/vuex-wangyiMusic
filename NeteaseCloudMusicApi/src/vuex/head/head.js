export default {
    state : {
        head_list:[
            {
                title:'发现音乐',
                path:'/index/recommend',
            },
            {
                title:'我的音乐',
                path:'/index/myMusic',
            },
            {
                title:'朋友',
                path:'/index/friends',
            },
            {
                title:'商城',
                path:'/index/store',
            },
            {
                title:'音乐人',
                path:'/index/musicpeople',
            },
            {
                title:'下载客户端',
                path:'/index/download',
            }
         ],
        children_nav:[
            {
                title:'推荐',
                path:'/index/recommend'
            },
            {
                title:'排行榜',
                path:'/index/seniority'
            },
            {
                title:'歌单',
                path:'/index/musiclist'
            },
            {
                title:'歌手',
                path:'/index/singer'
            }
        ],
        children_show:false,
        children_active : 0,
        parent_active : 0
    },
    mutations:{
        show_children:(state,status)=>{
            state.children_show = status
        },
        change_tab:(state,index)=>{
            state.children_active = index
        },
        change_parent_tab:(state,index)=>{
            state.parent_active = index
        }
    },
    getters:{

    },
    actions:{

    }
}