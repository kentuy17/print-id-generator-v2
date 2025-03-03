import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { EyeIcon, ViewIcon } from "lucide-react";
import { useState } from "react";

import moment from "moment";

export function ViewButton() {
  return (
    <Button className="flex items-center gap-2 w-full space-between flex-row" />
  );
}

export function ViewTouristDialog({ row }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          role="menuitem"
          className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;>svg]:size-4 [&amp;>svg]:shrink-0"
          tabIndex="-1"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          <a
            href="#"
            className="flex items-center gap-2 w-full space-between flex-row"
          >
            <span>Details</span>
            <span className="ml-auto text-xs tracking-widest opacity-60">
              <EyeIcon className="h-4 w-4" />
            </span>
          </a>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{`${row.original.first_name} ${row.original.last_name}`}</DialogTitle>
          <DialogDescription>ID#: {row.original.id_no}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="arrival" className="text-right">
              Arrival Date
            </Label>
            <Input
              id="arrival"
              defaultValue={moment(row.original.arrival_date).format("ll")}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right">
              Gender
            </Label>
            <Input
              id="gender"
              defaultValue={row.original.gender === "M" ? "Male" : "Female"}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              defaultValue={row.original.phone_number}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="nationality" className="text-right">
              Nationality
            </Label>
            <Input
              id="phone"
              defaultValue={row.original.nationality}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="passport" className="text-right">
              Passport#
            </Label>
            <Input
              id="passport"
              defaultValue={row.original.passport_number}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              defaultValue={row.original.email}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              defaultValue={row.original.address}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="city" className="text-right">
              City
            </Label>
            <Input
              id="city"
              defaultValue={row.original.city}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="country" className="text-right">
              Country
            </Label>
            <Input
              id="country"
              defaultValue={row.original.country}
              className="col-span-3"
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="zip" className="text-right">
              Zip Code
            </Label>
            <Input
              id="zip"
              defaultValue={row.original.zip_code}
              className="col-span-3"
              readOnly={true}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(!open)}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
