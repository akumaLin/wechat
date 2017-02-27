<template>
  <div id="home">
     <swiper></swiper>
     <navbar></navbar>
     <news></news>
    <commodity></commodity>
    <commodity></commodity>
  </div>
</template>

<script>
  import swiper from "./swiper/swiper.vue";
  import navbar from "./navbar/navbar.vue"
  import news from "./news/news.vue"
  import commodity from "./commodity/commodity.vue"
  export default {
    name: 'home',
    components: {
      swiper,navbar,news,commodity
    }
  }
</script>

<style>

</style>
