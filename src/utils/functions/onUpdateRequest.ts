"use server";
import { revalidatePath } from "next/cache";
import { Task } from "../models/tasks.model";
import { api } from "../const/api";

export const onUpdateRequest = async (
  task: Task,
  noUpdateCompleted = false
) => {
  try {
    const resp = await fetch(api.tasks + task.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: task.title,
        color: task.color,
        completed: noUpdateCompleted ? task.completed : !task.completed,
      }),
    });
    if (resp.ok) revalidatePath("/");
    return { message: "Task successfully edited", success: true };
  } catch (error) {
    console.error(error);
    return { message: "Task editing error", success: false };
  }
};
