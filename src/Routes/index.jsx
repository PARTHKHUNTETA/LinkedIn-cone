import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Error from "../components/Error/Error";
import Register from "../Pages/Register";
import HomeLoyout from "../layouts/HomeLoyout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <HomeLoyout />,
    errorElement: <Error />,
  }
]);

export default router;
