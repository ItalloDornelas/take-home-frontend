"use client";
import { Task, TasksCard } from "@/utils/models/tasks.model";
import { Confirm } from "./confirm";
import { Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { onUpdateRequest } from "@/utils/functions/onUpdateRequest";

export const Card = ({ tasks }: TasksCard) => {
  const handleUpdate = async (task: Task) => {
    await onUpdateRequest(task);
  };

  return (
    <>
      {tasks.map((task) => {
        const color = task.color ? task.color : "#333333";
        return (
          <div
            key={task.id}
            className={`flex items-center p-4 rounded-lg shadow mt-8 justify-between bg-[#333333] ${
              task.completed && "opacity-50"
            }`}
            style={{
              borderColor: color,
              borderWidth: task.color ? "1px" : "0px",
            }}
          >
            <div className="flex items-center">
              <Checkbox
                defaultChecked={task.completed}
                onCheckedChange={() => handleUpdate(task)}
                className="w-4 h-4 text-blue-600 border-[#4EA8DE] rounded-lg data-[state=checked]:bg-[#5E60CE] data-[state=checked]:border-[#5E60CE]"
              />
              <p
                className={`ml-3 text-sm text-gray-900 ${
                  task.completed && "line-through"
                }`}
              >
                {task.title}
              </p>
            </div>
            <Confirm task={task}>
              <button>
                <Trash2 size={16} />
              </button>
            </Confirm>
          </div>
        );
      })}
    </>
  );
};
