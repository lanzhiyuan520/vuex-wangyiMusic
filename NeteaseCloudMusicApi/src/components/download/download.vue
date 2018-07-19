<template>
    <div>下载客户端</div>
</template>

<script>
    export default {
        name: "download",
        mounted(){
            this.$store.commit('show_children',false)
        }
    }
</script>

<style scoped>

</style>