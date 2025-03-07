import { CalendarDateRangePicker } from "@/Components/date-range-picker";
import { PrintBasic } from "@/Components/PrintBasic";
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
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Separator } from "@radix-ui/react-select";

export default function Report({ reports }) {
  console.log(reports);

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
            <Select
              onValueChange={(val) => console.log(val)}
              defaultValue="day"
            >
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
            <CalendarDateRangePicker disabled={false} />
            <Button>Download</Button>
          </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-1">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <DataTable data={reports} columns={columns} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
