import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import FeedsScreen from "../../screens/FeedsScreen";
import { FeedsParamList } from "../../types";

const Stack = createStackNavigator<FeedsParamList>();

const FeedsTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FeedsScreen"
        component={FeedsScreen}
        options={{ headerTitle: "Feeds" }}
      />
    </Stack.Navigator>
  );
};

export default FeedsTabNavigator;
