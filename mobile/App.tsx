import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./contexts/Auth";
import { useCachedResources } from "./hooks";
import { useColorScheme } from "./hooks";
import Router from "./navigation";

const client = new ApolloClient({
  uri: Constants.manifest.extra?.graphqlEndpoint,
  cache: new InMemoryCache(),
});

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <AuthProvider>
            <PaperProvider>
              <Router colorScheme={colorScheme} />
              <StatusBar />
            </PaperProvider>
          </AuthProvider>
        </SafeAreaProvider>
      </ApolloProvider>
    );
  }
}
