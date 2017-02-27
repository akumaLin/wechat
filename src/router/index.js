import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home/home'
import toolbar from 'components/toolbar/toolbar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toolbar',
      component: toolbar,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: home
        },
        ]
    }
  ]
})
