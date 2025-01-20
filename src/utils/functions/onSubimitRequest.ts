"use server";
import { TasksCreateOrUpdate } from "@/utils/models/tasks.model";

export const onSubimitRequest = async (task: TasksCreateOrUpdate) => {
  try {
    await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    return { message: "Task created successfully", success: true };
  } catch (error) {
    console.error(error);
    return { message: "Task creation error", success: false };
  }
};
