import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Router from "./navigation";
import { AuthProvider } from "./contexts/Auth";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthProvider>
          <PaperProvider>
            <Router colorScheme={colorScheme} />
            <StatusBar />
          </PaperProvider>
        </AuthProvider>
      </SafeAreaProvider>
    );
  }
}
