import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./protectedRoute";
import Login from "../pages/auth/login";
import SignUp from "../pages/auth/signup";
import Logout from "../pages/auth/logout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Movement from "../pages/movement/movement";

const Routes = () => {

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
        path: "/",
        element: <Dashboard></Dashboard>,
        },
        {
        path: "/deposit",
        element: <Movement movementType="d"></Movement>,
        },
        {
            path: "/withdraw",
            element: <Movement movementType="w"></Movement>,
        },
        {
          path: "/profile",
          element: <div>User Profile</div>,
        },
        {
          path: "/logout",
          element: <Logout></Logout>,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/signup",
      element: <SignUp></SignUp>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForNotAuthenticatedOnly,
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
