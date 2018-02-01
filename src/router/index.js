import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from '@/components/MainMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    }
  ]
})
