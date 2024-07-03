<template>
  <div class="inline-flex" v-for="(category, index) in categories" :key="index">
    <CategoryItem class="min-h-fit resize-y overflow-auto" v-model="categories[index]">
      <template #category>
        <input
          class="border-none bg-transparent w-4/5 ml-2 text-xs"
          type="text"
          :id="'category_' + categories[index].title"
          v-bind:style="{
            background: 'transparent',
            border: 'none',
            'font-size': '24px',
            'font-weight': 'bold',
            width: '80%',
            bottom: '0px'
          }"
          v-model="categories[index].title"
          maxLength="16"
        />
        <button class="delete" @click="deleteCategory(category)">❌</button>
      </template>
      <template #tasks>
        <draggable class="dragArea list-none" :list="categories[index].Tasks">
          <li v-for="(task, taskIndex) in categories[index].Tasks" :key="taskIndex">
            <input type="checkbox" :id="'task_' + taskIndex" v-model="task.isCompleted" />
            <input
              class="border-none bg-transparent w-4/5 ml-2 text-xs"
              type="text"
              :for="'item_' + taskIndex"
              :style="
                task.isCompleted
                  ? { 'text-decoration-line': 'line-through' }
                  : { 'text-decoration-line': 'none' }
              "
              v-model="task.text"
              placeholder="New task..."
              maxLength="24"
            />
            <button
              @click="deleteTask(categories[index].Tasks, taskIndex)"
              v-if="categories[index].Tasks.length > 1"
              class="delete"
            >
              ❌
            </button>
          </li>
        </draggable>
      </template>
      <template #footer>
        <div>
          <button
            class="float-right"
            @click="addTask(categories[index])"
            v-if="categories[index].Tasks[categories[index].Tasks.length - 1].text != ''"
          >
            ➕
          </button>
        </div>
      </template>
    </CategoryItem>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import CategoryItem from './category-item.vue'

import { categories, addTask, deleteCategory, deleteTask } from '../../composables/use-categories'
export default defineComponent({
  components: {
    CategoryItem,
    draggable: VueDraggableNext
  },
  data() {
    return {
      enabled: true,
      dragging: false
    }
  },
  setup() {
    const categoryForm = window.localStorage.getItem('categories')

    if (categoryForm) {
      categories.value = JSON.parse(categoryForm)
    }

    watch(
      categories,
      (val) => {
        window.localStorage.setItem('categories', JSON.stringify(val))
      },
      { deep: true }
    )
    return {
      categories,
      CategoryItem,
      addTask,
      deleteCategory,
      deleteTask
    }
  }
})
</script>

<style scoped>
.delete {
  position: relative;
  place-content: center;
  float: right;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
}
</style>
