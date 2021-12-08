export const issueStatusMap = {
  todo: 'TODO',
  doing: 'DOING',
  done: 'DONE',
} as const

export type IssueStatus = typeof issueStatusMap[keyof typeof issueStatusMap]