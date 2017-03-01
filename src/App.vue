<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

*{
  padding:0;
  margin:0;
}
html{
  font-size: 1rem;
}
html,body{
  width:100vw;
  height:100vh;
}
a{
  text-decoration: none;
  color: #5a5a5a;
}
@import 'font/iconfont.css';
</style>
