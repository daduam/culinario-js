import { StackHeaderProps } from "@react-navigation/stack";
import * as React from "react";
import { Appbar } from "react-native-paper";
import Colors from "../constants/Colors";
import { useColorScheme } from "../hooks";

const ScreenHeader = ({
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
      {previous && (
        <Appbar.BackAction
          size={20}
          color={colors.appbarHeaderTitle}
          onPress={navigation.goBack}
        />
      )}
      <Appbar.Content
        title={title}
        titleStyle={{
          fontFamily: "playfair-display-bold",
          color: colors.appbarHeaderTitle,
          fontSize: 20,
        }}
      />
    </Appbar.Header>
  );
};

export default ScreenHeader;
