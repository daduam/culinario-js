import { Link } from "@react-navigation/native";
import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
  ActivityIndicator,
} from "react-native";
import Colors from "../constants/Colors";
import layout from "../constants/Layout";
import { useLoginMutation } from "../generated/graphql";
import { useAuth, useColorScheme } from "../hooks";

// TODO server FieldError uses type String! for field key
// need to change that to use this union for field
// type LoginFormErrors = Record<"email" | "password", string>;
type LoginFormErrors = Record<string, string>;

const LoginScreen = () => {
  const { setLoginToken } = useAuth();
  const colors = Colors[useColorScheme()];
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [login] = useLoginMutation();
  const [errors, setErrors] = React.useState<LoginFormErrors>();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const inputs: Record<string, TextInput | null> = {};

  return (
    // TODO move all forms to components/forms
    <View
      style={{
        backgroundColor: colors.background,
        minHeight: layout.window.height,
      }}
    >
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
            onChangeText={(text) => {
              setEmail(text);
              const fieldErrors = { ...errors };
              if (fieldErrors["email"]) {
                delete fieldErrors["email"];
                setErrors(fieldErrors);
              }
            }}
            ref={(input) => {
              inputs["email"] = input;
            }}
            onSubmitEditing={() => {
              inputs["password"]?.focus();
            }}
            blurOnSubmit={false} // change with password visible icon button
            returnKeyType={"next"}
            textContentType="emailAddress"
            keyboardType="email-address"
            style={{
              borderBottomColor: "#e9e9e9",
              borderBottomWidth: 2,
              fontSize: 18,
              color: colors.inputText,
            }}
          />
          {errors?.email && (
            <Text style={{ color: colors.tint, textTransform: "lowercase" }}>
              {errors.email}
            </Text>
          )}
        </View>

        <View style={{ marginBottom: 40 }}>
          <Text style={{ color: colors.inputLabel, fontWeight: "bold" }}>
            Password
          </Text>
          <TextInput
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              const fieldErrors = { ...errors };
              if (fieldErrors["password"]) {
                delete fieldErrors["password"];
                setErrors(fieldErrors);
              }
            }}
            ref={(input) => {
              inputs["password"] = input;
            }}
            returnKeyType={"done"}
            secureTextEntry
            textContentType="password"
            style={{
              borderBottomColor: "#e9e9e9",
              borderBottomWidth: 2,
              fontSize: 18,
              // change with password visible icon button
              fontWeight: "bold",
              letterSpacing: 5,
            }}
          />
          {errors?.password && (
            <Text style={{ color: colors.tint, textTransform: "lowercase" }}>
              {errors.password}
            </Text>
          )}
        </View>

        <TouchableNativeFeedback
          onPress={async () => {
            Keyboard.dismiss();
            setIsSubmitting(true);
            // TODO client side validation
            const response = await login({
              variables: {
                input: {
                  email,
                  password,
                },
              },
            });
            // TODO general error situations. server doesn't seem to handle them
            if (response.data?.login.errors) {
              const formErrors: LoginFormErrors = {};
              response.data.login.errors.map(({ field, message }) => {
                formErrors[field] = message;
              });
              setErrors(formErrors);
              setIsSubmitting(false);
            } else if (response.data?.login.data?.token) {
              await setLoginToken(response.data?.login.data.token, email);
            }
          }}
          disabled={isSubmitting}
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
            {isSubmitting ? (
              <ActivityIndicator size="small" color={colors.background} />
            ) : (
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Login
              </Text>
            )}
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
