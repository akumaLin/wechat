<template>
  <div class="com">
    <router-link to="#" v-for="good in goods" class="li-item">
      <img :src="good.img" alt="">
      <p v-html="good.title"></p>
      <table>
        <tr>
          <td class="money">￥{{good.price}}</td>
          <td class="num">{{good.num}}人付款</td>
        </tr>
      </table>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'commodity',
    data(){
      return {
        goods: [
          {
            title: "[热门推荐]西瓜琵琶西红柿限时抢购手快有手慢无西瓜琵琶西红柿限时抢购手快有手",
            price: "12314",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限时抢购手快西瓜琵琶西红柿限时抢购手快有手有手慢无",
            price: "123",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限西瓜琵琶西红柿限时抢购手快有手时抢购手快有手慢无",
            price: "31",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限西瓜琵琶西红柿限时抢购手快有手时抢购手快有手慢无",
            price: "12312",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限时抢购手快有手慢无西瓜琵琶西红柿限时抢购手快有手",
            price: "12314",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限时抢购手快西瓜琵琶西红柿限时抢购手快有手有手慢无",
            price: "123",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限西瓜琵琶西红柿限时抢购手快有手时抢购手快有手慢无",
            price: "31",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限西瓜琵琶西红柿限时抢购手快有手时抢购手快有手慢无",
            price: "12312",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限时抢购手快有手慢无西瓜琵琶西红柿限时抢购手快有手",
            price: "12314",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限时抢购手快西瓜琵琶西红柿限时抢购手快有手有手慢无",
            price: "123",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限西瓜琵琶西红柿限时抢购手快有手时抢购手快有手慢无",
            price: "31",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          },
          {
            title: "[热门推荐]西瓜琵琶西红柿限西瓜琵琶西红柿限时抢购手快有手时抢购手快有手慢无",
            price: "12312",
            img: "https://img6.bdstatic.com/img/image/smallpic/dongman.jpg",
            num: "33321"
          }
        ]
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'commodity.scss';

</style>
