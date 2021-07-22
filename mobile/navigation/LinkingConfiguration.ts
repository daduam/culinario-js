import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Feeds: {
            screens: {
              FeedsScreen: "feeds",
            },
          },
          Favorites: {
            screens: {
              FavoritesScreen: "favorites",
            },
          },
          ShoppingList: {
            screens: {
              ShoppingListScreen: "shopping-list",
            },
          },
          Account: {
            screens: {
              AccountScreen: "account",
            },
          },
        },
      },
      Login: "auth/login",
      Register: "auth/register",
      NotFound: "*",
    },
  },
} as LinkingOptions;
