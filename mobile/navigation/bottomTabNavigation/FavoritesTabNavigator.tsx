import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import FavoritesScreen from "../../screens/FavoritesScreen";
import { FavoritesParamList } from "../../types";

const Stack = createStackNavigator<FavoritesParamList>();

const FavoritesTabNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{ headerTitle: "Favorites" }}
      />
    </Stack.Navigator>
  );
};

export default FavoritesTabNavigator;
