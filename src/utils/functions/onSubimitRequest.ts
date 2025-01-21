"use server";
import { TasksCreateOrUpdate } from "@/utils/models/tasks.model";
import { revalidatePath } from "next/cache";

export const onSubimitRequest = async (task: TasksCreateOrUpdate) => {
  try {
    const resp = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (resp.ok) revalidatePath("/");
    return { message: "Task created successfully", success: true };
  } catch (error) {
    console.error(error);
    return { message: "Task creation error", success: false };
  }
};
