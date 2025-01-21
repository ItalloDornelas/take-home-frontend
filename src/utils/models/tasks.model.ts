import { Dispatch, SetStateAction } from "react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  color: string;
}

export interface TasksCreateOrUpdate {
  title: string;
  completed: boolean;
  color: string;
}

export interface TasksStatusBar {
  tasks: number;
  completed: number;
}

export interface TasksCard {
  tasks: Task[];
}

export interface TaskConfirmDelete {
  task: Task;
  children: React.ReactNode;
  setStateTasks: Dispatch<SetStateAction<Task[]>>;
}

export interface TaskForm {
  task?: Task;
}
