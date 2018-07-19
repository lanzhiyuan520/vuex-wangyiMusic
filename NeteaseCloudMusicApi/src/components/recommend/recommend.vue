<template>
    <div>推荐</div>
</template>

<script>
    export default {
        name: "recommend",
        mounted(){
            this.$store.commit('show_children',true)
        }
    }
</script>

<style scoped>

</style>