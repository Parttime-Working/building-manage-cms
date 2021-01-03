import { useCallback, useState } from "react";

import { backendService } from "../services/backendService";

export const useFetchUserByNo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});

  const fetchUserByNo = useCallback(async (payload) => {
    setIsLoading(true);

    try {
      const { data } = await backendService.getUserByNo(payload);
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      throw error;
    }
  }, []);

  return {
    user,
    fetchUserByNo,
    isLoading,
  };
};
