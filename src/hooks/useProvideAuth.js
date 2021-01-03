import { useCallback, useState } from "react";
import { useLocalStorage } from "react-use";

import { backendService } from "../services/backendService";
import { isNilOrEmpty } from "../utils/common";

export const useProvideAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser, removeCurrentUser] = useLocalStorage(
    "currentUser",
    null
  );

  const login = useCallback(
    async (payload) => {
      setIsLoading(true);

      try {
        const { data } = await backendService.login(payload);
        setCurrentUser(data);
        setIsLoading(false);
      } catch (error) {
        removeCurrentUser();
        setIsLoading(false);

        throw error;
      }
    },
    [setCurrentUser, removeCurrentUser]
  );

  const logout = useCallback(async () => {
    setIsLoading(true);

    try {
      await backendService.logout();
      removeCurrentUser();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      throw error;
    }
  }, [removeCurrentUser]);

  const isAuthenticated = useCallback(() => !isNilOrEmpty(currentUser), [
    currentUser,
  ]);

  return {
    login,
    logout,
    isLoading,
    isAuthenticated,
    currentUser,
  };
};
