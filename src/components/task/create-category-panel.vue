<template>
  <div class="flex inset-y-0 w-11/12 h-auto m-4 p-4 rounded-xl justify-between bg-white">
    <div class="font-bold text-nice-a text-xl"><h1>Create Category</h1></div>
    <button @click="toggleShow" :style="isRotated">➕</button>
  </div>

  <div v-if="isShown">
    <SetCategory />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SetCategory from './set-category.vue'

const isShown = ref(true)

const isRotated = computed(() => {
  return isShown.value ? { rotate: '45deg' } : { rotate: '90deg', transition: 'transform(rotate)' }
})

function toggleShow() {
  isShown.value = !isShown.value
}
</script>
