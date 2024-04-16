export interface Task {
  id: number;
  taskText: string;
  day: string;
  reminder: boolean;
}

export interface TaskList extends Array<Task> {}
