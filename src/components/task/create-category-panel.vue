<template>
  <div class="inset-y-0 h-fit m-4 p-4 rounded-md bg-nice-c shadow-xl">
    <div class="flex justify-between w-full p-2 bg-white rounded-md">
      <div class="font-bold text-nice-a text-xl"><h1>Create Category</h1></div>
      <button class="transition" :style="rotation" @click="toggleShow">➕</button>
    </div>
  </div>

  <div v-if="isShown">
    <SetCategory />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SetCategory from './set-category.vue'

const isShown = ref(false)

function toggleShow() {
  isShown.value = !isShown.value
}

const rotation = computed(() => {
  return isShown.value ? { transform: 'rotate(45deg)' } : { transform: 'rotate(90deg)' }
})
</script>
