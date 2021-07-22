import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import Constants from "expo-constants";
import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  Text,
  TouchableNativeFeedback,
  View,
  ViewStyle,
} from "react-native";
import Colors from "../constants/Colors";
import { useAuth, useColorScheme } from "../hooks";
import { BottomTabParamList } from "../types";

type AccountScreenProps = {
  navigation: StackNavigationProp<BottomTabParamList, "Account">;
};

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const colors = Colors[useColorScheme()];
  const { removeLoginToken } = useAuth();

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

      <ScrollView style={{ marginTop: 10 }}>
        <AccountScreenButton
          text="Home"
          icon="home-outline"
          onPress={() => {
            navigation.navigate("Feeds");
          }}
        />

        <AccountScreenButton
          text="Saved recipes"
          icon="bookmark-outline"
          onPress={() => {
            navigation.navigate("Favorites");
          }}
        />

        <AccountScreenButton
          text="View shopping list"
          icon="list-circle-outline"
          onPress={() => {
            navigation.navigate("ShoppingList");
          }}
        />

        <AccountScreenButton
          text="Create your own recipe"
          icon="bookmark-outline"
          style={{ borderBottomWidth: 1, borderBottomColor: colors.inputLabel }}
        />

        <AccountScreenButton
          text="Update preferences"
          icon="settings-outline"
        />

        <AccountScreenButton
          text="Logout"
          icon="alert-circle-outline"
          onPress={async () => {
            await removeLoginToken();
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

type AccountScreenButtonProps = {
  text: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  style?: StyleProp<ViewStyle>;
  onPress?: React.ComponentProps<typeof TouchableNativeFeedback>["onPress"];
};

const AccountScreenButton = ({
  text,
  icon,
  style,
  onPress,
}: AccountScreenButtonProps) => {
  const colors = Colors[useColorScheme()];

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          style,
          {
            flexDirection: "row",
            paddingVertical: 10,
            paddingHorizontal: 20,
            alignItems: "center",
          },
        ]}
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
      </View>
    </TouchableNativeFeedback>
  );
};

export default AccountScreen;
