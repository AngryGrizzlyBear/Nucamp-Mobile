import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function Loading() {
  return (
    <View style={styles.LoadingView}>
      <ActivityIndicator size="large" color="#5637DD" />
      <Text style={styles.LoadingText}>Loading. . .</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  LoadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  LoadingText: {
    color: "#5637DD",
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default Loading;
