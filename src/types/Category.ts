import { Task } from './Task'

export type Category = {
  title: string
  Tasks: Task[]
  isDeleting: boolean
}
