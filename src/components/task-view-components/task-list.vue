<script lang="ts">
import CategoryItem from '../task-view-components/category-item.vue'
import CustomIcon from '../icons/custom-icon.vue'
import { defineComponent, ref } from 'vue'

import { ITask } from '../scripts/ITask'
import { ICategory } from '../scripts/CategoryClass'

export default defineComponent({
  components: {
    CategoryItem,
    CustomIcon
  },
  setup() {
    const tasks = ref<ITask[]>([
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true }
    ])

    const addTask = (task: ITask) => {
      tasks.value.push(task)
    }

    const categories = ref<ICategory[]>([
      { id: 1, title: 'Category 1', task: tasks.value },
      { id: 2, title: 'Category 2' },
      { id: 3, title: 'Category 2' }
    ])

    const addCategory = (category: ICategory) => {
      categories.value.push(category)
    }

    return {
      categories,
      addTask,
      addCategory
    }
  }
})
</script>

<template>
  <div class="category-item" v-for="category in categories" :key="category.id">
    <CategoryItem>
      <template #icon> <CustomIcon /></template>
      <template #category>
        {{ category.title }}
      </template>
      <template #tasks>
        <ul>
          <li v-for="task in category.task" :key="task.id">
            {{ task.title }}
          </li>
          <input type="text" />
        </ul>
      </template>
    </CategoryItem>
  </div>
</template>

<style scoped>
.category-item {
  display: inline-flex;
}
</style>
