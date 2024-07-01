import CategoryItem from '../components/task-view-components/category-item.vue'
import CustomIcon from '../components/icons/custom-icon.vue'
import { ref } from 'vue'
import { IListCategory, IListTask } from './interfaces'

export const tasks = ref<IListTask[]>([])

export const categories = ref<IListCategory[]>([])

export default {
  components: {
    CategoryItem,
    CustomIcon
  },
  setup() {
    return {
      tasks,
      categories
    }
  }
}

export function addTask(category: IListCategory) {
  category.Tasks?.push({ text: '', isCompleted: false })
  console.log(category.Tasks)
}

export function addCategory(title: string) {
  if (title == '')
    categories.value.push({ title: 'New category', Tasks: [{ text: '', isCompleted: false }] })
  else categories.value.push({ title, Tasks: [{ text: '', isCompleted: false }] })
}

export function deleteCategory(category: IListCategory) {
  const filtersList = this.categories.filter((c: IListCategory) => c !== category)
  this.categories = filtersList
}

export function deleteTask(task: IListTask[], taskIndex: number) {
  task.splice(taskIndex, 1)
}
