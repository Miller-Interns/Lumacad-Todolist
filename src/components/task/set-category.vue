<template>
  <div class="h-fit border-3 m-4 p-4 bg-nice-c rounded-md font-semibold shadow-xl">
    <div class="flex h-fit justify-between p-2 bg-white rounded-md">
      <div>
        <h1 class="mr-2 inline h-auto items-center text-nice-a">Category name:</h1>
        <input
          class="bg-gray-50 p-3"
          type="text"
          id="category-name"
          v-model="categoryTitle"
          maxlength="16"
          placeholder="New category"
        />
      </div>

      <button
        class="flex p-4 w-fit h-fit text-xs text-center rounded-md cursor-pointer bg-nice-a text-white"
        @click="addCategory(categoryTitle)"
      >
        Add <span class="ml-1" v-if="!isEmpty(categoryTitle)"> {{ categoryTitle }} category</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { addCategory } from '../../composables/use-categories'

function isEmpty(text: string) {
  return text == ''
}

const categoryTitle = ref('')
</script>
