import { Status, Task, TaskObject } from "./Task";

const STORAGE_KEY = 'TASKS'

export class TaskCollection {
  private readonly storage
  private tasks: Task[] = []

  constructor() {
    this.storage = localStorage
    this.tasks = this.getStoredTasks()
  }

  add(task: Task) {
      this.tasks.push(task)
      this.upaateStorage()
  }

  delete(task: Task) {
    this.tasks = this.tasks.filter(({ id }) => id !== task.id)
    this.upaateStorage()
  }

  find(id: string) {
    return this.tasks.find((task) => task.id === id)
  }

  update(task: Task) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === task.id) return task
      return item
    })
  }

  filter(filterStatus: Status) {
    return this.tasks.filter(({ status }) => status === filterStatus)
  }

  moveAboveTarge(task: Task, target: Task) {
    const taskIndex = this.tasks.indexOf(task)
    const targetIndex = this.tasks.indexOf(target)

    this.changeOrder(task, taskIndex, taskIndex < targetIndex ? targetIndex -1 : targetIndex)
  }

  movetToLast(task: Task) {
    const taskIndex = this.tasks.indexOf(task)

    this.changeOrder(task, taskIndex, this.tasks.length)
  }

  private changeOrder(task: Task, taskIndex: number, targetIndex: number) {
    // 第1引数の要素から第2引数の個数分切り取り
    this.tasks.splice(taskIndex, 1)
    // 第1引数の要素の場所へ、第2引数の個数分切り取って、第3引数の要素を挿入
    this.tasks.splice(targetIndex, 0, task)
    this.upaateStorage()
  }

  private upaateStorage() {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(this.tasks))
  }

  private getStoredTasks() {
    const jsonString = this.storage.getItem(STORAGE_KEY)

    if (!jsonString) return []

    try {
      const storedTasks = JSON.parse(jsonString)

      assertIsTaskObjects(storedTasks)

      const tasks = storedTasks.map(task => new Task(task))

      return tasks
    } catch {
      this.storage.removeItem(STORAGE_KEY)
      return []
    }
  }
}

/* Assertion Functions オブジェクトの型チェックを行い、チェックOKの場合は、任意の型として使用できる */
function assertIsTaskObjects(value: any): asserts value is TaskObject[] {
  if (!Array.isArray(value) || !value.every(item => Task.validate(item))) {
    throw new Error('引数[value]は TaskObject[] 型と一致しません。')
  }
}