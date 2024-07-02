import { ref } from 'vue'
import ICategory from '../interfaces/ICategory'
import ITask from '../interfaces/ITask'

export const tasks = ref<ITask[]>([])

export const categories = ref<ICategory[]>([])

export default {
  setup() {
    return {
      tasks,
      categories
    }
  }
}

export function addTask(category: ICategory) {
  category.Tasks?.push({ text: '', isCompleted: false })
  console.log(category.Tasks)
}

export function addCategory(title: string) {
  if (title == '')
    categories.value.push({ title: 'New category', Tasks: [{ text: '', isCompleted: false }] })
  else categories.value.push({ title, Tasks: [{ text: '', isCompleted: false }] })
}

export function deleteCategory(category: ICategory) {
  const filtersList = this.categories.filter((c: ICategory) => c !== category)
  this.categories = filtersList
}

export function deleteTask(task: ITask[], taskIndex: number) {
  task.splice(taskIndex, 1)
}
