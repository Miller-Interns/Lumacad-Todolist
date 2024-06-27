<script lang="ts">
import CategoryItem from './category-item.vue'
import CustomIcon from '../icons/custom-icon.vue'
import { VueElement, defineComponent, ref } from 'vue'

interface Category {
  id: number
  icon?: VueElement
  title: string
  tasks?: Task[]
}

interface Task {
  id: number
  title: string
  completed: boolean
}

export default defineComponent ({
  components:{
    CategoryItem,
    CustomIcon
  },
  setup() {
    const tasks = ref<Task[]>([
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true }
    ]);

    const categories = ref<Category[]>([
      { id: 1, title: 'Category 1' },
      { id: 2, title: 'Category 2' },
      { id: 2, title: 'Category 2' }
    ]);

    const addTask = (task: Task) => {
      tasks.value.push(task);
    };

    const addCategory = (category: Category) => {
      categories.value.push(category);
    };

    return {
      tasks,
      categories,
      addTask,
      addCategory,
    };
  }
})
</script>

<template>
  <div class="category-item" v-for="category in categories" :key="category.id">
    <CategoryItem>
      <template #icon> <CustomIcon/></template>
      <template #category>
        {{ category.title }}
      </template>

    </CategoryItem>
  </div>
</template>

<style scoped>
.category-item{
  display: inline-flex;
}
</style>
