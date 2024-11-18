import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const students = [
  { id: '1', name: 'Haseeb', date: '7/10/2024', discipline: 'Bs CS', status: 'Clear' },
  { id: '2', name: 'Faraz', date: '17/10/2024', discipline: 'Bs IT', status: 'Clear' },
  { id: '3', name: 'Ahmed', date: '7/10/2024', discipline: 'Bs IT', status: 'Clear' },
  { id: '4', name: 'Waris', date: '8/11/2024', discipline: 'Bs CS', status: 'Clear' },
  { id: '5', name: 'Asif', date: '27/11/2024', discipline: 'Bs CS', status: 'Clear' },
  { id: '6', name: 'Ibraheem', date: '18/11/2024', discipline: 'Bs IT', status: 'Clear' },
  { id: '7', name: 'Mudaisr', date: '7/12/2024', discipline: 'Bs IT', status: 'Clear' },
  { id: '8', name: 'Hammad', date: '17/12/2024', discipline: 'Bs IT', status: 'Clear' },
  { id: '9', name: 'Zeeshan', date: '7/12/2024', discipline: 'Bs CS', status: 'Clear' },
  { id: '10', name: 'Sheraz', date: '8/10/2024', discipline: 'Bs CS', status: 'Clear' },
  { id: '11', name: 'Noor Ul Islam', date: '27/11/2024', discipline: 'Bs IT', status: 'Clear' },
  { id: '12', name: 'Tayyab', date: '18/09/2024', discipline: 'Bs IT', status: 'Clear' },
  // Add more student data here
];

const ClearStudent = () => {
  const [search, setSearch] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredStudents(students.filter(student =>
      student.name.toLowerCase().includes(text.toLowerCase())
    ));
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.id}</Text>
      <Text style={styles.cell}>{item.name}</Text>
      <Text style={styles.cell}>{item.date}</Text>
      <Text style={styles.cell}>{item.discipline}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{item.status}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cleared Students</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Students"
        value={search}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredStudents}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"lightgreen"
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export default ClearStudent;
