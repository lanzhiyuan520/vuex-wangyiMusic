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
                title:'商城',
                path:'https://music.163.com/store/product',
            },
            {
                title:'音乐人',
                path:'https://music.163.com/nmusician/web/index',
            },
            {
                title:'下载客户端',
                path:'https://music.163.com/#/download',
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
                title:'新碟上架',
                path:'/index/newsong'
            }
        ],
        children_show:false,
        children_active : 0,
        parent_active : 0,
        p : 'static',
        search_text : ''
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
        },
        change_text:(state,{val})=>{
            state.search_text = val
        }
    },
    getters:{

    },
    actions:{

    }
}