import { Link } from "@react-navigation/native";
import * as React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import layout from "../constants/Layout";
import { useAuth } from "../hooks";
import useColorScheme from "../hooks/useColorScheme";

const LoginScreen = () => {
  const { login } = useAuth();
  const colors = Colors[useColorScheme()];
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  return (
    // TODO move all forms to components/forms
    <View
      style={{
        backgroundColor: colors.background,
        minHeight: layout.window.height,
      }}
    >
      {/* TODO just flex view. remove vertical margin */}
      {/* TODO tabbing through form fields https://thekevinscott.com/tabbing-through-input-fields/ */}
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <View style={{ marginBottom: 40 }}>
          <Text style={{ color: colors.inputLabel, fontWeight: "bold" }}>
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            textContentType="emailAddress"
            keyboardType="email-address"
            style={{
              borderBottomColor: "#e9e9e9",
              borderBottomWidth: 2,
              fontSize: 18,
              color: colors.inputText,
            }}
          />
        </View>

        <View style={{ marginBottom: 40 }}>
          <Text style={{ color: colors.inputLabel, fontWeight: "bold" }}>
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            textContentType="password"
            style={{
              borderBottomColor: "#e9e9e9",
              borderBottomWidth: 2,
              fontSize: 18,
              // change with password visible
              fontWeight: "bold",
              letterSpacing: 5,
            }}
          />
        </View>

        <TouchableNativeFeedback
          onPress={async () => {
            if (!email || !password) {
              console.log(email, password);
              return;
            }
            await login(email, password);
          }}
        >
          <View
            style={{
              backgroundColor: colors.tint,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              elevation: 1,
            }}
          >
            <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
              Login
            </Text>
          </View>
        </TouchableNativeFeedback>

        <View
          style={{
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: colors.inputText }}>
            Don't have an account?{" "}
            <Link
              style={{
                color: colors.tint,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
              to="/auth/register"
            >
              Register
            </Link>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
