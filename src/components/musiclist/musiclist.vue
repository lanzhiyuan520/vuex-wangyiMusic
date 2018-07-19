<template>
    <div>歌单</div>
</template>

<script>
    export default {
        name: "musiclist",
        mounted(){
            this.$store.commit('show_children',true)
        }
    }
</script>

<style scoped>

</style>