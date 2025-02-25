// "use client";

import * as React from "react";
import { useStateContext } from "@/context/ContextProvider";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import moment from "moment";

export function DatePicker({ className }) {
  const { date, setDate } = useStateContext();
  const btnRef = React.useRef(null);

  const handleDateChange = (newDate) => {
    console.log(newDate);

    setDate(newDate);
    btnRef.current.click();
  };

  React.useEffect(() => {
    // console.log(format(date, "yyyy-MM-dd"));
    console.log(moment(date).format("ll"));
  }, [date]);

  return (
    // <></>
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          ref={btnRef}
          className={cn(
            "flex justify-start h-9 w-full px-3 py-1",
            !date && "text-muted-foreground",
            className
          )}
        >
          <CalendarIcon />
          {date ? moment(date).format("ll") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
