import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from "../types";
import BottomTabNavigator from "./bottom-tab-navigator";
import NotFoundScreen from "../screens/NotFoundScreen";

const Stack = createStackNavigator<RootStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
