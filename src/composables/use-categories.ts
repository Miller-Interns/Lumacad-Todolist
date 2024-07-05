import { ref } from 'vue'
import { Category } from '../types/Category'
import { Task } from '../types/Task'
import { notify } from './use-toast'

export let tasks: Task[]

export const categories = ref<Category[]>([])

let nextCategoryId = 1
let nextTaskId = 1

function generateUniqueId(baseId: number): string {
  return `${baseId}_${Date.now()}`
}

function createNewTask(): Task {
  return { id: generateUniqueId(nextTaskId++), text: '', isCompleted: false }
}

function createNewCategory(title: string): Category {
  return {
    id: generateUniqueId(nextCategoryId++),
    title: title,
    tasks: [createNewTask()],
    isDeleting: false
  }
}

export function addCategory(title: string) {
  for (const c of categories.value) {
    if (title === c.title) {
      alert(`Category ${title} already exists`)
      return
    }
  }
  const categoryTitle = title === '' ? 'New category' : title

  const newCategory = createNewCategory(categoryTitle)
  categories.value.push(newCategory)
  notify(`Category "${categoryTitle}" created!`, 3)
}

export function deleteCategory(category: Category) {
  categories.value = categories.value.filter((c: Category) => c !== category)
  notify(`Category "${category.title}" deleted!`, 3)
}

export function addTask(category: Category) {
  category.tasks.push(createNewTask())
}

export function deleteTask(tasks: Task[], task: Task) {
  const taskIndex = tasks.indexOf(task)
  if (taskIndex > -1) {
    tasks.splice(tasks.indexOf(task), 1)
  }
}
