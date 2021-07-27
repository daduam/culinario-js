import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import ScreenHeader from "../components/ScreenHeader";
import LoginScreen from "../screens/LoginScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { AuthStackParamList } from "../types";

const Stack = createStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          header: (props) => <ScreenHeader title="Login" {...props} />,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          header: (props) => (
            <ScreenHeader title="Create an account" {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
