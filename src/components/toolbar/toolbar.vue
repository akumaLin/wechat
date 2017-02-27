<template>
  <div class="index">
    <router-view></router-view>
    <ul>
      <li v-for="item in items">
        <router-link to="#">
          <i :class="item.icon"></i>
          <p v-html="item.text"></p></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
    data () {
      return {
        items: [
          {icon: "icono-user", text: "天猫"},
          {icon: "icono-user", text: "天猫"},
          {icon: "icono-user", text: "天猫"},
          {icon: "icono-user", text: "天猫"},
          {icon: "icono-user", text: "天猫"}

        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'toolbar.scss';

</style>
