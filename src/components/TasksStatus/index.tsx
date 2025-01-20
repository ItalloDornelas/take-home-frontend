import { TasksStatus as TasksStatusType } from "@/utils/models";

export const TasksStatus = ({ tasks, completed }: TasksStatusType) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className="text-sm text-[#1E6F9F] font-bold leading-5 text-left decoration-solid decoration-clip">
        Tasks{" "}
        <span className="text-white inline-flex items-center rounded-2xl bg-[#333333] px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10">
          {tasks}
        </span>
      </h2>
      <p className="text-sm text-[#8284FA] font-bold leading-5 text-left decoration-solid decoration-clip">
        Completed{" "}
        <span className="text-white inline-flex items-center rounded-2xl bg-[#333333] px-2 py-1 text-xs font-medium  ring-1 ring-inset ring-gray-500/10">
          {completed}
        </span>
      </p>
    </div>
  );
};
