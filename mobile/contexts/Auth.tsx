import * as React from "react";
import { AuthContextData, AuthData } from "../types";

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = React.useState<AuthData>();
  const [loading, setLoading] = React.useState(true);

  const login = async () => {
    // TODO call some authService that interacts with backend
    // _authData = await authService.login(email, password);
    const _authData: AuthData = {
      token: "jfklajdsfojewafajdsklfjdsaklf",
      email: "hi@example.com",
      name: "Example Hi",
    };

    // setLoading(false);
    setAuthData(_authData);
  };

  const logout = () => {
    // TODO call some authService to invalidate login token
    setAuthData(undefined);
  };

  return (
    <AuthContext.Provider value={{ authData, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
