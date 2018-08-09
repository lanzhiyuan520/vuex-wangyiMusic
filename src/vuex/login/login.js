import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading } from 'element-ui';
export default {
    state : {
        checked : false,
        phone : null,
        pass : null,
        hint : '',
        login:false
    },
    mutations : {
        change_phone:(state,val)=>{
            state.phone = val
        },
        change_pass:(state,val)=>{
            state.pass = val
        },
        clear_text:(state)=>{
            state.phone = ''
            state.pass = ''
        },
        login:(state,{flag})=>{
            if (flag == 1){
                state.hint = '请输入手机号'
            }else if(flag == 2){
                state.hint = '请输入正确手机号'
            }else if(flag == 3){
                state.hint = '请输入密码'
            }else{
                state.hint = ''
            }
        },
        change_checkout:(state,{val})=>{
            state.checked = val
        },
        login_success:(state,{data})=>{
            state.login = data
        }
    },
    actions : {
        login:({commit,state})=>{
            console.log(111)
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if (!state.phone){
                commit('login',{flag:1})
                return
            }
            if (!myreg.test(state.phone)){
                commit('login',{flag:2})
                return
            }
            if (!state.pass){
                commit('login',{flag:3})
                return
            }
            commit('login',{flag:4})
            axios(`${URL}/login/cellphone?phone=${state.phone}&password=${state.pass}`)
                .then(res=>{
                    commit('loginState',{flag:0})
                    commit('login_success',{data:res.data})
                })
        }
    }
}