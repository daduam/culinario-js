import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as React from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../constants/Colors";
import { useColorScheme } from "../hooks";

const AccountScreen = () => {
  const colors = Colors[useColorScheme()];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: colors.background,
      }}
    >
      {/* TODO this view could be a clickable header */}
      <TouchableNativeFeedback>
        <View
          style={{
            flexDirection: "row",
            padding: 20,
          }}
        >
          {/* should be an image view for user profile image */}
          <View
            style={{
              width: 50,
              height: 50,
              backgroundColor: colors.inputLabel,
              borderRadius: 25,
              borderWidth: 2,
              borderColor: colors.tint,
            }}
          />
          <View
            style={{
              flexGrow: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "playfair-display-bold",
                fontSize: 20,
                color: colors.appbarHeaderTitle,
              }}
            >
              Your Name
            </Text>
            <Text style={{ color: colors.inputLabel }}>
              Tap to view and edit info
            </Text>
          </View>
          {/* TODO what to use for icons? AntDesign? */}
          <Ionicons
            name="chevron-forward-outline"
            size={40}
            color={colors.inputLabel}
          />
        </View>
      </TouchableNativeFeedback>

      <FlatList
        data={
          [
            { text: "Home", icon: "home-outline" },
            { text: "Settings", icon: "settings-outline" },
            { text: "Saved", icon: "bookmark-outline" },
            { text: "Shopping list", icon: "list-circle-outline" },
            { text: "Create your own recipe", icon: "create-outline" },
            { text: "Logout", icon: "alert-circle-outline" },
          ] as AccountScreenButtonProps[]
        }
        keyExtractor={({ text }) => {
          return text.toLowerCase().split(" ").join("-");
        }}
        renderItem={({ item }) => <AccountScreenButton {...item} />}
        style={{ marginTop: 30 }}
      />
    </SafeAreaView>
  );
};

type AccountScreenButtonProps = {
  text: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
};

const AccountScreenButton = ({ text, icon }: AccountScreenButtonProps) => {
  const colors = Colors[useColorScheme()];

  return (
    <TouchableOpacity
      onPress={() => {
        console.log(text);
      }}
      activeOpacity={0.7}
    >
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 30,
          marginVertical: 10,
          paddingBottom: 10,
          alignItems: "center",
          borderBottomColor: colors.inputLabel,
          borderBottomWidth: 2,
        }}
      >
        <Ionicons name={icon} size={20} color={colors.inputLabel} />
        <Text
          style={{
            flexGrow: 1,
            marginHorizontal: 10,
            fontSize: 18,
            color: colors.appbarHeaderTitle,
            fontWeight: "500",
          }}
        >
          {text}
        </Text>
        <Ionicons
          name="chevron-forward-outline"
          size={20}
          color={colors.inputLabel}
        />
      </View>
    </TouchableOpacity>
  );
};

export default AccountScreen;
