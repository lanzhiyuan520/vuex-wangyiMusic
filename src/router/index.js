import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import MyMusic from '../components/mymusic/myMusic'
import Friends from '../components/friends/friends'
import Store from '../components/store/store'
import musicPeople from '../components/musicperople/musicpeople'
import download from '../components/download/download'
import Recommend from '../components/recommend/recommend'
import Seniority from '../components/seniority/seniority'
import Singer from '../components/singer/singer'
import Musiclist from '../components/musiclist/musiclist'
import Newsong from '../components/newsong/newsong'
import SongList from '../components/songList/songList'
import Album from '../components/album/album'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass: 'active',
  routes: [
      {
          path:'/',
          redirect: '/index/recommend',

      },
    {
      path: '/index',
      component: Index,
      redirect: '/index/recommend',
      children:[
          {path:'myMusic',component:MyMusic},
          {path:'friends',component:Friends},
          {path:'store',component:Store},
          {path:'musicpeople',component:musicPeople},
          {path:'download',component:download},
          {path:'recommend',component:Recommend},
          {path:'seniority',component:Seniority},
          {path:'newsong',component:Newsong},
          {path:'musiclist',component:Musiclist},
      ]
    },
      {
          path : '/songlist',
          component:SongList
      },
      {
          path : '/album',
          component:Album
      }
  ]
})
