import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import AccountScreen from "../../screens/AccountScreen";
import { AccountParamList } from "../../types";

const Stack = createStackNavigator<AccountParamList>();

const AccountTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AccountTabNavigator;
