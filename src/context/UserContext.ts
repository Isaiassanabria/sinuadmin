import { createContext } from "react";
import { IUserContext } from "../interfaces/user.interface";
import { USER_INITIAL_STATE } from "../utils/constants/user";

const UserContext = createContext<IUserContext>({
  auth: USER_INITIAL_STATE,
  setAuth: () => {},
  search: "",
  setSearch: () => {},
});

export default UserContext;
