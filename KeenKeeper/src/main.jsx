import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/homepage/HomePage";
import Stats from "./pages/stats/Stats";
import ErrorPage from "./pages/errorPage/ErrorPage";
import TimeLine from "./pages/timeline/TimeLine";
import FriendDetails from "./pages/homepage/friendDetailsPage/FriendDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
