import { StackHeaderProps } from "@react-navigation/stack";
import * as React from "react";
import { Appbar } from "react-native-paper";
import Colors from "../constants/Colors";
import { useColorScheme } from "../hooks";

const AuthScreenHeader = ({
  title,
  navigation,
  previous,
}: StackHeaderProps & { title: string }) => {
  const colors = Colors[useColorScheme()];

  return (
    <Appbar.Header
      style={{
        backgroundColor: colors.background,
        elevation: 0,
      }}
    >
      {previous && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content
        title={title}
        titleStyle={{
          fontFamily: "playfair-display-bold",
          color: colors.appbarHeaderTitle,
          fontSize: 25,
        }}
      />
    </Appbar.Header>
  );
};

export default AuthScreenHeader;
