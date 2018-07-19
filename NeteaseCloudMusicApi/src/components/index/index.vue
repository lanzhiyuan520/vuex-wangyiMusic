<template>
    <div>
        <Heads></Heads>
        <router-view></router-view>
    </div>
</template>

<script>
    import Heads from '../../components/header/head'
    export default {
        name: "index",
        mounted(){
            // if (this.$route.fullPath == '/index'){
            //     this.$store.commit('show_children')
            // }
        },
        components:{
            Heads
        }
    }
</script>

<style scoped>

</style>