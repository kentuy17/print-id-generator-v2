import { columns } from "@/Components/tables/event/columns";
import { DataTable } from "@/Components/tables/event/data-table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import React from "react";

const Index = ({ events }) => {
  console.log(events);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Event
        </h2>
      }
      breadcrumb="Event"
      subBread="View All"
    >
      <Head title="Events" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <DataTable data={events} columns={columns} />
            {/* <pre>{JSON.stringify(events, null, 2)}</pre> */}
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
