export interface IUser {
  username: string;
  role: "user" | "admin";
}

export interface IUserContext {
  auth: {
    user: {
      id: number;
      username: string;
      role: string;
    };
  };
  setAuth: (auth: IUserContext["auth"]) => void;
  search: string;
  setSearch: (search: string) => void;
}
