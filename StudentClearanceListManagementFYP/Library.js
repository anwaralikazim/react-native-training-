import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet,Alert } from 'react-native';

const LibraryRecords = () => {
  const [isReturned, setIsReturned] = useState(false);
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
      <Text style={styles.header}>Library Records</Text>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Student:</Text>
        <Text style={styles.value}>Anwar Ali</Text>
      </View>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Arid No:</Text>
        <Text style={styles.value}>2021-Arid-0159</Text>
      </View>

    

      <View style={styles.recordItem}>
        <Text style={styles.label}>Return Status:</Text>
        <Switch value={isReturned} onValueChange={setIsReturned} />
        <Text style={styles.value}>{isReturned ? 'Returned on Time' : 'Not Returned'}</Text>
      </View>

      <View style={styles.recordItem}>
        <Text style={styles.label}>Fine (if applicable):</Text>
        <Text style={styles.value}>Rs 0</Text>
        <Switch value={isCleared} onValueChange={setIsCleared} />
        <Text style={styles.value}>{isCleared ? 'Student is Cleared' : 'Pending'}</Text>
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
    color: 'Red',
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
  },
});

export default LibraryRecords;
