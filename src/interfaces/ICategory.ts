import { ITask } from '../interfaces/ITask'
import { Component } from 'vue'

export default interface ICategory {
  title: string
  icon?: Component
  Tasks: ITask[]
  color?: string
}
