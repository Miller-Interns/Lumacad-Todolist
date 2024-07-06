<template>
  <draggable v-model="categories" @start="drag = true" @end="drag = false" item-key="id">
    <TransitionGroup tag="div" class="inline-flex">
      <div v-for="category in categories" :key="category.id">
        <CategoryItem :category="category" @toggle-delete="toggleDelete(category)"/>
      </div>
    </TransitionGroup>
  </draggable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'
import CategoryItem from './category-item.vue'
import { categories } from '../../composables/use-categories'
import { Category } from '../../types/Category';

let drag = ref(false)
const draggable = VueDraggableNext

function toggleDelete(category: Category) {
  category.isDeleting = !category.isDeleting
}
</script>


<style>

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}
</style>