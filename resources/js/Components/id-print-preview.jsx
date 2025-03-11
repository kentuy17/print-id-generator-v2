import React from "react";

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
import { Button } from "@/components/ui/button";

const nameStyle = {
  fontFamily: "Brush Script MT",
  fontOpticalSizing: "auto",
  fontWeight: "400",
  fontStyle: "normal",
  position: "absolute",
  top: "270px",
  left: "50px",
  color: "#f9f9f9",
  fontSize: "2.5rem",
  textShadow: "2px 2px black", // rgba(0, 0, 0, 0.25)
  // text-shadow: 2px 2px #FF0000;
};

const dateStyle = {
  fontSize: "1rem",
  textAlign: "center",
  marginBottom: "1rem",
};

export const IdPrintPreview = ({ data, children, template }) => {
  const name = `${data.first_name} ${data.last_name}`;
  const arrivalDate = data.arrival_date;

  const dimensions = () => {
    if (template.orientation === "portrait") {
      return { width: 480, height: 640 };
    } else {
      return { width: 960, height: 720 };
    }
  };

  const selectTemplate = () => {
    alert(`Selected "${template.name}"`);
  };

  function displayName() {
    return template.filename === "clean_template_1.png" ? "block" : "hidden";
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Preview</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <div className={`w-[960px] flex items-center`}>
          <span style={nameStyle} className={displayName()}>
            Kenneth Camacho
          </span>
          <img
            className={`max-h-80vh object-cover`}
            src={`${window.location.origin}/templates/${template.filename}`}
            height={720}
            width={960}
          />
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant={"outline"}>
              Close
            </Button>
          </DialogClose>
          <Button type="button" onClick={selectTemplate} variant={"default"}>
            Select
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
