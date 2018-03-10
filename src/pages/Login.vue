<template>
  <section class="section">
    <div class="container">
      <div class="f-s-30px">Secret Hitler</div>
      <button class="button" @click="login">Login</button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>
