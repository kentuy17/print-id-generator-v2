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

import { EyeIcon, PrinterIcon } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import moment from "moment";
import { IdPrintPreview } from "@/Components/id-print-preview";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

import { usePage } from "@inertiajs/react";

export function ViewButton() {
  return (
    <Button className="flex items-center gap-2 w-full space-between flex-row" />
  );
}

const testData = {
  first_name: "Padidi",
  last_name: "Pogi",
  arrival_date: "2023-01-01",
};

const nameStyle = {
  fontFamily: "Brush Script MT",
  fontOpticalSizing: "auto",
  fontWeight: "400",
  fontStyle: "normal",
  position: "absolute",
  top: "285px",
  left: "50px",
  color: "#f9f9f9",
  fontSize: "3rem",
  textShadow: "2px 2px black", // rgba(0, 0, 0, 0.25)
  // text-shadow: 2px 2px #FF0000;
};

const dateStyle = {
  fontOpticalSizing: "auto",
  fontWeight: "400",
  fontStyle: "normal",
  position: "absolute",
  top: "342px",
  left: "250px",
  color: "#f9f9f9",
  fontSize: "1rem",
  textShadow: "2px 2px black", // rgba(0, 0, 0, 0.25)
  display: "block",
};

export function Print({ row }) {
  const [open, setOpen] = useState(false);
  const { config } = usePage().props;
  // const [template, setTemplate] = useState(null);
  // const componentRef = useRef(null);

  // console.log(row.original, "oten");

  // axios.get(route("id-template.active")).then((response) => {
  //   console.log(response.data, "template");
  //   setTemplate(response.data);
  // });

  // const template = axios.get(route("id-template.active")).then((response) => {
  //   console.log(response.data, "template");
  //   setTemplate(response.data);
  // });

  const { template } = config;

  console.log(template, "globals");

  function displayName() {
    return template.filename === "clean_template_1.png" ? "block" : "hidden";
  }

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
            <span>Print ID</span>
            <span className="ml-auto text-xs tracking-widest opacity-60">
              <PrinterIcon className="h-4 w-4" />
            </span>
          </a>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`${row.original.first_name} ${row.original.last_name}`}</DialogTitle>
          <DialogDescription>ID#: {row.original.id_no}</DialogDescription>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        {/* <pre>{JSON.stringify(row.original, null, 2)}</pre> */}
        <div className={`w-[${template.width}px] flex items-center`}>
          <span style={nameStyle} className={displayName()}>
            {`${row.original.first_name} ${row.original.last_name}`}
          </span>
          <span style={dateStyle}>{row.original.arrival_date}</span>
          <img
            className={`max-h-80vh object-cover`}
            src={`${window.location.origin}/templates/${template.filename}`}
            height={template.height}
            width={template.width}
          />
        </div>
        <DialogFooter>
          <Button onClick={() => setOpen(!open)}>OK</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
