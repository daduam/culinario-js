import { StackHeaderProps } from "@react-navigation/stack";
import * as React from "react";
import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import Colors from "../constants/Colors";
import { useColorScheme } from "../hooks";

const ChefInformationHeader = ({ navigation, previous }: StackHeaderProps) => {
  const colors = Colors[useColorScheme()];

  return (
    <Appbar.Header
      style={{
        backgroundColor: colors.background,
        elevation: 0,
      }}
    >
      <View>
        <Text>Custom</Text>
      </View>
    </Appbar.Header>
  );
};

export default ChefInformationHeader;
