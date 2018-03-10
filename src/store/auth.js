// import firebaseConfig from '../../config/firebase'
import firebase from 'firebase'
import router from '../router'

// firebase.initializeApp(firebaseConfig)
export default {
  namespaced: true,
  state: {
    isReady: false,
    user: {}
  },
  getters: {
    user: state => state.user,
    uid: state => state.user.uid,
    route: state => state.route,
    isReady: state => state.isReady
  },
  mutations: {
    setReady (state) {
      state.isReady = true
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    init ({ commit, dispatch }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user && user.uid) {
          const { displayName, uid } = user
          const profile = {
            displayName,
            uid,
            fb: user.providerData[0]
          }
          commit('setUser', profile)
          router.push({ name: 'Home' })
        } else {
          commit('setUser', {})
          router.push({ name: 'Login' })
          commit('setReady')
        }
      })
    },
    login () {
      const provider = new firebase.auth.FacebookAuthProvider()
      firebase.auth().signInWithRedirect(provider)
    },
    logout () {
      firebase.auth().signOut()
    }
  }
}
