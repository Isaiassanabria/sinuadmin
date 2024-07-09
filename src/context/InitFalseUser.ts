import { falseUser } from "./falseUser";
import UseAuth from "./useAuth";

const initFalseUser = () => {
  const { setAuth } = UseAuth();
  setAuth(falseUser);
};

const initLocalStorage = () => {
  window.localStorage.setItem("user", JSON.stringify(falseUser));
};

export { initFalseUser, initLocalStorage };
