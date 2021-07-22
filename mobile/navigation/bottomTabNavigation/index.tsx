// TODO refactor file by splitting into other files
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import Colors from "../../constants/Colors";
import { useColorScheme } from "../../hooks";
import { BottomTabParamList } from "../../types";
import AccountTabNavigator from "./AccountTabNavigator";
import FavoritesTabNavigator from "./FavoritesTabNavigator";
import FeedsTabNavigator from "./FeedsTabNavigator";
import ShoppingListTabNavigator from "./ShoppingListTabNavigator";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      // TODO change back to Home
      initialRouteName="Account"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        tabStyle: { backgroundColor: Colors[colorScheme].background },
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="Feeds"
        component={FeedsTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Favorites"
        component={FavoritesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="heart-outline" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="ShoppingList"
        component={ShoppingListTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-circle-outline" color={color} />
          ),
          title: "Shopping List",
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={AccountTabNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
