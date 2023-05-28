import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Fieldset = ({ legend, children }) => (
  <View style={styles.fieldset}>
    <Text style={styles.legend}>{legend}</Text>
    {children}
  </View>
);

const styles = StyleSheet.create({
  fieldset: {
    borderWidth: 1,
    // borderColor: '#ccc',
    backgroundColor: '#FFFFFF',

    borderRadius: 4,
    padding: 16,
    marginBottom: 16,
  },
  legend: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Fieldset;
