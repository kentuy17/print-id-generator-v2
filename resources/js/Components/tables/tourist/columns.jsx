import { cn } from "@/lib/utils";

import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";

export const statuses = [
  {
    value: "Active",
    label: "Active",
    icon: CheckCircledIcon,
  },
  {
    value: "Idle",
    label: "Idle",
    icon: CircleIcon,
  },
  {
    value: "Away",
    label: "Away",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "Offline",
    label: "Offline",
    icon: CrossCircledIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];

const getIconColor = (value) => {
  switch (value) {
    case "Active":
      return "text-green-500";
    case "Away":
    case "Idle":
      return "text-yellow-500";
    case "Offline":
      return "text-gray-500";
    default:
      return "text-gray-500";
  }
};

const getStatusStyle = (status) => {
  switch (status) {
    case "Active":
      return "border-green-600";
    case "Away":
    case "Idle":
    case "Waiting":
      return "border-yellow-400";
    default:
      return "border-gray-300";
  }
};

const fetchRandomImage = async (gender) => {
  const img = await axios
    .get(`https://avatar.iran.liara.run/public/${gender}`)
    .then((response) => {
      return response.data;
    });
  return img;
};

export const columns = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "id_no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" className={"pl-3"} />
    ),
    cell: ({ row }) => (
      <div className="w-[80px] pl-3">#{row.getValue("id_no")}</div>
    ),
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      let status = statuses[Math.floor(Math.random() * statuses.length)].value; //randomly select a status
      let firstName = row.original.first_name;
      let lastName = row.original.last_name;
      let gender = { M: "boy", F: "girl" }[row.original.gender];
      let name = `${firstName} ${lastName}`;

      return (
        <div className="flex space-x-2 ml-4 items-center">
          {/* {label && <Badge variant="outline">{label.label}</Badge>} */}
          <div className={`avatar ${status.toLowerCase()}`}>
            <Avatar className={`h-10 w-10 border-2 ${getStatusStyle(status)}`}>
              <AvatarImage
                // src={`/images/${row.original.id}.png`}
                src={`https://avatar.iran.liara.run/public/${gender}`}
                alt="Avatar"
              />
              <AvatarFallback className="font-semi-bold">
                {`${firstName[0]}${lastName[0]}`}
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="max-w-[500px] truncate font-medium">{name}</span>
        </div>
      );
    },
    filterFn: (row, id, filterValue) => {
      const rowValue = row.getValue("firstName");
      console.log(rowValue, "rowValue");

      return filterValue.includes(rowValue.toLowerCase());
    },
  },
  {
    accessorKey: "nationality",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nationality" />
    ),
    cell: ({ row }) => {
      // const status = statuses.find(
      //   (status) => status.value === row.getValue("status")
      // );

      // if (!status) return null;

      return (
        <div className="flex items-center">
          <span>{row.getValue("nationality")}</span>
        </div>
      );
    },
    toggleSorting: true,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "phone_number",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Phone Number" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue("phone_number")}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
