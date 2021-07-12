import * as React from "react";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from "react-native";
import { Appbar } from "react-native-paper";
import { Link } from "@react-navigation/native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import layout from "../constants/Layout";
import { useAuth } from "../hooks";

const RegisterScreen = () => {
  const { login } = useAuth();
  const colors = Colors[useColorScheme()];
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();

  return (
    // TODO move all forms to components/forms
    <View
      style={{
        backgroundColor: colors.background,
        minHeight: layout.window.height,
      }}
    >
      <Appbar.Header
        style={{
          backgroundColor: colors.background,
          elevation: 0,
        }}
      >
        <Appbar.Content
          title="Create an account"
          titleStyle={{
            fontFamily: "playfair-display-bold",
            color: colors.appbarHeaderTitle,
            fontSize: 30,
          }}
        />
      </Appbar.Header>

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

        <View style={{ marginBottom: 40 }}>
          <Text style={{ color: colors.inputLabel, fontWeight: "bold" }}>
            Confirm Password
          </Text>
          <TextInput
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            secureTextEntry
            textContentType="password"
            style={{
              borderBottomColor: "#e9e9e9",
              borderBottomWidth: 2,
              fontSize: 18,
              // change with password visible icon
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
              Register
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
            Already have an account?{" "}
            <Link
              style={{
                color: colors.tint,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
              to="/auth/login"
            >
              Login
            </Link>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;
