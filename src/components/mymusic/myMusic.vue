<template>
    <div class="my-music">
        <div class="no-login" v-if="!this.$store.state.login.login">
            <div class="no-login-content">
                <div class="empty"></div>
                <div class="btn" @click="login_state(1)"></div>
            </div>
        </div>
        <div class="login" v-if="this.$store.state.login.login">已登录</div>
        <Login v-if="state.state"></Login>
    </div>
</template>

<script>
    import Login from '../common/login'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        name: "my-music",
        mounted(){
            this.$store.commit('show_children',false)
            this.$store.commit('change_parent_tab',1)
        },
        computed:{
            ...mapState({
                state:state=>state.mymusic
            })
        },
        components:{
            Login
        },
        methods:{
            login_state(flag){
                this.$store.commit('loginState',{flag})
            }
        }
    }
</script>

<style scoped lang="less">
    .my-music{
        background-color: #f5f5f5;
    }
    .no-login{
        width: 980px;
        background: #fff;
        border: 1px solid #d3d3d3;
        margin: 0 auto;
        min-height: 700px;
    }
    .no-login-content{
        width: 807px;
        height: 268px;
        margin: 0 auto 0;
        padding-top: 104px;
        background: url("../../assets/mymusic.png") no-repeat;
        background-position: 0 104px;
    }
    .empty{
        width: 100%;
        height: 100px;
    }
    .btn{
        width: 167px;
        height: 45px;
        margin: 102px 0 0 482px;
        background: url("../../assets/mymusic.png") no-repeat;
        background-position: 0 9999px;
        &:hover{
            background-position: 0 -278px;
        }
    }
</style>