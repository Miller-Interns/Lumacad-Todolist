<script setup lang="ts">
import CreateCategory from './components/create-category.vue'
import { RouterLink, RouterView } from 'vue-router'
import TaskList from './components/task-list.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <CreateCategory />
      <TaskList />
    </div>
  </header>
  <main></main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.wrapper {
  width: 100%;
  background-color: purple;
}

main {
  padding: 1em;
}
</style>
