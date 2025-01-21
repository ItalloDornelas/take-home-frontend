"use server";
import { api } from "@/utils/const/api";
import { revalidatePath } from "next/cache";

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
