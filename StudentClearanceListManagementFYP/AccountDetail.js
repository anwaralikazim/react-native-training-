import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Switch } from 'react-native';

const AccountDetails = () => {
  const [isCleared, setIsCleared] = useState(false);
  const [problem, setProblem] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Accounts Details</Text>
      </View>

      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>

      {/* Student Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Student:</Text> Haseeb
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.label}>Arid No:</Text> 2021-Arid-1234
        </Text>
      </View>

      {/* Table */}
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeaderText}>Semester</Text>
          <Text style={styles.tableHeaderText}>Pending</Text>
          <Text style={styles.tableHeaderText}>Cleared</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>Semester 8</Text>
          <Text style={styles.tableText}>Rs 0</Text>
          <Text style={styles.tableText}>Rs 50000</Text>
        </View>
      </View>

      {/* Clearance Toggle */}
      <View style={styles.clearanceContainer}>
        <Text style={styles.clearanceText}>Student is Cleared</Text>
        <Switch
          value={isCleared}
          onValueChange={(value) => setIsCleared(value)}
          thumbColor={isCleared ? '#5c7a9e' : '#ccc'}
        />
      </View>

      {/* Problem Input */}
      <Text style={styles.label}>Problem</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter any issues here"
        value={problem}
        onChangeText={(text) => setProblem(text)}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#5c7a9e',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: '#5c7a9e',
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  tableHeaderText: {
    fontWeight: 'bold',
  },
  tableText: {
    color: '#333',
  },
  clearanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  clearanceText: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: 'lightGreen',
    paddingVertical: 10,
    borderRadius: 20,
  },
  submitButtonText: {
    color: '#5c7a9e',
    fontWeight: 'bold',
  },
});

export default AccountDetails;
