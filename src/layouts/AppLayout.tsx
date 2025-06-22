// src/components/AppLayout.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from '../components/navbar/Navbar';

export default function AppLayout({ children, navigation }: any) {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  body: { flex: 1 },
});
