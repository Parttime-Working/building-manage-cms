// Copy from https://usehooks.com/useAuth/
import { useContext } from "react";
import { authContext } from "../contexts/authContext";

export const useAuth = () => {
  return useContext(authContext);
};
