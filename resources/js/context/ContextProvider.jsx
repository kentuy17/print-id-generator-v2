import { createContext, useContext, useState } from "react";
// import { newDate } from "@/assets/utils";
import { DateTime } from "luxon";
import moment from "moment";

const StateContext = createContext({
  date: moment(),
  setDate: () => {},
  reportDate: {},
  setReportDate: () => {},
});

const newDate = (days) => {
  return DateTime.now().plus({ days }).toJSDate();
};

export const ContextProvider = ({ children }) => {
  const [date, setDate] = useState(newDate());

  const dateRange = {
    dateFrom: moment().format("MMM D, YYYY"), // e.g., "Mar 12, 2025"
    dateTo: moment().add(7, "days").format("MMM D, YYYY"), // e.g., "Mar 19, 2025"
  };

  const [reportDate, setReportDate] = useState(dateRange);

  return (
    <StateContext.Provider
      value={{
        date,
        setDate,
        reportDate,
        setReportDate,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
