import axios from 'axios'
const URL  = 'http://localhost:3000'
import { Loading ,Notification} from 'element-ui';
import store from '../index'
export default {
    state : {
        checked : false,
        phone : null,
        pass : null,
        hint : '',
        login:false,
        state : false,
        login_text : '登录'
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
            localStorage.setItem('userInfo',JSON.stringify(state.login))
            if (state.checked) {
                var pass = window.btoa(state.pass)
                var data = {
                    phone : state.phone,
                    pass
                }
                localStorage.setItem('login',JSON.stringify(data))
            }
            state.login_text = '已登录'
            store.dispatch('my_music_list',{id:data.account.id})
        },
        loginState:(state,{flag})=>{
            if (flag){
                state.state = true
            }else{
                state.state = false
            }
        },
        quit_login:(state)=>{
            state.login = false
            state.login_text = '登录'
            localStorage.removeItem('login')
            localStorage.removeItem('userInfo')
            Notification({
                title : ' 退出成功',
                type : 'success',
                duration : '2000'
            })
        },
        change_login:(state)=>{
            state.login = false
            state.login_text = '登录'
            localStorage.removeItem('login')
            localStorage.removeItem('userInfo')
            state.state = true
        }
    },
    actions : {
        login:({commit,state})=>{
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
                    console.log(res)
                    if (res.data.code == '200'){
                        Notification({
                            title : ' 登录成功',
                            type : 'success',
                            duration : '2000'
                        })
                        commit('loginState',{flag:0})
                        commit('login_success',{data:res.data})
                    } else {
                        Notification({
                            title : res.data.msg,
                            type : 'error',
                            duration : '2000'
                        })
                    }
                })
        }
    }
}