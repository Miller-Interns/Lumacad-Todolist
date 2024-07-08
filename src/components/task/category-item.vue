<template>
  <div class="p-3 max-w-1/10 min-h-28 h-auto rounded-xl m-2 bg-nice-c shadow-xl">
    <div class="flex rounded-md p-3 pl-3 mb-3 bg-white justify-between">
      <input
        class="border-none bg-transparent calc h-7 text-xs text-black font-bold"
        type="text"
        maxLength="16"
        v-model="categoryTitle"
      />
      <button
        class="relative float-right bg-transparent border-none"
        v-if="category.isDeleting"
        @click="deleteCategory(category)"
      >
        ❌
      </button>
    </div>
    <div class="block rounded-md p-3 pl-3 mb-2 bg-white">
      <draggable
        v-model="categoryTasks"
        class="list-group"
        @start="drag = true"
        @end="drag = false"
        item-key="task"
      >
        <li class="list-none flex justify-between" v-for="task of category.tasks" :key="task.id">
          <TaskItem :task="task" :category="category" />
        </li>
      </draggable>
      <div class="flex justify-between mt-4">
        <button class="rounded-md bg-nice-b" v-if="!category.isDeleting" @click="emitToggleDelete">
          🗑️
        </button>
        <button class="rounded-md bg-nice-b" v-else @click="emitToggleDelete">🚫</button>
        <button
          class="rounded-md bg-nice-b text-xs p-2 font-bold text-white"
          @click="addTask(category)"
        >
          Add new task
        </button>
      </div>
    </div>
    <div>
      <div class="uid">
        {{ category.id }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import { addTask, deleteCategory } from '../../composables/use-categories'
import { Category } from '../../types/Category'
import TaskItem from './task-item.vue'

let drag = ref(false)
const draggable = VueDraggableNext

const props = defineProps<{
  category: Category
}>()

const categoryTitle = computed(() => {
  return props.category.title
})

const categoryTasks = computed(() => {
  return props.category.tasks
})

const emit = defineEmits(['toggle-delete'])

function emitToggleDelete() {
  emit('toggle-delete')
}
</script>

<style>
.uid {
  float: right;
  color: gray;
  font-size: 10px;
  user-select: none;
}
</style>
