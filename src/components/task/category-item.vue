<template>
  <div class="p-4 max-w-1/10 min-h-28 h-auto rounded-xl m-2 bg-white">
    <div class="content">
      <div class="flex rounded-md p-2 pl-3 mb-2 bg-nice-c justify-between">
        <slot name="header"> </slot>
      </div>

      <div class="block rounded-md p-2 pl-3 mb-2 bg-nice-c">
        <slot name="tasks"> </slot>
        <slot name="footer"> </slot>
      </div>
      <!-- <div class="block" id="details">
        
        <div>
          <div class="flex justify-between">
            <div v-if="category.tasks.length > 1">
              <button v-if="!category.isDeleting" @click="toggleDelete">🗑️</button>
              <button v-else @click="toggleDelete">🚫</button>
            </div>
            <button
              @click="addTask(category)"
              v-if="category.tasks[category.tasks.length - 1].text != ''"
            >
              ➕
            </button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
// import { VueDraggableNext } from 'vue-draggable-next'
import { computed } from 'vue'
// import { deleteCategory, addTask, deleteTask } from '../../composables/use-categories'
import { Category } from '../../types/Category'
import { Task } from '../../types/Task'

import { deleteCategory } from '../../composables/use-categories'

// const canBeDeleted = computed(() => {
//   return category.isDeleting && category.tasks.length > 1
// })
</script>
