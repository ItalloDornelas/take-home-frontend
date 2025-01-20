export interface Tasks {
  id: string;
  title: string;
  isCompleted: boolean;
  color: string;
}

export interface TasksStatusBar {
  tasks: number;
  completed: number;
}

export interface TasksCard {
  tasks: Tasks[];
}

export interface TaskConfirmDelete {
  id: string;
  children: React.ReactNode;
}
