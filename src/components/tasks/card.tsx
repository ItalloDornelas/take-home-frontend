"use client";
import { Task, TasksCard } from "@/utils/models/tasks.model";
import { Confirm } from "./confirm";
import { Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { onUpdateRequest } from "@/app/api/onUpdateRequest";
import { useState } from "react";
import Link from "next/link";

export const Card = ({ tasks }: TasksCard) => {
  const [stateTasks, setStateTasks] = useState<Task[]>(tasks);

  const handleUpdate = async (task: Task) => {
    setStateTasks((prevTasks) =>
      prevTasks.map((prevTask) =>
        prevTask.id === task.id
          ? { ...prevTask, completed: !prevTask.completed }
          : prevTask
      )
    );
    await onUpdateRequest(task);
  };

  return (
    <>
      {stateTasks.map((task) => {
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
              <p className={`ml-3 text-sm ${task.completed && "line-through"}`}>
                <Link href={`/new-or-update/${task.id}`}>{task.title}</Link>
              </p>
            </div>
            <Confirm task={task} setStateTasks={setStateTasks}>
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
