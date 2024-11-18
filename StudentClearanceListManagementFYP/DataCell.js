import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const DataCellScreen = () => {
  const [problem, setProblem] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Data Cell</Text>
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
          <Text style={styles.tableHeaderText}>Criteria</Text>
          <Text style={styles.tableHeaderText}>Status</Text>
          <Text style={styles.tableHeaderText}>Issue</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>Courses passed</Text>
          <Text style={styles.tableText}>Ok</Text>
          <Text style={styles.tableText}>Subjects not cleared</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>CGPA (>=2.5)</Text>
          <Text style={styles.tableText}>Ok</Text>
          <Text style={styles.tableText}>CGPA is low</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>Project Report</Text>
          <Text style={styles.tableText}>Ok</Text>
          <Text style={styles.tableText}>Not Submitted</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableText}>Softcopy</Text>
          <Text style={styles.tableText}>Ok</Text>
          <Text style={styles.tableText}>Not Submitted</Text>
        </View>
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
    backgroundColor: '#e6e9ef',
    paddingVertical: 10,
    borderRadius: 20,
  },
  submitButtonText: {
    color: '#5c7a9e',
    fontWeight: 'bold',
  },
});

export default DataCellScreen;
