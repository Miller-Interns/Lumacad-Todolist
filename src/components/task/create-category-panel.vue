<template>
  <div class="flex inset-y-0 w-11/12 h-auto border-3 m-4 p-6 border-2 rounded-xl justify-between">
    <div class="font-bold -mt-2"><h1>Create Category</h1></div>
    <div class="flex w-12 rotate-90" v-bind:aria-expanded="isShown ? 'true' : 'false'">
      <button @click="toggleShow">➕</button>
    </div>
  </div>

  <div v-if="isShown">
    <SetCategory />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import SetCategory from './set-category.vue'

export const isShown = ref(false)

export default {
  components: {
    SetCategory
  },
  setup() {
    const toggleShow = () => (isShown.value = !isShown.value)
    return {
      SetCategory,
      toggleShow,
      isShown
    }
  }
}
</script>
