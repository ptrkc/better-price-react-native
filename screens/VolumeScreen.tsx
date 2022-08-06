import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import calculatePricePerThousand from '../utils/calculatePricePerThousand';
import ProductInputs from '../components/ProductInputs';

export default function VolumeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProductInputs
        units={['mL', 'L']}
        calcFunction={calculatePricePerThousand}
        finalUnit="liter"
      />
      <ProductInputs
        units={['mL', 'L']}
        calcFunction={calculatePricePerThousand}
        finalUnit="liter"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
