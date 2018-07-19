
import * as types from './types'
export default {
    state : {
        count : 111
    },

    mutations : {
        [types.INCREMENT](state) {
            state.count++
        },
        reduce(state){
            state.count--
        }
    },

    getters : {
        test : state => state.count
    },

    actions : {
        reduce({commit}){
            commit('reduce')
        }
    }
}

