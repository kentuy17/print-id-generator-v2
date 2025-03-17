import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DeleteIcon,
  EditIcon,
  // Pencil,
  PrinterIcon,
  // ViewIcon,
} from "lucide-react";
import { Link } from "@inertiajs/react";
import { ViewTouristDialog } from "@/Pages/Tourist/View";
import { Print } from "@/Pages/Tourist/Print";
import { DeleteDialog } from "@/Pages/Event/Delete";
// import { PrintButton } from "@/Components/print-button";

export function DataTableRowActions({ row }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <ViewTouristDialog row={row} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={route("event.edit", row.original.id)}
            className="flex space-between w-full items-center"
          >
            Edit{" "}
            <DropdownMenuShortcut>
              <EditIcon className="h-4 w-4" />
            </DropdownMenuShortcut>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <DeleteDialog row={row} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
