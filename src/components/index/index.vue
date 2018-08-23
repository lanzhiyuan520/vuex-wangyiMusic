<template>
    <div>
        <Heads></Heads>
        <router-view></router-view>
    </div>
</template>

<script>
    import Heads from '../../components/header/head'
    export default {
        components:{
            Heads
        }
    }
</script>

<style scoped>

</style>