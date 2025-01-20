"use server";
import { revalidatePath } from "next/cache";
import { Task } from "../models/tasks.model";

export const onUpdateRequest = async (task: Task) => {
  try {
    const resp = await fetch("http://localhost:3001/tasks/" + task.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !task.completed,
      }),
    });
    if (resp.ok) revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
};
