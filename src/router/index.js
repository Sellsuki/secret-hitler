import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from '../pages/MainMenu'
import Login from '../pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
