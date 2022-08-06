import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export default function VolumeScreen() {
  const [selectedUnit, setSelectedUnit] = useState('l');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Volume!</Text>
      <View style={styles.row}>
        <TextInput keyboardType="decimal-pad" style={styles.input} />
        {['l', 'ml'].map(unit => (
          <TouchableOpacity
            key={unit}
            onPress={() => setSelectedUnit(unit)}
            style={[styles.button, selectedUnit === unit && styles.selected]}>
            <Text
              style={[
                styles.buttonLabel,
                selectedUnit === unit && styles.selectedLabel,
              ]}>
              {unit}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput keyboardType="decimal-pad" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    width: ' 100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 4,
    backgroundColor: 'oldlace',
    minWidth: '15%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: 'coral',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: 'coral',
  },
  selectedLabel: {
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  input: {
    fontSize: 20,
    width: '60%',
    color: '#000',
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
  },
});
