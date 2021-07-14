import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Router from "./navigation";
import { AuthProvider } from "./contexts/Auth";
import config from "./app.config";

const client = new ApolloClient({
  uri: config.extra.graphqlEndpoint,
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
