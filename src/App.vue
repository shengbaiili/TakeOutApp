<template>
  <div>
    <router-view/>
    <FootGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FootGuide from './components/FootGuide/FootGuide.vue'

  export default {

    mounted(){
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUser')

    },
    components: {
      FootGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>

</style>
