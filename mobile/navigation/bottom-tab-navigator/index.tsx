/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// TODO refactor file by splitting into other files
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import TabOneScreen from "../../screens/TabOneScreen";
import TabTwoScreen from "../../screens/TabTwoScreen";
import TabThreeScreen from "../../screens/TabThreeScreen";
import TabFourScreen from "../../screens/TabFourScreen";
import {
  BottomTabParamList,
  TabOneParamList,
  TabTwoParamList,
  TabThreeParamList,
  TabFourParamList,
} from "../../types";
import { View } from "react-native";
import { Text } from "react-native";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        tabStyle: { backgroundColor: Colors[colorScheme].background },
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home-sharp" color={color} />
          ),
          // TODO this could be a component for this and all other tabs
          tabBarLabel: ({ focused, color }) => (
            <View
              style={{
                borderBottomColor: focused
                  ? Colors[colorScheme].tint
                  : Colors[colorScheme].background,
                borderBottomWidth: 2,
              }}
            >
              <Text style={{ color, fontSize: 10 }}>Feed</Text>
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="heart-outline" color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View
              style={{
                borderBottomColor: focused
                  ? Colors[colorScheme].tint
                  : Colors[colorScheme].background,
                borderBottomWidth: 2,
              }}
            >
              <Text style={{ color, fontSize: 10 }}>Favorites</Text>
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-outline" color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View
              style={{
                borderBottomColor: focused
                  ? Colors[colorScheme].tint
                  : Colors[colorScheme].background,
                borderBottomWidth: 2,
              }}
            >
              <Text style={{ color, fontSize: 10 }}>Shopping List</Text>
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="TabFour"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="settings-outline" color={color} />
          ),
          tabBarLabel: ({ focused, color }) => (
            <View
              style={{
                borderBottomColor: focused
                  ? Colors[colorScheme].tint
                  : Colors[colorScheme].background,
                borderBottomWidth: 2,
              }}
            >
              <Text style={{ color, fontSize: 10 }}>Settings</Text>
            </View>
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

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
// TODO move this section to files
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="TabThreeScreen"
        component={TabThreeScreen}
        options={{ headerTitle: "Tab Three Title" }}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="TabFourScreen"
        component={TabFourScreen}
        options={{ headerTitle: "Tab Four Title" }}
      />
    </TabFourStack.Navigator>
  );
}
