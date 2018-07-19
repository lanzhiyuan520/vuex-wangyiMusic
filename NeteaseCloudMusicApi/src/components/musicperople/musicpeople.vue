<template>
    <div>音乐人</div>
</template>

<script>
    export default {
        name: "musicpeople",
        mounted(){
            this.$store.commit('show_children',false)
        }
    }
</script>

<style scoped>

</style>