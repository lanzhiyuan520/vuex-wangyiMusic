import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import MyMusic from '../components/mymusic/myMusic'
import Recommend from '../components/recommend/recommend'
import Seniority from '../components/seniority/seniority'
import Musiclist from '../components/musiclist/musiclist'
import Newsong from '../components/newsong/newsong'
import SongList from '../components/songList/songList'
import Album from '../components/album/album'
import Play_mv from '../components/playmv/playmv'
import Search from '../components/search/search'
Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass: 'active',
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
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
      },
      {
          path : '/playmv',
          component:Play_mv
      },
      {
          path:'/search',
          component:Search
      }
  ]
})
