import { IUserContext } from "../interfaces/user.interface";

export const falseUser: IUserContext["auth"] = {
  user: {
    username: "hdhumanez",
    id: 1,
    role: "admin",
  },
};
