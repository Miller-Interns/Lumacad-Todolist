import { ref } from 'vue'
import { Category } from '../types/Category'
import { Task } from '../types/Task'

export const tasks = ref<Task[]>([])

export const categories = ref<Category[]>([])

export function addCategory(title: string) {
  if (title == '')
    categories.value.push({ title: 'New category', Tasks: [{ text: '', isCompleted: false }] })
  else categories.value.push({ title, Tasks: [{ text: '', isCompleted: false }] })
}

export function deleteCategory(category: Category) {
  const filtersList = this.categories.filter((c: Category) => c !== category)
  this.categories = filtersList
}

export function addTask(category: Category) {
  category.Tasks?.push({ text: '', isCompleted: false })
  console.log(category.Tasks)
}
export function deleteTask(task: Task[], taskIndex: number) {
  task.splice(taskIndex, 1)
}
