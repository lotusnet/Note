import { v4 as uuid, validate } from 'uuid';
import { IssueStatus, issueStatusMap } from "./IssueStatus";

export type IssueObject = {
  id: string
  title: string
  status: IssueStatus
}
  
export class Issue {
  readonly id
  title
  status

  constructor(properties: { id?: string, title: string, status?: IssueStatus }) {
    this.id = properties.id ||  uuid()
    this.title = properties.title
    this.status =  properties.status || issueStatusMap.todo
  }

  update(properties: {title?: string; status?: IssueStatus}) {
    this.title = properties.title || this.title
    this.status = properties.status || this.status
  }

  static validate(value: any) {
    if (!value) return false
    if (!validate(value.id)) return false
    if (!value.title) return false
    if (!Object.values(issueStatusMap).includes(value.status)) return false

    return true
  }
}