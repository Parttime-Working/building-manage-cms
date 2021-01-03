import { useCallback, useState } from "react";

import { backendService } from "../services/backendService";

export const useFetchUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userPage, setUserPage] = useState({
    total: 0,
    totalPages: 0,
    items: [],
  });

  const fetchUsers = useCallback(async (payload) => {
    setIsLoading(true);

    try {
      const { data } = await backendService.listUsers(payload);
      setUserPage(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      throw error;
    }
  }, []);

  return {
    userPage,
    fetchUsers,
    isLoading,
  };
};
