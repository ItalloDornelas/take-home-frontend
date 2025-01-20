import { Header } from "@/components/Header";
import { TasksStatus } from "@/components/TasksStatus";
import { WithdoutTasks } from "@/components/WithdoutTasks";

export default function Home() {
  const tasks = [];
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <main className="flex flex-col items-center w-full flex-grow">
        <div className="mt-8 w-11/12 max-w-4xl rounded-md p-6">
          <TasksStatus tasks={0} completed={0} />
          {tasks.length === 0 ? <WithdoutTasks /> : null}
        </div>
      </main>
    </div>
  );
}
