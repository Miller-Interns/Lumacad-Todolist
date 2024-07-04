<template>
  <div class="inline-flex" v-for="(category, index) in categories" :key="index">
    <CategoryItem class="min-h-fit resize-y overflow-auto">
      <template #footer>
        <div class="flex justify-between">
          <div v-if="categories[index].tasks.length > 1">
            <button
              v-if="!categories[index].isDeleting && categories[index].tasks.length > 1"
              @click="categories[index].isDeleting = true"
            >
              🗑️
            </button>
            <button v-else @click="categories[index].isDeleting = false">🚫</button>
          </div>
          <button
            @click="addTask(categories[index])"
            v-if="categories[index].tasks[categories[index].tasks.length - 1].text != ''"
          >
            ➕
          </button>
        </div>
      </template>
    </CategoryItem>
  </div>
</template>

<script setup lang="ts">
//use script setup
import { watch } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import CategoryItem from './category-item.vue'

import { categories } from '../../composables/use-categories'

const enabled = true
const dragging = false
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
