"use server";
import { InputForm } from "@/components/ui/inputForm";
import { api } from "@/utils/const/api";
import { Task } from "@/utils/models/tasks.model";

export default async function DetailTask({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let task = {} as Task;
  try {
    const res = await fetch(api.tasks + id);
    const data = await res.json();
    task = data;
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="flex w-full justify-center flex-col gap-6">
      <InputForm task={task} />
    </div>
  );
}
