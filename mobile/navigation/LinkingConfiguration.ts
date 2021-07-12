/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

// TODO understand and fix/extend whatever this file does
// the links above are a good starting point
export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two",
            },
          },
          TabThree: {
            screens: {
              TabThreeScreen: "three",
            },
          },
          TabFour: {
            screens: {
              TabFourScreen: "four",
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
