import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login'
import Home from '../pages/Home'
import Game from '../pages/Game'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/game/:roomId',
      name: 'Game',
      component: Game,
      props: true
    }
  ]
})
