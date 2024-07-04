import { Task } from './Task'

export type Category = {
  id: string
  title: string
  tasks: Task[]
  isDeleting: boolean
}
