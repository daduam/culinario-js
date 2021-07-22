import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShoppingListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
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

export default ShoppingListScreen;
