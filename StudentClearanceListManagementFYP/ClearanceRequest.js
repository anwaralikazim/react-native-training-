import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClearanceRequest = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Clearance Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0C4DE',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
});

export default ClearanceRequest;
