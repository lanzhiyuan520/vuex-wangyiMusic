<template>
    <div>
        <p @click="INCREMENT">{{count}}</p>
        <p @click="reduce">{{test}}</p>
    </div>
</template>

<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        name: "index",
        created(){
            console.log(this.$store)
        },
        computed:{
            ...mapState({
                count : state => state.home.count
            }),
            ...mapGetters([
                'test'
            ])
        },
        methods:{
            ...mapMutations(['INCREMENT']),
            ...mapActions(['reduce'])
        }
    }
</script>

<style scoped>

</style>