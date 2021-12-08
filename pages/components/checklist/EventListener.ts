import { v4 as uuid } from 'uuid'

/* Conditional Types(型定義による条件分岐) */

type Handler<T> = T extends keyof HTMLElementEventMap
  ? (e: HTMLElementEventMap[T]) => void
  : (e: Event) => void

type Listeners = {
  [id: string]: {
    event: string
    element: HTMLElement
    handler: Handler<string>
  }
}

export class EventListener {
  private readonly listeners: Listeners = {}

  add<T extends string>(event: T, element: HTMLElement, handler: Handler<T>, listenerId = uuid()) {
    this.listeners[listenerId] = {
      event,
      element,
      handler
    }

    element.addEventListener(event, handler)
  }

  remove(listenerId: string) {
    const listener = this.listeners[listenerId]

    if (!listener) return

    listener.element.removeEventListener(listener.event, listener.handler)

    /* delete 演算子 オブジェクトからプロパティを削除する */
    delete this.listeners[listenerId]
  }
}