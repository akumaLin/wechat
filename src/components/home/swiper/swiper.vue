<template>
  <div class="hello">
    <div class="swip">
      <mt-swipe :auto="4000">
        <mt-swipe-item  class="bg-swipe" v-for="swipe in swipeImg"   :style="{ background:'url(' + swipe.img + ')no-repeat '}" >
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'swiper',
    data () {
      return {
        swipeImg: [
          {"img": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1806068248,4149175317&fm=11&gp=0.jpg"},
          {"img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1487930372765&di=6bea3cfb681cb248524b869a960ab73e&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Flvpics%2Fh%3D800%2Fsign%3Df08ecc016c63f624035d3403b745eb32%2Fa2cc7cd98d1001e93b905337bf0e7bec54e7975d.jpg"}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
  .swip {
    height: 20vh;
  }
  .bg-swipe{
    background-size:100% 100% !important;
  }

</style>
