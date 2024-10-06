import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

// import { AccountScreen } from "../../features/account/screens/account.screen";
// import { LoginScreen } from "../../features/account/screens/login.screen";
// import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name="Main"
      component={() => (
        <>
          <Text>Account</Text>
        </>
      )}
    />
    {/* <Stack.Screen name="Login" component={() => null} />
    <Stack.Screen name="Register" component={() => null} /> */}
  </Stack.Navigator>
);
