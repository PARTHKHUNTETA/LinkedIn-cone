import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Error from "../components/Error/Error";
import Register from "../Pages/Register";
import Home from "../Pages/Home";

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
    element: <Home />,
    errorElement: <Error />,
  }
]);

export default router;
