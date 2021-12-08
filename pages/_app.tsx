import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { EventListener } from './components/checklist/EventListener';
import { Status, statusMap, Task } from './components/checklist/Task';
import { TaskCollection } from './components/checklist/TaskCollection';
//import { TaskRenderer } from './components/checklist/TaskRenderer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  //const app = new Application()
  //app.start()
  
  return <Component {...pageProps} />
}

class Application {
  private readonly eventListener = new EventListener()
  private readonly taskCollection = new TaskCollection()
  // private readonly taskRenderer = new TaskRenderer(
  //   document.getElementById('todoList') as HTMLElement,
  //   document.getElementById('doingList') as HTMLElement,
  //   document.getElementById('doneList') as HTMLElement,
  // )

  start() {
    //const taskItems = this.taskRenderer.renderAll(this.taskCollection)
    const createForm = document.getElementById('createForm')  as HTMLElement
    const deleteAllDoneTaskButton = document.getElementById('deleteAllDoneTask') as HTMLElement

    // taskItems.forEach(({task, deleteButtonEl}) => {
    //   this.eventListener.add('click', deleteButtonEl, () => this.handleClickDeleteTask(task), task.id)
    // })
    
    this.eventListener.add('submit', createForm, this.handleSubmit)
    this.eventListener.add('click', deleteAllDoneTaskButton, this.handleClickDelteAllDoneTask)
    //this.taskRenderer.subscribeDragAndDrop(this.handleDragAndDrop)     
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()
    
    const titleInput = document.getElementById('title') as HTMLInputElement

    if (!titleInput.value) return

    const task = new Task({title: titleInput.value})
    this.taskCollection.add(task)

    //const { deleteButtonEl } = this.taskRenderer.append(task)

    // this.eventListener.add(
    //   'click',
    //   deleteButtonEl,
    //   () => this.handleClickDeleteTask(task),
    //   task.id,
    // )

    titleInput.value = ''
  }

  private handleClickDelteAllDoneTask = () => {
    if (!window.confirm('DONE のタスクを一括削除してよろしいですか?')) return

    const doneTasks = this.taskCollection.filter(statusMap.done)
    doneTasks.forEach(task => this.executeDeleteTask(task))
  }

  private executeDeleteTask = (task: Task) => {
    this.eventListener.remove(task.id)
    this.taskCollection.delete(task)
    //this.taskRenderer.remove(task)
  }

  private handleClickDeleteTask = (task: Task) => {
    if (!window.confirm(`${task.title}を削除してよろしいですか?`)) return
    
    this.executeDeleteTask(task)
  }

  private handleDragAndDrop = (el: Element, sibling: Element | null, newStatus: Status) => {
    //const taskId = this.taskRenderer.getId(el)

    //if (!taskId) return

    //const task = this.taskCollection.find(taskId)

    //if (!task) return
    
    //task.update({ status: newStatus })
    //this.taskCollection.update(task)

    if (sibling) {
      //const nextTaskId = this.taskRenderer.getId(sibling)

      //if (!nextTaskId) return

      //const nextTask = this.taskCollection.find(nextTaskId)

      //if (!nextTask) return

      //this.taskCollection.moveAboveTarge(task, nextTask)
    } else {
      //this.taskCollection.movetToLast(task)
    }    
  }
}

export default MyApp
