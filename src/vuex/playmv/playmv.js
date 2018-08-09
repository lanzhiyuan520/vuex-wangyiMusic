import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        playerOptions : {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
                type: "",
                src: "" //url地址
            }],
            poster: "", //你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true  //全屏按钮
            }
        },
        article_name : '',
        mv_name : '',
        hotcomments:[],
        comments:[],
        commentCount : 0,
        currentPageNum : 1,
        video_c : '',
        video_c2 : ''
    },
    mutations : {
        mvdata:(state,{data})=>{
            var arr = []
            var result = ''
            state.article_name = data.artistName
            state.mv_name = data.name
            state.playerOptions.poster = data.cover
            Object.keys(data.brs).forEach((item,index)=>{
                arr.push(parseInt(item))
            })
            result = Math.max(...arr)
            state.playerOptions.sources[0].src = data.brs[result]
            console.log(state.playerOptions)
        },
        mvcomments:(state,{data})=>{
            state.comments = data.comments
            state.commentCount = data.total
            Loading.service().close();
        },
        video_top:(state,{flag})=>{
            if (flag){
                state.video_c = 'video-box'
                state.video_c2 = 'video-box2'
            }else{
                state.video_c = ''
                state.video_c2 = ''
            }

        }
    },
    actions : {
        mv_data:({commit},{id})=>{
            axios(`${URL}/mv?mvid=${id}`)
                .then(res=>{
                    commit('mvdata',{data:res.data.data})
                })
        },
        mv_comments:({commit},{id,offset})=>{
            axios(`${URL}/comment/mv?id=${id}&offset=${(offset-1)*20}&limit=20`)
                .then(res=>{
                    commit('mvcomments',{data:res.data})
                })
        }
    }
}