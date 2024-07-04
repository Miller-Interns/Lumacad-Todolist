import { categories } from '../composables/use-categories'
import { watch } from 'vue'

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
