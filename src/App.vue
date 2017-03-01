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
  -webkit-tap-highlight-color:rgba(255,0,0,0);
  -webkit-font-smoothing : antialiased;

}
html{
  font-size: 1rem;
}
html,body{
  width:100vw;
  height:100vh;
}
a:hover, a:visited, a:link, a:active ,a,a:focus{
  text-decoration: none;
  color: #5a5a5a;
  out-line: none;
  -webkit-tap-highlight-color:rgba(255,0,0,0);
}
@import 'font/iconfont.css';
</style>
