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
  fontFamily: "Brush Script MT, cursive",
  fontOpticalSizing: "auto",
  fontWeight: "400",
  fontStyle: "normal",
  // position: "absolute",
  // top: "285px",
  // left: "50px",
  color: "#f9f9f9",
  fontSize: "3rem",
  textShadow: "2px 2px black", // rgba(0, 0, 0, 0.25)
};

const dateStyle = {
  fontOpticalSizing: "auto",
  fontWeight: "400",
  fontStyle: "normal",
  // position: "absolute",
  // top: "342px",
  // left: "250px",
  color: "#f9f9f9",
  fontSize: "1rem",
  textShadow: "2px 2px black", // rgba(0, 0, 0, 0.25)
  display: "block",
  fontStyle: "italic",
};

export function Print({ row }) {
  const [open, setOpen] = useState(false);
  const { config } = usePage().props;
  const { template } = config;
  const componentRef = useRef(null);

  // console.log(template, "globals");
  const handleAfterPrint = useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = useCallback(() => {
    console.log("`onBeforePrint` called");
    setOpen(!open);
    return Promise.resolve();
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
    onAfterPrint: handleAfterPrint,
    onBeforePrint: handleBeforePrint,
    copyShadowRoots: true,
  });

  const displayName = () => {
    return template.filename === "clean_template_1.png" ? "block" : "hidden";
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          role="menuitem"
          className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&amp;>svg]:size-4 [&amp;>svg]:shrink-0"
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
      <DialogContent
        style={{ width: "688px", height: "auto" }}
        className="max-w-full"
      >
        <DialogHeader>
          <DialogTitle>{`${row.original.first_name} ${row.original.last_name}`}</DialogTitle>
          <DialogDescription>ID#: {row.original.id_no}</DialogDescription>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <div
          style={{
            backgroundImage: `url(${window.location.origin}/templates/${template.filename})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: 400,
            width: 640,
          }}
          className={`w-[${template.width}px] items-center grid-container`}
          ref={componentRef}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          {/* <div className={`w-80 sm:w-full sm:max-w-lg flex items-center`}> */}
          <span style={nameStyle} className={`item-name ${displayName()}`}>
            {/* <span style={nameStyle} className={`${displayName()}`}> */}
            {`${row.original.first_name} ${row.original.last_name}`}
          </span>
          <span style={dateStyle} className="item-date">
            {row.original.arrival_date}
          </span>
          {/* <span style={dateStyle}>{row.original.arrival_date}</span> */}
          {/* <img
            className={`max-h-80vh object-fill min-w-80`}
            src={`${window.location.origin}/templates/${template.filename}`}
            height={template.height}
            width={template.width}
          /> */}
        </div>
        <DialogFooter>
          <Button onClick={handlePrint}>Print</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
