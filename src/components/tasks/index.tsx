import { Task } from "@/utils/models/tasks.model";
import { Card } from "./card";
import { StatusBar } from "./statusBar";
import { Withdout } from "./without";
import { api } from "@/utils/const/api";

export const Tasks = async () => {
  let tasks = [];
  try {
    const response = await fetch(api.tasks);
    tasks = await response.json();
  } catch (error) {
    console.error(error);
  }

  const completedsTasks = tasks.filter((task: Task) => task.completed === true);

  return (
    <>
      <StatusBar tasks={tasks.length} completed={completedsTasks.length} />
      {tasks && tasks.length > 0 ? <Card tasks={tasks} /> : <Withdout />}
    </>
  );
};
