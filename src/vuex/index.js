import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import head from './head/head'
import recommend from './recommend/recommend'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        head,
        recommend
    }
})