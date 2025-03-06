import { PrintBasic } from "@/Components/PrintBasic";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Separator } from "@radix-ui/react-select";

export default function Template({ data }) {
  console.log(data);

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Template
        </h2>
      }
      breadcrumb='ID Template'
      subBread=''
    >
      <Head title="Template" />

      <div className="max-w-7xl space-y-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              ID Templates
            </h2>
            <p className="text-sm text-muted-foreground">
              Choose from the following template to use in printing the ID.
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-5">
          <PrintBasic templates={data} />
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
