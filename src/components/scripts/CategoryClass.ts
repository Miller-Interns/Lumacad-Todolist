export class CategoryClass {
  constructor(public name: string, public tasks: Task[]) {
    this.name = name;
  }
}

export class Task{
  constructor(public name: string) {
    this.name = name;
  }
}