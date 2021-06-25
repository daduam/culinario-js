import * as React from "react";
import { Button } from "react-native";

import { Text, View } from "../components/Themed";
import { useAuth } from "../hooks";

const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <View>
      <Text>Login</Text>
      <Button title="Login" onPress={login} />
    </View>
  );
};

export default LoginScreen;
