// import ApplicationLogo from "@/Components/ApplicationLogo";
// import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      {/* <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div> */}

      <div className="w-full max-w-sm">{children}</div>
    </div>
  );
}
