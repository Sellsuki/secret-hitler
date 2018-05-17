<template>
  <section class="section">
    <div class="container">
      Gameeeeee: {{ roomId }}
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['roomId'],
  methods: mapActions({
    canEnterRoom: 'auth/canEnterRoom'
  }),
  async mounted () {
    await this.canEnterRoom(this.roomId)
  }
}
</script>
