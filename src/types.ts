export interface Task {
  id: number;
  text: string;
  day: string;
  reminder: boolean;
}

export interface TaskList extends Array<Task> {}
