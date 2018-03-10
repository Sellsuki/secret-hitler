<template>
  <section class="section">
    <div class="container">
      <button class="button" @click="create">Create</button>
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
    join () {
      console.log('join')
    }
  }
}
</script>
