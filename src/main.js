// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import 'begeta/css/begeta.min.css'
import store from './store'
import firebase from 'firebase'
import firebaseConfig from '../config/firebase'

Vue.prototype.$firebase = firebase.initializeApp(firebaseConfig)
Vue.use(Buefy)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
