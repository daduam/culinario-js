import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ShoppingListScreen from "../../screens/ShoppingListScreen";
import { ShoppingListParamList } from "../../types";

const Stack = createStackNavigator<ShoppingListParamList>();

const ShoppingListTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShoppingListScreen"
        component={ShoppingListScreen}
        options={{ headerTitle: "Shopping List" }}
      />
    </Stack.Navigator>
  );
};

export default ShoppingListTabNavigator;
