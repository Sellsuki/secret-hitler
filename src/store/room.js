import firebase from 'firebase'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async create ({ rootGetters }) {
      const rooms = firebase.database().ref('rooms')
      const newRoom = rooms.push()
      await newRoom.set({
        members: [ rootGetters['auth/uid'] ]
      })
    }
  }
}
