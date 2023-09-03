import { createContext } from "react";

const AuthContext = createContext({
  authStatus: false,
  setAuthStatus: () => {},
});

export const AuthProvider = AuthContext.Provider;
export default AuthContext;
