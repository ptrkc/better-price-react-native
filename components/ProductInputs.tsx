import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export default function ProductInputs({
  units,
  calcFunction,
  finalUnit,
}: {
  units: Array<string>;
  finalUnit: string;
  calcFunction: Function;
}) {
  const [selectedUnit, setSelectedUnit] = useState(units[0]);
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  return (
    <View style={styles.card}>
      <Text style={styles.text}>Quantity:</Text>
      <View style={styles.row}>
        <TextInput
          value={quantity}
          onChangeText={value => setQuantity(value)}
          keyboardType="decimal-pad"
          style={styles.input}
        />
        {units.map(unit => (
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
      <Text style={styles.text}>Price:</Text>
      <TextInput
        value={price}
        onChangeText={value => setPrice(value)}
        keyboardType="decimal-pad"
        style={styles.input}
      />
      <Text style={styles.text}>
        {`Price per ${finalUnit}: ${calcFunction(
          quantity,
          selectedUnit,
          price,
        )}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 8,
    padding: 10,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  row: {
    width: ' 100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 6,
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
    borderRadius: 6,
  },
});
