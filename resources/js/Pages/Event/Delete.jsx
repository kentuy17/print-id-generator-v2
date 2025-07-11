import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import axios from "axios";

import { DeleteIcon } from "lucide-react";
// import {  useState } from "react";

import { router } from "@inertiajs/react";

export const DeleteDialog = ({ row }) => {
  // const [open, setOpen] = useState(false);

  function handleDelete() {
    router.visit(route("event.delete", row.original.id), {
      method: "delete",
    });
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div
          role="menuitem"
          className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;>svg]:size-4 [&amp;>svg]:shrink-0"
          data-orientation="vertical"
        >
          <a
            href="#"
            className="flex items-center gap-2 w-full space-between flex-row"
          >
            <span>Delete</span>
            <span className="ml-auto text-xs tracking-widest opacity-60">
              <DeleteIcon className="h-4 w-4" />
            </span>
          </a>
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
