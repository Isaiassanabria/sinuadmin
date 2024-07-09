import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

function PrivateRoute() {
  const { auth } = useAuth();

  if (auth && auth.user.role === "admin") {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
}

export { PrivateRoute };
