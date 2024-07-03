<template>
  <div class="inset-y-0 w-11/12 h-12 border-3 m-4 p-4 border-2 border-mgreen rounded-xl bg-sgreen">
    <h1 class="float-left text-dgreen font-bold -mt-2">Create Category</h1>
    <div
      class="inline float-right w-12 rotate-90"
      v-bind:aria-expanded="isShown ? 'true' : 'false'"
    >
      <button @click="set">➕</button>
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
    const set = () => (isShown.value = !isShown.value)
    return {
      SetCategory,
      set,
      isShown
    }
  }
}
</script>
