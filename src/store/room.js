import firebase from 'firebase'
import router from '../router'

export default {
  namespaced: true,
  state: {
    detail: null
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    setDetail (state, detail) {
      state.detail = detail
    }
  },
  actions: {
    async create ({ rootGetters }) {
      const uid = rootGetters['auth/uid']
      const rooms = firebase.database().ref('rooms')
      const newRoom = rooms.push()
      await newRoom.set({
        owner: uid,
        members: [ uid ]
      })
      router.push({ name: 'Game', params: { roomId: newRoom.key } })
    },
    async findRoom ({ dispatch, state }, roomId) {
      const room = await firebase.database().ref(`rooms/${roomId}`).once('value')
      if (room.val()) {
        await dispatch('joinRoom', roomId)
      }
    },
    async joinRoom (roomId) {
      console.log(roomId)
    }
  }
}
