<script setup lang="ts">
import TaskItem from './task-item.vue'
import IconAdd from '../icons/icon-add.vue'
</script>

<template>
  <TaskItem>
    <template #icon> <IconAdd /> </template>
    <template #heading>category</template>
    <template #details>list of task</template>
  </TaskItem>
</template>

<style></style>
