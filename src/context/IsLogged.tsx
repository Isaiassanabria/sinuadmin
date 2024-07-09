import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

function IsLogged() {
  const { auth } = useAuth();

  if (auth && auth.user.role === "admin") {
    return <Navigate to="/dashboard" />;
  } else {
    return <Outlet />;
  }
}

export { IsLogged };
