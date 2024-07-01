<script lang="ts">
import CategoryItem from '../task-view-components/category-item.vue'
import CustomIcon from '../icons/custom-icon.vue'
import { Component, defineComponent, ref, watch } from 'vue'
import { format } from 'path'

interface ListCategory {
  title: string
  icon?: Component
  Tasks?: ListTask[]
}

interface ListTask {
  text: string
  isCompleted: boolean
}

export default defineComponent({
  components: {
    CategoryItem,
    CustomIcon
  },
  setup() {
    

    const tasks = ref<ListTask[]>([
      { text: 'Item 1', isCompleted: true },
      { text: 'Item 2', isCompleted: true },
      { text: 'Item 3', isCompleted: true },
      { text: 'Item 4', isCompleted: true },
      { text: 'Item 5', isCompleted: true },
      { text: 'Item 6', isCompleted: true }
    ])

    const categories = ref<ListCategory[]>([
      { title: 'Category 1', Tasks: tasks.value },
      { title: 'Category 2' },
      { title: 'Category 3' }
    ])

    const addTask = (index: number) => {
      categories.value[index].Tasks?.push({ text: '', isCompleted: false })
    }

    const updateItem = (index: number, taskIndex: number, text: string) => {
      tasks.value[index].text = text
    }

    const addCategory = (category: ListCategory) => {
      categories.value.push(category)
    }

    const categoryForm = window.localStorage.getItem("categories")

    if (categoryForm){
      categories.value = JSON.parse(categoryForm);
    }

    watch(categories, (val) =>{
      window.localStorage.setItem('categories', JSON.stringify(val));
    }, {deep: true})

    return {
      tasks,
      addTask,
      updateItem,
      categories,
      addCategory
    }
  }
})
</script>

<template>
  <div class="category-item" v-for="(category, index) in categories" :key="index">
    <CategoryItem>
      <template #icon> <CustomIcon /></template>
      <template #category>
        {{ category.title }}
      </template>
      <template #tasks>
        <ul>
          <li v-for="(task, taskIndex) in category.Tasks" :key="taskIndex">
            <input
              type="checkbox"
              :id="'task_' + taskIndex"
              v-model="task.isCompleted"
              @input="updateItem(taskIndex, index, task.text)"
            />
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
            />
          </li>
          <div>
            <button @click="addTask(index)">
              <h3>+</h3>
            </button>
          </div>
        </ul>
      </template>
    </CategoryItem>
  </div>
</template>

<style scoped>
.category-item {
  display: inline-flex;
}

.task {
  border: none;
  background: transparent;
}

input[type="text"]
{
  margin-left: 1em;
  font-size: 16px;
}

h3 {
  cursor: pointer;
}
</style>
