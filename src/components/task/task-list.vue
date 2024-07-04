<template>
  <draggable v-model="categories" @start="drag = true" @end="drag = false" item-key="category">
    <div class="inline-flex" v-for="category of categories" :key="category.id">
      <CategoryItem>
        <template #header>
          <input
            class="border-none bg-transparent calc h-7 text-xs text-black font-bold"
            type="text"
            maxLength="16"
            v-model="category.title"
          />
          <button
            class="relative float-right bg-transparent border-none"
            v-if="category.isDeleting"
            @click="deleteCategory(category)"
          >
            ❌
          </button>
        </template>

        <template #content>
          <draggable
            v-model="category.tasks"
            class="list-group"
            @start="drag = true"
            @end="drag = false"
            item-key="task"
          >
            <li
              class="list-none flex justify-between"
              v-for="task of category.tasks"
              :key="task.id"
            >
              <input class="w-4" type="checkbox" v-model="task.isCompleted" />
              <input
                class="pl-2"
                type="text"
                maxLength="16"
                v-model="task.text"
                placeholder="New task..."
                :style="markComplete(task.isCompleted)"
              />
              <button
                class="w-1/12"
                @click="deleteTask(category.tasks, task)"
                v-if="category.isDeleting"
              >
                ❌
              </button>
            </li>
          </draggable>
        </template>

        <template #footer>
          <div class="flex justify-between mt-4">
            <button
              class="rounded-md bg-nice-b"
              v-if="!category.isDeleting"
              @click="toggleDelete(category)"
            >
              🗑️
            </button>
            <button class="rounded-md bg-nice-b" v-else @click="toggleDelete(category)">🚫</button>
            <button
              class="rounded-md bg-nice-b text-xs p-2 font-bold text-white"
              @click="addTask(category)"
            >
              Add new task
            </button>
          </div>
        </template>
        <template #id>
          <div class="uid">
            {{ category.id }}
          </div>
        </template>
      </CategoryItem>
    </div>
  </draggable>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import CategoryItem from './category-item.vue'
import { addTask, deleteTask, categories, deleteCategory } from '../../composables/use-categories'
import { Category } from '../../types/Category'

let drag = ref(false)
const draggable = VueDraggableNext

function toggleDelete(category: Category) {
  category.isDeleting = !category.isDeleting
}

const markComplete = (isCompleted: boolean) => {
  return computed(() => ({
    textDecoration: isCompleted ? 'line-through' : 'none'
  })).value
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
