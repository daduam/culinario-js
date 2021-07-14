import { Link } from "@react-navigation/native";
import * as React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import Colors from "../constants/Colors";
import layout from "../constants/Layout";
import { useRegisterMutation } from "../generated/graphql";
import { useAuth } from "../hooks";
import useColorScheme from "../hooks/useColorScheme";

type RegisterFormErrors = Record<string, string>;

const RegisterScreen = () => {
  const colors = Colors[useColorScheme()];
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  const { setLoginToken } = useAuth();
  const [register] = useRegisterMutation();
  const [errors, setErrors] = React.useState<RegisterFormErrors>();
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
            onChangeText={(text) => {
              setEmail(text);
              const fieldErrors = { ...errors };
              if (fieldErrors["email"]) {
                delete fieldErrors["email"];
                setErrors(fieldErrors);
              }
            }}
            ref={(inputRef) => {
              inputs["email"] = inputRef;
            }}
            onSubmitEditing={() => {
              inputs["password"]?.focus();
            }}
            blurOnSubmit={false}
            returnKeyType="next"
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
            ref={(inputRef) => {
              inputs["password"] = inputRef;
            }}
            onSubmitEditing={() => {
              inputs["password"]?.focus();
            }}
            blurOnSubmit={false}
            returnKeyType="next"
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
          {errors?.password && (
            <Text style={{ color: colors.tint, textTransform: "lowercase" }}>
              {errors.password}
            </Text>
          )}
        </View>

        <View style={{ marginBottom: 40 }}>
          <Text style={{ color: colors.inputLabel, fontWeight: "bold" }}>
            Confirm Password
          </Text>
          <TextInput
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              const fieldErrors = { ...errors };
              if (fieldErrors["confirmPassword"]) {
                delete fieldErrors["confirmPassword"];
                setErrors(fieldErrors);
              }
            }}
            ref={(inputRef) => {
              inputs["confirmPassword"] = inputRef;
            }}
            returnKeyType="done"
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
          {errors?.confirmPassword && (
            <Text style={{ color: colors.tint, textTransform: "lowercase" }}>
              {errors.confirmPassword}
            </Text>
          )}
        </View>

        <TouchableNativeFeedback
          onPress={async () => {
            Keyboard.dismiss();
            setIsSubmitting(true);
            const response = await register({
              variables: {
                input: {
                  email,
                  password,
                  confirmPassword,
                },
              },
            });
            // TODO general error situations. server doesn't seem to handle them
            if (response.data?.register.errors) {
              const formErrors: RegisterFormErrors = {};
              response.data.register.errors.map(({ field, message }) => {
                formErrors[field] = message;
              });
              setErrors(formErrors);
              setIsSubmitting(false);
            } else if (response.data?.register.data?.token) {
              await setLoginToken(response.data.register.data.token, email);
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
                Register
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
