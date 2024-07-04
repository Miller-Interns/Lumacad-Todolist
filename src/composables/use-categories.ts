import { ref } from 'vue'
import { Category } from '../types/Category'
import { Task } from '../types/Task'

export let tasks: Task[]

export const categories = ref<Category[]>([])

const newTask: Task = { text: '', isCompleted: false }

const newCategory: Category = { title: '', tasks: [newTask], isDeleting: false }

export function addCategory(title: string) {
  for (const c of categories.value) {
    if (title === c.title) {
      alert(`Category ${title} already exists`)
      return
    }
  }
  newCategory.title = title === '' ? 'New category' : title

  categories.value.push(newCategory)
}

export function deleteCategory(category: Category) {
  const filtersList = this.categories.filter((c: Category) => c !== category)
  this.categories = filtersList
}

export function addTask(category: Category) {
  category.tasks?.push({ text: '', isCompleted: false })
  console.log(category.tasks)
}

export function deleteTask(task: Task[], taskIndex: number) {
  if (task.length === 1) task[taskIndex].text = ''
  else task.splice(taskIndex, 1)
}
