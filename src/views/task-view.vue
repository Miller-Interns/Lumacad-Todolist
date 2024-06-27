<script setup lang="ts">
import TaskList from '../components/task-view-components/task-list.vue'
import CreateCategory from '../components/task-view-components/create-category-panel.vue'
</script>

<template>
  <main>
    <CreateCategory />
    <TaskList class="task-list" id="list"> </TaskList>
  </main>
</template>

<style scoped>
.task-list {
  margin-top: 2rem;
}
</style>
