import { MainLayout } from "@layouts/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, Categories, Products, AboutUs, Login, Register, Error } from "@pages/index";

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "products/:prefix",
          element: <Products />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
