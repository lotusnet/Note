import { Issue, IssueObject } from "./Issue";
import { IssueStatus } from "./IssueStatus";

const STORAGE_KEY = 'TASKS'

export class IssueList {
  private readonly storage
  private issues: Issue[] = []

  constructor() {
    this.storage = localStorage
    this.issues = this.getStoredTasks()
  }

  add(issue: Issue) {
      this.issues.push(issue)
      this.upaateStorage()
  }

  delete(issue: Issue) {
    this.issues = this.issues.filter(({ id }) => id !== issue.id)
    this.upaateStorage()
  }

  find(id: string) {
    return this.issues.find((issue) => issue.id === id)
  }

  update(issue: Issue) {
    this.issues = this.issues.map((item) => {
      if (item.id === issue.id) return issue
      return item
    })
  }

  filter(filterStatus: IssueStatus) {
    return this.issues.filter(({ status }) => status === filterStatus)
  }

  moveAboveTarge(issue: Issue, target: Issue) {
    const issueIndex = this.issues.indexOf(issue)
    const targetIndex = this.issues.indexOf(target)

    this.changeOrder(issue, issueIndex, issueIndex < targetIndex ? targetIndex -1 : targetIndex)
  }

  movetToLast(issue: Issue) {
    const issueIndex = this.issues.indexOf(issue)

    this.changeOrder(issue, issueIndex, this.issues.length)
  }

  private changeOrder(issue: Issue, issueIndex: number, targetIndex: number) {
    // 第1引数の要素から第2引数の個数分切り取り
    this.issues.splice(issueIndex, 1)
    // 第1引数の要素の場所へ、第2引数の個数分切り取って、第3引数の要素を挿入
    this.issues.splice(targetIndex, 0, issue)
    this.upaateStorage()
  }

  private upaateStorage() {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(this.issues))
  }

  private getStoredTasks() {
    const jsonString = this.storage.getItem(STORAGE_KEY)

    if (!jsonString) return []

    try {
      const storedIssues = JSON.parse(jsonString)

      assertIsIssueObjects(storedIssues)

      const issues = storedIssues.map(issue => new Issue(issue))

      return issues
    } catch {
      this.storage.removeItem(STORAGE_KEY)
      return []
    }
  }
}

/* Assertion Functions オブジェクトの型チェックを行い、チェックOKの場合は、任意の型として使用できる */
function assertIsIssueObjects(value: any): asserts value is IssueObject[] {
  if (!Array.isArray(value) || !value.every(item => Issue.validate(item))) {
    throw new Error('引数[value]は IssueObject[] 型と一致しません。')
  }
}