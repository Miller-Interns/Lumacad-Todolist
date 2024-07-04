<template>
  <div class="inline-flex" v-for="category in categories" :key="category">
    <CategoryItem>
      <template #header>
        <input
          class="border-none bg-transparent w-4/5 mr-3 text-xs text-black font-bold"
          type="text"
          maxLength="16"
          v-model="category.title"
        />
        <button
          class="relative float-right w-7 h-7 bg-transparent border-none"
          v-if="category.isDeleting"
          @click="deleteCategory(category)"
        >
          ❌
        </button>
      </template>
      <template #content>
        <li v-for="task in category.tasks" :key="task">
          <!-- <input type="checkbox" style="{lineThrough: `${lineThrough}`}" /> -->
          {{ task.text }}
          test
          <input type="text" maxLength="16" /></li
      ></template>
      <template #footer>
        <input type="text" />
        <div class="flex justify-between">
          <button
            class="rounded-md bg-nice-b"
            v-if="!category.isDeleting"
            @click="toggleDeleteTask(category)"
          >
            🗑️
          </button>
          <button class="rounded-md bg-nice-b" v-else @click="toggleDeleteTask(category)">
            🚫
          </button>
          <button
            class="rounded-md bg-nice-b text-xs p-2 font-bold text-white"
            @click="addTask(category)"
          >
            Add new task
          </button>
        </div>
      </template>
    </CategoryItem>
  </div>
</template>

<script setup lang="ts">
import CategoryItem from './category-item.vue'
import { addTask, categories, deleteCategory } from '../../composables/use-categories'
import { Category } from '../../types/Category'

function toggleDeleteTask(category: Category) {
  category.isDeleting = !category.isDeleting
}

// function enableAddingTask(tasks: Task[]) {
//   for (let task of tasks) {
//     if (task.text === '') return false
//   }
//   return true
// }
</script>
