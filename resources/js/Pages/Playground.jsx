import { PrintBasic } from "@/Components/PrintBasic";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Playground() {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Playground
        </h2>
      }
    >
      <Head title="Playground" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
          <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
            <PrintBasic />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
