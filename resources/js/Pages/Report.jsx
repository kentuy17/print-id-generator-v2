import { CalendarDateRangePicker } from "@/Components/date-range-picker";
import { columns } from "@/Components/tables/reports/columns";
import { DataTable } from "@/Components/tables/reports/data-table";
import { Button } from "@/Components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { useStateContext } from "@/context/ContextProvider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";
import { DownloadIcon, Search } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { router } from "@inertiajs/react";

export default function Report({ reports }) {
  const [selected, setSelected] = useState("day");
  const [disabled, setDisabled] = useState(false);
  const { reportDate, setReportDate } = useStateContext();
  const [filteredReports, setFilteredReports] = useState(reports);

  const handleSelectChange = (val) => setSelected(val);

  const handleSearch = () => {
    axios
      .get(
        route("report.search", {
          start_date: moment(reportDate.from).format("YYYY-MM-DD"),
          end_date: moment(reportDate.to).format("YYYY-MM-DD"),
          filter_by: selected,
        })
      )
      .then((resp) => {
        console.log(resp);

        setFilteredReports(resp.data);
      });
  };

  const handleDownload = () => {
    // TODO: Implement download functionality
    console.log("Download");
    router.get("/report/export", {
      start_date: moment(reportDate.from).format("YYYY-MM-DD"),
      end_date: moment(reportDate.to).format("YYYY-MM-DD"),
      filter_by: selected,
    });
  };

  useEffect(() => {
    setDisabled(selected !== "day");
  }, [selected]);

  useEffect(() => {
    console.log(reportDate);
  }, [reportDate]);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Reports
        </h2>
      }
      breadcrumb="Reports"
      subBread="Extract data"
    >
      <Head title="Reports" />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between lg:px-6">
          <div className="flex items-center space-x-2">
            <span>Filter by: </span>
            <Select onValueChange={handleSelectChange} defaultValue="day">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Day</SelectItem>
                <SelectItem value="week">Week</SelectItem>
                <SelectItem value="month">Month</SelectItem>
                <SelectItem value="year">Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarDateRangePicker
              disabled={disabled}
              setReportDate={setReportDate}
            />
            <Button size="icon" onClick={() => handleSearch()}>
              <Search />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleDownload()}
              disabled={true}
            >
              <DownloadIcon />
            </Button>
          </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-1">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <DataTable data={filteredReports} columns={columns} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
