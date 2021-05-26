export enum Taskstatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export type Task = {
  id: string;
  title: string;
  description: string;
  status: Taskstatus;
};
