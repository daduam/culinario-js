import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ChefInformationHeader from "../../components/ChefInformationHeader";
import AccountScreen from "../../screens/AccountScreen";
import ChefInformationScreen from "../../screens/ChefInformationScreen";
import { AccountParamList } from "../../types";

const Stack = createStackNavigator<AccountParamList>();

const AccountTabNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="AccountScreen">
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChefInformation"
        component={ChefInformationScreen}
        options={{
          header: (props) => <ChefInformationHeader {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default AccountTabNavigator;
