import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import LinkingConfiguration from "./LinkingConfiguration";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import { useAuth } from "../hooks";
import { Text, View } from "../components/Themed";

const Router = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const { authData, loading } = useAuth();

  // TODO fix this. loads forever
  // if (loading) {
  //   return (
  //     <View>
  //       <Text>Loading</Text>
  //     </View>
  //   );
  // }

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {/* TODO OnboardingStack for when app is first installed */}
      {authData?.token ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;
