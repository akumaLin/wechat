<template>
  <router-link to="#" class="news">
    <div class="news-top">
      <span>夺宝</span>
      <br>
      <span>头条</span>
    </div>
    <transition name="slide-fade" @after-enter="afterEnter" >
      <div v-if="show" key="1" class="news-item">
        <table>
          <tr>
            <td>方松潭中了1000台iPhone4</td>
          </tr>
          <tr>
            <td>方松潭中9900台iPhone4</td>
          </tr>
        </table>
      </div>
      <div v-else key="2" class="news-item">
        <table>
          <tr>
            <td>方松潭中了10台iPhone4</td>
          </tr>
          <tr>
            <td>方松潭中了090台iPhone4</td>
          </tr>
        </table>
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
