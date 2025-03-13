import { cn } from "@/lib/utils";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";

export const columns = [
  {
    accessorKey: "filter_date",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Arrival Date"
        className={"pl-3"}
      />
    ),
    cell: ({ row }) => (
      <div className="min-w-[80px] pl-3">{row.getValue("filter_date")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "total",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Total Count" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("total")}</span>
        </div>
      );
    },
    toggleSorting: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
