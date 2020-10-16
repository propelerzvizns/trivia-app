<template>
    <div>
        <h1>chuck</h1>
        {{randomJoke.value}}
        <img :src="icon" />
    </div>
</template>
<script>
// import chuckService from '../services/ChuckService'
// import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'Chuck',
  
    computed: {
        randomJoke() {
            return this.$store.getters['chuck/randomJoke']
        },
        // ...mapGetters(['chuck/randomJoke']),

        icon() {
            console.log(this.randomJoke.iconUrl);
            return this.randomJoke.iconUrl
        }
    },
    // methods: {...mapActions(['chuck/fetchRandomJoke'])},
    created(){
        this.$store.dispatch('chuck/fetchRandomJoke')
}
}
</script>

<style scoped>

</style>
