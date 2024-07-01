<script lang="ts">
import { defineComponent, watch } from 'vue'
import CategoryItem from './category-item.vue'
import CustomIcon from '../icons/custom-icon.vue'
import DeleteIcon from '../icons/delete-icon.vue'

import Categories, {
  categories,
  addTask,
  deleteCategory,
  deleteTask
} from '../../composables/categories'

export default defineComponent({
  mixins: [Categories],
  data() {
    return {
      drag: false
    }
  },
  setup() {
    const categoryForm = window.localStorage.getItem('categories')

    if (categoryForm) {
      categories.value = JSON.parse(categoryForm)
    }

    watch(
      categories,
      (val) => {
        window.localStorage.setItem('categories', JSON.stringify(val))
      },
      { deep: true }
    )
    return {
      categories,
      CategoryItem,
      CustomIcon,
      DeleteIcon,
      addTask,
      deleteCategory,
      deleteTask
    }
  }
})
</script>

<template>
  <div class="category-item" v-for="(category, index) in categories" :key="index">
    <CategoryItem v-model="categories[index]">
      <!-- <template #icon> <CustomIcon /></template> -->
      <template #category>
        <input
          type="text"
          :id="'category_' + categories[index].title"
          v-bind:style="{
            background: 'transparent',
            border: 'none',
            'font-size': '24px',
            'font-weight': 'bold',
            width: '80%',
            bottom: '0px'
          }"
          v-model="categories[index].title"
          maxLength="16"
        />
        <button @click="deleteCategory(category)" id="delete">
          <h3>❌</h3>
        </button>
      </template>
      <template #tasks>
        <ul class="no-bullets">
          <li v-for="(task, taskIndex) in categories[index].Tasks" :key="taskIndex">
            <input type="checkbox" :id="'task_' + taskIndex" v-model="task.isCompleted" />
            <input
              type="text"
              :for="'item_' + taskIndex"
              v-bind:style="
                task.isCompleted
                  ? { 'text-decoration-line': 'line-through' }
                  : { 'text-decoration-line': 'none' }
              "
              class="task"
              v-model="task.text"
              placeholder="Add task..."
              maxLength="24"
            />
            <button
              @click="deleteTask(categories[index].Tasks, taskIndex)"
              v-if="categories[index].Tasks.length > 1"
              id="delete"
            >
              ❌
            </button>
          </li>
          <div>
            <button
              @click="addTask(categories[index])"
              v-if="categories[index].Tasks[categories[index].Tasks.length - 1].text != ''"
            >
              <h3>+</h3>
            </button>
          </div>
        </ul>
      </template>
    </CategoryItem>
  </div>
</template>

<style scoped>
input[type='checkbox'] {
  cursor: pointer;
}
#delete {
  place-content: center;
  float: right;
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
}

#delete .icon {
  width: 28px;
  height: 28px;
}

.no-bullets {
  list-style-type: none;
  margin-left: -24px;
}
.category-item {
  display: inline-flex;
  width: inherit;
}

.task {
  border: none;
  background: transparent;
  width: 80%;
}

input[type='text'] {
  margin-left: 1em;
  font-size: 16px;
  width: 75%;
}

h3 {
  cursor: pointer;
}
</style>
