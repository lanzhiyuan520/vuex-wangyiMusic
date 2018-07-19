<template>
    <div>排行</div>
</template>

<script>
    export default {
        name: "seniority",
        mounted(){
            this.$store.commit('show_children',true)
        }
    }
</script>

<style scoped>

</style>