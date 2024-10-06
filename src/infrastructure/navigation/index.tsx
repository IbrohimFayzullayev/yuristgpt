import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./accaunt.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Text } from "react-native";

const Stack = createStackNavigator();

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
