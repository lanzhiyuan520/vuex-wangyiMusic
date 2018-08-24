<template>
  <div id="app">
    <router-view/>
    <div class="play-music-wrap" :class="state.translate">
      <div class="play-content">
        <VueAplayer ref="au" autoplay v-if="state.music_info.result " :music='state.music_data' @ended="fun"></VueAplayer>
      </div>
    </div>
    <Login v-if="this.$store.state.login.state"></Login>
  </div>
</template>

<script>
import VueAplayer from 'vue-aplayer'
import {mapState} from 'vuex'
import Login from './components/common/login'
export default {
    mounted(){
        var data = JSON.parse(localStorage.getItem('login' || []))
        var userInfo = JSON.parse(localStorage.getItem('userInfo' || []))
        if (userInfo){
            // var pass = window.atob(data.pass)
            // this.$store.state.login.phone = data.phone
            // this.$store.state.login.pass = pass
            // this.$store.dispatch('login')
            this.$store.state.login.login = userInfo
            this.$store.state.login.login_text = '已登录'
        }
    },
    computed:{
        ...mapState({
            state:state=>state.common
        })
    },
    methods:{
        fun(){
            console.log(this.$refs.au)
            var index = this.$store.state.common.index
            console.log(this.$store.state.common.songs.songs)
            var id = this.$store.state.common.songs.songs[index+1].id
            console.log(id)
            this.$store.dispatch('play_music',{id,index:index+1})
        }
    },
    components:{
        VueAplayer,
        Login
    }
}
</script>

<style lang="less">
  .play-music-wrap{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,.9);
    transition: all .5s linear;
  &:hover{
     transform: translateY(0%);
   }
  }
  .play-content{
    width: 980px;
    height: 100%;
    margin: 0 auto;
  }
  .translate{
    transform: translateY(0%);
  }
  .translate2{
    transform: translateY(90%);
  }
  .seniority-info-title{
    height: 33px;
    border-bottom: 2px solid #c20c0c;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .seniority-info-title-left{
      display: flex;
      align-items: center;
      h3{
        font-size: 20px;
        line-height: 20px;
      }
      .song-num{
        color: #666;
        font-size: 12px;
        margin-left: 15px;
        margin-top: 5px;
      }
    }
    .seniority-info-title-right{
      .play-text{
        font-size: 12px;
        color: #666;
      }
      .play-num{
        font-size: 13px;
        font-weight: bold;
        color: #c20c0c;
      }
    }
  }
  .play-music-wrap{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0,0,0,.9);
    transition: all .5s linear;
    &:hover{
      transform: translateY(0%);
    }
  }
  .play-content{
    width: 980px;
    height: 100%;
    margin: 0 auto;
  }
  .translate{
    transform: translateY(0%);
  }
  .translate2{
    transform: translateY(90%);
  }
  .el-collapse-item__header{
    background: transparent;
    padding-left: 20px;
  }
  .el-collapse-item__content{
    padding-bottom: 0;
  }
</style>
