<template>
  <router-link to="#" class="news">
    <div class="news-top">
      <span>夺宝</span>
      <br>
      <span>头条</span>
    </div>
    <transition name="slide-fade" @after-enter="afterEnter" >
      <div v-if="show" key="1" class="news-item">
         <p>方松潭中了10台iPhone4</p>
         <p>陈康妮中了一辆法拉利</p>
      </div>
      <div v-else key="2" class="news-item">
        <p>方9中了10台iPhon</p>
        <p>陈t中了一辆法拉利</p>
      </div>
    </transition>

  </router-link>
</template>

<script>
  export default {
    name: 'news',
    data () {
      return {
        show:false
      }
    },
    methods: {
      afterEnter:function (el) {
        this.show=!this.show
      }
    },
    created(){
      var newThis=this
      setTimeout(function(){
        newThis.show=!newThis.show

      },1000)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'news.scss';

</style>
