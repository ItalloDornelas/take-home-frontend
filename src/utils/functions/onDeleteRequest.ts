"use server";
import { revalidatePath } from "next/cache";

export const onDeleteRequest = async (id: string) => {
  try {
    const resp = await fetch("http://localhost:3001/tasks/" + id, {
      method: "DELETE",
    });
    if (resp.ok) revalidatePath("/");
    return { message: "Task deleted successfully", success: true };
  } catch (error) {
    console.error(error);
    return { message: "Task deletion error", success: true };
  }
};
