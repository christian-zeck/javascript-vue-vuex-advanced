<template>
  <div id="app">
    <div>
      # of tasks done: {{ doneTodosCount }}
      <ul>
        <li v-for="todo in doneTodos" :key="todo.id">
          {{ todo.text }}
        </li>
      </ul>
    </div>
    <button @click="increment">Increment</button>
    {{ count }}
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  methods: {
    increment() {
      this.$store.dispatch('incrementCount')
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['doneTodos', 'doneTodosCount'])
  }
}
</script>

<style lang="scss">
</style>
