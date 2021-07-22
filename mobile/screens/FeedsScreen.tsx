import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const FeedsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feeds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FeedsScreen;
