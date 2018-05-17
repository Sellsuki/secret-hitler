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
      create: 'room/create',
      findRoom: 'room/findRoom'
    }),
    async createRoom () {
      await this.create()
      // this.router.push({})
    },
    join () {
      this.$dialog.prompt({
        message: 'Enter room id',
        inputAttrs: {
          placeholder: '',
          maxlength: 25
        },
        onConfirm: async (value) => {
          await this.findRoom(value)
        }
      })
    }
  }
}
</script>
