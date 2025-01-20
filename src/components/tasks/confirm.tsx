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
    const response = await fetch("http://localhost:3001/tasks/" + id, {
      method: "DELETE",
    });
    console.log(response, "RESPONSE");
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
            <button onClick={handleDelete} className="text-red-500 p-4">
              Confirm
            </button>
          </DialogClose>
          <DialogClose asChild>
            <button className="text-[#333333] p-4">Cancel</button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
