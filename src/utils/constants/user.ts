import { IUserContext } from "../../interfaces/user.interface";

export const USER_INITIAL_STATE: IUserContext["auth"] = {
  user: {
    role: "",
    username: "",
    id: -1,
  },
};
