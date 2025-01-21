"use server";
import { revalidatePath } from "next/cache";
import { api } from "../const/api";

export const onDeleteRequest = async (id: string) => {
  try {
    await fetch(api.tasks + id, {
      method: "DELETE",
    });
    return { message: "Task deleted successfully", success: true };
  } catch (error) {
    console.error(error);
    return { message: "Task deletion error", success: true };
  } finally {
    revalidatePath("/");
  }
};
