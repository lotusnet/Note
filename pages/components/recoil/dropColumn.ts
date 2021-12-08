import { atom } from 'recoil';
import { IssueStatus, issueStatusMap } from '../prototype/IssueStatus';

export const droppedColumnState = atom<IssueStatus>({
  key: 'droppedColumnState',
  default: issueStatusMap.todo,
});