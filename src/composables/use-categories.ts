import { ref } from 'vue'
import { Category } from '../types/Category'
import { Task } from '../types/Task'

export const tasks = ref<Task[]>([])

export const categories = ref<Category[]>([])
// const newTask = new Task;

export function addCategory(title: string) {
  if (title === '')
    categories.value.push({
      title: 'New category',
      tasks: [{ text: '', isCompleted: false }],
      isDeleting: false
    })
  else
    categories.value.push({ title, tasks: [{ text: '', isCompleted: false }], isDeleting: false })
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
