<template>
    <div class="login-wrap" >
        <div class="login-title-wrap">
            <div class="login-text">手机号登录</div>
            <div class="close" @click="login_state(0)"></div>
        </div>
        <div class="login-content">
            <div class="login-box">
                <input type="text" placeholder="请输入手机号" class="phone" v-model="phone">
                <input type="password" placeholder="请输入密码" class="pass" v-model="pass">
                <div class="hint" v-if="state.hint">
                    <div class="hint-bgc"></div>
                    <div class="hint-text">{{state.hint}}</div>
                </div>
                <div class="checkout-box">
                    <el-checkbox v-model="state.checked" @change="change_checkout">自动登录</el-checkbox>
                </div>
                <div class="login-btn">
                    <i class="login-text-content" @click="login">登录</i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        computed:{
            ...mapState({
                state:state=>state.login
            }),
            phone:{
                get(){
                    return this.$store.state.login.phone
                },
                set(val){
                    this.$store.commit('change_phone',val)
                }
            },
            pass:{
                get(){
                    return this.$store.state.login.pass
                },
                set(val){
                    this.$store.commit('change_pass',val)
                }
            }
        },
        methods:{
            login_state(flag){
                this.$store.commit('loginState',{flag})
                this.$store.commit('clear_text')
            },
            login(){
                this.$store.dispatch('login')
            },
            change_checkout(val){
                this.$store.commit('change_checkout',{val})
            }
        }
    }
</script>

<style scoped lang="less">
    .login-wrap{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 9998;
        width: 530px;
        border-radius: 4px;
        box-shadow: 0 5px 16px rgba(0,0,0,0.8);
        border: none;
        height: 300px;
    }
    .login-title-wrap{
        box-sizing: border-box;
        width: 100%;
        height: 38px;
        display: flex;
        position: relative;
        z-index: 10;
        border-bottom: 1px solid #191919;
        border-radius: 4px 4px 0 0;
        background: #2d2d2d;
        align-items: center;
        padding: 0 18px;
        justify-content: space-between;
    }
    .login-text{
        font-size: 14px;
        color: #fff;
        font-weight: bold;
    }
    .close{
        width: 10px;
        height: 10px;
        background: url("../../assets/layer.png") no-repeat;
        background-position: 0 -95px;
    }
    .login-content{
        height: 275px;
        background-color: #fff;
        border: 1px solid #878787;
        border-radius: 0 0 4px 4px;
    }
    .login-box{
        padding: 30px 0 43px;
        width: 220px;
        margin: 0 auto;
    }
    .phone{
        width: 100%;
        height: 32px;
        padding-left: 10px;
        outline: none;
    }
    input{
        width: 100%;
        height: 32px;
        padding-left: 10px;
        outline: none;
    }
    .pass{
        margin-top: 10px;
    }
    .checkout-box{
        margin-top: 10px;
    }
    .login-btn{
        width: 215px;
        background: url("../../assets/icon3.png") no-repeat;
        background-position: right -428px;
        display: inline-block;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        text-align: center;
        margin-top: 20px;
        margin-left: 10px;
        &:hover{
            background-position: right -510px;
        }
    }
    .login-text-content{
        width: 180px;
        background: url("../../assets/icon3.png") no-repeat;
        background-position: 0 -387px;
        padding: 0 10px 0 20px;
        display: inline-block;
        height: 31px;
        line-height: 31px;
        overflow: hidden;
        text-align: center;
        color: #fff;
        font-size: 12px;
        &:hover{
            background-position: 0 -469px;
        }
    }
    .hint{
        display: flex;
        margin-top: 10px;
    }
    .hint-bgc{
        width: 14px;
        height: 14px;
        background: url("../../assets/icon1.png") no-repeat;
        background-position: -50px -270px;
        margin-right: 10px;
    }
    .hint-text{
        font-size: 12px;
        color: #e33232;
    }
</style>