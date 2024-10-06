import React, { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { users } from "../../data/users.json";

type Props = {
  children: ReactNode;
};
type OnLoginProps = {
  username: string;
  password: string;
};
type OnRegisterProps = {
  username: string;
  password: string;
  repeatedPassword: string;
};

type AuthenticationContextType = {
  isAuthenticated: boolean;
  user: IUser | null;
  isLoading: boolean;
  onLogin: (data: OnLoginProps) => void;
  onRegister: (data: OnRegisterProps) => void;
  onLogout: () => void;
};

export const AuthenticationContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType
);

export const AuthenticationContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const localUser = await AsyncStorage.getItem("user");
      setUser(localUser ? JSON.parse(localUser) : null);
    };
    getUser();
  }, []);

  const onLogin = ({ username, password }: OnLoginProps) => {
    setIsLoading(true);
    users.find((user) => {
      if (user.username === username && user.password === password) {
        setUser(user);
        AsyncStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully");
      }
    });
    setIsLoading(false);
  };

  const onRegister = ({
    username,
    password,
    repeatedPassword,
  }: OnRegisterProps) => {
    setIsLoading(true);
    console.log(username, password, repeatedPassword);
    // setUser({ username });
    setIsLoading(false);
  };

  const onLogout = () => {
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
