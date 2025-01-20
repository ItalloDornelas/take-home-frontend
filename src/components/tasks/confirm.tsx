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
import { TaskConfirmDelete } from "@/utils/models/tasks.model";

export const Confirm = ({ children, id }: TaskConfirmDelete) => {
  const handleDelete = async () => {
    "use server";
    try {
      await fetch("http://localhost:3001/tasks/" + id, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error);
    }
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
          <form action={handleDelete}>
            <DialogClose asChild>
              <button type="submit" className="text-red-500 p-2">
                Confirm
              </button>
            </DialogClose>
            <DialogClose asChild>
              <button type="button" className="text-[#333333] p-2">
                Cancel
              </button>
            </DialogClose>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
