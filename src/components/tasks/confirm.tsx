"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { onDeleteRequest } from "@/utils/functions/onDeleteRequest";
import { TaskConfirmDelete } from "@/utils/models/tasks.model";

export const Confirm = ({
  children,
  task,
  setStateTasks,
}: TaskConfirmDelete) => {
  const handleDelete = async () => {
    setStateTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
    const responseSubmitting = await onDeleteRequest(task.id);
    toast({
      title: responseSubmitting.message,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-col gap-4">
          <DialogTitle>Are you sure you want to remove the task?</DialogTitle>
          <DialogDescription>
            Once confirmed, this action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <button onClick={handleDelete} className="text-red-500 p-2">
              Confirm
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button className="text-[#333333] p-2">Cancel</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
