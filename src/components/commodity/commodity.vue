<template>
  <ul>
    <li v-for="good in goods" class="li-item">
      <div class="left">
        <p class="big-title">{{good.title1}}</p>
        <p class="small-title" v-html="good.title2"></p>
      <img :src="good.img1" alt="">
      </div>
      <div class="right" v-if="good.img2">
      <img :src="good.img2" alt="">
      </div>
    </li>

  </ul>
</template>

<script>
  export default {
    name: 'commodity',
    data(){
    return{ goods:[
        {title1:"淘抢购",title2:"一块九包邮",img1:"https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",img2:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937593380,3834108448&fm=116&gp=0.jpg"},
        {title1:"限时抢购",title2:"九块九包邮",img1:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937593380,3834108448&fm=116&gp=0.jpg",img2:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1387826796,1424201369&fm=21&gp=0.jpg"},
        {title1:"清仓大甩卖",title2:"免费",img1:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2273064087,2217151642&fm=21&gp=0.jpg",img2:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2721703455,483435980&fm=21&gp=0.jpg"},
      {title1:"淘抢购",title2:"一块九包邮",img1:"https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",img2:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1937593380,3834108448&fm=116&gp=0.jpg"}

      ]
    }}

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'commodity.scss';

</style>
