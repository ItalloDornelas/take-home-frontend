import { Card } from "./card";
import { StatusBar } from "./statusBar";
import { Withdout } from "./without";

export const Tasks = async () => {
  const response = await fetch("http://localhost:3001/tasks");
  const data = await response.json();

  const completedsTasks = data.filter(
    (task: { title: string; color: string; completed: boolean }) =>
      task.completed === true
  );

  return (
    <div className="mt-8 w-11/12 max-w-4xl rounded-md p-6">
      <StatusBar tasks={data.length} completed={completedsTasks.length} />
      {data && data.length > 0 ? <Card tasks={data} /> : <Withdout />}
    </div>
  );
};
