import * as React from "react";
import * as SecureStore from "expo-secure-store";

import { AuthContextData, AuthData } from "../types";

export const AuthContext = React.createContext<AuthContextData>(
  {} as AuthContextData
);

const AUTH_DATA_KEY = "AUTH_DATA";

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = React.useState<AuthData>();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadStorageData();
  }, []);

  const loadStorageData = async (): Promise<void> => {
    try {
      const authDataSerialized = await SecureStore.getItemAsync(AUTH_DATA_KEY);
      if (authDataSerialized) {
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    // TODO call some authService that interacts with backend
    // _authData = await authService.login(email, password);
    // or use graphql mutation
    const _authData: AuthData = {
      token: "jfklajdsfojewafajdsklfjdsaklf",
      email: "hi@example.com",
      name: "Example Hi",
    };

    setAuthData(_authData);

    await SecureStore.setItemAsync(AUTH_DATA_KEY, JSON.stringify(_authData));
  };

  const logout = async () => {
    // TODO call some authService to invalidate login token
    setAuthData(undefined);

    await SecureStore.deleteItemAsync(AUTH_DATA_KEY);
  };

  return (
    <AuthContext.Provider value={{ authData, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
