import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

import { DataTable } from "@/components/tables/tourist/data-table";
import { columns } from "@/components/tables/tourist/columns";

export default function Tourist({ data }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Tourist
        </h2>
      }
      breadcrumb="Tourist"
      subBread="View All"
    >
      <Head title="Tourists" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <DataTable data={data} columns={columns} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
