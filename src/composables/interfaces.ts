import { Component } from 'vue'

export interface IListTask {
  text: string
  isCompleted: boolean
}

export interface IListCategory {
  title: string
  icon?: Component
  Tasks: IListTask[]
  color?: string
}
