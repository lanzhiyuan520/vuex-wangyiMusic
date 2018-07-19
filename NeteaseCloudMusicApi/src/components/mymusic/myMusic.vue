<template>
    <div>我的音乐</div>
</template>

<script>
    export default {
        name: "my-music",
        mounted(){
            this.$store.commit('show_children',false)
        }
    }
</script>

<style scoped>

</style>