import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import calculatePricePerThousand from '../utils/calculatePricePerThousand';
import ProductInputs from '../components/ProductInputs';

export default function WeightScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProductInputs
        units={['g', 'kg']}
        calcFunction={calculatePricePerThousand}
        finalUnit="kilo"
      />
      <ProductInputs
        units={['g', 'kg']}
        calcFunction={calculatePricePerThousand}
        finalUnit="kilo"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    overflow: 'visible',
  },
});
