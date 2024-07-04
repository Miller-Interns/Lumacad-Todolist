<template>
  <div class="p-4 min-w-max min-h-28 h-auto border-2 rounded-xl m-2">
    <div class="content">
      <div class="flex border-2 rounded-md p-1 pl-3 mb-2" id="heading">
        <h3>
          <input
            class="border-none bg-transparent w-4/5 ml-2 text-xs"
            type="text"
            :id="category.title"
            v-bind:style="{
              background: 'transparent',
              border: 'none',
              'font-size': '24px',
              'font-weight': 'bold',
              width: '80%',
              bottom: '0px'
            }"
            maxLength="16"
          />
          <button class="delete" @click="deleteCategory(category)">❌</button>
        </h3>
      </div>
      <div class="block" id="details">
        <p class="grid grid-rows-1">
          <draggable class="dragArea list-none" :list="category.tasks">
            <li v-for="(task, taskIndex) in category.tasks" :key="taskIndex">
              <input
                type="checkbox"
                class="border-1 border-radius-1/2"
                :id="'task_' + taskIndex"
                v-model="task.isCompleted"
              />
              <input
                class="border-none bg-transparent w-4/5 ml-2 text-xs"
                type="text"
                :for="'item_' + taskIndex"
                :style="
                  task.isCompleted
                    ? { 'text-decoration-line': 'line-through' }
                    : { 'text-decoration-line': 'none' }
                "
                v-model="task.text"
                placeholder="New task..."
                maxLength="24"
              />
              <button
                @click="deleteTask(category.tasks, taskIndex)"
                v-if="category.isDeleting && category.tasks.length > 1"
                class="delete"
              >
                ❌
              </button>
            </li>
          </draggable>
        </p>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { deleteCategory, deleteTask } from '../../composables/use-categories'
import { Category } from '../../types/Category'

let category: Category
</script>
