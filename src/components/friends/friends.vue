<template>
    <div>朋友</div>
</template>

<script>
    export default {
        name: "friends",
        mounted(){
            this.$store.commit('show_children',false)
        }
    }
</script>

<style scoped>

</style>