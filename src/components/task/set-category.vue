<template>
  <div
    class="w-11/12 h-fit border-3 m-4 p-4 border-2 border-mgreen rounded-xl bg-sgreen text-dgreen font-semibold"
  >
    <div>
      <div class="flex w-fit h-fit mb-7 justify-between">
        <div><h1 class="mr-2">Category name:</h1></div>
        <div><input
          type="text"
          id="category-name"
          v-model="categoryTitle"
          maxlength="16"
          placeholder="New category"
        /></div>
        <div
          class="flex p-2 inset-4 w-fit h-fit ml-1/2 text-xs text-center border-2 border-dgreen rounded-md bg-mgreen cursor-pointer"
          @click="
            () => {
              addCategory(categoryTitle)
              isShown = false
            }
          "
        >
          Create
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { addCategory } from '../../composables/use-categories'
import { isShown } from './create-category-panel.vue'

const categoryTitle = ''

export default {
  setup() {
    return { addCategory, categoryTitle, isShown }
  }
}
</script>
