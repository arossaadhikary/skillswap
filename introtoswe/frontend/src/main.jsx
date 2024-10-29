  import * as React from "react";
  import * as ReactDOM from "react-dom/client";
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "./App";
  import Record from "./components/Record";
  import RecordList from "./components/RecordList";
  import Login from "./components/Login";       // Import the Login component
  import Register from "./components/Register"; // Import the Register component
  import "./index.css";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <RecordList />,
        },
        {
          path: "/create",
          element: <Record />,
        },
        {
          path: "/edit/:id",
          element: <Record />,
        },
        {
          path: "/login",    // Add Login route
          element: <Login />,
        },
        {
          path: "/register", // Add Register route
          element: <Register />,
        },
      ],
    },
  ]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );