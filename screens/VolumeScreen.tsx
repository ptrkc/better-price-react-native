import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const calculatePricePerLitter = (
  quantity: string,
  unit: string,
  price: string,
) => {
  const liters =
    unit === 'ml' ? parseFloat(quantity) / 1000 : parseFloat(quantity);
  const pricePerLiter = (parseFloat(price) / liters).toFixed(3);
  return pricePerLiter === 'NaN' ? '' : `$${pricePerLiter}`;
};

const ProductInputs = ({ units }: { units: Array<string> }) => {
  const [selectedUnit, setSelectedUnit] = useState(units[1]);
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
        Price per liter:{' '}
        {calculatePricePerLitter(quantity, selectedUnit, price)}
      </Text>
    </View>
  );
};

export default function VolumeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProductInputs units={['ml', 'l']} />
      <ProductInputs units={['ml', 'l']} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
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
