<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions({
      init: 'auth/init'
    })
  },
  created () {
    this.init()
  }
}
</script>

<style>
</style>
