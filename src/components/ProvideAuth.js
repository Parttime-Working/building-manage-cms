import { authContext } from "../contexts/authContext";
import { useProvideAuth } from "../hooks/useProvideAuth";

// Copy from https://usehooks.com/useAuth/
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
