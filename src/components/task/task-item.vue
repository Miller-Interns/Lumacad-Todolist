<template>
  <input class="w-4" type="checkbox" v-model="isTaskCompleted" />
  <input
    class="pl-2"
    type="text"
    maxLength="16"
    v-model="taskText"
    placeholder="New task..."
    :style="markComplete()"
  />
  <button class="w-1/12" @click="deleteTask(category.tasks, task)" v-if="category.isDeleting">
    ❌
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Task } from '../../types/Task'
import { deleteTask } from '../../composables/use-categories'
import { Category } from '../../types/Category'

const props = defineProps<{
  task: Task
  category: Category
}>()

const markComplete = () => {
  return computed(() => ({
    textDecoration: props.task.isCompleted ? 'line-through' : 'none'
  })).value
}

const isTaskCompleted = computed(() => {
  return props.task.isCompleted
})

const taskText = computed(() => {
  return props.task.text
})
</script>
