<template>
  <header class="">
    <CreateCategory />
  </header>
  <main>
    <TaskList />
  </main>
</template>

<script setup lang="ts">
import TaskList from '../components/task/task-list.vue'
import CreateCategory from '../components/task/create-category-panel.vue'
</script>
