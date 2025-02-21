import { Navigate, createBrowserRouter } from "react-router-dom";
import Page from "./Layouts/oldAuthenticatedLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
    ],
  },
]);

export default router;
