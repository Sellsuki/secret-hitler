import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import room from './room'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    auth,
    room
  },
  strict: debug
})
