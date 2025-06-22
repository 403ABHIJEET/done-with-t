import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppLayout from "../layouts/AppLayout";

export default function HomeScreen({navigation}: any) {
  return (
    <AppLayout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Home Page!</Text>
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", },
  text: { fontSize: 24 },
});
