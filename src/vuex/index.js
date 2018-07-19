import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import head from './head/head'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        home,
        head
    }
})