<template>
  <div
    class="w-11/12 h-fit border-3 m-4 p-4 border-2 border-mgreen rounded-xl bg-sgreen text-dgreen font-semibold"
  >
    <div class="flex h-fit justify-between">
      <div>
        <h1 class="mr-2 inline">Category name:</h1>
        <input
          type="text"
          id="category-name"
          v-model="categoryTitle"
          maxlength="16"
          placeholder="New category"
        />
      </div>

      <div
        class="flex px-4 w-fit h-6 text-xs text-center border-2 border-dgreen rounded-md bg-mgreen cursor-pointer"
        @click="addCategory(categoryTitle), (isShown = false)"
      >
        Add <span class="ml-1" v-if="categoryTitle != ''"> {{ categoryTitle }} category</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { addCategory } from '../../composables/use-categories'
import { isShown } from './create-category-panel.vue'

export default {
  data() {
    return {
      categoryTitle: ''
    }
  },
  setup() {
    return { addCategory, isShown }
  }
}
</script>
