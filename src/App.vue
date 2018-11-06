<template>
  <div id="app">
    <button @click="increment">Increment</button>
    {{ count }}
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.dispatch('incrementCount')
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="scss">
</style>
