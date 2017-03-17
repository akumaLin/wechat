<template>
  <div class="index">
    <router-view></router-view>
    <div class="my-margin-top">到底了</div>

    <ul>
      <li v-for="(item,index) in items" @click="showcolor=index">
        <router-link to="">
          <i :class="['iconfont',item.icon,{on:showcolor===index}]" ></i>
          <p v-html="item.text" :class="{on:showcolor===index}"></p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'toolbar',
    data () {
      return {
        items: [
          {icon: "icon-nanzhuang", text: "天猫"},
          {icon: "icon-dianpu", text: "阿里巴巴"},
          {icon: "icon-shuma", text: "淘宝"},
          {icon: "icon-peishi", text: "京东商城"},
          {icon: "icon-baobao", text: "我的"}
        ],
        showcolor:0
      }
    }



  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'toolbar.scss';

</style>
