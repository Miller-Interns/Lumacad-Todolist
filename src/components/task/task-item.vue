<template>
  <input class="w-4" type="checkbox" v-model="props.task.isCompleted" />
  <input
    class="pl-2"
    type="text"
    maxLength="16"
    v-model="taskText"
    placeholder="New task..."
    :style="markComplete()"
    :disabled="enableInput"
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
    textDecoration: props.task.isCompleted ? 'line-through' : 'none',
    color: props.task.isCompleted ? 'rgb(228 153 255)' : 'black'
  })).value
}

const enableInput = computed(() => {
  return props.task.isCompleted
})

const taskText = computed({
  get() {
    return props.task.text
  },
  set(v) {
    this.$emit('taskName', v)
  }
})
</script>

<style>
*:disabled {
  background: transparent;
}
</style>
