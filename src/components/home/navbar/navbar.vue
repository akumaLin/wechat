<template>
  <ul>
    <li v-for="item in items">
      <router-link to="#">
        <div class="myIcon"><i :class="item.icon"></i></div>
        <p v-html="item.text"></p></router-link>
    </li>
  </ul>
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
  @import 'navbar.scss';

</style>
