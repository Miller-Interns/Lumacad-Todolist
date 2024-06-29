import { VueElement } from 'vue'
import { ITask } from './ITask'

export default class CategoryClass {
  id = null
  icon = VueElement
  title = ''

  constructor(id, icon, title) {
    this.id = id
    this.icon = icon
    this.title = title
  }
}
