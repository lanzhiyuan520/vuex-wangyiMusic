<template>
    <div>歌手</div>
</template>

<script>
    export default {
        name: "singer",
        mounted(){
            this.$store.commit('show_children',true)
        }
    }
</script>

<style scoped>

</style>