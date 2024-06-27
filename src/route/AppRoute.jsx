import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";

export const AppRoute = () => {
  //
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/loginpage",
          element: <LoginPage />,
        },
        {
          path: "home",
          element: <HomePage />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};
