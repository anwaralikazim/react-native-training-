import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet,Alert } from 'react-native';

const PhotoCopierRecords = () => {
  const [isCleared, setIsCleared] = useState(false);
  const [problem, setProblem] = useState('');

  const handleSubmit = () => {
    if (problem.trim()) {
      Alert.alert('Problem Statement', problem);
    } else {
      Alert.alert('No Problem Provided', 'Please enter a problem statement.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>PhotoCopier Records</Text>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Student:</Text>
        <Text style={styles.value}>Anwar Ali</Text>
      </View>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Arid No:</Text>
        <Text style={styles.value}>2021-Arid-0159</Text>
      </View>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Remaining Dues:</Text>
        <Text style={styles.value}>Rs 0</Text>
      </View>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Cleared Status:</Text>
        <Switch value={isCleared} onValueChange={setIsCleared} />
        <Text style={styles.value}>{isCleared ? 'Cleared' : 'Not Cleared'}</Text>
      </View>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Items Not Paid For:</Text>
        <Text style={styles.value}>Pen, Print etc.</Text>
      </View>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Problem:</Text>
        <TextInput 
          style={styles.textInput}
          value={problem}
          onChangeText={setProblem}
          placeholder="Describe any problem here"
        />
      </View>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'lightgreen',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A90E2',
  },
  recordItem: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#fff',
  },
});

export default PhotoCopierRecords;
