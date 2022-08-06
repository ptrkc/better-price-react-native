import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function VolumeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Volume!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#000',
  },
});
