import { createContext, useContext, useEffect, useState } from "react";
// import { newDate } from "@/assets/utils";
import { DateTime } from "luxon";
import moment from "moment";

const StateContext = createContext({
  date: moment(),
  setDate: () => {},
});

const newDate = (days) => {
  return DateTime.now().plus({ days }).toJSDate();
};

export const ContextProvider = ({ children }) => {
  const [date, setDate] = useState(newDate());
  // const [employeeId, setEmployeeId] = useState(0);

  useEffect(() => {
    console.log(date, "contextprovider");
  }, [date]);

  return (
    <StateContext.Provider
      value={{
        date,
        setDate,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
