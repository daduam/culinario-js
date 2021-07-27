import { Ionicons } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Colors from "../constants/Colors";
import { useColorScheme } from "../hooks";

enum ActiveTabType {
  favorites,
  recipes,
  following,
}

const ChefInformationScreen = () => {
  const colors = Colors[useColorScheme()];
  // const [activeTab, setActiveTab] = React.useState(ActiveTabType.favorites);

  return (
    <SafeAreaView style={{ backgroundColor: colors.background }}>
      <View
        style={{
          padding: 20,
          borderBottomColor: colors.inputLabel,
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: colors.inputLabel,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: colors.tint,
            alignSelf: "center",
          }}
        />
        <Text
          style={{
            marginVertical: 10,
            fontFamily: "playfair-display-bold",
            fontSize: 20,
            textAlign: "center",
            color: colors.appbarHeaderTitle,
          }}
        >
          Your name
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{ textAlign: "center", color: colors.tint, fontSize: 20 }}
            >
              500
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="people-outline"
                size={20}
                color={colors.inputLabel}
              />
              <Text style={{ color: colors.inputLabel, marginLeft: 2 }}>
                Following
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{ textAlign: "center", color: colors.tint, fontSize: 20 }}
            >
              500
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="heart-outline"
                size={20}
                color={colors.inputLabel}
              />
              <Text style={{ color: colors.inputLabel, marginLeft: 2 }}>
                Favorites
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{ textAlign: "center", color: colors.tint, fontSize: 20 }}
            >
              500
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="create-outline"
                size={20}
                color={colors.inputLabel}
              />
              <Text style={{ color: colors.inputLabel, marginLeft: 2 }}>
                Recipes
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomColor: colors.inputLabel,
            borderBottomWidth: 1,
          }}
        >
          <TouchableNativeFeedback
            onPress={() => {
              setActiveTab(ActiveTabType.favorites);
            }}
          >
            <View
              style={[
                { padding: 20, marginBottom: -1.5 },
                activeTab === ActiveTabType.favorites && {
                  borderBottomColor: colors.tint,
                  borderBottomWidth: 2,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  color:
                    activeTab === ActiveTabType.favorites
                      ? colors.tint
                      : colors.appbarHeaderTitle,
                }}
              >
                Favorites
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => {
              setActiveTab(ActiveTabType.recipes);
            }}
          >
            <View
              style={[
                { padding: 20, marginBottom: -1.5 },
                activeTab === ActiveTabType.recipes && {
                  borderBottomColor: colors.tint,
                  borderBottomWidth: 2,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  color:
                    activeTab === ActiveTabType.recipes
                      ? colors.tint
                      : colors.appbarHeaderTitle,
                }}
              >
                Recipes
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            onPress={() => {
              setActiveTab(ActiveTabType.following);
            }}
          >
            <View
              style={[
                { padding: 20, marginBottom: -1.5 },
                activeTab === ActiveTabType.following && {
                  borderBottomColor: colors.tint,
                  borderBottomWidth: 2,
                },
              ]}
            >
              <Text
                style={{
                  fontSize: 16,
                  color:
                    activeTab === ActiveTabType.following
                      ? colors.tint
                      : colors.appbarHeaderTitle,
                }}
              >
                Following
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View> 
      </View> */}
    </SafeAreaView>
  );
};

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favorites" component={TabComponent} />
      <Tab.Screen name="Recipes" component={TabComponent} />
      <Tab.Screen name="Following" component={TabComponent} />
    </Tab.Navigator>
  );
}

const TabComponent = () => {
  return (
    <View>
      <Text>Screen</Text>
    </View>
  );
};

export default ChefInformationScreen;
