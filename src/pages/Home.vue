<template>
  <section class="section">
    <div class="container">
      <button class="button" @click="createRoom">Create</button>
      <button class="button" @click="join">Join</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      create: 'room/create'
    }),
    async createRoom () {
      await this.create()
      // this.router.push({})
    },
    join () {
      console.log('join')
    }
  }
}
</script>
