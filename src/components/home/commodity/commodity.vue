<template>
  <ul>
    <li v-for="item in 4" class="li-item">
      <div class="left">
        <p class="big-title">淘抢购</p>
        <p class="small-title">12:23:34</p>
      <img src="https://img6.bdstatic.com/img/image/smallpic/dongman.jpg" alt="">
      </div>
      <div class="right">
      <img src="https://img6.bdstatic.com/img/image/smallpic/dongman.jpg" alt="">
      </div>
    </li>

  </ul>
</template>

<script>
  export default {
    name: 'commodity',
   /* data(){
    }*/

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'commodity.scss';

</style>
