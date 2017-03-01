<template>
  <ul>
    <li v-for="item in items">
      <router-link to="#">
       <i :class="item.icon" class="iconfont" :style="{color:item.color,background:item.bg}"></i>
        <p v-html="item.text"></p>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        items: [
          {icon: "icon-nanzhuang", text: "天猫",color:"white",bg:"#E1251D"},
          {icon: "icon-dianpu", text: "阿里巴巴",color:"white",bg:"#F73076"},
          {icon: "icon-shuma", text: "一元购",color:"white",bg:"#9331F0"},
          {icon: "icon-peishi", text: "天猫",color:"white",bg:"#FE6D02"},
          {icon: "icon-baobao", text: "京东商城",color:"white",bg:"#2C9BF7"},
          {icon: "icon-nvzhuang", text: "天猫",color:"white",bg:"#ED6000"},
          {icon: "icon-nanzhuang", text: "天猫",color:"white",bg:"#FDB038"},
          {icon: "icon-dianpu", text: "阿里巴巴",color:"white",bg:"#FA634A"},
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'navbar.scss';

</style>
