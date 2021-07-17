import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { useAuth } from "../hooks";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";
import LinkingConfiguration from "./LinkingConfiguration";

const Router = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const { authData } = useAuth();

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
