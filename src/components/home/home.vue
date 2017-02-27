<template>
  <div id="home">
     <swiper></swiper>
     <navbar></navbar>
  </div>
</template>

<script>
  import swiper from "./swiper/swiper.vue";
  import navbar from "./navbar/navbar.vue"
  export default {
    name: 'home',
    components: {
      swiper,navbar
    }
  }
</script>

<style>

</style>
