import { Task } from './Task'

export type Category = {
  title: string
  tasks: Task[]
  isDeleting: boolean
}
