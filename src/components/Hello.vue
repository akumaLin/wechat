<template>
  <div class="hello">
    <div class="swip">
    <mt-swipe :auto="4000">
      <mt-swipe-item></mt-swipe-item>
fawr
    </mt-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      swipeImg:[
        {"img":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1806068248,4149175317&fm=11&gp=0.jpg"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .swip{
    height: 25vh;
  }

  .mt-swipe-item{
    float: left！important;
  }

</style>
