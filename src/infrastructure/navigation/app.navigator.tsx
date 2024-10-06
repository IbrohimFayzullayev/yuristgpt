import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

import NewChat from "../../features/chat/screens/chat.screen";

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={NewChat} />
  </Stack.Navigator>
);
