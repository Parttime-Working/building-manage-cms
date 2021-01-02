import { useCallback, useState } from "react";
import { useLocalStorage } from "react-use";

import { backendService } from "../services/backendService";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser, removeCurrentUser] = useLocalStorage(
    "currentUser",
    null
  );
  const [loginError, setLoginError] = useState(null);

  const login = useCallback(async (payload) => {
    setIsLoading(true);

    try {
      const { data } = await backendService.login(payload);
      setCurrentUser(data);
      setLoginError(null);
    } catch (error) {
      removeCurrentUser();
      setLoginError(error);
    }

    setIsLoading(false);
  }, []);

  return {
    login,
    isLoading,
    currentUser,
    loginError,
  };
};
