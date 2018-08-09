import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        state:false
    },
    mutations : {
        loginState:(state,{flag})=>{
            if (flag){
                state.state = true
            }else{
                state.state = false
            }
        }
    },
    actions : {

    }
}